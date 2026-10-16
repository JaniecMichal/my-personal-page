import "@/styles/globals.css";
import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { ReactNode } from "react";
import { AberrationField } from "@/components/effects/aberration-field";
import { ScrollReveal } from "@/components/effects/scroll-reveal";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import type { AlternateSlugs } from "@/components/layout/locale-switch";
import { SiteAnalytics } from "@/components/layout/site-analytics";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { JsonLd } from "@/components/ui/json-ld";
import { content } from "@/content";
import { routing } from "@/i18n/routing";
import { fontVariables } from "@/lib/fonts";
import { businessJsonLd, personJsonLd, websiteJsonLd } from "@/lib/json-ld";
import { SITE_URL } from "@/lib/site";

type Props = { children: ReactNode; params: Promise<{ locale: string }> };

export const generateStaticParams = () => routing.locales.map((locale) => ({ locale }));
// "/foo.xml" skips the middleware (matcher ignores dots); without this it rendered with locale "foo.xml" and crashed (500).
export const dynamicParams = false;

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#f3f1ec" },
		{ media: "(prefers-color-scheme: dark)", color: "#0d0e10" },
	],
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { locale } = await params;
	if (!hasLocale(routing.locales, locale)) return {};
	const settings = await content.getSiteSettings(locale);

	return {
		metadataBase: new URL(SITE_URL),
		title: { default: settings.seo.title, template: "%s" },
		description: settings.seo.description,
		authors: [{ name: settings.name, url: SITE_URL }],
		creator: settings.name,
		formatDetection: { telephone: false },
		verification: {
			google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
			other: process.env.BING_SITE_VERIFICATION
				? { "msvalidate.01": process.env.BING_SITE_VERIFICATION }
				: undefined,
		},
	};
}

export default async function LocaleLayout({ children, params }: Props) {
	const { locale } = await params;
	if (!hasLocale(routing.locales, locale)) notFound();
	setRequestLocale(locale);

	const [t, settings, services, caseStudies, localPages, posts] = await Promise.all([
		getTranslations("common"),
		content.getSiteSettings(locale),
		content.getServices(locale),
		content.getCaseStudies(locale),
		content.getLocalPages(locale),
		content.getPosts(locale),
	]);
	// Keys match the route folders, so the language switch links to the translated slug.
	const alternates: AlternateSlugs = Object.fromEntries([
		...services.map((s) => [`services/${s.slug}`, s.slugs] as const),
		...caseStudies.map((c) => [`work/${c.slug}`, c.slugs] as const),
		...localPages.map((p) => [`local/${p.slug}`, p.slugs] as const),
		...posts.map((p) => [`blog/${p.slug}`, p.slugs] as const),
	]);

	return (
		<html lang={locale} className={fontVariables} suppressHydrationWarning>
			<body className="flex min-h-screen flex-col">
				<NextIntlClientProvider>
					<ThemeProvider>
						<a
							href="#main"
							className="fixed top-2 left-2 z-[60] -translate-y-20 bg-accent px-4 py-3 text-on-accent focus:translate-y-0"
						>
							{t("skipToContent")}
						</a>
						<Header alternates={alternates} />
						<main id="main" tabIndex={-1} className="flex grow flex-col outline-none">
							{children}
						</main>
						<Footer />
					</ThemeProvider>
				</NextIntlClientProvider>
				<AberrationField />
				<ScrollReveal />
				<JsonLd
					data={[
						personJsonLd(settings),
						websiteJsonLd(settings),
						businessJsonLd(settings, locale, services),
					]}
				/>
				<SiteAnalytics />
			</body>
		</html>
	);
}
