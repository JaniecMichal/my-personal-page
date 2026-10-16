import { Tag } from "@/components/ui/tag";
import type { BlogPost } from "@/content";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/cn";

type Props = {
	post: BlogPost;
	date: string;
	minutes: string;
	readLabel: string;
	featured?: boolean;
	headingLevel?: 2 | 3;
};

/** Listing card; the whole card is clickable through the title link's overlay. */
export function PostCard({ post, date, minutes, readLabel, featured, headingLevel = 3 }: Props) {
	const Heading = `h${headingLevel}` as const;

	return (
		<article
			data-reveal
			className={cn(
				"group relative flex flex-col gap-5",
				featured ? "brackets bg-surface p-7 md:p-10 lg:p-14" : "border-t border-ink pt-6",
			)}
		>
			<p className="label">
				<time dateTime={post.publishedAt}>{date}</time> · {minutes}
			</p>
			<Heading
				className={cn(
					"font-serif leading-[1.02] tracking-[-0.03em] text-ink",
					featured ? "max-w-[900px] text-5xl md:text-7xl" : "text-3xl md:text-4xl",
				)}
			>
				<Link
					href={{ pathname: "/blog/[slug]", params: { slug: post.slug } }}
					className="no-underline group-hover:text-accent after:absolute after:inset-0"
				>
					{post.title}
				</Link>
			</Heading>
			<p
				className={cn(
					"leading-relaxed text-ink-soft",
					featured ? "max-w-[720px] text-base md:text-lg" : "line-clamp-4 text-[15px]",
				)}
			>
				{post.excerpt}
			</p>
			<div className="mt-auto flex flex-wrap items-center gap-2">
				{post.tags.map((t) => (
					<Tag key={t}>{t}</Tag>
				))}
				<span
					aria-hidden="true"
					className="ml-auto font-dots text-lg font-black text-accent uppercase"
				>
					{readLabel} →
				</span>
			</div>
		</article>
	);
}
