import type { Metadata } from "next";
import { getFormatter, getTranslations, setRequestLocale } from "next-intl/server";
import { ButtonAnchor, ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Tag } from "@/components/ui/tag";
import { content } from "@/content";
import type { Locale } from "@/i18n/routing";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "cv.meta" });
	return pageMetadata({ locale, title: t("title"), description: t("description"), hrefFor: () => "/cv" });
}

export default async function CvPage({ params }: Props) {
	const { locale } = await params;
	setRequestLocale(locale);
	const [t, format, settings, facts, jobs, skills, education] = await Promise.all([
		getTranslations("cv"),
		getFormatter(),
		content.getSiteSettings(locale),
		content.getCvFacts(locale),
		content.getExperience(locale),
		content.getSkillGroups(locale),
		content.getEducation(locale),
	]);
	const month = (ym: string) => format.dateTime(new Date(`${ym}-01`), { month: "short", year: "numeric" });
	const linkedin = settings.socials.find((s) => s.label === "LinkedIn");

	return (
		<>
			<section className="py-16 lg:py-24">
				<Container className="flex flex-col gap-7">
					<span className="label">{t("label")}</span>
					<h1 className="ab font-serif text-6xl leading-[0.9] tracking-[-0.05em] md:text-8xl lg:text-[136px]">{settings.name}</h1>
					<p className="max-w-[900px] font-serif text-2xl leading-[1.15] text-ink-soft md:text-[40px]">{facts.summary}</p>
					<div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
						<ButtonAnchor href={settings.cvUrl} download>{t("download")} ↓</ButtonAnchor>
						{linkedin && (
							<ButtonAnchor href={linkedin.href} variant="line" target="_blank" rel="me noopener">
								{t("linkedin")} ↗
							</ButtonAnchor>
						)}
					</div>
				</Container>
			</section>

			<Container>
				<dl className="brackets relative grid gap-6 bg-surface p-7 sm:grid-cols-2 lg:grid-cols-5">
					{[
						[t("facts.location"), settings.location],
						[t("facts.workMode"), facts.workMode],
						[t("facts.contract"), facts.contract],
						[t("facts.languages"), facts.languages],
						[t("facts.available"), facts.availableFrom],
					].map(([k, v]) => (
						<div key={k} className="flex flex-col gap-2">
							<dt className="label">{k}</dt>
							<dd className="text-[15px] leading-normal">{v}</dd>
						</div>
					))}
				</dl>
			</Container>

			<section className="py-20 lg:py-28">
				<Container className="grid gap-8 lg:grid-cols-12">
					<div className="flex flex-col gap-4 lg:col-span-3">
						<h2 className="label">{t("experience")}</h2>
						<span className="font-dots text-6xl leading-none font-black text-accent">{t("years")}</span>
					</div>
					<ol className="border-t border-ink lg:col-span-9">
						{jobs.map((job) => (
							<li key={job.id} className="grid gap-3 border-b border-rule py-8 md:grid-cols-9 md:gap-6">
								<span className="text-[13px] tracking-[0.06em] text-muted md:col-span-2">
									{month(job.start)} → {job.end ? month(job.end) : t("present")}
								</span>
								<div className="flex flex-col gap-3 md:col-span-7">
									<h3 className="font-serif text-3xl leading-none md:text-4xl">
										{job.company} <span className="text-muted">— {job.role}</span>
									</h3>
									<p className="text-[15px] leading-relaxed text-ink-soft">{job.description}</p>
									<div className="flex flex-wrap gap-2">
										{job.stack.map((s) => (
											<Tag key={s}>{s}</Tag>
										))}
									</div>
								</div>
							</li>
						))}
					</ol>
				</Container>
			</section>

			<section className="pb-20 lg:pb-28">
				<Container className="grid gap-8 lg:grid-cols-12">
					<h2 className="label lg:col-span-3">{t("stack")}</h2>
					<div className="grid gap-5 sm:grid-cols-3 lg:col-span-9">
						{skills.map((group) => (
							<div key={group.id} className="brackets relative flex flex-col gap-4 bg-surface p-7">
								<h3 className="font-dots text-xl font-black uppercase text-accent">{group.level}</h3>
								<ul className="text-[15px] leading-[1.9]">
									{group.items.map((item) => (
										<li key={item}>{item}</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</Container>
			</section>

			<section className="inverse py-20 lg:py-24">
				<Container className="grid gap-12 lg:grid-cols-12">
					<div className="flex flex-col gap-5 lg:col-span-5">
						<h2 className="label">{t("education")}</h2>
						{education.map((e) => (
							<p key={e.id} className="font-serif text-3xl leading-[1.15]">
								{e.title}
								{e.place && `, ${e.place}`} ({e.period})
							</p>
						))}
					</div>
					<div className="flex flex-col gap-6 lg:col-span-6 lg:col-start-7">
						<span className="label">{t("hiringLabel")}</span>
						<p className="font-serif text-4xl leading-[1.05] md:text-5xl">{t("hiringTitle")}</p>
						<ButtonLink href="/contact" className="self-start">{t("hiringCta")} ↗</ButtonLink>
					</div>
				</Container>
			</section>
		</>
	);
}
