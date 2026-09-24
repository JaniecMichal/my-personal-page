import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { BriefForm } from "@/components/contact/brief-form";
import { Container } from "@/components/ui/container";
import { content } from "@/content";
import type { Locale } from "@/i18n/routing";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "contact.meta" });
	return pageMetadata({ locale, title: t("title"), description: t("description"), hrefFor: () => "/contact" });
}

export default async function ContactPage({ params }: Props) {
	const { locale } = await params;
	setRequestLocale(locale);
	const [t, settings] = await Promise.all([getTranslations("contact"), content.getSiteSettings(locale)]);

	return (
		<section className="dotgrid grow">
			<Container className="grid gap-12 py-14 lg:grid-cols-12 lg:gap-6 lg:py-22">
				<div className="flex flex-col gap-7 lg:col-span-5">
					<span className="label">{t("label")}</span>
					<h1 className="ab font-serif text-6xl leading-[0.9] tracking-[-0.05em] md:text-8xl lg:text-[112px]">{t("title")}</h1>
					<p className="max-w-[440px] text-base leading-relaxed text-ink-soft md:text-[17px]">{t("lead")}</p>
					<div className="flex flex-col gap-3.5 border-t border-ink pt-6 text-[15px]">
						<span className="label">{t("alt")}</span>
						<a href={`mailto:${settings.email}`} className="text-accent">{settings.email}</a>
						{settings.phone && <a href={`tel:${settings.phone.replace(/\s/g, "")}`}>{settings.phone}</a>}
						{settings.socials.map((s) => (
							<a key={s.href} href={s.href} target="_blank" rel="me noopener" className="text-accent">
								{s.label} ↗
							</a>
						))}
						<span className="text-muted">{settings.location}</span>
					</div>
				</div>
				<div className="lg:col-span-6 lg:col-start-7">
					<BriefForm email={settings.email} />
				</div>
			</Container>
		</section>
	);
}
