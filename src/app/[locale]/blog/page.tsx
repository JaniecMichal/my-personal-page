import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PostCard } from "@/components/blog/post-card";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { JsonLd } from "@/components/ui/json-ld";
import { SectionHeader } from "@/components/ui/section-header";
import { content } from "@/content";
import type { Locale } from "@/i18n/routing";
import { breadcrumbJsonLd, collectionJsonLd } from "@/lib/json-ld";
import { localizedUrl, pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "blog.meta" });
	return pageMetadata({
		locale,
		title: t("title"),
		description: t("description"),
		hrefFor: () => "/blog",
	});
}

export default async function BlogPage({ params }: Props) {
	const { locale } = await params;
	setRequestLocale(locale);
	const [t, tc, posts] = await Promise.all([
		getTranslations("blog"),
		getTranslations("common"),
		content.getPosts(locale),
	]);
	const date = new Intl.DateTimeFormat(locale, { day: "numeric", month: "long", year: "numeric" });
	const url = localizedUrl("/blog", locale);
	const [latest, ...rest] = posts;
	const card = (post: (typeof posts)[number]) => ({
		post,
		date: date.format(new Date(`${post.publishedAt}T00:00:00Z`)),
		minutes: t("minutes", { count: post.readingTime }),
		readLabel: t("read"),
	});

	return (
		<>
			<section className="border-b border-rule dotgrid">
				<Container className="flex flex-col gap-6 py-16 lg:py-24">
					<span className="label">{t("label")}</span>
					<h1 className="font-serif text-7xl leading-[0.9] tracking-[-0.05em] ab-xl md:text-9xl lg:text-[180px]">
						{t("title")}
					</h1>
					<p className="max-w-[680px] text-base leading-relaxed text-ink-soft md:text-lg">
						{t("lead")}
					</p>
				</Container>
			</section>

			<section className="py-16 lg:py-24">
				<Container className="flex flex-col gap-16">
					{latest ? (
						<div className="flex flex-col gap-6">
							<span className="label text-accent">{t("latest")}</span>
							<PostCard {...card(latest)} featured headingLevel={2} />
						</div>
					) : (
						<p className="border-t border-ink pt-6 font-serif text-4xl text-ink-soft">
							{t("empty")}
						</p>
					)}
					{rest.length > 0 && (
						<div className="flex flex-col gap-10">
							<SectionHeader title={t("more")} />
							<div className="grid gap-x-10 gap-y-14 md:grid-cols-2 xl:grid-cols-3">
								{rest.map((post) => (
									<PostCard key={post.slug} {...card(post)} />
								))}
							</div>
						</div>
					)}
				</Container>
			</section>

			<section className="pb-20 lg:pb-28">
				<Container>
					<div className="flex flex-col gap-8 bg-accent p-8 text-on-accent md:p-16 lg:flex-row lg:items-center lg:justify-between">
						<h2 className="max-w-[760px] font-serif text-4xl leading-none tracking-[-0.03em] md:text-6xl">
							{t("ctaTitle")}
						</h2>
						<ButtonLink href="/contact" variant="light" className="self-start lg:self-auto">
							{t("ctaButton")} ↗
						</ButtonLink>
					</div>
				</Container>
			</section>

			<JsonLd
				data={[
					collectionJsonLd(
						t("title"),
						url,
						locale,
						posts.map((p) => ({
							name: p.title,
							url: localizedUrl({ pathname: "/blog/[slug]", params: { slug: p.slug } }, locale),
						})),
					),
					breadcrumbJsonLd([
						{ name: tc("breadcrumbHome"), url: localizedUrl("/", locale) },
						{ name: t("title"), url },
					]),
				]}
			/>
		</>
	);
}
