import { Tag } from "@/components/ui/tag";
import type { Service } from "@/content";
import { Link } from "@/i18n/navigation";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
	return (
		<Link
			href={{ pathname: "/services/[slug]", params: { slug: service.slug } }}
			className="brackets relative flex min-h-[300px] flex-col gap-4 bg-surface p-6 text-ink no-underline md:p-9"
		>
			<span className="font-dots text-3xl font-black text-accent md:text-4xl">{String(index + 1).padStart(2, "0")}</span>
			<h3 className="font-serif text-3xl leading-[1.05] tracking-[-0.02em] md:text-[38px]">{service.title}</h3>
			<p className="grow text-[15px] leading-relaxed text-ink-soft">{service.summary}</p>
			<div className="flex flex-wrap items-center justify-between gap-3">
				<div className="flex flex-wrap gap-2">
					{service.tags.slice(0, 2).map((tag) => (
						<Tag key={tag}>{tag}</Tag>
					))}
				</div>
				<span className="text-[13px] tracking-[0.08em]">{service.priceFrom} →</span>
			</div>
		</Link>
	);
}
