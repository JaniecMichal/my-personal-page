import type { PostBlock } from "@/content/types";

const WORDS_PER_MINUTE = 200;

/** Inline markup (`**bold**`, `[label](href)`) stripped to plain text. */
export const plainText = (text: string) =>
	text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*([^*]+)\*\*/g, "$1");

/** All readable text of a block, for the word count. */
const blockText = (block: PostBlock): string => {
	switch (block.type) {
		case "ul":
		case "ol":
			return block.items.join(" ");
		case "table":
			return [...block.head, ...block.rows.flat()].join(" ");
		case "callout":
			return `${block.title ?? ""} ${block.text}`;
		default:
			return block.text;
	}
};

export const readingTime = (blocks: PostBlock[]) => {
	const words = blocks
		.map((b) => plainText(blockText(b)))
		.join(" ")
		.split(/\s+/)
		.filter(Boolean).length;
	return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
};

/** URL-safe heading id. `ł` isn't decomposed by NFD, so it is mapped first. */
export const slugifyHeading = (text: string) =>
	plainText(text)
		.toLowerCase()
		.replace(/ł/g, "l")
		.normalize("NFD")
		.replace(/[̀-ͯ]/g, "")
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-+|-+$/g, "");

export type TocEntry = { id: string; text: string; level: 2 | 3 };

/** h2/h3 entries with unique ids, in document order. The body renderer uses the same ids. */
export const tableOfContents = (blocks: PostBlock[]): TocEntry[] => {
	const seen = new Map<string, number>();
	return blocks.flatMap((b) => {
		if (b.type !== "h2" && b.type !== "h3") return [];
		const base = slugifyHeading(b.text) || "sekcja";
		const n = seen.get(base) ?? 0;
		seen.set(base, n + 1);
		return [
			{
				id: n === 0 ? base : `${base}-${n + 1}`,
				text: plainText(b.text),
				level: b.type === "h2" ? 2 : 3,
			},
		];
	});
};
