import type React from "react";
import { TerminalNav } from "../../src/components/terminal/terminal-nav";

export default function TerminalLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="flex min-h-screen flex-col bg-gray-950 text-gray-100">
			<TerminalNav />
			<main className="flex flex-1 flex-col">{children}</main>
		</div>
	);
}
