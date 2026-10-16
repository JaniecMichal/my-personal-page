import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
	locales: ["pl", "en"],
	defaultLocale: "pl",
	localePrefix: "always",
	// "/" always goes to /pl (next.config.js); no cookie or Accept-Language negotiation.
	localeDetection: false,
	pathnames: {
		"/": "/",
		"/services": { pl: "/uslugi", en: "/services" },
		"/services/[slug]": { pl: "/uslugi/[slug]", en: "/services/[slug]" },
		"/work": { pl: "/realizacje", en: "/work" },
		"/work/[slug]": { pl: "/realizacje/[slug]", en: "/work/[slug]" },
		"/pricing": { pl: "/cennik", en: "/pricing" },
		"/cv": "/cv",
		"/contact": { pl: "/kontakt", en: "/contact" },
		"/privacy": { pl: "/polityka-prywatnosci", en: "/privacy" },
		"/local/[slug]": { pl: "/strony-internetowe/[slug]", en: "/web-design/[slug]" },
		"/ai-automation": { pl: "/automatyzacja-ai", en: "/ai-automation" },
	},
});

export type Locale = (typeof routing.locales)[number];
export type AppPathname = keyof typeof routing.pathnames;
