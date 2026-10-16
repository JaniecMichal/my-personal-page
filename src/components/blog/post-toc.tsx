"use client";

import { useEffect, useState } from "react";
import type { TocEntry } from "@/lib/blog";
import { cn } from "@/lib/cn";

/** Sticky table of contents; the section in view is highlighted. Plain anchors without JS. */
export function PostToc({ entries, label }: { entries: TocEntry[]; label: string }) {
	const [active, setActive] = useState<string | null>(entries[0]?.id ?? null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(items) => {
				const visible = items.filter((i) => i.isIntersecting);
				if (visible[0]) setActive(visible[0].target.id);
			},
			{ rootMargin: "-20% 0px -65% 0px" },
		);
		entries.forEach((e) => {
			const el = document.getElementById(e.id);
			if (el) observer.observe(el);
		});
		return () => observer.disconnect();
	}, [entries]);

	if (entries.length === 0) return null;

	return (
		<nav aria-label={label} className="flex flex-col gap-3">
			<span className="label">{label}</span>
			<ol className="flex flex-col border-l border-rule">
				{entries.map((e) => (
					<li key={e.id}>
						<a
							href={`#${e.id}`}
							aria-current={active === e.id ? "location" : undefined}
							className={cn(
								"-ml-px flex min-h-11 items-center border-l-2 py-1.5 text-[13px] leading-snug no-underline transition-colors",
								e.level === 3 ? "pl-7" : "pl-4",
								active === e.id
									? "border-accent text-ink"
									: "border-transparent text-muted hover:text-ink",
							)}
						>
							{e.text}
						</a>
					</li>
				))}
			</ol>
		</nav>
	);
}
