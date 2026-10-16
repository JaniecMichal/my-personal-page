import { Inline } from "./inline";
import type { PostBlock } from "@/content";
import type { TocEntry } from "@/lib/blog";
import { cn } from "@/lib/cn";

const CALLOUT_TONE = {
	info: "border-accent",
	tip: "border-ink",
	warning: "border-[#c0392b]",
} as const;

/** Post body. Heading ids come from the same TOC list, so anchors always match. */
export function PostBody({ blocks, toc }: { blocks: PostBlock[]; toc: TocEntry[] }) {
	let heading = 0;

	return (
		<div className="flex flex-col gap-6 text-[16px] leading-[1.8] text-ink-soft md:text-[17px]">
			{blocks.map((block, i) => {
				switch (block.type) {
					case "h2":
					case "h3": {
						const id = toc[heading++]?.id;
						const Tag = block.type;
						return (
							<Tag
								key={i}
								id={id}
								className={cn(
									"scroll-mt-28 font-serif leading-[1.05] tracking-[-0.02em] text-ink",
									block.type === "h2"
										? "mt-8 border-t border-ink pt-6 text-4xl md:text-5xl"
										: "mt-4 text-3xl",
								)}
							>
								<Inline text={block.text} />
							</Tag>
						);
					}
					case "p":
						return (
							<p key={i}>
								<Inline text={block.text} />
							</p>
						);
					case "ul":
						return (
							<ul key={i} className="flex flex-col gap-3">
								{block.items.map((item) => (
									<li key={item} className="relative pl-7">
										<span
											aria-hidden="true"
											className="absolute left-0 font-dots font-black text-accent"
										>
											→
										</span>
										<Inline text={item} />
									</li>
								))}
							</ul>
						);
					case "ol":
						return (
							<ol key={i} className="flex flex-col gap-4">
								{block.items.map((item, n) => (
									<li key={item} className="grid grid-cols-[2.75rem_1fr] gap-2">
										<span
											aria-hidden="true"
											className="font-dots text-2xl leading-[1.3] font-black text-accent"
										>
											{String(n + 1).padStart(2, "0")}
										</span>
										<span>
											<Inline text={item} />
										</span>
									</li>
								))}
							</ol>
						);
					case "table":
						return (
							<div key={i} className="overflow-x-auto">
								<table className="w-full min-w-[520px] border-collapse text-left text-[15px]">
									<thead>
										<tr className="border-b-2 border-ink">
											{block.head.map((h) => (
												<th key={h} scope="col" className="py-3 pr-4 label text-ink">
													{h}
												</th>
											))}
										</tr>
									</thead>
									<tbody>
										{block.rows.map((row) => (
											<tr key={row.join("|")} className="border-b border-rule">
												{row.map((cell, c) => (
													<td key={c} className={cn("py-3 pr-4", c === 0 && "text-ink")}>
														<Inline text={cell} />
													</td>
												))}
											</tr>
										))}
									</tbody>
								</table>
							</div>
						);
					case "callout":
						return (
							<aside
								key={i}
								className={cn(
									"flex flex-col gap-2 border-l-4 bg-surface p-5 md:p-6",
									CALLOUT_TONE[block.tone],
								)}
							>
								{block.title && <p className="label text-ink">{block.title}</p>}
								<p className="text-[15px] leading-relaxed">
									<Inline text={block.text} />
								</p>
							</aside>
						);
					case "quote":
						return (
							<figure key={i} className="flex flex-col gap-3 border-l-2 border-accent pl-6">
								<blockquote className="font-serif text-3xl leading-tight text-ink">
									<Inline text={block.text} />
								</blockquote>
								{block.cite && <figcaption className="label">{block.cite}</figcaption>}
							</figure>
						);
				}
			})}
		</div>
	);
}
