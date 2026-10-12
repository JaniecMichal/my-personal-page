/**
 * Domain types for site content.
 *
 * They mirror the planned Sanity schemas (see src/content/sanity/README.md), so the
 * UI never knows where content comes from. Every getter returns data already resolved
 * for one locale.
 */
import type { Locale } from "@/i18n/routing";

/** A value stored per locale. Local data uses it; Sanity uses `internationalizedArray` or document i18n. */
export type Localized<T> = Record<Locale, T>;

/** Resolved image. Local data points at /public, Sanity maps through `@sanity/image-url`. */
export type ImageAsset = {
	src: string;
	alt: string;
	width: number;
	height: number;
};

/**
 * Rich text as plain paragraphs for now.
 * When moving to Sanity, swap for Portable Text blocks and render with `@portabletext/react`.
 */
export type RichText = string[];

export type Seo = {
	title?: string;
	description?: string;
	noIndex?: boolean;
};

export type SocialLink = {
	label: string;
	href: string;
};

export type SiteSettings = {
	name: string;
	role: string;
	location: string;
	email: string;
	phone?: string;
	/** Shown in the hero and nav status line. `null` hides the line. */
	availability: string | null;
	socials: SocialLink[];
	cvUrl: string;
	trustedBy: string[];
	seo: Required<Pick<Seo, "title" | "description">>;
};

export type Service = {
	/** Slug in the requested locale. */
	slug: string;
	/** Slug per locale, for hreflang alternates and the language switch. */
	slugs: Localized<string>;
	order: number;
	title: string;
	/** One-line pitch for cards. */
	summary: string;
	/** Longer intro for the service page hero. */
	intro: string;
	tags: string[];
	priceFrom: string;
	timeline: string;
	included: { title: string; description: string }[];
	plans: PricingPlan[];
	faq: FaqItem[];
	seo: Seo;
};

export type CaseStudyMetric = {
	value: string;
	label: string;
};

export type CaseStudy = {
	slug: string;
	slugs: Localized<string>;
	order: number;
	client: string;
	title: string;
	summary: string;
	period: string;
	role: string;
	stack: string[];
	/** Services this case study proves, resolved for the locale. */
	services: { slug: string; title: string }[];
	metrics: CaseStudyMetric[];
	chapters: { title: string; body: RichText }[];
	cover?: ImageAsset;
	gallery: ImageAsset[];
	quote?: { text: string; author: string; role: string };
	liveUrl?: string;
	seo: Seo;
};

export type Experience = {
	id: string;
	company: string;
	role: string;
	start: string;
	/** `null` means "present". */
	end: string | null;
	description: string;
	stack: string[];
	url?: string;
};

export type SkillGroup = {
	id: string;
	level: string;
	items: string[];
};

export type Education = {
	id: string;
	title: string;
	place: string;
	period: string;
};

export type Testimonial = {
	id: string;
	author: string;
	role: string;
	/** Short pull quote for the home page. */
	quote: string;
	/** Full recommendation text. */
	text: string;
	url: string;
};

export type PricingPlan = {
	id: string;
	kicker: string;
	name: string;
	price: string;
	features: string[];
	highlighted: boolean;
};

export type FaqItem = {
	id: string;
	question: string;
	answer: string;
};

export type ProcessStep = {
	id: string;
	title: string;
	description: string;
};

export type CvFacts = {
	summary: string;
	languages: string;
	workMode: string;
	contract: string;
	availableFrom: string;
};
