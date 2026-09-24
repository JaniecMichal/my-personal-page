import { type NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { type Locale, routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

/** Browser languages in preference order, e.g. "en-GB,en;q=0.9,pl;q=0.8" → ["en-gb", "en", "pl"]. */
const acceptedLanguages = (header: string | null) =>
	(header ?? "")
		.split(",")
		.map((part) => {
			const [tag = "", q] = part.trim().split(";q=");
			return { tag: tag.toLowerCase(), q: q ? Number(q) : 1 };
		})
		.filter((l) => l.tag && l.q > 0)
		.sort((a, b) => b.q - a.q)
		.map((l) => l.tag);

/**
 * Picks the language for a first visit to "/":
 * 1. Polish anywhere in the browser languages → pl
 * 2. Visitor in Poland (Vercel geo header; `DEV_GEO_COUNTRY` locally) → pl
 * 3. First supported browser language
 * 4. Visitor abroad → en, otherwise the default (pl)
 */
function detectLocale(request: NextRequest): Locale {
	const languages = acceptedLanguages(request.headers.get("accept-language"));
	const country = (request.headers.get("x-vercel-ip-country") ?? process.env.DEV_GEO_COUNTRY)?.toUpperCase();

	if (languages.some((l) => l.startsWith("pl"))) return "pl";
	if (country === "PL") return "pl";

	const supported = languages
		.map((l) => l.split("-")[0])
		.find((l): l is Locale => routing.locales.includes(l as Locale));
	if (supported) return supported;

	return country ? "en" : routing.defaultLocale;
}

export default function middleware(request: NextRequest) {
	const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
	const hasChoice = routing.locales.includes(cookieLocale as Locale);

	// Only the bare root is negotiated; every /pl and /en URL stays directly reachable for people and crawlers.
	if (request.nextUrl.pathname === "/" && !hasChoice) {
		const url = request.nextUrl.clone();
		url.pathname = `/${detectLocale(request)}`;
		const response = NextResponse.redirect(url, 307);
		response.headers.set("Vary", "Accept-Language, Cookie");
		return response;
	}

	return intlMiddleware(request);
}

export const config = {
	// Skip API routes, Next internals, the terminal easter egg, a future Sanity Studio and files with an extension.
	matcher: ["/((?!api|_next|_vercel|terminal|studio|.*\\..*).*)"],
};
