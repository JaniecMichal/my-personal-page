import { getTranslations } from "next-intl/server";
import { WaveField } from "@/components/effects/wave-field";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export async function Hero() {
	const t = await getTranslations();

	return (
		<section className="relative isolate overflow-hidden border-b border-rule">
			{/* Oversized line field behind the copy; the section clips it. */}
			<WaveField className="absolute top-1/2 left-1/2 z-0 w-[860px] -translate-x-1/2 -translate-y-1/2 text-ink md:w-[1000px] lg:left-[58%] xl:w-[1300px]" />
			<Container className="relative z-10 flex min-h-[calc(100svh-4rem)] flex-col justify-center gap-7 py-10 motion-safe:animate-fade-up lg:min-h-[min(720px,calc(100svh-4rem))] lg:py-12">
				<h1 className="max-w-[900px] font-serif text-[56px] leading-[0.93] tracking-[-0.04em] ab sm:text-7xl lg:text-[96px] xl:text-[112px]">
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
			</Container>
		</section>
	);
}
