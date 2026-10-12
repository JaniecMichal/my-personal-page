const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		// cdn.sanity.io is ready for when content moves to Sanity.
		remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }],
	},
	async redirects() {
		// Old English-only URLs keep their SEO value.
		return [
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
