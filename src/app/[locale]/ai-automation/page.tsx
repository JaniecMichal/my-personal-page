import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ActivityHeatmap } from "./_components/activity-heatmap";
import { AiField, glass, stage } from "./_components/ai-field";
import { FlowDiagram } from "./_components/flow-diagram";
import { GITHUB_PROFILE, getContributions } from "./_components/github-activity";
import { SavingsCalculator } from "./_components/savings-calculator";
import { aiPage } from "./content";
import { FaqList } from "@/components/sections/faq-list";
import { ButtonAnchor, ButtonLink, buttonClass } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { JsonLd } from "@/components/ui/json-ld";
import { SectionHeader } from "@/components/ui/section-header";
import { Tag } from "@/components/ui/tag";
import { content } from "@/content";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { BUSINESS_ID, breadcrumbJsonLd, faqJsonLd } from "@/lib/json-ld";
import { cn } from "@/lib/cn";
import { localizedUrl, pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { locale } = await params;
	const { meta } = aiPage[locale];
	// noindex until prices and claims are confirmed (.ai/search-growth-plan.md, AI-F1–F9).
	return pageMetadata({ locale, ...meta, hrefFor: () => "/ai-automation", noIndex: true });
}

export default async function AiAutomationPage({ params }: Props) {
	const { locale } = await params;
	setRequestLocale(locale);
	const tc = await getTranslations("common");
	const c = aiPage[locale];
	const url = localizedUrl("/ai-automation", locale);
	const [studies, contributions] = await Promise.all([
		content.getCaseStudies(locale),
		getContributions(),
	]);
	const number = new Intl.NumberFormat(locale);
	// Facts only: F07 (5+ years), AI daily since 2024 (CV), case studies and GitHub counted live.
	const stats = [
		{ value: "2024", label: c.why.stats.since },
		{ value: "5+", label: c.why.stats.years },
		{ value: String(studies.length), label: c.why.stats.projects },
		...(contributions
			? [{ value: number.format(contributions.total), label: c.why.stats.contributions }]
			: []),
	];

	return (
		<>
			{/* Stage: hero + problem on one dark field, the glow bleeds from one into the other. */}
			<div className={`relative isolate overflow-hidden inverse ${stage}`}>
				<AiField />
				<section className="relative z-10">
					<Container className="grid gap-12 py-12 lg:grid-cols-12 lg:gap-x-16 lg:py-20">
						<nav aria-label="Breadcrumb" className="label lg:col-span-12">
							<Link href="/" className="text-muted">
								{tc("breadcrumbHome")}
							</Link>{" "}
							/{" "}
							<span className="text-ink" aria-current="page">
								{c.breadcrumb}
							</span>
						</nav>
						<div className="flex flex-col gap-7 lg:col-span-9">
							<span className="label text-accent">{c.hero.kicker}</span>
							<h1 className="font-serif text-[48px] leading-[0.95] tracking-[-0.04em] ab-xl md:text-7xl lg:text-[96px]">
								{c.hero.title}
							</h1>
							<p className="max-w-[600px] text-base leading-relaxed text-ink-soft md:text-lg">
								{c.hero.lead}
							</p>
							<div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
								<ButtonLink
									href="/contact"
									variant="light"
									className="max-sm:px-4 max-sm:text-base"
								>
									{c.hero.primaryCta} ↗
								</ButtonLink>
								<a
									href="#kalkulator"
									className={cn(buttonClass("line"), "max-sm:px-4 max-sm:text-base")}
								>
									{c.hero.secondaryCta} ↓
								</a>
							</div>
							<p className="text-[13px] text-muted">{c.hero.note}</p>
						</div>
						<div className="lg:col-span-12">
							<FlowDiagram flow={c.flow} />
						</div>
					</Container>
				</section>

				{/* Pains: four quotes in the owner's words, glass cards on the field. */}
				<section className="relative z-10 pt-8 pb-24 lg:pt-12 lg:pb-32">
					<Container className="flex flex-col gap-12">
						<SectionHeader title={c.pains.title} index={c.pains.index} />
						<ul className="grid gap-4 sm:grid-cols-2">
							{c.pains.items.map((p) => (
								<li key={p.title} data-reveal className={`flex flex-col gap-3 p-6 md:p-8 ${glass}`}>
									<h3 className="font-serif text-3xl leading-tight">{p.title}</h3>
									<p className="text-[15px] leading-relaxed text-ink-soft">{p.body}</p>
								</li>
							))}
						</ul>
					</Container>
				</section>
			</div>
			{/* Use cases: today → after → what a person still decides. */}
			<section className="border-y border-rule bg-surface py-16 lg:py-24">
				<Container className="flex flex-col gap-12">
					<SectionHeader title={c.useCases.title} index={c.useCases.index} />
					<p className="max-w-[720px] text-base leading-relaxed text-ink-soft md:text-lg">
						{c.useCases.lead}
					</p>
					<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
						{c.useCases.items.map((u, i) => (
							<article
								key={u.id}
								data-reveal
								className="flex flex-col gap-5 bg-ground p-6 shadow-[inset_0_0_0_1px_var(--rule-strong)] chamfer"
							>
								<div className="flex items-start justify-between gap-4">
									<h3 className="font-serif text-3xl leading-tight">{u.title}</h3>
									<span className="font-dots text-2xl font-black text-accent">
										{String(i + 1).padStart(2, "0")}
									</span>
								</div>
								<div className="flex flex-wrap gap-2">
									{u.tags.map((t) => (
										<Tag key={t}>{t}</Tag>
									))}
								</div>
								<dl className="flex flex-col gap-4 text-[14px] leading-relaxed">
									<div className="flex flex-col gap-1">
										<dt className="label">{c.useCases.labels.today}</dt>
										<dd className="text-muted line-through decoration-rule-strong">{u.today}</dd>
									</div>
									<div className="flex flex-col gap-1">
										<dt className="label text-accent">{c.useCases.labels.after}</dt>
										<dd className="text-ink">{u.after}</dd>
									</div>
									<div className="flex flex-col gap-1 border-t border-rule pt-4">
										<dt className="label">{c.useCases.labels.human}</dt>
										<dd className="text-ink-soft">{u.human}</dd>
									</div>
								</dl>
							</article>
						))}
					</div>
				</Container>
			</section>

			{/* Industries common around Katowice. */}
			<section className="inverse py-16 lg:py-24">
				<Container className="flex flex-col gap-12">
					<SectionHeader title={c.industries.title} index={c.industries.index} />
					<div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
						{c.industries.items.map((ind) => (
							<div
								key={ind.name}
								data-reveal
								className="flex flex-col gap-4 border-t border-ink pt-5"
							>
								<h3 className="font-serif text-3xl leading-tight">{ind.name}</h3>
								<ul className="flex flex-col gap-2 text-[14px] leading-relaxed text-ink-soft">
									{ind.examples.map((e) => (
										<li key={e}>— {e}</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</Container>
			</section>

			{/* Calculator. */}
			<section id="kalkulator" className="scroll-mt-24 py-16 lg:py-24">
				<Container className="flex flex-col gap-12">
					<SectionHeader title={c.calculator.title} index={c.calculator.index} />
					<p className="max-w-[720px] text-base leading-relaxed text-ink-soft md:text-lg">
						{c.calculator.lead}
					</p>
					<SavingsCalculator copy={c.calculator} locale={locale} />
				</Container>
			</section>

			{/* Process: numbered timeline. */}
			<section className="border-t border-rule bg-surface py-16 lg:py-24">
				<Container className="flex flex-col gap-12">
					<SectionHeader title={c.process.title} index={c.process.index} />
					<ol className="grid gap-8 md:grid-cols-2 lg:grid-cols-5 lg:gap-6">
						{c.process.steps.map((s, i) => (
							<li
								key={s.title}
								data-reveal
								className="flex flex-col gap-3 border-t-2 border-accent pt-5"
							>
								<span className="font-dots text-4xl font-black text-accent">
									{String(i + 1).padStart(2, "0")}
								</span>
								<span className="label">{s.meta}</span>
								<h3 className="font-serif text-3xl leading-tight">{s.title}</h3>
								<p className="text-[14px] leading-relaxed text-ink-soft">{s.body}</p>
							</li>
						))}
					</ol>
				</Container>
			</section>

			{/* Safety and law. */}
			<section className="py-16 lg:py-24">
				<Container className="grid gap-12 lg:grid-cols-12">
					<div className="flex flex-col gap-6 lg:col-span-4">
						<span className="label">{c.safety.index}</span>
						<h2 className="font-serif text-5xl leading-none tracking-[-0.03em] md:text-6xl">
							{c.safety.title}
						</h2>
						<p className="text-base leading-relaxed text-ink-soft">{c.safety.lead}</p>
					</div>
					<ul className="grid gap-px bg-rule sm:grid-cols-2 lg:col-span-8">
						{c.safety.items.map((s) => (
							<li key={s.title} data-reveal className="flex flex-col gap-2 bg-ground p-6">
								<h3 className="font-serif text-2xl leading-tight">
									<span aria-hidden="true" className="mr-2 text-accent">
										✓
									</span>
									{s.title}
								</h3>
								<p className="text-[14px] leading-relaxed text-ink-soft">{s.body}</p>
							</li>
						))}
					</ul>
				</Container>
			</section>

			{/* Pricing. */}
			<section className="border-y border-rule bg-surface py-16 lg:py-24">
				<Container className="flex flex-col gap-12">
					<SectionHeader title={c.pricing.title} index={c.pricing.index} />
					<p className="max-w-[720px] text-base leading-relaxed text-ink-soft md:text-lg">
						{c.pricing.lead}
					</p>
					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
						{c.pricing.items.map((p) => (
							<div
								key={p.name}
								data-reveal
								className="brackets relative flex flex-col gap-4 bg-ground p-6"
							>
								<h3 className="font-serif text-2xl leading-tight">{p.name}</h3>
								<span className="font-dots text-3xl font-black text-accent">{p.price}</span>
								<p className="text-[14px] leading-relaxed text-ink-soft">{p.body}</p>
							</div>
						))}
					</div>
					<div className="flex flex-col gap-6 border-t border-ink pt-7 md:flex-row md:items-center md:justify-between">
						<p className="max-w-[720px] text-[14px] leading-relaxed text-muted">{c.pricing.note}</p>
						<ButtonLink href="/contact" variant="ink">
							{c.pricing.cta} ↗
						</ButtonLink>
					</div>
				</Container>
			</section>

			{/* AI is daily work: counters from real facts and the real GitHub calendar. */}
			<section className={`relative isolate overflow-hidden inverse py-20 lg:py-28 ${stage}`}>
				<AiField variant="band" />
				<Container className="relative z-10 flex flex-col gap-14">
					<div className="grid gap-10 lg:grid-cols-12">
						<div className="flex flex-col gap-6 lg:col-span-7">
							<span className="label">{c.why.index}</span>
							<h2 className="font-serif text-5xl leading-[0.95] tracking-[-0.03em] ab md:text-7xl">
								{c.why.title}
							</h2>
							{c.why.body.map((p) => (
								<p key={p} className="text-base leading-relaxed text-ink-soft md:text-lg">
									{p}
								</p>
							))}
						</div>
						<ul className="flex flex-col self-end border-t border-ink lg:col-span-5">
							{c.why.facts.map((f) => (
								<li key={f} className="border-b border-rule py-4 text-[15px] leading-relaxed">
									<span aria-hidden="true" className="mr-3 font-dots font-black text-accent">
										→
									</span>
									{f}
								</li>
							))}
						</ul>
					</div>
					<dl className="grid grid-cols-2 gap-4 lg:grid-cols-4">
						{stats.map((stat) => (
							<div
								key={stat.label}
								data-reveal
								className={`flex flex-col gap-2 p-5 md:p-6 ${glass}`}
							>
								<dd className="order-first font-dots text-5xl leading-none font-black text-accent md:text-6xl">
									{stat.value}
								</dd>
								<dt className="text-[13px] leading-snug text-ink-soft">{stat.label}</dt>
							</div>
						))}
					</dl>
					{contributions && (
						<div className={`flex flex-col gap-6 p-5 md:p-7 ${glass}`}>
							<ActivityHeatmap data={contributions} label={c.why.heatmap} locale={locale} />
							<div>
								<ButtonAnchor
									href={GITHUB_PROFILE}
									variant="line"
									size="sm"
									target="_blank"
									rel="me noopener"
								>
									{c.why.github} ↗
								</ButtonAnchor>
							</div>
						</div>
					)}
				</Container>
			</section>

			{/* FAQ. */}
			<section className="border-t border-rule pt-16 pb-20 lg:pt-24 lg:pb-28">
				<Container className="grid gap-8 lg:grid-cols-12">
					<div className="flex flex-col gap-3 lg:col-span-4">
						<span className="label">{c.faq.index}</span>
						<h2 className="font-serif text-5xl leading-none">{c.faq.title}</h2>
					</div>
					<div className="lg:col-span-8">
						<FaqList items={c.faq.items} />
					</div>
				</Container>
			</section>

			{/* Final CTA. */}
			<section className="inverse">
				<Container className="flex flex-col gap-8 py-20 lg:py-28">
					<h2 className="font-serif text-[length:min(76px,14vw)] leading-[0.92] tracking-[-0.05em] ab-xl md:text-[length:min(120px,12vw)]">
						{c.final.title}
					</h2>
					<p className="max-w-[560px] text-base leading-relaxed text-ink-soft md:text-lg">
						{c.final.lead}
					</p>
					<div>
						<ButtonLink href="/contact" variant="light">
							{c.final.cta} ↗
						</ButtonLink>
					</div>
				</Container>
			</section>

			<JsonLd
				data={[
					{
						"@context": "https://schema.org",
						"@type": "Service",
						"@id": `${url}#service`,
						name: c.hero.title.replace(/\.$/, ""),
						serviceType: c.breadcrumb,
						description: c.meta.description,
						url,
						inLanguage: locale,
						provider: { "@id": BUSINESS_ID },
						areaServed: ["Katowice", "Silesia", "Poland"],
					},
					breadcrumbJsonLd([
						{ name: tc("breadcrumbHome"), url: localizedUrl("/", locale) },
						{ name: c.breadcrumb, url },
					]),
					faqJsonLd(c.faq.items),
				]}
			/>
		</>
	);
}
