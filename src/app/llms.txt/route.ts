import { content } from "@/content";
import { localizedUrl } from "@/lib/seo";

export const dynamic = "force-static";

/** Plain-text summary for AI assistants (https://llmstxt.org). */
export async function GET() {
	const locale = "en";
	const [settings, services, studies, faq, plans, localPages, servicesPl, localPagesPl, postsPl] = await Promise.all([
		content.getSiteSettings(locale),
		content.getServices(locale),
		content.getCaseStudies(locale),
		content.getFaq(locale),
		content.getPricingPlans(locale),
		content.getLocalPages(locale),
		content.getServices("pl"),
		content.getLocalPages("pl"),
		content.getPosts("pl"),
	]);

	const body = [
		`# ${settings.name} — ${settings.role}`,
		"",
		`> ${settings.seo.description}`,
		"",
		// The site is Polish-first; this line is the Polish entity summary AI assistants can quote.
		`PL: ${settings.name}, programista stron internetowych z Katowic. Strony internetowe dla firm (Next.js, WordPress, Shopify), aplikacje webowe i frontend dla zespołów Ruby on Rails. Katowice, Śląsk i zdalnie w całej Polsce. Strona-wizytówka od 1 000 zł netto, strona firmowa z panelem od 2 900 zł netto. Ponad 5 lat doświadczenia.`,
		"",
		`Location: ${settings.location}. Contact: brief form at ${localizedUrl("/contact", locale)}. Languages: Polish, English.`,
		settings.availability ? `Availability: ${settings.availability}.` : "",
		"",
		"## Services",
		...services.map((s) => `- [${s.title}](${localizedUrl({ pathname: "/services/[slug]", params: { slug: s.slug } }, locale)}): ${s.summary} Price: ${s.priceFrom}.`),
		"",
		"## Local",
		...localPages.map((p) => `- [${p.title}](${localizedUrl({ pathname: "/local/[slug]", params: { slug: p.slug } }, locale)}): ${p.seo.description ?? p.intro} Areas: ${[...p.districts, ...p.nearby].join(", ")}.`),
		"",
		"## Case studies",
		...studies.map((s) => `- [${s.client}: ${s.title}](${localizedUrl({ pathname: "/work/[slug]", params: { slug: s.slug } }, locale)}): ${s.summary}`),
		"",
		"## Pricing",
		...plans.map((p) => `- ${p.name}: ${p.price} (${p.features.join(", ")})`),
		"",
		"## FAQ",
		...faq.flatMap((f) => [`### ${f.question}`, f.answer, ""]),
		"## Pages",
		`- [CV](${localizedUrl("/cv", locale)})`,
		`- [Contact / project brief](${localizedUrl("/contact", locale)})`,
		"",
		"## Polish version (default language of the site)",
		`- [Strona główna](${localizedUrl("/", "pl")})`,
		...servicesPl.map((s) => `- [${s.title}](${localizedUrl({ pathname: "/services/[slug]", params: { slug: s.slug } }, "pl")}): ${s.summary}`),
		...localPagesPl.map((p) => `- [${p.title}](${localizedUrl({ pathname: "/local/[slug]", params: { slug: p.slug } }, "pl")})`),
		`- [Cennik](${localizedUrl("/pricing", "pl")})`,
		`- [Blog](${localizedUrl("/blog", "pl")})`,
		...postsPl.filter((p) => !p.draft).map((p) => `  - [${p.title}](${localizedUrl({ pathname: "/blog/[slug]", params: { slug: p.slug } }, "pl")}): ${p.excerpt}`),
		`- [Kontakt / brief](${localizedUrl("/contact", "pl")})`,
		"",
	].join("\n");

	return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
