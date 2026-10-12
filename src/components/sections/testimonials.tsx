"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import type { Testimonial } from "@/content";
import type { Locale } from "@/i18n/routing";
import { cn } from "@/lib/cn";

type Labels = { index: string; previous: string; next: string; source: string; translated: string };

export function Testimonials({
	items,
	labels,
	locale,
}: {
	items: Testimonial[];
	labels: Labels;
	locale: Locale;
}) {
	const [active, setActive] = useState(0);
	const item = items[active];
	if (!item) return null;

	const go = (delta: number) => setActive((i) => (i + delta + items.length) % items.length);

	return (
		<section className="pb-20 lg:pb-32" aria-roledescription="carousel" aria-label={labels.index}>
			<Container className="grid gap-6 lg:grid-cols-12">
				<span className="label lg:col-span-3">{labels.index}</span>
				<figure className="flex flex-col gap-8 lg:col-span-9">
					{/* Every quote sits in the same grid cell, so the block keeps the height of the longest one. */}
					<div className="grid" aria-live="polite">
						{items.map((t, i) => (
							<blockquote
								key={t.id}
								aria-hidden={i !== active}
								className={cn(
									"col-start-1 row-start-1 font-serif text-3xl leading-[1.12] tracking-[-0.02em] transition-opacity duration-300 md:text-5xl lg:text-[56px]",
									i === active ? "opacity-100" : "invisible opacity-0",
								)}
							>
								„{t.quote}”
							</blockquote>
						))}
					</div>
					<figcaption className="flex flex-col gap-4 border-t border-rule pt-5 text-sm sm:flex-row sm:items-center sm:justify-between">
						{/* Captions are stacked like the quotes, so a longer role line can't change the height. */}
						<span className="grid">
							{items.map((t, i) => (
								<span
									key={t.id}
									aria-hidden={i !== active}
									className={cn("col-start-1 row-start-1", i === active ? "" : "invisible")}
								>
									<strong className="font-bold">{t.author}</strong> · {t.role} ·{" "}
									<a
										href={t.url}
										target="_blank"
										rel="noopener"
										tabIndex={i === active ? undefined : -1}
										className="text-accent underline underline-offset-2"
									>
										{labels.source} ↗
									</a>
									{t.lang !== locale && (
										<span className="mt-1 block text-xs text-muted">{labels.translated}</span>
									)}
								</span>
							))}
						</span>
						<span className="flex items-center gap-2">
							<span className="mr-2 font-dots text-lg font-black">
								{active + 1}/{items.length}
							</span>
							<button
								type="button"
								onClick={() => go(-1)}
								aria-label={labels.previous}
								className="size-11 border border-ink hover:bg-ink hover:text-ground"
							>
								←
							</button>
							<button
								type="button"
								onClick={() => go(1)}
								aria-label={labels.next}
								className="size-11 border border-ink bg-ink text-ground hover:bg-accent hover:text-on-accent"
							>
								→
							</button>
						</span>
					</figcaption>
				</figure>
			</Container>
		</section>
	);
}
