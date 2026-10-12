import type { FaqItem } from "@/content";

/** Native <details>, so answers stay in the HTML for search engines and work without JS. */
export function FaqList({ items }: { items: FaqItem[] }) {
	return (
		<div className="flex flex-col border-t border-ink">
			{items.map((item, i) => (
				<details key={item.id} className="group border-b border-rule" open={i === 0}>
					<summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-6 py-6 font-serif text-2xl md:text-[32px] [&::-webkit-details-marker]:hidden">
						<span>{item.question}</span>
						<span aria-hidden="true" className="font-dots text-3xl font-black text-accent group-open:hidden">+</span>
						<span aria-hidden="true" className="hidden font-dots text-3xl font-black text-accent group-open:inline">−</span>
					</summary>
					<p className="max-w-[680px] pb-7 text-[15px] leading-[1.7] text-ink-soft">{item.answer}</p>
				</details>
			))}
		</div>
	);
}
