"use server";

import { headers } from "next/headers";
import { type BriefErrorKey, type BriefField, type BriefInput, type BriefState, briefSchema } from "@/lib/brief";
import { escapeHtml } from "@/lib/escape-html";
import { getMailer } from "@/lib/mail";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
// Best effort: per server instance. Add Turnstile or Upstash if spam shows up.
const attempts = new Map<string, number[]>();

function rateLimited(key: string) {
	const now = Date.now();
	const recent = (attempts.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
	recent.push(now);
	attempts.set(key, recent);
	return recent.length > MAX_PER_WINDOW;
}

function formatBrief(data: BriefInput) {
	const rows: [string, string][] = [
		["Name", data.name],
		["Email", data.email],
		["Company / site", data.company || "—"],
		["Project", data.types.join(", ")],
		["Budget", data.budget],
		["Timeline", data.timeline],
		["Language", data.locale],
	];
	const text = `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\n${data.message}`;
	const html = `<table cellpadding="6">${rows
		.map(([k, v]) => `<tr><td><strong>${k}</strong></td><td>${escapeHtml(v)}</td></tr>`)
		.join("")}</table><p style="white-space:pre-wrap">${escapeHtml(data.message)}</p>`;
	return { text, html };
}

export async function submitBrief(_prev: BriefState, formData: FormData): Promise<BriefState> {
	// Honeypot: humans never see this field.
	if (formData.get("website")) return { status: "success" };

	const parsed = briefSchema.safeParse({
		types: formData.getAll("types"),
		budget: formData.get("budget") ?? undefined,
		timeline: formData.get("timeline") ?? undefined,
		name: formData.get("name"),
		email: formData.get("email"),
		company: formData.get("company") ?? "",
		message: formData.get("message"),
		consent: formData.get("consent") ?? undefined,
		locale: formData.get("locale") ?? undefined,
	});

	if (!parsed.success) {
		const errors: Partial<Record<BriefField, BriefErrorKey>> = {};
		for (const issue of parsed.error.issues) {
			const field = issue.path[0] as BriefField;
			errors[field] ??= issue.message as BriefErrorKey;
		}
		return { status: "invalid", errors };
	}

	const h = await headers();
	const ip = h.get("x-forwarded-for")?.split(",")[0]?.trim() ?? h.get("x-real-ip") ?? "unknown";
	if (rateLimited(ip)) return { status: "error", reason: "rateLimit" };

	const mailer = getMailer();
	const to =
		process.env.CONTACT_TO_EMAIL ?? (process.env.NODE_ENV === "production" ? undefined : "dev@localhost");
	if (!mailer || !to) {
		console.error("[brief] Mailgun or CONTACT_TO_EMAIL is not configured.");
		return { status: "error", reason: "generic" };
	}

	const data = parsed.data;
	const { text, html } = formatBrief(data);

	try {
		await mailer.send({
			to,
			replyTo: data.email,
			subject: `Brief: ${data.types.join(", ")} — ${data.name}`,
			text,
			html,
			tags: ["brief", ...data.types],
		});
		return { status: "success" };
	} catch (error) {
		console.error("[brief] Sending failed:", error);
		return { status: "error", reason: "generic" };
	}
}
