import type { LocalPost } from "./resolve";

/**
 * Blog posts. Newest first is handled by the adapter. A post without an `en` slug exists in Polish
 * only. Keep `draft: true` until Michał approves the text: drafts show in previews, never on
 * production. Never invent numbers; mark missing facts with [DO POTWIERDZENIA].
 */
export const posts: LocalPost[] = [
	{
		id: "cost-of-business-website-2026",
		draft: true,
		slug: { pl: "ile-kosztuje-strona-internetowa-dla-firmy" },
		title: "Ile kosztuje strona internetowa dla firmy w 2026 roku? Ceny na Śląsku",
		excerpt:
			"Prosta strona-wizytówka na Śląsku kosztuje zwykle od ok. 900 do 2 000 zł netto, a strona firmowa z kilkoma podstronami i panelem od ok. 2 500 do 6 000 zł netto. Duże agencje zaczynają od kilkunastu tysięcy. Oto, od czego zależy cena i jak nie przepłacić.",
		publishedAt: "2026-10-16",
		tags: ["Ceny", "Strony internetowe", "Śląsk"],
		keyTakeaways: [
			"Strona-wizytówka: zwykle 900–2 000 zł netto, strona firmowa z panelem: 2 500–6 000 zł netto.",
			"Najwięcej zmieniają: liczba podstron, projekt graficzny, panel do edycji i gotowe treści.",
			"Licz też koszty stałe: domenę, hosting i ewentualną opiekę po starcie.",
		],
		body: [
			{
				type: "p",
				text: "Krótka odpowiedź: **prosta strona-wizytówka kosztuje zwykle od ok. 900 do 2 000 zł netto, a strona firmowa z kilkoma podstronami i panelem do edycji od ok. 2 500 do 6 000 zł netto**. Duże agencje interaktywne zaczynają od kilkunastu, a nawet ponad 20 tysięcy złotych. Poniżej wyjaśniam, skąd biorą się te różnice i jak porównywać oferty.",
			},
			{
				type: "callout",
				tone: "info",
				title: "Skąd te liczby",
				text: "Widełki pochodzą z cenników firm z Katowic i okolic, które sprawdziłem 16 października 2026 r. Wszystkie kwoty to ceny netto, „od”, czyli za najprostszy wariant danego pakietu.",
			},
			{ type: "h2", text: "Ceny stron internetowych na Śląsku w 2026 roku" },
			{
				type: "table",
				head: ["Rodzaj strony", "Typowa cena na Śląsku (netto)", "U mnie (netto)"],
				rows: [
					["Strona-wizytówka (1 strona)", "ok. 900–2 000 zł", "od 1 000 zł"],
					["Strona firmowa z panelem", "ok. 2 500–6 000 zł", "od 2 900 zł (do 4 podstron)"],
					["Sklep internetowy", "ok. 1 800–8 000 zł", "Shopify od 2 500 zł"],
					["Projekt w dużej agencji", "od kilkunastu tys. zł", "wycena indywidualna"],
				],
			},
			{
				type: "p",
				text: "Szczegóły moich pakietów znajdziesz w [cenniku](/pl/cennik). Projekty niestandardowe wyceniam indywidualnie.",
			},
			{ type: "h2", text: "Od czego zależy cena strony" },
			{
				type: "ol",
				items: [
					"**Liczba podstron.** Jedna strona z sekcjami to inny projekt niż oferta rozpisana na usługi, realizacje i kontakt.",
					"**Projekt graficzny.** Strona budowana z gotowego projektu jest tańsza niż projekt od zera. [DO POTWIERDZENIA: ile kosztuje u mnie projekt graficzny]",
					"**Panel do edycji.** Jeśli chcesz sam zmieniać ceny, zdjęcia i aktualności, strona potrzebuje panelu (CMS).",
					"**Treści i zdjęcia.** Gotowe teksty skracają pracę. Jeśli ich nie masz, trzeba je napisać razem.",
					"**Integracje.** Rezerwacje, płatności, newsletter czy CRM to dodatkowa praca.",
					"**SEO techniczne.** Dane strukturalne, mapa strony i szybkość decydują, jak Google zrozumie stronę.",
				],
			},
			{ type: "h2", text: "Koszty stałe, o których łatwo zapomnieć" },
			{
				type: "ul",
				items: [
					"**Domena**: opłata roczna u rejestratora. [DO POTWIERDZENIA: typowy koszt domeny .pl]",
					"**Hosting**: zależy od technologii i ruchu; przy stronach w Next.js konto zakładamy na Ciebie.",
					"**Abonament platformy**: przy sklepie na Shopify płacisz miesięczną opłatę bezpośrednio Shopify.",
					"**Opieka po starcie**: poprawki i rozwój u mnie kosztują 90–150 zł/h netto, jednorazowo albo w stałym pakiecie od 2–4 h miesięcznie.",
				],
			},
			{ type: "h2", text: "Tania strona za kilkaset złotych: na co uważać" },
			{
				type: "p",
				text: "Bardzo niska cena zwykle oznacza gotowy szablon z minimalnymi zmianami. To może wystarczyć na start, ale sprawdź kilka rzeczy, zanim podpiszesz umowę.",
			},
			{
				type: "ul",
				items: [
					"Czy domena i hosting są na Ciebie, a nie na wykonawcę?",
					"Czy dostaniesz dostęp do panelu i kodu po zakończeniu prac?",
					"Czy strona ma SEO techniczne i dobrze działa na telefonie?",
					"Kto i za ile wprowadzi zmiany po starcie?",
				],
			},
			{
				type: "callout",
				tone: "tip",
				title: "Jak porównywać oferty",
				text: "Porównuj zakres, a nie samą kwotę: liczbę podstron, panel, poprawki w cenie, wsparcie po starcie i to, kto jest właścicielem strony.",
			},
			{ type: "h2", text: "Jak dostać dokładną wycenę" },
			{
				type: "p",
				text: "Opisz firmę i to, co strona ma robić: więcej telefonów, zapytań czy rezerwacji. Wystarczy [krótki brief](/pl/kontakt). Odpowiadam w ciągu 24 godzin, a wycenę z zakresem i terminem dostajesz w 2–3 dni robocze.",
			},
		],
		faq: [
			{
				id: "post-cost-faq-1",
				question: "Czy ceny stron są netto czy brutto?",
				answer:
					"Firmy zwykle podają ceny netto. Jeśli nie jesteś płatnikiem VAT, do kwoty doliczysz 23% VAT. Wszystkie moje ceny są netto, wystawiam fakturę VAT.",
			},
			{
				id: "post-cost-faq-2",
				question: "Ile trwa zrobienie strony internetowej?",
				answer:
					"Prosta strona-wizytówka powstaje w kilka dni, strona firmowa z panelem zwykle w ciągu 3 tygodni, jeśli treści są gotowe.",
			},
			{
				id: "post-cost-faq-3",
				question: "Czy po starcie mogę sam zmieniać treści?",
				answer:
					"Tak, jeśli strona ma panel do edycji. Wtedy sam zmieniasz teksty, zdjęcia, ceny i godziny otwarcia bez programisty.",
			},
			{
				id: "post-cost-faq-4",
				question: "Czy za stronę płaci się co miesiąc?",
				answer:
					"Za samą stronę płacisz raz. Co roku albo co miesiąc dochodzą domena, hosting i ewentualnie abonament platformy, a opiekę możesz zamawiać jednorazowo albo w pakiecie.",
			},
		],
		services: ["business-website", "nextjs-websites"],
		seo: {
			title: "Ile kosztuje strona internetowa dla firmy w 2026? Śląsk",
			description:
				"Strona-wizytówka na Śląsku kosztuje zwykle 900–2 000 zł netto, strona firmowa z panelem 2 500–6 000 zł netto. Od czego zależy cena i jak nie przepłacić.",
		},
	},
];
