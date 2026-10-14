import Image from "next/image";
import type { ImageAsset } from "@/content";
import { cn } from "@/lib/cn";

type Props = {
	image: ImageAsset;
	sizes: string;
	/** Shown in the browser bar of desktop screenshots, e.g. "zapachdomu.com". */
	host?: string;
	className?: string;
	/** Extra classes for the screenshot itself, e.g. a fixed aspect ratio on cards. */
	imageClassName?: string;
};

/** "https://www.example.com/x" → "example.com", for the browser bar. */
export const hostOf = (url?: string) =>
	url ? new URL(url).hostname.replace(/^www\./, "") : undefined;

/**
 * Screenshot in a device mock-up drawn with CSS: a phone for portrait images, a browser window
 * for the rest. Token colours only, so it works in light, dark and `inverse` sections.
 */
export function DeviceFrame({ image, sizes, host, className, imageClassName }: Props) {
	const screenshot = (
		<Image
			src={image.src}
			alt={image.alt}
			width={image.width}
			height={image.height}
			sizes={sizes}
			className={cn("block w-full", imageClassName)}
		/>
	);

	if (image.framed) return <div className={className}>{screenshot}</div>;

	if (image.height > image.width) {
		return (
			<div
				className={cn(
					"relative rounded-[2.25rem] border border-rule-strong bg-ink p-2.5 shadow-xl shadow-ink/10",
					className,
				)}
			>
				<span
					aria-hidden="true"
					className="absolute top-4 left-1/2 z-10 h-1.5 w-14 -translate-x-1/2 rounded-full bg-ground/25"
				/>
				<div className="overflow-hidden rounded-[1.75rem] bg-ground">{screenshot}</div>
			</div>
		);
	}

	return (
		<div
			className={cn(
				"overflow-hidden rounded-lg border border-rule-strong bg-surface shadow-xl shadow-ink/10",
				className,
			)}
		>
			<div aria-hidden="true" className="flex h-8 items-center gap-1.5 border-b border-rule px-3">
				<span className="size-2.5 rounded-full bg-rule-strong" />
				<span className="size-2.5 rounded-full bg-rule-strong" />
				<span className="size-2.5 rounded-full bg-rule-strong" />
				{host && (
					<span className="mx-auto max-w-[60%] truncate rounded-full bg-ground px-4 py-0.5 text-[11px] text-muted">
						{host}
					</span>
				)}
			</div>
			{screenshot}
		</div>
	);
}
