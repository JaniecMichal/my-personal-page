import { ServiceCard } from "./service-card";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import type { Service } from "@/content";

export function ServicesGrid({ title, index, services }: { title: string; index?: string; services: Service[] }) {
	return (
		<section id="services" className="py-20 lg:py-32">
			<Container className="flex flex-col gap-10 lg:gap-14">
				<SectionHeader title={title} index={index} />
				<div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
					{services.map((service, i) => (
						<ServiceCard key={service.slug} service={service} index={i} />
					))}
				</div>
			</Container>
		</section>
	);
}
