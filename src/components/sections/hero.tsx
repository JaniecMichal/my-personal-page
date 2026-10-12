import { getTranslations } from "next-intl/server";
import { WaveSphere } from "@/components/effects/wave-sphere";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export async function Hero() {
	const t = await getTranslations();

	return (
		<section className="relative overflow-hidden border-b border-rule dotgrid">
			<Container className="relative grid min-h-[calc(100svh-4rem)] items-center gap-10 py-10 lg:min-h-[min(720px,calc(100svh-4rem))] lg:grid-cols-12 lg:py-12">
				<div className="order-2 flex flex-col gap-7 motion-safe:animate-fade-up lg:order-1 lg:col-span-7">
					<h1 className="font-serif text-[56px] leading-[0.93] tracking-[-0.04em] ab sm:text-7xl lg:text-[96px] xl:text-[112px]">
						{t.rich("home.hero.title", { em: (chunks) => <em className="u-accent">{chunks}</em> })}
					</h1>
					<p className="max-w-[600px] text-base leading-relaxed text-ink-soft md:text-lg">
						{t("home.hero.lead")}
					</p>
					<div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
						<ButtonLink href="/contact">{t("common.cta.quote")} ↗</ButtonLink>
						<ButtonLink href="/services" variant="line">
							{t("common.cta.allServices")}
						</ButtonLink>
					</div>
				</div>
				<div className="order-1 mx-auto w-full max-w-[340px] lg:order-2 lg:col-span-5 lg:max-w-none lg:translate-x-12">
					<WaveSphere className="text-ink" />
				</div>
			</Container>
		</section>
	);
}
