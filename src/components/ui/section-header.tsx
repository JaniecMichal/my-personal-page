import { cn } from "@/lib/cn";

type SectionHeaderProps = {
	title: string;
	index?: string;
	as?: "h1" | "h2";
	className?: string;
};

export function SectionHeader({ title, index, as: Heading = "h2", className }: SectionHeaderProps) {
	return (
		<div
			className={cn(
				"flex flex-col gap-3 border-b border-muted pb-5 md:flex-row md:items-end md:justify-between",
				className,
			)}
		>
			<Heading className="font-serif text-5xl leading-none tracking-[-0.03em] md:text-7xl">{title}</Heading>
			{index && <span className="label">{index}</span>}
		</div>
	);
}
