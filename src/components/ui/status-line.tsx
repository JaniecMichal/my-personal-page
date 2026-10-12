import { cn } from "@/lib/cn";

export function StatusLine({ children, className }: { children: string; className?: string }) {
	return (
		<p className={cn("flex items-center gap-3 text-xs uppercase tracking-[0.12em] md:text-[13px]", className)}>
			<span className="relative flex size-2.5 shrink-0">
				<span className="absolute inset-0 animate-ping rounded-full bg-success opacity-40 motion-reduce:hidden" />
				<span className="relative size-2.5 rounded-full bg-success" />
			</span>
			{children}
		</p>
	);
}
