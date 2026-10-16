# Plan pracy: widoczność w Google i AI (od 2026-10-16)

Roboczy plan do odhaczania. Szczegóły, źródła i tabele konkurencji:
[search-growth-plan.md](./search-growth-plan.md) (ID zadań takie same jak tutaj). Plan biznesowy
(D1–D6) jest kierunkiem, nie twardym ograniczeniem. Zasada bez zmian: żadnych wymyślonych liczb,
opinii ani klientów.

**M** = Michał (fakty, decyzje, działania poza stroną) · **A** = agent (kod, szkic treści).
Przy każdym zadaniu „fakt” oznacza: potrzebne potwierdzenie przed publikacją.

---

## Podsumowanie

**Gdzie jesteśmy.** Technicznie strona jest lepsza od lokalnej konkurencji (szybkość, dane
strukturalne, canonical/hreflang, llms.txt, roboty AI wpuszczone). Przegrywamy na trzech rzeczach,
których nie da się nadrobić kodem w tydzień: **wiek domeny** (strona żyje od 12.10.2026),
**opinie** (konkurenci mają 30–220 opinii Google, my 0 i brak wizytówki) i **ilość treści**
(konkurenci 20–140 artykułów i dziesiątki podstron miast, my 0 artykułów). WebAlpha ma domenę od
stycznia 2026, 28 artykułów i 31 opinii, i już pokazuje się dla Katowic, więc młoda domena może
konkurować w ciągu roku.

**Co psuje wyniki teraz:**
1. Przełącznik języka na każdej podstronie usług linkował do stron 404 (poprawka gotowa).
2. Strona „Strony firmowe w Next.js” to kopia „Strony internetowej dla firmy” (te same nagłówki,
   pakiety, ceny). Google widzi dwie podobne strony i nie wie, którą pokazać.
3. Słowo „programista” i cena nie występują w żadnym tytule, a zwycięzcy mają je w tytule i H1
   („Strony internetowe Katowice – od 2 500 zł netto”, „programista-katowice.pl”).
4. Sześć podstron usług jest cienkich (ok. 100–180 słów własnej treści, bez FAQ).

**Największa dźwignia dla wyników AI** (Google AI Mode, ChatGPT, Perplexity): obecność poza
stroną. AI poleca firmy, o których „mówi internet”: wizytówka Google z opiniami, Useme i Oferteo
(pojawiały się w każdym lokalnym zapytaniu testowym), Clutch, pkt.pl, LinkedIn, wszędzie ten sam opis.

**Szanse:**
- **Automatyzacja AI na Śląsku**: kilka firm lokalnie (PixelAgency Katowice, KC Mobile Czeladź,
  Pawlica Tychy, ADELLO, Process Hub), żadna bez prawdziwych wyników liczbowych, tylko jedna z
  cenami, nikt wokół KSeF. Frazy lokalne nie mają jeszcze podpowiedzi w Google, więc konkurencja
  jest mała.
- **„Naprawa strony WordPress Katowice”**: odpowiadają tylko profile Useme.
- **Senior frontend React/Next.js dla zespołów produktowych i Rails**: lokalnie nikt tego nie oferuje.

**Czego nie robić:** dziesiątek podstron miast z podmienioną nazwą (doorway pages = spam dla
Google). Jedna prawdziwa strona Katowic, ewentualnie później Gliwice, jeśli będzie tam realny klient.

**Realny czas:** marka w odpowiedziach AI: tygodnie. Długi ogon (Next.js Katowice, naprawa WordPress,
Rails, automatyzacja AI Katowice): 1–4 miesiące po P0. Mapa Google: 1–3 miesiące po wizytówce i
opiniach. „Strony internetowe Katowice” w top 10: 6–12+ miesięcy.

---

## P0 — ten tydzień

- [ ] **P0-1 Wdrożyć poprawkę przełącznika języka** (M): merge PR `fix-locale-switch`, potem
  `scripts/smoke.sh`, `scripts/indexnow.sh`, Search Console → „Nie znaleziono (404)” → „Zatwierdź poprawkę”.
- [x] (2026-10-16, gałąź `seo-quick-wins`; pakiety usunięte, ceny 1 000 / 2 900 zł w FAQ) **P0-2 Strona Next.js z własną treścią** (A, ok. 2 h; fakt: sposób pokazania ceny):
  fraza „strony internetowe w Next.js”, własny tytuł i opis, wstęp dla osób, które już chcą
  Next.js (agencje, firmy odchodzące od WordPressa, startupy), sekcja „Next.js czy WordPress?”,
  FAQ 6 pytań, link do realizacji nazielono.pro, jedna linia „od 2 900 zł + wycena indywidualna”
  zamiast skopiowanych pakietów. Linki ze strony Katowic, strony „Strona internetowa dla firmy” i stopki.
- [x] (2026-10-16, `seo-quick-wins`: tytuły z „programista” i cenami, H2 na stronie Katowic; H1 strony głównej bez zmian) **P0-3 Tytuły i nagłówki według mapy fraz** (A szkic, M akceptuje): strona główna
  „Programista stron internetowych Katowice — Michał Janiec”; H1 zostaje problemowy, pod nim
  linijka z osobą i miejscem; na stronie Katowic H2 z „programista z Katowic”; cena w tytułach
  tam, gdzie jest potwierdzona.
- [x] (2026-10-16, `seo-quick-wins`: FAQ 4–5 i karty „co dostajesz” na każdej usłudze, nagłówek FAQ, wstęp na Realizacjach) **P0-4 Rozbudować cienkie usługi** (A, 1–2 h każda): aplikacje webowe, WordPress, audyt,
  Rails, Shopify, wstęp na „Realizacje”. Schemat: problem → co robię → dla kogo → realizacja →
  FAQ 3–5, każda odpowiedź zaczyna się od zdania z konkretną odpowiedzią. WordPress pod frazę
  „naprawa i przyspieszenie strony WordPress”.
- [ ] **P0-5 Wizytówka Google** (M): firma działająca na obszarze, adres ukryty, nazwa dokładnie
  jak w CEIDG (bez słów kluczowych), kategoria „Projektant stron internetowych”, obszar Katowice +
  GZM, link do `/pl/strony-internetowe/katowice`, 5–10 zdjęć. Potem Bing Places (import) i Apple
  Business Connect.
- [ ] **P0-6 Prośby o opinie** (M): nazielono.pro, zapachdomu, bilscy, jemWszkole (najpierw sprawdzić
  relację umowną), osoby z rekomendacji na LinkedIn. Tylko prawdziwe; poprosić o nazwę usługi i miasto.
  Cel: 5 opinii w 30 dni.

## P1 — 2–4 tygodnie

- [ ] **P1-1 Strona automatyzacji AI** (A zbudował MVP na gałęzi `ai-automation`, M daje fakty):
  publikacja (zdjęcie `noindex`, sitemap, stopka, lista usług, llms.txt) dopiero po potwierdzeniu:
  - [ ] AI-F1 cena audytu (i czy odliczana od wdrożenia) · rynek 990–1 500 zł
  - [ ] AI-F2 cena „od” pilotażu jednego procesu + czas · rynek 3 900–4 900 zł, 2–4 tygodnie
  - [ ] AI-F3 cena „od” asystenta na stronie · rynek ok. 5 900 zł
  - [ ] AI-F4 cena „od” opieki i co obejmuje · rynek 500–700 zł/mies.
  - [ ] AI-F5 narzędzia i modele, których naprawdę użyjesz (n8n, Make, własny kod; Claude / OpenAI / Gemini)
  - [ ] AI-F6 integracja z KSeF: czy ją budujesz
  - [ ] AI-F7 pierwszy dowód: asystent na własnej stronie albo pilotaż u klienta (bez wymyślania)
  - [ ] AI-F8 audyty na miejscu w GZM: tak / nie
  - [ ] AI-F9 warsztat AI dla zespołów jako oferta
  - [ ] Potwierdzić dodane obietnice: „rozmowa 30 minut bez zobowiązań”, „pilotaż: kilka tygodni”
  - [x] GitHub JaniecMichalV: „Include private contributions on my profile” włączone (2026-10-16);
    kalendarz na stronie AI sumuje oba konta z kalendarza GitHub (352 + 348 = 700)
  - [x] Kafelek „Automatyzacja AI” na stronie głównej (siatka usług, ciemny wariant), „AI” w menu i stopce
  - [ ] Wygląd strony AI: ciemna scena z niebiesko-fioletową poświatą (hero + „Gdzie ucieka czas”)
    i sekcja „AI to nie dodatek” z licznikami i prawdziwym kalendarzem GitHub: akceptacja
- [ ] **P1-2 Profile z jednym opisem** (M, ok. 3 h): Useme (najważniejsze), Oferteo (darmowy profil),
  Clutch (2–3 zweryfikowane opinie), pkt.pl, Panorama Firm, LinkedIn (sekcja Usługi), GitHub. Ta
  sama nazwa, miasto, adres strony i jedno zdanie o Next.js, Katowicach i automatyzacji AI. Potem
  agent dopisuje je do `sameAs`.
- [ ] (częściowo 2026-10-16: polski blok w llms.txt, `areaServed` usług z Katowicami i Śląskiem; nazwa firmy czeka na decyzję) **P1-3 Spójne dane firmy** (A, 1 h; fakt: nazwa): jedna nazwa w danych strukturalnych,
  polityce prywatności i wizytówce; ta sama lista obszarów wszędzie (Kraków); polski blok o firmie na
  początku llms.txt; strona AI i ceny w llms.txt.
- [x] (2026-10-16: stopka ze wszystkimi usługami i automatyzacją AI, „AI” w menu; strona Katowic linkuje usługi przez siatkę) **P1-4 Linkowanie wewnętrzne** (A): stopka ze wszystkimi usługami, każda usługa linkuje do
  jednej realizacji i strony Katowic, cennik do usług.
- [ ] **P1-5 Podpisy u klientów** (M): „Strona: Michał Janiec (mjaniec.it)” w stopce nazielono,
  zapachdomu, bilscy, jeśli się zgodzą. Nie przy projektach Visuality.
- [ ] **P1-6 Pomiar** (A + M): zdarzenia analityki, UTM z ulotek mini-audytu, arkusz leadów.
- [ ] **P1-7 Liczby do realizacji** (M): metryki jemWszkole (TODO w `work.ts`), nazielono mobile
  po poprawkach, raport przed/po dla każdego nowego klienta.

## P2 — 1–3 miesiące

- [x] (2026-10-16, gałąź `blog`) **P2-1 Blog MVP**: `/pl/blog` ↔ `/en/blog`, lista (najnowszy wpis wyróżniony + siatka),
  wpis (spis treści sticky, pasek postępu, „najważniejsze w skrócie”, FAQ, powiązana usługa, „czytaj dalej”),
  BlogPosting + Breadcrumb + FAQPage, hreflang tylko dla istniejących języków, sitemap i llms.txt bez szkiców.
  Treść w `src/content/local/posts.ts`; `draft: true` = widoczny tylko w podglądzie i lokalnie (noindex).
  - [ ] Zaakceptować szkic „Ile kosztuje strona internetowa dla firmy w 2026” (2 × [DO POTWIERDZENIA]:
    cena projektu graficznego, koszt domeny .pl) i zmienić `draft` na `false`
  - [ ] Później: paginacja (od ok. 10 wpisów), tagi jako filtry, RSS, okładki i OG per wpis, link „Blog” w menu
- [ ] **P2-2 Cztery artykuły-odpowiedzi** (A szkic z Twojej wiedzy, M akceptuje; prompt i workflow: [blog-prompt.md](./blog-prompt.md)), odpowiedź w
  pierwszym akapicie, tabele, data:
  - [ ] „Ile kosztuje strona internetowa dla firmy w 2026 (Śląsk)”
  - [ ] „Next.js czy WordPress dla strony firmowej”
  - [ ] „Dlaczego strona na WordPressie wolno działa i co z tym zrobić”
  - [ ] „Ile kosztuje automatyzacja AI w małej firmie 2026”
  - Później: „KSeF i faktury kosztowe: co można zautomatyzować”, „Make, Zapier czy n8n”,
    „Chatbot na stronę: co mówi AI Act”.
- [ ] **P2-3 Przykłady branżowe jako sekcje** (nie osobne strony): biuro rachunkowe, gabinet,
  warsztat/serwis, hurtownia/e-commerce na stronie „Strona internetowa dla firmy” (strona AI już ma).
- [ ] **P2-4 Lokalna społeczność** (M): wystąpienie lub open mic na AI Café (UŚ, spinPLACE),
  Śniadanie AI Śląsk, BRAVE AI Katowice, GDG Silesia IT AfterHours; Infoshare Katowice 17–18.11.2026
  (MCK, AI Stage); konsultacje w Rawa.Ink. Strony wydarzeń = lokalne wzmianki i linki.
- [ ] **P2-5 Działające demo** (A, po akceptacji strony AI): mały asystent na mjaniec.it,
  odpowiadający z treści strony i mówiący, że jest AI. Punkt wyjścia: `src/actions/terminal-ai.ts`.
  To jednocześnie pierwszy dowód dla oferty AI.

## P3 — po zebraniu danych (3–6 miesięcy)

- [ ] Jedna prawdziwa strona miasta obok Katowic (np. Gliwice), tylko z realną historią klienta.
- [ ] Szkolenia AI dla zespołów (AI Act art. 4) i wpis do BUR: otwiera dofinansowanie z KFS
  (70%, 90% dla firm do 9 osób) i PARP „Kompetencje z automatyzacji” (Śląskie = makroregion 4, do 80%).
- [ ] Rankingi „… Katowice” (biznesmagazyn, marketingmagazyn, itmagazyn): prawdopodobnie płatne,
  decyzja po zebraniu opinii. katowiceteraz.pl liczy opinie z Map Google (wejście przez wizytówkę).
- [ ] Comiesięczny pomiar: 6 fraz z [ai-search-visibility.md](./ai-search-visibility.md) +
  „automatyzacja AI Katowice”, „chatbot dla firmy Katowice”; wyświetlenia w Search Console per strona.

---

## Mapa fraz (jedna główna fraza na adres)

| Adres | Fraza główna |
|---|---|
| /pl | programista stron internetowych Katowice |
| /pl/strony-internetowe/katowice | strony internetowe Katowice |
| /pl/uslugi/strona-internetowa-dla-firmy | strona internetowa dla małej firmy |
| /pl/uslugi/strony-nextjs | strony internetowe w Next.js |
| /pl/automatyzacja-ai | automatyzacja AI dla firm Katowice |
| /pl/uslugi/aplikacje-react | aplikacje webowe na zamówienie |
| /pl/uslugi/wordpress | naprawa i przyspieszenie strony WordPress |
| /pl/uslugi/audyt-szybkosci-seo | audyt szybkości strony |
| /pl/uslugi/seo-i-google-ads | SEO i Google Ads dla firm |
| /pl/uslugi/sklepy-shopify | sklep internetowy na Shopify |
| /pl/uslugi/frontend-dla-zespolow-rails | frontend developer Ruby on Rails |
| /pl/cennik | ile kosztuje strona internetowa |
| /pl/realizacje | realizacje stron internetowych |
| /pl/kontakt | wycena strony internetowej |
| /pl/cv | Michał Janiec frontend developer |
