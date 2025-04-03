import type { Metadata } from "next";
import { ExpHistory } from "@/components/experience-sections/exp-history";

export const metadata: Metadata = {
	title: "Technical Skills | Frontend Development Expertise",
	description:
		"Explore my technical skills in frontend development including React, Next.js, TypeScript, and more. Learn about my expertise in modern web technologies.",
	alternates: {
		canonical: "https://michaljaniec.com/skills",
	},
	openGraph: {
		title: "Frontend Development Skills | Michał Janiec",
		description:
			"Explore my technical expertise in React, Next.js, TypeScript, and modern web technologies.",
	},
};

export default function MyExp() {
	return <ExpHistory />;
}
