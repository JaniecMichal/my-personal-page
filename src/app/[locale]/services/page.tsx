import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ServiceCard } from "@/components/sections/service-card";
import { Container } from "@/components/ui/container";
import { content } from "@/content";
import type { Locale } from "@/i18n/routing";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "services.meta" });
	return pageMetadata({ locale, title: t("title"), description: t("description"), hrefFor: () => "/services" });
}

export default async function ServicesPage({ params }: Props) {
	const { locale } = await params;
	setRequestLocale(locale);
	const [t, services] = await Promise.all([getTranslations("services"), content.getServices(locale)]);

	return (
		<>
			<section className="dotgrid border-b border-rule">
				<Container className="flex flex-col gap-6 py-16 lg:py-24">
					<h1 className="ab font-serif text-6xl leading-[0.92] tracking-[-0.04em] md:text-8xl lg:text-[128px]">{t("title")}</h1>
					<p className="max-w-[640px] text-base leading-relaxed text-ink-soft md:text-lg">{t("lead")}</p>
				</Container>
			</section>
			<section className="py-16 lg:py-24">
				<Container className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
					{services.map((service, i) => (
						<ServiceCard key={service.slug} service={service} index={i} />
					))}
				</Container>
			</section>
		</>
	);
}
