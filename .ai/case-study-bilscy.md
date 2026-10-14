# Case study: bilscy.info (szkic, 2026-10-14)

Źródło: `~/personal_projects/bliscy/bilscy_template` (`progress.md`, `docs/*.md`, git). Nic z tego nie jest
jeszcze na stronie.

## Fakty

- **Klient:** Gospodarstwo Ogrodnicze Bilscy, szkółka bylin ze sprzedażą wysyłkową (bilscy.info:
  ponad 700 gatunków bylin i cebul kwiatowych, 40 lat doświadczenia, wg opisu sklepu).
- **Platforma:** AtomStore (CakePHP), szablony `.ctp`, jQuery, Bootstrap 3. Zmiany wgrywane przez FTP.
  Dostęp tylko do szablonu sklepu; rdzeń platformy (`_default/*`) prowadzi zewnętrzna firma.
- **Kontekst (od Michała):** zmiany wymagane przez agencję SEO. Dotychczasowy wykonawca nie wiedział,
  czego dokładnie agencja chce i jak to wdrożyć, więc zrobiłem to bez angażowania go.
- **Okres (git):** 2026-06-28 → 2026-07-30 (wcześniejsze commity w repo to inni developerzy).

## Co zostało zrobione

1. **Śledzenie konwersji (GTM, GA4, Google Ads):**
   - zgody (Consent Mode) ustawione na początku `<head>`, przed tagami Google;
   - zdarzenie `purchase` z pełnymi danymi zamówienia: wartość, VAT, dostawa, kupon, lista produktów;
   - dane do konwersji rozszerzonych Google Ads (`user_data`): e-mail i telefon jawnie i jako SHA-256,
     telefon znormalizowany do +48, pełny adres;
   - ta sama struktura na obu stronach po zamówieniu (krok 4 koszyka i potwierdzenie z e-maila), jedna
     konfiguracja zmiennych w GTM;
   - produkty gratisowe z ceną 0, reset `ecommerce` przed pushem (zalecany wzorzec GA4);
   - diagnoza zgłoszenia „dane się nie zgadzają”: część zdarzeń wysyłał sam rdzeń AtomStore. Opisane
     ryzyka (nadpisywanie danych, podwójne liczenie przychodu, kilka zamówień z jednego koszyka) i lista
     pytań do firmy obsługującej platformę.
2. **Blokada dostawy w sobotę dla wybranych kodów pocztowych:** InPost „Doręczenie w sobotę” blokowane
   dla 17 712 kodów z listy klienta. Walidacja przy polu kodu pocztowego (gość i zalogowany), czerwony
   komunikat i blokada przycisku „Do kasy”. Lista spakowana do ~20 KB (gzip). Kod defensywny: jeśli JS
   zawiedzie, zamówienie przechodzi normalnie; własna strona błędu 500 w wyglądzie sklepu.
3. **Walidacja metody płatności** przed przejściem dalej w koszyku: komunikat, przewinięcie do sekcji,
   odblokowanie po wyborze.
4. **Porządek w projekcie:** szablon zsynchronizowany ze stanem serwera, repozytorium i dokumentacja
   zmian (co i gdzie wgrać przez FTP, jak zweryfikować zdarzenia w GTM Preview).
5. **Analiza nowego frontendu:** 3 warianty (reskin CSS, nowy HTML+CSS, pełne przepisanie z JS) z ryzykami
   (sprzężenie JS koszyka przez `data-type`, pliki rdzenia poza repo, Bootstrap 3, cache) i rekomendacją:
   zacząć od reskinu, koszyk na końcu.

## Liczby (udokumentowane)

- 17 712 kodów pocztowych objętych blokadą sobotnią.
- Lista kodów w JS: 88 KB, ~20 KB po gzip.
- 301 szablonów `.ctp` przeanalizowanych w ocenie nowego frontendu.

## Nie publikować

ID GTM / GA4 / Google Ads, numer telefonu klienta z notatek, nazwiska developerów z gita, awaria 500
z pierwszej próby (2026-06-25) jako wpadka, szczegóły błędów rdzenia AtomStore wskazujące winnych,
estymacje tygodni z analizy (to wewnętrzna oferta), plik z kodami pocztowymi.

## Pytania do Michała

1. Czy agencją SEO było Na Zielono (Konrad Bilski)? Czy nazywamy agencję, czy tylko sklep?
2. Zgoda sklepu na publikację z nazwą „Gospodarstwo Ogrodnicze Bilscy / bilscy.info”?
3. Czy firma supportowa odpowiedziała i czy tracking jest już potwierdzony jako stabilny? Czy w GA4 /
   Google Ads widać konwersje z produktami? (Jeśli nie: „wdrożone, w trakcie weryfikacji”).
4. Czy blokada sobotnia została sprawdzona w sobotę?
5. Czy klient wybrał któryś wariant nowego frontendu? Czy współpraca trwa?
6. Cytat od agencji lub sklepu?
7. Zrzuty ekranu: komunikat blokady sobotniej (desktop + telefon), komunikat przy płatności, ewentualnie
   GTM Preview z rozmytymi danymi.

## Propozycja

- Usługi: `seo-sem` (analityka, konwersje Google Ads) i/lub `speed-seo-audit`; brak usługi „poprawki w
  sklepie na innej platformie”, może `wordpress` jako „naprawy i poprawki” po decyzji F04.
- Robocze tytuły: „Śledzenie konwersji i zmiany w koszyku sklepu ze szkółką bylin, bez dostępu do rdzenia
  platformy”; „Sklep AtomStore: GA4, Google Ads i blokada dostawy w sobotę dla 17 712 kodów pocztowych”.
