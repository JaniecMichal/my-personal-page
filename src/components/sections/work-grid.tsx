import { getTranslations } from "next-intl/server";
import { CaseStudyCard } from "./case-study-card";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import type { CaseStudy } from "@/content";

export async function WorkGrid({ studies }: { studies: CaseStudy[] }) {
	const t = await getTranslations();

	return (
		<section id="work" className="inverse py-20 lg:py-32">
			<Container className="flex flex-col gap-10 lg:gap-14">
				<SectionHeader title={t("home.work.title")} index={t("home.work.index")} />
				<div className="grid gap-8 lg:grid-cols-2">
					{studies.map((study, i) => (
						<CaseStudyCard
							key={study.slug}
							study={study}
							readLabel={t("common.cta.read")}
							placeholderLabel={t("work.detail.screenshot")}
							className={i % 2 === 1 ? "lg:mt-40" : undefined}
						/>
					))}
					<div className="flex flex-col justify-end gap-6 p-2 lg:p-7">
						<p className="font-serif text-3xl leading-[1.15] lg:text-[40px]">{t("home.work.cta")}</p>
						<div className="flex flex-wrap gap-3">
							<ButtonLink href="/contact" variant="light">
								{t("common.cta.brief")} ↗
							</ButtonLink>
							<ButtonLink href="/work" variant="line" className="text-inverse-ink shadow-[inset_0_0_0_1px_var(--inverse-ink)]">
								{t("common.cta.allWork")}
							</ButtonLink>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}
