import type { LocalService } from "./resolve";

export const services: LocalService[] = [
	{
		id: "nextjs-websites",
		slug: { pl: "strony-nextjs", en: "nextjs-websites" },
		order: 1,
		title: { pl: "Strony firmowe w Next.js", en: "Business websites in Next.js" },
		summary: {
			pl: "Szybkie, dobrze pozycjonowane strony, które edytujesz sam. Core Web Vitals na zielono od pierwszego dnia.",
			en: "Fast websites that rank well and that you can edit yourself. Green Core Web Vitals from day one.",
		},
		intro: {
			pl: "Strona firmowa, która ładuje się w ułamku sekundy, dobrze wygląda na telefonie i jest gotowa na SEO. Zbudowana w Next.js, z wygodnym CMS do edycji treści.",
			en: "A business website that loads in a blink, looks great on phones and is ready for SEO. Built in Next.js with a friendly CMS for your content.",
		},
		tags: ["Next.js", "SEO", "CMS"],
		priceFrom: { pl: "od 500 zł", en: "from 500 PLN" },
		timeline: { pl: "od kilku dni do 3 tygodni", en: "a few days to 3 weeks" },
		included: [
			{
				title: { pl: "Projekt i wdrożenie", en: "Design to launch" },
				description: {
					pl: "Od makiety w Figmie albo Twoich materiałów do działającej strony na Twojej domenie.",
					en: "From a Figma mock-up or your materials to a live site on your domain.",
				},
			},
			{
				title: { pl: "CMS do edycji", en: "Editable content" },
				description: {
					pl: "Sam zmieniasz teksty, zdjęcia i wpisy, bez dzwonienia do programisty.",
					en: "Change copy, images and posts yourself, without calling a developer.",
				},
			},
			{
				title: { pl: "SEO techniczne", en: "Technical SEO" },
				description: {
					pl: "Metadane, dane strukturalne, mapa strony, hreflang i Search Console.",
					en: "Metadata, structured data, sitemap, hreflang and Search Console.",
				},
			},
			{
				title: { pl: "Szybkość", en: "Speed" },
				description: {
					pl: "Optymalizacja obrazów i fontów, raport Lighthouse przed i po wdrożeniu.",
					en: "Optimised images and fonts, with a Lighthouse report before and after launch.",
				},
			},
		],
		plans: [
			{
				id: "nextjs-landing",
				kicker: { pl: "Na dobry start", en: "Quick start" },
				name: "Landing page",
				price: { pl: "od 500 zł", en: "from 500 PLN" },
				features: {
					pl: ["1 strona, do 6 sekcji", "z Twojego projektu graficznego", "bez CMS", "wdrożenie + 1 runda poprawek"],
					en: ["1 page, up to 6 sections", "from your ready design", "no CMS", "launch + 1 round of fixes"],
				},
				highlighted: false,
			},
			{
				id: "nextjs-website",
				kicker: { pl: "Dla małych firm", en: "For small businesses" },
				name: { pl: "Strona firmowa z CMS", en: "Website with CMS" },
				price: { pl: "od 2 900 zł", en: "from 2,900 PLN" },
				features: {
					pl: ["do 5 podstron", "CMS do edycji", "SEO i dane strukturalne", "wdrożenie + 30 dni wsparcia"],
					en: ["up to 5 pages", "editable CMS", "SEO and structured data", "launch + 30 days support"],
				},
				highlighted: true,
			},
			{
				id: "nextjs-care",
				kicker: { pl: "Dla działających stron", en: "For live sites" },
				name: { pl: "Zmiany i opieka", en: "Changes and care" },
				price: { pl: "120 zł/h", en: "120 PLN/h" },
				features: {
					pl: ["nowe sekcje i poprawki", "aktualizacje zależności", "rozliczenie co 15 min", "minimum 1 h"],
					en: ["new sections and fixes", "dependency updates", "billed per 15 min", "1 h minimum"],
				},
				highlighted: false,
			},
		],
		faq: [],
		seo: {},
	},
	{
		id: "shopify",
		slug: { pl: "sklepy-shopify", en: "shopify-stores" },
		order: 2,
		title: { pl: "Sklepy Shopify", en: "Shopify stores" },
		summary: {
			pl: "Wdrożenie, motyw dopasowany do marki, poprawki i integracje. Sklep gotowy do sprzedaży.",
			en: "Setup, a theme tailored to your brand, fixes and integrations. A store that is ready to sell.",
		},
		intro: {
			pl: "Konfiguracja, motyw na miarę, poprawki i integracje. Buduje go senior frontend developer, więc sklep jest szybki na telefonie i prosty w obsłudze.",
			en: "Setup, a theme tailored to your brand, fixes and integrations. Built by a senior frontend developer, so the store is fast on mobile and easy for you to run.",
		},
		tags: ["Shopify", "Liquid"],
		priceFrom: { pl: "od 2 500 zł", en: "from 2,500 PLN" },
		timeline: { pl: "3–5 tygodni", en: "3–5 weeks" },
		included: [
			{
				title: { pl: "Konfiguracja sklepu", en: "Store setup" },
				description: {
					pl: "Domena, płatności (Przelewy24, BLIK, Stripe), dostawy, podatki i strony prawne.",
					en: "Domain, payments (Przelewy24, BLIK, Stripe), shipping, taxes and legal pages.",
				},
			},
			{
				title: { pl: "Motyw na miarę", en: "Custom theme" },
				description: {
					pl: "Sekcje Online Store 2.0, które sam układasz, dopasowane do marki.",
					en: "Online Store 2.0 sections you can rearrange yourself, built to your brand.",
				},
			},
			{
				title: { pl: "Import produktów", en: "Product import" },
				description: {
					pl: "CSV albo migracja z WooCommerce lub innej platformy, z wariantami i zdjęciami.",
					en: "CSV or migration from WooCommerce or another platform, with variants and images.",
				},
			},
			{
				title: { pl: "Szybkość i SEO", en: "Speed and SEO" },
				description: {
					pl: "Lekkie aplikacje, zoptymalizowane obrazy, dane strukturalne produktów.",
					en: "Lean apps, optimised images and structured data for products.",
				},
			},
			{
				title: { pl: "Integracje", en: "Integrations" },
				description: {
					pl: "Faktury, newsletter, analityka, feedy Meta i Google.",
					en: "Invoices, newsletter, analytics, Meta and Google feeds.",
				},
			},
			{
				title: { pl: "Szkolenie i opieka", en: "Training and aftercare" },
				description: {
					pl: "Nagrane szkolenie z panelu i 30 dni poprawek w cenie.",
					en: "A recorded admin walkthrough and 30 days of fixes included.",
				},
			},
		],
		plans: [
			{
				id: "shopify-starter",
				kicker: { pl: "Na start", en: "To get started" },
				name: "Starter",
				price: { pl: "od 2 500 zł", en: "from 2,500 PLN" },
				features: {
					pl: ["dopasowanie motywu", "do 50 produktów", "płatności i dostawy", "checklista startowa"],
					en: ["theme customisation", "up to 50 products", "payments and shipping", "launch checklist"],
				},
				highlighted: false,
			},
			{
				id: "shopify-brand",
				kicker: { pl: "Najczęściej wybierany", en: "Most popular" },
				name: { pl: "Sklep marki", en: "Brand store" },
				price: { pl: "od 5 900 zł", en: "from 5,900 PLN" },
				features: {
					pl: ["własne sekcje", "migracja i import", "przegląd szybkości i SEO", "szkolenie + 30 dni opieki"],
					en: ["custom sections", "migration and import", "speed and SEO pass", "training + 30 days care"],
				},
				highlighted: true,
			},
			{
				id: "shopify-care",
				kicker: { pl: "Dla działających sklepów", en: "For live stores" },
				name: { pl: "Poprawki i opieka", en: "Fixes and care" },
				price: { pl: "120 zł/h", en: "120 PLN/h" },
				features: {
					pl: ["błędy i nowe sekcje", "porządki w aplikacjach", "miesięczny raport", "szybka reakcja"],
					en: ["bug fixes, new sections", "app clean-up", "monthly report", "priority response"],
				},
				highlighted: false,
			},
		],
		faq: [],
		seo: {},
	},
	{
		id: "wordpress",
		slug: { pl: "wordpress", en: "wordpress" },
		order: 3,
		title: { pl: "WordPress: poprawki i przyspieszenie", en: "WordPress fixes and speed-ups" },
		summary: {
			pl: "Nowe sekcje, naprawa błędów, migracje i optymalizacja, bez przepisywania wszystkiego od zera.",
			en: "New sections, bug fixes, migrations and optimisation, without rewriting everything from scratch.",
		},
		intro: {
			pl: "Masz stronę na WordPressie, która działa wolno albo wymaga zmian? Naprawię błędy, dodam sekcje, uporządkuję wtyczki i przyspieszę ładowanie.",
			en: "Got a WordPress site that is slow or needs changes? I fix bugs, add sections, tidy up plugins and make it load faster.",
		},
		tags: ["WordPress", "PHP"],
		priceFrom: { pl: "120 zł/h", en: "120 PLN/h" },
		timeline: { pl: "od 1 dnia", en: "from 1 day" },
		included: [
			{
				title: { pl: "Audyt na start", en: "Audit first" },
				description: {
					pl: "Sprawdzam motyw, wtyczki i hosting, zanim cokolwiek zmienię.",
					en: "I review the theme, plugins and hosting before changing anything.",
				},
			},
			{
				title: { pl: "Poprawki i sekcje", en: "Fixes and sections" },
				description: {
					pl: "Błędy wyświetlania, nowe bloki Gutenberga, formularze.",
					en: "Layout bugs, new Gutenberg blocks, forms.",
				},
			},
			{
				title: { pl: "Przyspieszenie", en: "Speed" },
				description: {
					pl: "Cache, obrazy, porządki we wtyczkach, lepsze Core Web Vitals.",
					en: "Caching, images, plugin clean-up, better Core Web Vitals.",
				},
			},
		],
		plans: [],
		faq: [],
		seo: {},
	},
	{
		id: "web-apps",
		slug: { pl: "aplikacje-react", en: "react-web-apps" },
		order: 4,
		title: { pl: "Aplikacje webowe React", en: "React web apps" },
		summary: {
			pl: "Panele, SaaS i MVP. Od makiety w Figmie do działającego produktu z testami.",
			en: "Dashboards, SaaS and MVPs. From a Figma mock-up to a working, tested product.",
		},
		intro: {
			pl: "Buduję interfejsy aplikacji w React i Next.js: panele klienta, SaaS, MVP dla startupów. Z TypeScriptem, testami i architekturą, która nie rozsypie się po pół roku.",
			en: "I build app interfaces in React and Next.js: client portals, SaaS, startup MVPs. With TypeScript, tests and an architecture that still holds up six months later.",
		},
		tags: ["React", "TypeScript", "Next.js"],
		priceFrom: { pl: "120 zł/h", en: "120 PLN/h" },
		timeline: { pl: "zależnie od zakresu", en: "depends on scope" },
		included: [],
		plans: [],
		faq: [],
		seo: {},
	},
	{
		id: "frontend-for-rails-teams",
		slug: { pl: "frontend-dla-zespolow-rails", en: "frontend-for-rails-teams" },
		order: 5,
		title: { pl: "Frontend dla zespołów Rails", en: "Frontend for Rails teams" },
		summary: {
			pl: "Stimulus, Hotwire, ERB i Tailwind. Dołączam do zespołu i dowożę interfejs, na co dzień robię to w Visuality.",
			en: "Stimulus, Hotwire, ERB and Tailwind. I join your team and ship the UI. It's what I do daily at Visuality.",
		},
		intro: {
			pl: "Twój zespół Rails potrzebuje kogoś od interfejsu? Piszę widoki ERB, kontrolery Stimulus i Tailwind, rozumiem kod Rails i dogaduję się z backendem.",
			en: "Your Rails team needs someone for the UI? I write ERB views, Stimulus controllers and Tailwind, read Rails code and work well with backend developers.",
		},
		tags: ["Rails", "Stimulus", "Tailwind"],
		priceFrom: { pl: "120 zł/h", en: "120 PLN/h" },
		timeline: { pl: "start do ustalenia", en: "start date by agreement" },
		included: [],
		plans: [],
		faq: [],
		seo: {},
	},
	{
		id: "speed-seo-audit",
		slug: { pl: "audyt-szybkosci-seo", en: "speed-seo-audit" },
		order: 6,
		title: { pl: "Audyt szybkości i SEO", en: "Speed and SEO audit" },
		summary: {
			pl: "Sprawdzam, co spowalnia stronę i dlaczego Google jej nie lubi. Raport z priorytetami plus poprawki.",
			en: "I find what slows your site down and why Google doesn't like it. A prioritised report, plus the fixes.",
		},
		intro: {
			pl: "Mierzę Core Web Vitals, sprawdzam SEO techniczne i dostępność, a potem dostajesz listę poprawek od najważniejszych. Mogę je też wdrożyć.",
			en: "I measure Core Web Vitals, check technical SEO and accessibility, then hand you a list of fixes, most important first. I can implement them too.",
		},
		tags: ["Lighthouse", "CWV", "SEO"],
		priceFrom: { pl: "od 900 zł", en: "from 900 PLN" },
		timeline: { pl: "3–5 dni", en: "3–5 days" },
		included: [],
		plans: [],
		faq: [],
		seo: {},
	},
];
