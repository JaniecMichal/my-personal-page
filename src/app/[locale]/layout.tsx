import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { ReactNode } from "react";
import { AberrationField } from "@/components/effects/aberration-field";
import { AlternateSlugsProvider } from "@/components/i18n/alternate-slugs";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { JsonLd } from "@/components/ui/json-ld";
import { content } from "@/content";
import { routing } from "@/i18n/routing";
import { fontVariables } from "@/lib/fonts";
import { personJsonLd } from "@/lib/json-ld";
import { SITE_URL } from "@/lib/site";

type Props = { children: ReactNode; params: Promise<{ locale: string }> };

export const generateStaticParams = () => routing.locales.map((locale) => ({ locale }));

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
			other: process.env.BING_SITE_VERIFICATION ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION } : undefined,
		},
	};
}

export default async function LocaleLayout({ children, params }: Props) {
	const { locale } = await params;
	if (!hasLocale(routing.locales, locale)) notFound();
	setRequestLocale(locale);

	const [t, settings] = await Promise.all([getTranslations("common"), content.getSiteSettings(locale)]);

	return (
		<html lang={locale} className={fontVariables} suppressHydrationWarning>
			<body className="flex min-h-screen flex-col">
				<NextIntlClientProvider>
					<ThemeProvider>
						<AlternateSlugsProvider>
							<a
								href="#main"
								className="fixed top-2 left-2 z-[60] -translate-y-20 bg-accent px-4 py-3 text-on-accent focus:translate-y-0"
							>
								{t("skipToContent")}
							</a>
							<Header />
							<main id="main" className="flex grow flex-col">
								{children}
							</main>
							<Footer />
						</AlternateSlugsProvider>
					</ThemeProvider>
				</NextIntlClientProvider>
				<AberrationField />
				<JsonLd data={personJsonLd(settings)} />
				<Analytics />
			</body>
		</html>
	);
}
