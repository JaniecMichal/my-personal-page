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
			{ value: "Vite", label: { pl: "migracja z create-react-app", en: "migrated from create-react-app" } },
			{ value: "2", label: { pl: "interfejsy: administrator szkoły i rodzic", en: "interfaces: school admin and parent" } },
			{ value: "PL", label: { pl: "posiłki w szkołach w całej Polsce, codziennie", en: "school meals served daily across Poland" } },
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
			alt: { pl: "Panel administratora szkoły w jemWszkole.pl", en: "School admin panel in jemWszkole.pl" },
			width: 1894,
			height: 951,
		},
		gallery: [
			{
				src: "/work/jemwszkole/admin-menu-desktop.png",
				alt: { pl: "Panel administratora szkoły: edycja jadłospisu", en: "School admin panel: editing the menu" },
				width: 1894,
				height: 951,
			},
			{
				src: "/work/jemwszkole/order-calendar-desktop.png",
				alt: { pl: "Zamawianie posiłków w kalendarzu z koszykiem", en: "Ordering meals in a calendar with a basket" },
				width: 1894,
				height: 951,
			},
			{
				src: "/work/jemwszkole/parent-dashboard-desktop.png",
				alt: { pl: "Panel rodzica: kalendarz, ogłoszenia i zamówione posiłki", en: "Parent dashboard: calendar, announcements and ordered meals" },
				width: 645,
				height: 568,
			},
			{
				src: "/work/jemwszkole/parent-dashboard-mobile.png",
				alt: { pl: "Panel rodzica na telefonie: zgłoszenie nieobecności i zamówienie posiłku", en: "Parent dashboard on a phone: report an absence and order a meal" },
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
				alt: { pl: "Wybór dni w kalendarzu na telefonie", en: "Picking days in the calendar on a phone" },
				width: 339,
				height: 702,
			},
		],
		quote: {
			text: "He proactively suggests ideas for improving the application and introducing new features, which significantly enhances the final product. Moreover, he is an excellent communicator—working with him is truly a pleasure.",
			author: "Maciej Rygielski",
			role: { pl: "Project Manager w projekcie jemWszkole.pl", en: "Project Manager, jemWszkole.pl" },
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
		stack: ["React", "TypeScript", "Redux", "RTK Query", "Jest", "React Testing Library", "SASS", "Material UI"],
		services: ["web-apps"],
		metrics: [
			{ value: { pl: "3,5 ROKU", en: "3.5 YEARS" }, label: { pl: "w projekcie", en: "on the project" } },
			{ value: "50", label: { pl: "inżynierów w zespole", en: "engineers on the team" } },
			{ value: "Senior", label: { pl: "od juniora do seniora w projekcie", en: "from junior to senior on the project" } },
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
			text: "Michał consistently demonstrated his ability to handle complex projects independently, including successfully rewriting an entire system to adopt a modern tech stack.",
			author: "Daniel Kowalczyk",
			role: { pl: "Team Leader w projekcie Braintrust, co-founder HexOcean", en: "Team Leader on Braintrust, co-founder of HexOcean" },
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
				alt: { pl: "Panel freelancera w Braintrust: zadania do wykonania i dopasowane oferty", en: "Braintrust talent dashboard: action items and job matches" },
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
				alt: { pl: "Szczegóły oferty: stawka, wymagania, polecenia w tokenach BTRST", en: "Job details: rate, requirements and BTRST referral rewards" },
				width: 1910,
				height: 957,
			},
			{
				src: "/work/braintrust/wallet-desktop.png",
				alt: { pl: "Portfel tokenów BTRST z historią aktywności", en: "BTRST token wallet with activity history" },
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
];
