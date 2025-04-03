import type { Metadata } from "next";
import { ExpHistory } from "@/components/experience-sections/exp-history";

export const metadata: Metadata = {
	title: "Professional Experience | Frontend Development Career",
	description:
		"Review my professional experience as a frontend developer. Learn about my work history, projects, and roles at companies like HexOcean and jemWszkole.pl.",
	alternates: {
		canonical: "https://michaljaniec.com/experience",
	},
	openGraph: {
		title: "Professional Experience | Michał Janiec",
		description: "Review my career journey and professional experience as a frontend developer.",
	},
};

export default function MyExp() {
	return <ExpHistory />;
}
