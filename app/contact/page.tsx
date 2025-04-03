import { Metadata } from "next";
import { ContactSection } from "@/components/contact-sections/contact-section";

export const metadata: Metadata = {
	title: "Contact Me | Get in Touch for Projects & Opportunities",
	description:
		"Contact Michał Janiec for frontend development projects, collaborations, or job opportunities. I'm available for React and Next.js development work.",
	alternates: {
		canonical: "https://michaljaniec.com/contact",
	},
	openGraph: {
		title: "Contact Michał Janiec | Frontend Developer",
		description:
			"Get in touch for frontend development projects, collaborations, or job opportunities.",
	},
};

export default function Contact() {
	return (
		<div className="relative overflow-hidden">
			<div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_60%,rgba(37,99,235,0.08),transparent)]" />
			<ContactSection />
		</div>
	);
}
