import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PostBody } from "@/components/blog/post-body";
import { PostCard } from "@/components/blog/post-card";
import { PostToc } from "@/components/blog/post-toc";
import { ReadingProgress } from "@/components/blog/reading-progress";
import { FaqList } from "@/components/sections/faq-list";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { JsonLd } from "@/components/ui/json-ld";
import { SectionHeader } from "@/components/ui/section-header";
import { Tag } from "@/components/ui/tag";
import { content } from "@/content";
import { Link } from "@/i18n/navigation";
import { type Locale, routing } from "@/i18n/routing";
import { tableOfContents } from "@/lib/blog";
import { blogPostingJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/json-ld";
import { localizedUrl, pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: Locale; slug: string }> };

export const dynamicParams = false;

export async function generateStaticParams() {
	const perLocale = await Promise.all(
		routing.locales.map(async (locale) =>
			(await content.getPosts(locale)).map((p) => ({ locale, slug: p.slug })),
		),
	);
	return perLocale.flat();
}

/** Locales the post is published in, for hreflang. */
const localesOf = (slugs: Partial<Record<Locale, string>>) =>
	routing.locales.filter((l) => Boolean(slugs[l]));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { locale, slug } = await params;
	const post = await content.getPost(locale, slug);
	if (!post) return {};
	const meta = pageMetadata({
		locale,
		title: post.seo.title ?? `${post.title} | Michał Janiec`,
		description: post.seo.description ?? post.excerpt,
		hrefFor: (l) => ({ pathname: "/blog/[slug]", params: { slug: post.slugs[l] ?? slug } }),
		locales: localesOf(post.slugs),
		noIndex: post.draft || post.seo.noIndex,
	});
	return {
		...meta,
		openGraph: {
			...meta.openGraph,
			type: "article",
			publishedTime: post.publishedAt,
			modifiedTime: post.updatedAt ?? post.publishedAt,
			authors: ["Michał Janiec"],
			tags: post.tags,
		},
	};
}

export default async function PostPage({ params }: Props) {
	const { locale, slug } = await params;
	setRequestLocale(locale);
	const post = await content.getPost(locale, slug);
	if (!post) notFound();

	const [t, tc, settings, posts] = await Promise.all([
		getTranslations("blog"),
		getTranslations("common"),
		content.getSiteSettings(locale),
		content.getPosts(locale),
	]);
	const url = localizedUrl({ pathname: "/blog/[slug]", params: { slug } }, locale);
	const toc = tableOfContents(post.body);
	const date = new Intl.DateTimeFormat(locale, { day: "numeric", month: "long", year: "numeric" });
	const fmt = (iso: string) => date.format(new Date(`${iso}T00:00:00Z`));
	// Read next: shared tags first, then newest.
	const related = posts
		.filter((p) => p.slug !== post.slug)
		.map((p) => ({ p, shared: p.tags.filter((tag) => post.tags.includes(tag)).length }))
		.sort((a, b) => b.shared - a.shared || b.p.publishedAt.localeCompare(a.p.publishedAt))
		.slice(0, 3)
		.map(({ p }) => p);

	return (
		<>
			<ReadingProgress targetId="article" label={t("progress")} />

			{post.draft && (
				<p className="bg-accent px-4 py-2 text-center text-[13px] text-on-accent">{t("draft")}</p>
			)}

			<header className="border-b border-rule dotgrid">
				<Container className="grid gap-10 py-12 lg:py-20 xl:grid-cols-12">
					<nav aria-label="Breadcrumb" className="label xl:col-span-12">
						<Link href="/" className="text-muted">
							{tc("breadcrumbHome")}
						</Link>{" "}
						/{" "}
						<Link href="/blog" className="text-muted">
							{t("title")}
						</Link>{" "}
						/ <span className="text-ink">{post.title}</span>
					</nav>
					<div className="flex flex-col gap-7 xl:col-span-8">
						<p className="label">
							<time dateTime={post.publishedAt}>{fmt(post.publishedAt)}</time> ·{" "}
							{t("minutes", { count: post.readingTime })}
							{post.updatedAt && (
								<>
									{" "}
									· {t("updated")} <time dateTime={post.updatedAt}>{fmt(post.updatedAt)}</time>
								</>
							)}
						</p>
						<h1 className="font-serif text-[44px] leading-[0.98] tracking-[-0.04em] ab md:text-7xl lg:text-[84px]">
							{post.title}
						</h1>
						<div className="flex flex-wrap gap-2">
							{post.tags.map((tag) => (
								<Tag key={tag}>{tag}</Tag>
							))}
						</div>
					</div>
					{/* Answer-first excerpt beside the title on wide screens, under it on small ones. */}
					<div className="flex flex-col gap-6 self-end xl:col-span-4">
						<p className="border-l-2 border-accent pl-5 text-base leading-relaxed text-ink md:text-lg">
							{post.excerpt}
						</p>
						<p className="flex items-center gap-3 border-t border-rule pt-4 text-[13px] text-ink-soft">
							<span className="label">{t("author")}</span>
							<Link href="/cv" className="text-ink">
								{settings.name}
							</Link>
							<span>· {settings.role}</span>
						</p>
					</div>
				</Container>
			</header>

			<Container className="grid gap-12 py-14 lg:grid-cols-12 lg:py-20">
				<aside className="lg:col-span-3">
					<div className="lg:sticky lg:top-32">
						<PostToc entries={toc} label={t("toc")} />
					</div>
				</aside>

				<article
					id="article"
					className="flex min-w-0 max-w-[720px] flex-col gap-12 lg:col-span-8 lg:col-start-5"
				>
					{post.keyTakeaways.length > 0 && (
						<section className="brackets relative flex flex-col gap-4 bg-surface p-6 md:p-8">
							<h2 className="label text-ink">{t("takeaways")}</h2>
							<ul className="flex flex-col gap-3 text-[15px] leading-relaxed">
								{post.keyTakeaways.map((k) => (
									<li key={k} className="relative pl-7">
										<span aria-hidden="true" className="absolute left-0 text-accent">
											✓
										</span>
										{k}
									</li>
								))}
							</ul>
						</section>
					)}

					<PostBody blocks={post.body} toc={toc} />

					{post.faq.length > 0 && (
						<section className="flex flex-col gap-8">
							<h2 className="font-serif text-4xl leading-none tracking-[-0.02em] md:text-5xl">
								{t("faq")}
							</h2>
							<FaqList items={post.faq} />
						</section>
					)}

					{post.services.length > 0 && (
						<section className="flex flex-col gap-4 border-t border-ink pt-6">
							<span className="label">{t("service")}</span>
							<div className="flex flex-col gap-3">
								{post.services.map((s) => (
									<Link
										key={s.slug}
										href={{ pathname: "/services/[slug]", params: { slug: s.slug } }}
										className="self-start link-draw font-serif text-3xl text-ink no-underline"
									>
										{s.title} →
									</Link>
								))}
							</div>
						</section>
					)}
				</article>
			</Container>

			<section className="pb-16 lg:pb-24">
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

			{related.length > 0 && (
				<section className="border-t border-rule py-16 lg:py-24">
					<Container className="flex flex-col gap-10">
						<SectionHeader title={t("related")} />
						<div className="grid gap-x-10 gap-y-14 md:grid-cols-2 xl:grid-cols-3">
							{related.map((p) => (
								<PostCard
									key={p.slug}
									post={p}
									date={fmt(p.publishedAt)}
									minutes={t("minutes", { count: p.readingTime })}
									readLabel={t("read")}
								/>
							))}
						</div>
					</Container>
				</section>
			)}

			<JsonLd
				data={[
					blogPostingJsonLd(
						post,
						url,
						locale,
						toc.filter((e) => e.level === 2),
					),
					breadcrumbJsonLd([
						{ name: tc("breadcrumbHome"), url: localizedUrl("/", locale) },
						{ name: t("title"), url: localizedUrl("/blog", locale) },
						{ name: post.title, url },
					]),
					...(post.faq.length > 0 ? [faqJsonLd(post.faq)] : []),
				]}
			/>
		</>
	);
}
