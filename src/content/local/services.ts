import type { LocalService } from "./resolve";

export const services: LocalService[] = [
	{
		id: "business-website",
		slug: { pl: "strona-internetowa-dla-firmy", en: "business-website" },
		order: 1,
		title: { pl: "Strona internetowa dla firmy", en: "A website for your business" },
		summary: {
			pl: "Nowa strona dla Twojej firmy: czytelna oferta, łatwy kontakt, przygotowana pod Google i telefony. Treści zmieniasz sam.",
			en: "A new website for your business: a clear offer, easy contact, built for Google and phones. You edit the content yourself.",
		},
		intro: {
			pl: "Nie musisz znać się na technologii. Mówisz mi, co ma się wydarzyć: więcej telefonów, zapytań albo rezerwacji. Ja dobieram rozwiązanie, buduję stronę i dbam o to, żeby klienci ją znaleźli: strona spełnia techniczne standardy Google, więc ma solidne podstawy, żeby pojawiać się wysoko w wynikach i przyciągać nowych klientów. Moją główną technologią jest Next.js: strony są szybkie i bezpieczne, a treści zmieniasz sam w panelu.",
			en: "You don't need to know anything about technology. Tell me what should happen: more calls, enquiries or bookings. I pick the right tools, build the site and make sure customers can find it: the site meets Google's technical standards, which gives it a solid basis to rank well and bring in new customers. My main technology is Next.js: sites that are fast and secure, and you edit the content yourself.",
		},
		tags: ["Next.js", "SEO", "CMS"],
		priceFrom: { pl: "od 1 000 zł", en: "from 1,000 PLN" },
		timeline: { pl: "od kilku dni do 3 tygodni", en: "a few days to 3 weeks" },
		support: { pl: "1 runda poprawek albo 30 dni", en: "1 fix round or 30 days" },
		included: [
			{
				title: { pl: "„Nie ma mnie w Google”", en: "“I'm not on Google”" },
				description: {
					pl: "Konfiguruję SEO techniczne, wizytówkę i Search Console, żeby strona pojawiała się, gdy ktoś szuka Twoich usług w okolicy.",
					en: "I set up technical SEO, your business profile and Search Console, so the site shows up when people nearby search for what you offer.",
				},
			},
			{
				title: { pl: "„Strona wygląda staro na telefonie”", en: "“It looks dated on phones”" },
				description: {
					pl: "Większość klientów wchodzi z telefonu. Strona jest projektowana najpierw pod mały ekran i zoptymalizowana tak, żeby na każdym urządzeniu ładowała się błyskawicznie i osiągała najlepsze możliwe wyniki.",
					en: "Most customers visit on a phone. The site is designed for small screens first and optimised to load instantly and score as high as possible on every device.",
				},
			},
			{
				title: { pl: "„Nie mogę sam nic zmienić”", en: "“I can't change anything myself”" },
				description: {
					pl: "Dostajesz prosty panel: zmieniasz ceny, godziny otwarcia, zdjęcia i aktualności bez dzwonienia do programisty.",
					en: "You get a simple panel: update prices, opening hours, photos and news without calling a developer.",
				},
			},
			{
				title: {
					pl: "„Ludzie wchodzą, ale nie piszą”",
					en: "“People visit but don't get in touch”",
				},
				description: {
					pl: "Jasna oferta, widoczny telefon, krótki formularz i przyciski kontaktu tam, gdzie klient ich szuka.",
					en: "A clear offer, a visible phone number, a short form and contact buttons where customers look for them.",
				},
			},
		],
		plans: [
			{
				id: "business-landing",
				kicker: { pl: "Na dobry start", en: "Quick start" },
				name: { pl: "Strona-wizytówka", en: "One-page site" },
				price: { pl: "od 1 000 zł", en: "from 1,000 PLN" },
				features: {
					pl: [
						"1 strona, do 6 sekcji",
						"z Twojego projektu graficznego",
						"formularz kontaktowy",
						"wdrożenie + 1 runda poprawek",
					],
					en: [
						"1 page, up to 6 sections",
						"from your ready design",
						"contact form",
						"launch + 1 round of fixes",
					],
				},
				highlighted: false,
			},
			{
				id: "business-website",
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
				id: "business-care",
				kicker: { pl: "Dla działających stron", en: "For live sites" },
				name: { pl: "Zmiany i opieka", en: "Changes and care" },
				price: { pl: "90–150 zł/h", en: "90–150 PLN/h" },
				features: {
					pl: [
						"nowe sekcje, poprawki, aktualizacje",
						"stały pakiet od 2–4 h miesięcznie",
						"priorytetowa odpowiedź w pakiecie",
						"albo jednorazowe zlecenia",
					],
					en: [
						"new sections, fixes, updates",
						"monthly plan from 2–4 h",
						"priority response on a plan",
						"or one-off jobs",
					],
				},
				highlighted: false,
			},
		],
		faq: [
			{
				id: "business-faq-1",
				question: {
					pl: "W jakiej technologii zrobisz stronę?",
					en: "Which technology will you use?",
				},
				answer: {
					pl: "Takiej, która pasuje do celu i budżetu. Najczęściej to Next.js z prostym panelem do edycji: strony są szybkie, bezpieczne i dobrze radzą sobie w Google. Jeśli masz już stronę na WordPressie albo zespół, który go zna, zostajemy przy nim, a przy sklepie internetowym wybieram Shopify. Przed startem tłumaczę, dlaczego proponuję dane rozwiązanie.",
					en: "Whatever fits the goal and budget. Most often it's Next.js with a simple editor: the sites are fast, secure and do well on Google. If you already have a WordPress site or a team that knows it, we stay with WordPress, and for an online store I choose Shopify. Before we start I explain why I suggest a given option.",
				},
			},
			{
				id: "business-faq-5",
				question: {
					pl: "Czym różni się strona-wizytówka od strony firmowej?",
					en: "What's the difference between a one-page site and a business website?",
				},
				answer: {
					pl: "Strona-wizytówka (od 1 000 zł netto) to jedna strona do 6 sekcji, budowana z Twojego gotowego projektu graficznego, z formularzem kontaktowym i jedną rundą poprawek. Prosty panel do edycji treści też mieści się w tej cenie. Strona firmowa z panelem (od 2 900 zł netto) ma do 4 podstron, panel do edycji treści (WordPress, Shopify, Sanity albo inny headless CMS, zależnie od potrzeb), SEO z danymi strukturalnymi i 30 dni wsparcia po starcie. Jeśli nie wiesz, którą wybrać, opisz firmę w briefie, a zaproponuję wariant.",
					en: "A one-page site (from 1,000 PLN net) is a single page with up to 6 sections, built from your ready design, with a contact form and one round of fixes. A simple content editor fits in that price too. A website with an editor (from 2,900 PLN net) has up to 4 pages, a content editor (WordPress, Shopify, Sanity or another headless CMS, whatever suits you), SEO with structured data and 30 days of support after launch. If you're not sure which one you need, describe your business in the brief and I'll suggest one.",
				},
			},
			{
				id: "business-faq-2",
				question: {
					pl: "Nie mam tekstów ani zdjęć. Co wtedy?",
					en: "I don't have copy or photos. What then?",
				},
				answer: {
					pl: "To częsta sytuacja. Pomagam ułożyć strukturę strony i treści na podstawie krótkiej rozmowy o Twojej firmie: co robisz, dla kogo i o co klienci najczęściej pytają. Zdjęcia możemy na start dobrać ze stocków i podmienić później na własne, bez przebudowy strony.",
					en: "That's common. I help you shape the page structure and copy from a short conversation about your business: what you do, who for and what customers ask most often. We can start with stock photos and swap in your own later, without rebuilding the site.",
				},
			},
			{
				id: "business-faq-3",
				question: {
					pl: "Czy strona będzie widoczna w Google?",
					en: "Will the site show up on Google?",
				},
				answer: {
					pl: "Strona dostaje SEO techniczne, mapę strony, dane strukturalne i zgłoszenie do Google Search Console, więc Google może ją szybko znaleźć i poprawnie zrozumieć. Pozycja w wynikach zależy jednak też od konkurencji w Twojej branży i od treści, dlatego nie obiecuję miejsc w rankingu, tylko mówię uczciwie, czego się spodziewać. Jeśli chcesz stałego pozycjonowania albo kampanii Google Ads, to osobna usługa.",
					en: "The site gets technical SEO, a sitemap, structured data and a Google Search Console submission, so Google can find it quickly and understand it correctly. Rankings also depend on the competition in your industry and on the content, so I don't promise positions, I tell you honestly what to expect. Ongoing SEO or Google Ads campaigns are a separate service.",
				},
			},
			{
				id: "business-faq-4",
				question: { pl: "Kto będzie właścicielem strony?", en: "Who owns the website?" },
				answer: {
					pl: "Ty. Domenę i hosting rejestrujemy na Ciebie, a po wdrożeniu dostajesz kod i wszystkie dostępy. Możesz później rozwijać stronę ze mną albo z kimkolwiek innym.",
					en: "You do. The domain and hosting are registered in your name, and after launch you get the code and all access. Later you can keep developing the site with me or with anyone else.",
				},
			},
			{
				id: "business-faq-6",
				question: {
					pl: "Co jeśli po starcie będę chciał coś zmienić?",
					en: "What if I want changes after launch?",
				},
				answer: {
					pl: "Teksty, zdjęcia, ceny czy godziny otwarcia zmieniasz sam w panelu. Strona firmowa ma w cenie 30 dni wsparcia, a strona-wizytówka jedną rundę poprawek. Później możesz wybrać stałą opiekę, czyli pakiet od 2–4 godzin miesięcznie z priorytetową odpowiedzią, albo zlecać nowe sekcje, poprawki i aktualizacje jednorazowo. Stawka to 90–150 zł/h netto, zależnie od złożoności prac.",
					en: "You change texts, photos, prices or opening hours yourself in the editor. The business website includes 30 days of support, the one-page site one round of fixes. After that you can choose ongoing care, a plan from 2–4 hours a month with priority response, or order new sections, fixes and updates as one-off jobs. The rate is 90–150 PLN/h net, depending on complexity.",
				},
			},
		],
		seo: {
			title: {
				pl: "Strona internetowa dla firmy od 1 000 zł | Michał Janiec",
				en: "Business website from 1,000 PLN | Michał Janiec",
			},
			description: {
				pl: "Nowa strona dla firmy z Katowic i całego Śląska: czytelna oferta, łatwy kontakt, szybka na telefonie i gotowa pod Google. Od 1 000 zł netto.",
				en: "A new website for your business: a clear offer, easy contact, fast on phones and built for Google. From 1,000 PLN net.",
			},
		},
	},
	{
		id: "nextjs-websites",
		// Indexed since launch; reachable from the services page and footer, not shown on the home page.
		showOnHome: false,
		slug: { pl: "strony-nextjs", en: "nextjs-websites" },
		order: 8,
		title: { pl: "Strony internetowe w Next.js", en: "Websites in Next.js" },
		summary: {
			pl: "Szybkie strony w Next.js z panelem do edycji. Dla agencji, startupów i firm, które odchodzą od WordPressa.",
			en: "Fast Next.js websites with a content editor. For agencies, startups and companies moving off WordPress.",
		},
		intro: {
			pl: "Next.js to moja główna technologia. Strony ładują się szybko, są bezpieczne i mają SEO techniczne zapisane w kodzie, a treści zmieniasz sam w panelu. Robię je dla firm z Katowic, Śląska i całej Polski. Ta strona jest dla tych, którzy już wiedzą, że chcą Next.js; jeśli dopiero wybierasz, zacznij od strony internetowej dla firmy.",
			en: "Next.js is my main technology. The sites load fast, are secure and have technical SEO written into the code, and you edit the content yourself. I build them for businesses in Katowice, Silesia and across Poland. This page is for people who already know they want Next.js; if you are still choosing, start with the business website page.",
		},
		tags: ["Next.js", "SEO", "CMS"],
		priceFrom: { pl: "od 1 000 zł", en: "from 1,000 PLN" },
		timeline: { pl: "od kilku dni do 3 tygodni", en: "a few days to 3 weeks" },
		support: { pl: "1 runda poprawek albo 30 dni", en: "1 fix round or 30 days" },
		included: [
			{
				title: { pl: "Agencje marketingowe i SEO", en: "Marketing and SEO agencies" },
				description: {
					pl: "Strona, która sama dowodzi kompetencji: szybka, z SEO technicznym zapisanym w kodzie. Tak powstała strona nazielono.pro.",
					en: "A site that proves your skills by itself: fast, with technical SEO written into the code. That's how nazielono.pro was built.",
				},
			},
			{
				title: { pl: "Firmy odchodzące od WordPressa", en: "Companies leaving WordPress" },
				description: {
					pl: "Koniec z aktualizacjami wtyczek i wolnym ładowaniem. Treści przenoszę, a adresy zachowuję albo przekierowuję, żeby nie stracić pozycji w Google.",
					en: "No more plugin updates and slow loading. I move the content and keep or redirect the URLs, so you don't lose your Google rankings.",
				},
			},
			{
				title: { pl: "Startupy i produkty", en: "Startups and products" },
				description: {
					pl: "Strona i aplikacja w jednej technologii, gotowe na rozwój: logowanie, panel klienta, integracje.",
					en: "The website and the app in one technology, ready to grow: login, client portal, integrations.",
				},
			},
			{
				title: { pl: "Szybkość i SEO w kodzie", en: "Speed and SEO in code" },
				description: {
					pl: "Metadane, dane strukturalne, mapa strony i Core Web Vitals sprawdzane przed oddaniem projektu.",
					en: "Metadata, structured data, sitemap and Core Web Vitals checked before handover.",
				},
			},
		],
		plans: [],
		faq: [
			{
				id: "nextjs-faq-1",
				question: {
					pl: "Next.js czy WordPress: co wybrać?",
					en: "Next.js or WordPress: which one?",
				},
				answer: {
					pl: "Next.js, gdy zależy Ci na szybkości, bezpieczeństwie i stronie, która rośnie razem z firmą: nie ma wtyczek do aktualizowania, a SEO techniczne mam pod kontrolą w kodzie. WordPress zostaje dobrym wyborem, gdy masz już na nim stronę i zespół, który go zna, albo potrzebujesz gotowej wtyczki do czegoś nietypowego. Doradzam uczciwie, także wtedy, gdy lepszy będzie WordPress.",
					en: "Next.js when you care about speed, security and a site that grows with the business: there are no plugins to keep updating, and technical SEO is under control in code. WordPress is still a good choice when you already have a site on it and a team that knows it, or you need a ready-made plugin for something unusual. I advise honestly, also when WordPress is the better fit.",
				},
			},
			{
				id: "nextjs-faq-2",
				question: {
					pl: "Ile kosztuje strona w Next.js?",
					en: "How much does a Next.js website cost?",
				},
				answer: {
					pl: "Strona-wizytówka zaczyna się od 1 000 zł netto, a strona firmowa z panelem do edycji (do 4 podstron) od 2 900 zł netto. Większe i niestandardowe projekty wyceniam indywidualnie. Wycenę z zakresem dostajesz w 2–3 dni robocze od briefu.",
					en: "A one-page site starts at 1,000 PLN net, and a business website with an editor (up to 4 pages) at 2,900 PLN net. Larger and custom projects are quoted individually. You get a quote with the scope within 2–3 working days of the brief.",
				},
			},
			{
				id: "nextjs-faq-3",
				question: { pl: "Czy sam będę edytować treści?", en: "Can I edit the content myself?" },
				answer: {
					pl: "Tak. Strona dostaje panel do edycji, na przykład Sanity albo inny headless CMS, w którym zmieniasz teksty, zdjęcia i wpisy bez dzwonienia do programisty.",
					en: "Yes. The site gets a content editor, for example Sanity or another headless CMS, where you change copy, images and posts without calling a developer.",
				},
			},
			{
				id: "nextjs-faq-4",
				question: {
					pl: "Czy przeniesiesz moją stronę z WordPressa?",
					en: "Can you move my site from WordPress?",
				},
				answer: {
					pl: "Tak. Przenoszę treści, zachowuję adresy albo ustawiam przekierowania, żeby strona nie straciła pozycji w Google. Zakres wyceniam po sprawdzeniu obecnej strony.",
					en: "Yes. I move the content and keep the URLs or set up redirects, so the site doesn't lose its Google rankings. I quote the scope after checking the current site.",
				},
			},
			{
				id: "nextjs-faq-5",
				question: {
					pl: "Czy Google dobrze indeksuje strony w JavaScripcie?",
					en: "Does Google index JavaScript sites well?",
				},
				answer: {
					pl: "Tak, jeśli są dobrze zbudowane. Next.js wysyła gotowy HTML z serwera, więc Google widzi treść od razu. Właśnie to chciał sprawdzić klient nazielono.pro, agencja SEO, i dlatego wybrał Next.js zamiast WordPressa.",
					en: "Yes, when they're built well. Next.js sends ready HTML from the server, so Google sees the content straight away. That's exactly what the client behind nazielono.pro, an SEO agency, wanted to test, and why it chose Next.js over WordPress.",
				},
			},
			{
				id: "nextjs-faq-6",
				question: { pl: "Ile kosztuje hosting?", en: "How much does hosting cost?" },
				answer: {
					pl: "To zależy od ruchu i dostawcy, na przykład Vercel albo Netlify. Przed startem podaję koszt dla Twojej strony, a konto zakładamy na Ciebie, więc płacisz bezpośrednio dostawcy.",
					en: "It depends on the traffic and the provider, for example Vercel or Netlify. Before we start I give you the cost for your site, and the account is set up in your name, so you pay the provider directly.",
				},
			},
			{
				id: "nextjs-faq-7",
				question: { pl: "Czy możemy spotkać się w Katowicach?", en: "Can we meet in Katowice?" },
				answer: {
					pl: "Tak. Mieszkam w Katowicach, więc chętnie spotkam się na kawę albo u Ciebie w firmie. Resztę pracy robimy zdalnie.",
					en: "Yes. I live in Katowice, so I'm happy to meet for coffee or at your office. The rest of the work is done remotely.",
				},
			},
		],
		seo: {
			title: {
				pl: "Strony internetowe w Next.js, Katowice | Michał Janiec",
				en: "Next.js websites, Katowice | Michał Janiec",
			},
			description: {
				pl: "Strony internetowe w Next.js dla firm z Katowic i Śląska: szybkie, bezpieczne, z panelem do edycji i SEO technicznym w kodzie. Od 1 000 zł netto.",
				en: "Next.js websites for businesses in Katowice and Silesia: fast, secure, with a content editor and technical SEO in code. From 1,000 PLN net.",
			},
		},
	},
	{
		id: "shopify",
		slug: { pl: "sklepy-shopify", en: "shopify-stores" },
		order: 4,
		title: { pl: "Sklepy Shopify", en: "Shopify stores" },
		summary: {
			pl: "Wdrożenie, motyw dopasowany do marki, poprawki i integracje. Sklep gotowy do sprzedaży.",
			en: "Setup, a theme tailored to your brand, fixes and integrations. A store that is ready to sell.",
		},
		intro: {
			pl: "Konfiguracja, motyw na miarę, poprawki i integracje. Buduje go senior frontend developer, więc sklep jest szybki na telefonie i prosty w obsłudze.",
			en: "Setup, a theme tailored to your brand, fixes and integrations. Built by a senior frontend developer, so the store is fast on mobile and easy for you to run.",
		},
		tags: ["Shopify", "Liquid"],
		priceFrom: { pl: "od 2 500 zł", en: "from 2,500 PLN" },
		timeline: { pl: "3–5 tygodni", en: "3–5 weeks" },
		support: { pl: "30 dni (Sklep marki)", en: "30 days (Brand store)" },
		included: [
			{
				title: { pl: "Konfiguracja sklepu", en: "Store setup" },
				description: {
					pl: "Domena, płatności, dostawy, podatki i strony prawne.",
					en: "Domain, payments, shipping, taxes and legal pages.",
				},
			},
			{
				title: { pl: "Motyw na miarę", en: "Custom theme" },
				description: {
					pl: "Sekcje Online Store 2.0, które sam układasz, dopasowane do marki.",
					en: "Online Store 2.0 sections you can rearrange yourself, built to your brand.",
				},
			},
			{
				title: { pl: "Import produktów", en: "Product import" },
				description: {
					pl: "Import z pliku CSV, z wariantami i zdjęciami. Przeniesienie sklepu z innej platformy wyceniam po sprawdzeniu danych.",
					en: "Import from a CSV file, with variants and images. Moving a store from another platform is quoted after I check the data.",
				},
			},
			{
				title: { pl: "Szybkość i SEO", en: "Speed and SEO" },
				description: {
					pl: "Lekkie aplikacje, zoptymalizowane obrazy, dane strukturalne produktów.",
					en: "Lean apps, optimised images and structured data for products.",
				},
			},
			{
				title: { pl: "Integracje", en: "Integrations" },
				description: {
					pl: "Faktury, newsletter i analityka.",
					en: "Invoices, newsletter and analytics.",
				},
			},
			{
				title: { pl: "Szkolenie i opieka", en: "Training and aftercare" },
				description: {
					pl: "Nagrane szkolenie z panelu i 30 dni poprawek w cenie.",
					en: "A recorded admin walkthrough and 30 days of fixes included.",
				},
			},
		],
		plans: [
			{
				id: "shopify-starter",
				kicker: { pl: "Na start", en: "To get started" },
				name: "Starter",
				price: { pl: "od 2 500 zł", en: "from 2,500 PLN" },
				features: {
					pl: [
						"dopasowanie motywu",
						"do 50 produktów",
						"płatności i dostawy",
						"checklista startowa",
					],
					en: [
						"theme customisation",
						"up to 50 products",
						"payments and shipping",
						"launch checklist",
					],
				},
				highlighted: false,
			},
			{
				id: "shopify-brand",
				kicker: { pl: "Dla rozwijających się marek", en: "For growing brands" },
				name: { pl: "Sklep marki", en: "Brand store" },
				price: { pl: "od 5 900 zł", en: "from 5,900 PLN" },
				features: {
					pl: [
						"własne sekcje",
						"import produktów",
						"przegląd szybkości i SEO",
						"szkolenie + 30 dni opieki",
					],
					en: [
						"custom sections",
						"product import",
						"speed and SEO pass",
						"training + 30 days care",
					],
				},
				highlighted: true,
			},
			{
				id: "shopify-care",
				kicker: { pl: "Dla działających sklepów", en: "For live stores" },
				name: { pl: "Poprawki i opieka", en: "Fixes and care" },
				price: { pl: "90–150 zł/h", en: "90–150 PLN/h" },
				features: {
					pl: [
						"błędy i nowe sekcje",
						"porządki w aplikacjach",
						"stały pakiet od 2–4 h miesięcznie",
						"priorytetowa odpowiedź",
					],
					en: [
						"bug fixes, new sections",
						"app clean-up",
						"monthly plan from 2–4 h",
						"priority response",
					],
				},
				highlighted: false,
			},
		],
		faq: [
			{
				id: "shopify-faq-1",
				question: {
					pl: "Ile kosztuje sklep na Shopify?",
					en: "How much does a Shopify store cost?",
				},
				answer: {
					pl: "Pakiet Starter zaczyna się od 2 500 zł netto: dopasowany motyw, do 50 produktów, płatności i dostawy. Sklep marki od 5 900 zł netto: własne sekcje, import produktów, przegląd szybkości i SEO, szkolenie i 30 dni opieki. Do tego dochodzi abonament Shopify, który płacisz bezpośrednio Shopify.",
					en: "The Starter package starts at 2,500 PLN net: a customised theme, up to 50 products, payments and shipping. A brand store starts at 5,900 PLN net: custom sections, product import, a speed and SEO pass, training and 30 days of care. On top comes the Shopify subscription, which you pay to Shopify directly.",
				},
			},
			{
				id: "shopify-faq-2",
				question: { pl: "Ile trwa uruchomienie sklepu?", en: "How long does it take to launch?" },
				answer: {
					pl: "Zwykle 3–5 tygodni, zależnie od liczby produktów i tego, czy zdjęcia i opisy są gotowe.",
					en: "Usually 3–5 weeks, depending on the number of products and whether photos and descriptions are ready.",
				},
			},
			{
				id: "shopify-faq-3",
				question: {
					pl: "Czy przeniesiesz sklep z innej platformy?",
					en: "Can you move my store from another platform?",
				},
				answer: {
					pl: "Przeniesienie wyceniam po sprawdzeniu danych: liczby produktów, wariantów i zamówień. Prosty import produktów z pliku CSV mieści się w pakietach.",
					en: "I quote a migration after checking the data: the number of products, variants and orders. A simple product import from a CSV file is included in the packages.",
				},
			},
			{
				id: "shopify-faq-4",
				question: { pl: "Jakie płatności można podłączyć?", en: "Which payments can I use?" },
				answer: {
					pl: "Konfiguruję płatności dostępne w Shopify w prostym wariancie. Nietypowe bramki płatności i integracje omawiamy przy wycenie.",
					en: "I set up the payments available in Shopify in a simple configuration. Unusual payment gateways and integrations are discussed in the quote.",
				},
			},
			{
				id: "shopify-faq-5",
				question: { pl: "Kto jest właścicielem sklepu?", en: "Who owns the store?" },
				answer: {
					pl: "Ty. Sklep i konto Shopify są na Ciebie, a ja pracuję na dostępie współpracownika, który możesz w każdej chwili odebrać.",
					en: "You do. The store and the Shopify account are in your name, and I work through collaborator access that you can remove at any time.",
				},
			},
		],
		seo: {
			title: {
				pl: "Sklep internetowy na Shopify od 2 500 zł | Michał Janiec",
				en: "Shopify store setup from 2,500 PLN | Michał Janiec",
			},
			description: {
				pl: "Chcesz sprzedawać online? Zakładam sklep Shopify z płatnościami i dostawami, dopasowuję motyw do marki i importuję produkty. Od 2 500 zł netto.",
				en: "Want to sell online? I set up a Shopify store with payments and shipping, tailor the theme to your brand and import your products. From 2,500 PLN net.",
			},
		},
	},
	{
		id: "wordpress",
		slug: { pl: "wordpress", en: "wordpress" },
		order: 2,
		title: { pl: "WordPress: poprawki i przyspieszenie", en: "WordPress fixes and speed-ups" },
		summary: {
			pl: "Nowe sekcje, naprawa błędów, migracje i optymalizacja, bez przepisywania wszystkiego od zera.",
			en: "New sections, bug fixes, migrations and optimisation, without rewriting everything from scratch.",
		},
		intro: {
			pl: "Masz stronę na WordPressie, która działa wolno albo wymaga zmian? Naprawię błędy, dodam sekcje, uporządkuję wtyczki i przyspieszę ładowanie.",
			en: "Got a WordPress site that is slow or needs changes? I fix bugs, add sections, tidy up plugins and make it load faster.",
		},
		tags: ["WordPress", "PHP"],
		priceFrom: { pl: "90–150 zł/h", en: "90–150 PLN/h" },
		timeline: { pl: "od 1 dnia", en: "from 1 day" },
		included: [
			{
				title: { pl: "Audyt na start", en: "Audit first" },
				description: {
					pl: "Sprawdzam motyw, wtyczki i hosting, zanim cokolwiek zmienię.",
					en: "I review the theme, plugins and hosting before changing anything.",
				},
			},
			{
				title: { pl: "Poprawki i sekcje", en: "Fixes and sections" },
				description: {
					pl: "Błędy wyświetlania, nowe bloki Gutenberga, formularze.",
					en: "Layout bugs, new Gutenberg blocks, forms.",
				},
			},
			{
				title: { pl: "Przyspieszenie", en: "Speed" },
				description: {
					pl: "Cache, obrazy, porządki we wtyczkach, lepsze Core Web Vitals.",
					en: "Caching, images, plugin clean-up, better Core Web Vitals.",
				},
			},
			{
				title: { pl: "Jednorazowo albo w stałej opiece", en: "One-off or ongoing care" },
				description: {
					pl: "Pojedyncza naprawa albo stały pakiet od 2–4 h miesięcznie z priorytetową odpowiedzią.",
					en: "A single fix, or a monthly plan from 2–4 h with priority response.",
				},
			},
		],
		plans: [],
		faq: [
			{
				id: "wordpress-faq-1",
				question: {
					pl: "Ile kosztuje naprawa strony na WordPressie?",
					en: "How much does a WordPress fix cost?",
				},
				answer: {
					pl: "Rozliczam się godzinowo: 90–150 zł/h netto, zależnie od złożoności. Przed pracą sprawdzam stronę i szacuję liczbę godzin, więc wiesz, ile zapłacisz.",
					en: "I bill by the hour: 90–150 PLN/h net, depending on complexity. Before I start I check the site and estimate the hours, so you know what you'll pay.",
				},
			},
			{
				id: "wordpress-faq-2",
				question: {
					pl: "Dlaczego moja strona na WordPressie działa wolno?",
					en: "Why is my WordPress site slow?",
				},
				answer: {
					pl: "Najczęściej przez ciężki motyw, za dużo wtyczek, nieoptymalizowane zdjęcia albo słaby hosting. Zaczynam od pomiaru Core Web Vitals, żeby poprawiać to, co naprawdę spowalnia stronę.",
					en: "Most often a heavy theme, too many plugins, unoptimised images or weak hosting. I start by measuring Core Web Vitals, so I fix what actually slows the site down.",
				},
			},
			{
				id: "wordpress-faq-3",
				question: { pl: "Czy trzeba robić stronę od nowa?", en: "Does the site need a rebuild?" },
				answer: {
					pl: "Zwykle nie. Najpierw naprawiam i przyspieszam to, co jest. Nową stronę proponuję dopiero wtedy, gdy poprawki kosztowałyby więcej niż przebudowa, i mówię to wprost.",
					en: "Usually not. First I fix and speed up what's there. I suggest a new site only when fixes would cost more than a rebuild, and I say so plainly.",
				},
			},
			{
				id: "wordpress-faq-4",
				question: {
					pl: "Czy mam podać hasło do panelu w formularzu?",
					en: "Should I send my admin password in the form?",
				},
				answer: {
					pl: "Nie. W formularzu wystarczy adres strony i opis problemu. Dostęp ustalamy osobno, najlepiej przez osobne konto dla mnie, które później usuniesz.",
					en: "No. The form only needs the site address and a description of the problem. We arrange access separately, ideally with a separate account for me that you remove later.",
				},
			},
			{
				id: "wordpress-faq-5",
				question: {
					pl: "Czy zajmiesz się stroną na stałe?",
					en: "Can you look after the site long term?",
				},
				answer: {
					pl: "Tak. Możesz wybrać stały pakiet od 2–4 godzin miesięcznie z priorytetową odpowiedzią albo pojedyncze zlecenia, gdy coś trzeba zmienić.",
					en: "Yes. You can choose a monthly plan from 2–4 hours with priority response, or one-off jobs whenever something needs changing.",
				},
			},
		],
		seo: {
			title: {
				pl: "Naprawa i przyspieszenie strony WordPress | Michał Janiec",
				en: "WordPress fixes and speed-ups | Michał Janiec",
			},
			description: {
				pl: "Strona na WordPressie działa wolno, ma błędy albo potrzebuje nowych sekcji? Naprawiam, przyspieszam i rozwijam ją bez przepisywania od zera. 90–150 zł/h netto.",
				en: "Is your WordPress site slow, broken or missing sections? I fix it, speed it up and extend it without rebuilding from scratch. 90–150 PLN/h net.",
			},
		},
	},
	{
		id: "web-apps",
		slug: { pl: "aplikacje-react", en: "react-web-apps" },
		order: 5,
		title: { pl: "Aplikacje webowe", en: "Web applications" },
		summary: {
			pl: "Panele, SaaS i MVP. Od makiety w Figmie do działającego produktu z testami.",
			en: "Dashboards, SaaS and MVPs. From a Figma mock-up to a working, tested product.",
		},
		intro: {
			pl: "Buduję interfejsy aplikacji w React i Next.js: panele klienta, SaaS, MVP dla startupów. Z TypeScriptem, testami i architekturą, która nie rozsypie się po pół roku.",
			en: "I build app interfaces in React and Next.js: client portals, SaaS, startup MVPs. With TypeScript, tests and an architecture that still holds up six months later.",
		},
		tags: ["React", "TypeScript", "Next.js"],
		priceFrom: { pl: "120 zł/h", en: "120 PLN/h" },
		timeline: { pl: "zależnie od zakresu", en: "depends on scope" },
		included: [
			{
				title: { pl: "Interfejs od makiety", en: "From mock-up to interface" },
				description: {
					pl: "Od projektu w Figmie do działających ekranów w React i Next.js, z TypeScriptem.",
					en: "From a Figma design to working screens in React and Next.js, with TypeScript.",
				},
			},
			{
				title: { pl: "Modernizacja bez przepisywania", en: "Modernising without a rewrite" },
				description: {
					pl: "Porządkuję starszy kod krok po kroku, bez zatrzymywania produktu. Tak pracuję przy jemWszkole.pl.",
					en: "I clean up older code step by step, without stopping the product. That's how I work on jemWszkole.pl.",
				},
			},
			{
				title: { pl: "Integracje z API", en: "API integrations" },
				description: {
					pl: "REST i GraphQL, logowanie i zewnętrzne usługi.",
					en: "REST and GraphQL, login and third-party services.",
				},
			},
			{
				title: { pl: "Testy i jakość", en: "Tests and quality" },
				description: {
					pl: "Testy z Jest i Testing Library, przegląd kodu i dokumentacja.",
					en: "Tests with Jest and Testing Library, code review and documentation.",
				},
			},
		],
		plans: [],
		faq: [
			{
				id: "apps-faq-1",
				question: { pl: "Ile kosztuje aplikacja webowa?", en: "How much does a web app cost?" },
				answer: {
					pl: "Rozliczam się godzinowo, 120 zł/h netto. Po krótkim briefie szacuję zakres i liczbę godzin, a większy projekt dzielimy na etapy.",
					en: "I bill by the hour, 120 PLN/h net. After a short brief I estimate the scope and hours, and we split a larger project into stages.",
				},
			},
			{
				id: "apps-faq-2",
				question: {
					pl: "Czy dołączysz do istniejącego projektu?",
					en: "Can you join an existing project?",
				},
				answer: {
					pl: "Tak. Mogę przejąć frontend istniejącej aplikacji albo dołączyć do zespołu na część etatu lub ustaloną liczbę godzin w tygodniu.",
					en: "Yes. I can take over the frontend of an existing app or join your team part-time or for an agreed number of hours a week.",
				},
			},
			{
				id: "apps-faq-3",
				question: { pl: "Robisz też backend?", en: "Do you do the backend too?" },
				answer: {
					pl: "Moja specjalność to frontend: React, Next.js, TypeScript. Dobrze współpracuję z backendem przez REST i GraphQL oraz w aplikacjach Ruby on Rails. Przy rozbudowanym backendzie mówię wprost, czego potrzebujesz od zespołu backendowego.",
					en: "My specialty is the frontend: React, Next.js, TypeScript. I work well with backends over REST and GraphQL and inside Ruby on Rails apps. For a complex backend I tell you plainly what you need from a backend team.",
				},
			},
			{
				id: "apps-faq-4",
				question: { pl: "Czy robisz aplikacje mobilne?", en: "Do you build mobile apps?" },
				answer: {
					pl: "Współtworzę aplikację mobilną w React Native i Expo (Gainflow), więc znam ten ekosystem. Projekty mobilne omawiam indywidualnie.",
					en: "I co-build a mobile app in React Native and Expo (Gainflow), so I know the ecosystem. Mobile projects are discussed individually.",
				},
			},
		],
		seo: {
			title: {
				pl: "Aplikacje webowe na zamówienie | Michał Janiec",
				en: "Custom web applications | Michał Janiec",
			},
			description: {
				pl: "Potrzebujesz panelu, SaaS albo MVP? Prowadzę projekt od makiety w Figmie do działającej aplikacji w React i Next.js, z testami. Wycena po krótkim briefie.",
				en: "Need a dashboard, a SaaS or an MVP? I take it from a Figma mockup to a working React and Next.js app, with tests. A quote after a short brief.",
			},
		},
	},
	{
		id: "frontend-for-rails-teams",
		slug: { pl: "frontend-dla-zespolow-rails", en: "frontend-for-rails-teams" },
		order: 6,
		title: { pl: "Frontend dla zespołów Rails", en: "Frontend for Rails teams" },
		summary: {
			pl: "Stimulus, Hotwire, ERB i Tailwind. Dołączam do zespołu i dowożę interfejs, na co dzień robię to w Visuality.",
			en: "Stimulus, Hotwire, ERB and Tailwind. I join your team and ship the UI. It's what I do daily at Visuality.",
		},
		intro: {
			pl: "Twój zespół Rails potrzebuje kogoś od interfejsu? Piszę widoki ERB, kontrolery Stimulus i Tailwind, rozumiem kod Rails i dogaduję się z backendem. Mogę dołączyć do zespołu na część etatu albo na ustaloną liczbę godzin w tygodniu.",
			en: "Your Rails team needs someone for the UI? I write ERB views, Stimulus controllers and Tailwind, read Rails code and work well with backend developers. I can join part-time or for an agreed number of hours a week.",
		},
		tags: ["Rails", "Stimulus", "Tailwind"],
		priceFrom: { pl: "120 zł/h", en: "120 PLN/h" },
		timeline: { pl: "start do ustalenia", en: "start date by agreement" },
		included: [
			{
				title: { pl: "Widoki ERB i Tailwind", en: "ERB views and Tailwind" },
				description: {
					pl: "Interfejs zgodny z projektem, bez osobnej aplikacji frontendowej.",
					en: "An interface that matches the design, without a separate frontend app.",
				},
			},
			{
				title: { pl: "Stimulus i Hotwire", en: "Stimulus and Hotwire" },
				description: {
					pl: "Interaktywność bez ciężkiego frontendu: kontrolery Stimulus i Turbo.",
					en: "Interactivity without a heavy frontend: Stimulus controllers and Turbo.",
				},
			},
			{
				title: { pl: "Współpraca z backendem", en: "Working with the backend" },
				description: {
					pl: "Czytam kod Rails i rozumiem kontrolery oraz modele, więc nie czekam na backend przy każdej zmianie widoku.",
					en: "I read Rails code and understand controllers and models, so I don't wait on the backend for every view change.",
				},
			},
			{
				title: { pl: "Na część etatu", en: "Part-time" },
				description: {
					pl: "Stała liczba godzin w tygodniu albo część etatu, 120 zł/h netto, faktura VAT.",
					en: "A fixed number of hours a week or part-time, 120 PLN/h net, VAT invoice.",
				},
			},
		],
		plans: [],
		faq: [
			{
				id: "rails-faq-1",
				question: { pl: "Jakie masz doświadczenie z Rails?", en: "What's your Rails experience?" },
				answer: {
					pl: "Na co dzień, jako Senior Frontend Developer w Visuality, przebudowuję interfejs dużej aplikacji enterprise w Rails: ERB, Stimulus i Tailwind, w międzynarodowym zespole.",
					en: "Day to day, as a Senior Frontend Developer at Visuality, I redesign the interface of a large enterprise Rails application: ERB, Stimulus and Tailwind, in an international team.",
				},
			},
			{
				id: "rails-faq-2",
				question: { pl: "Jak wygląda współpraca?", en: "How does it work?" },
				answer: {
					pl: "Dołączam do zespołu na część etatu albo na ustaloną liczbę godzin w tygodniu. Pracuję w Waszych narzędziach: repozytorium, zadania, code review.",
					en: "I join your team part-time or for an agreed number of hours a week. I work in your tools: repository, tickets, code review.",
				},
			},
			{
				id: "rails-faq-3",
				question: { pl: "Ile to kosztuje?", en: "What does it cost?" },
				answer: {
					pl: "120 zł/h netto, rozliczenie B2B z fakturą VAT.",
					en: "120 PLN/h net, billed B2B with a VAT invoice.",
				},
			},
			{
				id: "rails-faq-4",
				question: { pl: "Czy znasz też React?", en: "Do you know React too?" },
				answer: {
					pl: "Tak. React i Next.js to mój główny stack od ponad 5 lat, więc pomogę też, gdy część aplikacji jest w React.",
					en: "Yes. React and Next.js have been my main stack for over 5 years, so I can also help when part of the app is in React.",
				},
			},
		],
		seo: {
			title: {
				pl: "Frontend developer Ruby on Rails i Hotwire | Michał Janiec",
				en: "Ruby on Rails and Hotwire frontend developer | Michał Janiec",
			},
			description: {
				pl: "Brakuje frontendowca w zespole Rails? Dołączam z doświadczeniem w Stimulus, Hotwire, ERB i Tailwind i dowożę interfejs. B2B, faktura VAT.",
				en: "Short of a frontend developer on your Rails team? I join with Stimulus, Hotwire, ERB and Tailwind experience and ship the interface. B2B, VAT invoice.",
			},
		},
	},
	{
		id: "speed-seo-audit",
		slug: { pl: "audyt-szybkosci-seo", en: "speed-seo-audit" },
		order: 3,
		title: { pl: "Audyt szybkości i SEO", en: "Speed and SEO audit" },
		summary: {
			pl: "Sprawdzam, co spowalnia stronę i co przeszkadza jej w Google. Raport z priorytetami plus poprawki.",
			en: "I find what slows your site down and what holds it back on Google. A prioritised report, plus the fixes.",
		},
		intro: {
			pl: "Mierzę Core Web Vitals, sprawdzam SEO techniczne i dostępność. Dostajesz raport PDF z listą poprawek od najważniejszych, a na krótkiej rozmowie omawiam wyniki i wyceniam potrzebne prace. Poprawki mogę też wdrożyć.",
			en: "I measure Core Web Vitals, check technical SEO and accessibility. You get a PDF report with a list of fixes, most important first, and on a short call I walk you through the results and quote the work needed. I can implement the fixes too.",
		},
		tags: ["Lighthouse", "CWV", "SEO"],
		priceFrom: { pl: "od 900 zł", en: "from 900 PLN" },
		timeline: { pl: "3–5 dni", en: "3–5 days" },
		included: [
			{
				title: { pl: "Core Web Vitals", en: "Core Web Vitals" },
				description: {
					pl: "Pomiar LCP, INP i CLS na telefonie i komputerze, w PageSpeed Insights i Lighthouse.",
					en: "LCP, INP and CLS measured on mobile and desktop, in PageSpeed Insights and Lighthouse.",
				},
			},
			{
				title: { pl: "SEO techniczne", en: "Technical SEO" },
				description: {
					pl: "Indeksowanie, metadane, mapa strony, dane strukturalne, przekierowania i linkowanie wewnętrzne.",
					en: "Indexing, metadata, sitemap, structured data, redirects and internal links.",
				},
			},
			{
				title: { pl: "Dostępność", en: "Accessibility" },
				description: {
					pl: "Kontrast, nagłówki, formularze i obsługa z klawiatury.",
					en: "Contrast, headings, forms and keyboard use.",
				},
			},
			{
				title: { pl: "Raport i rozmowa", en: "Report and call" },
				description: {
					pl: "Raport PDF z poprawkami od najważniejszych i rozmowa, na której wyceniam potrzebne prace.",
					en: "A PDF report with fixes, most important first, and a call where I quote the work needed.",
				},
			},
		],
		plans: [],
		faq: [
			{
				id: "audit-faq-1",
				question: { pl: "Ile kosztuje audyt strony?", en: "How much does the audit cost?" },
				answer: {
					pl: "Od 900 zł netto. Dokładną kwotę podaję po zobaczeniu adresu strony.",
					en: "From 900 PLN net. I give you the exact amount after seeing the site address.",
				},
			},
			{
				id: "audit-faq-2",
				question: { pl: "Ile trwa audyt?", en: "How long does it take?" },
				answer: {
					pl: "3–5 dni od otrzymania adresu strony i, jeśli je masz, dostępu do Google Search Console.",
					en: "3–5 days from receiving the site address and, if you have it, Google Search Console access.",
				},
			},
			{
				id: "audit-faq-3",
				question: { pl: "Co dostanę po audycie?", en: "What do I get?" },
				answer: {
					pl: "Raport PDF z listą poprawek uporządkowaną od najważniejszych oraz rozmowę, na której omawiam wyniki i wyceniam prace.",
					en: "A PDF report with a list of fixes ordered by importance, and a call where I walk you through the results and quote the work.",
				},
			},
			{
				id: "audit-faq-4",
				question: { pl: "Czy wdrożysz poprawki?", en: "Can you implement the fixes?" },
				answer: {
					pl: "Tak. Poprawki mogę wdrożyć sam, w Next.js, WordPressie albo Shopify. Wyceniam je po audycie.",
					en: "Yes. I can implement the fixes myself, in Next.js, WordPress or Shopify. I quote them after the audit.",
				},
			},
			{
				id: "audit-faq-5",
				question: {
					pl: "Czym audyt różni się od usługi SEO i Google Ads?",
					en: "How is this different from SEO and Google Ads?",
				},
				answer: {
					pl: "Audyt to jednorazowe sprawdzenie strony od strony technicznej. Stałe pozycjonowanie i kampanie reklamowe to osobna, ciągła usługa.",
					en: "The audit is a one-off technical check of the site. Ongoing SEO and ad campaigns are a separate, continuous service.",
				},
			},
		],
		seo: {
			title: {
				pl: "Audyt szybkości strony i SEO od 900 zł | Michał Janiec",
				en: "Website speed and SEO audit from 900 PLN | Michał Janiec",
			},
			description: {
				pl: "Strona wolno się ładuje albo nie widać jej w Google? Sprawdzam, co ją blokuje, i daję raport z priorytetami, a poprawki mogę wdrożyć sam. Od 900 zł netto.",
				en: "Is your site slow or hard to find on Google? I find what holds it back, give you a prioritised report and can ship the fixes myself. From 900 PLN net.",
			},
		},
	},
	{
		id: "seo-sem",
		slug: { pl: "seo-i-google-ads", en: "seo-and-google-ads" },
		order: 7,
		title: { pl: "SEO i Google Ads", en: "SEO and Google Ads" },
		summary: {
			pl: "Lepsza widoczność w Google i efekty, które możesz zmierzyć: pozycjonowanie, kampanie reklamowe i analityka, które działają razem ze stroną.",
			en: "Better visibility on Google, with results you can measure: SEO, ad campaigns and analytics that work together with your website.",
		},
		intro: {
			pl: "Dobra strona to połowa sukcesu, druga połowa to ruch. Pozycjonowanie i kampanie Google Ads prowadzę razem ze sprawdzonym zespołem specjalistów od marketingu. Ty masz jeden kontakt, a strona, SEO i reklamy grają do jednej bramki: więcej zapytań i sprzedaży.",
			en: "A good website is half the job, the other half is traffic. I run SEO and Google Ads together with a trusted team of marketing specialists. You have one point of contact, and the site, SEO and ads all pull in one direction: more enquiries and sales.",
		},
		tags: ["SEO", "Google Ads", "GA4"],
		priceFrom: { pl: "bezpłatna wycena", en: "free quote" },
		timeline: { pl: "stała współpraca", en: "ongoing" },
		included: [
			{
				title: { pl: "Pozycjonowanie (SEO)", en: "Search engine optimisation" },
				description: {
					pl: "Analiza fraz i konkurencji, audyt strony, optymalizacja treści, plan publikacji i link building. Cel: stały ruch z Google bez płacenia za każde kliknięcie.",
					en: "Keyword and competitor research, a site audit, content optimisation, a publishing plan and link building. The goal: steady traffic from Google without paying for every click.",
				},
			},
			{
				title: { pl: "Widoczność w odpowiedziach AI", en: "Visibility in AI answers" },
				description: {
					pl: "Treści i dane strukturalne przygotowane tak, żeby Twoja firma pojawiała się też w odpowiedziach ChatGPT, Gemini i Google AI Overviews.",
					en: "Content and structured data prepared so your business also shows up in ChatGPT, Gemini and Google AI Overviews answers.",
				},
			},
			{
				title: { pl: "Kampanie Google Ads", en: "Google Ads campaigns" },
				description: {
					pl: "Kampanie w wyszukiwarce i sieci reklamowej: struktura, słowa kluczowe, teksty reklam i budżet przesuwany tam, gdzie daje najwięcej zapytań.",
					en: "Search and display campaigns: structure, keywords, ad copy and a budget moved to wherever it brings the most enquiries.",
				},
			},
			{
				title: { pl: "Kampanie dla sklepów", en: "Campaigns for online stores" },
				description: {
					pl: "Google Shopping, remarketing dynamiczny i przypomnienia o porzuconym koszyku. Dobrze łączą się ze sklepem na Shopify.",
					en: "Google Shopping, dynamic remarketing and abandoned-cart reminders. A natural fit for a Shopify store.",
				},
			},
			{
				title: { pl: "Analityka i mierzenie wyników", en: "Analytics and measurement" },
				description: {
					pl: "Wdrożenie GA4 i śledzenia konwersji, czytelny raport co miesiąc. Widzisz, ile kosztuje zapytanie i które działania na siebie zarabiają.",
					en: "GA4 and conversion tracking, a clear monthly report. You see what an enquiry costs and which activities pay for themselves.",
				},
			},
			{
				title: { pl: "Strona gotowa na ruch", en: "A site ready for traffic" },
				description: {
					pl: "Szybkość, SEO techniczne i strony docelowe pod kampanie robię sam, więc poprawki na stronie nie czekają w kolejce u innej firmy.",
					en: "I handle speed, technical SEO and campaign landing pages myself, so changes to the site don't wait in another company's queue.",
				},
			},
		],
		plans: [],
		faq: [
			{
				id: "seo-sem-faq-1",
				question: {
					pl: "Kiedy SEO zacznie przynosić efekty?",
					en: "When will SEO start to pay off?",
				},
				answer: {
					pl: "SEO to gra długoterminowa. Pierwsze wzrosty widać zwykle po kilku miesiącach, a stabilną pozycję buduje się przez rok i dłużej, zależnie od konkurencji w branży. Jeśli klienci są potrzebni od razu, na start łączymy SEO z kampanią Google Ads.",
					en: "SEO is a long game. The first gains usually show after a few months, and a stable position takes a year or more, depending on the competition in your industry. If you need customers right away, we start with a Google Ads campaign alongside SEO.",
				},
			},
			{
				id: "seo-sem-faq-2",
				question: { pl: "SEO czy Google Ads: co wybrać?", en: "SEO or Google Ads: which one?" },
				answer: {
					pl: "Reklamy dają ruch od pierwszego dnia, ale płacisz za każde kliknięcie. SEO buduje ruch, który zostaje, ale wymaga czasu. Najlepiej działają razem: reklamy przynoszą klientów teraz i pokazują, które frazy sprzedają, a SEO z czasem obniża koszt pozyskania klienta.",
					en: "Ads bring traffic from day one, but you pay for every click. SEO builds traffic that stays, but it takes time. They work best together: ads bring customers now and show which phrases sell, while SEO lowers the cost per customer over time.",
				},
			},
			{
				id: "seo-sem-faq-3",
				question: { pl: "Ile to kosztuje?", en: "How much does it cost?" },
				answer: {
					pl: "Składają się na to dwie rzeczy: budżet reklamowy, który płacisz bezpośrednio Google, oraz wynagrodzenie za prowadzenie działań. Wycenę przygotowuję po krótkiej rozmowie o celach, branży i budżecie. Prace przy stronie rozliczam osobno, według cennika.",
					en: "There are two parts: the ad budget, which you pay directly to Google, and the fee for running the work. I prepare a quote after a short conversation about your goals, industry and budget. Work on the website is billed separately, as in the price list.",
				},
			},
			{
				id: "seo-sem-faq-4",
				question: {
					pl: "Czy gwarantujesz pierwsze miejsce w Google?",
					en: "Do you guarantee the top spot on Google?",
				},
				answer: {
					pl: "Nie, i warto uważać na każdego, kto to obiecuje. O pozycjach decydują algorytmy Google i konkurencja. Obiecuję za to przejrzystą pracę, mierzalne cele i co miesiąc jasną informację, co działa, a co zmieniamy.",
					en: "No, and be careful with anyone who promises that. Rankings depend on Google's algorithms and your competitors. What I do promise is transparent work, measurable goals and a clear monthly update on what works and what we're changing.",
				},
			},
			{
				id: "seo-sem-faq-5",
				question: {
					pl: "Czy będę mieć dostęp do kont reklamowych i raportów?",
					en: "Will I have access to the ad accounts and reports?",
				},
				answer: {
					pl: "Tak. Konta Google Ads, Google Analytics i Search Console są zakładane na Ciebie, a Ty masz do nich pełny dostęp. Co miesiąc dostajesz raport z wynikami i rekomendacjami.",
					en: "Yes. The Google Ads, Google Analytics and Search Console accounts are set up in your name, with full access for you. Every month you get a report with results and recommendations.",
				},
			},
			{
				id: "seo-sem-faq-6",
				question: { pl: "Jakie wskaźniki będziemy śledzić?", en: "Which numbers will we track?" },
				answer: {
					pl: "Te, które przekładają się na pieniądze: liczbę i jakość zapytań, koszt pozyskania zapytania (CPL) lub klienta (CPA), a w sklepach zwrot z wydatków na reklamę (ROAS). Ruch i pozycje są ważne, ale to tylko środek do celu.",
					en: "The ones that turn into money: the number and quality of enquiries, cost per lead (CPL) or per customer (CPA), and for online stores the return on ad spend (ROAS). Traffic and rankings matter, but only as a means to an end.",
				},
			},
			{
				id: "seo-sem-faq-7",
				question: { pl: "Jak wygląda start współpracy?", en: "How does it start?" },
				answer: {
					pl: "Najpierw rozmowa o celach i budżecie, potem audyt strony i kont. Następnie wdrażamy analitykę i śledzenie konwersji, uruchamiamy kampanie na małym budżecie, a po pierwszych danych skalujemy to, co działa. Całość zajmuje zwykle kilka tygodni.",
					en: "First a conversation about goals and budget, then an audit of the site and accounts. Next we set up analytics and conversion tracking, launch campaigns on a small budget, and once the first data comes in, scale what works. It usually takes a few weeks.",
				},
			},
			{
				id: "seo-sem-faq-8",
				question: { pl: "Co przygotować przed startem?", en: "What should I prepare?" },
				answer: {
					pl: "Krótki opis firmy i klientów, listę głównych konkurentów oraz dostępy do strony, Google Analytics, Search Console i kont reklamowych, jeśli już je masz. Resztę ustalimy w trakcie rozmowy.",
					en: "A short description of your business and customers, a list of your main competitors, and access to your website, Google Analytics, Search Console and ad accounts if you already have them. We'll sort out the rest in our conversation.",
				},
			},
			{
				id: "seo-sem-faq-9",
				question: {
					pl: "Czy muszę mieć stronę zrobioną przez Ciebie?",
					en: "Does my site have to be built by you?",
				},
				answer: {
					pl: "Nie. Jeśli masz stronę, zaczynamy od audytu i poprawek technicznych, które blokują wyniki, a potem zajmujemy się SEO i kampaniami.",
					en: "No. If you already have a site, we start with an audit and the technical fixes holding back results, then move on to SEO and campaigns.",
				},
			},
			{
				id: "seo-sem-faq-10",
				question: { pl: "Czy mogę zakończyć współpracę?", en: "Can I end the cooperation?" },
				answer: {
					pl: "Tak, z okresem wypowiedzenia ustalonym w umowie. Konta i dane zostają u Ciebie, a historię kampanii i wnioski przekazuję w uporządkowanej formie, także nowemu partnerowi.",
					en: "Yes, with the notice period agreed in the contract. The accounts and data stay with you, and I hand over the campaign history and findings in an orderly form, also to a new partner.",
				},
			},
		],
		seo: {
			title: {
				pl: "SEO i Google Ads dla firm | Michał Janiec",
				en: "SEO and Google Ads for businesses | Michał Janiec",
			},
			description: {
				pl: "Pozycjonowanie, kampanie Google Ads i analityka GA4 dla małych i średnich firm. Jeden kontakt od strony po reklamy. Bezpłatna wycena.",
				en: "SEO, Google Ads campaigns and GA4 analytics for small and medium businesses. One contact from the website to the ads. Free quote.",
			},
		},
	},
];
