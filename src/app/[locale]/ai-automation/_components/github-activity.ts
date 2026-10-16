import "server-only";

export type ContributionDay = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };
export type Contributions = { total: number; days: ContributionDay[] };

// Personal and company account, summed per day. The company account's work lives in private repos,
// so it shows only with "Include private contributions on my profile" switched on (it is).
const USERS = ["JaniecMichal", "JaniecMichalV"] as const;

export const GITHUB_PROFILE = `https://github.com/${USERS[0]}`;

/**
 * GitHub's own calendar fragment (the HTML the profile page loads, last 12 months, no token).
 * Each day is a `<td id=… data-date=…>`; its count sits in the `<tool-tip for=…>` text
 * ("3 contributions on …", "No contributions on …").
 */
async function fetchUser(user: string): Promise<Map<string, number> | null> {
	try {
		const res = await fetch(`https://github.com/users/${user}/contributions`, {
			next: { revalidate: 86_400 },
		});
		if (!res.ok) return null;
		const html = await res.text();

		const dateById = new Map<string, string>();
		for (const [, tag] of html.matchAll(/<td\b([^>]*data-date="[^"]+"[^>]*)>/g)) {
			const id = /\bid="([^"]+)"/.exec(tag ?? "")?.[1];
			const date = /\bdata-date="([^"]+)"/.exec(tag ?? "")?.[1];
			if (id && date) dateById.set(id, date);
		}

		const counts = new Map<string, number>();
		for (const [, id, text] of html.matchAll(
			/<tool-tip\b[^>]*\bfor="([^"]+)"[^>]*>([^<]*)<\/tool-tip>/g,
		)) {
			const date = id ? dateById.get(id) : undefined;
			if (!date) continue;
			counts.set(date, Number(/^(\d+)/.exec(text?.trim() ?? "")?.[1] ?? 0));
		}
		return counts.size > 0 ? counts : null;
	} catch {
		return null;
	}
}

/** GitHub-like levels from the combined counts: 0 = none, 1–4 = quarters of the busiest day. */
const levelFor = (count: number, max: number): ContributionDay["level"] =>
	count === 0 || max === 0 ? 0 : (Math.min(4, Math.ceil((count / max) * 4)) as 1 | 2 | 3 | 4);

/** Real contribution data for the last 12 months, refreshed daily. `null` hides the heatmap. */
export async function getContributions(): Promise<Contributions | null> {
	const accounts = (await Promise.all(USERS.map(fetchUser))).filter((a) => a !== null);
	if (accounts.length === 0) return null;

	const byDate = new Map<string, number>();
	for (const counts of accounts) {
		for (const [date, count] of counts) byDate.set(date, (byDate.get(date) ?? 0) + count);
	}
	const max = Math.max(...byDate.values());
	const days = [...byDate.keys()].sort().map((date) => {
		const count = byDate.get(date) ?? 0;
		return { date, count, level: levelFor(count, max) };
	});
	const total = days.reduce((sum, d) => sum + d.count, 0);

	return { total, days };
}
