import type { CvFacts, SiteSettings } from "../types";
import type { LocalizedDeep } from "./resolve";

export const siteSettings: LocalizedDeep<SiteSettings> = {
	name: "Michał Janiec",
	role: "Senior Frontend Developer",
	location: { pl: "Katowice, Śląsk · zdalnie PL/EU/UK", en: "Katowice, Poland · remote PL/EU/UK" },
	email: "michal.janiec95@gmail.com",
	// TODO: add a phone number if you want local clients to call.
	phone: undefined,
	availability: {
		pl: "Otwarty na nowe projekty",
		en: "Open to new projects",
	},
	socials: [
		{ label: "LinkedIn", href: "https://www.linkedin.com/in/janiecmichal" },
		{ label: "GitHub", href: "https://github.com/JaniecMichal" },
	],
	cvUrl: "/michal_janiec_cv.pdf",
	trustedBy: ["Visuality", "HexOcean", "Braintrust", "nazielono.pro", "jemWszkole.pl", "Gainflow"],
	seo: {
		title: {
			pl: "Michał Janiec — strony, sklepy i aplikacje | Senior Frontend Developer, Katowice",
			en: "Michał Janiec — websites, stores and web apps | Senior Frontend Developer",
		},
		description: {
			pl: "Buduję szybkie strony w Next.js, sklepy Shopify, poprawki WordPress i aplikacje React. Senior frontend developer z Katowic, 5+ lat doświadczenia. Wycena w 24 h.",
			en: "I build fast Next.js websites, Shopify stores, WordPress fixes and React apps. Senior frontend developer from Katowice, Poland, 5+ years of experience. Quote within 24 hours.",
		},
	},
};

export const cvFacts: LocalizedDeep<CvFacts> = {
	summary: {
		pl: "Senior Frontend Developer. React, Next.js i TypeScript, a na co dzień także frontend w Rails: Stimulus, ERB i Tailwind.",
		en: "Senior Frontend Developer. React, Next.js and TypeScript, now also shipping Rails frontends with Stimulus, ERB and Tailwind.",
	},
	languages: { pl: "polski (ojczysty) · angielski (B2)", en: "Polish (native) · English (B2)" },
	workMode: { pl: "Zdalnie · hybrydowo na Śląsku", en: "Remote · hybrid in Silesia" },
	contract: { pl: "Etat · B2B · freelance", en: "Full-time · B2B · freelance" },
	availableFrom: { pl: "Otwarty na nowe projekty", en: "Open to new projects" },
};
