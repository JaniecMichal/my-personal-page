import type { ContentSource } from "../source";

const notReady = (): never => {
	throw new Error(
		"CONTENT_SOURCE=sanity is set, but the Sanity adapter is not implemented yet. See src/content/sanity/README.md.",
	);
};

/**
 * Placeholder with the same contract as the local source. Implement each method with
 * `sanityFetch(QUERY, { locale, slug })` from next-sanity, using the GROQ in ./queries.ts.
 */
export const sanitySource: ContentSource = {
	getSiteSettings: notReady,
	getServices: notReady,
	getService: notReady,
	getCaseStudies: notReady,
	getCaseStudy: notReady,
	getExperience: notReady,
	getSkillGroups: notReady,
	getEducation: notReady,
	getCvFacts: notReady,
	getTestimonials: notReady,
	getPricingPlans: notReady,
	getFaq: notReady,
	getProcess: notReady,
};
