/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		typedRoutes: true,
	},
	images: {
		domains: ['eu-west-2.graphassets.com'],
	},
};

module.exports = nextConfig;
