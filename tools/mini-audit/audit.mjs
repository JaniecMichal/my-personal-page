#!/usr/bin/env node
/**
 * Mini-audit: one printable A4 page (Polish) per website, for local outreach.
 *
 *   node audit.mjs targets.csv                 # CSV with columns: name,url[,notes]
 *   node audit.mjs --url https://… --name "…"  # a single site
 *   options: --no-lighthouse (faster, skips scores)
 *            --report (for existing clients: "Raport strony" heading, neutral footer, no sales pitch)
 *
 * For each site: a phone screenshot (Playwright + local Chrome), Lighthouse mobile scores
 * (same engine as PageSpeed Insights, no API key needed), a set of plain checks, the top 3
 * problems in plain Polish, and Michał's contact with a QR code. Output: out/<slug>.pdf plus
 * out/summary.csv to paste into the lead sheet.
 */
import { appendFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import * as chromeLauncher from "chrome-launcher";
import lighthouse from "lighthouse";
import { chromium } from "playwright-core";
import QRCode from "qrcode";

const here = dirname(fileURLToPath(import.meta.url));
const OUT = join(here, "out");
const config = JSON.parse(readFileSync(join(here, "config.json"), "utf8"));
const YEAR = new Date().getFullYear();
const TODAY = new Date().toLocaleDateString("pl-PL", { day: "numeric", month: "long", year: "numeric" });

// ---------- input ----------

function parseCsv(text) {
	const rows = [];
	for (const line of text.split(/\r?\n/)) {
		if (!line.trim()) continue;
		const cells = [];
		let cur = "";
		let quoted = false;
		for (let i = 0; i < line.length; i++) {
			const ch = line[i];
			if (ch === '"' && line[i + 1] === '"' && quoted) {
				cur += '"';
				i++;
			} else if (ch === '"') quoted = !quoted;
			else if (ch === "," && !quoted) {
				cells.push(cur);
				cur = "";
			} else cur += ch;
		}
		cells.push(cur);
		rows.push(cells.map((c) => c.trim()));
	}
	const [header, ...data] = rows;
	return data.map((r) => Object.fromEntries(header.map((h, i) => [h.toLowerCase(), r[i] ?? ""])));
}

function readTargets(argv) {
	const flag = (name) => {
		const i = argv.indexOf(name);
		return i >= 0 ? argv[i + 1] : undefined;
	};
	if (flag("--url")) return [{ name: flag("--name") ?? new URL(flag("--url")).hostname, url: flag("--url"), notes: "" }];
	const file = argv.find((a) => a.endsWith(".csv"));
	if (!file) {
		console.error("Usage: node audit.mjs targets.csv | --url https://example.com --name \"Firma\"");
		process.exit(1);
	}
	return parseCsv(readFileSync(file, "utf8"));
}

const normalizeUrl = (url) => (/^https?:\/\//i.test(url) ? url : `https://${url}`);
const slugify = (s) =>
	s
		.normalize("NFD")
		.replace(/[̀-ͯ]/g, "")
		.replace(/ł/g, "l")
		.replace(/Ł/g, "L")
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-|-$/g, "");
const escapeHtml = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

// ---------- 1. phone visit: screenshot + page checks ----------

const PHONE = {
	viewport: { width: 390, height: 844 },
	deviceScaleFactor: 2,
	isMobile: true,
	hasTouch: true,
	locale: "pl-PL",
	userAgent:
		"Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1",
};

async function dismissCookieBanner(page) {
	const labels = /^(akceptuj(ę)?( wszystkie)?|zaakceptuj( wszystkie)?|zgadzam się|accept( all)?|ok|rozumiem|zgoda)$/i;
	for (const el of await page.locator("button, a[role=button], a").all()) {
		const text = (await el.innerText().catch(() => "")).trim();
		if (text.length < 40 && labels.test(text) && (await el.isVisible().catch(() => false))) {
			await el.click({ timeout: 2000 }).catch(() => {});
			await page.waitForTimeout(600);
			return;
		}
	}
}

async function visitOnPhone(browser, url) {
	const context = await browser.newContext(PHONE);
	const page = await context.newPage();
	try {
		const response = await page.goto(url, { waitUntil: "load", timeout: 45000 });
		await page.waitForTimeout(2500);
		await dismissCookieBanner(page);
		const screenshot = await page.screenshot({ type: "jpeg", quality: 80 });
		const checks = await page.evaluate(() => {
			const vw = innerWidth;
			const vh = innerHeight;
			const visible = (el) => {
				const r = el.getBoundingClientRect();
				return r.width > 0 && r.height > 0;
			};
			const tels = [...document.querySelectorAll('a[href^="tel:"]')].filter(visible);
			const text = document.body?.innerText ?? "";
			const years = [...text.matchAll(/(?:©|copyright|\(c\))\s*(?:\d{4}\s*[-–]\s*)?(\d{4})/gi)].map((m) => Number(m[1]));
			const jsonLd = [...document.querySelectorAll('script[type="application/ld+json"]')].map((s) => s.textContent).join(" ");

			let small = 0;
			let total = 0;
			for (const el of document.querySelectorAll("p, li, a, span, td")) {
				if (total > 400) break;
				if (!el.innerText?.trim() || el.children.length > 2 || !visible(el)) continue;
				total++;
				if (parseFloat(getComputedStyle(el).fontSize) < 12) small++;
			}

			const resources = performance.getEntriesByType("resource");
			const nav = performance.getEntriesByType("navigation")[0];
			return {
				viewportMeta: Boolean(document.querySelector('meta[name="viewport"]')),
				horizontalScroll: document.documentElement.scrollWidth > vw + 4,
				telLink: tels.length > 0,
				telAboveFold: tels.some((a) => a.getBoundingClientRect().bottom <= vh),
				phoneInText: /(\+48[\s-]?)?(\b\d{3}[\s-]\d{3}[\s-]\d{3}\b|\b\d{2}[\s-]\d{3}[\s-]\d{2}[\s-]\d{2}\b|\b\d{9}\b)/.test(text),
				title: document.title.trim(),
				description: document.querySelector('meta[name="description"]')?.getAttribute("content")?.trim() ?? "",
				h1: document.querySelectorAll("h1").length,
				copyrightYear: years.length ? Math.max(...years) : null,
				// A form on this page, or a link to a contact page, both count.
				contactForm:
					Boolean(document.querySelector("form textarea, form input[type=email]")) ||
					[...document.querySelectorAll("a[href]")].some((a) => /kontakt|contact/i.test(a.getAttribute("href") ?? "")),
				structuredData: /LocalBusiness|Organization|ProfessionalService|Store|Restaurant|MedicalBusiness|HealthAndBeautyBusiness|AutomotiveBusiness|LegalService/.test(jsonLd),
				smallTextRatio: total ? small / total : 0,
				bytes: resources.reduce((sum, r) => sum + (r.transferSize || 0), 0) + (nav?.transferSize || 0),
				heavyImages: resources.filter((r) => ["img", "css"].includes(r.initiatorType) && r.transferSize > 400_000).length,
			};
		});
		return { ok: true, status: response?.status() ?? 0, finalUrl: page.url(), screenshot, checks };
	} catch (error) {
		return { ok: false, error: error instanceof Error ? error.message.split("\n")[0] : String(error) };
	} finally {
		await context.close();
	}
}

// ---------- 2. Lighthouse (mobile, same engine as PageSpeed Insights) ----------

async function runLighthouse(url) {
	const chrome = await chromeLauncher.launch({ chromeFlags: ["--headless=new", "--no-first-run"] });
	try {
		const result = await lighthouse(url, {
			port: chrome.port,
			output: "json",
			logLevel: "error",
			locale: "pl",
			onlyCategories: ["performance", "accessibility", "best-practices", "seo"],
		});
		const lhr = result?.lhr;
		if (!lhr) return null;
		const score = (id) => (lhr.categories[id]?.score == null ? null : Math.round(lhr.categories[id].score * 100));
		return {
			performance: score("performance"),
			accessibility: score("accessibility"),
			bestPractices: score("best-practices"),
			seo: score("seo"),
			lcp: lhr.audits["largest-contentful-paint"]?.displayValue ?? "",
			lcpMs: lhr.audits["largest-contentful-paint"]?.numericValue ?? null,
		};
	} catch (error) {
		console.warn("  Lighthouse failed:", error instanceof Error ? error.message : error);
		return null;
	} finally {
		await chrome.kill();
	}
}

// ---------- 3. findings: plain Polish, ranked ----------

function findings(visit, lh) {
	const list = [];
	const add = (weight, title, why, fix) => list.push({ weight, title, why, fix });

	if (!visit.ok) {
		add(
			100,
			"Strona się nie otwiera",
			"Podczas sprawdzania strona nie załadowała się. Klient, który trafi na pusty ekran, dzwoni do konkurencji.",
			"Sprawdzenie hostingu, domeny i certyfikatu; przywrócenie działania.",
		);
		return list;
	}
	const c = visit.checks;
	if (!visit.finalUrl.startsWith("https://"))
		add(100, "Strona bez zabezpieczenia (brak HTTPS)", "Przeglądarka pokazuje „Niezabezpieczona”. Część osób od razu ją zamyka, a Google obniża jej pozycję.", "Włączenie certyfikatu SSL, zwykle bezpłatnie u hostingodawcy.");
	if (!c.viewportMeta || c.horizontalScroll)
		add(95, "Strona nie jest dopasowana do telefonu", "Większość klientów wchodzi z telefonu. Tekst trzeba powiększać albo przesuwać w bok, więc wiele osób rezygnuje.", "Wersja mobilna: układ, który sam dopasowuje się do ekranu.");
	if (lh?.performance != null && lh.performance < 70)
		add(
			lh.performance < 50 ? 90 : 60,
			`Strona ładuje się wolno na telefonie (${lh.performance}/100)`,
			`Główna treść pojawia się dopiero po ${lh.lcp || "kilku sekundach"}. Im dłużej, tym więcej osób wraca do Google i wybiera konkurencję.`,
			"Lżejsze zdjęcia, mniej wtyczek i skryptów, szybszy hosting.",
		);
	if (!c.telLink && c.phoneInText)
		add(80, "Numeru telefonu nie da się kliknąć", "Na telefonie klient musi przepisać numer. Wystarczy jedno dotknięcie, żeby zadzwonić, a telefonów jest więcej.", "Klikalny numer telefonu w nagłówku i w stopce.");
	else if (!c.telLink && !c.phoneInText)
		add(85, "Brak widocznego numeru telefonu", "Wielu klientów lokalnych woli zadzwonić niż pisać. Bez numeru na stronie część z nich odpuszcza.", "Klikalny numer telefonu widoczny od razu po wejściu.");
	else if (!c.telAboveFold)
		add(50, "Telefon schowany niżej na stronie", "Numer jest, ale trzeba go szukać. Na telefonie powinien być widoczny od razu.", "Przycisk „Zadzwoń” na górze strony w wersji mobilnej.");
	if (c.bytes > 4_000_000)
		add(50, `Strona waży ${(c.bytes / 1_000_000).toFixed(1)} MB`, "Na słabszym zasięgu ładuje się bardzo długo i zużywa pakiet danych klienta.", "Kompresja zdjęć i nowoczesne formaty (WebP/AVIF).");
	if (lh?.seo != null && lh.seo < 80)
		add(55, `Podstawy SEO do poprawy (${lh.seo}/100)`, "Google gorzej rozumie stronę, więc rzadziej pokazuje ją osobom, które szukają takich usług w okolicy.", "Uzupełnienie tytułów, opisów i struktury nagłówków.");
	if (!c.description || c.title.length < 10)
		add(45, "Brak dobrego opisu dla Google", "W wynikach wyszukiwania Google pokazuje przypadkowy fragment tekstu zamiast zachęty do kliknięcia.", "Krótki tytuł i opis z nazwą usługi i miasta.");
	if (c.smallTextRatio > 0.25)
		add(45, "Za mały tekst na telefonie", "Część tekstu ma mniej niż 12 px. Na telefonie trudno go przeczytać bez powiększania.", "Większa czcionka w wersji mobilnej.");
	if (c.copyrightYear && c.copyrightYear <= YEAR - 2)
		add(40, `W stopce stary rok (© ${c.copyrightYear})`, "Wygląda, jakby strona była porzucona. To drobiazg, ale obniża zaufanie.", "Automatycznie aktualizowany rok i odświeżenie treści.");
	if (lh?.accessibility != null && lh.accessibility < 70)
		add(35, `Strona trudna w obsłudze dla części osób (${lh.accessibility}/100)`, "Słaby kontrast, brak opisów zdjęć albo przycisków. Utrudnia to korzystanie m.in. starszym osobom.", "Poprawa kontrastu, opisów i etykiet.");
	if (!c.h1) add(30, "Brak głównego nagłówka", "Ani klient, ani Google nie widzą od razu, czym zajmuje się firma.", "Jeden wyraźny nagłówek z nazwą usługi.");
	if (!c.structuredData)
		add(25, "Brak danych firmy dla Google i AI", "Google i asystenci AI (np. ChatGPT) gorzej rozumieją, czym zajmuje się firma, gdzie działa i kiedy jest otwarta.", "Dane strukturalne: nazwa, adres, godziny, usługi.");
	if (!c.contactForm) add(20, "Brak formularza i strony kontaktu", "Nie każdy chce dzwonić. Formularz zbiera zapytania także wieczorem i w weekend.", "Krótki formularz: imię, kontakt, wiadomość.");

	return list.sort((a, b) => b.weight - a.weight);
}

function checklist(visit, lh) {
	if (!visit.ok) return [];
	const c = visit.checks;
	return [
		["Zabezpieczenie HTTPS", visit.finalUrl.startsWith("https://")],
		["Dopasowanie do telefonu", c.viewportMeta && !c.horizontalScroll],
		["Klikalny numer telefonu", c.telLink],
		["Telefon widoczny od razu", c.telAboveFold],
		["Szybkość na telefonie (min. 70/100)", lh?.performance == null ? null : lh.performance >= 70],
		["Opis strony dla Google", Boolean(c.description)],
		["Główny nagłówek (H1)", c.h1 > 0],
		["Dane firmy dla Google i AI", c.structuredData],
		["Formularz lub strona kontaktu", c.contactForm],
		["Aktualny rok w stopce", c.copyrightYear == null ? null : c.copyrightYear > YEAR - 2],
		["Czytelny tekst na telefonie", c.smallTextRatio <= 0.25],
		["Waga strony poniżej 4 MB", c.bytes <= 4_000_000],
	];
}

// ---------- 4. the printable page ----------

const scoreColor = (s) => (s == null ? "#5b5f66" : s >= 90 ? "#0c7d3e" : s >= 50 ? "#b45309" : "#c62828");

async function renderPdf(browser, target, visit, lh, issues, file) {
	const qrUrl = `${config.website}?utm_source=mini-audyt&utm_medium=print`;
	const qr = await QRCode.toString(qrUrl, { type: "svg", margin: 0, color: { dark: "#111214", light: "#0000" } });
	const top = issues.slice(0, 3);
	const shot = visit.ok ? `data:image/jpeg;base64,${visit.screenshot.toString("base64")}` : null;
	const tiles = [
		["Wydajność", lh?.performance],
		["Dostępność", lh?.accessibility],
		["Dobre praktyki", lh?.bestPractices],
		["SEO", lh?.seo],
	];
	const checks = checklist(visit, lh);

	const html = `<!doctype html><html lang="pl"><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;700&display=swap&subset=latin-ext" rel="stylesheet">
<style>
@page { size: A4; margin: 0; }
* { box-sizing: border-box; margin: 0; padding: 0; }
body { width: 210mm; height: 297mm; font-family: "JetBrains Mono", monospace; color: #111214; background: #f3f1ec; font-size: 9pt; line-height: 1.45; display: flex; flex-direction: column; }
.wrap { padding: 13mm 14mm 0; flex: 1; display: flex; flex-direction: column; gap: 6mm; }
.label { font-size: 7pt; letter-spacing: .14em; text-transform: uppercase; color: #5b5f66; }
h1 { font-family: "Instrument Serif", serif; font-weight: 400; font-size: 34pt; line-height: .95; letter-spacing: -.02em; }
h2 { font-family: "Instrument Serif", serif; font-weight: 400; font-size: 18pt; line-height: 1; margin-bottom: 3mm; }
.url { color: #2e3bff; word-break: break-all; }
.grid { display: grid; grid-template-columns: 62mm 1fr; gap: 8mm; }
.phone { border: 2.5mm solid #111214; border-radius: 7mm; overflow: hidden; background: #fff; height: 128mm; }
.phone img { width: 100%; display: block; }
.phone .none { height: 100%; display: flex; align-items: center; justify-content: center; text-align: center; padding: 6mm; color: #c62828; }
.tiles { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2.5mm; margin-bottom: 6mm; }
.tile { background: #f8f7f3; border: .3mm solid #d8d5ce; padding: 3mm 2mm; text-align: center; }
.tile b { display: block; font-size: 20pt; line-height: 1; margin-bottom: 1.5mm; }
.tile span { font-size: 6.5pt; color: #3b3e44; }
ol { list-style: none; display: flex; flex-direction: column; gap: 3.5mm; }
li.issue { display: grid; grid-template-columns: 8mm 1fr; gap: 2mm; }
li.issue .n { font-family: "Instrument Serif", serif; font-size: 20pt; line-height: 1; color: #2e3bff; }
li.issue strong { display: block; font-size: 9.5pt; margin-bottom: .8mm; }
li.issue p { color: #3b3e44; font-size: 8pt; }
li.issue em { display: block; font-style: normal; font-size: 8pt; margin-top: .8mm; }
.checks { display: grid; grid-template-columns: 1fr 1fr; gap: 1.2mm 8mm; border-top: .3mm solid #111214; padding-top: 3mm; }
.checks div { display: flex; justify-content: space-between; border-bottom: .2mm dashed #bdb9b0; padding-bottom: 1mm; font-size: 7.5pt; }
.ok { color: #0c7d3e; } .bad { color: #c62828; } .na { color: #5b5f66; }
.note { font-size: 6.5pt; color: #5b5f66; }
footer { background: #111214; color: #f3f1ec; padding: 7mm 14mm; display: grid; grid-template-columns: 1fr 26mm; gap: 8mm; align-items: center; }
footer h3 { font-family: "Instrument Serif", serif; font-weight: 400; font-size: 17pt; line-height: 1.05; margin-bottom: 2mm; }
footer p { font-size: 8pt; color: #c9c7c1; }
footer .contact { margin-top: 2.5mm; font-size: 8.5pt; color: #f3f1ec; }
footer .contact b { color: #8c94ff; font-weight: 400; }
.qr { background: #f3f1ec; padding: 2mm; }
.qr svg { width: 100%; height: auto; display: block; }
</style></head><body>
<div class="wrap">
	<header>
		<p class="label">${reportMode ? "Raport strony" : "Mini-audyt strony"} · ${escapeHtml(TODAY)}</p>
		<h1>${escapeHtml(target.name)}</h1>
		<p class="url">${escapeHtml(target.url)}</p>
	</header>
	<div class="grid">
		<div class="phone">${shot ? `<img src="${shot}" alt="">` : `<div class="none">Strona nie załadowała się podczas sprawdzania.</div>`}</div>
		<div>
			${lh ? `<div class="tiles">${tiles.map(([label, s]) => `<div class="tile"><b style="color:${scoreColor(s)}">${s ?? "–"}</b><span>${label}</span></div>`).join("")}</div>` : ""}
			<h2>${top.length === 0 ? "Strona jest w dobrej kondycji" : top.length === 1 ? "Jedna rzecz, którą warto poprawić" : `${top.length} rzeczy, które warto poprawić`}</h2>
			${top.length ? `<ol>${top.map((f, i) => `<li class="issue"><span class="n">${i + 1}</span><div><strong>${escapeHtml(f.title)}</strong><p>${escapeHtml(f.why)}</p><em>→ ${escapeHtml(f.fix)}</em></div></li>`).join("")}</ol>` : `<p>Nie znalazłem poważnych problemów. Zawsze można jednak powalczyć o więcej zapytań z Google.</p>`}
		</div>
	</div>
	${checks.length ? `<div><p class="label" style="margin-bottom:2mm">Szybkie sprawdzenie</p><div class="checks">${checks.map(([label, ok]) => `<div><span>${label}</span><span class="${ok == null ? "na" : ok ? "ok" : "bad"}">${ok == null ? "–" : ok ? "✓" : "✗"}</span></div>`).join("")}</div></div>` : ""}
	<p class="note">Pomiar automatyczny: telefon (390 px), Google Lighthouse w trybie mobilnym, ${escapeHtml(TODAY)}. Wyniki mogą się nieco różnić między pomiarami.</p>
</div>
<footer>
	<div>
		${
			reportMode
				? `<h3>Raport przygotował ${escapeHtml(config.name)}.</h3><p>Pytania lub kolejne kroki: odpisz na maila albo zadzwoń.</p>`
				: `<h3>Chętnie powiem, co poprawić najpierw.</h3><p>${escapeHtml(config.tagline)}. Bez zobowiązań, krótka rozmowa albo wiadomość.</p>`
		}
		<p class="contact">${escapeHtml(config.name)} · <b>${escapeHtml(config.website.replace(/^https?:\/\//, "").replace(/\/pl$/, ""))}</b>${config.email ? ` · ${escapeHtml(config.email)}` : ""}${config.phone ? ` · ${escapeHtml(config.phone)}` : ""}</p>
	</div>
	<div class="qr">${qr}</div>
</footer>
</body></html>`;

	const page = await browser.newPage();
	await page.setContent(html, { waitUntil: "networkidle" });
	await page.evaluate(() => document.fonts.ready);
	await page.pdf({ path: file, format: "A4", printBackground: true, margin: { top: 0, right: 0, bottom: 0, left: 0 } });
	await page.close();
}

// ---------- 5. summary for the lead sheet ----------

const SUMMARY = join(OUT, "summary.csv");
const csvCell = (v) => `"${String(v ?? "").replace(/"/g, '""')}"`;
function appendSummary(row) {
	const columns = ["date", "name", "url", "status", "performance", "accessibility", "best_practices", "seo", "lcp", "top_issues", "pdf", "notes"];
	if (!existsSync(SUMMARY)) appendFileSync(SUMMARY, columns.join(",") + "\n");
	appendFileSync(SUMMARY, columns.map((c) => csvCell(row[c])).join(",") + "\n");
}

// ---------- main ----------

const argv = process.argv.slice(2);
const targets = readTargets(argv).filter((t) => t.name || t.url);
const skipLighthouse = argv.includes("--no-lighthouse");
const reportMode = argv.includes("--report");
mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch({ channel: "chrome" });
try {
	for (const target of targets) {
		const date = new Date().toISOString().slice(0, 10);
		if (!target.url) {
			console.log(`- ${target.name}: no website, skipped (a lead for a new site).`);
			appendSummary({ date, name: target.name, status: "brak strony", notes: target.notes });
			continue;
		}
		const url = normalizeUrl(target.url);
		console.log(`- ${target.name} (${url})`);
		const visit = await visitOnPhone(browser, url);
		console.log(visit.ok ? `  phone visit ok (${visit.status})` : `  failed to load: ${visit.error}`);
		const lh = visit.ok && !skipLighthouse ? await runLighthouse(visit.finalUrl) : null;
		if (lh) console.log(`  lighthouse: perf ${lh.performance}, a11y ${lh.accessibility}, bp ${lh.bestPractices}, seo ${lh.seo}, LCP ${lh.lcp}`);
		const issues = findings(visit, lh);
		const file = join(OUT, `${slugify(target.name) || slugify(new URL(url).hostname)}.pdf`);
		await renderPdf(browser, { ...target, url }, visit, lh, issues, file);
		console.log(`  → ${file}`);
		appendSummary({
			date,
			name: target.name,
			url,
			status: visit.ok ? "ok" : `błąd: ${visit.error}`,
			performance: lh?.performance,
			accessibility: lh?.accessibility,
			best_practices: lh?.bestPractices,
			seo: lh?.seo,
			lcp: lh?.lcp,
			top_issues: issues.slice(0, 3).map((i) => i.title).join(" | "),
			pdf: file,
			notes: target.notes,
		});
	}
} finally {
	await browser.close();
}
console.log(`\nDone. Summary: ${SUMMARY}`);
