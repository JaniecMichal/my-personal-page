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
			pl: "Jestem frontend developerem z Katowic. Robię strony firmowe, sklepy i aplikacje dla firm z Katowic i całego Śląska. Możemy spotkać się na kawę przy Rynku albo u Ciebie w firmie, a resztę załatwić zdalnie.",
			en: "I'm a frontend developer based in Katowice. I build business websites, online stores and web apps for companies in Katowice and across Silesia. We can meet for coffee in the city centre or at your office, and handle the rest remotely.",
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
