import type { Metadata } from "next";
import { absoluteUrl } from "./site";
import { getPathname } from "@/i18n/navigation";
import { type Locale, routing } from "@/i18n/routing";

type Href = Parameters<typeof getPathname>[0]["href"];

/** Absolute URL of a route in one locale. */
export const localizedUrl = (href: Href, locale: Locale) =>
	absoluteUrl(getPathname({ href, locale }));

/**
 * hreflang alternates. `hrefFor` returns the href per locale, so detail pages can pass
 * translated slugs. `x-default` points at the default locale (never the bare root, which only redirects).
 */
export const alternatesFor = (
	locale: Locale,
	hrefFor: (locale: Locale) => Href,
	locales: readonly Locale[] = routing.locales,
) => {
	const languages = Object.fromEntries(
		locales.map((l) => [l, localizedUrl(hrefFor(l), l)]),
	) as Record<string, string>;
	const fallback = locales.includes(routing.defaultLocale) ? routing.defaultLocale : locale;
	languages["x-default"] = localizedUrl(hrefFor(fallback), fallback);

	return { canonical: localizedUrl(hrefFor(locale), locale), languages };
};

const OG_LOCALE: Record<Locale, string> = { pl: "pl_PL", en: "en_GB" };

type PageMetadataInput = {
	locale: Locale;
	title: string;
	description: string;
	hrefFor: (locale: Locale) => Href;
	noIndex?: boolean;
	/** Locales the page exists in (hreflang); default all. Blog posts may be single-language. */
	locales?: readonly Locale[];
};

export function pageMetadata({
	locale,
	title,
	description,
	hrefFor,
	noIndex,
	locales,
}: PageMetadataInput): Metadata {
	const alternates = alternatesFor(locale, hrefFor, locales);

	return {
		title,
		description,
		alternates,
		robots: noIndex ? { index: false, follow: true } : undefined,
		openGraph: {
			title,
			description,
			url: alternates.canonical,
			siteName: "Michał Janiec",
			locale: OG_LOCALE[locale],
			alternateLocale: (locales ?? routing.locales)
				.filter((l) => l !== locale)
				.map((l) => OG_LOCALE[l]),
			type: "website",
			images: [{ url: "/mjaniec-og.jpg", width: 1200, height: 630, alt: "Michał Janiec" }],
		},
		twitter: { card: "summary_large_image", title, description, images: ["/mjaniec-og.jpg"] },
	};
}
