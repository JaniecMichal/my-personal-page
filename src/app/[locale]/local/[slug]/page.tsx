import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Sphere } from "@/components/effects/sphere";
import { SetAlternateSlugs } from "@/components/i18n/alternate-slugs";
import { FaqList } from "@/components/sections/faq-list";
import { ServicesGrid } from "@/components/sections/services-grid";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { JsonLd } from "@/components/ui/json-ld";
import { SectionHeader } from "@/components/ui/section-header";
import { content } from "@/content";
import { Link } from "@/i18n/navigation";
import { type Locale, routing } from "@/i18n/routing";
import { breadcrumbJsonLd, faqJsonLd, localServiceJsonLd } from "@/lib/json-ld";
import { localizedUrl, pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: Locale; slug: string }> };

export const dynamicParams = false;

export async function generateStaticParams() {
	const perLocale = await Promise.all(
		routing.locales.map(async (locale) =>
			(await content.getLocalPages(locale)).map((p) => ({ locale, slug: p.slug })),
		),
	);
	return perLocale.flat();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { locale, slug } = await params;
	const page = await content.getLocalPage(locale, slug);
	if (!page) return {};
	return pageMetadata({
		locale,
		title: page.seo.title ?? `${page.title} | Michał Janiec`,
		description: page.seo.description ?? page.intro,
		hrefFor: (l) => ({ pathname: "/local/[slug]", params: { slug: page.slugs[l] } }),
		noIndex: page.seo.noIndex,
	});
}

export default async function LocalLandingPage({ params }: Props) {
	const { locale, slug } = await params;
	setRequestLocale(locale);
	const page = await content.getLocalPage(locale, slug);
	if (!page) notFound();

	const [t, tc, ts, services] = await Promise.all([
		getTranslations("local"),
		getTranslations("common"),
		getTranslations("services"),
		content.getServices(locale),
	]);
	const url = localizedUrl({ pathname: "/local/[slug]", params: { slug } }, locale);

	return (
		<>
			<SetAlternateSlugs slugs={page.slugs} />
			<section className="overflow-hidden border-b border-rule dotgrid">
				<Container className="grid items-center gap-10 py-12 lg:grid-cols-12 lg:py-20">
					<div className="flex flex-col gap-7 lg:col-span-7">
						<nav aria-label="Breadcrumb" className="label">
							<Link href="/" className="text-muted">
								{tc("breadcrumbHome")}
							</Link>{" "}
							/ <span className="text-muted">{t("breadcrumb")}</span> /{" "}
							<span className="text-ink" aria-current="page">
								{page.city}
							</span>
						</nav>
						<h1 className="font-serif text-[52px] leading-[0.93] tracking-[-0.04em] ab md:text-8xl lg:text-[96px]">
							{page.title}
						</h1>
						<p className="max-w-[680px] text-base leading-relaxed text-ink-soft md:text-lg">
							{page.intro}
						</p>
						<div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
							<ButtonLink href="/contact">{tc("cta.quote")} ↗</ButtonLink>
							<ButtonLink href="/pricing" variant="line">
								{tc("nav.pricing")}
							</ButtonLink>
						</div>
					</div>
					<div className="mx-auto w-full max-w-[320px] lg:col-span-5 lg:max-w-none">
						<Sphere className="text-ink" />
					</div>
				</Container>
			</section>

			<section className="py-20 lg:py-28">
				<Container className="flex flex-col gap-10">
					<SectionHeader title={t("pointsTitle")} index={t("pointsLabel")} />
					<ul className="grid border-t border-ink sm:grid-cols-2 lg:grid-cols-4">
						{page.points.map((point, i) => (
							<li key={point.title} className="flex flex-col gap-3 border-b border-rule py-7 pr-6">
								<span className="font-dots text-xl font-black text-accent">
									{String(i + 1).padStart(2, "0")}
								</span>
								<h3 className="font-serif text-3xl leading-[1.05]">{point.title}</h3>
								<p className="text-sm leading-relaxed text-ink-soft">{point.description}</p>
							</li>
						))}
					</ul>
				</Container>
			</section>

			<section className="inverse py-20 lg:py-28">
				<Container className="grid gap-12 lg:grid-cols-12">
					<div className="flex flex-col gap-6 lg:col-span-7">
						<span className="label">{t("districtsLabel")}</span>
						<h2 className="font-serif text-5xl leading-none tracking-[-0.03em] lg:text-6xl">
							{t("districtsTitle")}
						</h2>
						<ul className="flex flex-wrap gap-2">
							{page.districts.map((d) => (
								<li key={d} className="border border-rule px-3 py-2 text-sm">
									{d}
								</li>
							))}
						</ul>
					</div>
					<div className="flex flex-col gap-6 lg:col-span-4 lg:col-start-9">
						<span className="label">{t("nearbyLabel")}</span>
						<h2 className="font-serif text-4xl leading-none tracking-[-0.03em]">
							{t("nearbyTitle")}
						</h2>
						<ul className="flex flex-wrap gap-2">
							{page.nearby.map((n) => (
								<li key={n} className="border border-rule px-3 py-2 text-sm">
									{n}
								</li>
							))}
						</ul>
					</div>
				</Container>
			</section>

			<ServicesGrid title={t("servicesTitle")} index={t("servicesIndex")} services={services} />

			{page.faq.length > 0 && (
				<section className="pb-20 lg:pb-28">
					<Container className="grid gap-8 lg:grid-cols-12">
						<span className="label lg:col-span-4">{t("faqLabel")}</span>
						<div className="lg:col-span-8">
							<FaqList items={page.faq} />
						</div>
					</Container>
				</section>
			)}

			<section className="pb-16 lg:pb-24">
				<Container>
					<div className="flex flex-col gap-8 bg-accent p-8 text-on-accent md:p-16 lg:flex-row lg:items-center lg:justify-between">
						<h2 className="max-w-[760px] font-serif text-4xl leading-none tracking-[-0.03em] md:text-6xl">
							{ts("detail.ctaTitle")}
						</h2>
						<ButtonLink href="/contact" variant="light" className="self-start lg:self-auto">
							{ts("detail.ctaButton")} ↗
						</ButtonLink>
					</div>
				</Container>
			</section>

			<JsonLd
				data={[
					localServiceJsonLd(page, url, locale),
					breadcrumbJsonLd([
						{ name: tc("breadcrumbHome"), url: localizedUrl("/", locale) },
						{ name: page.title, url },
					]),
					...(page.faq.length > 0 ? [faqJsonLd(page.faq)] : []),
				]}
			/>
		</>
	);
}
