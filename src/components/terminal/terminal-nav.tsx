
// The terminal lives outside the locale routes, so it links to the English pages directly.
const NAV_LINKS = [
	{ label: "services", href: "/en/services" },
	{ label: "work", href: "/en/work" },
	{ label: "cv", href: "/en/cv" },
];

import Link from "next/link";

export const TerminalNav = () => (
	<nav className="flex shrink-0 items-center justify-between border-b border-gray-800 bg-gray-900 px-6 py-3">
		<Link href="/en" className="font-mono text-sm text-green-500 hover:text-green-400 transition-colors">
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
				href="/en"
				className="font-mono text-xs text-gray-500 transition-colors hover:text-green-400"
			>
				← back
			</Link>
		</div>
	</nav>
);
