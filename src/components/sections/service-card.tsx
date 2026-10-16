import type { ComponentProps } from "react";
import { Tag } from "@/components/ui/tag";
import type { Service } from "@/content";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/cn";

type TileProps = {
	href: ComponentProps<typeof Link>["href"];
	index: number;
	title: string;
	summary: string;
	tags: string[];
	/** Bottom-right label, e.g. the "from" price. */
	meta: string;
	/** Dark tile, for an offer that should stand out in the grid. */
	inverse?: boolean;
	headingLevel?: 2 | 3;
};

/** One tile of the services grid. Used for `Service` entries and for standalone offer pages. */
export function ServiceTile({
	href,
	index,
	title,
	summary,
	tags,
	meta,
	inverse,
	headingLevel = 3,
}: TileProps) {
	const Heading = `h${headingLevel}` as const;
	return (
		<Link
			href={href}
			data-reveal
			style={{ transitionDelay: `${(index % 3) * 90}ms` }}
			className={cn(
				"brackets relative flex min-h-[300px] flex-col gap-4 p-6 text-ink no-underline md:p-9",
				inverse ? "inverse" : "bg-surface",
			)}
		>
			<span
				className={cn(
					"font-dots text-3xl font-black md:text-4xl",
					inverse ? "text-inverse-accent" : "text-accent",
				)}
			>
				{String(index + 1).padStart(2, "0")}
			</span>
			<Heading className="font-serif text-3xl leading-[1.05] tracking-[-0.02em] md:text-[38px]">
				{title}
			</Heading>
			<p className="grow text-[15px] leading-relaxed text-ink-soft">{summary}</p>
			<div className="flex flex-wrap items-center justify-between gap-3">
				<div className="flex flex-wrap gap-2">
					{tags.slice(0, 2).map((tag) => (
						<Tag key={tag}>{tag}</Tag>
					))}
				</div>
				<span className="text-[13px] tracking-[0.08em]">{meta} →</span>
			</div>
		</Link>
	);
}

/** `headingLevel` 2 on listing pages directly under the h1, 3 inside a titled section. */
export function ServiceCard({
	service,
	index,
	headingLevel = 3,
}: {
	service: Service;
	index: number;
	headingLevel?: 2 | 3;
}) {
	return (
		<ServiceTile
			href={{ pathname: "/services/[slug]", params: { slug: service.slug } }}
			index={index}
			title={service.title}
			summary={service.summary}
			tags={service.tags}
			meta={service.priceFrom}
			headingLevel={headingLevel}
		/>
	);
}
