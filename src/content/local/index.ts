import type { ContentSource } from "../source";
import type {
	BlogPost,
	CaseStudy,
	CvFacts,
	Education,
	Experience,
	FaqItem,
	LocalPage,
	Localized,
	PricingPlan,
	ProcessStep,
	Service,
	SiteSettings,
	SkillGroup,
	Testimonial,
} from "../types";
import { caseStudies } from "./work";
import { education, experience, skillGroups } from "./cv";
import { faq, pricingPlans, processSteps, testimonials } from "./marketing";
import { localPages } from "./local-pages";
import { posts } from "./posts";
import {
	type LocalCaseStudy,
	type LocalLocalPage,
	type LocalPost,
	type LocalService,
	resolveLocale,
} from "./resolve";
import { services } from "./services";
import { cvFacts, siteSettings } from "./settings";
import type { Locale } from "@/i18n/routing";
import { readingTime } from "@/lib/blog";

const byOrder = <T extends { order: number }>(a: T, b: T) => a.order - b.order;

const slugsOf = (slug: string | Localized<string>): Localized<string> =>
	typeof slug === "string" ? { pl: slug, en: slug } : slug;

const toService = (raw: LocalService, locale: Locale): Service => ({
	...resolveLocale<Omit<Service, "slugs">>(raw, locale),
	slugs: slugsOf(raw.slug),
});

const toLocalPage = (raw: LocalLocalPage, locale: Locale): LocalPage => ({
	...resolveLocale<Omit<LocalPage, "slugs">>(raw, locale),
	slugs: slugsOf(raw.slug),
});

const toCaseStudy = (raw: LocalCaseStudy, locale: Locale): CaseStudy => {
	const { services: serviceIds, ...rest } = raw;
	return {
		...resolveLocale<Omit<CaseStudy, "slugs" | "services">>(rest, locale),
		slugs: slugsOf(raw.slug),
		services: serviceIds.flatMap((id) => {
			const service = services.find((s) => s.id === id);
			if (!service) return [];
			const { slug, title } = toService(service, locale);
			return [{ slug, title }];
		}),
	};
};

const resolveServices = (ids: string[], locale: Locale) =>
	ids.flatMap((id) => {
		const service = services.find((s) => s.id === id);
		if (!service) return [];
		const { slug, title } = toService(service, locale);
		return [{ slug, title }];
	});

// Drafts are visible locally and in Vercel previews, never on production.
const showDrafts = process.env.VERCEL_ENV !== "production";

const toPost = (raw: LocalPost, locale: Locale, slug: string): BlogPost => {
	const { services: serviceIds, slug: slugs, ...rest } = raw;
	const post = resolveLocale<Omit<BlogPost, "slug" | "slugs" | "services" | "readingTime">>(
		rest,
		locale,
	);
	return {
		...post,
		slug,
		slugs,
		services: resolveServices(serviceIds, locale),
		readingTime: readingTime(post.body),
	};
};

const postsIn = (locale: Locale) =>
	posts.flatMap((p) => {
		const slug = p.slug[locale];
		return slug && (showDrafts || !p.draft) ? [toPost(p, locale, slug)] : [];
	});

/** Content from TypeScript files in this folder. Async to match the Sanity adapter. */
export const localSource: ContentSource = {
	getSiteSettings: async (locale) => resolveLocale<SiteSettings>(siteSettings, locale),
	getServices: async (locale) => services.map((s) => toService(s, locale)).sort(byOrder),
	getService: async (locale, slug) => {
		const raw = services.find((s) => slugsOf(s.slug)[locale] === slug);
		return raw ? toService(raw, locale) : null;
	},
	getCaseStudies: async (locale) => caseStudies.map((c) => toCaseStudy(c, locale)).sort(byOrder),
	getCaseStudy: async (locale, slug) => {
		const raw = caseStudies.find((c) => slugsOf(c.slug)[locale] === slug);
		return raw ? toCaseStudy(raw, locale) : null;
	},
	getExperience: async (locale) => resolveLocale<Experience[]>(experience, locale),
	getSkillGroups: async (locale) => resolveLocale<SkillGroup[]>(skillGroups, locale),
	getEducation: async (locale) => resolveLocale<Education[]>(education, locale),
	getCvFacts: async (locale) => resolveLocale<CvFacts>(cvFacts, locale),
	getTestimonials: async (locale) => resolveLocale<Testimonial[]>(testimonials, locale),
	getPricingPlans: async (locale) => resolveLocale<PricingPlan[]>(pricingPlans, locale),
	getFaq: async (locale) => resolveLocale<FaqItem[]>(faq, locale),
	getProcess: async (locale) => resolveLocale<ProcessStep[]>(processSteps, locale),
	getLocalPages: async (locale) => localPages.map((p) => toLocalPage(p, locale)),
	getLocalPage: async (locale, slug) => {
		const raw = localPages.find((p) => slugsOf(p.slug)[locale] === slug);
		return raw ? toLocalPage(raw, locale) : null;
	},
	getPosts: async (locale) =>
		postsIn(locale).sort((a, b) => b.publishedAt.localeCompare(a.publishedAt)),
	getPost: async (locale, slug) => postsIn(locale).find((p) => p.slug === slug) ?? null,
};
