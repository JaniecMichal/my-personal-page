import type { ReactNode } from "react";
import { ServiceCard } from "./service-card";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import type { Service } from "@/content";

export function ServicesGrid({
	title,
	index,
	services,
	extra,
}: {
	title: string;
	index?: string;
	services: Service[];
	/** Tiles after the services, e.g. offers with their own page (AI automation). */
	extra?: (index: number) => ReactNode;
}) {
	return (
		<section id="services" className="py-20 lg:py-32">
			<Container className="flex flex-col gap-10 lg:gap-14">
				<SectionHeader title={title} index={index} />
				<div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
					{services.map((service, i) => (
						<ServiceCard key={service.slug} service={service} index={i} />
					))}
					{extra?.(services.length)}
				</div>
			</Container>
		</section>
	);
}
