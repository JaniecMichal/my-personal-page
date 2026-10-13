/** Brief form options and result types, safe to import in client components (no zod). */
export const PROJECT_TYPES = ["website", "shopify", "wordpress", "webapp", "team", "audit", "marketing", "job", "other"] as const;
export const BUDGETS = ["lt5", "5to10", "10to25", "gt25", "unknown"] as const;
export const TIMELINES = ["asap", "month", "quarter", "flexible"] as const;

export type BriefField = "types" | "budget" | "timeline" | "name" | "email" | "company" | "message" | "consent" | "locale";
export type BriefErrorKey = "name" | "email" | "message" | "consent";

export type BriefState =
	| { status: "idle" }
	// `types` is set only when an email really went out (the honeypot gets a bare success).
	| { status: "success"; types?: string[] }
	| { status: "invalid"; errors: Partial<Record<BriefField, BriefErrorKey>> }
	| { status: "error"; reason: "generic" | "rateLimit" };

/** Client-side checks mirroring `briefSchema`, so errors show (and clear) without a round trip. */
export function checkBriefField(field: BriefErrorKey, value: string): boolean {
	const v = value.trim();
	if (field === "name") return v.length >= 2 && v.length <= 120;
	if (field === "email") return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) && v.length <= 200;
	if (field === "message") return v.length >= 10 && v.length <= 5000;
	return value === "on";
}
