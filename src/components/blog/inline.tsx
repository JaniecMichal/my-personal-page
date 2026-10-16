import NextLink from "next/link";
import type { ReactNode } from "react";

const TOKEN = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;

/**
 * Light inline markup used in post text: `**bold**` and `[label](href)`. Internal hrefs are full
 * localized paths (e.g. /pl/cennik); external ones open in a new tab.
 */
export function Inline({ text }: { text: string }) {
	const out: ReactNode[] = [];
	let last = 0;
	for (const m of text.matchAll(TOKEN)) {
		const i = m.index;
		if (i > last) out.push(text.slice(last, i));
		const [, bold, label, href] = m;
		if (bold) {
			out.push(
				<strong key={i} className="font-semibold text-ink">
					{bold}
				</strong>,
			);
		} else if (label && href) {
			out.push(
				href.startsWith("/") ? (
					<NextLink key={i} href={href} className="text-accent underline underline-offset-4">
						{label}
					</NextLink>
				) : (
					<a
						key={i}
						href={href}
						target="_blank"
						rel="noopener"
						className="text-accent underline underline-offset-4"
					>
						{label} ↗
					</a>
				),
			);
		}
		last = i + m[0].length;
	}
	if (last < text.length) out.push(text.slice(last));
	return <>{out}</>;
}
