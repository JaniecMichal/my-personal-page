import type { LocalCaseStudy } from "./resolve";

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
		stack: [
			"Next.js",
			"Sanity CMS",
			"React",
			"TypeScript",
			"Tailwind CSS",
			"Radix UI",
			"Mailgun",
			"Netlify",
		],
		services: ["business-website", "nextjs-websites", "speed-seo-audit"],
		metrics: [
			{
				value: { pl: "0,6 s", en: "0.6 s" },
				label: { pl: "LCP · desktop (Lighthouse)", en: "LCP · desktop (Lighthouse)" },
			},
			{
				value: { pl: "0,001", en: "0.001" },
				label: { pl: "CLS · desktop (Lighthouse)", en: "CLS · desktop (Lighthouse)" },
			},
			{
				value: "30 ms",
				label: { pl: "Total Blocking Time · desktop", en: "Total Blocking Time · desktop" },
			},
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
			alt: {
				pl: "Strona główna nazielono.pro na desktopie",
				en: "nazielono.pro home page on desktop",
			},
			width: 1916,
			height: 925,
		},
		gallery: [
			{
				src: "/work/nazielono/home-desktop.png",
				alt: {
					pl: "Strona główna nazielono.pro: hero z hasłem agencji",
					en: "nazielono.pro home page: hero with the agency tagline",
				},
				width: 1916,
				height: 925,
			},
			{
				src: "/work/nazielono/features-desktop.png",
				alt: {
					pl: "Sekcja „Przewaga w działaniu” z kartami zalet agencji",
					en: "The agency's advantages section with feature cards",
				},
				width: 1916,
				height: 925,
			},
			{
				src: "/work/nazielono/blog-desktop.png",
				alt: {
					pl: "Blog „The Organic” z wyróżnionym wpisem",
					en: "The Organic blog with a featured post",
				},
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
				alt: {
					pl: "Strona główna nazielono.pro na telefonie",
					en: "nazielono.pro home page on a phone",
				},
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
				alt: {
					pl: "Wpis na blogu ze spisem treści na telefonie",
					en: "A blog post with a table of contents on a phone",
				},
				width: 338,
				height: 857,
			},
			{
				src: "/work/nazielono/calculator-chart-desktop.png",
				alt: {
					pl: "Kalkulator zysków: parametry kampanii i prognoza przychodu na 12 miesięcy",
					en: "Profit calculator: campaign parameters and a 12-month revenue forecast",
				},
				width: 1466,
				height: 913,
			},
			{
				src: "/work/nazielono/calculator-table-desktop.png",
				alt: {
					pl: "Kalkulator zysków: ROAS, przychód całkowity i prognoza miesięczna",
					en: "Profit calculator: ROAS, total revenue and the monthly forecast",
				},
				width: 1466,
				height: 913,
			},
			{
				src: "/work/nazielono/calculator-form-mobile.png",
				alt: {
					pl: "Parametry kampanii w kalkulatorze na telefonie",
					en: "Calculator campaign parameters on a phone",
				},
				width: 335,
				height: 705,
			},
			{
				src: "/work/nazielono/calculator-chart-mobile.png",
				alt: {
					pl: "Wykres prognozy i ROAS na telefonie",
					en: "Forecast chart and ROAS on a phone",
				},
				width: 335,
				height: 705,
			},
			{
				src: "/work/nazielono/calculator-table-mobile.png",
				alt: {
					pl: "Tabela prognozy miesięcznej na telefonie",
					en: "Monthly forecast table on a phone",
				},
				width: 335,
				height: 705,
			},
		],
		quote: {
			text: {
				pl: "Za namową Michała Janca, zamiast WordPress wybrałem Next.js. Długo nie musiał mnie przekonywać, bo na własnej skórze chciałem sprawdzić, jak JavaScript radzi sobie z SEO, nauczyć się pracy z nową technologią i mieć pełną dowolność w rozwoju.",
				en: "On Michał Janiec's advice I chose Next.js instead of WordPress. He didn't have to convince me for long: I wanted to see first-hand how JavaScript handles SEO, learn a new technology and have full freedom to grow the site.",
			},
			lang: "pl",
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
			pl: "Platforma stołówek szkolnych: od MVP do nowoczesnej aplikacji bez przepisywania od zera",
			en: "A school canteen platform: from MVP to a modern app without a full rewrite",
		},
		summary: {
			pl: "Przejąłem rolę głównego frontend developera platformy, która pomaga szkołom w całej Polsce organizować stołówkę, i dowiozłem kluczowe funkcje na start nowej wersji.",
			en: "I took over as lead frontend developer of a platform that helps schools across Poland run their canteens, and shipped the key features needed to launch its new version.",
		},
		period: { pl: "02.2025 → wsparcie frontendowe", en: "Feb 2025 → frontend support" },
		role: { pl: "Główny frontend developer", en: "Lead frontend developer" },
		stack: ["React", "TypeScript", "Vite", "Chakra UI"],
		services: ["web-apps"],
		metrics: [
			{
				value: "Vite",
				label: { pl: "migracja z create-react-app", en: "migrated from create-react-app" },
			},
			{
				value: "2",
				label: {
					pl: "interfejsy: administrator szkoły i rodzic",
					en: "interfaces: school admin and parent",
				},
			},
			{
				value: "PL",
				label: {
					pl: "posiłki w szkołach w całej Polsce, codziennie",
					en: "school meals served daily across Poland",
				},
			},
		],
		// TODO(metrics): hidden until real numbers are available. When you have them, swap in e.g.:
		// { value: "[X s → Y s]", label: { pl: "czas builda (CRA → Vite)", en: "build time (CRA → Vite)" } },
		// { value: "[X s → Y s]", label: { pl: "start serwera deweloperskiego", en: "dev server start-up" } },
		// { value: "[XX]", label: { pl: "Lighthouse performance", en: "Lighthouse performance" } },
		// { value: "[XXX]", label: { pl: "szkoły na platformie", en: "schools on the platform" } },
		chapters: [
			{
				title: { pl: "Problem", en: "Problem" },
				body: {
					pl: [
						"JemWszkole to platforma, która pomaga szkołom organizować stołówkę: jadłospisy, zamawianie posiłków, zgłaszanie nieobecności i rozliczenia. Codziennie obsługuje posiłki w szkołach w całej Polsce.",
						"Dołączyłem do projektu w końcowej fazie budowy MVP. Do startu nowej wersji platformy brakowało jeszcze kluczowych funkcji, a frontend potrzebował osoby, która weźmie za niego pełną odpowiedzialność. Aplikacja stała przy tym na przestarzałym create-react-app.",
					],
					en: [
						"JemWszkole is a platform that helps schools run their canteens: menus, meal orders, absence reports and payments. It serves school meals every day across Poland.",
						"I joined in the final phase of the MVP. The new version still lacked key features before launch, and the frontend needed someone to take full ownership of it. On top of that, the app was built on the outdated create-react-app.",
					],
				},
			},
			{
				title: { pl: "Podejście", en: "Approach" },
				body: {
					pl: [
						"Przejąłem rolę głównego frontend developera i dowiozłem ostatnie kluczowe funkcje, niezbędne do wystartowania z nową wersją platformy.",
						"Oprócz dowożenia brakujących elementów z własnej inicjatywy proponowałem i wprowadzałem kolejne usprawnienia. Najważniejszym była migracja z create-react-app na nowoczesne Vite, bez przepisywania aplikacji od zera.",
						"Dużo uwagi poświęciłem interfejsowi. Z aplikacji korzystają zarówno administratorzy w szkołach, jak i rodzice, dlatego musi być intuicyjna i niezawodna, również na telefonie.",
					],
					en: [
						"I took over as lead frontend developer and shipped the last key features required to launch the new version of the platform.",
						"Beyond the missing pieces, I proactively proposed and delivered a series of improvements. The biggest one was migrating from create-react-app to modern Vite, without rewriting the app from scratch.",
						"I put a lot of care into the interface. The app is used by school administrators and by parents alike, so it has to be intuitive and reliable, on phones too.",
					],
				},
			},
			{
				title: { pl: "Efekt", en: "Result" },
				body: {
					pl: [
						"Nowa wersja platformy działa i codziennie obsługuje posiłki w szkołach w całej Polsce, na nowoczesnym i szybszym w rozwoju stacku.",
						"Dziś wspieram projekt technicznie po stronie frontendu: na bieżąco przygotowuję poprawki i hotfixy, wprowadzam ulepszenia, stopniowo porządkuję kod i poprawiam wydajność.",
					],
					en: [
						"The new version of the platform is live and serves school meals every day across Poland, on a modern stack that is faster to develop.",
						"Today I provide ongoing frontend support: ad-hoc fixes and hotfixes, improvements, gradual code clean-up and performance work.",
					],
				},
			},
		],
		cover: {
			src: "/work/jemwszkole/admin-menu-desktop.png",
			alt: {
				pl: "Panel administratora szkoły w jemWszkole.pl",
				en: "School admin panel in jemWszkole.pl",
			},
			width: 1894,
			height: 951,
		},
		gallery: [
			{
				src: "/work/jemwszkole/admin-menu-desktop.png",
				alt: {
					pl: "Panel administratora szkoły: edycja jadłospisu",
					en: "School admin panel: editing the menu",
				},
				width: 1894,
				height: 951,
			},
			{
				src: "/work/jemwszkole/order-calendar-desktop.png",
				alt: {
					pl: "Zamawianie posiłków w kalendarzu z koszykiem",
					en: "Ordering meals in a calendar with a basket",
				},
				width: 1894,
				height: 951,
			},
			{
				src: "/work/jemwszkole/parent-dashboard-desktop.png",
				alt: {
					pl: "Panel rodzica: kalendarz, ogłoszenia i zamówione posiłki",
					en: "Parent dashboard: calendar, announcements and ordered meals",
				},
				width: 645,
				height: 568,
			},
			{
				src: "/work/jemwszkole/parent-dashboard-mobile.png",
				alt: {
					pl: "Panel rodzica na telefonie: zgłoszenie nieobecności i zamówienie posiłku",
					en: "Parent dashboard on a phone: report an absence and order a meal",
				},
				width: 331,
				height: 555,
			},
			{
				src: "/work/jemwszkole/order-meal-mobile.png",
				alt: { pl: "Wybór posiłku na telefonie", en: "Choosing a meal on a phone" },
				width: 339,
				height: 702,
			},
			{
				src: "/work/jemwszkole/order-calendar-mobile.png",
				alt: {
					pl: "Wybór dni w kalendarzu na telefonie",
					en: "Picking days in the calendar on a phone",
				},
				width: 339,
				height: 702,
			},
		],
		quote: {
			text: {
				pl: "Z własnej inicjatywy proponuje usprawnienia aplikacji i nowe funkcje, co wyraźnie podnosi jakość końcowego produktu. Do tego świetnie się komunikuje i praca z nim to prawdziwa przyjemność.",
				en: "He proactively suggests ideas for improving the application and introducing new features, which significantly enhances the final product. Moreover, he is an excellent communicator—working with him is truly a pleasure.",
			},
			lang: "en",
			author: "Maciej Rygielski",
			role: {
				pl: "Project Manager w projekcie jemWszkole.pl",
				en: "Project Manager, jemWszkole.pl",
			},
		},
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
			pl: "3,5 roku przy amerykańskim marketplace freelancerów opartym na Web3: od komponentów i testów po prowadzenie zespołu i architekturę nowych modułów.",
			en: "3.5 years on a US freelance marketplace built on Web3: from components and tests to leading a team and designing new modules.",
		},
		period: { pl: "06.2021 → 12.2024", en: "Jun 2021 → Dec 2024" },
		role: { pl: "Frontend Developer, lider zespołu", en: "Frontend Developer, team lead" },
		stack: [
			"React",
			"TypeScript",
			"Redux",
			"RTK Query",
			"Jest",
			"React Testing Library",
			"SASS",
			"Material UI",
		],
		services: ["web-apps"],
		metrics: [
			{
				value: { pl: "3,5 ROKU", en: "3.5 YEARS" },
				label: { pl: "w projekcie", en: "on the project" },
			},
			{ value: "50", label: { pl: "inżynierów w zespole", en: "engineers on the team" } },
			{
				value: "Senior",
				label: {
					pl: "od juniora do seniora w projekcie",
					en: "from junior to senior on the project",
				},
			},
		],
		chapters: [
			{
				title: { pl: "Kontekst", en: "Context" },
				body: {
					pl: [
						"Braintrust to amerykański marketplace freelancerów oparty na Web3, z własnym tokenem BTRST. Przez HexOcean pracowałem przy nim 3,5 roku, w 50-osobowym zespole inżynierów.",
						"Brałem udział w całym procesie rozwoju aplikacji, łącznie z bezpośrednią współpracą z klientem: zbieraniem wymagań i feedbacku. Dzięki temu lepiej rozumiałem potrzeby biznesowe i techniczne.",
					],
					en: [
						"Braintrust is a US freelance talent marketplace built on Web3, with its own BTRST token. Through HexOcean I worked on it for 3.5 years, in a 50-person engineering team.",
						"I took part in the whole development process, including working directly with the client to gather requirements and feedback, which helped me understand both the business and the technical needs.",
					],
				},
			},
			{
				title: { pl: "Zakres pracy", en: "What I did" },
				body: {
					pl: [
						"Budowałem wydajne komponenty React wielokrotnego użytku, ze stylami i testami jednostkowymi, dbając o spójny i łatwy w utrzymaniu interfejs. Tworzyłem złożone, wieloetapowe formularze oraz pisałem testy jednostkowe i integracyjne, które pilnowały jakości i niezawodności kodu.",
						"Wdrażałem nowe funkcje i logikę biznesową, projektowałem i kodowałem szablony e-maili HTML oraz regularnie robiłem code review. Refaktoryzowałem kod, od drobnych usprawnień po zmiany architektury, co poprawiło wydajność i strukturę aplikacji. Szybko rozwiązywałem błędy zgłaszane przez zespół QA, żeby produkt pozostał stabilny.",
					],
					en: [
						"I built efficient, reusable React components with styles and unit tests, keeping the interface consistent and easy to maintain. I created complex multi-step forms and wrote unit and integration tests that kept the code reliable.",
						"I shipped new features and business logic, designed and coded HTML email templates, and did regular code reviews. I refactored code, from small improvements to architectural changes, which improved the app's performance and structure, and I fixed issues reported by QA quickly to keep the product stable.",
					],
				},
			},
			{
				title: { pl: "Prowadzenie zespołu i architektura", en: "Leading and architecture" },
				body: {
					pl: [
						"W bezpośrednim kontakcie z klientem doprecyzowywałem wymagania nowych funkcji i doradzałem technicznie, tak żeby rozwiązania były spójne z celami biznesowymi projektu.",
						"Zarządzałem zespołem deweloperskim i dowoziłem nowe funkcje w ramach przydzielonego zakresu, na czas. Projektowałem architekturę nowych części aplikacji, tak aby były skalowalne i łatwe w utrzymaniu.",
					],
					en: [
						"Working directly with the client, I clarified requirements for new features and gave technical advice, so that solutions stayed aligned with the project's business goals.",
						"I managed a development team and delivered new features on time within the assigned scope. I designed the architecture for new parts of the app to keep them scalable and maintainable.",
					],
				},
			},
			{
				title: { pl: "Efekt", en: "Result" },
				body: {
					pl: [
						"W trakcie projektu przeszedłem drogę od juniora do seniora. Nauczyłem się precyzyjnie szacować czas potrzebny na dostarczenie wartości biznesowej i rozwinąłem umiejętności pracy z klientem, zarządzania projektem i projektowania architektury.",
					],
					en: [
						"Over the project I grew from junior to senior developer. I learned to estimate accurately how long it takes to deliver business value, and sharpened my skills in client work, project management and software architecture.",
					],
				},
			},
		],
		quote: {
			text: {
				pl: "Michał wielokrotnie pokazał, że samodzielnie radzi sobie ze złożonymi projektami, w tym z udanym przepisaniem całego systemu na nowoczesny stack technologiczny.",
				en: "Michał consistently demonstrated his ability to handle complex projects independently, including successfully rewriting an entire system to adopt a modern tech stack.",
			},
			lang: "en",
			author: "Daniel Kowalczyk",
			role: {
				pl: "Team Leader w projekcie Braintrust, co-founder HexOcean",
				en: "Team Leader on Braintrust, co-founder of HexOcean",
			},
		},
		cover: {
			src: "/work/braintrust/home-desktop.png",
			alt: { pl: "Panel freelancera w Braintrust", en: "Braintrust talent dashboard" },
			width: 1910,
			height: 957,
		},
		gallery: [
			{
				src: "/work/braintrust/home-desktop.png",
				alt: {
					pl: "Panel freelancera w Braintrust: zadania do wykonania i dopasowane oferty",
					en: "Braintrust talent dashboard: action items and job matches",
				},
				width: 1910,
				height: 957,
			},
			{
				src: "/work/braintrust/jobs-desktop.png",
				alt: { pl: "Lista ofert pracy z filtrami", en: "Job listings with filters" },
				width: 1910,
				height: 957,
			},
			{
				src: "/work/braintrust/job-details-desktop.png",
				alt: {
					pl: "Szczegóły oferty: stawka, wymagania, polecenia w tokenach BTRST",
					en: "Job details: rate, requirements and BTRST referral rewards",
				},
				width: 1910,
				height: 957,
			},
			{
				src: "/work/braintrust/wallet-desktop.png",
				alt: {
					pl: "Portfel tokenów BTRST z historią aktywności",
					en: "BTRST token wallet with activity history",
				},
				width: 1910,
				height: 957,
			},
			{
				src: "/work/braintrust/home-mobile.png",
				alt: { pl: "Panel freelancera na telefonie", en: "Talent dashboard on a phone" },
				width: 405,
				height: 717,
			},
			{
				src: "/work/braintrust/jobs-mobile.png",
				alt: { pl: "Oferty pracy na telefonie", en: "Job listings on a phone" },
				width: 405,
				height: 717,
			},
		],
		liveUrl: "https://www.usebraintrust.com",
		seo: {},
	},
	{
		id: "zapachdomu",
		slug: "zapachdomu",
		order: 4,
		client: "zapachdomu.com",
		title: {
			pl: "Sklep Shopify z zestawami prezentowymi: opisy SEO w kategoriach pod Google i Google Ads",
			en: "A Shopify gift-box store: SEO category descriptions for Google and Google Ads",
		},
		summary: {
			pl: "Agencja SEO prowadząca sklep zapachdomu.com potrzebowała bogatszych treści w kategoriach, bez spychania produktów w dół strony. Dodałem edytowalne opisy z „Czytaj więcej”, którymi zespół zarządza sam w panelu Shopify.",
			en: "The SEO agency running zapachdomu.com needed richer content on category pages without pushing the products down. I added editable descriptions with “Read more” that the team manages itself in the Shopify admin.",
		},
		period: { pl: "09.2026", en: "Sep 2026" },
		role: {
			pl: "Shopify developer, wsparcie agencji SEO",
			en: "Shopify developer, supporting an SEO agency",
		},
		stack: ["Shopify", "Liquid", "Dawn (Online Store 2.0)", "Metafields", "JavaScript", "CSS"],
		services: ["shopify"],
		metrics: [
			{
				value: { pl: "4 DNI", en: "4 DAYS" },
				label: { pl: "od startu do publikacji", en: "from start to launch" },
			},
			{
				value: "SEO",
				label: { pl: "opis w każdej kategorii", en: "a description on every category" },
			},
		],
		chapters: [
			{
				title: { pl: "Problem", en: "Problem" },
				body: {
					pl: [
						"zapachdomu.com to sklep Shopify z rzemieślniczymi zestawami prezentowymi: kawa, herbata, miody, słodycze i dodatki od polskich manufaktur. Sklep prowadzi agencja SEO, która zgłosiła się do mnie, gdy główny developer projektu był niedostępny.",
						"Strony kategorii miały za mało treści, żeby Google i Google Ads dobrze rozumiały, czego dotyczą. Agencja potrzebowała miejsca na rozbudowane, unikalne opisy w każdej kategorii. Jednocześnie tekst nad listą produktów był już zbyt długi i spychał produkty w dół, szczególnie na telefonie.",
					],
					en: [
						"zapachdomu.com is a Shopify store with artisan gift boxes: coffee, tea, honey, sweets and extras from Polish makers. The store is run by an SEO agency, which came to me while the project's main developer was unavailable.",
						"The category pages had too little content for Google and Google Ads to understand what they were about. The agency needed room for rich, unique descriptions on every category. At the same time, the text above the product list was already too long and pushed the products down, especially on phones.",
					],
				},
			},
			{
				title: { pl: "Rozwiązanie", en: "Solution" },
				body: {
					pl: [
						"Każda kategoria dostała własne pole na opis SEO pod listą produktów. Bogatsza, unikalna treść na każdej stronie pomaga Google i Google Ads lepiej dopasować stronę do wyszukiwań i reklam. Cały tekst trafia do HTML-a strony, więc wyszukiwarka widzi go w całości, a odwiedzający widzi krótki podgląd z przyciskiem „Czytaj więcej”.",
						"Górny opis kategorii zwija się do pierwszego akapitu, więc produkty są widoczne od razu. Wszystkie zmiany wizualne dopracowałem z myślą o telefonach, na których odbywa się większość zakupów. Przy okazji poprawiłem błąd motywu, przez który „Czytaj więcej” pojawiało się także przy krótkich tekstach.",
						"Treściami zarządza zespół klienta. Opis edytuje się w panelu Shopify jak każde inne pole, a sposób przycinania podglądu ustawia się w edytorze motywu, bez zmian w kodzie. Pusta kategoria nie pokazuje pustego bloku, a opis dostała też strona ze wszystkimi produktami.",
					],
					en: [
						"Every category got its own SEO description field below the product list. Richer, unique content on each page helps Google and Google Ads match the page to searches and ads. The full text is in the page's HTML, so search engines see all of it, while visitors see a short preview with a “Read more” button.",
						"The top category description now collapses to its first paragraph, so the products are visible straight away. I polished every visual change for phones, where most shopping happens. Along the way I fixed a theme bug that showed “Read more” even for short texts.",
						"The client's team manages the content. The description is edited in the Shopify admin like any other field, and the preview length is set in the theme editor, without touching code. An empty category shows no empty block, and the all-products page got a description too.",
					],
				},
			},
			{
				title: { pl: "Proces", en: "Process" },
				body: {
					pl: [
						"Wdrożenie przeszło przez bezpieczny proces: kopia zapasowa i duplikat motywu, podgląd do akceptacji przez klienta, publikacja i poprzednia wersja gotowa do przywrócenia jednym kliknięciem. Przed i po zmianach sprawdziłem, że liczba i kolejność produktów na liście się nie zmieniły.",
						"Pracowałem wyłącznie w motywie sklepu, z ograniczonym dostępem, bez wglądu w dane klientów i zamówienia. Zespół dostał instrukcję edycji opisów i przygotowania tekstów, żeby mógł rozwijać treści samodzielnie, niezależnie od dostępności developera.",
						"Na koniec przygotowałem dla klienta analizę dalszych zmian: strukturę nagłówków i FAQ na stronie dla firm oraz porządek w metatagach, z rekomendacjami, jak je wdrożyć.",
					],
					en: [
						"The rollout followed a safe process: a backup and a duplicate of the theme, a preview for the client to approve, publishing, and the previous version ready to restore in one click. Before and after the change I checked that the number and order of products in the list stayed the same.",
						"I worked only in the store's theme, with limited access and no view of customer or order data. The team got a guide to editing the descriptions and preparing the texts, so it can grow the content on its own, regardless of developer availability.",
						"Finally, I prepared an analysis of further changes for the client: the heading structure and FAQ on the business page and a clean-up of meta tags, with recommendations on how to implement them.",
					],
				},
			},
			{
				title: { pl: "Efekt", en: "Result" },
				body: {
					pl: [
						"Opisy już działają w sklepie, na przykład w kategorii zestawów na Dzień Nauczyciela: krótki opis nad produktami i rozbudowany tekst z „Czytaj więcej” pod nimi. Zespół dodaje kolejne treści sam, w panelu Shopify.",
						"Bogatsze strony kategorii mają zwiększyć widoczność sklepu w Google i trafność kampanii Google Ads, a w efekcie liczbę odwiedzin i potencjalnych klientów.",
					],
					en: [
						"The descriptions are live in the store, for example in the Teacher's Day gift box category: a short intro above the products and a full text with “Read more” below them. The team adds new content itself, in the Shopify admin.",
						"Richer category pages are meant to raise the store's visibility in Google and the relevance of its Google Ads campaigns, and with them the number of visits and potential customers.",
					],
				},
			},
		],
		cover: {
			src: "/work/zapachdomu/home-desktop.png",
			alt: {
				pl: "Strona główna sklepu zapachdomu.com z zestawami prezentowymi",
				en: "zapachdomu.com home page with gift boxes",
			},
			width: 1920,
			height: 963,
		},
		gallery: [
			{
				src: "/work/zapachdomu/category-desktop.png",
				alt: {
					pl: "Kategoria zestawów na Dzień Nauczyciela ze zwiniętym opisem nad produktami",
					en: "Teacher's Day category with a collapsed description above the products",
				},
				width: 1920,
				height: 915,
			},
			{
				src: "/work/zapachdomu/category-description-desktop.png",
				alt: {
					pl: "Opis SEO pod listą produktów z przyciskiem „Czytaj więcej”",
					en: "SEO description below the product list with a “Read more” button",
				},
				width: 1920,
				height: 935,
			},
			{
				src: "/work/zapachdomu/category-mobile.png",
				alt: {
					pl: "Kategoria na telefonie: krótki opis i produkty od razu widoczne",
					en: "Category on a phone: a short intro and the products straight away",
				},
				width: 343,
				height: 709,
			},
			{
				src: "/work/zapachdomu/category-description-mobile.png",
				alt: {
					pl: "Opis SEO z „Czytaj więcej” na telefonie",
					en: "SEO description with “Read more” on a phone",
				},
				width: 343,
				height: 709,
			},
		],
		quote: {
			text: {
				pl: "Lubię z Tobą pracować, bo jesteś konkretny i zawsze starasz się podążać za celami.",
				en: "I like working with you because you get straight to the point and always try to follow the goals.",
			},
			lang: "pl",
			author: "Konrad Bilski",
			role: "nazielono.pro",
		},
		liveUrl: "https://zapachdomu.com",
		seo: {},
	},
];
