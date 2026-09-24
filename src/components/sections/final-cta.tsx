import { getTranslations } from "next-intl/server";
import { Sphere } from "@/components/effects/sphere";
import { ButtonAnchor, ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export async function FinalCta({ email }: { email: string }) {
	const t = await getTranslations();

	return (
		<section id="contact" className="inverse relative overflow-hidden">
			<div className="pointer-events-none absolute -right-24 top-10 w-[420px] opacity-80 md:w-[560px] lg:right-10">
				<Sphere className="text-inverse-ink" count={700} />
			</div>
			<Container className="relative flex flex-col gap-8 py-20 lg:py-32">
				<span className="label">{t("home.final.index")}</span>
				<h2 className="ab-xl font-serif text-[84px] leading-[0.9] tracking-[-0.05em] md:text-[140px] lg:text-[200px]">
					{t("home.final.title")}
				</h2>
				<p className="max-w-[560px] text-base leading-relaxed text-ink-soft md:text-lg">{t("home.final.lead")}</p>
				<div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
					<ButtonLink href="/contact">{t("common.cta.brief")} ↗</ButtonLink>
					<ButtonAnchor href={`mailto:${email}`} variant="light">
						{email}
					</ButtonAnchor>
				</div>
			</Container>
		</section>
	);
}
