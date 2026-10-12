import type { CaseStudy, Localized, Service } from "../types";
import type { Locale } from "@/i18n/routing";

/** A content type where any string (or list) may be stored per locale. */
export type LocalizedDeep<T> = T extends string
	? T | Localized<string>
	: T extends (infer U)[]
		? LocalizedDeep<U>[] | Localized<U[]>
		: T extends object
			? { [K in keyof T]: LocalizedDeep<T[K]> }
			: T;

const isLocalized = (value: unknown): value is Localized<unknown> =>
	typeof value === "object" &&
	value !== null &&
	!Array.isArray(value) &&
	Object.keys(value).length === 2 &&
	"pl" in value &&
	"en" in value;

/** Walks raw local content and picks the value for `locale` wherever a `{ pl, en }` pair is found. */
export function resolveLocale<T>(raw: LocalizedDeep<T>, locale: Locale): T {
	const walk = (value: unknown): unknown => {
		if (isLocalized(value)) return walk(value[locale]);
		if (Array.isArray(value)) return value.map(walk);
		if (typeof value === "object" && value !== null) {
			return Object.fromEntries(Object.entries(value).map(([key, v]) => [key, walk(v)]));
		}
		return value;
	};

	return walk(raw) as T;
}

/**
 * Raw documents keep a stable `id` (Sanity: `_id` of the base-language document) and a slug
 * that may differ per locale. `slugs` is derived by the adapter.
 */
export type LocalService = LocalizedDeep<Omit<Service, "slugs">> & { id: string };
export type LocalCaseStudy = LocalizedDeep<Omit<CaseStudy, "slugs" | "services">> & {
	id: string;
	/** Ids of the services this case study proves. */
	services: string[];
};
