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
				pl: "Strona internetowa dla firmy | Michał Janiec",
				en: "Website for your business | Michał Janiec",
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
		title: { pl: "Strony firmowe w Next.js", en: "Business websites in Next.js" },
		summary: {
			pl: "Strony w Next.js, które edytujesz sam. Szybkość i SEO techniczne sprawdzam przed oddaniem projektu.",
			en: "Next.js websites you can edit yourself. I check speed and technical SEO before handover.",
		},
		intro: {
			pl: "Strona firmowa, która szybko się ładuje, dobrze wygląda na telefonie i jest przygotowana technicznie pod SEO. Zbudowana w Next.js, z wygodnym CMS do edycji treści.",
			en: "A business website that loads fast, looks great on phones and is technically ready for SEO. Built in Next.js with a friendly CMS for your content.",
		},
		tags: ["Next.js", "SEO", "CMS"],
		priceFrom: { pl: "od 1 000 zł", en: "from 1,000 PLN" },
		timeline: { pl: "od kilku dni do 3 tygodni", en: "a few days to 3 weeks" },
		support: { pl: "1 runda poprawek albo 30 dni", en: "1 fix round or 30 days" },
		included: [
			{
				title: { pl: "Projekt i wdrożenie", en: "Design to launch" },
				description: {
					pl: "Od makiety w Figmie albo Twoich materiałów do działającej strony na Twojej domenie.",
					en: "From a Figma mock-up or your materials to a live site on your domain.",
				},
			},
			{
				title: { pl: "CMS do edycji", en: "Editable content" },
				description: {
					pl: "Sam zmieniasz teksty, zdjęcia i wpisy, bez dzwonienia do programisty.",
					en: "Change copy, images and posts yourself, without calling a developer.",
				},
			},
			{
				title: { pl: "SEO techniczne", en: "Technical SEO" },
				description: {
					pl: "Metadane, dane strukturalne, mapa strony, hreflang i Search Console.",
					en: "Metadata, structured data, sitemap, hreflang and Search Console.",
				},
			},
			{
				title: { pl: "Szybkość", en: "Speed" },
				description: {
					pl: "Optymalizacja obrazów i fontów, raport Lighthouse przed i po wdrożeniu.",
					en: "Optimised images and fonts, with a Lighthouse report before and after launch.",
				},
			},
		],
		plans: [
			{
				id: "nextjs-landing",
				kicker: { pl: "Na dobry start", en: "Quick start" },
				name: { pl: "Strona-wizytówka", en: "One-page site" },
				price: { pl: "od 1 000 zł", en: "from 1,000 PLN" },
				features: {
					pl: [
						"1 strona, do 6 sekcji",
						"z Twojego projektu graficznego",
						"prosty panel do edycji w cenie",
						"wdrożenie + 1 runda poprawek",
					],
					en: [
						"1 page, up to 6 sections",
						"from your ready design",
						"simple content editor included",
						"launch + 1 round of fixes",
					],
				},
				highlighted: false,
			},
			{
				id: "nextjs-website",
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
				id: "nextjs-care",
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
		faq: [],
		seo: {},
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
		faq: [],
		seo: {
			title: {
				pl: "Sklep internetowy na Shopify | Michał Janiec",
				en: "Shopify store setup | Michał Janiec",
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
		faq: [],
		seo: {
			title: {
				pl: "Naprawa i przyspieszenie WordPress | Michał Janiec",
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
		included: [],
		plans: [],
		faq: [],
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
		included: [],
		plans: [],
		faq: [],
		seo: {
			title: {
				pl: "Frontend developer dla zespołów Rails | Michał Janiec",
				en: "Frontend developer for Rails teams | Michał Janiec",
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
		included: [],
		plans: [],
		faq: [],
		seo: {
			title: {
				pl: "Audyt szybkości strony i SEO | Michał Janiec",
				en: "Website speed and SEO audit | Michał Janiec",
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
