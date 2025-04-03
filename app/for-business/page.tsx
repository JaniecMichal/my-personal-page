import type { Metadata } from "next";
import { ServiceIntroduction } from "@/components/buisness-sections/service-introduction";
import { BuisnessWorkflow } from "@/components/buisness-sections/buisness-workflow";
import { ContactForBuisness } from "@/components/buisness-sections/contact-for-buisness";

export const metadata: Metadata = {
	title: "Business Services | Frontend Development Solutions",
	description:
		"Professional frontend development services for businesses. Custom web applications, team collaboration, consulting, and mobile app development solutions.",
	alternates: {
		canonical: "https://michaljaniec.com/for-business",
	},
	openGraph: {
		title: "Business Services | Frontend Development Solutions",
		description:
			"Professional development services tailored to your business needs. Web applications, consulting, and more.",
	},
};

export default function ForBusiness() {
	return (
		<div className="relative overflow-hidden">
			<div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_60%,rgba(37,99,235,0.08),transparent)]" />
			<ServiceIntroduction />

			<BuisnessWorkflow />

			<ContactForBuisness />
		</div>
	);
}
