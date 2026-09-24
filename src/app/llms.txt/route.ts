import { content } from "@/content";
import { localizedUrl } from "@/lib/seo";

export const dynamic = "force-static";

/** Plain-text summary for AI assistants (https://llmstxt.org). */
export async function GET() {
	const locale = "en";
	const [settings, services, studies, faq, plans] = await Promise.all([
		content.getSiteSettings(locale),
		content.getServices(locale),
		content.getCaseStudies(locale),
		content.getFaq(locale),
		content.getPricingPlans(locale),
	]);

	const body = [
		`# ${settings.name} — ${settings.role}`,
		"",
		`> ${settings.seo.description}`,
		"",
		`Location: ${settings.location}. Contact: ${settings.email}. Languages: Polish, English.`,
		settings.availability ? `Availability: ${settings.availability}.` : "",
		"",
		"## Services",
		...services.map((s) => `- [${s.title}](${localizedUrl({ pathname: "/services/[slug]", params: { slug: s.slug } }, locale)}): ${s.summary} Price: ${s.priceFrom}.`),
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
		`- [Polish version](${localizedUrl("/", "pl")})`,
		"",
	].join("\n");

	return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
