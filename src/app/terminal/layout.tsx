import "@/styles/globals.css";
import type { ReactNode } from "react";
import { TerminalNav } from "@/components/terminal/terminal-nav";
import { fontVariables } from "@/lib/fonts";

export default function TerminalLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" className={fontVariables}>
			<body className="flex min-h-screen flex-col bg-gray-950 font-mono text-gray-100">
				<TerminalNav />
				<main className="flex flex-1 flex-col">{children}</main>
			</body>
		</html>
	);
}
