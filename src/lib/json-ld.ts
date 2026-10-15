import { localizedUrl } from "./seo";
import { absoluteUrl, SITE_URL } from "./site";
import type { CaseStudy, FaqItem, LocalPage, Service, SiteSettings } from "@/content";
import type { Locale } from "@/i18n/routing";

const PERSON_ID = `${SITE_URL}/#person`;
const BUSINESS_ID = `${SITE_URL}/#business`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const serviceUrl = (slug: string, locale: Locale) =>
	localizedUrl({ pathname: "/services/[slug]", params: { slug } }, locale);
/** A service node lives on its own page, so its @id is that page's URL (per locale). */
const serviceId = (slug: string, locale: Locale) => `${serviceUrl(slug, locale)}#service`;

/**
 * Offer built from the displayed "from" price ("od 1 000 zł", "120 PLN/h"). Net prices, PLN.
 * Services without a number (e.g. "bezpłatna wycena") get no offer.
 */
const offerFor = (service: Service, url: string) => {
	const match = service.priceFrom.match(/\d[\d\s.,]*/);
	if (!match) return undefined;
	const price = Number(match[0].replace(/[\s.,]/g, ""));
	if (!price) return undefined;
	const hourly = service.priceFrom.includes("/h");
	return {
		"@type": "Offer",
		url,
		priceCurrency: "PLN",
		priceSpecification: {
			"@type": hourly ? "UnitPriceSpecification" : "PriceSpecification",
			...(hourly ? { price, unitCode: "HUR" } : { minPrice: price }),
			priceCurrency: "PLN",
			valueAddedTaxIncluded: false,
		},
	};
};

export const websiteJsonLd = (settings: SiteSettings) => ({
	"@context": "https://schema.org",
	"@type": "WebSite",
	"@id": WEBSITE_ID,
	name: settings.name,
	url: SITE_URL,
	inLanguage: ["pl", "en"],
	publisher: { "@id": PERSON_ID },
});

export const personJsonLd = (settings: SiteSettings) => ({
	"@context": "https://schema.org",
	"@type": "Person",
	"@id": PERSON_ID,
	name: settings.name,
	jobTitle: settings.role,
	url: SITE_URL,
	image: `${SITE_URL}/mjaniec-og.jpg`,
	address: { "@type": "PostalAddress", addressLocality: "Katowice", addressCountry: "PL" },
	sameAs: settings.socials.map((s) => s.href),
	knowsAbout: [
		"React",
		"Next.js",
		"TypeScript",
		"Tailwind CSS",
		"Shopify",
		"WordPress",
		"Ruby on Rails",
		"Stimulus",
		"SEO",
	],
});

export const businessJsonLd = (settings: SiteSettings, locale: Locale, services: Service[]) => ({
	"@context": "https://schema.org",
	"@type": "ProfessionalService",
	"@id": BUSINESS_ID,
	name: `${settings.name} — ${settings.role}`,
	// One @id, one url: the same business node is emitted on both locales.
	url: `${SITE_URL}/pl`,
	image: `${SITE_URL}/mjaniec-og.jpg`,
	priceRange: locale === "pl" ? "od 1 000 zł netto" : "from 1,000 PLN net",
	// No `telephone`: the number is obfuscated on the page (PhoneLink), plain JSON-LD would expose it to scrapers.
	founder: { "@id": PERSON_ID },
	address: {
		"@type": "PostalAddress",
		addressLocality: "Katowice",
		addressRegion: "Śląskie",
		addressCountry: "PL",
	},
	areaServed: [
		"Katowice",
		"Gliwice",
		"Kraków",
		"Silesia",
		"Poland",
		"European Union",
		"United Kingdom",
	],
	inLanguage: locale,
	hasOfferCatalog: {
		"@type": "OfferCatalog",
		name: "Services",
		itemListElement: services.map((s) => {
			const url = serviceUrl(s.slug, locale);
			return {
				...offerFor(s, url),
				"@type": "Offer",
				url,
				itemOffered: { "@type": "Service", "@id": serviceId(s.slug, locale), name: s.title, url },
			};
		}),
	},
});

export const serviceJsonLd = (service: Service, url: string, locale: Locale) => ({
	"@context": "https://schema.org",
	"@type": "Service",
	"@id": serviceId(service.slug, locale),
	name: service.title,
	description: service.intro,
	url,
	inLanguage: locale,
	provider: { "@id": BUSINESS_ID },
	areaServed: ["Poland", "European Union", "United Kingdom"],
	...(offerFor(service, url) ? { offers: offerFor(service, url) } : {}),
});

export const caseStudyJsonLd = (study: CaseStudy, url: string, locale: Locale) => ({
	"@context": "https://schema.org",
	"@type": "CreativeWork",
	"@id": `${url}#work`,
	name: study.title,
	abstract: study.summary,
	url,
	inLanguage: locale,
	...(study.cover ? { image: absoluteUrl(study.cover.src) } : {}),
	creator: { "@id": PERSON_ID },
	isPartOf: { "@id": WEBSITE_ID },
	about: study.services.map((s) => ({ "@id": serviceId(s.slug, locale) })),
	keywords: study.stack.join(", "),
});

/** Listing pages (/uslugi, /realizacje): the page and the ordered list of what it links to. */
export const collectionJsonLd = (
	name: string,
	url: string,
	locale: Locale,
	items: { name: string; url: string }[],
) => ({
	"@context": "https://schema.org",
	"@type": "CollectionPage",
	"@id": `${url}#webpage`,
	name,
	url,
	inLanguage: locale,
	isPartOf: { "@id": WEBSITE_ID },
	mainEntity: {
		"@type": "ItemList",
		itemListElement: items.map((item, i) => ({
			"@type": "ListItem",
			position: i + 1,
			name: item.name,
			url: item.url,
		})),
	},
});

export const localServiceJsonLd = (page: LocalPage, url: string, locale: Locale) => ({
	"@context": "https://schema.org",
	"@type": "Service",
	name: page.title,
	description: page.intro,
	url,
	inLanguage: locale,
	provider: { "@id": BUSINESS_ID },
	areaServed: [
		{ "@type": "City", name: page.city },
		...page.nearby.map((name) => ({ "@type": "City", name })),
	],
});

export const faqJsonLd = (items: FaqItem[]) => ({
	"@context": "https://schema.org",
	"@type": "FAQPage",
	mainEntity: items.map((f) => ({
		"@type": "Question",
		name: f.question,
		acceptedAnswer: { "@type": "Answer", text: f.answer },
	})),
});

export const breadcrumbJsonLd = (items: { name: string; url: string }[]) => ({
	"@context": "https://schema.org",
	"@type": "BreadcrumbList",
	itemListElement: items.map((item, i) => ({
		"@type": "ListItem",
		position: i + 1,
		name: item.name,
		item: item.url,
	})),
});
