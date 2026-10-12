# Plan wzrostu: widoczność w Google i AI + pozyskiwanie klientów

Stan na 12.10.2026: strona działa, Search Console i Bing zweryfikowane, mapa strony zgłoszona,
`llms.txt` i `robots.txt` wpuszczają boty AI. Gałąź `ui-corrections` czeka na merge.
Plan zakłada **ok. 5 godzin tygodniowo** obok etatu.

---

## Część A: widoczność (technicznie)

### Jak AI znajduje firmy (żeby wiedzieć, co robić)

| Asystent | Skąd bierze wiedzę o lokalnych firmach |
|---|---|
| ChatGPT (wyszukiwanie) | indeks **Binga** + własny bot `OAI-SearchBot` + źródła zewnętrzne (katalogi, opinie, artykuły) |
| Gemini, Google AI Overviews | indeks **Google** + **Profil Firmy w Google** (Mapy, opinie) |
| Perplexity | własny bot + Bing/Google, mocno cytuje strony z jasnymi odpowiedziami i liczbami |
| Claude (wyszukiwanie) | wyniki **Brave Search** + `ClaudeBot` |
| Copilot | **Bing** + Bing Places |

Wnioski:
1. **Wizytówki i opinie** (Google, Bing Places, Apple) to dla zapytań lokalnych źródło numer 1.
2. **Wzmianki na innych stronach** ważą więcej niż sama Twoja strona. AI poleca firmy, o których
   „mówi” internet: katalogi, rankingi, artykuły, profile.
3. **Strona ma odpowiadać wprost**: cena, czas, obszar działania, dla kogo. To już masz (FAQ,
   cennik, strona Katowice).

### Krok 1: fundamenty (tydzień 1–2)

- [ ] **Merge `ui-corrections`**, potem `scripts/smoke.sh` na produkcji.
- [ ] **Profil Firmy w Google** jako firma działająca na obszarze (bez publicznego adresu):
  kategoria „Projektant stron internetowych”, obszar Katowice + okoliczne miasta, link do
  `https://www.mjaniec.it/pl/strony-internetowe/katowice`, 5–10 zdjęć (zrzuty realizacji, Ty przy
  pracy), opis z usługami. Weryfikacja trwa od kilku dni do 2 tygodni.
- [ ] **Bing Places** (import z Google) i **Apple Business Connect**: 15 min każde.
- [ ] **Spójne dane (NAP)** wszędzie: „Michał Janiec”, ten sam e-mail, ten sam adres URL, ten sam
  opis w jednym zdaniu. Pilnuj tego w każdym nowym profilu.
- [ ] **Analityka konwersji**: włącz Vercel Analytics (albo Plausible) i licz wysłane briefy jako
  zdarzenie. Bez tego nie wiadomo, co działa. *(Do zrobienia w kodzie.)*
- [ ] **IndexNow** dla Binga: nowa i zmieniona strona trafia do indeksu w godziny, nie tygodnie.
  Bing zasila ChatGPT i Copilota. *(Do zrobienia w kodzie.)*
- [ ] **`llms.txt` po polsku** + strona Katowice i nowe usługi w pliku. *(Do zrobienia w kodzie.)*

### Krok 2: audyt techniczny co miesiąc (30 min)

Narzędzia darmowe, w tej kolejności:

1. **Google Search Console → Strony i Skuteczność**: co się zaindeksowało, na jakie frazy się
   pokazujesz, CTR. Strony „Wykryta, nie zindeksowana” to sygnał do poprawy treści lub linkowania.
2. **Bing Webmaster Tools → Site Scan** (darmowy crawler, raport błędów SEO) i **Search
   Performance**.
3. **Ahrefs Webmaster Tools** (darmowe po weryfikacji domeny): audyt strony i linki przychodzące.
4. **PageSpeed Insights** dla `/pl` i jednej usługi: wynik mobilny i Core Web Vitals z realnych
   użytkowników (pojawią się, gdy będzie ruch).
5. **Rich Results Test** dla strony usługi i Katowic (FAQ, okruszki).
6. `scripts/smoke.sh` po każdym wdrożeniu.

Opcjonalnie: **Screaming Frog** (darmowy do 500 adresów) raz na kwartał.

### Krok 3: treści, które cytuje AI (2 wpisy miesięcznie)

Format: konkretne pytanie w tytule, odpowiedź w pierwszym akapicie, liczby, tabela, FAQ, data
aktualizacji. Pomysły (PL, intencja zakupowa):

1. Ile kosztuje strona internetowa dla małej firmy w 2026? (widełki, od czego zależy)
2. Strona-wizytówka czy pełna strona firmowa: co wybrać?
3. WordPress działa wolno: 7 przyczyn i co z tym zrobić
4. Next.js czy WordPress dla strony firmowej: porównanie dla właściciela firmy
5. Jak założyć i uzupełnić Profil Firmy w Google (krok po kroku)
6. Sklep na Shopify czy WooCommerce: koszty po roku
7. Ile kosztuje Google Ads dla lokalnej firmy i kiedy ma sens
8. Checklista przed zamówieniem strony: 12 pytań do wykonawcy
9. Jak sprawdzić, czy strona działa dobrze na telefonie (darmowe narzędzia)
10. Case study z liczbami z pierwszego nowego klienta

Każdy wpis linkuje do jednej usługi i do strony Katowice. *(Blog do zbudowania: trasa
`/pl/blog` ↔ `/en/notes`.)*

### Krok 4: wzmianki zewnętrzne (stale, 1 h tygodniowo)

- Profile: **LinkedIn** (sekcja Usługi + post o nowej stronie), **Clutch**, **Useme**, **Oferia**,
  **GoodFirms**, **Panorama Firm**, **Aleo**, **pkt.pl**: każdy z linkiem i tym samym opisem.
- **Opinie**: poproś nazielono.pro i jemWszkole.pl o opinię w Google, gdy wizytówka będzie aktywna.
  Opinie z treścią („zrobił stronę w Next.js, szybko, kontakt super”) pomagają też AI.
- **Artykuł gościnny / wywiad**: lokalne portale biznesowe, blog agencji partnerskiej, Silesia
  meetupy. Jeden porządny tekst z linkiem jest wart więcej niż 20 katalogów.
- **GitHub**: przypięty projekt i README z linkiem do strony.

### Krok 5: mierzenie widoczności w AI (raz w miesiącu, 20 min)

Arkusz z 10 zapytaniami zadawanymi w ChatGPT, Perplexity, Gemini i Claude. Notuj, czy pojawiasz się
Ty, i kto zamiast Ciebie:

- „kto robi strony internetowe w Katowicach”
- „polecany freelancer Next.js Polska”
- „ile kosztuje strona internetowa dla firmy Katowice”
- „programista Shopify Śląsk”
- „naprawa wolnego WordPressa Katowice”
- „frontend developer Rails Polska freelance”
- „strona internetowa dla gabinetu fizjoterapii Katowice”
- „Michał Janiec frontend” (czy AI wie, kim jesteś)
- „audyt szybkości strony cena”
- „SEO i Google Ads dla małej firmy Śląsk”

Konkurenci, którzy się pojawiają, pokazują, skąd AI ich zna. Idź w te same miejsca.

---

## Część B: pozyskiwanie klientów (metodyka)

### Zasada: proces, nie wynik

Nie da się zaplanować, że ktoś kupi. Da się zaplanować, ile **rozmów zaczniesz**. Cel tygodniowy
liczysz w działaniach (np. 10 kontaktów), nie w klientach. To zdejmuje presję i nieśmiałość: każda
odmowa to wykonany punkt planu, nie porażka.

### Lejek i liczby startowe (do korekty po miesiącu)

| Etap | Na miesiąc |
|---|---|
| Nowe kontakty (ciepłe + lokalne + partnerzy) | 40 |
| Odpowiedzi / rozmowy | 8–10 |
| Wyceny | 3–4 |
| Wygrane | 1 |

Prowadź to w prostym arkuszu lub Notion: firma, źródło, etap (znaleziony → kontakt → odpowiedź →
rozmowa → wycena → wygrany/przegrany), data następnego kroku, notatka.

### Kolejność kanałów: od najłatwiejszego do najtrudniejszego

1. **Ciepła sieć (tydzień 1–2).** Najmniej stresu, najwyższa skuteczność. Lista 30 osób: znajomi
   z własną firmą, rodzina, byli współpracownicy, ludzie z siłowni czy meetupów. Krótka wiadomość:
   „ruszyłem z nową stroną, robię strony i sklepy dla małych firm; jeśli znasz kogoś, komu
   przyda się pomoc, będę wdzięczny za polecenie”. Prosisz o polecenie, nie sprzedajesz.
2. **Partnerzy (stale).** Agencja SEO/SEM (już masz), graficy, fotografowie, biura rachunkowe,
   copywriterzy. Jeden partner = wielu klientów. Zaproponuj prowizję za polecenie (np. 10 %).
3. **Platformy (tydzień 2+).** Useme / Oferia: kilka małych zleceń szybko daje pierwsze opinie
   i case studies.
4. **Lokalne firmy, kontakt bezpośredni (tydzień 3+).** Opis niżej.
5. **LinkedIn**: 2 posty tygodniowo (realizacja, porada, kulisy), zaproszenia do właścicieli firm
   z regionu z krótką, niesprzedażową notką.

### Kontakt z lokalnymi firmami: metoda „najpierw wartość”

**Ważne prawnie:** w Polsce wysyłanie ofert handlowych **mailem lub SMS-em oraz telefony
marketingowe bez wcześniejszej zgody** są zakazane, także do firm (Prawo komunikacji
elektronicznej). Bezpieczne są: **wizyta osobista**, rozmowa przy okazji, polecenie, odpowiedź na
ich ogłoszenie. Mailem lub telefonicznie najpierw **pytasz o zgodę** na przesłanie propozycji, bez
treści handlowej. To nie jest porada prawna; w razie wątpliwości warto to potwierdzić u prawnika.

**1. Wybór firm (30 min w tygodniu).** Google Maps, Twoje okolice (Ligota, Brynów, Śródmieście…).
Szukasz sygnałów:
- brak strony albo tylko Facebook;
- strona nie działa dobrze na telefonie;
- wynik PageSpeed (mobile) poniżej 50;
- stary rok w stopce, brak HTTPS;
- słaba albo nieuzupełniona wizytówka Google.

Zapisz 10 firm.

**2. Mini-audyt na 1 stronie (15 min na firmę).** Zrzut strony na telefonie, wynik PageSpeed,
3 konkretne rzeczy do poprawy i jedno zdanie, co by to dało („klient z telefonu nie widzi numeru
telefonu bez przewijania”). Bez ceny. To jest pretekst do rozmowy i od razu dowód kompetencji.
*(Można zautomatyzować skryptem: lista adresów → wynik PageSpeed + zrzut ekranu.)*

**3. Drabina oswajania (przeciw nieśmiałości).** Każdy szczebel robisz kilka razy, zanim pójdziesz
wyżej:

| Szczebel | Co robisz | Dlaczego łatwiej |
|---|---|---|
| 1 | Rozmowa w miejscach, gdzie **już jesteś klientem** (fryzjer, fizjo, kawiarnia, mechanik) | znacie się, naturalny temat |
| 2 | Wizyta z wydrukowanym audytem w **spokojnej porze** (np. wt–czw, 10–11 lub 14–15) | masz kartkę w ręku: rozmowa toczy się wokół niej, nie wokół Ciebie |
| 3 | Wiadomość przez Messengera/Instagram firmy z pytaniem o zgodę na przesłanie audytu | brak kontaktu na żywo |
| 4 | Telefon z pytaniem o zgodę na przesłanie audytu | najtrudniejsze, na koniec |

**4. Skrypt wizyty (do wydruku i przećwiczenia na głos 3 razy).**

> „Dzień dobry, nazywam się Michał, robię strony internetowe tu, w Katowicach. Nie chcę
> zabierać czasu: sprawdziłem Waszą stronę na telefonie i przygotowałem krótką kartkę z trzema
> rzeczami, które warto poprawić, bo przez nie część klientów może rezygnować. Zostawię ją, jest za
> darmo. Gdyby chcieli Państwo o tym porozmawiać, na dole jest mój kontakt.”

Jeśli jest zainteresowanie: „Mogę opowiedzieć w 2 minutach, co bym zrobił najpierw”. Jeśli „nie,
dziękuję”: „Jasne, kartkę zostawiam, miłego dnia”. Wychodzisz. To też jest sukces: punkt z planu.

**5. Rozgrzewka i nawyki (praktyczne sposoby na nieśmiałość):**
- Cel na dzień to **liczba wejść** (np. 3), nie sprzedaż. Po 3 wejściach koniec, nawet jeśli było
  dobrze.
- Pierwsza wizyta dnia w miejscu „łatwym” (gdzie jesteś klientem): rozgrzewka.
- Kup coś drobnego (kawa) i zacznij rozmowę przy okazji: naturalny pretekst.
- Ubierz się normalnie, nie „na sprzedawcę”. Jesteś sąsiadem, który zna się na stronach.
- Po każdej wizycie 1 zdanie w arkuszu: co zadziałało. Po 10 wizytach przepisz skrypt.
- Możesz zacząć w parze ze znajomym (np. fotografem lub grafikiem jako partnerem).

**6. Follow-up.** Tylko jeśli ktoś wyraził zgodę na kontakt: dzień 3 (mail z audytem w PDF),
dzień 10 (krótkie przypomnienie z jednym pomysłem), potem odpuść. Nie dzwoń bez zgody.

### Oferta „na wejście”, łatwa do powiedzenia „tak”

- **Bezpłatny mini-audyt** (to, co zostawiasz na kartce).
- **Pakiet lokalny**: strona-wizytówka + uzupełniona wizytówka Google, cena stała **[do ustalenia]**.
  Łatwiej powiedzieć „tak” stałej cenie niż „od 500 zł”.
- **Poprawki na start**: 3 największe problemy z audytu naprawione w ustalonej cenie.

### Rytm tygodnia (~5 h)

| Kiedy | Co | Czas |
|---|---|---|
| Poniedziałek wieczór | wybór 10 firm + mini-audyty (skrypt) | 1,5 h |
| Wtorek / czwartek w ciągu dnia (przerwa, dzień z pracy z domu) | 3–5 wizyt lub wiadomości z prośbą o zgodę | 1,5 h |
| Środa | 2 wiadomości do ciepłej sieci lub partnerów + 1 post na LinkedIn | 1 h |
| Piątek | arkusz: co zadziałało, następne kroki, follow-upy | 0,5 h |
| Raz w miesiącu | audyt SEO + test widoczności w AI + 2 wpisy na blog | 2–3 h |

### Przegląd po 30 i 90 dniach

- Po 30 dniach: które źródło dało rozmowy? Zostaw 2 najlepsze, resztę ogranicz.
- Po 90 dniach: koszt czasu na jednego klienta, średnia wartość zlecenia, czy podnieść ceny.
- Każdy wygrany projekt: zrób z niego case study z liczbami i poproś o opinię w Google.

---

## Co mogę zrobić w kodzie od razu (po merge)

1. IndexNow (klucz + powiadomienie Binga przy wdrożeniu).
2. `llms.txt` po polsku + strona Katowice + nowe usługi; osobny `llms-full.txt` z FAQ usług.
3. Vercel Analytics + zdarzenie „brief wysłany”.
4. Skrypt do mini-audytów: lista adresów → PageSpeed (mobile) + zrzut ekranu z telefonu + PDF.
5. Szkielet bloga (`/pl/blog` ↔ `/en/notes`) z pierwszym wpisem „Ile kosztuje strona internetowa”.
6. Arkusz do śledzenia widoczności w AI i lejka (szablon CSV).
