import { Metadata } from "next";
import { HeroAndTechSkills } from "@/components/skills-sections/hero-and-tech-skills";
import { SoftSkills } from "@/components/soft-skills";

export const metadata: Metadata = {
	title: "About Me | Frontend Developer Background & Skills",
	description:
		"Learn about Michał Janiec, a senior frontend developer with expertise in React and Next.js. Discover my background, skills, and professional journey.",
	alternates: {
		canonical: "https://michaljaniec.com/about",
	},
	openGraph: {
		title: "About Michał Janiec | Frontend Developer",
		description:
			"Learn about my background, skills, and professional journey as a frontend developer.",
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
