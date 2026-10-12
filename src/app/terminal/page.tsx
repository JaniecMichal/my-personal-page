import type { Metadata } from "next";
import { TerminalWindow } from "@/components/terminal/terminal-window";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terminal | Michał Janiec",
  description:
    "Interactive CLI-style portfolio explorer. Type commands to navigate experience, skills, and projects.",
  alternates: { canonical: `${SITE_URL}/terminal` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/terminal`,
    title: "Terminal | Michał Janiec",
    description: "Interactive CLI-style portfolio explorer.",
    images: [{ url: "/mjaniec-og.jpg", width: 1200, height: 630, alt: "Michał Janiec" }],
  },
};

export default function TerminalPage() {
	return (
		<div className="flex flex-1 flex-col p-4 md:p-6">
			<h1 className="sr-only">Michał Janiec — terminal portfolio</h1>
			<div className="flex flex-1 flex-col" style={{ minHeight: "480px" }}>
				<TerminalWindow />
			</div>
		</div>
	);
}
