import type { FaqItem, PricingPlan, ProcessStep, Testimonial } from "../types";
import type { LocalizedDeep } from "./resolve";

export const testimonials: LocalizedDeep<Testimonial>[] = [
	{
		id: "daniel-kowalczyk",
		author: "Daniel Kowalczyk",
		role: {
			pl: "Co-founder, HexOcean · mój przełożony przez prawie 4 lata",
			en: "Co-founder, HexOcean · my direct supervisor for nearly 4 years",
		},
		quote: {
			pl: "Michał wielokrotnie pokazał, że samodzielnie radzi sobie ze złożonymi projektami, w tym z udanym przepisaniem całego systemu na nowoczesny stack technologiczny.",
			en: "Michał consistently demonstrated his ability to handle complex projects independently, including successfully rewriting an entire system to adopt a modern tech stack.",
		},
		text: {
			pl: "Miałem przyjemność być bezpośrednim przełożonym Michała w HexOcean przez prawie cztery lata. W tym czasie obserwowałem jego imponujący rozwój od juniora do seniora frontend developera. Michał wielokrotnie pokazał, że samodzielnie radzi sobie ze złożonymi projektami, w tym z udanym przepisaniem całego systemu na nowoczesny stack technologiczny. Poza wiedzą techniczną jest wyjątkowo dobrze zorganizowany, odpowiedzialny i zmotywowany. Zawsze można na nim polegać: dostarcza pracę wysokiej jakości i spełnia oczekiwania.",
			en: "I had the pleasure of being Michał's direct supervisor at HexOcean for nearly four years. During this time, I witnessed his impressive growth from a junior to a senior frontend developer. Michał consistently demonstrated his ability to handle complex projects independently, including successfully rewriting an entire system to adopt a modern tech stack. In addition to his technical expertise, Michał is exceptionally self-organized, responsible, and motivated. He is someone you can always rely on to deliver high-quality work and meet expectations.",
		},
		lang: "en",
		url: "https://www.linkedin.com/in/danielkowalczyk/",
	},
	{
		id: "maciej-rygielski",
		author: "Maciej Rygielski",
		role: { pl: "Project Manager w projekcie jemWszkole.pl", en: "Project Manager, jemWszkole.pl" },
		quote: {
			pl: "Z własnej inicjatywy proponuje usprawnienia aplikacji i nowe funkcje, co wyraźnie podnosi jakość końcowego produktu.",
			en: "He proactively suggests ideas for improving the application and introducing new features, which significantly enhances the final product.",
		},
		text: {
			pl: "Miałem przyjemność współpracować z Michałem i z pełnym przekonaniem polecam go jako front-end developera. Jest niezwykle skrupulatny: dba o najwyższą jakość kodu, porządek i konsekwentnie stosuje dobre praktyki. Michał to jednak nie tylko świetny programista, ale też realna wartość dla zespołu. Z własnej inicjatywy proponuje usprawnienia aplikacji i nowe funkcje, co wyraźnie podnosi jakość końcowego produktu. Do tego świetnie się komunikuje i praca z nim to prawdziwa przyjemność. Jasno i konkretnie przekazuje swoje myśli, dzięki czemu współpraca przebiega płynnie i sprawnie. Gorąco polecam Michała każdemu zespołowi, który ceni profesjonalizm, dobrze zorganizowaną pracę i kreatywne podejście do tworzenia aplikacji.",
			en: "I had the pleasure of working with Michał, and I can wholeheartedly recommend him as a Front-end developer. He is extremely meticulous in programming—ensuring the highest code quality, maintaining order, and consistently applying best development practices. However, Michał is not just a great programmer; he also brings real value to the team. He proactively suggests ideas for improving the application and introducing new features, which significantly enhances the final product. Moreover, he is an excellent communicator—working with him is truly a pleasure. He conveys his thoughts clearly and effectively, making project collaboration smooth and efficient. I highly recommend Michał to any team that values professionalism, well-structured work, and a creative approach to application development.",
		},
		lang: "en",
		url: "https://www.linkedin.com/in/maciejrygielski/",
	},
	{
		id: "rafal-jusiak",
		author: "Rafał Jusiak",
		role: {
			pl: "Python Developer, współtwórca Moja Matura",
			en: "Python Developer, co-creator of Moja Matura",
		},
		quote: {
			pl: "Wykazywał się niezwykłą dbałością o szczegóły i za każdym razem dostarczał czysty, wydajny kod.",
			en: "He demonstrated remarkable attention to detail, delivering clean and efficient code every time.",
		},
		text: {
			pl: "Miałem przyjemność współpracować z Michałem przy wielu funkcjach dla Braintrust. Jako frontend developer wykazywał się niezwykłą dbałością o szczegóły i za każdym razem dostarczał czysty, wydajny kod. Wyróżniał się też umiejętnością współpracy: regularnie proponował pomysły i rozwiązania, które podnosiły poziom naszych projektów.",
			en: "I had the pleasure of collaborating with Michał on multiple features for Braintrust. As a frontend developer, he demonstrated remarkable attention to detail, delivering clean and efficient code every time. He also showed exceptional collaboration skills, consistently offering ideas and solutions that elevated our projects.",
		},
		lang: "en",
		url: "https://www.linkedin.com/in/rafal-jusiak/",
	},
	{
		id: "piotr-zawierucha",
		author: "Piotr Zawierucha",
		role: { pl: "Co-founder, CodeCaptains", en: "Co-founder, CodeCaptains" },
		quote: {
			pl: "Jego zaangażowanie w tworzenie rozwiązań wysokiej jakości sprawia, że jest cennym wsparciem dla każdego zespołu.",
			en: "His dedication to developing high-quality solutions makes him a valuable asset to any team.",
		},
		text: {
			pl: "Michał to ambitny frontend developer, którego praca z nowoczesnymi technologiami przekłada się na niezawodne i innowacyjne oprogramowanie. Jego zaangażowanie w tworzenie rozwiązań wysokiej jakości sprawia, że jest cennym wsparciem dla każdego zespołu.",
			en: "Michał is an ambitious frontend developer whose work with modern technologies leads to the creation of reliable and innovative software. His dedication to developing high-quality solutions makes him a valuable asset to any team.",
		},
		lang: "en",
		url: "https://www.linkedin.com/in/piotrzawierucha/",
	},
];

export const pricingPlans: LocalizedDeep<PricingPlan>[] = [
	{
		id: "landing",
		kicker: { pl: "Na dobry start", en: "Quick start" },
		name: { pl: "Strona-wizytówka", en: "One-page site" },
		price: { pl: "od 1 000 zł", en: "from 1,000 PLN" },
		features: {
			pl: [
				"1 strona, do 6 sekcji",
				"z Twojego projektu graficznego",
				"responsywność i podstawowe SEO",
				"wdrożenie + 1 runda poprawek",
			],
			en: [
				"1 page, up to 6 sections",
				"from your ready design",
				"responsive, basic SEO",
				"launch + 1 round of fixes",
			],
		},
		highlighted: false,
	},
	{
		id: "website",
		kicker: { pl: "Dla małych firm", en: "For small businesses" },
		name: { pl: "Strona firmowa z panelem", en: "Website with an editor" },
		price: { pl: "od 2 900 zł", en: "from 2,900 PLN" },
		features: {
			pl: [
				"do 4 podstron",
				"panel do edycji treści",
				"SEO i dane strukturalne",
				"wdrożenie + 30 dni wsparcia",
			],
			en: [
				"up to 4 pages",
				"content editor",
				"SEO and structured data",
				"launch + 30 days support",
			],
		},
		highlighted: true,
	},
	{
		id: "shopify",
		kicker: { pl: "Dla sklepów internetowych", en: "For online stores" },
		name: { pl: "Sklep Shopify", en: "Shopify store" },
		price: { pl: "od 2 500 zł", en: "from 2,500 PLN" },
		features: {
			pl: ["dopasowanie motywu", "do 50 produktów", "płatności i dostawy", "checklista startowa"],
			en: ["theme customisation", "up to 50 products", "payments and shipping", "launch checklist"],
		},
		highlighted: false,
	},
	{
		id: "hourly",
		kicker: { pl: "Wsparcie, zespoły, agencje", en: "Support, teams, agencies" },
		name: { pl: "Współpraca godzinowa", en: "Hourly engagement" },
		price: { pl: "120 zł/h", en: "120 PLN/h" },
		features: {
			pl: [
				"zmiany w WordPress, Next.js, Shopify",
				"React, Next.js, frontend Rails",
				"część etatu w Twoim zespole",
				"rozliczenie co 15 min, raport godzin",
			],
			en: [
				"changes in WordPress, Next.js, Shopify",
				"React, Next.js, Rails frontend",
				"part-time in your team",
				"billed per 15 min, time report",
			],
		},
		highlighted: false,
	},
];

export const faq: LocalizedDeep<FaqItem>[] = [
	{
		id: "cost",
		group: "cooperation",
		question: { pl: "Ile kosztuje strona internetowa?", en: "How much does a website cost?" },
		answer: {
			pl: "Prosta strona-wizytówka z gotowego projektu graficznego kosztuje od 1 000 zł netto, a strona firmowa z panelem do edycji od 2 900 zł netto. Cena zależy głównie od liczby podstron, integracji z innymi narzędziami i tego, czy teksty oraz zdjęcia są już gotowe. Po krótkim briefie dostajesz dokładną wycenę z zakresem w 2–3 dni robocze. Projekty niestandardowe wyceniam indywidualnie.",
			en: "A simple one-page site built from your ready design starts from 1,000 PLN net, and a website with an editor from 2,900 PLN net. The price depends mostly on the number of pages, integrations with other tools and whether the texts and photos are ready. After a short brief you get an exact quote with the scope within 2–3 working days. Custom projects get an individual quote.",
		},
	},
	{
		id: "time",
		group: "cooperation",
		question: { pl: "Ile trwa realizacja?", en: "How long does it take?" },
		answer: {
			pl: "Strona-wizytówka zwykle powstaje w kilka dni, strona firmowa z panelem w 2–3 tygodnie, a sklep Shopify w 3–5 tygodni. Termin w dużej mierze zależy od tego, jak szybko są gotowe treści i decyzje. Przy dłuższych projektach co tydzień dostajesz podgląd na żywo, więc widzisz postęp i możesz komentować na bieżąco.",
			en: "A one-page site usually takes a few days, a website with an editor 2–3 weeks, a Shopify store 3–5 weeks. The timeline depends a lot on how quickly the content and decisions are ready. On longer projects you get a live preview every week, so you can see the progress and comment as we go.",
		},
	},
	{
		id: "existing-site",
		group: "cooperation",
		question: { pl: "Czy poprawisz moją obecną stronę?", en: "Can you fix my existing website?" },
		answer: {
			pl: "Tak. Naprawiam błędy, dodaję nowe sekcje, przyspieszam i przenoszę istniejące strony, najczęściej na WordPressie, bez przepisywania wszystkiego od zera. Zanim cokolwiek zmienię, sprawdzam motyw, wtyczki i hosting, żeby poprawka nie zepsuła czegoś innego. Takie prace rozliczam godzinowo, 90–150 zł/h netto, zależnie od złożoności. Jeśli nie wiesz, co dokładnie szwankuje, dobrym startem jest audyt szybkości i SEO.",
			en: "Yes. I fix bugs, add new sections, speed up and migrate existing sites, most often on WordPress, without rewriting everything from scratch. Before changing anything I review the theme, plugins and hosting, so a fix doesn't break something else. This work is billed hourly at 90–150 PLN/h net, depending on complexity. If you're not sure what exactly is wrong, a speed and SEO audit is a good place to start.",
		},
	},
	{
		id: "edit",
		group: "cooperation",
		question: { pl: "Czy sam będę mógł edytować treści?", en: "Can I edit the content myself?" },
		answer: {
			pl: "Tak. Dobieram panel do projektu: WordPress, Shopify, Sanity albo inny headless CMS. Po wdrożeniu pokazuję, jak zmieniać teksty, zdjęcia i podstrony, żeby drobne zmiany nie wymagały programisty.",
			en: "Yes. I pick the editor that suits the project: WordPress, Shopify, Sanity or another headless CMS. After launch I show you how to change texts, photos and pages, so small changes don't need a developer.",
		},
	},
	{
		id: "prepare",
		group: "cooperation",
		question: { pl: "Co muszę przygotować na start?", en: "What do I need to prepare?" },
		answer: {
			pl: "Na początek wystarczy krótki opis firmy i tego, co strona ma załatwiać. Pomagają też: logo i kolory, teksty (choćby robocze), zdjęcia, 2–3 strony, które Ci się podobają, oraz informacja, gdzie są domena i obecny hosting. Nie wysyłaj haseł w formularzu ani mailem. Dostępy ustalimy osobno, gdy zaczniemy pracę.",
			en: "To start, a short description of your business and what the site should do is enough. It also helps to have your logo and colours, texts (even rough drafts), photos, 2–3 sites you like, and where your domain and current hosting are. Please don't send passwords in the form or by email. We'll sort out access separately once the work starts.",
		},
	},
	{
		id: "seo",
		group: "cooperation",
		question: { pl: "Czy zajmiesz się też SEO?", en: "Do you take care of SEO?" },
		answer: {
			pl: "Tak, w zakresie technicznym. Każda strona ma poprawne metadane, dane strukturalne i mapę strony, a przed oddaniem sprawdzam jej szybkość (Core Web Vitals) i podpinam Google Search Console. Stałe pozycjonowanie i kampanie Google Ads prowadzę razem ze sprawdzonym zespołem specjalistów, a Twoim jedynym kontaktem zostaję ja. Szczegóły są na stronie usługi SEO i Google Ads.",
			en: "Yes, the technical side. Every site ships with correct metadata, structured data and a sitemap, and before handover I check its speed (Core Web Vitals) and connect Google Search Console. Ongoing SEO and Google Ads campaigns I run together with a trusted team of specialists, and I stay your single point of contact. Details are on the SEO and Google Ads service page.",
		},
	},
	{
		id: "remote",
		group: "cooperation",
		question: {
			pl: "Czy pracujesz z firmami spoza Katowic?",
			en: "Do you work with companies outside Poland?",
		},
		answer: {
			pl: "Tak. Pracuję zdalnie z firmami z całej Polski, a także z UE i Wielkiej Brytanii. Rozmawiamy przez wideo, a postęp widzisz na podglądzie strony. Z firmami z Katowic i Śląska chętnie spotkam się też na miejscu.",
			en: "Yes. I work remotely with businesses across Poland, the EU and the UK. We talk over video, and you follow the progress on a live preview of the site. With companies in Katowice and Silesia I'm also happy to meet in person.",
		},
	},
	{
		id: "invoice",
		group: "cooperation",
		question: { pl: "Czy wystawiasz fakturę VAT?", en: "Do you issue VAT invoices?" },
		answer: {
			pl: "Tak. Prowadzę jednoosobową działalność gospodarczą i wystawiam faktury VAT. Mogę też pracować na umowę o dzieło lub umowę zlecenie, jeśli tak Ci wygodniej.",
			en: "Yes. I run a sole-trader business in Poland and issue VAT invoices, so B2B works out of the box. For Polish clients I can also work on a contract for specific work or a mandate contract.",
		},
	},
	{
		id: "ownership",
		group: "cooperation",
		question: {
			pl: "Do kogo należą domena, hosting i kod?",
			en: "Who owns the domain, hosting and code?",
		},
		answer: {
			pl: "Do Ciebie. Domena, hosting i kod są na Ciebie, a po wdrożeniu przekazuję wszystkie dostępy. Dzięki temu nie jesteś uzależniony od jednego wykonawcy i w każdej chwili możesz rozwijać stronę z kimś innym.",
			en: "You do. The domain, hosting and code are in your name, and I hand over all access after launch. That way you're not tied to one developer and can keep building the site with someone else at any time.",
		},
	},
	{
		id: "after-launch",
		group: "cooperation",
		question: { pl: "Co dzieje się po oddaniu strony?", en: "What happens after launch?" },
		answer: {
			pl: "Strona firmowa z panelem ma w cenie 30 dni wsparcia po starcie: poprawiam błędy i odpowiadam na pytania, a strona-wizytówka jedną rundę poprawek. Później możesz wybrać stałą opiekę, czyli pakiet od 2–4 godzin miesięcznie z priorytetową odpowiedzią, albo zlecać zmiany jednorazowo, wtedy gdy ich potrzebujesz. Stawka to 90–150 zł/h netto, zależnie od złożoności prac. Opiekuję się projektami w różnych technologiach: poza ekosystemem JavaScript (React, Next.js) pracuję na co dzień z Shopify, WordPressem i PHP, AtomStore oraz Ruby on Rails, więc przejmę też stronę, której nie budowałem.",
			en: "The website with an editor includes 30 days of support after launch: I fix bugs and answer questions. The one-page site includes one round of fixes. After that you can choose ongoing care, a plan from 2–4 hours a month with priority response, or order changes as one-off jobs when you need them. The rate is 90–150 PLN/h net, depending on complexity. I look after projects across different technologies: beyond the JavaScript ecosystem (React, Next.js) I work with Shopify, WordPress and PHP, AtomStore and Ruby on Rails, so I can also take over a site I didn't build.",
		},
	},
	{
		id: "team",
		group: "cooperation",
		question: {
			pl: "Czy dołączysz do naszego zespołu na część etatu?",
			en: "Can you join our team part-time?",
		},
		answer: {
			pl: "Tak. Dołączam do zespołów i agencji na część etatu albo na ustaloną liczbę godzin w tygodniu i wzmacniam je jako frontend developer: React i Next.js, Shopify, WordPress albo frontend w Rails. Rozliczenie godzinowe, 120 zł/h netto, na fakturę VAT.",
			en: "Yes. I join teams and agencies part-time or for an agreed number of hours a week, as a frontend developer: React and Next.js, Shopify, WordPress or a Rails frontend. Billed hourly at 120 PLN/h net, with a VAT invoice.",
		},
	},
	{
		id: "who",
		group: "about",
		question: { pl: "Kim jest Michał Janiec?", en: "Who is Michał Janiec?" },
		answer: {
			pl: "Michał Janiec to programista z Katowic, który od 2021 roku zawodowo tworzy strony i aplikacje internetowe, dziś jako Senior Frontend Developer. Pod marką mjaniec.it pracuje bezpośrednio z firmami: tworzy nowe strony, rozwija i naprawia istniejące serwisy, a po starcie zostaje do dalszych zmian. Na co dzień korzysta z React, Next.js i TypeScript, a przy sklepach i istniejących stronach także z Shopify i WordPressa.",
			en: "Michał Janiec is a developer from Katowice, Poland, who has built websites and web apps professionally since 2021, now as a Senior Frontend Developer. Under the mjaniec.it name he works directly with businesses: he builds new websites, develops and fixes existing ones, and stays on for changes after launch. Day to day he works with React, Next.js and TypeScript, and with Shopify and WordPress for stores and existing sites.",
		},
	},
	{
		id: "agency",
		group: "about",
		question: { pl: "Czy mjaniec.it to agencja?", en: "Is mjaniec.it an agency?" },
		answer: {
			pl: "Nie. mjaniec.it to jednoosobowa działalność: rozmawiasz bezpośrednio ze mną, czyli z osobą, która pisze kod, bez pośredników po drodze. Przy stałym pozycjonowaniu i kampaniach reklamowych współpracuję ze sprawdzonym zespołem specjalistów, ale kontakt i odpowiedzialność za stronę zostają po mojej stronie.",
			en: "No. mjaniec.it is a one-person business: you talk directly to me, the person who writes the code, with no middlemen. For ongoing SEO and ad campaigns I work with a trusted team of specialists, but the contact and responsibility for your site stay with me.",
		},
	},
];

export const processSteps: LocalizedDeep<ProcessStep>[] = [
	{
		id: "brief",
		title: "Brief",
		description: {
			pl: "3-minutowy formularz albo 20 minut rozmowy. Poznaję cel, nie tylko listę funkcji.",
			en: "A 3-minute form or a 20-minute call. I learn the goal, not just the feature list.",
		},
	},
	{
		id: "quote",
		title: { pl: "Wycena i plan", en: "Quote and plan" },
		description: {
			pl: "W 2–3 dni robocze dostajesz zakres, cenę i harmonogram. Bez ukrytych kosztów.",
			en: "Within 2–3 working days you get the scope, price and timeline. No hidden costs.",
		},
	},
	{
		id: "build",
		title: { pl: "Budowa", en: "Build" },
		description: {
			pl: "Co tydzień podgląd na żywo. Widzisz postęp i możesz komentować na bieżąco.",
			en: "A live preview every week. You see progress and can comment as we go.",
		},
	},
	{
		id: "launch",
		title: { pl: "Start", en: "Launch" },
		description: {
			pl: "Wdrożenie, domena, analityka, Search Console. Szkolenie z edycji treści.",
			en: "Deployment, domain, analytics, Search Console. Training on editing content.",
		},
	},
	{
		id: "care",
		title: { pl: "Opieka", en: "Care" },
		description: {
			pl: "Poprawki, aktualizacje i rozwój. Stały pakiet godzin co miesiąc albo jednorazowe zlecenia.",
			en: "Fixes, updates and new features. A monthly block of hours or one-off jobs.",
		},
	},
];
