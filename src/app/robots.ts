import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

const PRIVATE = ["/api/", "/studio"];

// AI search and user-requested fetches are welcome: visibility in AI answers is a goal.
// Google-Extended controls both Gemini training and grounding, so it stays allowed until decided
// (see .ai/technical-audit.md, TECH-008).
const AI_SEARCH = ["OAI-SearchBot", "ChatGPT-User", "Claude-SearchBot", "Claude-User", "PerplexityBot", "Perplexity-User", "Google-Extended"];

// Crawlers that only collect content for model training (each vendor documents the split).
const AI_TRAINING = ["GPTBot", "ClaudeBot", "Applebot-Extended", "CCBot", "Meta-ExternalAgent"];

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{ userAgent: "*", allow: "/", disallow: PRIVATE },
			// A named group replaces "*", so it repeats the private paths.
			{ userAgent: AI_SEARCH, allow: "/", disallow: PRIVATE },
			{ userAgent: AI_TRAINING, disallow: "/" },
		],
		sitemap: absoluteUrl("/sitemap.xml"),
	};
}
