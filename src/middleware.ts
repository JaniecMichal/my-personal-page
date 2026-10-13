import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// The bare root "/" is a permanent redirect to /pl in next.config.js (no language detection).
export default createMiddleware(routing);

export const config = {
	// Skip API routes, Next internals, the terminal easter egg, a future Sanity Studio and files with an extension.
	matcher: ["/((?!api|_next|_vercel|terminal|studio|.*\\..*).*)"],
};
