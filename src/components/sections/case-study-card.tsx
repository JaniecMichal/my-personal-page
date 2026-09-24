import Image from "next/image";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import type { CaseStudy } from "@/content";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/cn";

type Props = { study: CaseStudy; readLabel: string; placeholderLabel: string; className?: string };

export function CaseStudyCard({ study, readLabel, placeholderLabel, className }: Props) {
	const metric = study.metrics[0];

	return (
		<Link
			href={{ pathname: "/work/[slug]", params: { slug: study.slug } }}
			className={cn("brackets relative flex flex-col gap-5 p-5 text-ink no-underline md:p-7", className)}
		>
			{study.cover ? (
				<Image
					src={study.cover.src}
					alt={study.cover.alt}
					width={study.cover.width}
					height={study.cover.height}
					className="aspect-[16/10] w-full object-cover"
					sizes="(min-width: 1024px) 50vw, 100vw"
				/>
			) : (
				<ImagePlaceholder label={`${placeholderLabel}: ${study.client}`} className="aspect-[16/10]" />
			)}
			<span className="label">
				{study.client} · {study.period}
			</span>
			<h3 className="font-serif text-3xl leading-[1.08] tracking-[-0.02em] md:text-[40px]">{study.title}</h3>
			<div className="flex items-center justify-between border-t border-dashed border-muted pt-4">
				{metric && <span className="font-dots text-2xl font-black text-inverse-accent">{metric.value}</span>}
				<span className="text-[13px] uppercase tracking-[0.1em]">{readLabel} →</span>
			</div>
		</Link>
	);
}
