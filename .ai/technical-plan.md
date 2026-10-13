# mjaniec.it — skonsolidowany plan techniczny dla agenta kodowania

> **Wersja:** 1.0  
> **Data:** 2026-10-13  
> **Projekt:** istniejąca witryna `mjaniec.it` oparta na Next.js  
> **Adresy referencyjne:** `https://www.mjaniec.it/`, `/pl`, `/en`  
> **Status:** specyfikacja do audytu i etapowego wdrożenia; **nie jest zgodą na produkcyjny deploy**  
> **Zakres:** architektura, routing i i18n, metadata i indeksowanie, dane strukturalne, integracje/API, bezpieczeństwo, testy, wydajność, dostępność, obserwowalność.

## 0. Instrukcja nadrzędna dla agenta

Pracujesz **na istniejącym repozytorium**. Nie buduj projektu od nowa, nie zmieniaj frameworka i nie refaktoruj całej struktury katalogów tylko po to, by odpowiadała przykładom z tego pliku.

**Tryb pracy:** `INSPECT → REPORT → PROPOSE → APPROVE → IMPLEMENT → VERIFY`. Pierwszy PR jest wyłącznie audytowy. Kolejne implementacje wymagają zatwierdzenia zakresu PR-u przez właściciela. Nie wykonuj deploya produkcyjnego, migracji DNS/hostingu, zakupów usług, zmian uprawnień ani zmian w systemach zewnętrznych bez odrębnej zgody.

Reguły obowiązkowe:

- [ ] Zbadaj stan repozytorium przed doborem rozwiązania; **fakty oddzielaj od hipotez**.
- [ ] Zachowaj istniejące, publiczne adresy i ich zawartość; nie twórz duplikatów stron.
- [ ] Nie zmieniaj treści oferty, deklaracji, danych osobowych ani cenników. W tym planie **nie ma zadań copywriterskich**.
- [ ] Zachowaj obecny UI, design system, zachowania formularza i obsługę mobile, o ile naprawa konkretnego błędu tego nie wymaga.
- [ ] Stosuj minimalny diff i istniejące konwencje projektu. Nie instaluj bibliotek bez dowodu, że rozwiązanie natywne/obecne jest niewystarczające.
- [ ] Nie dodawaj bazy danych, CMS, kolejki, CRON-a, nowego formularza, endpointu ani osobnej usługi backendowej domyślnie.
- [ ] Zmiany w routingu, canonical, sitemap, robots i `X-Robots-Tag` traktuj jako zmiany podwyższonego ryzyka: osobna weryfikacja przed merge.
- [ ] Każdy PR dostarcza: listę plików, uzasadnienie, zakres, testy, ocenę ryzyka i procedurę rollbacku.
- [ ] Jeśli brakuje dostępu do repo, środowiska, GSC lub hostingu — oznacz zadanie `BLOCKED` z konkretną przyczyną; nie raportuj go jako wykonanego.

### Hierarchia prawdy

1. Kod, rzeczywista konfiguracja deploymentu i odpowiedzi serwera.
2. Automatyczne testy i powtarzalne pomiary HTTP/HTML.
3. Decyzje właściciela z sekcji 1.
4. Oba dostarczone plany jako źródło proponowanych zadań, **nie jako dowód aktualnego stanu repozytorium**.
5. Oficjalna dokumentacja wersji faktycznie zainstalowanych frameworków i usług.

## 1. Decyzje architektoniczne — ZATWIERDZONE

| ID | Decyzja | Konsekwencja dla implementacji |
|---|---|---|
| ADR-001 | `/` zawsze i trwale przekierowuje do `/pl` | Bez GeoIP, `navigator.language`, `Accept-Language` ani detekcji języka dla `/`. Zachować `/en` jako osobny dostępny wariant. |
| ADR-002 | Pozostają istniejące strony usług; nowa ogólna strona wsparcia jest tylko opcją po audycie | Nie tworzyć odrębnych, konkurencyjnych ścieżek WordPress/Shopify z drugiego planu. |
| ADR-003 | Nowe strony **PL-first** | Wersja EN tylko przy rzeczywistym odpowiedniku; żadnych pustych ani automatycznych stron EN. |
| ADR-004 | Dopuścić crawlery wyszukiwania AI, ograniczyć crawlery do treningu modeli | Jawna polityka `robots.txt` + kontrola faktycznej dostępności; wyjątek `Google-Extended` opisany w sekcji 7. |
| ADR-005 | Minimalna ingerencja w obecny system | Zachować istniejący router, stack, model danych, hosting i integracje, jeśli audyt nie wykaże konkretnego błędu. |

**Ważny warunek brzegowy ADR-004:** `Google-Extended` łączy kontrolę użycia do treningu Gemini **oraz** określonych mechanizmów grounding w Gemini. Nie da się tym tokenem rozdzielić obu zastosowań. Dlatego **agent nie ustawia automatycznie `Disallow: /` dla `Google-Extended`**. Oznacza ten punkt jako `DECISION_REQUIRED` (zob. sekcja 7), a resztę zatwierdzonej polityki może przygotować niezależnie. To świadomy wyjątek techniczny, nie przyzwolenie na ignorowanie ADR-004.

## 2. Stan wiedzy i rzeczy niepotwierdzone

**Wynika z dostarczonych planów / ustaleń w rozmowie:**

- Aplikacja działa w Next.js; docelowo stosujemy warianty językowe `/pl` i `/en`.
- Plan pierwotny wskazuje istniejące strony: `/pl/strony-internetowe/katowice`, `/pl/uslugi/strona-internetowa-dla-firmy`, `/pl/uslugi/wordpress`, `/pl/realizacje/nazielono-pro`.
- W poprzednim rozpoznaniu wskazano stronę Shopify `/pl/uslugi/sklepy-shopify` — **zweryfikuj istnienie i faktyczny route**, zanim potraktujesz go jako pewny.
- Kandydat do utworzenia **po osobnej akceptacji**: `/pl/uslugi/wsparcie-techniczne`.

**Niepotwierdzone i do odczytu z repo / środowiska:** dokładna wersja Next.js, App Router lub Pages Router, wersja React/TypeScript, package manager, strategia i18n, platforma hostingowa, obecne canonical/hreflang, `robots.txt`, sitemap, schema.org, strategia renderingu, formularz/backend, API routes, użycie CMS, analityka, testy, CI, CSP/WAF, dostęp do GSC i metryk RUM.

**Zakaz:** nie pisz w raporcie, że jakikolwiek element jest popsuty tylko dlatego, że brak dostępu do niego z narzędzia audytującego.

## 3. Docelowe granice architektury i dobór technologii

### 3.1 Decyzje domyślne

| Obszar | Zasada | Warunek odstępstwa |
|---|---|---|
| Aplikacja | Obecny Next.js + istniejący React/TypeScript | Potwierdzony błąd lub blokada techniczna; osobna zgoda na dużą migrację |
| Routing | Istniejący App Router **albo** Pages Router, zależnie od repo | Żadnej migracji App/Pages w ramach tych poprawek |
| Renderowanie | Preferuj wstępnie wygenerowany lub serwerowo renderowany HTML dla publicznych stron | Dynamika tylko tam, gdzie wymagana funkcjonalnie |
| Metadata | Natywne API Next.js w App Router; odpowiednie mechanizmy `next/head` w Pages Router | Nowa biblioteka dopiero po udokumentowaniu braku możliwości |
| Walidacja | Obecny mechanizm; walidacja także po stronie serwera | Nowa biblioteka (np. Zod) tylko jeśli nie ma wystarczającego rozwiązania |
| Dane | Obecne źródło treści/konfiguracji | Bez nowej bazy, ORM, migracji i konta admina |
| Analityka | Zachowaj istniejące narzędzie i konfigurację zgód | Nowy dostawca tylko po osobnym uzgodnieniu |
| Testy | Obecny runner + testy HTTP/HTML i smoke E2E | Playwright można zaproponować, jeśli nie istnieje narzędzie testujące krytyczne ścieżki |
| Hosting | Obecna platforma i pipeline | Bez samodzielnych zmian infrastrukturalnych |

Nie aktualizuj Next.js/React do najnowszych wersji „przy okazji” — osobny PR i ocena kompatybilności, jeśli audyt pokaże potrzebę (np. security advisory).

### 3.2 Logiczne moduły (nie nakaz struktury katalogów)

```text
Public HTTP
  ├── Routing / i18n / permanent redirects
  ├── Page rendering (PL / EN)
  │    ├── Existing pages + reusable presentation components
  │    └── Existing content source / CMS (if present)
  ├── SEO layer
  │    ├── URL + canonical helpers
  │    ├── Metadata + hreflang
  │    ├── Sitemap + robots
  │    └── Structured data (JSON-LD)
  ├── Contact boundary (current API route / Server Action / external form)
  └── Observability + regression tests
```

**Opcjonalny przykład organizacji nowych modułów** (dopasuj do rzeczywistej struktury; nie przenoś działającego kodu bez potrzeby):

```text
src/
  lib/
    seo/
      canonical.ts
      metadata.ts
      alternates.ts
      structured-data.ts
    routing/
      public-routes.ts
      locale-paths.ts
    security/
      contact-validation.ts
  components/
    services/
      ServicePageLayout.tsx
    seo/
      JsonLd.tsx
  app/                 # only if App Router already exists
    robots.ts          # only if compatible with existing approach
    sitemap.ts
```

Unikaj równoległych źródeł prawdy: route manifest (o ile powstaje) ma zawierać **wyłącznie realne, opublikowane URL-e**, a sitemap/alternates powinny czerpać z niego te same ścieżki. Jeśli obecny projekt ma dobre centralne dane routingu, wykorzystaj je zamiast tworzyć drugi manifest.

### 3.3 Model danych i baza danych

- [ ] Sprawdź, czy istnieje baza i do czego służy; nie usuwaj jej ani nie przepisuj.
- [ ] **Brak nowych tabel i migracji** dla metadanych, sitemap, usług, tłumaczeń lub zdarzeń formularza w ramach tego planu.
- [ ] Jeśli dane są plikowe/CMS, zachowaj aktualny system i istniejące typowanie / schematy.
- [ ] Jeśli struktura strony usługowej wymaga współdzielonych typów, wydziel typy `ServicePageConfig`, `SeoMetadata`, `LocaleAlternate` **tylko jeśli repo tego jeszcze nie posiada**.
- [ ] Dane publiczne (np. JSON-LD, nazwy usług) muszą odpowiadać zweryfikowanym treściom. Żadnych wymyślonych rekordów ani migracji „na zapas”.
- [ ] Jeśli formularz wymaga trwale współdzielonego rate limitu, najpierw sprawdź możliwości istniejącej platformy; zewnętrzny magazyn/Redis wyłącznie po osobnej akceptacji.

## 4. Routing, języki i adresy (P0)

### TECH-001 — Inwentaryzacja routingu, HTTP i HTML

- [ ] Odczytaj `README`, lockfile, `package.json`, `next.config.*`, `tsconfig.*`, katalogi `app/` i/lub `pages/`, `middleware.*`/`proxy.*`, `vercel.json`/`netlify.toml`/konfigurację platformy, routes API i konfigurację CI.
- [ ] Zbuduj listę publicznych URL-i: locale, typ strony, źródło routingu, status, final destination, indexability, obecność HTML, H1, canonical, hreflang, meta robots, title, description, OG/Twitter, linkowanie wewnętrzne.
- [ ] Zmierz redirect chains i sprawdź warianty `http/https`, `www/non-www`, `/`, `/pl`, `/en`, trailing slash oraz nieistniejące ścieżki.
- [ ] Zapisz stan *przed zmianami* w `docs/SEO_AUDIT_REPORT.md` (lub obecnej lokalizacji dokumentacji).

**DoD:** tabela URL → HTTP → canonical → hreflang → robots → H1 → render mode, z odtwarzalnymi dowodami i rozdzieleniem `PASS`/`FAIL`/`UNKNOWN`.

### TECH-002 — Stały redirect `/` do `/pl`

- [ ] Jeśli obecnie działa poprawny, trwały pojedynczy redirect na `/pl`, **nie zmieniaj implementacji**.
- [ ] W przeciwnym razie użyj najprostszego mechanizmu zgodnego ze stackiem: istniejącej reguły na hostingu / `redirects()` w `next.config.*` / routingu serwerowego. **Nie dodawaj middleware/proxy wyłącznie dla jednej statycznej reguły.**
- [ ] W Next.js `redirects()` z `permanent: true` zwykle zwraca **308** — jest poprawnym trwałym redirectem; pierwotny plan pisał o 301, ale nie wymuszaj statusu 301 zamiast 308.
- [ ] Nie stosuj automatycznej geolokalizacji, języka przeglądarki, cookie locale ani client-side JS do wyboru docelowej strony po wejściu na `/`.
- [ ] Link z przełącznika EN prowadzi do istniejącego `/en` lub rzeczywistego odpowiednika pod `/en/...`; bez odbicia użytkownika do `/pl`.
- [ ] Sprawdź, czy nie istnieją dwa redirecty na kolejnych warstwach CDN/Next.

**Oczekiwane zachowanie:**

| Request | Oczekiwany wynik |
|---|---|
| `GET /` | trwały redirect **301 albo 308**, `Location: /pl` (lub pełny prawidłowy URL); jeden hop |
| `GET /pl` | `200`, polski HTML, brak wymuszonego redirectu wg nagłówka językowego |
| `GET /en` | `200`, angielski HTML (jeśli istnieje w projekcie), brak automatycznego redirectu na PL |
| `GET /pl/...` | istniejąca strona działa pod dawnym adresem |
| Nieistniejący URL | prawidłowe `404`, bez soft-404 / redirectu wszystkich błędów na `/pl` |

### TECH-003 — Canonical, hreflang, metadata oraz `lang`

- [ ] Wybierz jeden **kanoniczny origin** (schemat + host) dopiero po sprawdzeniu redirectów i obecnego indeksowania. Nie zakładaj automatycznie, że canonical powinien być `www` albo non-`www`.
- [ ] Dla każdej indeksowalnej podstrony generuj URL canonical odpowiadający **tej samej stronie i tej samej wersji językowej**; uwzględnij trailing slash wg konfiguracji.
- [ ] `canonical`, wewnętrzne linki i sitemap muszą wskazywać końcowe, prawidłowe URL-e `200` (bez łańcuchów przekierowań).
- [ ] Generuj `hreflang` tylko dla realnych, odpowiednich stron PL/EN; linki muszą być **wzajemne**, obejmować również bieżącą wersję i prowadzić do indeksowalnych URL-i.
- [ ] Gdy nowa strona jest wyłącznie PL, **nie twórz sztucznego `en` alternatu**. Link przełącznika języka nie może prowadzić do `404`.
- [ ] Nie wskazuj `/` jako angielskiego alternatu: `/` przekierowuje na `/pl`. `x-default` jest opcjonalny; jeśli używany, wskaż przemyślaną stronę zapasową (domyślnie `/pl`), nie zakładaj, że redirect `/` jest osobną wersją językową.
- [ ] Sprawdź `html lang="pl"` na PL i `html lang="en"` na EN, semantykę `main`, nagłówków, breadcrumbs i metadanych Open Graph.
- [ ] Zachowaj aktualne tytuły/opisy, jeśli są poprawne; nie przepisywać copy bez zgody. Gdy brakuje wartości, oznacz potrzebę uzupełnienia — nie generuj niepotwierdzonych claimów.
- [ ] W App Router preferuj `metadata` / `generateMetadata`, `metadataBase` i `alternates`; w Pages Router zachowaj istniejący mechanizm `Head` i unikaj duplikatów w `<head>`.

**DoD:** automatyczne testy wykrywają sprzeczny/zdublowany canonical, brakujące wzajemne alternates i błędy językowe; każda strona indeksowalna ma poprawny finalny canonical.

## 5. Sitemap, robots i indeksowanie (P0)

### TECH-004 — Sitemap / crawling

- [ ] Sprawdź rzeczywistą odpowiedź `GET /sitemap.xml` i `GET /robots.txt`: status, MIME type, zawartość, nagłówki cache i wynik po redirectach.
- [ ] Inwentaryzuj istniejące sitemapy, generatory i konfigurację CMS; nie wprowadzaj duplikatów.
- [ ] Jeśli jest App Router i brak prawidłowego rozwiązania, rozważ natywne `app/sitemap.ts` i `app/robots.ts`. W Pages Router użyj rozwiązania zgodnego z aktualną architekturą.
- [ ] Sitemap: tylko kanoniczne, indeksowalne URL-e zwracające `200`; brak `/`, jeśli jest wyłącznie redirectem; brak `noindex`, preview, API i `404`.
- [ ] Dla stron PL-only dodaj tylko PL; dla realnych par PL/EN zachowaj spójne alternates, jeśli projekt emituje je w sitemap (nie wdrażaj konkurencyjnych, niespójnych systemów hreflang).
- [ ] `lastModified` wpisuj tylko gdy istnieje wiarygodne źródło zmian; nie ustawiaj codziennie aktualnej daty dla statycznej strony bez zmian.
- [ ] Sprawdź poprawność `meta robots` i `X-Robots-Tag` na prod i preview; preview/staging nie powinny być publicznie indeksowane. Nie blokuj przypadkowo produkcyjnych podstron usługowych.
- [ ] Nie blokuj zasobów CSS/JS i obrazów potrzebnych robotom do renderowania.
- [ ] Sprawdź, czy hosting/WAF/bot protection nie serwuje crawlerom challenge/403/429; nie obniżaj globalnych zabezpieczeń tylko po to, by przepuścić ruch od dowolnego User-Agent.

**DoD:** sitemap jest prawidłowym XML-em, lista URL-i pokrywa się z indeksem stron i canonical, robots nie blokuje publicznych treści, preview nie trafia do indeksu.

## 6. Strony usługowe, komponenty i dane strukturalne (P1/P2)

### TECH-005 — Zachowanie stron i spójność tras

- [ ] Najpierw ustal realne ścieżki usług (WordPress, Shopify, strony dla firm, aplikacje) z repo i odpowiedzi HTTP.
- [ ] **Nie twórz** bezpośrednio `/pl/wsparcie-techniczne-wordpress`, `/pl/naprawa-stron-wordpress`, `/pl/programista-shopify` ani `/pl/tworzenie-sklepow-shopify` tylko dlatego, że pojawiły się w drugim źródle.
- [ ] Zachowaj istniejący `/pl/uslugi/wordpress` i faktyczną stronę Shopify; popraw jedynie potwierdzone błędy techniczne.
- [ ] Sprawdź linki na stronie głównej, w nawigacji, stopce, realizacjach, breadcrumbs i między usługami; brak martwych adresów i stron osieroconych.
- [ ] Unikaj edycji treści, poza techniczną poprawką konieczną do wyświetlenia semantycznego HTML. Wymagający copy problem opisz jako osobny ticket (poza tym planem).

### TECH-006 — **Opcjonalna** ogólna strona wsparcia

**Kandydat:** `/pl/uslugi/wsparcie-techniczne` — **nie tworzyć automatycznie**.

Warunki uruchomienia zadania:

- [ ] Audyt potwierdza, że istniejący URL nie realizuje tej roli i nowa ścieżka nie duplikuje WordPress/Shopify.
- [ ] Właściciel osobno akceptuje utworzenie strony oraz dostarcza/akceptuje faktyczne dane do jej zawartości.
- [ ] Agent przedstawia dokładną listę nowych plików i komponentów; bez nowego systemu routingu i bez nowej bazy.

Po zatwierdzeniu:

- [ ] Wykorzystaj istniejące layouty, style, komponenty FAQ/CTA i mechanizm routingu.
- [ ] Dodaj **wyłącznie PL**: page route, metadata, canonical, H1, breadcrumbs i linki wewnętrzne.
- [ ] Dodaj nowy URL do sitemap dopiero gdy gotowa, indeksowalna strona zwraca `200`.
- [ ] Nie twórz `en` ani jego hreflang bez gotowej wersji językowej.
- [ ] Sprawdź brak konfliktów tras, test responsywności, semantyczny HTML i działanie ścieżki kontaktu.

**DoD:** odrębny i działający URL tylko po akceptacji; brak dublowania istniejących stron i regresji nawigacji.

### TECH-007 — JSON-LD

- [ ] Audytuj obecne `<script type="application/ld+json">` i sprawdź walidację danych.
- [ ] Używaj danych strukturalnych tylko zgodnych z rzeczywiście widoczną i zweryfikowaną treścią.
- [ ] Rozważ `Person`, `Organization`, `Service`, `BreadcrumbList` zgodnie z rzeczywistymi właściwościami i strukturą; nie dodawaj wszystkich typów mechanicznie.
- [ ] `LocalBusiness` wyłącznie po potwierdzeniu poprawnych danych i spełnieniu wymagań. Bez wymyślonych adresów, godzin, opinii, ratingów, cen czy certyfikatów.
- [ ] Jeśli serializujesz obiekty do JSON-LD w JSX, zabezpiecz zawartość przed wstrzyknięciem HTML (np. escapowanie znaku `<` do `\u003c`) i nie serializuj danych niezweryfikowanych.
- [ ] Przeprowadź walidację JSON i porównaj markup z widocznymi elementami strony. Rich results nie są gwarantowane.

**DoD:** brak błędów składni/sprzecznych duplikatów JSON-LD; dane źródłowe zgodne z treścią strony.

## 7. Roboty AI: search tak, training ograniczony (P0/P1)

### TECH-008 — Reguły i kontrola dostępności

| Rodzina | Token / mechanizm | Docelowa polityka | Uwaga implementacyjna |
|---|---|---|---|
| OpenAI search | `OAI-SearchBot` | **ALLOW** | Sprawdź także WAF/IP; nie wystarczy sam robots.txt. |
| OpenAI training | `GPTBot` | **DISALLOW** | `Disallow: /` w odrębnej grupie User-Agent. |
| Google Search | `Googlebot` | **ALLOW** dla publicznych stron | Nie blokować indeksowania. |
| Bing Search | `Bingbot` | **ALLOW** dla publicznych stron | Nie blokować indeksowania. |
| Perplexity search | `PerplexityBot` | **ALLOW** | Według dokumentacji dostawcy służy wynikom wyszukiwania, nie crawlom treningowym. |
| Anthropic / Claude | `ClaudeBot`, `Claude-SearchBot` i ewentualne pozostałe UA | **Rozdziel training/search po sprawdzeniu aktualnej oficjalnej dokumentacji** | Nie blokuj robota wyszukiwania na podstawie podobnej nazwy. |
| Google / Gemini | `Google-Extended` | **DECISION_REQUIRED — patrz niżej** | Jeden token reguluje trening i określony grounding. |

**Google-Extended — nierozstrzygnięty kompromis techniczny:**

- Wariant G1: `Disallow: /` — ogranicza wykorzystanie w treningu Gemini, ale **również** w części zastosowań grounding Gemini; **potencjalnie koliduje z celem dostępności dla wyszukiwania AI**.
- Wariant G2: pozostawienie dostępu — zachowuje możliwość grounding, ale **nie realizuje ograniczenia użycia do treningu Gemini** tym mechanizmem.
- **Stan wykonawczy:** nie zmieniaj konfiguracji `Google-Extended` do osobnej decyzji właściciela. Pozostałe zmiany nie są blokowane tą decyzją.

Dalsze zasady:

- [ ] Zbadaj obecną politykę wszystkich User-Agent; nie nadpisuj działających reguł i nie kasuj ograniczeń dla ścieżek prywatnych/technicznych.
- [ ] Jeśli istnieje grupa `User-agent: *` z wykluczeniami, przy tworzeniu grup specyficznych **zachowaj ograniczenia odpowiednich ścieżek**: bardziej szczegółowa grupa może zastąpić reguły globalne. Nie dodawaj bezmyślnie grup `Allow: /`.
- [ ] Utrzymuj jeden generator/plik `robots.txt`; w środowisku preview osobna polityka zgodna z platformą.
- [ ] Nie traktuj `robots.txt` jako zabezpieczenia poufnych danych — API i prywatne zasoby wymagają prawdziwych mechanizmów ochrony.
- [ ] Jeżeli WAF sprawdza boty, dopuszczaj zweryfikowane zakresy IP/użytkowników zgodnie z oficjalnymi listami dostawców; nie ufaj bezwarunkowo samemu nagłówkowi `User-Agent`.
- [ ] Nie wprowadzaj `llms.txt` jako obowiązkowego rozwiązania i nie obiecuj, że sam robots/schema poprawi widoczność w LLM-ach.

**Minimalny przykład fragmentu reguł treningowych** (nie jest kompletnym `robots.txt`, nie zastępuje zasad istniejącej witryny):

```text
User-agent: GPTBot
Disallow: /
```

Dokładna treść `robots.txt` musi uwzględniać aktualną politykę, wszystkie grupy, sitemap oraz decyzję dotyczącą `Google-Extended`.

**DoD:** decyzja dla każdego z wykrytych botów opisana w raporcie; crawlery search otrzymują dostęp do publicznych URL-i; treningowe mają odpowiednie wykluczenia tam, gdzie dostawca rozdziela funkcje; wynik jest zweryfikowany na działającym środowisku.

## 8. API, formularz i bezpieczeństwo (P1)

### TECH-009 — Audyt granic systemu

- [ ] Zmapuj wszystkie istniejące `/api/*`, `pages/api/*`, `app/api/**/route.*`, Server Actions, endpointy formularza i połączenia z usługami zewnętrznymi.
- [ ] Ustal: metoda, odbiorca, body, odpowiedź, sposób walidacji, limity, miejsce przechowywania sekretów, timeout, dostawca poczty i wpływ awarii zależności.
- [ ] Nie zakładaj istnienia endpointu `/api/contact`: to **wyłącznie przykład możliwego obecnego API**, nie wymóg budowy nowego.
- [ ] Jeżeli frontend wysyła do zewnętrznego providera, audytuj klucze klienta, zakres uprawnień, zabezpieczenia antyspamowe, logowanie i poprawną obsługę błędów.
- [ ] Jeśli brak backendu i formularz nie działa, przedstaw osobną propozycję implementacji; nie wdrażaj bez akceptacji.

### TECH-010 — Kontrakt i hardening istniejącego formularza

Dla faktycznie istniejącego mechanizmu kontaktowego:

- [ ] Zachowaj obecny kontrakt UI/UX; zdefiniuj i udokumentuj kontrakt endpointu lub Server Action na podstawie kodu.
- [ ] Walidacja po **stronie serwera**: typy, wymagane pola, limity długości, format e-maila, maksymalna wielkość body, dopuszczane metody/content-type.
- [ ] Sprawdź antyspam (honeypot i/lub rozwiązanie istniejące), rate limiting na warstwie infrastruktury lub serwera oraz ochronę przed powtarzaniem zgłoszeń; nie polegaj wyłącznie na pamięci procesu serverless.
- [ ] Zastosuj zabezpieczenia przed nadużyciami odpowiednie do mechanizmu (np. sprawdzenie `Origin` i/lub anti-CSRF przy uwierzytelnianych akcjach cookie-based; nie zakładaj, że samo CORS chroni przed spamem).
- [ ] Nigdy nie składaj nagłówków SMTP z niezweryfikowanego inputu. Unikaj HTML injection w treści wiadomości i zwracaniu błędów.
- [ ] Sekrety (`API_KEY`, SMTP, webhooks) tylko po stronie serwera/secret managera, poza repo i poza `NEXT_PUBLIC_*`.
- [ ] Logi: bez imion, adresów e-mail, numerów telefonów, pełnych treści formularzy, tokenów i innych PII; identyfikator korelacyjny dla błędów.
- [ ] Timeouty i bezpieczne retry do usług zewnętrznych; zapobiegaj przypadkowemu ponownemu wysłaniu po timeoutach. Nie raportuj sukcesu przed potwierdzeniem przyjęcia przez backend/providera.
- [ ] Bezpieczne, zrozumiałe kody odpowiedzi: `2xx` dla sukcesu, `400/422` błędne dane, `405` nieobsługiwana metoda, `429` limit, `5xx` błąd serwera/dostawcy — **dopasuj do obecnego kontraktu**, nie zmieniaj interfejsu bez aktualizacji klienta.
- [ ] Przetestuj: sukces, zła walidacja, duplikat kliknięcia, wolna sieć, timeout, spam, niedostępny provider, brak JS gdy istotny dla rozwiązania.

**DoD:** pełna ścieżka kontaktowa działa po zmianach i nie eksponuje sekretów/PII; brak nowych endpointów bez konkretnej potrzeby.

### TECH-011 — Hardening aplikacji i infrastruktury

- [ ] Audyt `npm audit`/odpowiednika oraz zależności bez automatycznego major upgrade; podatności sklasyfikowane i naprawione w zgodnym zakresie.
- [ ] Zweryfikuj `Content-Security-Policy` pod kątem faktycznych skryptów/formularzy/obrazów; przy dużych zmianach zacznij od `Content-Security-Policy-Report-Only`, potem egzekwuj politykę bez regresji. Nie ustawiaj przypadkowo `unsafe-inline` jako docelowego obejścia.
- [ ] Oceń `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `Permissions-Policy` i ochronę przed iframe (`frame-ancestors` w CSP lub nagłówek kompatybilny); dopasuj do projektu.
- [ ] HTTPS i HSTS tylko zgodnie z obecnym TLS/CDN; nie dodawaj pochopnie `includeSubDomains` lub `preload`.
- [ ] Sprawdź brak sekretów w `NEXT_PUBLIC_*`, bundle klienta, mapach źródeł, logach CI i artefaktach builda.
- [ ] Zbadaj konfigurację CORS, cache dla formularzy i endpointów, limity body, ochronę zasobów preview, możliwość request smuggling/otwarte redirecty wynikające z własnej konfiguracji.
- [ ] Sprawdź poprawność `notFound`, obsługi błędów i brak ekspozycji stack trace w produkcji.

**DoD:** lista problemów bezpieczeństwa z priorytetami, poprawki oparte na dowodach i testy braku regresji.

## 9. Wydajność, dostępność i obserwowalność (P2)

### TECH-012 — Wydajność i renderowanie

- [ ] Zbierz bazowy pomiar (mobile i desktop) z Lighthouse oraz, jeśli jest dostęp, CrUX/RUM; dokumentuj narzędzie, URL i warunki.
- [ ] Monitoruj Core Web Vitals na **75. percentylu**: docelowo LCP ≤ 2,5 s, INP ≤ 200 ms i CLS ≤ 0,1; używaj danych terenowych, jeśli wystarczające.
- [ ] Sprawdź obecność głównej treści publicznych stron w HTML z serwera / prerenderu; unikaj zamiany strony na CSR-only dla samego uproszczenia implementacji.
- [ ] Sprawdź obrazy (`next/image` jeśli już używane, prawidłowe rozmiary, lazy loading poza hero), fonty, duże chunki JS, third-party scripts i nadmiar Client Components.
- [ ] Zmieniaj tylko zidentyfikowane wąskie gardła; porównaj wyniki przed/po w podobnych warunkach.

### TECH-013 — Dostępność i HTML

- [ ] Zweryfikuj jeden logiczny H1 na każdej stronie oraz poprawną strukturę sekcji i landmarków.
- [ ] Sprawdź kontrast, klawiaturę, kolejność focusu, skip link, widoczny fokus, `aria-*`, formularze (label/komunikaty błędów), alt teksty.
- [ ] Cel zgodności: WCAG 2.2 AA w zmienianych obszarach; sprawdź automatycznie i manualnie krytyczne ścieżki.
- [ ] Testuj minimum mobilny viewport i desktop, szczególnie nagłówki, nawigację i formularz.

### TECH-014 — Minimalne pomiary techniczne

- [ ] Sprawdź istniejącą analitykę i consent management; nie instaluj nowego SDK z automatu.
- [ ] Jeśli istnieje śledzenie zdarzeń, upewnij się, że `lead_form_submit_success` wyzwalany jest **tylko po potwierdzonym sukcesie**, maksymalnie raz dla danej akcji UI.
- [ ] Dla istniejących CTA można rozważyć `contact_email_click`, `phone_click`, `brief_start` / `brief_complete`, jeśli mają techniczną podstawę i są objęte zatwierdzoną konfiguracją zgód.
- [ ] Żadnej treści pól formularza, danych osobowych czy identyfikatorów użytkownika w payloadach analitycznych.
- [ ] Monitoruj statusy 404/5xx, błędy API, błędy formularza i crawl (jeśli dostępne); nie dodawaj usług monitoringu bez zgody.

## 10. Testy automatyczne i kryteria jakości

Nie uruchamiaj komend na ślepo. Najpierw odczytaj skrypty i wersje z `package.json`, package manager z lockfile, środowisko i instrukcję projektu.

**Minimalna macierz regresji:**

| Test | Sprawdzenie | Poziom |
|---|---|---|
| Redirect root | `/` → `/pl`, 301/308, brak łańcucha, niezależność od nagłówków języka | HTTP / integration |
| Dostępność EN | `/en` nadal 200 i nie przekierowuje do `/pl` | HTTP / integration |
| Normalizacja hosta | http→https, www/non-www zgodnie z istniejącą domeną kanoniczną | HTTP |
| Canonical | pojedynczy, absolutny, odpowiada obecnemu realnemu URL-owi | HTML parser |
| Hreflang | reciprocity PL/EN tylko dla istniejących par + self link | HTML parser |
| Metadata | title, description, robots, Open Graph, H1 bez duplikatów błędnych | HTML parser |
| Sitemap | prawidłowy XML, URL-e 200, bez 3xx/4xx, noindex i preview | parser + HTTP |
| Robots | search crawlers dopuszczone, GPTBot blokowany, inne według polityki | parser + HTTP |
| Renderowanie | istotne treści obecne w HTML bez wykonywania JS | HTTP / source |
| Nawigacja | linki wewnętrzne, locale switch, breadcrumbs, 404 | integration / E2E |
| Formularz | sukces, invalid, retry, anti-spam, rate limit, błąd providera | unit/integration/E2E |
| Security | brak sekretów w bundle/logach, bezpieczne headers, CSP | inspection / HTTP |
| UX/A11y | mobile, desktop, focus, label, alt, screenshot comparison | E2E / manual |

**Przykładowe komendy diagnostyczne** — wybierz odpowiadający package manager i realne skrypty:

```bash
curl -sS -D - -o /dev/null https://www.mjaniec.it/
curl -sS -L -D - -o /dev/null https://www.mjaniec.it/
curl -sS -D - -o /dev/null https://www.mjaniec.it/pl
curl -sS -D - -o /dev/null https://www.mjaniec.it/en
curl -sS https://www.mjaniec.it/robots.txt
curl -sS https://www.mjaniec.it/sitemap.xml
```

Dodatkowo testuj analogiczne żądania lokalnie i na preview, zanim wykonasz jakiekolwiek kroki związane z produkcją. Zwróć uwagę, że proste `curl` z podmienionym `User-Agent` **nie dowodzi**, że zweryfikowany bot przejdzie przez WAF; oceniaj też logi / konfigurację platformy, jeżeli dostępne.

**DoD dla każdego PR:**

- [ ] Typowanie, lint, build i istniejące testy przechodzą.
- [ ] Dodane testy obejmują konkretny poprawiony błąd (lub uzasadniono brak automatyzacji).
- [ ] Brak zmian publicznych URL-i bez zaakceptowanego planu redirectów.
- [ ] Brak zmian polityki indeksowania niezwiązanych z zadaniem.
- [ ] Brak regresji formularza, UI, PL/EN i responsywności.
- [ ] Dokumentacja zmian + wynik testów + plan rollbacku w opisie PR.

## 11. Kolejność wykonania i PR-y

> Priorytet jest techniczny; nie jest oceną biznesową. W kolejnych etapach realizuj tylko potwierdzone defekty i osobno zatwierdzone rozszerzenia.

| Etap | Zadania | Output | Gate |
|---|---|---|---|
| **PR-0 — Audit only** | TECH-001, rozpoznanie TECH-002–014 | `SEO_AUDIT_REPORT.md`, inwentaryzacja API i konfiguracji, plan małych PR-ów | Bez zmian runtime; przegląd właściciela |
| **PR-1 — Routing + metadata** | TECH-002, TECH-003 | Tylko niezbędne poprawki `/`, canonical, hreflang, metadata | Zatwierdzone błędy i testy redirectów |
| **PR-2 — Indeksowanie + boty** | TECH-004, TECH-008 | Sitemap/robots/WAF review; zmiany zatwierdzonej polityki | `Google-Extended` zostaje `DECISION_REQUIRED` |
| **PR-3 — Struktura stron** | TECH-005, ewentualnie TECH-006, TECH-007 | Linkowanie, współdzielone komponenty, opcjonalny route PL, JSON-LD | Nowy route tylko po osobnej zgodzie i gotowych danych |
| **PR-4 — Kontakt + security** | TECH-009, TECH-010, TECH-011 | Audyt i poprawki istniejącego formularza/API i nagłówków | Brak nowych integracji bez zgody |
| **PR-5 — NFR + instrumentacja** | TECH-012, TECH-013, TECH-014 | Pomiar przed/po, testy a11y, poprawki wydajności | Wdrażaj wyłącznie udokumentowane problemy |

Nie łącz wszystkich zmian w jednym PR-ze. Jeśli PR dotyka zarówno routingu, jak i formularza, rozbij go, jeśli to możliwe.

## 12. Pliki wynikowe i format raportowania

Wykorzystaj istniejący katalog dokumentacji; poniższe nazwy są domyślnymi propozycjami:

- `docs/SEO_AUDIT_REPORT.md` — fakty, tabela URL, dowody, stan indeksowania, podejrzane i potwierdzone błędy.
- `docs/TECHNICAL_ARCHITECTURE_AUDIT.md` — wersje stacka, router, komponenty, źródła danych, lista API, bezpieczeństwo, hosting/CI, schemat przepływu formularza.
- `docs/IMPLEMENTATION_BACKLOG.md` — identyfikator, źródło, zakres plików, zależności, ryzyko, decyzja, PR.
- `docs/VERIFICATION_REPORT.md` — komendy, wyniki, próbki HTML/HTTP, testy, metryki przed/po, otwarte problemy.
- `docs/SEO_CHANGELOG.md` — URL, canonical, hreflang, robots, sitemap, redirecty, data wdrożenia, rollback.

### Szablon opisu pojedynczej zmiany

```md
## TECH-XXX — <krótka nazwa>
Status: PROPOSED | APPROVED | IN_PROGRESS | DONE | BLOCKED | DECISION_REQUIRED
Baseline / evidence: <plik, linia, URL, pomiar lub response>
Problem: <co jest faktycznie błędne>
Solution: <najmniejsza zmiana>
Files: <rzeczywiście zmienione pliki>
Alternatives rejected: <jeśli istotne>
Tests: <komendy i wynik>
SEO/API/security risks: <co może się zepsuć>
Rollback: <jak wycofać>
Owner approval: <ID decyzji lub wymagane zatwierdzenie>
```

### Końcowa checklista agenta

- [ ] Nie zmieniłem stacka/architektury/hostingu bez realnej przyczyny i zgody.
- [ ] Nie wprowadziłem nowej bazy, tabel ani API „na przyszłość”.
- [ ] `/` trwale kieruje na `/pl`, `/en` pozostaje dostępne; bez auto-detekcji języka.
- [ ] Wersje językowe, canonical, sitemap i publiczne URL-e są spójne.
- [ ] Nie stworzyłem duplikatów WordPress/Shopify ani nowej strony supportowej bez akceptacji.
- [ ] Nowe strony są PL-first; EN tylko dla rzeczywistych tłumaczeń.
- [ ] Zmiany dotyczące robotów nie blokują search crawlerów ani legalnego ruchu użytkownika; `Google-Extended` czeka na odrębny wybór.
- [ ] Formularz ma serwerową walidację i odpowiednie zabezpieczenia, bez ekspozycji sekretów/PII.
- [ ] Testy i manualny smoke pass nie wykazały regresji; istnieje rollback.
- [ ] Niczego nie opublikowałem na produkcji bez zgody właściciela.

## 13. Rozliczenie sprzeczności między planami źródłowymi

| Temat | Finalne rozstrzygnięcie |
|---|---|
| Drugi plan: detekcja `navigator.language` / GeoIP | **Odrzucona**: ADR-001 wymusza stałe `/` → `/pl`. |
| Drugi plan: `hreflang=en` wskazuje `/` | **Odrzucona**: poprawny wariant EN to rzeczywiste `/en` (i istniejące odpowiedniki). |
| Drugi plan: nowe strony WordPress i Shopify | **Odrzucone domyślnie**: najpierw weryfikacja istniejących stron; bez mnożenia adresów. |
| Pierwszy plan: możliwa strona wsparcia | **Warunkowo zaakceptowana** jako kandydat po audycie i osobnym approval. |
| Pierwszy plan: automatyczna polityka botów tylko po decyzji właściciela | **Decyzja podjęta**: search allowed, training restricted; wyjątek Google opisany osobno. |
| Pierwszy plan: zadania contentowe i oferta | **Poza zakresem** tego planu technicznego. Nie edytuj copy na jego podstawie. |
| Kody 301 w pierwszym planie | **301 lub 308** dla trwałego redirectu; sprawdzaj realny mechanizm Next.js/hostingu. |
| Sugestia nowego backendu/CMS/bazy w przyszłości | **Brak podstaw w dokumentach** — nie projektować teraz. |

## 14. Dokumentacja referencyjna do sprawdzenia podczas implementacji

Poniższe adresy służą jako referencje. **Stosuj dokumentację pasującą do zainstalowanej wersji**, nie migruj projektu tylko dlatego, że aktualna dokumentacja opisuje nowszy mechanizm.

- Next.js — metadata: https://nextjs.org/docs/app/getting-started/metadata-and-og-images
- Next.js — sitemap: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
- Next.js — robots: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
- Next.js — proxy (nowe wersje; wcześniej `middleware`): https://nextjs.org/docs/app/api-reference/file-conventions/proxy
- Google Search — canonical: https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
- Google Search — hreflang: https://developers.google.com/search/docs/specialty/international/localized-versions
- Google crawlers — `Google-Extended`: https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers
- OpenAI — `OAI-SearchBot`, `GPTBot`: https://developers.openai.com/api/docs/bots
- Perplexity — boty: https://docs.perplexity.ai/docs/resources/perplexity-crawlers
- Anthropic — boty: https://platform.claude.com/docs/en/claudebot
- Google — Core Web Vitals: https://web.dev/articles/vitals
- W3C — WCAG 2.2: https://www.w3.org/TR/WCAG22/

---

**Gotowość planu:** gotowy do wykonania **PR-0 (audit-only)** i przygotowania propozycji pozostałych PR-ów. Decyzja w sprawie `Google-Extended` oraz ewentualnej nowej strony wsparcia nie blokują audytu ani napraw niezależnych od tych tematów. **Zatwierdzone ADR-y nie są zezwoleniem na automatyczny deploy.**
