import { DeviceFrame, hostOf } from "@/components/ui/device-frame";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import type { CaseStudy } from "@/content";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/cn";

type Props = {
	study: CaseStudy;
	readLabel: string;
	placeholderLabel: string;
	className?: string;
	/** 2 on listing pages directly under the h1, 3 inside a titled section. */
	headingLevel?: 2 | 3;
};

export function CaseStudyCard({
	study,
	readLabel,
	placeholderLabel,
	className,
	headingLevel = 3,
}: Props) {
	const Heading = `h${headingLevel}` as const;
	const metric = study.metrics[0];

	return (
		<Link
			href={{ pathname: "/work/[slug]", params: { slug: study.slug } }}
			data-reveal
			className={cn(
				"group brackets relative flex flex-col gap-5 p-5 text-ink no-underline md:p-7",
				className,
			)}
		>
			{study.cover ? (
				<DeviceFrame
					image={study.cover}
					host={hostOf(study.liveUrl)}
					imageClassName="aspect-[16/10] object-cover object-top"
					sizes="(min-width: 1024px) 50vw, 100vw"
				/>
			) : (
				<ImagePlaceholder
					label={`${placeholderLabel}: ${study.client}`}
					className="aspect-[16/10]"
				/>
			)}
			<span className="label">
				{study.client} · {study.period}
			</span>
			<Heading className="font-serif text-3xl leading-[1.08] tracking-[-0.02em] md:text-[40px]">
				{study.title}
			</Heading>
			<div className="flex items-center justify-between border-t border-dashed border-muted pt-4">
				{metric && (
					<span className="font-dots text-2xl font-black text-inverse-accent">{metric.value}</span>
				)}
				<span className="link-draw text-[13px] tracking-[0.1em] uppercase group-hover:[background-size:100%_1px]">
					{readLabel} →
				</span>
			</div>
		</Link>
	);
}
