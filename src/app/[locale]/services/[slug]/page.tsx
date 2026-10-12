import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SetAlternateSlugs } from "@/components/i18n/alternate-slugs";
import { FaqList } from "@/components/sections/faq-list";
import { PricingPlans } from "@/components/sections/pricing-plans";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { JsonLd } from "@/components/ui/json-ld";
import { SectionHeader } from "@/components/ui/section-header";
import { content } from "@/content";
import { Link } from "@/i18n/navigation";
import { type Locale, routing } from "@/i18n/routing";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/json-ld";
import { localizedUrl, pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: Locale; slug: string }> };

export const dynamicParams = false;

export async function generateStaticParams() {
	const perLocale = await Promise.all(
		routing.locales.map(async (locale) =>
			(await content.getServices(locale)).map((s) => ({ locale, slug: s.slug })),
		),
	);
	return perLocale.flat();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { locale, slug } = await params;
	const service = await content.getService(locale, slug);
	if (!service) return {};
	return pageMetadata({
		locale,
		title: service.seo.title ?? `${service.title} | Michał Janiec`,
		description: service.seo.description ?? service.summary,
		hrefFor: (l) => ({ pathname: "/services/[slug]", params: { slug: service.slugs[l] } }),
		noIndex: service.seo.noIndex,
	});
}

export default async function ServicePage({ params }: Props) {
	const { locale, slug } = await params;
	setRequestLocale(locale);
	const service = await content.getService(locale, slug);
	if (!service) notFound();

	const [t, tc, studies] = await Promise.all([
		getTranslations("services"),
		getTranslations("common"),
		content.getCaseStudies(locale),
	]);
	const related = studies.find((s) => s.services.some((x) => x.slug === service.slug));
	const url = localizedUrl({ pathname: "/services/[slug]", params: { slug } }, locale);
	const index = String(service.order).padStart(2, "0");

	return (
		<>
			<SetAlternateSlugs slugs={service.slugs} />
			<section className="dotgrid border-b border-rule">
				<Container className="grid gap-10 py-12 lg:grid-cols-12 lg:py-20">
					<nav aria-label="Breadcrumb" className="label lg:col-span-12">
						<Link href="/" className="text-muted">{tc("breadcrumbHome")}</Link> /{" "}
						<Link href="/services" className="text-muted">{tc("nav.services")}</Link> /{" "}
						<span className="text-ink" aria-current="page">{service.title}</span>
					</nav>
					<div className="flex flex-col gap-7 lg:col-span-8">
						<span className="font-dots text-5xl font-black text-accent">{index}</span>
						<h1 className="ab font-serif text-[52px] leading-[0.93] tracking-[-0.04em] md:text-8xl lg:text-[112px]">
							{service.title}
						</h1>
						<p className="max-w-[640px] text-base leading-relaxed text-ink-soft md:text-lg">{service.intro}</p>
						<div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
							<ButtonLink href="/contact">{tc("cta.quote")} ↗</ButtonLink>
							<ButtonLink href="/pricing" variant="line">{tc("nav.pricing")}</ButtonLink>
						</div>
					</div>
					<aside className="brackets relative flex flex-col gap-3 self-end bg-surface p-7 lg:col-span-4">
						<span className="label">{t("detail.glance")}</span>
						{[
							[t("detail.from"), service.priceFrom],
							[t("detail.timeline"), service.timeline],
							[t("detail.support"), t("detail.supportValue")],
							[t("detail.invoice"), t("detail.invoiceValue")],
						].map(([k, v]) => (
							<div key={k} className="flex items-baseline justify-between gap-4 border-b border-dashed border-rule-strong pb-3 last:border-0">
								<span className="text-sm">{k}</span>
								<span className="text-right font-dots text-xl font-black uppercase">{v}</span>
							</div>
						))}
					</aside>
				</Container>
			</section>

			{service.included.length > 0 && (
				<section className="py-20 lg:py-28">
					<Container className="flex flex-col gap-10">
						<SectionHeader title={t("detail.included")} index={t("detail.includedLabel")} />
						<ul className="grid border-t border-ink sm:grid-cols-2 lg:grid-cols-4">
							{service.included.map((item, i) => (
								<li key={item.title} className="flex flex-col gap-3 border-b border-rule py-7 pr-6">
									<span className="font-dots text-xl font-black text-accent">{String(i + 1).padStart(2, "0")}</span>
									<h3 className="font-serif text-3xl leading-[1.05]">{item.title}</h3>
									<p className="text-sm leading-relaxed text-ink-soft">{item.description}</p>
								</li>
							))}
						</ul>
					</Container>
				</section>
			)}

			<section className="inverse py-20 lg:py-28">
				<Container className="grid gap-8 lg:grid-cols-12">
					<div className="flex flex-col gap-6 lg:col-span-5">
						<span className="label">{t("detail.whyLabel")}</span>
						<h2 className="font-serif text-5xl leading-none tracking-[-0.03em] lg:text-6xl">{t("detail.whyTitle")}</h2>
					</div>
					<div className="flex flex-col gap-6 text-base leading-[1.7] text-ink-soft lg:col-span-6 lg:col-start-7">
						<p>{t("detail.whyBody")}</p>
						<p>{t("detail.whyBody2")}</p>
						{related && (
							<Link
								href={{ pathname: "/work/[slug]", params: { slug: related.slug } }}
								className="text-[13px] uppercase tracking-[0.1em] text-inverse-accent"
							>
								{t("detail.related")}: {related.client} →
							</Link>
						)}
					</div>
				</Container>
			</section>

			{service.plans.length > 0 && (
				<section className="py-20 lg:py-28">
					<Container className="flex flex-col gap-10">
						<SectionHeader title={t("detail.plans")} index={t("detail.plansNote")} />
						<PricingPlans plans={service.plans} ctaLabel={tc("cta.quote")} />
					</Container>
				</section>
			)}

			{service.faq.length > 0 && (
				<section className="pb-20">
					<Container>
						<FaqList items={service.faq} />
					</Container>
				</section>
			)}

			<section className="py-16 lg:py-24">
				<Container>
					<div className="flex flex-col gap-8 bg-accent p-8 text-on-accent md:p-16 lg:flex-row lg:items-center lg:justify-between">
						<h2 className="max-w-[760px] font-serif text-4xl leading-none tracking-[-0.03em] md:text-6xl">{t("detail.ctaTitle")}</h2>
						<ButtonLink href="/contact" variant="light" className="self-start lg:self-auto">
							{t("detail.ctaButton")} ↗
						</ButtonLink>
					</div>
				</Container>
			</section>

			<JsonLd
				data={[
					serviceJsonLd(service, url, locale),
					breadcrumbJsonLd([
						{ name: tc("breadcrumbHome"), url: localizedUrl("/", locale) },
						{ name: tc("nav.services"), url: localizedUrl("/services", locale) },
						{ name: service.title, url },
					]),
				]}
			/>
		</>
	);
}
