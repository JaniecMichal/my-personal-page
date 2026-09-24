import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { Sphere } from "@/components/effects/sphere";
import { SetAlternateSlugs } from "@/components/i18n/alternate-slugs";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { JsonLd } from "@/components/ui/json-ld";
import { content } from "@/content";
import { Link } from "@/i18n/navigation";
import { type Locale, routing } from "@/i18n/routing";
import { breadcrumbJsonLd } from "@/lib/json-ld";
import { cn } from "@/lib/cn";
import { localizedUrl, pageMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";

type Props = { params: Promise<{ locale: Locale; slug: string }> };

export const dynamicParams = false;

export async function generateStaticParams() {
	const perLocale = await Promise.all(
		routing.locales.map(async (locale) =>
			(await content.getCaseStudies(locale)).map((s) => ({ locale, slug: s.slug })),
		),
	);
	return perLocale.flat();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { locale, slug } = await params;
	const study = await content.getCaseStudy(locale, slug);
	if (!study) return {};
	return pageMetadata({
		locale,
		title: study.seo.title ?? `${study.client}: ${study.title} | Michał Janiec`,
		description: study.seo.description ?? study.summary,
		hrefFor: (l) => ({ pathname: "/work/[slug]", params: { slug: study.slugs[l] } }),
		noIndex: study.seo.noIndex,
	});
}

export default async function CaseStudyPage({ params }: Props) {
	const { locale, slug } = await params;
	setRequestLocale(locale);
	const [study, studies, t, tc] = await Promise.all([
		content.getCaseStudy(locale, slug),
		content.getCaseStudies(locale),
		getTranslations("work.detail"),
		getTranslations("common"),
	]);
	if (!study) notFound();

	const next = studies[(studies.findIndex((s) => s.slug === slug) + 1) % studies.length];
	const url = localizedUrl({ pathname: "/work/[slug]", params: { slug } }, locale);

	return (
		<article>
			<SetAlternateSlugs slugs={study.slugs} />
			<header className="inverse relative overflow-hidden bg-[radial-gradient(60%_70%_at_78%_40%,rgb(46_59_255/0.5),rgb(46_59_255/0.1)_45%,transparent_70%)]">
				<div className="pointer-events-none absolute -right-32 top-10 w-[520px] opacity-80 lg:w-[620px]">
					<Sphere className="text-inverse-ink" count={700} />
				</div>
				<Container className="relative flex flex-col gap-10 py-16 lg:py-24">
					<nav aria-label="Breadcrumb" className="label">
						<Link href="/" className="text-muted">{tc("breadcrumbHome")}</Link> /{" "}
						<Link href="/work" className="text-muted">{tc("nav.work")}</Link> /{" "}
						<span className="text-ink" aria-current="page">{study.client}</span>
					</nav>
					<div className="flex max-w-[960px] flex-col gap-7">
						<span className="label">{t("label")} · {study.stack.slice(0, 2).join(" · ")}</span>
						<h1 className="ab-xl font-serif text-6xl leading-[0.9] tracking-[-0.05em] md:text-8xl lg:text-[140px]">{study.client}</h1>
						<p className="font-serif text-2xl leading-[1.15] text-ink-soft md:text-[40px]">{study.summary}</p>
					</div>
					<dl className="grid gap-6 border-t border-rule pt-7 sm:grid-cols-2 lg:grid-cols-4">
						{[
							[t("client"), study.client],
							[t("role"), study.role],
							[t("stack"), study.stack.join(" · ")],
							[t("period"), study.period],
						].map(([k, v]) => (
							<div key={k} className="flex flex-col gap-2">
								<dt className="label">{k}</dt>
								<dd>{v}</dd>
							</div>
						))}
					</dl>
				</Container>
			</header>

			<Container className="grid gap-5 pt-16 md:grid-cols-3 lg:gap-6 lg:pt-24">
				{study.metrics.map((m) => (
					<div key={m.label} className="brackets relative flex flex-col gap-2 bg-surface p-7 md:p-9">
						<span className="font-dots text-5xl leading-none font-black text-accent md:text-7xl">{m.value}</span>
						<span className="label">{m.label}</span>
					</div>
				))}
			</Container>

			<Container className="flex flex-col gap-16 py-20 lg:gap-24 lg:py-28">
				{study.chapters.map((chapter, i) => (
					<section key={chapter.title} className="grid gap-6 border-t border-ink pt-7 lg:grid-cols-12">
						<div className="flex flex-col gap-3 lg:col-span-4">
							<span className="font-dots text-[22px] font-black text-accent">{String(i + 1).padStart(2, "0")}</span>
							<h2 className="font-serif text-5xl leading-none tracking-[-0.03em]">{chapter.title}</h2>
						</div>
						<div className="flex flex-col gap-5 text-base leading-[1.75] text-ink-soft lg:col-span-7 lg:col-start-6 md:text-[17px]">
							{chapter.body.map((p) => (
								<p key={p}>{p}</p>
							))}
						</div>
					</section>
				))}
			</Container>

			<Container className="grid items-start gap-5 sm:grid-cols-12 lg:gap-6">
				{study.gallery.length > 0 ? (
					study.gallery.map((img) => (
						<Image
							key={img.src}
							src={img.src}
							alt={img.alt}
							width={img.width}
							height={img.height}
							sizes={img.height > img.width ? "(min-width: 1024px) 33vw, 100vw" : "(min-width: 1024px) 50vw, 100vw"}
							// Phone screenshots sit three in a row, desktop ones two in a row.
							className={cn("w-full", img.height > img.width ? "mx-auto max-w-[390px] sm:col-span-4" : "sm:col-span-12 lg:col-span-6")}
						/>
					))
				) : (
					<ImagePlaceholder label={t("screenshot")} className="aspect-[16/9] sm:col-span-12" />
				)}
			</Container>

			{study.quote && (
				<Container className="grid gap-6 py-20 lg:grid-cols-12 lg:py-28">
					<span className="label lg:col-span-3">{t("quote")}</span>
					<figure className="flex flex-col gap-6 lg:col-span-9">
						<blockquote className="font-serif text-3xl leading-[1.12] tracking-[-0.02em] md:text-[52px]">„{study.quote.text}”</blockquote>
						<figcaption className="text-sm">
							<strong>{study.quote.author}</strong> · {study.quote.role}
						</figcaption>
					</figure>
				</Container>
			)}

			<Container className="flex flex-col gap-4 py-12 sm:flex-row sm:flex-wrap">
				{study.liveUrl && (
					<a href={study.liveUrl} target="_blank" rel="noopener" className="text-[13px] uppercase tracking-[0.1em]">
						{t("visit")} ↗
					</a>
				)}
				{study.services.map((s) => (
					<Link key={s.slug} href={{ pathname: "/services/[slug]", params: { slug: s.slug } }} className="text-[13px] uppercase tracking-[0.1em]">
						{s.title} →
					</Link>
				))}
			</Container>

			{next && next.slug !== slug && (
				<Container className="pb-20">
					<Link
						href={{ pathname: "/work/[slug]", params: { slug: next.slug } }}
						className="inverse brackets relative flex min-h-48 items-center justify-between gap-6 p-8 no-underline md:px-16"
					>
						<span className="flex flex-col gap-3">
							<span className="label">{t("next")}</span>
							<span className="font-serif text-4xl text-inverse-ink md:text-6xl">{next.client}</span>
						</span>
						<span className="font-dots text-5xl font-black text-inverse-accent">→</span>
					</Link>
				</Container>
			)}

			<Container className="pb-20">
				<ButtonLink href="/contact">{tc("cta.quote")} ↗</ButtonLink>
			</Container>

			<JsonLd
				data={[
					{
						"@context": "https://schema.org",
						"@type": "CreativeWork",
						name: study.title,
						about: study.summary,
						url,
						inLanguage: locale,
						creator: { "@id": `${SITE_URL}/#person` },
						keywords: study.stack.join(", "),
					},
					breadcrumbJsonLd([
						{ name: tc("breadcrumbHome"), url: localizedUrl("/", locale) },
						{ name: tc("nav.work"), url: localizedUrl("/work", locale) },
						{ name: study.client, url },
					]),
				]}
			/>
		</article>
	);
}
