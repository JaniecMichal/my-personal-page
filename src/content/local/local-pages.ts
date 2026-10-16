import type { LocalLocalPage } from "./resolve";

/**
 * One entry per city. Add a city only with content that is genuinely about that place (meetings,
 * local clients, travel time); a copy with the name swapped is a doorway page and hurts the site.
 */
export const localPages: LocalLocalPage[] = [
	{
		id: "katowice",
		slug: { pl: "katowice", en: "katowice" },
		city: "Katowice",
		title: { pl: "Strony internetowe Katowice", en: "Web design in Katowice" },
		intro: {
			pl: "Jestem programistą z Katowic. Robię strony firmowe, sklepy i aplikacje dla firm z Katowic i całego Śląska, najczęściej w Next.js: szybkie, bezpieczne i z panelem do edycji. Możemy spotkać się na kawę przy Rynku albo u Ciebie w firmie, a resztę załatwić zdalnie.",
			en: "I'm a web developer based in Katowice. I build business websites, online stores and web apps for companies in Katowice and across Silesia, most often in Next.js: fast, secure and with a content editor. We can meet for coffee in the city centre or at your office, and handle the rest remotely.",
		},
		points: [
			{
				title: { pl: "Spotkanie na miejscu", en: "Meet in person" },
				description: {
					pl: "Pierwszą rozmowę możemy odbyć twarzą w twarz w Katowicach lub okolicy. Łatwiej wtedy zrozumieć Twój biznes i klientów.",
					en: "Our first conversation can be face to face in Katowice or nearby. It makes it easier to understand your business and customers.",
				},
			},
			{
				title: { pl: "Lokalne SEO", en: "Local SEO" },
				description: {
					pl: "Strona i wizytówka Google ustawione tak, żeby klienci z Twojej dzielnicy i miasta znaleźli Cię, gdy szukają usług w okolicy.",
					en: "The site and your Google Business Profile set up so customers in your district and city find you when they search nearby.",
				},
			},
			{
				title: { pl: "Jedna osoba od początku do końca", en: "One person from start to finish" },
				description: {
					pl: "Bez agencji i pośredników. Rozmawiasz z osobą, która projektuje, pisze kod i zostaje z Tobą po starcie.",
					en: "No agency and no middlemen. You talk to the person who designs, writes the code and stays with you after launch.",
				},
			},
			{
				title: { pl: "Faktura VAT, polskie realia", en: "VAT invoice, local know-how" },
				description: {
					pl: "Prowadzę działalność i wystawiam faktury VAT. Znam polskie wymogi: RODO, politykę prywatności i cookies.",
					en: "I run a registered business and issue VAT invoices. I know the Polish requirements: GDPR, privacy policy and cookies.",
				},
			},
		],
		districts: [
			"Śródmieście",
			"Ligota",
			"Brynów",
			"Załęże",
			"Giszowiec",
			"Nikiszowiec",
			"Kokociniec",
			"Piotrowice",
			"Kostuchna",
			"Podlesie",
			"Zarzecze",
			"Murcki",
			"Bogucice",
			"Koszutka",
			"Dąb",
			"Osiedle Tysiąclecia",
			"Szopienice",
			"Janów",
		],
		nearby: [
			"Chorzów",
			"Siemianowice Śląskie",
			"Sosnowiec",
			"Mysłowice",
			"Ruda Śląska",
			"Mikołów",
			"Tychy",
			"Gliwice",
			"Zabrze",
			"Bytom",
		],
		faq: [
			{
				id: "katowice-faq-1",
				question: {
					pl: "Czy pracujesz tylko z firmami z Katowic?",
					en: "Do you only work with companies in Katowice?",
				},
				answer: {
					pl: "Nie. Mieszkam w Katowicach, więc na Śląsku chętnie spotkam się na miejscu, ale pracuję też zdalnie z firmami z całej Polski, UE i Wielkiej Brytanii.",
					en: "No. I live in Katowice, so I'm happy to meet in person around Silesia, but I also work remotely with companies across Poland, the EU and the UK.",
				},
			},
			{
				id: "katowice-faq-2",
				question: {
					pl: "Ile kosztuje strona internetowa w Katowicach?",
					en: "How much does a website cost in Katowice?",
				},
				answer: {
					pl: "Prosta strona-wizytówka zaczyna się od 1 000 zł netto, strona firmowa z panelem do edycji od 2 900 zł netto. Dokładną wycenę dostajesz w 2–3 dni robocze od wysłania briefu.",
					en: "A simple one-page site starts at 1,000 PLN net, a business website with an editor at 2,900 PLN net. You get an exact quote within 2–3 working days of sending the brief.",
				},
			},
			{
				id: "katowice-faq-3",
				question: {
					pl: "Pomożesz z wizytówką Google?",
					en: "Can you help with my Google Business Profile?",
				},
				answer: {
					pl: "Tak. Przy stronie firmowej konfiguruję wizytówkę lub ją porządkuję, łączę ją ze stroną i dbam o spójne dane firmy w obu miejscach.",
					en: "Yes. With a business website I set up or tidy your profile, link it to the site and keep your business details consistent in both places.",
				},
			},
			{
				id: "katowice-faq-4",
				question: {
					pl: "A jeśli moja firma jest w Krakowie?",
					en: "What if my company is in Kraków?",
				},
				answer: {
					pl: "Też się dogadamy. Większość pracy i tak odbywa się zdalnie, a do Krakowa w razie potrzeby dojadę na spotkanie.",
					en: "That works too. Most of the work happens remotely anyway, and I can travel to Kraków for a meeting if needed.",
				},
			},
			{
				id: "katowice-faq-5",
				question: {
					pl: "Ile trwa zrobienie strony internetowej?",
					en: "How long does it take to build a website?",
				},
				answer: {
					pl: "Strona-wizytówka powstaje zwykle w kilka dni, strona firmowa z panelem w 2–3 tygodnie, a sklep Shopify w 3–5 tygodni. Najwięcej zależy od tego, jak szybko są gotowe teksty, zdjęcia i decyzje. Przy dłuższych projektach co tydzień dostajesz podgląd na żywo, więc widzisz postęp i możesz komentować na bieżąco.",
					en: "A one-page site usually takes a few days, a website with an editor 2–3 weeks and a Shopify store 3–5 weeks. Most of it depends on how quickly the texts, photos and decisions are ready. On longer projects you get a live preview every week, so you see the progress and can comment as we go.",
				},
			},
			{
				id: "katowice-faq-6",
				question: {
					pl: "Jak wygląda współpraca krok po kroku?",
					en: "What does working together look like?",
				},
				answer: {
					pl: "Wysyłasz krótki brief, a ja odpisuję w ciągu 24 godzin z pytaniami albo wstępnymi widełkami. W 2–3 dni robocze dostajesz zakres, cenę i harmonogram, bez ukrytych kosztów. W trakcie budowy co tydzień widzisz postęp na podglądzie na żywo. Na koniec wdrażam stronę, podłączam domenę, analitykę i Google Search Console oraz pokazuję, jak samodzielnie zmieniać treści.",
					en: "You send a short brief and I reply within 24 hours with questions or a rough range. Within 2–3 working days you get the scope, price and timeline, with no hidden costs. During the build you see the progress on a live preview every week. At the end I launch the site, connect the domain, analytics and Google Search Console, and show you how to edit the content yourself.",
				},
			},
			{
				id: "katowice-faq-7",
				question: {
					pl: "Dlaczego freelancer, a nie agencja?",
					en: "Why a freelancer rather than an agency?",
				},
				answer: {
					pl: "Pracujesz bezpośrednio z osobą, która pisze kod, więc nic nie gubi się między handlowcem, projektantem a programistą. Nie płacisz za biuro ani za pośredników, dlatego strona-wizytówka zaczyna się od 1 000 zł netto. Od ponad 5 lat pracuję w zespołach produktowych, więc dostajesz standardy dużych projektów w skali małej firmy, a po starcie na Twoje pytania odpowiada ta sama osoba.",
					en: "You work directly with the person who writes the code, so nothing gets lost between a salesperson, a designer and a developer. You don't pay for an office or middlemen, which is why a one-page site starts at 1,000 PLN net. I've worked in product teams for 5+ years, so you get the standards of large projects at a small-business scale, and after launch the same person answers your questions.",
				},
			},
			{
				id: "katowice-faq-8",
				question: {
					pl: "Czy wystawiasz fakturę VAT?",
					en: "Do you issue VAT invoices?",
				},
				answer: {
					pl: "Tak. Prowadzę działalność gospodarczą i wystawiam faktury VAT. Jeśli wolisz, możemy też podpisać umowę o dzieło albo umowę zlecenie.",
					en: "Yes. I run a registered business and issue VAT invoices. If you prefer, we can also sign a contract for specific work or a mandate contract.",
				},
			},
		],
		seo: {
			title: {
				pl: "Strony internetowe Katowice | Michał Janiec",
				en: "Web design Katowice | Michał Janiec",
			},
			description: {
				pl: "Strony firmowe, sklepy i aplikacje dla firm z Katowic i Śląska. Spotkanie na miejscu, lokalne SEO, faktura VAT. Odpowiedź w 24 h.",
				en: "Business websites, online stores and web apps for companies in Katowice and Silesia. Meet in person, local SEO, VAT invoice. Reply within 24 hours.",
			},
		},
	},
];
