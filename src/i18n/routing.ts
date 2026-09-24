import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
	locales: ["pl", "en"],
	defaultLocale: "pl",
	localePrefix: "always",
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
	},
});

export type Locale = (typeof routing.locales)[number];
export type AppPathname = keyof typeof routing.pathnames;
