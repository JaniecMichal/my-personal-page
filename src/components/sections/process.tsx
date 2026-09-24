import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import type { ProcessStep } from "@/content";

export function Process({ title, index, steps }: { title: string; index: string; steps: ProcessStep[] }) {
	return (
		<section className="py-20 lg:py-32">
			<Container className="flex flex-col gap-10 lg:gap-14">
				<SectionHeader title={title} index={index} />
				<ol className="grid border-t border-ink sm:grid-cols-2 lg:grid-cols-5">
					{steps.map((step, i) => (
						<li key={step.id} className="relative flex flex-col gap-4 pt-7 pb-8 sm:pr-6">
							<span aria-hidden="true" className="absolute -top-1.5 left-0 size-[11px] bg-accent" />
							<span className="font-dots text-[22px] font-black text-accent">{String(i + 1).padStart(2, "0")}</span>
							<h3 className="font-serif text-[32px] leading-[1.05]">{step.title}</h3>
							<p className="text-sm leading-relaxed text-ink-soft">{step.description}</p>
						</li>
					))}
				</ol>
			</Container>
		</section>
	);
}
