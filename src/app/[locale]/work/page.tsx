import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { WaveField } from "@/components/effects/wave-field";
import { CaseStudyCard } from "@/components/sections/case-study-card";
import { Container } from "@/components/ui/container";
import { content } from "@/content";
import type { Locale } from "@/i18n/routing";
import { JsonLd } from "@/components/ui/json-ld";
import { breadcrumbJsonLd, collectionJsonLd } from "@/lib/json-ld";
import { localizedUrl, pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "work.meta" });
	return pageMetadata({
		locale,
		title: t("title"),
		description: t("description"),
		hrefFor: () => "/work",
	});
}

export default async function WorkPage({ params }: Props) {
	const { locale } = await params;
	setRequestLocale(locale);
	const [t, tc, studies] = await Promise.all([
		getTranslations("work"),
		getTranslations("common"),
		content.getCaseStudies(locale),
	]);
	const url = localizedUrl("/work", locale);

	return (
		<>
			<section className="relative isolate grow overflow-hidden inverse">
				{/* The home hero's line field, light on black: a square as tall as the whole section, centred behind the projects. */}
				<WaveField
					className="absolute top-1/2 left-1/2 z-0 h-[105%] -translate-x-1/2 -translate-y-1/2 text-ink"
					strength={1.6}
				/>
				<Container className="relative z-10 flex flex-col gap-6 py-16 lg:py-24">
					<h1 className="font-serif text-6xl leading-[0.92] tracking-[-0.04em] ab-xl md:text-8xl lg:text-[128px]">
						{t("title")}
					</h1>
					<p className="max-w-[640px] text-base leading-relaxed text-ink-soft md:text-lg">
						{t("lead")}
					</p>
				</Container>
				<Container className="relative z-10 grid gap-8 pb-24 lg:grid-cols-2">
					{studies.map((study, i) => (
						<CaseStudyCard
							headingLevel={2}
							key={study.slug}
							study={study}
							readLabel={tc("cta.read")}
							placeholderLabel={t("detail.screenshot")}
							className={i % 2 === 1 ? "lg:mt-40" : undefined}
						/>
					))}
				</Container>
			</section>
			<JsonLd
				data={[
					collectionJsonLd(
						t("title"),
						url,
						locale,
						studies.map((x) => ({
							name: x.title,
							url: localizedUrl({ pathname: "/work/[slug]", params: { slug: x.slug } }, locale),
						})),
					),
					breadcrumbJsonLd([
						{ name: tc("breadcrumbHome"), url: localizedUrl("/", locale) },
						{ name: tc("nav.work"), url },
					]),
				]}
			/>
		</>
	);
}
