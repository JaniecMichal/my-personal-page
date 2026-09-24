import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { FaqList } from "@/components/sections/faq-list";
import { PricingPlans } from "@/components/sections/pricing-plans";
import { Container } from "@/components/ui/container";
import { JsonLd } from "@/components/ui/json-ld";
import { content } from "@/content";
import type { Locale } from "@/i18n/routing";
import { faqJsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "pricing.meta" });
	return pageMetadata({ locale, title: t("title"), description: t("description"), hrefFor: () => "/pricing" });
}

export default async function PricingPage({ params }: Props) {
	const { locale } = await params;
	setRequestLocale(locale);
	const [t, th, plans, faq] = await Promise.all([
		getTranslations("pricing"),
		getTranslations("home"),
		content.getPricingPlans(locale),
		content.getFaq(locale),
	]);

	return (
		<>
			<section className="dotgrid border-b border-rule">
				<Container className="flex flex-col gap-6 py-16 lg:py-24">
					<h1 className="ab font-serif text-6xl leading-[0.92] tracking-[-0.04em] md:text-8xl lg:text-[128px]">{t("title")}</h1>
					<p className="max-w-[640px] text-base leading-relaxed text-ink-soft md:text-lg">{t("lead")}</p>
				</Container>
			</section>
			<section className="py-16 lg:py-24">
				<Container className="flex flex-col gap-14">
					<PricingPlans plans={plans} ctaLabel={th("pricing.cta")} />
					<div className="grid gap-6 border-t border-ink pt-7 lg:grid-cols-12">
						<h2 className="font-serif text-4xl lg:col-span-4">{t("drivers")}</h2>
						<ul className="grid gap-3 text-[15px] leading-relaxed text-ink-soft sm:grid-cols-2 lg:col-span-8">
							{(["d1", "d2", "d3", "d4"] as const).map((key) => (
								<li key={key}>— {t(`driverList.${key}`)}</li>
							))}
						</ul>
					</div>
				</Container>
			</section>
			<section className="pb-20 lg:pb-28">
				<Container className="grid gap-8 lg:grid-cols-12">
					<h2 className="font-serif text-5xl leading-none lg:col-span-4">{th("faq.title")}</h2>
					<div className="lg:col-span-8">
						<FaqList items={faq} />
					</div>
				</Container>
			</section>
			<JsonLd data={faqJsonLd(faq)} />
		</>
	);
}
