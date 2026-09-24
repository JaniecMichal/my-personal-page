import type { LocalCaseStudy } from "./resolve";

// TODO: add real metrics, screenshots (public/work/*) and client quotes.
export const caseStudies: LocalCaseStudy[] = [
	{
		id: "nazielono-pro",
		slug: "nazielono-pro",
		order: 1,
		client: "nazielono.pro",
		title: {
			pl: "Strona agencji marketingu cyfrowego w Next.js i Sanity zamiast WordPressa",
			en: "A digital marketing agency website in Next.js and Sanity instead of WordPress",
		},
		summary: {
			pl: "Nowa agencja marketingu cyfrowego potrzebowała strony, która zapada w pamięć i sama dowodzi kompetencji w SEO. Zaproponowałem Next.js i Sanity CMS zamiast WordPressa.",
			en: "A brand-new digital marketing agency needed a memorable website that proves its SEO skills by itself. I proposed Next.js and Sanity CMS instead of WordPress.",
		},
		period: { pl: "02.2025 → wsparcie techniczne", en: "Feb 2025 → maintenance" },
		role: { pl: "Architektura, frontend, wdrożenie", en: "Architecture, frontend, deployment" },
		stack: ["Next.js", "Sanity CMS", "React", "TypeScript", "Tailwind CSS", "Radix UI", "Mailgun", "Netlify"],
		services: ["nextjs-websites", "speed-seo-audit"],
		metrics: [
			{ value: { pl: "0,6 s", en: "0.6 s" }, label: { pl: "LCP · desktop (Lighthouse)", en: "LCP · desktop (Lighthouse)" } },
			{ value: { pl: "0,001", en: "0.001" }, label: { pl: "CLS · desktop (Lighthouse)", en: "CLS · desktop (Lighthouse)" } },
			{ value: "30 ms", label: { pl: "Total Blocking Time · desktop", en: "Total Blocking Time · desktop" } },
		],
		chapters: [
			{
				title: { pl: "Problem", en: "Problem" },
				body: {
					pl: [
						"Agencja dopiero powstawała, a agencji marketingu internetowego jest na rynku bardzo dużo. Klient miał jasny cel: strona, która zapadnie w pamięć potencjalnemu klientowi i od pierwszego dnia wyróżni nową firmę.",
						"Agencja sprzedaje marketing i SEO, więc jej strona jest wizytówką kompetencji. Dwa wymagania były najważniejsze: bardzo szybkie ładowanie i solidne podstawy SEO.",
					],
					en: [
						"The agency was just being founded, in a market crowded with digital marketing agencies. The client had a clear goal: a website that potential customers remember and that sets the new company apart from day one.",
						"An agency that sells marketing and SEO is judged by its own website. Two requirements mattered most: very fast loading and a solid SEO foundation.",
					],
				},
			},
			{
				title: { pl: "Podejście", en: "Approach" },
				body: {
					pl: [
						"Zamiast WordPressa zaproponowałem Next.js z headless CMS Sanity. Ten stack idealnie sprawdza się w tej roli: statyczne strony ładują się błyskawicznie, a SEO techniczne jest pod pełną kontrolą w kodzie. Klient chciał też na własnej skórze sprawdzić, jak JavaScript radzi sobie z SEO, i mieć pełną swobodę w rozwoju strony.",
						"Całą architekturę zaprojektowałem i wdrożyłem sam: frontend w Next.js, treści w Sanity, formularze wysyłane przez Mailgun i hosting na Netlify.",
						"Projekt trwał kilka miesięcy, ale większość tego czasu to wspólne szukanie koncepcji, która wyróżni firmę na rynku. Sama praca programistyczna zajęła 1–2 miesiące.",
						"Wystartowaliśmy nietypowo: z MVP, które potem systematycznie rozwijaliśmy o nowe funkcje i poprawki. Treści, w tym blog „The Organic”, agencja edytuje sama w Sanity.",
					],
					en: [
						"Instead of WordPress, I proposed Next.js with Sanity as a headless CMS. The stack fits this job perfectly: static pages load instantly and technical SEO is fully under control in code. The client also wanted to see first-hand how a JavaScript site performs in search, and to have full freedom to grow the site.",
						"I designed and built the whole architecture myself: a Next.js frontend, content in Sanity, forms sent through Mailgun, and hosting on Netlify.",
						"The project ran for a few months, but most of that time went into finding a concept that would make the agency stand out. The development itself took 1–2 months.",
						"We launched in an unusual way: as an MVP, then kept adding features and fixes step by step. The agency edits all content itself in Sanity, including its blog, The Organic.",
					],
				},
			},
			{
				title: { pl: "Efekt", en: "Result" },
				body: {
					pl: [
						"W teście Lighthouse na desktopie strona osiąga LCP 0,6 s, CLS 0,001 i Total Blocking Time 30 ms. Wszystkie metryki są na zielono.",
						"Strona jest gotowa. Agencja sama zarządza treściami, bez angażowania programisty, a ja zapewniam wsparcie techniczne: poprawki błędów i aktualizacje pakietów.",
					],
					en: [
						"In a desktop Lighthouse test the site scores an LCP of 0.6 s, a CLS of 0.001 and a Total Blocking Time of 30 ms. Every metric is green.",
						"The site is complete. The agency manages all content without a developer, and I provide maintenance: bug fixes and package updates.",
					],
				},
			},
			{
				title: { pl: "Kalkulator zysków", en: "Profit calculator" },
				body: {
					pl: [
						"Kolejnym efektem współpracy jest kalkulator zysków, nad którym obecnie pracujemy. Na podstawie zaawansowanego algorytmu obliczeniowego szacuje potencjalne przychody z kampanii SEO/SEM prowadzonych przez agencję mojego klienta.",
						"Użytkownik podaje parametry kampanii: budżet, CPC, średnią wartość zamówienia, liczbę wyświetleń, CTR, współczynnik konwersji i odsetek nieważnego ruchu. Kalkulator uwzględnia sezonowość i pokazuje prognozę na 12 miesięcy z przedziałem ±15%, całkowity ROAS i przychód oraz szczegółową tabelę miesięczną. Dzięki temu agencja może pokazać klientowi realny potencjał kampanii, zanim ta wystartuje.",
					],
					en: [
						"The next result of our collaboration is a profit calculator, currently in progress. Built on an advanced calculation model, it estimates the potential revenue of the SEO/SEM campaigns my client's agency runs.",
						"The user enters the campaign parameters: budget, CPC, average order value, impressions, CTR, conversion rate and share of invalid traffic. The calculator accounts for seasonality and shows a 12-month forecast with a ±15% range, total ROAS and revenue, and a detailed monthly table. It lets the agency show a client the real potential of a campaign before it starts.",
					],
				},
			},
		],
		cover: {
			src: "/work/nazielono/home-desktop.png",
			alt: { pl: "Strona główna nazielono.pro na desktopie", en: "nazielono.pro home page on desktop" },
			width: 1916,
			height: 925,
		},
		gallery: [
			{
				src: "/work/nazielono/home-desktop.png",
				alt: { pl: "Strona główna nazielono.pro: hero z hasłem agencji", en: "nazielono.pro home page: hero with the agency tagline" },
				width: 1916,
				height: 925,
			},
			{
				src: "/work/nazielono/features-desktop.png",
				alt: { pl: "Sekcja „Przewaga w działaniu” z kartami zalet agencji", en: "The agency's advantages section with feature cards" },
				width: 1916,
				height: 925,
			},
			{
				src: "/work/nazielono/blog-desktop.png",
				alt: { pl: "Blog „The Organic” z wyróżnionym wpisem", en: "The Organic blog with a featured post" },
				width: 1534,
				height: 923,
			},
			{
				src: "/work/nazielono/blog-grid-desktop.png",
				alt: { pl: "Lista wpisów na blogu z okładkami", en: "Blog post grid with cover images" },
				width: 1533,
				height: 960,
			},
			{
				src: "/work/nazielono/home-mobile.png",
				alt: { pl: "Strona główna nazielono.pro na telefonie", en: "nazielono.pro home page on a phone" },
				width: 338,
				height: 654,
			},
			{
				src: "/work/nazielono/blog-mobile.png",
				alt: { pl: "Blog na telefonie", en: "The blog on a phone" },
				width: 338,
				height: 857,
			},
			{
				src: "/work/nazielono/article-mobile.png",
				alt: { pl: "Wpis na blogu ze spisem treści na telefonie", en: "A blog post with a table of contents on a phone" },
				width: 338,
				height: 857,
			},
			{
				src: "/work/nazielono/calculator-chart-desktop.png",
				alt: { pl: "Kalkulator zysków: parametry kampanii i prognoza przychodu na 12 miesięcy", en: "Profit calculator: campaign parameters and a 12-month revenue forecast" },
				width: 1466,
				height: 913,
			},
			{
				src: "/work/nazielono/calculator-table-desktop.png",
				alt: { pl: "Kalkulator zysków: ROAS, przychód całkowity i prognoza miesięczna", en: "Profit calculator: ROAS, total revenue and the monthly forecast" },
				width: 1466,
				height: 913,
			},
			{
				src: "/work/nazielono/calculator-form-mobile.png",
				alt: { pl: "Parametry kampanii w kalkulatorze na telefonie", en: "Calculator campaign parameters on a phone" },
				width: 335,
				height: 705,
			},
			{
				src: "/work/nazielono/calculator-chart-mobile.png",
				alt: { pl: "Wykres prognozy i ROAS na telefonie", en: "Forecast chart and ROAS on a phone" },
				width: 335,
				height: 705,
			},
			{
				src: "/work/nazielono/calculator-table-mobile.png",
				alt: { pl: "Tabela prognozy miesięcznej na telefonie", en: "Monthly forecast table on a phone" },
				width: 335,
				height: 705,
			},
		],
		quote: {
			text: "Za namową Michała Janca, zamiast WordPress wybrałem Next.js. Długo nie musiał mnie przekonywać, bo na własnej skórze chciałem sprawdzić, jak JavaScript radzi sobie z SEO, nauczyć się pracy z nową technologią i mieć pełną dowolność w rozwoju.",
			author: "Konrad Bilski",
			role: { pl: "założyciel Na Zielono", en: "Founder, Na Zielono" },
		},
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
