import { z } from "zod";
import { BUDGETS, PROJECT_TYPES, TIMELINES } from "./brief-options";

export { BUDGETS, PROJECT_TYPES, TIMELINES };

/** Error values are message keys under `contact.form.errors`. */
export const briefSchema = z.object({
	types: z.array(z.enum(PROJECT_TYPES), { error: "type" }).min(1, { error: "type" }),
	budget: z.enum(BUDGETS, { error: "budget" }),
	timeline: z.enum(TIMELINES, { error: "timeline" }),
	name: z.string().trim().min(2, { error: "name" }).max(120, { error: "name" }),
	email: z.email({ error: "email" }).max(200, { error: "email" }),
	company: z.string().trim().max(200).optional().default(""),
	message: z.string().trim().min(10, { error: "message" }).max(5000, { error: "message" }),
	consent: z.literal("on", { error: "consent" }),
	locale: z.enum(["pl", "en"]).default("pl"),
});

export type BriefInput = z.infer<typeof briefSchema>;
export type { BriefErrorKey, BriefField, BriefState } from "./brief-options";
