/**
 * GROQ queries for the future Sanity adapter. Each returns the shape of the matching
 * type in ../types.ts. `$locale` is "pl" | "en".
 *
 * Conventions:
 * - Documents translated with @sanity/document-internationalization have a `language` field
 *   and are linked through `translation.metadata`.
 * - Short shared documents use `internationalizedArrayString` fields:
 *   pick a value with `coalesce(field[_key == $locale][0].value, field[_key == "pl"][0].value)`.
 */
const t = (field: string) =>
	`"${field}": coalesce(${field}[_key == $locale][0].value, ${field}[_key == "pl"][0].value)`;

const slugs = `"slugs": {
	"pl": coalesce(*[_type == "translation.metadata" && references(^._id)][0].translations[_key == "pl"][0].value->slug.current, slug.current),
	"en": coalesce(*[_type == "translation.metadata" && references(^._id)][0].translations[_key == "en"][0].value->slug.current, slug.current)
}`;

export const SERVICES_QUERY = /* groq */ `
*[_type == "service" && language == $locale] | order(order asc) {
	"slug": slug.current, ${slugs}, order, title, summary, intro, tags, priceFrom, timeline,
	included[]{ title, description },
	plans[]->{ "id": _id, kicker, name, price, features, highlighted },
	faq[]->{ "id": _id, ${t("question")}, ${t("answer")} },
	seo
}`;

export const SERVICE_QUERY = /* groq */ `
*[_type == "service" && language == $locale && slug.current == $slug][0] {
	"slug": slug.current, ${slugs}, order, title, summary, intro, tags, priceFrom, timeline,
	included[]{ title, description },
	plans[]->{ "id": _id, kicker, name, price, features, highlighted },
	faq[]->{ "id": _id, ${t("question")}, ${t("answer")} },
	seo
}`;

export const CASE_STUDIES_QUERY = /* groq */ `
*[_type == "caseStudy" && language == $locale] | order(order asc) {
	"slug": slug.current, ${slugs}, order, client, title, summary, period, role, stack,
	"services": services[]->{ "slug": slug.current, title },
	metrics[]{ value, label },
	chapters[]{ title, body },
	cover, gallery, quote, liveUrl, seo
}`;

export const CASE_STUDY_QUERY = /* groq */ `
*[_type == "caseStudy" && language == $locale && slug.current == $slug][0] {
	"slug": slug.current, ${slugs}, order, client, title, summary, period, role, stack,
	"services": services[]->{ "slug": slug.current, title },
	metrics[]{ value, label },
	chapters[]{ title, body },
	cover, gallery, quote, liveUrl, seo
}`;

export const SITE_SETTINGS_QUERY = /* groq */ `
*[_type == "siteSettings"][0] {
	name, ${t("role")}, ${t("location")}, email, phone, ${t("availability")},
	socials[]{ label, href }, "cvUrl": cv.asset->url, trustedBy,
	"seo": { ${t("seoTitle")}, ${t("seoDescription")} }
}`;

export const EXPERIENCE_QUERY = /* groq */ `
*[_type == "experience"] | order(start desc) {
	"id": _id, company, ${t("role")}, start, end, ${t("description")}, stack, url
}`;

export const TESTIMONIALS_QUERY = /* groq */ `
*[_type == "testimonial"] | order(order asc) {
	"id": _id, author, ${t("role")}, quote, text, url
}`;

export const FAQ_QUERY = /* groq */ `
*[_type == "faq" && showOnHome == true] | order(order asc) {
	"id": _id, ${t("question")}, ${t("answer")}
}`;
