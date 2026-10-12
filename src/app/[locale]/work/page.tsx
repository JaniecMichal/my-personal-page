import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { WaveField } from "@/components/effects/wave-field";
import { CaseStudyCard } from "@/components/sections/case-study-card";
import { Container } from "@/components/ui/container";
import { content } from "@/content";
import type { Locale } from "@/i18n/routing";
import { pageMetadata } from "@/lib/seo";

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

	return (
		<section className="relative isolate grow overflow-hidden inverse">
			{/* The home hero's line field, light on black here; it sits behind the title and fades into the cards. */}
			<WaveField className="absolute top-[-380px] left-1/2 z-0 w-[900px] -translate-x-1/2 text-ink md:top-[-420px] lg:left-[62%] lg:w-[1200px]" />
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
	);
}
