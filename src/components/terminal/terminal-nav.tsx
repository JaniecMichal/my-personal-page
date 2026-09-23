import Link from "next/link";
import type { Route } from "next";

const NAV_LINKS: { label: string; href: Route }[] = [
	{ label: "about", href: "/about" },
	{ label: "skills", href: "/skills" },
	{ label: "experience", href: "/experience" },
];

export const TerminalNav = () => (
	<nav className="flex shrink-0 items-center justify-between border-b border-gray-800 bg-gray-900 px-6 py-3">
		<Link href="/" className="font-mono text-sm text-green-500 hover:text-green-400 transition-colors">
			michał@portfolio:~
		</Link>
		<div className="flex items-center gap-5">
			{NAV_LINKS.map(({ label, href }) => (
				<Link
					key={href}
					href={href}
					className="font-mono text-xs text-gray-400 transition-colors hover:text-green-400"
				>
					{label}
				</Link>
			))}
			<Link
				href="/"
				className="font-mono text-xs text-gray-500 transition-colors hover:text-green-400"
			>
				← back
			</Link>
		</div>
	</nav>
);
