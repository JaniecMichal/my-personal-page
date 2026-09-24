import type { LocalCaseStudy } from "./resolve";

// TODO: add real metrics, screenshots (public/work/*) and client quotes.
export const caseStudies: LocalCaseStudy[] = [
	{
		id: "nazielono-pro",
		slug: "nazielono-pro",
		order: 1,
		client: "nazielono.pro",
		title: {
			pl: "Strona agencji SEO w Next.js zamiast WordPressa",
			en: "An SEO agency website in Next.js instead of WordPress",
		},
		summary: {
			pl: "Agencja SEO potrzebowała strony, która sama będzie dowodem ich kompetencji. Zaproponowałem Next.js zamiast WordPressa.",
			en: "An SEO agency needed a website that proves their expertise by itself. I proposed Next.js instead of WordPress.",
		},
		period: { pl: "02.2025 → opieka ciągła", en: "Feb 2025 → ongoing care" },
		role: { pl: "Frontend, architektura, wdrożenie", en: "Frontend, architecture, launch" },
		stack: ["Next.js", "TypeScript", "Tailwind CSS"],
		services: ["nextjs-websites", "speed-seo-audit"],
		metrics: [
			{ value: "[9X]", label: { pl: "Lighthouse performance (mobile)", en: "Lighthouse performance (mobile)" } },
			{ value: "[X,X s]", label: { pl: "LCP po wdrożeniu", en: "LCP after launch" } },
			{ value: "[+XX%]", label: { pl: "ruch organiczny", en: "organic traffic" } },
		],
		chapters: [
			{
				title: { pl: "Problem", en: "Problem" },
				body: {
					pl: [
						"Agencja sprzedaje pozycjonowanie, więc jej własna strona musi ładować się błyskawicznie i mieć bezbłędne SEO techniczne. Typowy WordPress z wtyczkami i page builderem utrudniał osiągnięcie dobrych wyników Core Web Vitals.",
					],
					en: [
						"The agency sells SEO, so its own website has to load instantly and have flawless technical SEO. A typical WordPress setup with plugins and a page builder made good Core Web Vitals hard to reach.",
					],
				},
			},
			{
				title: { pl: "Podejście", en: "Approach" },
				body: {
					pl: [
						"Zaproponowałem Next.js zamiast WordPressa: statyczne generowanie stron, optymalizacja obrazów i fontów, dane strukturalne i mapa strony generowane z kodu.",
					],
					en: [
						"I proposed Next.js instead of WordPress: static generation, optimised images and fonts, and structured data plus a sitemap generated from code.",
					],
				},
			},
			{
				title: { pl: "Efekt", en: "Result" },
				body: {
					pl: ["Strona działa od lutego 2025 i jest rozwijana w ramach stałej opieki."],
					en: ["The site has been live since February 2025 and keeps evolving under an ongoing care plan."],
				},
			},
		],
		gallery: [],
		liveUrl: "https://nazielono.pro",
		seo: {},
	},
	{
		id: "jemwszkole",
		slug: "jemwszkole",
		order: 2,
		client: "jemWszkole.pl",
		title: {
			pl: "Modernizacja platformy obiadów szkolnych bez przepisywania od zera",
			en: "Modernising a school-meal platform without a full rewrite",
		},
		summary: {
			pl: "Jedyny frontend developer platformy dla rodziców, uczniów i szkół w całej Polsce.",
			en: "The only frontend developer on a platform for parents, pupils and schools across Poland.",
		},
		period: { pl: "02.2025 → teraz", en: "Feb 2025 → now" },
		role: { pl: "Frontend (part-time)", en: "Frontend (part-time)" },
		stack: ["React", "TypeScript", "Chakra UI"],
		services: ["web-apps"],
		metrics: [{ value: "[WYNIK]", label: { pl: "[metryka]", en: "[metric]" } }],
		chapters: [
			{
				title: { pl: "Problem", en: "Problem" },
				body: {
					pl: ["Aplikacja zbudowana na przestarzałym create-react-app, trudna w rozwoju i utrzymaniu."],
					en: ["An app built on legacy create-react-app, hard to extend and maintain."],
				},
			},
			{
				title: { pl: "Podejście", en: "Approach" },
				body: {
					pl: ["Stopniowe usprawnienia architektury zamiast ryzykownego przepisywania całości."],
					en: ["Step-by-step architectural improvements instead of a risky full rewrite."],
				},
			},
			{
				title: { pl: "Efekt", en: "Result" },
				body: { pl: ["[Uzupełnij: co się poprawiło.]"], en: ["[Fill in: what improved.]"] },
			},
		],
		gallery: [],
		liveUrl: "https://jemwszkole.pl",
		seo: {},
	},
	{
		id: "braintrust",
		slug: "braintrust",
		order: 3,
		client: "Braintrust × HexOcean",
		title: {
			pl: "Marketplace talentów Web3 w zespole 50 inżynierów",
			en: "A Web3 talent marketplace with a 50-engineer team",
		},
		summary: {
			pl: "3,5 roku przy amerykańskim marketplace z infrastrukturą tokenów i NFT.",
			en: "3.5 years on a US marketplace with token and NFT infrastructure.",
		},
		period: { pl: "06.2021 → 12.2024", en: "Jun 2021 → Dec 2024" },
		role: { pl: "Frontend Developer", en: "Frontend Developer" },
		stack: ["React", "TypeScript", "Redux", "GraphQL", "RTK Query"],
		services: ["web-apps"],
		metrics: [{ value: { pl: "3,5 ROKU", en: "3.5 YEARS" }, label: { pl: "w projekcie", en: "on the project" } }],
		chapters: [
			{
				title: { pl: "Kontekst", en: "Context" },
				body: {
					pl: ["Braintrust to amerykański marketplace freelancerów oparty o Web3. Pracowałem w 50-osobowym zespole inżynierów przez HexOcean."],
					en: ["Braintrust is a US freelance talent marketplace built on Web3. I worked in a 50-person engineering team through HexOcean."],
				},
			},
			{
				title: { pl: "Moja rola", en: "My role" },
				body: {
					pl: ["Od juniora do dewelopera, który samodzielnie dowozi funkcje end-to-end, w tym przepisanie całego systemu na nowoczesny stack."],
					en: ["From junior to a developer who owns features end-to-end, including rewriting an entire system onto a modern stack."],
				},
			},
		],
		quote: {
			text: "Michał consistently demonstrated his ability to handle complex projects independently, including successfully rewriting an entire system to adopt a modern tech stack.",
			author: "Daniel Kowalczyk",
			role: "Co-founder, HexOcean",
		},
		gallery: [],
		seo: {},
	},
];
