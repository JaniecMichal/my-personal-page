# Mini-audyt

Jedna strona A4 (PDF, po polsku) o stronie internetowej lokalnej firmy: zrzut ekranu z telefonu,
wyniki Google Lighthouse (ten sam silnik co PageSpeed Insights), 3 najważniejsze problemy prostym
językiem i Twój kontakt z kodem QR. Do zostawienia przy wizycie albo wysłania po uzyskaniu zgody
(zob. `.ai/growth-plan.md`, część B).

Osobny mini-projekt: własne zależności, nie wpływa na build strony.

## Start (raz)

```bash
cd tools/mini-audit
pnpm install --ignore-workspace
```

Wymaga zainstalowanego Google Chrome. Dane kontaktowe na stopce: `config.json`.

## Użycie

```bash
cp targets.example.csv targets.csv      # name,url,notes — lista firm (plik nie trafia do gita)
node audit.mjs targets.csv              # ~15–20 s na stronę
node audit.mjs --url https://firma.pl --name "Firma"   # jedna strona
node audit.mjs targets.csv --no-lighthouse             # szybko, bez wyników punktowych
node audit.mjs --url https://klient.pl --name "Klient" --report   # raport dla obecnego klienta
```

### Dwa tryby

- **Mini-audyt** (domyślnie): kartka dla potencjalnego klienta, w stopce zachęta do kontaktu.
- **Raport** (`--report`): dla obecnych klientów, np. przed i po pracach albo co miesiąc w ramach
  opieki. Nagłówek „Raport strony”, neutralna stopka bez sprzedaży. Dwa raporty (przed/po) to
  gotowy materiał do case study.

Wynik w `out/` (nie trafia do gita):

- `out/<firma>.pdf` — do druku (A4, kolor albo czarno-biały),
- `out/summary.csv` — wyniki i główne problemy; wklej do arkusza leadów.

Firma bez strony (puste `url`) trafia do `summary.csv` jako „brak strony”: to lead na nową stronę.

## Co sprawdza

HTTPS, dopasowanie do telefonu, klikalny i widoczny telefon, szybkość (Lighthouse mobile), SEO
i dostępność (Lighthouse), opis dla Google, nagłówek H1, dane strukturalne firmy, formularz lub
strona kontaktu, rok w stopce, wielkość tekstu, waga strony. Problemy są ułożone według wagi, na
kartce trafiają 3 najważniejsze.

## Dobre praktyki

- Przejrzyj PDF przed wydrukiem: automat może się pomylić (np. baner cookies na zrzucie).
- Wyniki Lighthouse wahają się o kilka punktów między pomiarami; nie spieraj się o liczby,
  rozmawiaj o konkretnych problemach.
- Kod QR prowadzi na `mjaniec.it/pl?utm_source=mini-audyt&utm_medium=print`, więc w analityce
  widać, ile osób weszło z kartki.
