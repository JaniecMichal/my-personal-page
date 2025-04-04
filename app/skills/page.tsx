import { Metadata } from "next";
import { HeroAndTechSkills } from "@/components/skills-sections/hero-and-tech-skills";
import { SoftSkills } from "@/components/skills-sections/soft-skills";

export const metadata: Metadata = {
	title: "Technical Skills | Frontend Development Expertise",
	description:
		"Explore my technical skills in frontend development including React, Next.js, TypeScript, and more. Learn about my expertise in modern web technologies.",
	alternates: {
		canonical: "https://mjaniec.it/skills",
	},
	openGraph: {
		title: "Frontend Development Skills | Michał Janiec",
		description:
			"Explore my technical expertise in React, Next.js, TypeScript, and modern web technologies.",
	},
};

export default function MySkills() {
	return (
		<div className="relative overflow-hidden">
			<div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_60%,rgba(37,99,235,0.08),transparent)]" />

			<HeroAndTechSkills />

			<SoftSkills />
		</div>
	);
}
