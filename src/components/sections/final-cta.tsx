import { getTranslations } from "next-intl/server";
import { Sphere } from "@/components/effects/sphere";
import { ButtonLink, buttonClass } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { EmailLink } from "@/components/ui/email-link";

export async function FinalCta({ encodedEmail }: { encodedEmail: string }) {
	const t = await getTranslations();

	return (
		<section id="contact" className="relative overflow-hidden inverse">
			<div className="pointer-events-none absolute top-10 -right-24 w-[420px] opacity-80 md:w-[560px] lg:right-10">
				<Sphere className="text-inverse-ink" count={700} />
			</div>
			<Container className="relative flex flex-col gap-8 py-20 lg:py-32">
				<span className="label">{t("home.final.index")}</span>
				<h2 className="font-serif text-[length:min(84px,17vw)] leading-[0.9] tracking-[-0.05em] ab-xl md:text-[length:min(140px,17vw)] lg:text-[length:min(200px,15vw)]">
					{t("home.final.title")}
				</h2>
				<p className="max-w-[560px] text-base leading-relaxed text-ink-soft md:text-lg">
					{t("home.final.lead")}
				</p>
				<div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
					<ButtonLink href="/contact">{t("common.cta.tellProject")} ↗</ButtonLink>
					<EmailLink encoded={encodedEmail} className={buttonClass("light")} />
				</div>
			</Container>
		</section>
	);
}
