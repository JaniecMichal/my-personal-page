# AI search visibility: Next.js topic and "programista Katowice" (started 2026-10-16)

Why mjaniec.it doesn't show up in Google AI Mode for local / Next.js queries, what to change, and how
to collect more feedback. Status: **proposals only, nothing applied yet.** Next session: Michał brings
AI answers for the test phrases (section 5), then we turn everything into one update plan for the
whole site. Rules that still apply: business plan D1–D6, US-01 (problem first, technology second),
US-15 (one AI answer is not a ranking), no invented numbers or facts.

## 1. Source conversations (Google AI Mode, 2026-10-16)

**"strony internetowe next.js katowice"**: listed WebyJuice (od 7 500 zł), WebAlpha (od 3 990 zł),
Rejoin Studio, SynthIT, Bartosz Chmielecki (Next.js + Sanity, domain about Zabrze), Build by Alex
(€500 / €1 200). Sources included an Ad Awards listing. After "why not mjaniec.it?" it added
mjaniec.it first (od 2 900 zł correct), but that was flattery from a leading question. Its advice:
Next.js H1, longer service descriptions, a dedicated Next.js landing, Next.js metrics in case studies,
a "Next.js vs WordPress" FAQ, `knowsAbout` in JSON-LD.

**"strony internetowe programista z katowic"**: listed Tech-Studio, programista-katowice.pl,
PixelRoot, CodeinCode, Proadax. After "dlaczego nie mjaniec.it?" it read the site correctly (net
prices + VAT, sole trader, SEO with a partner, 5+ years, 120 zł/h, code and domain in the client's
name) and listed reasons against: 1 000 zł package needs the client's own design; one person =
holiday/illness risk; capacity for big projects; frontend focus (no Java/.NET/ERP); SEO/Ads outsourced.

Takeaways:
- When AI reads mjaniec.it, it gets the facts right. The weak point is being picked for the list, not how the content reads.
- The site has been live since 2026-10-12. Competitors have age, backlinks, directories and Google Business Profiles; some run city-page networks. Much of the gap is off-site signals and time.
- What competitors get quoted for: exact-match domain + the word "programista" (programista-katowice.pl);
  a direct FAQ answer with the phone inside ("czy można zdalnie?", Proadax); a factual
  "Entity / Activity / Experience" summary (Tech-Studio).

## 2. Verdict on the AI's advice

| Suggestion | Verdict | Why |
|---|---|---|
| Home H1 → "Szybkie strony Next.js i React…" | Reject | D1 / US-01: home talks to local owners about their problem. The Next.js query belongs to the Next.js page. |
| New URL `/strony-next-js-katowice` | Reject the URL, keep the idea | `/pl/uslugi/strony-nextjs` already exists. A second near-duplicate = doorway / cannibalisation. |
| Next.js metrics in case studies, "100/100" | Already there, add nothing invented | nazielono case study names Next.js several times, desktop LCP 0.6 s / CLS 0.001. nazielono.pro mobile is weak (68). |
| `knowsAbout` | Mostly done | Person JSON-LD already lists Next.js, React, TypeScript (`src/lib/json-ld.ts`). |
| "Next.js vs WordPress" FAQ | Accept | On the Next.js page (A below), later an article (E). |
| Longer Next.js service text | Accept | On the Next.js page, not the home grid. |

## 3. Proposals (to apply conditionally)

Current gaps on `/pl/uslugi/strony-nextjs` (`src/content/local/services.ts`, id `nextjs-websites`):
`seo: {}` (no own title/description), `faq: []`, no Katowice/Śląsk mention, `showOnHome: false`
(order 8), packages and prices copied 1:1 from `business-website`, not yet requested for indexing.
The Katowice page (`src/content/local/local-pages.ts`) doesn't mention Next.js at all.

- [ ] **A. Next.js page as the landing for "strony Next.js Katowice"** (~1–2 h, copy approved by Michał first)
  1. Title `Strony w Next.js — Katowice i Śląsk | Michał Janiec`, problem-first meta description with "od 1 000 zł".
  2. Intro for a different reader than `business-website`: people who already want Next.js (marketing agencies, companies leaving WordPress, startups). Katowice/Śląsk, Sanity / headless CMS, one person end to end.
  3. Short "Next.js czy WordPress?" section, honest both ways (when WordPress is still better).
  4. FAQ 5–6: Dlaczego Next.js, a nie WordPress? / Czy sam edytuję treści? / Ile kosztuje hosting? /
     Czy przeniesiesz stronę z WordPressa? / Czy Google dobrze indeksuje strony w JavaScripcie?
     (nazielono quote answers it) / Czy spotkamy się w Katowicach?
  5. Link to the nazielono case study; `areaServed` Katowice/Silesia in this page's Service JSON-LD.
- [ ] **B. Internal links** (15 min): Katowice page → one Next.js sentence + link; `business-website`
  → "Wiesz, że chcesz Next.js? → szczegóły".
- [ ] **C. Indexing**: request `/pl/uslugi/strony-nextjs` in Google Search Console, IndexNow after deploy.
- [ ] **D. Off-site** (Michał, already in growth-plan.md, likely the biggest effect): Google Business
  Profile; Clutch, Useme, Oferia, pkt.pl, LinkedIn Services with one consistent description mentioning
  Next.js + Katowice; a Google review from nazielono mentioning Next.js.
- [ ] **E. Phase 2 article** "Next.js czy WordPress dla strony firmowej" (growth-plan topic 4, US-13).
- [ ] **F. Answer the objections from conversation 2** (each needs a fact from Michał):

  | Objection | Site today | Possible fix | Needs |
  |---|---|---|---|
  | 1 000 zł needs your own design | "z Twojego projektu graficznego", nothing about having no design | FAQ "Nie mam projektu graficznego — co wtedy?" + price or "wycena" for design | What design costs / who does it |
  | One person = risk | Nothing | FAQ on continuity: code in the client's repo, documentation, handover | Is there a backup person? |
  | Net only, +23% for non-VAT payers | Net only | Optional gross next to net on /cennik | D2 decision |
  | No heavy backend / ERP | — | Fine; maybe one line "kiedy nie jestem dobrym wyborem" | Optional |

- [ ] **G. Wording checks**: "programista" appears only in body text, never in titles / H1s, so
  consider it in the Katowice page title or H2. Check that the Katowice FAQ answers "zdalnie?" as
  directly as Proadax (with the phone). Check that `llms.txt` starts with a short factual entity
  block (who, what, where, prices, experience).

Open decisions (Michał):
1. Go with A + B on a new branch (copy shown before publishing)?
2. Next.js page packages: keep the three copied from `business-website`, or one "od 2 900 zł" range +
   "wycena indywidualna" (recommended, less duplicate)? D2 call.
3. Next.js card back on the home grid? Recommended: no, internal links are enough.

## 4. What Claude can and can't do here

- Can't run Google AI Mode / AI Overviews (no API, automated queries break Google's terms and hit
  CAPTCHA, results would come from a US data-centre IP). Can't use ChatGPT, Perplexity or Gemini.
- Can: web search for the same phrases (which domains rank; AI Mode builds on these), open competitor pages and compare titles, H1s, FAQs, prices and structured data, then merge Michał's pasted answers into one table with patterns.
- Offered for the next session: ranking + competitor research for the 6 core phrases (1, 2, 6, 9, 12, 21).

## 5. Test phrases

Core monthly benchmark (could go into growth-plan.md as the fixed list): **1, 2, 6, 9, 12, 21.**

Local, general (D1): 1 `strony internetowe Katowice` · 2 `programista stron internetowych Katowice` ·
3 `freelancer strony www Śląsk` · 4 `tworzenie stron internetowych dla małych firm Katowice` ·
5 `strona internetowa dla firmy Gliwice`

Price: 6 `ile kosztuje strona internetowa dla firmy Katowice` · 7 `tania strona wizytówka dla firmy Śląsk` ·
8 `cennik stron internetowych freelancer 2026`

Existing site / care (J2): 9 `naprawa strony WordPress Katowice` ·
10 `wolna strona internetowa co zrobić programista Śląsk` · 11 `opieka techniczna nad stroną internetową Katowice`

Technology: 12 `strony Next.js Katowice` (re-test after A+B) · 13 `Next.js czy WordPress dla strony firmowej` ·
14 `programista Shopify Śląsk` · 15 `freelance frontend developer React Polska`

Industry: 16 `strona internetowa dla gabinetu fizjoterapii Katowice` ·
17 `strona internetowa dla restauracji Katowice` · 18 `strona internetowa dla firmy budowlanej Śląsk`

B2B (J3): 19 `podwykonawca frontend dla agencji interaktywnej` · 20 `frontend developer Ruby on Rails freelance Polska`

Brand: 21 `Michał Janiec programista Katowice` · 22 `mjaniec.it opinie`

## 6. How to collect answers

1. **Same conditions**: Chrome guest window (your history includes many visits to mjaniec.it), normal connection in Katowice, new chat per phrase, phrase first.
2. **Tools**: Google normal search (AI Overview + organic position) and AI Mode; ChatGPT with search and Copilot (Bing); Perplexity (shows its sources); Gemini if there's time. Start with 5–6 phrases × 3 tools.
3. **Follow-ups, neutral first**: (1) the phrase alone, (2) "Jakie źródła wykorzystałeś i dlaczego te?",
   (3) "Co wiesz o mjaniec.it? Podaj źródła.", (4) only then "Czego brakuje mjaniec.it w porównaniu z
   [pierwszy wynik]?". Once the site is named, the answer shows how it reads, not whether AI found it.
   Client view variant: "Jestem właścicielem gabinetu w Katowicach. Jakie mam wątpliwości po przeczytaniu mjaniec.it?"
4. **Run the core phrases twice**: a competitor in both runs is a signal; one appearance is noise.
5. **Search Console → Skuteczność → Zapytania**: do any of these phrases already show impressions?
6. **Template** (the source cards matter most):

```
### [fraza] — [narzędzie, tryb] — RRRR-MM-DD, gość, Katowice
Wspomniany mjaniec.it: tak/nie (pozycja na liście: X)
Cytowany URL mjaniec.it: [adres albo brak]
Wykonawcy na liście: A, B, C
Karty źródeł: [domeny pod odpowiedzią]
Wynik organiczny Google (zwykłe wyszukiwanie): mjaniec.it na stronie 1/2/brak
Odpowiedź (pełna):
...
Odpowiedzi na pytania uzupełniające:
...
```

## 7. Next session

1. Michał pastes the collected answers (section 6 template).
2. Claude: ranking + competitor research for the core phrases, then one table of patterns.
3. Together: one update plan for the whole site (A–G plus whatever the data shows), facts for F-items, then implement on a branch.
