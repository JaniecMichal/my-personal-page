import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

// Search engines and AI assistants are welcome: visibility in AI answers is a goal.
const AI_CRAWLERS = ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-SearchBot", "PerplexityBot", "Google-Extended", "Applebot-Extended"];

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{ userAgent: "*", allow: "/", disallow: ["/api/", "/studio"] },
			{ userAgent: AI_CRAWLERS, allow: "/" },
		],
		sitemap: absoluteUrl("/sitemap.xml"),
	};
}
