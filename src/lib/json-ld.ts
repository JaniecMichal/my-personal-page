import { SITE_URL } from "./site";
import type { FaqItem, LocalPage, Service, SiteSettings } from "@/content";
import type { Locale } from "@/i18n/routing";

const PERSON_ID = `${SITE_URL}/#person`;
const BUSINESS_ID = `${SITE_URL}/#business`;

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
	priceRange: locale === "pl" ? "od 500 zł netto" : "from 500 PLN net",
	...(settings.phone ? { telephone: settings.phone } : {}),
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
		itemListElement: services.map((s) => ({
			"@type": "Offer",
			itemOffered: { "@type": "Service", name: s.title, description: s.summary },
		})),
	},
});

export const serviceJsonLd = (service: Service, url: string, locale: Locale) => ({
	"@context": "https://schema.org",
	"@type": "Service",
	name: service.title,
	description: service.intro,
	url,
	inLanguage: locale,
	provider: { "@id": BUSINESS_ID },
	areaServed: ["Poland", "European Union", "United Kingdom"],
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
