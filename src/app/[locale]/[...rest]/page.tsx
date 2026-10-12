import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "notFound" });
	return { title: `404 — ${t("title")} | Michał Janiec`, robots: { index: false } };
}

// Unknown paths inside a locale render the localized not-found page.
export default function CatchAll() {
	notFound();
}
