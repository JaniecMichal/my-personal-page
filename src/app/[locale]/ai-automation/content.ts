import type { FaqItem, Localized } from "@/content/types";

/*
 * MVP: page-local copy instead of messages / the content layer, so the page can change fast while the
 * offer is being shaped. If it stays, move it to a content type (CLAUDE.md "new content type").
 * `[CENA]` / `[PRICE]` are placeholders: the page is noindex until Michał confirms them
 * (.ai/search-growth-plan.md, facts AI-F1–F9).
 */

type Item = { title: string; body: string };

export type AiPageCopy = {
	meta: { title: string; description: string };
	breadcrumb: string;
	hero: {
		kicker: string;
		title: string;
		lead: string;
		primaryCta: string;
		secondaryCta: string;
		note: string;
	};
	flow: { label: string; caption: string; steps: { title: string; detail: string }[] };
	pains: { index: string; title: string; items: Item[] };
	useCases: {
		index: string;
		title: string;
		lead: string;
		labels: { today: string; after: string; human: string };
		items: {
			id: string;
			title: string;
			tags: string[];
			today: string;
			after: string;
			human: string;
		}[];
	};
	industries: { index: string; title: string; items: { name: string; examples: string[] }[] };
	calculator: {
		index: string;
		title: string;
		lead: string;
		hours: string;
		people: string;
		rate: string;
		share: string;
		perMonth: string;
		hoursUnit: string;
		perYear: string;
		note: string;
	};
	process: { index: string; title: string; steps: (Item & { meta: string })[] };
	safety: { index: string; title: string; lead: string; items: Item[] };
	pricing: {
		index: string;
		title: string;
		lead: string;
		items: { name: string; price: string; body: string }[];
		note: string;
		cta: string;
	};
	why: {
		index: string;
		title: string;
		body: string[];
		facts: string[];
		stats: { since: string; years: string; projects: string; contributions: string };
		heatmap: string;
		github: string;
	};
	faq: { index: string; title: string; items: FaqItem[] };
	final: { title: string; lead: string; cta: string };
};

export const aiPage: Localized<AiPageCopy> = {
	pl: {
		meta: {
			title: "Automatyzacja AI dla firm — Katowice i Śląsk | Michał Janiec",
			description:
				"Faktury z KSeF, maile z zapytaniami, oferty i asystent na stronie. Automatyzuję powtarzalną pracę w małych firmach z Katowic i Śląska. Zaczynamy od jednego procesu.",
		},
		breadcrumb: "Automatyzacja AI",
		hero: {
			kicker: "Automatyzacja AI · Katowice · Śląsk",
			title: "Automatyzacja AI dla firm z Katowic i Śląska.",
			lead: "Przepisywanie faktur, odpowiadanie na te same maile, ręczne oferty. Buduję automatyzacje, które robią to za Twój zespół, a człowiek tylko zatwierdza. Zaczynamy od jednego procesu i mierzymy, ile godzin wraca.",
			primaryCta: "Pokaż mi, gdzie tracę czas",
			secondaryCta: "Policz oszczędność",
			note: "Rozmowa trwa 30 minut i do niczego nie zobowiązuje.",
		},
		flow: {
			label: "Przykład: faktura kosztowa",
			caption: "Tak wygląda jeden zautomatyzowany proces. AI robi przepisywanie, Ty decydujesz.",
			steps: [
				{ title: "Faktura w KSeF", detail: "pobierana automatycznie" },
				{ title: "AI ją opisuje", detail: "kategoria, zamówienie, płatność" },
				{ title: "Ty zatwierdzasz", detail: "jedno kliknięcie albo poprawka" },
				{ title: "Księgowość", detail: "dane trafiają tam, gdzie trzeba" },
			],
		},
		pains: {
			index: "01 — Problem",
			title: "Gdzie ucieka czas",
			items: [
				{
					title: "„Ktoś cały dzień przepisuje dokumenty”",
					body: "Faktury, zamówienia z maila, dane z PDF do arkusza. Praca, której nikt nie lubi i w której łatwo o literówkę.",
				},
				{
					title: "„Na te same pytania odpowiadamy po sto razy”",
					body: "Cennik, terminy, godziny otwarcia, status zamówienia. Telefon i skrzynka zajmują ludzi, którzy mają ważniejszą pracę.",
				},
				{
					title: "„Oferta powstaje pół dnia”",
					body: "Zapytanie przychodzi rano, oferta wychodzi wieczorem albo jutro. Klient w tym czasie pyta konkurencję.",
				},
				{
					title: "„Wiedza siedzi w głowie jednej osoby”",
					body: "Procedury, ustalenia z klientami, instrukcje. Gdy ta osoba jest na urlopie, wszystko staje.",
				},
			],
		},
		useCases: {
			index: "02 — Co automatyzuję",
			title: "Sześć procesów na start",
			lead: "Każdy przykład działa tak samo: AI wykonuje powtarzalną część, a decyzje, które coś kosztują albo wychodzą do klienta, zostają przy człowieku.",
			labels: { today: "Dziś", after: "Po automatyzacji", human: "Człowiek decyduje o" },
			items: [
				{
					id: "invoices",
					title: "Faktury kosztowe z KSeF",
					tags: ["KSeF", "Księgowość"],
					today: "Ktoś pobiera faktury, opisuje je, szuka zamówienia i przesyła do księgowej.",
					after:
						"Faktury pobierają się same, AI proponuje kategorię i opis, dopasowuje je do zamówień i płatności, przypomina o terminach.",
					human: "akceptacji kosztu i nietypowych fakturach.",
				},
				{
					id: "inbox",
					title: "Zapytania i maile",
					tags: ["Skrzynka", "CRM"],
					today: "Zapytania giną między skrzynkami, odpowiedź wychodzi po kilku godzinach.",
					after:
						"AI rozpoznaje temat, przypisuje osobę, wpisuje kontakt do CRM lub arkusza i przygotowuje szkic odpowiedzi.",
					human: "wysłaniu odpowiedzi.",
				},
				{
					id: "assistant",
					title: "Asystent na stronie",
					tags: ["Strona", "Obsługa klienta"],
					today: "Po godzinach nikt nie odpowiada, a w dzień telefon przerywa pracę.",
					after:
						"Asystent odpowiada z Twojego cennika i FAQ, zbiera kontakt i przekazuje sprawę człowiekowi. Od pierwszej wiadomości mówi, że jest AI.",
					human: "wszystkim, czego asystent nie wie.",
				},
				{
					id: "quotes",
					title: "Oferty z cennika",
					tags: ["Sprzedaż"],
					today: "Handlowiec składa ofertę ręcznie z cennika, poprzednich maili i Excela.",
					after:
						"Z zapytania powstaje gotowy szkic oferty: pozycje, ceny, warunki, w Twoim szablonie.",
					human: "rabatach i wysłaniu oferty.",
				},
				{
					id: "knowledge",
					title: "Wiedza firmy",
					tags: ["Zespół", "Dokumenty"],
					today: "Nowa osoba pyta o wszystko, bo procedury są w dziesięciu plikach.",
					after: "Pracownik pyta zwykłymi słowami, a odpowiedź podaje źródło: dokument i fragment.",
					human: "tym, które dokumenty są aktualne.",
				},
				{
					id: "reports",
					title: "Raporty i podsumowania",
					tags: ["Zarząd"],
					today: "Co tydzień ktoś zbiera liczby z kilku systemów do jednej tabeli.",
					after:
						"W poniedziałek rano raport sam trafia na maila: sprzedaż, zamówienia, zaległe płatności, nietypowe zdarzenia.",
					human: "wnioskach.",
				},
			],
		},
		industries: {
			index: "03 — Branże",
			title: "Przykłady z firm takich jak Twoja",
			items: [
				{
					name: "Biuro rachunkowe",
					examples: [
						"faktury klientów z KSeF opisane i posegregowane",
						"przypomnienia o brakujących dokumentach",
						"odpowiedzi na powtarzalne pytania klientów",
					],
				},
				{
					name: "Gabinet, klinika, salon",
					examples: [
						"asystent na stronie: cennik, dojazd, przygotowanie do wizyty",
						"zapytania z formularza i Instagrama w jednym miejscu",
						"przypomnienia i prośby o opinię po wizycie",
					],
				},
				{
					name: "Warsztat, serwis, usługi",
					examples: [
						"zgłoszenie ze zdjęciem zamienione w wycenę do akceptacji",
						"status zlecenia bez dzwonienia",
						"oferty z cennika części i robocizny",
					],
				},
				{
					name: "Hurtownia, sklep online",
					examples: [
						"zamówienia z maila i PDF wpisane do systemu",
						"opisy produktów w tonie marki, sprawdzane przez człowieka",
						"cotygodniowy raport sprzedaży i stanów",
					],
				},
			],
		},
		calculator: {
			index: "04 — Kalkulator",
			title: "Ile kosztuje Cię ręczna praca",
			lead: "Wpisz, ile czasu zespół poświęca tygodniowo na jedną powtarzalną czynność. To prosty rachunek, a nie obietnica: prawdziwą liczbę mierzymy w pilotażu.",
			hours: "Godziny tygodniowo na osobę",
			people: "Liczba osób",
			rate: "Koszt godziny pracy (zł)",
			share: "Część, którą da się zautomatyzować",
			perMonth: "Do odzyskania miesięcznie",
			hoursUnit: "godz.",
			perYear: "rocznie",
			note: "Liczę 4,33 tygodnia w miesiącu. Koszty wdrożenia i API odejmujemy dopiero przy konkretnym procesie.",
		},
		process: {
			index: "05 — Jak pracujemy",
			title: "Od jednego procesu do całej firmy",
			steps: [
				{
					meta: "30 minut",
					title: "Rozmowa",
					body: "Opowiadasz, co zabiera najwięcej czasu. Mówię wprost, co da się zautomatyzować, a co nie ma sensu.",
				},
				{
					meta: "[CENA]",
					title: "Audyt procesów",
					body: "Lista 3–5 procesów: ile godzin zabierają, ile kosztuje automatyzacja, jakie jest ryzyko i od czego zacząć.",
				},
				{
					meta: "kilka tygodni",
					title: "Pilotaż jednego procesu",
					body: "Budujemy jedną automatyzację z kryteriami odbioru ustalonymi na starcie. Twój zespół testuje ją na prawdziwych danych.",
				},
				{
					meta: "po pilotażu",
					title: "Pomiar i decyzja",
					body: "Porównujemy czas przed i po. Rozwijamy, poprawiamy albo kończymy. Jeśli się nie opłaca, powiem to pierwszy.",
				},
				{
					meta: "co miesiąc",
					title: "Opieka",
					body: "Pilnuję, żeby automatyzacje działały, aktualizuję wiedzę asystenta i dokładam kolejne procesy.",
				},
			],
		},
		safety: {
			index: "06 — Bezpieczeństwo i prawo",
			title: "Twoje dane zostają pod kontrolą",
			lead: "Najczęstsze pytanie brzmi: „co się dzieje z moimi danymi?”. Odpowiedź jest częścią projektu, a nie przypisem.",
			items: [
				{
					title: "Asystent mówi, że jest AI",
					body: "Od 2 sierpnia 2026 r. AI Act (art. 50) wymaga, żeby użytkownik wiedział, że rozmawia z AI. Mój asystent mówi to w pierwszej wiadomości.",
				},
				{
					title: "Umowa powierzenia (RODO)",
					body: "Gdy w procesie są dane osobowe, podpisujemy umowę powierzenia i przekazujemy do AI tylko to, co konieczne.",
				},
				{
					title: "Modele bez uczenia na Twoich danych",
					body: "Korzystam z płatnych API (Anthropic, OpenAI, Google), których warunki komercyjne wykluczają trenowanie modeli na danych klientów. Gdzie się da, dane są przetwarzane w UE.",
				},
				{
					title: "Człowiek zatwierdza",
					body: "Wszystko, co wychodzi do klienta albo dotyczy pieniędzy, przechodzi przez akceptację osoby z Twojej firmy.",
				},
				{
					title: "Logi i wyłącznik",
					body: "Każde działanie automatyzacji jest zapisane. Widzisz, co się stało, i możesz ją zatrzymać jednym przełącznikiem.",
				},
				{
					title: "Wszystko na Ciebie",
					body: "Konta, klucze API, serwer i kod są Twoje, z dokumentacją. Nie uzależniasz się ode mnie.",
				},
			],
		},
		pricing: {
			index: "07 — Ceny",
			title: "Ile to kosztuje",
			lead: "Zaczynasz od małego, odwracalnego kroku. Każdy kolejny ma cenę znaną przed startem.",
			items: [
				{
					name: "Audyt procesów",
					price: "[CENA] zł",
					body: "Rozmowa, analiza i lista procesów z oszczędnością i ryzykiem. [Odliczam od wdrożenia?]",
				},
				{
					name: "Pilotaż jednego procesu",
					price: "od [CENA] zł",
					body: "Jedna automatyzacja z kryteriami odbioru, testy na Twoich danych, dokumentacja.",
				},
				{
					name: "Asystent na stronie",
					price: "od [CENA] zł",
					body: "Odpowiada z Twojego cennika i FAQ, przekazuje sprawy człowiekowi, ma logi rozmów.",
				},
				{
					name: "Opieka",
					price: "od [CENA] zł / mies.",
					body: "Monitoring, poprawki, aktualizacja wiedzy i drobny rozwój.",
				},
			],
			note: "Ceny netto. Koszty API i serwera płacisz bezpośrednio dostawcom, z własnego konta. Przed startem szacuję je dla Twojego procesu.",
			cta: "Zapytaj o wycenę",
		},
		why: {
			index: "08 — Dlaczego developer",
			title: "AI to nie dodatek. To moja codzienna praca.",
			body: [
				"Od 2024 roku pracuję z AI każdego dnia: piszę kod z Claude, buduję serwery MCP i własne narzędzia, które skracają powtarzalną pracę. Z tego samego warsztatu korzystam, budując automatyzacje dla firm.",
				"Większość automatyzacji to klocki w Make lub Zapierze. To dobry start, dopóki proces nie potrzebuje integracji z Twoim systemem, nietypowego dokumentu albo strony, na której klient zostawia dane. Wtedy piszę brakującą część w kodzie.",
				"Strona internetowa, asystent i automatyzacje mogą powstać u jednej osoby, więc nie koordynujesz trzech wykonawców.",
			],
			facts: [
				"Od 2024 r. codziennie pracuję z AI: Claude, serwery MCP, własne narzędzia",
				"Ponad 5 lat w zespołach produktowych: React, Next.js, TypeScript",
				"Integracje z Shopify, WordPressem i aplikacjami Ruby on Rails",
				"Katowice: spotkanie na miejscu w Twojej firmie",
			],
			stats: {
				since: "AI w codziennej pracy od",
				years: "lat w zespołach produktowych",
				projects: "opisanych realizacji",
				contributions: "kontrybucji na GitHubie w 12 miesięcy",
			},
			heatmap: "Aktywność na GitHubie, ostatnie 12 miesięcy (konto prywatne i firmowe)",
			github: "Zobacz GitHub",
		},
		faq: {
			index: "09 — FAQ",
			title: "Pytania",
			items: [
				{
					id: "ai-cost",
					question: "Ile kosztuje automatyzacja AI w małej firmie?",
					answer:
						"Audyt procesów kosztuje [CENA] zł netto, a pilotaż jednego procesu zaczyna się od [CENA] zł netto. Do tego dochodzą koszty API i serwera, które płacisz bezpośrednio dostawcom. Zależą od liczby dokumentów i rozmów, więc szacuję je przed startem.",
				},
				{
					id: "ai-start",
					question: "Od którego procesu zacząć?",
					answer:
						"Od tego, który powtarza się codziennie, ma jasne reguły i zabiera najwięcej godzin. Najczęściej to faktury kosztowe, maile z zapytaniami albo przygotowanie ofert. Audyt wskazuje kolejność.",
				},
				{
					id: "ai-data",
					question: "Czy moje dane są bezpieczne i czy AI się na nich uczy?",
					answer:
						"Korzystam z płatnych API Anthropic, OpenAI i Google, których warunki komercyjne wykluczają trenowanie modeli na danych klientów. Do AI trafia tylko to, co potrzebne, a przy danych osobowych podpisujemy umowę powierzenia.",
				},
				{
					id: "ai-staff",
					question: "Czy AI zastąpi moich pracowników?",
					answer:
						"Nie. Zabiera przepisywanie, kopiowanie i odpowiadanie na te same pytania. Decyzje, kontakt z klientem i nietypowe sprawy zostają przy ludziach, którzy mają na nie więcej czasu.",
				},
				{
					id: "ai-agent",
					question: "Czym różni się agent AI od chatbota?",
					answer:
						"Chatbot odpowiada na pytania. Agent wykonuje kroki w Twoich systemach: odczytuje dokument, wpisuje dane, przygotowuje ofertę. Agent zawsze ma granice i akceptację człowieka przy ważnych decyzjach.",
				},
				{
					id: "ai-tools",
					question: "Make, Zapier, n8n czy własny kod?",
					answer:
						"To zależy od procesu. Proste przepływy szybko składa się w gotowych narzędziach. Gdy potrzebna jest integracja z Twoim systemem, KSeF albo nietypowe dokumenty, piszę tę część w kodzie. Wybór uzasadniam w audycie.",
				},
				{
					id: "ai-mistake",
					question: "Co, jeśli AI się pomyli?",
					answer:
						"Dlatego wszystko, co wychodzi do klienta albo dotyczy pieniędzy, zatwierdza człowiek. Automatyzacja zapisuje każdy krok, sprawy niepewne oznacza do sprawdzenia i można ją zatrzymać jednym przełącznikiem.",
				},
				{
					id: "ai-act",
					question: "Czy muszę informować klientów, że rozmawiają z AI?",
					answer:
						"Tak. Od 2 sierpnia 2026 r. AI Act (art. 50) wymaga poinformowania użytkownika najpóźniej przy pierwszej interakcji. Asystenci, których buduję, robią to w pierwszej wiadomości.",
				},
				{
					id: "ai-ksef",
					question: "Jak automatyzacja działa z KSeF?",
					answer:
						"Faktury w KSeF to ustrukturyzowane pliki, więc nie trzeba ich odczytywać ze skanów. Automatyzacja pobiera faktury kosztowe, AI proponuje kategorię i opis, dopasowuje je do zamówień i płatności, a Ty zatwierdzasz przed przekazaniem do księgowości.",
				},
				{
					id: "ai-onsite",
					question: "Czy przyjedziesz do firmy?",
					answer:
						"Tak. Mieszkam w Katowicach, więc na Śląsku chętnie spotkam się u Ciebie w firmie, a do Krakowa dojadę w razie potrzeby. Resztę pracy da się zrobić zdalnie.",
				},
			],
		},
		final: {
			title: "Jeden proces. Konkretny wynik.",
			lead: "Napisz, co w Twojej firmie powtarza się codziennie. Odpowiem w ciągu 24 godzin z propozycją, od czego zacząć.",
			cta: "Opowiedz o procesie",
		},
	},
	en: {
		meta: {
			title: "AI automation for businesses — Katowice & Silesia | Michał Janiec",
			description:
				"Purchase invoices from KSeF, enquiry emails, quotes and a website assistant. I automate repetitive work for small businesses in Katowice and Silesia, starting with one process.",
		},
		breadcrumb: "AI automation",
		hero: {
			kicker: "AI automation · Katowice · Silesia",
			title: "AI automation for businesses in Katowice and Silesia.",
			lead: "Retyping invoices, answering the same emails, building quotes by hand. I build automations that do it for your team, while a person only approves. We start with one process and measure how many hours come back.",
			primaryCta: "Show me where I lose time",
			secondaryCta: "Estimate the savings",
			note: "The call takes 30 minutes, with no obligation.",
		},
		flow: {
			label: "Example: a purchase invoice",
			caption: "This is one automated process. AI does the retyping, you make the call.",
			steps: [
				{ title: "Invoice in KSeF", detail: "fetched automatically" },
				{ title: "AI describes it", detail: "category, order, payment" },
				{ title: "You approve", detail: "one click or a correction" },
				{ title: "Accounting", detail: "data lands where it should" },
			],
		},
		pains: {
			index: "01 — The problem",
			title: "Where the time goes",
			items: [
				{
					title: "“Someone retypes documents all day”",
					body: "Invoices, orders from email, data from PDFs into a spreadsheet. Work nobody enjoys, and easy to get wrong.",
				},
				{
					title: "“We answer the same questions a hundred times”",
					body: "Prices, lead times, opening hours, order status. The phone and the inbox keep people from more important work.",
				},
				{
					title: "“A quote takes half a day”",
					body: "The enquiry arrives in the morning, the quote goes out in the evening or tomorrow. Meanwhile the client asks your competitor.",
				},
				{
					title: "“The know-how is in one person's head”",
					body: "Procedures, client arrangements, instructions. When that person is on holiday, everything stops.",
				},
			],
		},
		useCases: {
			index: "02 — What I automate",
			title: "Six processes to start with",
			lead: "Every example works the same way: AI does the repetitive part, and decisions that cost money or reach a client stay with a person.",
			labels: { today: "Today", after: "After automation", human: "A person decides on" },
			items: [
				{
					id: "invoices",
					title: "Purchase invoices from KSeF",
					tags: ["KSeF", "Accounting"],
					today:
						"Someone downloads invoices, describes them, finds the order and sends them to the accountant.",
					after:
						"Invoices are fetched automatically, AI suggests a category and description, matches them to orders and payments, and reminds you of due dates.",
					human: "approving the cost and unusual invoices.",
				},
				{
					id: "inbox",
					title: "Enquiries and email",
					tags: ["Inbox", "CRM"],
					today: "Enquiries get lost between inboxes, replies go out hours later.",
					after:
						"AI recognises the topic, assigns a person, adds the contact to your CRM or sheet and drafts a reply.",
					human: "sending the reply.",
				},
				{
					id: "assistant",
					title: "Website assistant",
					tags: ["Website", "Customer service"],
					today: "Nobody answers after hours, and during the day the phone interrupts work.",
					after:
						"The assistant answers from your price list and FAQ, collects contact details and hands over to a person. It says it is AI from the first message.",
					human: "everything the assistant doesn't know.",
				},
				{
					id: "quotes",
					title: "Quotes from your price list",
					tags: ["Sales"],
					today:
						"A salesperson builds the quote by hand from the price list, old emails and Excel.",
					after: "An enquiry becomes a ready draft quote: items, prices, terms, in your template.",
					human: "discounts and sending the quote.",
				},
				{
					id: "knowledge",
					title: "Company knowledge",
					tags: ["Team", "Documents"],
					today: "New people ask about everything, because procedures live in ten files.",
					after:
						"Staff ask in plain words, and the answer cites its source: the document and the passage.",
					human: "which documents are current.",
				},
				{
					id: "reports",
					title: "Reports and summaries",
					tags: ["Management"],
					today: "Every week someone collects numbers from several systems into one table.",
					after:
						"On Monday morning the report arrives by email: sales, orders, overdue payments, unusual events.",
					human: "the conclusions.",
				},
			],
		},
		industries: {
			index: "03 — Industries",
			title: "Examples from businesses like yours",
			items: [
				{
					name: "Accounting office",
					examples: [
						"client invoices from KSeF described and sorted",
						"reminders about missing documents",
						"answers to clients' repeat questions",
					],
				},
				{
					name: "Clinic, practice, salon",
					examples: [
						"website assistant: prices, directions, how to prepare",
						"enquiries from the form and Instagram in one place",
						"reminders and review requests after the visit",
					],
				},
				{
					name: "Workshop, repair, services",
					examples: [
						"a request with a photo turned into a quote to approve",
						"job status without a phone call",
						"quotes from your parts and labour price list",
					],
				},
				{
					name: "Wholesale, online store",
					examples: [
						"orders from email and PDF entered into your system",
						"product descriptions in your brand's tone, checked by a person",
						"a weekly sales and stock report",
					],
				},
			],
		},
		calculator: {
			index: "04 — Calculator",
			title: "What manual work costs you",
			lead: "Enter how much time your team spends each week on one repetitive task. It's simple arithmetic, not a promise: we measure the real number in the pilot.",
			hours: "Hours per week per person",
			people: "Number of people",
			rate: "Cost of an hour of work (PLN)",
			share: "Share that can be automated",
			perMonth: "Recoverable per month",
			hoursUnit: "h",
			perYear: "per year",
			note: "I count 4.33 weeks a month. Build and API costs are subtracted once we look at a specific process.",
		},
		process: {
			index: "05 — How we work",
			title: "From one process to the whole business",
			steps: [
				{
					meta: "30 minutes",
					title: "A call",
					body: "You tell me what takes the most time. I say plainly what can be automated and what isn't worth it.",
				},
				{
					meta: "[PRICE]",
					title: "Process audit",
					body: "A list of 3–5 processes: hours they take, cost of automating, risk and where to start.",
				},
				{
					meta: "a few weeks",
					title: "Pilot on one process",
					body: "We build one automation with acceptance criteria agreed up front. Your team tests it on real data.",
				},
				{
					meta: "after the pilot",
					title: "Measure and decide",
					body: "We compare time before and after. We expand, adjust or stop. If it doesn't pay off, I'll be the first to say so.",
				},
				{
					meta: "monthly",
					title: "Care",
					body: "I keep the automations running, update the assistant's knowledge and add the next processes.",
				},
			],
		},
		safety: {
			index: "06 — Safety and law",
			title: "Your data stays under control",
			lead: "The most common question is “what happens to my data?”. The answer is part of the project, not a footnote.",
			items: [
				{
					title: "The assistant says it is AI",
					body: "Since 2 August 2026 the AI Act (Art. 50) requires users to know they are talking to AI. My assistants say so in the first message.",
				},
				{
					title: "Data processing agreement (GDPR)",
					body: "When personal data is involved, we sign a processing agreement and send AI only what is necessary.",
				},
				{
					title: "Models that don't learn from your data",
					body: "I use paid APIs (Anthropic, OpenAI, Google) whose commercial terms rule out training models on customer data. Where possible, data is processed in the EU.",
				},
				{
					title: "A person approves",
					body: "Anything that reaches a client or involves money goes through approval by someone in your company.",
				},
				{
					title: "Logs and an off switch",
					body: "Every action is recorded. You see what happened, and you can stop the automation with one switch.",
				},
				{
					title: "Everything in your name",
					body: "Accounts, API keys, server and code are yours, with documentation. You don't depend on me.",
				},
			],
		},
		pricing: {
			index: "07 — Pricing",
			title: "What it costs",
			lead: "You start with a small, reversible step. Each next one has a price you know before we begin.",
			items: [
				{
					name: "Process audit",
					price: "[PRICE] PLN",
					body: "A call, analysis and a list of processes with savings and risk. [Credited against the build?]",
				},
				{
					name: "Pilot on one process",
					price: "from [PRICE] PLN",
					body: "One automation with acceptance criteria, tests on your data, documentation.",
				},
				{
					name: "Website assistant",
					price: "from [PRICE] PLN",
					body: "Answers from your price list and FAQ, hands over to a person, keeps conversation logs.",
				},
				{
					name: "Care",
					price: "from [PRICE] PLN / mo",
					body: "Monitoring, fixes, knowledge updates and small improvements.",
				},
			],
			note: "Prices are net. You pay API and server costs directly to the providers, from your own account. I estimate them for your process before we start.",
			cta: "Ask for a quote",
		},
		why: {
			index: "08 — Why a developer",
			title: "AI isn't an add-on. It's my daily work.",
			body: [
				"Since 2024 I've worked with AI every day: writing code with Claude, building MCP servers and my own tools that cut repetitive work. I use the same toolkit when I build automations for businesses.",
				"Most automations are blocks in Make or Zapier. That's a good start, until the process needs an integration with your system, an unusual document, or a website where clients leave their details. Then I write the missing part in code.",
				"The website, the assistant and the automations can come from one person, so you don't coordinate three contractors.",
			],
			facts: [
				"Working with AI daily since 2024: Claude, MCP servers, my own tooling",
				"5+ years in product teams: React, Next.js, TypeScript",
				"Integrations with Shopify, WordPress and Ruby on Rails apps",
				"Katowice: I can meet you at your office",
			],
			stats: {
				since: "AI in daily work since",
				years: "years in product teams",
				projects: "published case studies",
				contributions: "GitHub contributions in 12 months",
			},
			heatmap: "GitHub activity, last 12 months (personal and company account)",
			github: "View GitHub",
		},
		faq: {
			index: "09 — FAQ",
			title: "Questions",
			items: [
				{
					id: "ai-cost",
					question: "How much does AI automation cost for a small business?",
					answer:
						"A process audit costs [PRICE] PLN net, and a pilot on one process starts at [PRICE] PLN net. On top come API and server costs, which you pay directly to the providers. They depend on the number of documents and conversations, so I estimate them before we start.",
				},
				{
					id: "ai-start",
					question: "Which process should we start with?",
					answer:
						"The one that repeats every day, has clear rules and takes the most hours. Most often that's purchase invoices, enquiry emails or preparing quotes. The audit sets the order.",
				},
				{
					id: "ai-data",
					question: "Is my data safe, and does the AI learn from it?",
					answer:
						"I use the paid APIs of Anthropic, OpenAI and Google, whose commercial terms rule out training models on customer data. AI only gets what it needs, and with personal data we sign a processing agreement.",
				},
				{
					id: "ai-staff",
					question: "Will AI replace my staff?",
					answer:
						"No. It takes away retyping, copying and answering the same questions. Decisions, client contact and unusual cases stay with people, who now have more time for them.",
				},
				{
					id: "ai-agent",
					question: "What's the difference between an AI agent and a chatbot?",
					answer:
						"A chatbot answers questions. An agent carries out steps in your systems: it reads a document, enters data, prepares a quote. An agent always has limits and human approval for important decisions.",
				},
				{
					id: "ai-tools",
					question: "Make, Zapier, n8n or custom code?",
					answer:
						"It depends on the process. Simple flows are quick to build in ready-made tools. When you need an integration with your system, KSeF or unusual documents, I write that part in code. The audit explains the choice.",
				},
				{
					id: "ai-mistake",
					question: "What if the AI makes a mistake?",
					answer:
						"That's why anything that reaches a client or involves money is approved by a person. The automation records every step, flags uncertain cases for review, and can be stopped with one switch.",
				},
				{
					id: "ai-act",
					question: "Do I have to tell clients they're talking to AI?",
					answer:
						"Yes. Since 2 August 2026 the AI Act (Art. 50) requires informing users at the latest at their first interaction. The assistants I build do it in the first message.",
				},
				{
					id: "ai-ksef",
					question: "How does automation work with KSeF?",
					answer:
						"KSeF invoices are structured files, so nothing has to be read from scans. The automation fetches purchase invoices, AI suggests a category and description, matches them to orders and payments, and you approve before they go to accounting.",
				},
				{
					id: "ai-onsite",
					question: "Will you come to our office?",
					answer:
						"Yes. I live in Katowice, so around Silesia I'm happy to meet at your office, and I can travel to Kraków if needed. The rest of the work can be done remotely.",
				},
			],
		},
		final: {
			title: "One process. A concrete result.",
			lead: "Tell me what repeats every day in your business. I'll reply within 24 hours with a suggestion where to start.",
			cta: "Tell me about the process",
		},
	},
};
