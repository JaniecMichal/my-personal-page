import type { MetadataRoute } from "next";
import { content } from "@/content";
import type { Localized } from "@/content/types";
import { type AppPathname, type Locale, routing } from "@/i18n/routing";
import { localizedUrl } from "@/lib/seo";

type Href = Parameters<typeof localizedUrl>[0];

const STATIC: { pathname: Exclude<AppPathname, `${string}[slug]`>; priority: number }[] = [
	{ pathname: "/", priority: 1 },
	{ pathname: "/services", priority: 0.9 },
	{ pathname: "/work", priority: 0.8 },
	{ pathname: "/pricing", priority: 0.8 },
	{ pathname: "/contact", priority: 0.8 },
	{ pathname: "/cv", priority: 0.6 },
	{ pathname: "/privacy", priority: 0.2 },
];

/** One entry per URL, each listing all its language versions (hreflang in the sitemap). */
function entries(hrefFor: (l: Locale) => Href, priority: number): MetadataRoute.Sitemap {
	const languages = Object.fromEntries(routing.locales.map((l) => [l, localizedUrl(hrefFor(l), l)]));
	return routing.locales.map((locale) => ({
		url: localizedUrl(hrefFor(locale), locale),
		lastModified: new Date(),
		changeFrequency: "monthly",
		priority,
		alternates: { languages },
	}));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const [services, studies] = await Promise.all([
		content.getServices(routing.defaultLocale),
		content.getCaseStudies(routing.defaultLocale),
	]);
	const detail = (pathname: "/services/[slug]" | "/work/[slug]", slugs: Localized<string>, priority: number) =>
		entries((l) => ({ pathname, params: { slug: slugs[l] } }), priority);

	return [
		...STATIC.flatMap(({ pathname, priority }) => entries(() => pathname, priority)),
		...services.flatMap((s) => detail("/services/[slug]", s.slugs, 0.9)),
		...studies.flatMap((s) => detail("/work/[slug]", s.slugs, 0.7)),
	];
}
