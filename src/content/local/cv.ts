import type { Education, Experience, SkillGroup } from "../types";
import type { LocalizedDeep } from "./resolve";

export const experience: LocalizedDeep<Experience>[] = [
	{
		id: "visuality",
		company: "Visuality",
		role: "Senior Frontend Developer",
		start: "2025-04",
		end: null,
		description: {
			pl: "Redesign dużej platformy dla brytyjskich banków, rzeczoznawców i brokerów z branży finansowania nieruchomości. Międzynarodowy zespół, bezpośredni kontakt z klientem, workflow wspierany AI.",
			en: "Redesigning a large enterprise platform for UK banks, valuers and brokers in property finance. International team, direct client communication, AI-assisted workflow.",
		},
		stack: ["Ruby on Rails", "ERB", "Stimulus", "Tailwind CSS"],
		url: "https://www.visuality.pl",
	},
	{
		id: "jemwszkole",
		company: "jemWszkole.pl",
		role: { pl: "Frontend Developer (part-time)", en: "Frontend Developer (part-time)" },
		start: "2025-02",
		end: null,
		description: {
			pl: "Jedyny frontend developer platformy do zamawiania obiadów szkolnych dla rodziców, uczniów i szkół w całej Polsce. Modernizacja przestarzałego create-react-app bez przepisywania całości.",
			en: "Sole frontend developer of a school-meal platform for parents, pupils and staff across Poland. Modernising a legacy create-react-app codebase without a full rewrite.",
		},
		stack: ["React", "TypeScript", "Chakra UI"],
	},
	{
		id: "nazielono",
		company: "nazielono.pro",
		role: "Freelance",
		start: "2025-02",
		end: null,
		description: {
			pl: "Zbudowałem i utrzymuję stronę agencji marketingu i SEO w Next.js. Wybrałem Next.js zamiast WordPressa ze względu na Core Web Vitals.",
			en: "Built and maintain a Next.js website for a digital marketing and SEO agency. Chose Next.js over WordPress for Core Web Vitals.",
		},
		stack: ["Next.js", "SEO"],
		url: "https://nazielono.pro",
	},
	{
		id: "gainflow",
		company: "Gainflow",
		role: "Co-founder",
		start: "2024-12",
		end: null,
		description: {
			pl: "Współtworzę aplikację mobilną do śledzenia postępów na siłowni. Odpowiadam za całą architekturę frontendu.",
			en: "Co-building a gym progress-tracking app. I own the full frontend architecture.",
		},
		stack: ["React Native", "Expo", "TypeScript", "Victory Native"],
	},
	{
		id: "hexocean",
		company: "HexOcean",
		role: "Frontend Developer",
		start: "2021-06",
		end: "2024-12",
		description: {
			pl: "Braintrust, amerykański marketplace talentów Web3 z infrastrukturą tokenów i NFT. 50-osobowy zespół inżynierów; od juniora do samodzielnego dowożenia funkcji end-to-end.",
			en: "Braintrust, a US Web3 talent marketplace with token and NFT infrastructure. 50-person engineering team; grew from junior to owning features end-to-end.",
		},
		stack: ["React", "TypeScript", "Redux", "GraphQL", "RTK Query"],
	},
];

export const skillGroups: LocalizedDeep<SkillGroup>[] = [
	{
		id: "daily",
		level: { pl: "Na co dzień", en: "Daily" },
		items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Stimulus · ERB", "Claude + MCP"],
	},
	{
		id: "proficient",
		level: { pl: "Biegle", en: "Proficient" },
		items: ["Redux · RTK Query", "GraphQL · REST", "React Native · Expo", "Jest · Testing Library", "Storybook · Figma"],
	},
	{
		id: "working",
		level: { pl: "Praktyczna znajomość", en: "Working knowledge" },
		items: ["Ruby on Rails", "WordPress", "Shopify · Liquid", "Core Web Vitals · SEO", "Web3"],
	},
];

export const education: LocalizedDeep<Education>[] = [
	{
		id: "polsl",
		title: { pl: "Energetyka", en: "Power Engineering" },
		place: { pl: "Politechnika Śląska, Katowice", en: "Silesian University of Technology, Katowice" },
		period: "2014–2018",
	},
	{
		id: "bootcamp",
		title: { pl: "Bootcamp Frontend Developer", en: "Frontend Development Bootcamp" },
		place: "",
		period: "2020–2021",
	},
];
