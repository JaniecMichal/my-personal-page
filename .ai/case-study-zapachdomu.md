# Case study: zapachdomu.com (materiał roboczy, 2026-10-14)

Źródło: notatki w `~/personal_projects/zapachdomu` (bez gita, praca w panelu Shopify). Nic tu nie jest
jeszcze na stronie. Przed publikacją potrzebne odpowiedzi Michała (sekcja „Pytania”).

## Fakty z notatek

- **Klient:** sklep Shopify zapachdomu.com, zestawy prezentowe (kawa, herbata, słodycze, miody,
  akcesoria) + strona B2B „Prezenty dla firm”. Zlecenie przez osobę z agencji SEO, która prowadzi sklep.
- **Platforma:** Shopify, motyw Dawn (Online Store 2.0), Liquid. Praca w panelu (Edit code / theme editor).
- **Okres:** oferta 2026-09-23, start 2026-09-25, publikacja 2026-09-29, ostatni wpis 2026-10-01 (~tydzień).
- **Punkt wyjścia** (`plan_dolny_opis_kategorii.md`): klient chciał rozwijanego pola z tekstem SEO na
  wszystkich kategoriach („nawet robot Ads nie rozumie, o czym jest strona”). Za dużo tekstu nad listą
  produktów, brak opisu na `/collections/all`.

## Co zostało zrobione

1. Dolny opis SEO w każdej kategorii: metafield kolekcji (rich text) + własna sekcja Liquid. Podgląd
   tekstu pod listą produktów, „Czytaj więcej / Zwiń”, dwa tryby cięcia ustawiane w edytorze motywu.
   Pełna treść w HTML z serwera (indeksowalna, działa bez JS); pusta kategoria nie pokazuje bloku.
2. Zwijany górny opis kolekcji (domyślnie pierwszy akapit), żeby produkty były wyżej.
3. Poprawka: „Czytaj więcej” widoczne przy krótkim tekście (konflikt z klasą `.link` z Dawn).
4. Kolekcja `all` (smart, cena > 0), żeby `/collections/all` też miało opis. Sprawdzone przed i po:
   50 produktów, ta sama kolejność.
5. Bezpieczne wdrożenie: backup motywu, kopia, podgląd dla klienta (Share preview), publikacja, stary
   motyw do szybkiego powrotu.
6. Dla klienta: instrukcja edycji pola, prompt do czystego wklejania tekstów (Word łamał akapity).
7. Doradztwo: FAQ na stronie „Prezenty dla firm” (ryzyko dwóch H1), `meta keywords` (Google je ignoruje),
   zawężenie tagu wklejonego globalnie do jednej kategorii.

**Liczby:** brak wyników SEO / biznesowych. Udokumentowane tylko: 50 produktów bez zmian w `/collections/all`.

## Materiały

- Zrzuty: `weryfikacja_collections_all/przed_2026-09-29_*.png` (siatka produktów), `po_*_admin_*.png`
  (panel admina, sprawdzić przed użyciem).
- Brak zrzutów „Czytaj więcej”: zrobić z żywego sklepu (kategoria zwinięta / rozwinięta, telefon i desktop).
- Brak cytatu klienta.

## Nie publikować

Kwoty i rabaty, stawki, pakiety abonamentu; informacja o budżecie klienta; ID sklepu, motywów, linki do
admina i podglądów; błędy klienta (globalny meta tag, Word) jako wpadki; backupy ZIP motywu.

## Pytania do Michała

1. Zgoda na publikację? Z nazwą sklepu czy anonimowo? Kto jest „klientem”: sklep czy agencja SEO?
2. Czy teksty SEO są już wpisane? W ilu kategoriach?
3. Jakieś efekty (pozycje, ruch, Ads, sprzedaż)? Jeśli nie, wynik opisujemy jakościowo.
4. Krótki cytat od klienta?
5. Czy współpraca trwa (abonament przyjęty)?
6. Pokazać pracę w panelu bez dostępu do danych klientów i zamówień jako atut?

## Propozycja

- Usługi: `shopify` (główna); ewentualnie `speed-seo-audit` (warstwa SEO, choć to nie był audyt).
- Robocze tytuły: „Opisy SEO z „Czytaj więcej” w kategoriach sklepu Shopify”; „Sklep z prezentami na
  Shopify: treść dla Google i Ads bez spychania produktów w dół”.
- Mały projekt (~tydzień): krótsze case study, rozdziały Problem / Rozwiązanie / Proces / Efekt.
