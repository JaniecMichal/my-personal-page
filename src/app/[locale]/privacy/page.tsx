import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/container";
import { EmailLink } from "@/components/ui/email-link";
import { content } from "@/content";
import type { Locale } from "@/i18n/routing";
import { encodeEmail } from "@/lib/email";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "privacy.meta" });
	return pageMetadata({ locale, title: t("title"), description: t("description"), hrefFor: () => "/privacy" });
}

export default async function PrivacyPage({ params }: Props) {
	const { locale } = await params;
	setRequestLocale(locale);
	const [t, settings] = await Promise.all([getTranslations("privacy"), content.getSiteSettings(locale)]);
	const email = () => <EmailLink encoded={encodeEmail(settings.email)} className="text-accent" />;

	return (
		<Container className="flex max-w-[860px] flex-col gap-8 py-16 lg:py-24">
			<h1 className="font-serif text-5xl md:text-7xl">{t("title")}</h1>
			{(["p1", "p2", "p3", "p4", "p5"] as const).map((key) => (
				<p key={key} className="text-[15px] leading-[1.8] text-ink-soft">{t.rich(`body.${key}`, { email })}</p>
			))}
		</Container>
	);
}
