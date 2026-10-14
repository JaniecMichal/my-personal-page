import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ServiceCard } from "@/components/sections/service-card";
import { Container } from "@/components/ui/container";
import { content } from "@/content";
import type { Locale } from "@/i18n/routing";
import { JsonLd } from "@/components/ui/json-ld";
import { breadcrumbJsonLd, collectionJsonLd } from "@/lib/json-ld";
import { localizedUrl, pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "services.meta" });
	return pageMetadata({
		locale,
		title: t("title"),
		description: t("description"),
		hrefFor: () => "/services",
	});
}

export default async function ServicesPage({ params }: Props) {
	const { locale } = await params;
	setRequestLocale(locale);
	const [t, tc, services] = await Promise.all([
		getTranslations("services"),
		getTranslations("common"),
		content.getServices(locale),
	]);
	const url = localizedUrl("/services", locale);

	return (
		<>
			<section className="border-b border-rule dotgrid">
				<Container className="flex flex-col gap-6 py-16 lg:py-24">
					<h1 className="font-serif text-6xl leading-[0.92] tracking-[-0.04em] ab md:text-8xl lg:text-[128px]">
						{t("title")}
					</h1>
					<p className="max-w-[640px] text-base leading-relaxed text-ink-soft md:text-lg">
						{t("lead")}
					</p>
				</Container>
			</section>
			<section className="py-16 lg:py-24">
				<Container className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
					{services.map((service, i) => (
						<ServiceCard key={service.slug} service={service} index={i} headingLevel={2} />
					))}
				</Container>
			</section>
			<JsonLd
				data={[
					collectionJsonLd(
						t("title"),
						url,
						locale,
						services.map((x) => ({
							name: x.title,
							url: localizedUrl({ pathname: "/services/[slug]", params: { slug: x.slug } }, locale),
						})),
					),
					breadcrumbJsonLd([
						{ name: tc("breadcrumbHome"), url: localizedUrl("/", locale) },
						{ name: tc("nav.services"), url },
					]),
				]}
			/>
		</>
	);
}
