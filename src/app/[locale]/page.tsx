import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { FaqList } from "@/components/sections/faq-list";
import { FinalCta } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero";
import { PricingPlans } from "@/components/sections/pricing-plans";
import { Process } from "@/components/sections/process";
import { ServicesGrid } from "@/components/sections/services-grid";
import { Testimonials } from "@/components/sections/testimonials";
import { TrustStrip } from "@/components/sections/trust-strip";
import { WorkGrid } from "@/components/sections/work-grid";
import { Container } from "@/components/ui/container";
import { JsonLd } from "@/components/ui/json-ld";
import { SectionHeader } from "@/components/ui/section-header";
import { content } from "@/content";
import type { Locale } from "@/i18n/routing";
import { businessJsonLd, faqJsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "home.meta" });
	return pageMetadata({ locale, title: t("title"), description: t("description"), hrefFor: () => "/" });
}

export default async function HomePage({ params }: Props) {
	const { locale } = await params;
	setRequestLocale(locale);

	const [t, settings, services, studies, steps, testimonials, plans, faq] = await Promise.all([
		getTranslations("home"),
		content.getSiteSettings(locale),
		content.getServices(locale),
		content.getCaseStudies(locale),
		content.getProcess(locale),
		content.getTestimonials(locale),
		content.getPricingPlans(locale),
		content.getFaq(locale),
	]);

	return (
		<>
			<Hero availability={settings.availability} />
			<TrustStrip label={t("trust")} names={settings.trustedBy} />
			<ServicesGrid title={t("services.title")} index={t("services.index")} services={services} />
			<WorkGrid studies={studies} />
			<Process title={t("process.title")} index={t("process.index")} steps={steps} />
			<Testimonials
				items={testimonials}
				labels={{
					index: t("testimonials.index"),
					previous: t("testimonials.previous"),
					next: t("testimonials.next"),
					source: t("testimonials.source"),
				}}
			/>
			<section id="pricing" className="pb-20 lg:pb-32">
				<Container className="flex flex-col gap-10 lg:gap-14">
					<SectionHeader title={t("pricing.title")} index={t("pricing.index")} />
					<PricingPlans plans={plans} ctaLabel={t("pricing.cta")} />
				</Container>
			</section>
			<section className="pb-20 lg:pb-32">
				<Container className="grid gap-8 lg:grid-cols-12">
					<div className="flex flex-col gap-5 lg:col-span-4">
						<span className="label">{t("faq.index")}</span>
						<h2 className="font-serif text-5xl leading-none tracking-[-0.03em] md:text-6xl">{t("faq.title")}</h2>
					</div>
					<div className="lg:col-span-8">
						<FaqList items={faq} />
					</div>
				</Container>
			</section>
			<FinalCta email={settings.email} />
			<JsonLd data={[businessJsonLd(settings, locale, services), faqJsonLd(faq)]} />
		</>
	);
}
