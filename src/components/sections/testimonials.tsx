"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import type { Testimonial } from "@/content";

type Labels = { index: string; previous: string; next: string; source: string };

export function Testimonials({ items, labels }: { items: Testimonial[]; labels: Labels }) {
	const [active, setActive] = useState(0);
	const item = items[active];
	if (!item) return null;

	const go = (delta: number) => setActive((i) => (i + delta + items.length) % items.length);

	return (
		<section className="pb-20 lg:pb-32" aria-roledescription="carousel" aria-label={labels.index}>
			<Container className="grid gap-6 lg:grid-cols-12">
				<span className="label lg:col-span-3">{labels.index}</span>
				<figure className="flex flex-col gap-8 lg:col-span-9" aria-live="polite">
					<blockquote className="font-serif text-3xl leading-[1.12] tracking-[-0.02em] md:text-5xl lg:text-[56px]">
						„{item.quote}”
					</blockquote>
					<figcaption className="flex flex-col gap-4 border-t border-rule pt-5 text-sm sm:flex-row sm:items-center sm:justify-between">
						<span>
							<strong className="font-bold">{item.author}</strong> · {item.role} ·{" "}
							<a href={item.url} target="_blank" rel="noopener" className="text-accent">
								{labels.source} ↗
							</a>
						</span>
						<span className="flex items-center gap-2">
							<span className="mr-2 font-dots text-lg font-black">
								{active + 1}/{items.length}
							</span>
							<button type="button" onClick={() => go(-1)} aria-label={labels.previous} className="size-11 border border-ink hover:bg-ink hover:text-ground">
								←
							</button>
							<button type="button" onClick={() => go(1)} aria-label={labels.next} className="size-11 border border-ink bg-ink text-ground hover:bg-accent hover:text-on-accent">
								→
							</button>
						</span>
					</figcaption>
				</figure>
			</Container>
		</section>
	);
}
