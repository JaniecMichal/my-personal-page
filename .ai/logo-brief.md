# Brief: logo mjaniec.it

> Samowystarczalny brief dla grafika albo narzędzia AI do grafiki. Szkice koncepcji są obok,
> w [`brand/`](./brand/) (SVG, można otwierać w przeglądarce lub Figmie).

## Marka w skrócie

- **Kto:** Michał Janiec, Senior Frontend Developer z Katowic. Strony, sklepy Shopify, WordPress,
  aplikacje webowe dla małych i średnich firm, plus frontend dla zespołów.
- **Charakter:** precyzyjny, techniczny, ale ludzki i bez żargonu. „Jedna osoba od początku do
  końca”. Nie agencja, nie korporacja.
- **Język wizualny strony („Signal”):**
  - **Fonty:** Instrument Serif (nagłówki), JetBrains Mono (tekst), Doto (kropkowy font do cyfr
    i przycisków).
  - **Kolory:** tło `#f3f1ec` (ciepła biel), tusz `#111214`, akcent niebieski `#2e3bff`
    (w trybie ciemnym `#8c94ff`), tło ciemne `#0d0e10`.
  - **Motywy:** siatka kropek, narożne „nawiasy” wokół kart, lekka aberracja chromatyczna
    (czerwono-cyjanowe przesunięcie) na nagłówkach, pole falujących linii w hero.
- **Obecny znak:** słowo „mj.” w Instrument Serif z kropką w kolorze akcentu (nagłówek strony).

## Czego unikać

- Wyglądu jak Visuality (pracodawca Michała): **bez czerwieni i pomarańczu**, bez pryzmatu
  i trójkąta, bez ich kroju.
- Typowych symboli „dev”: `</>`, nawiasy klamrowe, kursor terminala jako główny znak.
- Gradientów i efektów, które znikają w małym rozmiarze.

## Wymagania

- Działa jako **favicon 16 × 16 i 32 × 32** (to najważniejszy test), ikona aplikacji 180 × 180
  i 512 × 512, avatar na LinkedIn/GitHub (koło), znak w nagłówku strony i w stopce.
- Wersje: kolor na jasnym, kolor na ciemnym, jednokolorowa (czarna i biała).
- Pole ochronne i minimalny rozmiar opisane w jednym arkuszu.
- Pliki: SVG (źródło), PNG, ICO; nazwy pod Next.js (`app/icon.svg`, `app/apple-icon.png`,
  `app/favicon.ico`).

## Koncepcje (szkice w `brand/`)

| Plik | Pomysł | Mocne strony | Słabe strony |
|---|---|---|---|
| `concept-a-dot-monogram.svg` | „mj.” złożone z kropek jak w kroju Doto; kropka na końcu w kolorze akcentu | wprost z języka strony, czytelne od 32 px, łatwe do animacji (kropki mogą „wpadać” na miejsce) | szerokie; w 16 px lepiej sama litera „m” lub „mj” bez kropki |
| `concept-b-bracket-icon.svg` | ten sam monogram w narożnych nawiasach (jak karty na stronie) | kwadratowe, idealne na favicon i avatar, rozpoznawalne | mniej oryginalne jako znak w nagłówku |
| `concept-c-wave-mark.svg` | koło z falujących poziomych linii (jak tło hero) + niebieska kropka | najbardziej „żywe”, pasuje do animacji na stronie | znika w 16 px; tylko do dużych formatów (OG, prezentacje); blisko stylu hero Visuality |

**Rekomendacja:** A jako znak w nagłówku i stopce, B jako favicon/avatar. Serifowe „mj.” zostaje
jako logotyp w tekście (np. podpis w mailu). C tylko jako grafika, nie jako logo.

## Do dopracowania przez grafika

- Optyczna korekta kropek (minimalnie mniejsze kropki w łuku litery „m”).
- Wersja „mj.” złożona tylko z kropek vs. hybryda: serifowe „mj” + kropkowa kropka.
- Animacja do hero/loadera (opcjonalnie): kropki pojawiają się kolejno, kropka akcentu na końcu.
- Sprawdzenie w trybie ciemnym (akcent `#8c94ff`) i w kole (avatar LinkedIn).

## Po wyborze

Podmienić w projekcie: `src/app/favicon.ico`, dodać `src/app/icon.svg` i `apple-icon.png`, znak w
`src/components/layout/header.tsx`, obraz OG (`public/mjaniec-og.jpg` albo `opengraph-image.tsx`).
