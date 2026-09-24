import type {
	CaseStudy,
	CvFacts,
	Education,
	Experience,
	FaqItem,
	PricingPlan,
	ProcessStep,
	Service,
	SiteSettings,
	SkillGroup,
	Testimonial,
} from "./types";
import type { Locale } from "@/i18n/routing";

/**
 * The only contract pages depend on. Implemented by `local/` today and by `sanity/` later.
 * Lists come back sorted and resolved for `locale`.
 */
export interface ContentSource {
	getSiteSettings(locale: Locale): Promise<SiteSettings>;
	getServices(locale: Locale): Promise<Service[]>;
	getService(locale: Locale, slug: string): Promise<Service | null>;
	getCaseStudies(locale: Locale): Promise<CaseStudy[]>;
	getCaseStudy(locale: Locale, slug: string): Promise<CaseStudy | null>;
	getExperience(locale: Locale): Promise<Experience[]>;
	getSkillGroups(locale: Locale): Promise<SkillGroup[]>;
	getEducation(locale: Locale): Promise<Education[]>;
	getCvFacts(locale: Locale): Promise<CvFacts>;
	getTestimonials(locale: Locale): Promise<Testimonial[]>;
	getPricingPlans(locale: Locale): Promise<PricingPlan[]>;
	getFaq(locale: Locale): Promise<FaqItem[]>;
	getProcess(locale: Locale): Promise<ProcessStep[]>;
}
