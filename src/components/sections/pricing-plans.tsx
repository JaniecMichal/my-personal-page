import { ButtonLink } from "@/components/ui/button-link";
import type { PricingPlan } from "@/content";
import { cn } from "@/lib/cn";

export function PricingPlans({ plans, ctaLabel }: { plans: PricingPlan[]; ctaLabel: string }) {
	return (
		<div
			className={cn(
				"grid gap-5 lg:gap-6",
				plans.length % 2 === 0 ? "md:grid-cols-2" : "lg:grid-cols-3",
			)}
		>
			{plans.map((plan) => (
				<article
					key={plan.id}
					className={cn(
						"brackets relative flex flex-col gap-5 p-7 md:p-9",
						plan.highlighted ? "inverse" : "bg-surface",
					)}
				>
					<span className="label">{plan.kicker}</span>
					<h3 className="font-serif text-4xl leading-none">{plan.name}</h3>
					<p className="font-dots text-4xl font-black">{plan.price}</p>
					<ul className="grow text-sm leading-[1.9]">
						{plan.features.map((feature) => (
							<li key={feature}>— {feature}</li>
						))}
					</ul>
					<ButtonLink
						href="/contact"
						variant={plan.highlighted ? "primary" : "line"}
						className="self-start"
					>
						{ctaLabel} ↗
					</ButtonLink>
				</article>
			))}
		</div>
	);
}
