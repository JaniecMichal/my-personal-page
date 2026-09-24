# Jak tworzyć treści na mjaniec.it

Ten dokument jest o tym, **co** pisać i **dlaczego**. Gdzie wpisywać: `src/content/local/*.ts` (usługi,
case studies, CV, FAQ, cennik) oraz `src/messages/{pl,en}.json` (teksty interfejsu).

---

## 1. Zasada nadrzędna: piszesz dla klienta, nie o sobie

Klient nie kupuje „React, Next.js, TypeScript”. Kupuje **wynik**: więcej zapytań ze strony, sklep, który
sprzedaje, stronę, która się nie sypie, i spokój, że ktoś odpisze. Stack jest dowodem, nie ofertą.

Każde zdanie sprawdzaj pytaniem: **„I co z tego dla klienta?”**

| Zamiast | Napisz |
|---|---|
| „Buduję strony w Next.js z SSG.” | „Strona ładuje się w mniej niż sekundę, więc Google i klienci jej nie porzucają.” |
| „Znam Shopify i Liquid.” | „Sklep, który sam obsłużysz: dodasz produkt, zmienisz baner, bez dzwonienia do programisty.” |
| „5+ lat doświadczenia.” | „5 lat w zespołach produktowych, m.in. przy platformie dla brytyjskich banków.” |

## 2. Trzech odbiorców, trzy różne potrzeby

| Kto | Czego się boi | Co chce przeczytać | Gdzie to trafia |
|---|---|---|---|
| **Mała firma / sklep (PL)** | przepłacenia, zniknięcia wykonawcy, niezrozumiałego żargonu | cena „od”, termin, przykład, prosty proces, „sam edytujesz treści” | home, usługi, cennik, FAQ |
| **Startup / zespół produktowy (PL/EN)** | słabego kodu, braku samodzielności, problemów z komunikacją | doświadczenie w zespołach, stack, sposób pracy, referencje | usługi (web apps, Rails), case studies, CV |
| **Rekruter** | tracenia czasu | stanowiska, daty, stack, dostępność, forma współpracy, PDF | `/cv` |

Nie próbuj zadowolić wszystkich w jednym akapicie. **Strona główna mówi do małej firmy** (największa
szansa na szybkie zlecenia), a zespoły i rekruterzy mają swoje ścieżki (usługi „frontend dla zespołów
Rails”, `/cv`).

## 3. Głos i ton

- **Konkretnie i krótko.** Jedna myśl na zdanie. Bez „kompleksowych rozwiązań” i „innowacyjnego podejścia”.
- **Na „Ty”** po polsku (bezpośrednio, jak na stronie), **„you”** po angielsku.
- **Pewnie, ale bez przechwałek.** Fakty zamiast przymiotników: „3,5 roku w zespole 50 inżynierów”
  zamiast „ogromne doświadczenie”.
- **Uczciwie o tym, czego jeszcze nie ma.** Nie masz case study z Shopify? Nie udawaj. Napisz, co robisz
  i jak (proces, zakres w cenie), a case study dodasz po pierwszym zleceniu.
- **PL i EN to osobne teksty, nie tłumaczenie 1:1.** Polska wersja celuje w lokalnych klientów (złotówki,
  Przelewy24, BLIK, faktura VAT, „Katowice/Śląsk”). Angielska w zespoły i klientów z UE/UK (remote, B2B,
  doświadczenie z klientem z UK).

## 4. Strona po stronie

### Strona główna
- **Nagłówek** obiecuje wynik, nie technologię. Obecny: „Strony, sklepy i aplikacje, które sprzedają.”
- **Lead** (2 zdania): co robisz, dla kogo, dlaczego Ty.
- **Status dostępności** z prawdziwą datą. „Wolne miejsca” tylko wtedy, gdy to prawda.
- **„Pracowałem z”**: tylko firmy, które możesz wymienić. Visuality i HexOcean jako pracodawcy są OK;
  klientów freelance wymieniaj za ich zgodą.
- **Opinie**: krótkie cytaty (1–2 zdania) wyjęte z rekomendacji na LinkedIn, zawsze z imieniem, rolą i linkiem.

### Strony usług (najważniejsze dla SEO)
Każda usługa to osobna strona i osobna fraza w Google. Na każdej odpowiedz na 6 pytań:

1. **Dla kogo** to jest (i dla kogo nie).
2. **Co dokładnie dostajesz** (lista „W cenie”, konkretna).
3. **Ile kosztuje**: cena „od” i od czego zależy.
4. **Ile trwa**.
5. **Jak wygląda współpraca** (kroki).
6. **Dowód**: powiązane case study, opinia albo liczba.

Dodaj do każdej usługi 3–4 pytania FAQ, które klienci naprawdę zadają (pole `faq` w `services.ts`). To
najlepszy materiał dla Google i asystentów AI.

### Cennik
- Podawaj **ceny „od”**. Brak cen odstrasza małe firmy i przyciąga tylko najtańsze zapytania.
- Wyjaśnij, **co wpływa na cenę** (to już jest na stronie).
- Stawka godzinowa dla zespołów i agencji plus informacja o fakturze VAT/B2B.
- Punkt wyjścia z wcześniejszej wyceny: 140–160 zł/h netto. Pakiety licz jako szacowane godziny × stawka
  plus zapas ~20% na komunikację i poprawki.

### Case studies (najsilniejszy argument sprzedażowy)
Struktura jest gotowa: **Problem → Podejście → Efekt**, plus metryki, stack, rola, cytat.

- **Problem** opisany językiem klienta: co go bolało i dlaczego to było ważne biznesowo.
- **Podejście**: 2–3 kluczowe decyzje i ich uzasadnienie (np. „Next.js zamiast WordPressa, bo…”). To
  pokazuje, że myślisz, a nie tylko kodujesz.
- **Efekt w liczbach**: przed i po. Bez liczb efekt jest tylko opinią.
- **Cytat klienta**: 2–3 zdania i zgoda na publikację.
- **Zrzuty ekranu**: desktop + mobile, prawdziwe, bez lorem ipsum.

**Skąd wziąć liczby** (zbierz przed pisaniem):
- PageSpeed Insights / Lighthouse (mobile): wynik performance, LCP, CLS. Zrób zrzut „przed” przy
  każdym nowym projekcie, żeby mieć porównanie.
- Google Search Console klienta: kliknięcia i wyświetlenia 3 miesiące przed i po.
- Analytics: liczba zapytań z formularza, konwersja, czas na stronie.
- Twoje metryki: czas realizacji, liczba podstron, rozmiar JS, brak incydentów.

**5 pytań do klienta po projekcie** (wyślij mailem, odpowiedzi to gotowy materiał):
1. Jaki problem chcieliście rozwiązać i co się działo, zanim zaczęliśmy?
2. Dlaczego zdecydowaliście się na współpracę ze mną?
3. Co się zmieniło po wdrożeniu? (liczby, jeśli możesz)
4. Co było najlepsze we współpracy?
5. Czy mogę opublikować Twoją opinię z imieniem i nazwą firmy?

**Priorytet:**
1. nazielono.pro: masz liczby w zasięgu, bo to Twój projekt SEO.
2. jemWszkole.pl: modernizacja bez przepisywania to świetna historia dla firm z „legacy”.
3. Braintrust: pokazuje skalę i pracę w zespole.

Po pierwszym zleceniu Shopify lub WordPress od razu zbieraj „przed/po”: to będą Twoje najcenniejsze case studies.

### CV
- Pisz dla rekrutera technicznego: stanowisko, daty, stack, **jeden konkretny efekt** na każdą rolę.
- Zadbaj o spójność z LinkedIn (daty, nazwy stanowisk).
- Aktualny PDF: ta sama treść co na stronie, 1–2 strony.

## 5. SEO: frazy i intencje

Jedna strona = jedna główna fraza + kilka pobocznych. Frazę umieść w tytule strony, nagłówku H1, pierwszym
akapicie, jednym śródtytule i w opisie meta (`seo.title` / `seo.description` w danych usługi).

| Strona | PL: główna fraza | EN: main phrase |
|---|---|---|
| Strony Next.js | strona internetowa dla firmy Katowice / strona w Next.js | Next.js developer for business websites |
| Shopify | sklep Shopify wdrożenie / programista Shopify | Shopify developer Poland |
| WordPress | poprawki WordPress / przyspieszenie strony WordPress | WordPress speed optimisation |
| Aplikacje React | programista React freelance / aplikacja webowa React | freelance React developer |
| Rails frontend | frontend developer Rails / Stimulus Hotwire developer | Rails frontend developer, Hotwire, Stimulus |
| Audyt | audyt szybkości strony / Core Web Vitals audyt | Core Web Vitals audit |

Jak sprawdzić frazy:
- **Google**: podpowiedzi w wyszukiwarce, sekcja „Podobne pytania” i wyniki konkurencji.
- **Search Console**: po starcie zakładka „Skuteczność”, czyli za jakie frazy już się wyświetlasz.

Zasady:
- **Lokalność** (PL): „Katowice”, „Śląsk”, „Gliwice”, „Tychy” naturalnie w tekście plus Google Business
  Profile. Lokalne firmy szukają „w pobliżu”.
- **Nie powtarzaj fraz na siłę.** Pisz dla ludzi; Google rozumie synonimy.
- **Linkowanie wewnętrzne**: usługa ↔ case study ↔ cennik ↔ kontakt (już jest w komponentach; pilnuj przy nowych treściach).

## 6. Widoczność w AI (ChatGPT, Perplexity, Gemini, Claude)

Asystenci AI cytują strony, które **jasno i konkretnie odpowiadają na pytania**. Dlatego:

- **FAQ pisz jako samodzielne odpowiedzi.** Pierwsze zdanie odpowiada wprost („Strona firmowa kosztuje od
  X zł netto”), dalej szczegóły. Każdą odpowiedź da się zacytować bez kontekstu.
- **Fakty zamiast ogólników**: liczby, nazwy, daty, lokalizacja. AI chętniej cytuje konkret.
- **Spójność wszędzie**: to samo imię, rola, miasto i opis na stronie, LinkedIn, GitHub, Google Business
  Profile, Clutch/Useme. Modele łączą te źródła.
- **`/llms.txt`** generuje się sam z treści: aktualne ceny i FAQ od razu tam trafiają.
- **Sprawdzaj co miesiąc**: zapytaj ChatGPT / Perplexity „freelance Next.js developer Katowice” albo
  „kto zrobi sklep Shopify na Śląsku” i zobacz, czy i jak Cię opisują.

## 7. Blog / notatki: po co i o czym

Blog nie jest obowiązkowy na start. Jeśli piszesz, to **2 wpisy w miesiącu** odpowiadające na pytania
klientów. Każdy wpis kończy się linkiem do usługi i briefu.

Propozycje tematów (PL, dla klientów):
1. Ile kosztuje strona internetowa dla firmy w 2026? (rozbicie ceny)
2. WordPress czy Next.js: co wybrać dla strony firmowej? (Twoja historia z nazielono.pro)
3. Dlaczego Twoja strona jest wolna i ile Cię to kosztuje (Core Web Vitals po ludzku)
4. Shopify czy WooCommerce dla małego sklepu w Polsce
5. Jak przygotować się do rozmowy z programistą: brief w 10 punktach
6. Co musi mieć strona firmowa, żeby Google ją pokazywał (checklista SEO)
7. Jak przyspieszyć sklep Shopify bez przepisywania motywu

Propozycje (EN, dla zespołów i rekruterów):
1. Stimulus + Tailwind in a large Rails app: lessons from a UK fintech redesign
2. Modernising a legacy create-react-app codebase without a rewrite
3. How I use Claude and MCP servers in daily frontend work
4. next-intl with localized slugs: a bilingual Next.js site done right

## 8. Dystrybucja: treść sama się nie obroni

- **LinkedIn** (najlepszy kanał dla Ciebie): każdy case study i wpis to 1–3 posty. Format: problem →
  decyzja → wynik → link. Posty po polsku dla lokalnych klientów, po angielsku dla zespołów.
- **Rekomendacje**: po każdym zleceniu poproś o rekomendację na LinkedIn i opinię w Google Business Profile.
- **Profile freelance** (Useme, Oferia, Clutch): ten sam opis i link do odpowiedniej strony usługi.
- **Podpis w mailu**: link do `/pl` albo do konkretnej usługi.

## 9. Proces pisania (żeby nie utknąć)

1. **Zbierz fakty** (liczby, zrzuty, cytat) zanim zaczniesz pisać.
2. **Napisz brzydką wersję PL** w 20 minut, bez poprawiania.
3. **Skróć o 30%.** Wytnij przymiotniki i zdania, które nie odpowiadają na „i co z tego?”.
4. **Napisz wersję EN osobno** dla jej odbiorcy (nie tłumacz zdanie po zdaniu).
5. **Przeczytaj na głos** i popraw miejsca, na których się zacinasz.
6. **Wklej** do `src/content/local/…`, sprawdź lokalnie (`pnpm dev`), obie wersje językowe.
7. Możesz poprosić Claude o redakcję, ale **fakty i liczby muszą być Twoje**.

## 10. Checklista przed publikacją treści

- [ ] Nie ma żadnego `[X]` ani `[PLACEHOLDER]` (`grep -rn "\[" src/content src/messages`).
- [ ] Każda liczba jest prawdziwa i da się ją pokazać.
- [ ] Każda opinia ma zgodę autora i link.
- [ ] Tytuł (max ~60 znaków) i opis meta (max ~155 znaków) zawierają główną frazę.
- [ ] Wersje PL i EN są kompletne i brzmią naturalnie.
- [ ] Każda strona kończy się jasnym krokiem: „Wyceń projekt” / brief.
- [ ] Zrzuty ekranu są ostre, aktualne i mają opis alternatywny (`alt`).
