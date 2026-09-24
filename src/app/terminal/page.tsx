import type { Metadata } from "next";
import { TerminalWindow } from "@/components/terminal/terminal-window";

export const metadata: Metadata = {
  title: "Terminal | Michał Janiec",
  description:
    "Interactive CLI-style portfolio explorer. Type commands to navigate experience, skills, and projects.",
  alternates: { canonical: "https://mjaniec.it/terminal" },
};

export default function TerminalPage() {
	return (
		<div className="flex flex-1 flex-col p-4 md:p-6">
			<div className="flex flex-1 flex-col" style={{ minHeight: "480px" }}>
				<TerminalWindow />
			</div>
		</div>
	);
}
