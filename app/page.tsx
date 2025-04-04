import { Metadata } from "next";
import { Services } from "../src/components/services";
import { Introduction } from "@/components/home-sections/introduction";
import { CoreSkills } from "@/components/home-sections/core-skills";
import { LetsContact } from "@/components/home-sections/lets-contact";
import { TestimonialPreview } from "@/components/testimonial-preview";

export const metadata: Metadata = {
	title: "Michał Janiec | Senior Frontend Developer | React & Next.js Expert",
	description:
		"Experienced frontend developer specializing in React, Next.js, and TypeScript. Building high-performance web applications with modern technologies.",
	alternates: {
		canonical: "https://michaljaniec.com",
	},
};

export default function Home() {
	return (
		<div className="relative overflow-hidden">
			<div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_60%,rgba(37,99,235,0.12),transparent)]" />
			<div className="absolute right-0 top-0 -z-10 h-[300px] w-[300px] rounded-full bg-blue-500/20 blur-[100px]" />
			<div className="absolute bottom-0 left-0 -z-10 h-[200px] w-[200px] rounded-full bg-purple-500/20 blur-[100px]" />

			<Introduction />
			
			<CoreSkills />

			<Services />

			<TestimonialPreview />

			<LetsContact />
		</div>
	);
}
