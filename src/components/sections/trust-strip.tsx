import { Container } from "@/components/ui/container";

export function TrustStrip({ label, names }: { label: string; names: string[] }) {
	return (
		<section aria-label={label} className="border-b border-rule">
			<Container className="flex flex-col gap-3 py-6 lg:flex-row lg:items-center lg:gap-14 lg:py-10">
				<span className="label shrink-0 lg:w-40">{label}</span>
				<ul className="flex grow flex-wrap gap-x-6 gap-y-1 font-serif text-2xl text-ink-soft lg:justify-between lg:text-[34px]">
					{names.map((name) => (
						<li key={name}>{name}</li>
					))}
				</ul>
			</Container>
		</section>
	);
}
