import { getTranslations } from "next-intl/server";
import { Sphere } from "@/components/effects/sphere";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { StatusLine } from "@/components/ui/status-line";

export async function Hero({ availability }: { availability: string | null }) {
	const t = await getTranslations();

	return (
		<section className="dotgrid relative overflow-hidden border-b border-rule">
			<Container className="relative grid min-h-[calc(100svh-4rem)] items-center gap-10 py-12 lg:min-h-[760px] lg:grid-cols-12 lg:py-20">
				<div className="order-2 flex flex-col gap-7 lg:order-1 lg:col-span-7 motion-safe:animate-fade-up">
					{availability && <StatusLine>{availability}</StatusLine>}
					<p className="label">{t("home.hero.kicker")}</p>
					<h1 className="ab font-serif text-[56px] leading-[0.93] tracking-[-0.04em] sm:text-7xl lg:text-[104px] xl:text-[128px]">
						{t.rich("home.hero.title", { em: (chunks) => <em className="u-accent">{chunks}</em> })}
					</h1>
					<p className="max-w-[600px] text-base leading-relaxed text-ink-soft md:text-lg">{t("home.hero.lead")}</p>
					<div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
						<ButtonLink href="/contact">{t("common.cta.quote")} ↗</ButtonLink>
						<ButtonLink href="/services" variant="line">
							{t("common.cta.allServices")}
						</ButtonLink>
					</div>
				</div>
				<div className="order-1 mx-auto w-full max-w-[340px] lg:order-2 lg:col-span-5 lg:max-w-none lg:translate-x-12">
					<Sphere className="text-ink" />
				</div>
			</Container>
		</section>
	);
}
