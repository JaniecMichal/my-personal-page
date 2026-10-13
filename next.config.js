const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		// cdn.sanity.io is ready for when content moves to Sanity.
		remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }],
	},
	async headers() {
		// Vercel already sends HSTS. A full CSP is a separate step (start in Report-Only).
		return [
			{
				source: "/:path*",
				headers: [
					{ key: "X-Content-Type-Options", value: "nosniff" },
					{ key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
					{ key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
					{ key: "X-Frame-Options", value: "DENY" },
					{ key: "Content-Security-Policy", value: "frame-ancestors 'none'" },
				],
			},
		];
	},
	async redirects() {
		return [
			// The site is Polish-first: one permanent hop, the same for every visitor and crawler.
			{ source: "/", destination: "/pl", permanent: true },
			// Old English-only URLs keep their SEO value.
			{ source: "/about", destination: "/en/cv", permanent: true },
			{ source: "/experience", destination: "/en/cv", permanent: true },
			{ source: "/skills", destination: "/en/cv", permanent: true },
			{ source: "/projects", destination: "/en/work", permanent: true },
			{ source: "/projects/:slug", destination: "/en/work", permanent: true },
			{ source: "/for-business", destination: "/en/services", permanent: true },
		];
	},
};

module.exports = withNextIntl(nextConfig);
