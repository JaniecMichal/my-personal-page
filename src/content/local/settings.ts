import type { CvFacts, SiteSettings } from "../types";
import type { LocalizedDeep } from "./resolve";

export const siteSettings: LocalizedDeep<SiteSettings> = {
	name: "Michał Janiec",
	role: "Senior Frontend Developer",
	location: { pl: "Katowice, Śląsk · zdalnie PL/EU/UK", en: "Katowice, Poland · remote PL/EU/UK" },
	email: "michal.janiec95@gmail.com",
	phone: "+48 794 236 099",
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
			pl: "Strony internetowe dla firm z Katowic i Śląska: nowe strony, rozwój i naprawy istniejących serwisów. Senior frontend developer, 5+ lat doświadczenia.",
			en: "Websites for businesses in Katowice, Silesia and remotely: new sites, plus development and fixes for existing ones. Senior frontend developer, 5+ years of experience.",
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
