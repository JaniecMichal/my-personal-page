import type { Metadata } from "next";
import { PersonalDescription } from "@/components/about-sections/personal-description";
import { PersonalDetails } from "@/components/about-sections/personal-details";

export const metadata: Metadata = {
	title: "About Me | Frontend Developer Background & Skills",
	description:
		"Learn about Michał Janiec, a senior frontend developer with expertise in React and Next.js. Discover my background, skills, and professional journey.",
	alternates: {
		canonical: "https://mjaniec.it/about",
	},
	openGraph: {
		title: "About Michał Janiec | Frontend Developer",
		description:
			"Learn about my background, skills, and professional journey as a frontend developer.",
	},
};

export default function About() {
	return (
		<div className="relative overflow-hidden">
			<div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_60%,rgba(37,99,235,0.08),transparent)]" />

			<PersonalDescription />

			<PersonalDetails />
		</div>
	);
}
