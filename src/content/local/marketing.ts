import type { FaqItem, PricingPlan, ProcessStep, Testimonial } from "../types";
import type { LocalizedDeep } from "./resolve";

export const testimonials: LocalizedDeep<Testimonial>[] = [
	{
		id: "daniel-kowalczyk",
		author: "Daniel Kowalczyk",
		role: { pl: "Co-founder, HexOcean · mój przełożony przez prawie 4 lata", en: "Co-founder, HexOcean · my direct supervisor for nearly 4 years" },
		quote:
			"Michał consistently demonstrated his ability to handle complex projects independently, including successfully rewriting an entire system to adopt a modern tech stack.",
		text: "I had the pleasure of being Michał's direct supervisor at HexOcean for nearly four years. During this time, I witnessed his impressive growth from a junior to a senior frontend developer. Michał consistently demonstrated his ability to handle complex projects independently, including successfully rewriting an entire system to adopt a modern tech stack. In addition to his technical expertise, Michał is exceptionally self-organized, responsible, and motivated. He is someone you can always rely on to deliver high-quality work and meet expectations.",
		url: "https://www.linkedin.com/in/danielkowalczyk/",
	},
	{
		id: "maciej-rygielski",
		author: "Maciej Rygielski",
		role: { pl: "Buduje świetne produkty i zespoły", en: "Builds great software products and teams" },
		quote:
			"He proactively suggests ideas for improving the application and introducing new features, which significantly enhances the final product.",
		text: "I had the pleasure of working with Michał, and I can wholeheartedly recommend him as a Front-end developer. He is extremely meticulous in programming, ensuring the highest code quality, maintaining order, and consistently applying best development practices. He proactively suggests ideas for improving the application and introducing new features, which significantly enhances the final product. Moreover, he is an excellent communicator.",
		url: "https://www.linkedin.com/in/maciejrygielski/",
	},
	{
		id: "rafal-jusiak",
		author: "Rafał Jusiak",
		role: { pl: "Python Developer, współtwórca Moja Matura", en: "Python Developer, co-creator of Moja Matura" },
		quote:
			"He demonstrated remarkable attention to detail, delivering clean and efficient code every time.",
		text: "I had the pleasure of collaborating with Michał on multiple features for Braintrust. As a frontend developer, he demonstrated remarkable attention to detail, delivering clean and efficient code every time. He also showed exceptional collaboration skills, consistently offering ideas and solutions that elevated our projects.",
		url: "https://www.linkedin.com/in/rafal-jusiak/",
	},
	{
		id: "piotr-zawierucha",
		author: "Piotr Zawierucha",
		role: { pl: "Co-founder, CodeCaptains", en: "Co-founder, CodeCaptains" },
		quote:
			"His dedication to developing high-quality solutions makes him a valuable asset to any team.",
		text: "Michał is an ambitious frontend developer whose work with modern technologies leads to the creation of reliable and innovative software. His dedication to developing high-quality solutions makes him a valuable asset to any team.",
		url: "https://www.linkedin.com/in/piotrzawierucha/",
	},
];

// TODO: set real prices.
export const pricingPlans: LocalizedDeep<PricingPlan>[] = [
	{
		id: "website",
		kicker: { pl: "Dla małych firm", en: "For small businesses" },
		name: { pl: "Strona wizytówka", en: "Business website" },
		price: { pl: "od [X] zł", en: "from [X] PLN" },
		features: {
			pl: ["do 5 podstron", "CMS do edycji", "SEO i dane strukturalne", "wdrożenie + 30 dni wsparcia"],
			en: ["up to 5 pages", "editable CMS", "SEO and structured data", "launch + 30 days support"],
		},
		highlighted: false,
	},
	{
		id: "shopify",
		kicker: { pl: "Najczęściej wybierany", en: "Most popular" },
		name: { pl: "Sklep Shopify", en: "Shopify store" },
		price: { pl: "od [X] zł", en: "from [X] PLN" },
		features: {
			pl: ["motyw dopasowany do marki", "płatności i dostawy", "import produktów", "szkolenie z panelu"],
			en: ["theme tailored to your brand", "payments and shipping", "product import", "admin training"],
		},
		highlighted: true,
	},
	{
		id: "hourly",
		kicker: { pl: "Dla zespołów i agencji", en: "For teams and agencies" },
		name: { pl: "Współpraca godzinowa", en: "Hourly engagement" },
		price: { pl: "[X] zł/h", en: "[X] PLN/h" },
		features: {
			pl: ["React, Next.js, frontend Rails", "WordPress i Shopify", "faktura VAT / B2B", "raport godzin co tydzień"],
			en: ["React, Next.js, Rails frontend", "WordPress and Shopify", "VAT invoice / B2B", "weekly time report"],
		},
		highlighted: false,
	},
];

export const faq: LocalizedDeep<FaqItem>[] = [
	{
		id: "cost",
		question: { pl: "Ile kosztuje strona internetowa?", en: "How much does a website cost?" },
		answer: {
			pl: "Strona firmowa w Next.js zaczyna się od [X] zł netto. Dokładną wycenę dostajesz po krótkim briefie. Cena zależy od liczby podstron, integracji i tego, czy treści są gotowe.",
			en: "A business website in Next.js starts from [X] PLN net. You get an exact quote after a short brief. The price depends on the number of pages, integrations and whether the content is ready.",
		},
	},
	{
		id: "time",
		question: { pl: "Ile trwa realizacja?", en: "How long does it take?" },
		answer: {
			pl: "Strona wizytówka zwykle [2–3] tygodnie, sklep Shopify [3–5] tygodni. Co tydzień dostajesz podgląd na żywo.",
			en: "A business website usually takes [2–3] weeks, a Shopify store [3–5] weeks. You get a live preview every week.",
		},
	},
	{
		id: "edit",
		question: { pl: "Czy sam będę mógł edytować treści?", en: "Can I edit the content myself?" },
		answer: {
			pl: "Tak. Podpinam wygodny CMS albo panel Shopify/WordPress i pokazuję, jak z niego korzystać.",
			en: "Yes. I connect a friendly CMS or the Shopify/WordPress admin and show you how to use it.",
		},
	},
	{
		id: "remote",
		question: { pl: "Czy pracujesz z firmami spoza Katowic?", en: "Do you work with companies outside Poland?" },
		answer: {
			pl: "Tak, pracuję zdalnie z klientami z całej Polski, UE i Wielkiej Brytanii. Na Śląsku chętnie spotkam się na miejscu.",
			en: "Yes. I work remotely with clients across Poland, the EU and the UK, and I'm happy to meet in person in Silesia.",
		},
	},
	{
		id: "seo",
		question: { pl: "Czy zajmiesz się też SEO?", en: "Do you take care of SEO?" },
		answer: {
			pl: "Tak. Każda strona ma poprawne metadane, dane strukturalne, mapę strony i dobre wyniki Core Web Vitals od pierwszego dnia.",
			en: "Yes. Every site ships with correct metadata, structured data, a sitemap and good Core Web Vitals from day one.",
		},
	},
	{
		id: "invoice",
		question: { pl: "Czy wystawiasz fakturę VAT?", en: "Do you issue VAT invoices?" },
		answer: {
			// TODO: confirm how you invoice.
			pl: "[Tak, wystawiam fakturę VAT jako jednoosobowa działalność / B2B.]",
			en: "[Yes, I issue VAT invoices as a sole trader / B2B.]",
		},
	},
];

export const processSteps: LocalizedDeep<ProcessStep>[] = [
	{
		id: "brief",
		title: "Brief",
		description: {
			pl: "3-minutowy formularz albo 20 minut rozmowy. Poznaję cel, nie tylko listę funkcji.",
			en: "A 3-minute form or a 20-minute call. I learn the goal, not just the feature list.",
		},
	},
	{
		id: "quote",
		title: { pl: "Wycena i plan", en: "Quote and plan" },
		description: {
			pl: "W ciągu [48 h] dostajesz zakres, cenę i harmonogram. Bez ukrytych kosztów.",
			en: "Within [48 h] you get the scope, price and timeline. No hidden costs.",
		},
	},
	{
		id: "build",
		title: { pl: "Budowa", en: "Build" },
		description: {
			pl: "Co tydzień podgląd na żywo. Widzisz postęp i możesz komentować na bieżąco.",
			en: "A live preview every week. You see progress and can comment as we go.",
		},
	},
	{
		id: "launch",
		title: { pl: "Start", en: "Launch" },
		description: {
			pl: "Wdrożenie, domena, analityka, Search Console. Szkolenie z edycji treści.",
			en: "Deployment, domain, analytics, Search Console. Training on editing content.",
		},
	},
	{
		id: "care",
		title: { pl: "Opieka", en: "Care" },
		description: {
			pl: "Poprawki, aktualizacje i rozwój. Abonament albo rozliczenie godzinowe.",
			en: "Fixes, updates and new features. A monthly plan or hourly billing.",
		},
	},
];
