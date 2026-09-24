/** Brief form options and result types, safe to import in client components (no zod). */
export const PROJECT_TYPES = ["website", "shopify", "wordpress", "webapp", "team", "audit", "job", "other"] as const;
export const BUDGETS = ["lt5", "5to10", "10to25", "gt25", "unknown"] as const;
export const TIMELINES = ["asap", "month", "quarter", "flexible"] as const;

export type BriefField = "types" | "budget" | "timeline" | "name" | "email" | "company" | "message" | "consent" | "locale";
export type BriefErrorKey = "type" | "budget" | "timeline" | "name" | "email" | "message" | "consent";

export type BriefState =
	| { status: "idle" }
	| { status: "success" }
	| { status: "invalid"; errors: Partial<Record<BriefField, BriefErrorKey>> }
	| { status: "error"; reason: "generic" | "rateLimit" };
