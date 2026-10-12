import { cn } from "@/lib/cn";

/** Stand-in until real screenshots exist. */
export function ImagePlaceholder({ label, className }: { label: string; className?: string }) {
	return (
		<div className={cn("flex items-center justify-center bg-surface-2 p-6 text-center", className)}>
			<span className="label">{label}</span>
		</div>
	);
}
