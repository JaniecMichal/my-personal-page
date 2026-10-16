# Search growth plan: competitors, gaps and changes (research 2026-10-16)

Scope: websites, web applications and **AI automation** for companies in Katowice / Śląsk / GZM.
Goal: more visibility in Google (organic + local pack), Google AI Mode / AI Overviews, ChatGPT search,
Perplexity and Copilot, and more qualified enquiries. The business plan (D1–D6, US-xx) is the
direction, not a hard limit. Earlier notes: [ai-search-visibility.md](./ai-search-visibility.md)
(proposals A–G, test phrases). This file supersedes its section 3 as the master plan.

**Method and limits.** Four research passes on 2026-10-16: local competitors (≈25 sites, live HTML +
JSON-LD + llms.txt), an SEO audit of mjaniec.it (live HTML, whois, Wayback, sitemaps), an AI-automation
market deep dive (≈45 searches, Google autocomplete pl/PL, pricing pages, regulation sources) and
a read of the Visuality `/ai` page (staging). The search tool is US-based, not google.pl: result orders
are indicative, the local pack and AI Mode were not visible. Prices and facts below are what the
competitor pages showed on that day. **[inference]** marks conclusions.

---

## 0. Podsumowanie SEO (PL)

**Gdzie jesteśmy.** Strona jest technicznie lepsza od lokalnej konkurencji (szybkość, dane
strukturalne, canonical/hreflang, llms.txt, roboty AI wpuszczone). Przegrywamy na trzech rzeczach,
których nie da się nadrobić kodem w tydzień: **wiek domeny** (strona żyje od 12.10.2026),
**opinie** (konkurenci mają 30–220 opinii Google, my 0 i brak wizytówki) i **ilość treści**
(konkurenci 20–140 artykułów i dziesiątki podstron miast, my 0 artykułów).

**Co psuje wyniki teraz (P0, ten tydzień):**
1. Przełącznik języka na każdej podstronie usług linkował do stron 404. Poprawka jest gotowa
   (`fix-locale-switch`): wdrożyć, potem smoke test, IndexNow i „Zatwierdź poprawkę” w Search Console.
2. Strona „Strony firmowe w Next.js” to kopia „Strony internetowej dla firmy” (te same nagłówki,
   pakiety, ceny). Google widzi dwie podobne strony i nie wie, którą pokazać. Trzeba dać jej
   własną treść, FAQ i frazę „strony internetowe w Next.js”.
3. Słowo „programista” i cena nie występują w żadnym tytule, a zwycięzcy mają je w tytule i H1
   („Strony internetowe Katowice – od 2 500 zł netto”, „programista-katowice.pl”).
4. Sześć podstron usług jest cienkich (ok. 100–180 słów własnej treści, bez FAQ): aplikacje,
   WordPress, audyt, Rails, Shopify, realizacje.

**Największa dźwignia dla wyników AI (Google AI Mode, ChatGPT, Perplexity):** obecność poza
stroną. AI poleca firmy, o których „mówi internet”: wizytówka Google z opiniami, Useme i Oferteo
(pojawiały się w każdym lokalnym zapytaniu testowym), Clutch, pkt.pl, LinkedIn, wszędzie ten sam
opis. Badania: wzmianki o marce i wpisy w katalogach przewidują cytowania AI lepiej niż linki.

**Szansa: automatyzacja AI na Śląsku.** Lokalnie robi to kilka firm (PixelAgency Katowice,
KC Mobile Czeladź, Pawlica Tychy, ADELLO, Process Hub), żadna nie ma prawdziwych wyników
liczbowych, tylko jedna publikuje ceny i nikt nie buduje oferty wokół KSeF. Frazy lokalne
(„automatyzacja ai katowice”, „chatbot katowice”) nie mają jeszcze podpowiedzi w Google, więc
konkurencja jest mała. Szkic strony jest gotowy na gałęzi `ai-automation` (noindex do czasu
potwierdzenia cen i faktów, lista AI-F1–F9 w sekcji 6).

**Inne wolne miejsca:** „naprawa strony WordPress Katowice” (odpowiadają tylko profile Useme)
i senior frontend React/Next.js dla zespołów produktowych i Rails (nikt lokalnie tego nie oferuje).

**Czego nie robić:** dziesiątek podstron miast z podmienioną nazwą (WebyJuice ma 57, Tech-Studio 41).
To strony przejściowe (doorway), które Google traktuje jako spam. Jedna prawdziwa strona Katowic,
ewentualnie później Gliwice, jeśli będzie tam realny klient.

**Kolejność:** P0 poprawki + wizytówka Google + prośby o opinie → P1 strona AI, profile w katalogach,
spójne dane firmy, linkowanie wewnętrzne → P2 blog i 4 artykuły-odpowiedzi (koszt strony, Next.js czy
WordPress, wolny WordPress, koszt automatyzacji AI), lokalne wydarzenia (AI Café UŚ, Śniadanie AI
Śląsk, GDG Silesia, Infoshare 17–18.11.2026) → P3 po danych.

**Realny czas:** rozpoznawalność marki w AI: tygodnie. Długi ogon (Next.js Katowice, naprawa
WordPress, Rails, automatyzacja AI Katowice): 1–4 miesiące po P0. Mapa Google: 1–3 miesiące po
wizytówce i opiniach. „Strony internetowe Katowice” w top 10: 6–12+ miesięcy.

---

## 1. Summary (read this if nothing else)

1. **We don't lose on quality, we lose on volume, reviews and age.** No competitor beats mjaniec.it on
   design, technical SEO or entity facts. Winners have 20–140 articles, many city pages, 30–220
   Google reviews and older domains. WebAlpha (domain from Jan 2026, 28 articles, 31 reviews) shows
   a young domain can compete within a year.
2. **Fix the basics first** (P0): deploy the language-switch fix (crawlable 404s on every service
   page), stop the Next.js page duplicating the business-website page, put "programista" and the
   price in titles, fill the 6 thin service pages.
3. **Off-site is the biggest lever for AI answers** (P0/P1): Google Business Profile + real reviews,
   Useme and Oferteo profiles (they show up in *every* local test query), one identical entity
   description everywhere. Studies: brand mentions and listings predict AI citations better than
   backlinks; ~42% of local AI citations come from listings (Yext).
4. **AI automation is an open local niche** (P1): only a handful of GZM providers (PixelAgency
   Katowice, KC Mobile Czeladź, Pawlica Tychy, ADELLO, Process Hub), **none with real case numbers,
   only one with published prices, none framing the offer around KSeF**. Local head terms
   ("automatyzacja ai katowice", "chatbot katowice") have no autocomplete suggestions yet = low
   competition. MVP page built on branch `ai-automation` (section 6).
5. **Content is the long game** (P2): 4 cornerstone answer articles covering AI Mode fan-out queries
   (cost, Next.js vs WordPress, slow WordPress, cost of AI automation), dated, with Article schema.
6. **Don't copy the bad tactics:** 40–57 templated city pages (WebyJuice, Tech-Studio, Gogler) are
   doorway pages under Google's spam policy. One real Katowice page + at most 1–2 real nearby cities.

---

## 2. Where mjaniec.it stands (live audit)

| Page | Words* | FAQ | Issue |
|---|---|---|---|
| /pl | 1563 | 13 | H1 generic ("Strony internetowe dla firm."), no person/place in H1, "programista" only in body |
| /pl/uslugi/strona-internetowa-dla-firmy | 870 | 6 | OK; competes with the Katowice page and the Next.js page |
| /pl/uslugi/strony-nextjs | 426 | 0 | **Copy of the page above**: same 4 H2s, same 3 packages, no own meta, no Katowice |
| /pl/uslugi/aplikacje-react | 231 | 0 | Thin |
| /pl/uslugi/wordpress · audyt-szybkosci-seo · frontend-dla-zespolow-rails | 238–275 | 0 | Thin |
| /pl/uslugi/sklepy-shopify | 416 | 0 | No FAQ |
| /pl/strony-internetowe/katowice | 962 | 8 | Good; no Next.js sentence, no "programista" in headings |
| /pl/cennik | 854 | 11 | Good |
| /pl/realizacje | 209 | 0 | No intro text |
| /pl/kontakt, /pl/cv | 268 / 394 | 0 | CV "crawled, not indexed" |

\* whole page incl. ≈120–150 words of header/footer. Articles: **0** (competitors 5–138).

Already good: robots.txt allows all AI *search* bots (training bots blocked, which doesn't affect
citation), llms.txt starts with a factual entity block, JSON-LD (Person, ProfessionalService, Service,
FAQPage, City, Breadcrumb) matches visible text, canonical/hreflang correct, no fake ratings.

Entity inconsistencies: CEIDG/privacy name "Michał Janiec - FrontDev" vs schema "Michał Janiec —
Senior Frontend Developer"; `areaServed` has Kraków, llms.txt and the Katowice page don't; `sameAs` only
LinkedIn + GitHub; llms.txt is English-first with no Polish entity sentence.

---

## 3. Competitors

### 3.1 Websites (Katowice / GZM)

| Competitor | Type, base | Prices shown (net) | What wins for them |
|---|---|---|---|
| KC Mobile (kcmobile.pl) | founder-led agency, Czeladź | site 3 500, Woo 8 000, care 299/mo | **price in title + H1**, 10 GZM city pages, trade pages, calculator, rich llms.txt, FAQ + Offer/PriceSpecification JSON-LD |
| WebAlpha (webalpha.pl) | software house, **Kraków** (says "no Katowice office") | site 3 990, landing 1 600 | honest FAQ, 31 Google reviews, 28 articles, llms.txt with phone |
| JustIdea (justidea.agency) | big agency | landing 6 000, site 24 000+ | 224 reviews (Google/FB/Clutch), logos, "what's not included" list |
| Arlek (arlek.pl) | Katowice agency, 15+ yrs | 2 500 all-in | 112 Google reviews, "3000 sites", SpeakableSpecification |
| M16, XZT, ABM, Prodesigner | Silesian agencies | 900–7 500 | city-page networks, price in title |
| programista-katowice.pl | **solo**, WordPress | none | exact-match domain + "programista" in title/H1/H2, case studies with numbers, TrustMate 4.9/10 |
| Bartosz Chmielecki | **solo**, Next.js + Sanity, Zabrze | 2 000 / 3 500 / 5 000 | 55 articles, 7 city pages (incl. Katowice) |
| Rejoin Studio | small Katowice studio, React/Next | budget brackets | case studies with numbers, llms.txt |
| WZ7, Tech-Studio, CodeinCode | WP agencies | none | 127 / 53 reviews, 9–41 city pages |
| WebyJuice | **Szczecin** (cited for Katowice!) | calculator | 57 city pages, 67 articles, WordPress-vs-Next.js comparison |

Market price band: one-page 900–2 000 zł, company site 2 500–5 990 zł (JustIdea 24k+), shops
1 790–8 000 zł. **mjaniec.it (1 000 / 2 900 zł) is low-to-middle.**

### 3.2 Web / mobile applications

HypeDev (Katowice, Laravel/React, estimate in 48 h, pages per technology), ESSAteam (Katowice,
Next.js/RN, budget brackets, also sells AI agents + n8n), Qarbon IT (Clutch 4.9/25), TwojSoftware
(remote, same template for 16 cities, "you talk directly to the developer"). Rankings list enterprise
houses only. **Nobody locally positions as a senior individual doing React/Next.js frontend for
product or Rails teams** [inference: empty niche].

### 3.3 AI automation

| Provider | Base | Prices | Strength | Weakness |
|---|---|---|---|---|
| PixelAgency | Katowice | none (blog ranges) | local page "Automatyzacja AI dla firm z Katowic i Śląska", districts + GZM towns, self-hosted n8n | no AI cases/numbers, AI not in nav |
| KC Mobile | Czeladź | **analysis 990 (credited), module 4 900, integration 7 900, system 14 900** | best RODO copy (art. 28, OpenAI no-training, AI Act) | no case studies |
| Pawlica | **solo**, Tychy | none | excellent use-case copy ("sekretarka AI"), 12+6 direct FAQs, AI Act + Air Canada precedent | no prices, no client numbers |
| ADELLO | Świętochłowice | none | 12 GZM City objects in JSON-LD | thin |
| Process Hub | Katowice | none | training + "dofinansowanie do 95%" | 1 PDF case |
| Build by Alex | **solo senior dev**, Warsaw | all in llms.txt, EUR: chatbot 890–1 490, automation 550–2 100, AI audit 690 (credited) | the closest analogue; best llms.txt seen (prices, timelines, synonyms), 24 reviews | not local |

National price bands [inference, from 12 providers]: paid audit 990–5 000 (often credited);
one-process pilot 2 000–8 000 (common 3 900–4 900); RAG website chatbot 3 000–15 000; CRM agent
8 000–45 000; care 99–1 500/mo; team workshop 2–4k per firm. API/hosting extra, usually <300 zł/mo.

### 3.4 Visuality /ai (inspiration only, must not look like it)

Take: Challenge → Solution → Impact case format, a live "ask the assistant" demo, counters, real
H2s. Their gaps we can fill: **no GDPR/AI Act section, no prices, FAQ only in schema (not visible)**.
Avoid: red `#ff2b0f`, glitch/aberration-heavy buttons, contour spheres, "+" tag corners, warning-strip
dividers, particle-face assistant, "AI in Practice / Building Mastery" headings.

---

## 4. Patterns among winners and our gaps

| Pattern (seen) | mjaniec.it today | Action |
|---|---|---|
| Price in title or H1 ("od 2 500 zł netto") | price only in meta / body | P0-3 |
| "programista" / city in title + H1 | not in any title | P0-3 |
| FAQ (5–12) + FAQPage/Service/Offer JSON-LD on every money page | 4 of 13 pages | P0-4 |
| llms.txt with prices, timelines, synonyms, phone | good, English-first | P1-6 |
| Google reviews 30–220 | 0, no profile | P0-5 |
| Articles 20–140 | 0 | P2 |
| Named person with photo | yes (CV) | keep, add to home |
| Case studies **with numbers** | nazielono only | P1-7 |
| Trade pages (dentist, salon, accountant) | none | P2 (sections, not doorway pages) |
| City-page networks | 1 page | **don't copy** |

Open slots [inference]: "naprawa strony WordPress Katowice" (only Useme profiles answer it);
senior React/Next.js frontend for teams; AI automation with KSeF + published prices + a developer who
writes real integrations, not just Make flows.

---

## 5. Plan

IDs for tracking. Owner: **M** = Michał (facts, decisions, off-site), **A** = agent (code/copy draft).
"Fact" = needs Michał's confirmation before publishing (CLAUDE.md: never invent numbers).

### P0 — this week (foundation, highest impact per hour)

- [ ] **P0-1 Deploy `fix-locale-switch`** (A done, M merges): smoke test, IndexNow, Search Console
  "Zatwierdź poprawkę" on the 404 group.
- [ ] **P0-2 Next.js page gets its own job** (A, ~2 h): proposals A+B from ai-search-visibility.md.
  Primary phrase "strony internetowe w Next.js"; own title/meta, intro for people who already want
  Next.js (agencies, companies leaving WordPress, startups), "Next.js czy WordPress?" section,
  FAQ 6, nazielono link, `areaServed`, one "od 2 900 zł + wycena" line instead of copied packages
  (Fact: D2). Link from Katowice page, business-website page, footer.
- [ ] **P0-3 Titles and headings per keyword map** (A drafts, M approves; section 7). Home title
  "Programista stron internetowych Katowice — Michał Janiec"; keep the problem-first H1 (D1) but add a
  subline with person + place; Katowice page H2 with "programista z Katowic"; price in titles where
  a confirmed price exists (e.g. "Strona internetowa dla firmy od 1 000 zł netto | Michał Janiec").
- [ ] **P0-4 Fill thin service pages** (A, 1–2 h each): aplikacje-react, wordpress, audyt, rails,
  shopify, realizacje intro. Pattern: problem → what I do → for whom → linked case → FAQ 3–5, each
  answer starting with a one-sentence direct answer. WordPress page targets "naprawa i
  przyspieszenie strony WordPress" (open slot).
- [ ] **P0-5 Google Business Profile** (M): service-area business, hidden address, name exactly
  as registered ("Michał Janiec - FrontDev" or the consistent brand, no keywords in the name), primary
  category "Projektant stron internetowych", areas Katowice + GZM, link to `/pl/strony-internetowe/katowice`,
  5–10 photos. Then Bing Places (import) and Apple Business Connect.
- [ ] **P0-6 Ask for reviews** (M): nazielono.pro, zapachdomu, bilscy, jemWszkole (check the
  employment relationship first), LinkedIn recommenders. Real only; ask them to name the service
  and city. Target 5 in 30 days.

### P1 — next 2–4 weeks

- [ ] **P1-1 AI automation page** (A built MVP, M supplies facts): section 6. Publish (remove
  `noindex`, add to sitemap, footer, services) only after prices and claims are confirmed.
- [ ] **P1-2 Profiles with one entity text** (M, ~3 h): Useme (top priority: shows up for all
  local test queries), Oferteo (free profile), Clutch (2–3 verified reviews), pkt.pl, Panorama Firm,
  LinkedIn Services, GitHub. Same name, city, URL, one-sentence description mentioning Next.js,
  Katowice and AI automation. Then add them to `sameAs` (A).
- [ ] **P1-3 Entity tidy-up** (A, 1 h, Fact: name): one business name across schema/privacy/GBP;
  `areaServed` as the same list everywhere (fix Kraków mismatch); Polish entity block at the top of
  llms.txt (name, legal name, Katowice, what, prices from, years); add the AI page and prices to llms.txt.
- [ ] **P1-4 Internal links**: footer shows all services (now 5 of 8+), each service links to one case
  study and the Katowice page; pricing links to service pages.
- [ ] **P1-5 Client credits** (M): footer/case credit "Strona: Michał Janiec (mjaniec.it)" on
  nazielono, zapachdomu, bilscy if acceptable. Not on Visuality work.
- [ ] **P1-6 Mini-audit leaflets + UTM** (existing plan) and analytics events, so channels are measurable.
- [ ] **P1-7 Case numbers** (M): jemWszkole metrics (TODO in work.ts), nazielono mobile after fix,
  before/after mini-audit reports for every new client.

### P2 — 1–3 months (content and authority)

- [ ] **P2-1 Blog/notes route** (A, ½ day): `/pl/blog` ↔ `/en/notes`, Article/BlogPosting schema,
  author Person, `dateModified`, linked from home + services.
- [ ] **P2-2 Four cornerstone articles** (A drafts from M's knowledge, M approves), answer-first,
  tables, dated:
  1. "Ile kosztuje strona internetowa dla firmy w 2026 (Śląsk)": local price band from section 3.1.
  2. "Next.js czy WordPress dla strony firmowej" (WebyJuice ranks with this format).
  3. "Dlaczego strona na WordPressie wolno działa i co z tym zrobić".
  4. "Ile kosztuje automatyzacja AI w małej firmie 2026": the pricing-guide format dominates
     "ile kosztuje wdrożenie AI" (AIPORT, PixelAgency, LessManual, StormIT, SimpleFast).
  Later: "KSeF i faktury kosztowe: co można zautomatyzować", "Make, Zapier czy n8n",
  "Chatbot na stronę: co mówi AI Act".
- [ ] **P2-3 Industry sections** (not pages): on the business-website and AI pages, 3–4 examples for
  common GZM businesses (biuro rachunkowe, gabinet, warsztat/serwis, hurtownia/e-commerce).
- [ ] **P2-4 Local community** (M): talk or open-mic at AI Café (UŚ, spinPLACE), Śniadanie AI
  Śląsk, BRAVE AI Katowice, GDG Silesia IT AfterHours; attend Infoshare Katowice (17–18 Nov 2026,
  MCK, AI Stage). Event pages = local mentions + backlinks. Rawa.Ink (city incubator) consultations.
- [ ] **P2-5 Live demo** (A, after the AI page is approved): small assistant on mjaniec.it answering
  from the site content, with AI disclosure (AI Act art. 50). The terminal's OpenAI hook
  (`src/actions/terminal-ai.ts`) is the starting point. Doubles as proof for the AI offer.

### P3 — after data (3–6 months)

- [ ] One real nearby city page (e.g. Gliwice) only with a real client/meeting story there.
- [ ] Training offer for teams (AI literacy, AI Act art. 4) and a BUR listing, which unlocks KFS
  (70%, 90% for ≤9 FTE) and PARP "Kompetencje z automatyzacji" (Śląskie = macroregion 4, BUR, up to 80%).
- [ ] Rankings (biznesmagazyn / marketingmagazyn / itmagazyn "ranking … Katowice"): likely paid;
  decide once there are reviews. katowiceteraz.pl ranks by Google Maps reviews (you get in through GBP).
- [ ] Monthly benchmark: 6 core phrases ([ai-search-visibility.md](./ai-search-visibility.md) §5) +
  "automatyzacja AI Katowice", "chatbot dla firmy Katowice"; Search Console impressions per page.

Realistic timeline [inference + Ahrefs]: brand/AI recognition weeks; long tail ("strony Next.js
Katowice", "naprawa WordPress Katowice", Rails frontend, AI automation Katowice) 1–4 months after P0;
local pack 1–3 months after GBP + reviews (mostly near the centre); "strony internetowe Katowice"
top 10: 6–12+ months, only with reviews, mentions and articles.

---

## 6. AI automation page (MVP on branch `ai-automation`)

Route: `/pl/automatyzacja-ai` ↔ `/en/ai-automation`. **`noindex`, not in sitemap, nav or footer** until
the facts below are confirmed. Primary phrase: "automatyzacja AI dla firm Katowice" (secondary:
"wdrożenie AI w firmie", "chatbot dla firmy", "automatyzacja faktur kosztowych").

Different from the site's convention on purpose (MVP): copy lives in a page-local module
(`src/app/[locale]/ai-automation/content.ts`, `{ pl, en }`) instead of messages/content layer, and the
page has its own components (`_components/`). Move it to the content layer (new type + Sanity stub)
if it stays.

Sections: hero with an animated workflow diagram (trigger → AI → person approves → system), pains,
6 use cases (KSeF cost invoices first), GZM industry examples, savings calculator (hours × rate, pure
arithmetic, no claims), process (audit → one-process pilot → measure → care), safety and law
(AI Act art. 50, RODO art. 28, no training on paid APIs, client owns accounts, human approval, logs),
pricing with placeholders, "why a developer", FAQ 10 (+ FAQPage JSON-LD), final CTA.

Facts needed from Michał before publishing (placeholders `[…]` on the page):

| # | Fact | Market reference |
|---|---|---|
| AI-F1 | Audit price (and credited against the project?) | 990–1 500 zł |
| AI-F2 | One-process pilot "from" price + typical time | 3 900–4 900 zł, 2–4 weeks |
| AI-F3 | Website assistant (RAG) "from" price | 5 900 zł |
| AI-F4 | Monthly care "from" price, what it covers | 500–700 zł/mo |
| AI-F5 | Which tools you'll really use (n8n self-hosted? Make? custom code), which models (Claude / OpenAI / Gemini paid tiers) | — |
| AI-F6 | KSeF integration: will you build it (API, certificates)? | no local competitor pitches it |
| AI-F7 | First pilot / proof: own site assistant? a client pilot? Never invent | — |
| AI-F8 | On-site audits in GZM: yes/no | PixelAgency, KC Mobile offer it |
| AI-F9 | Team workshop as an offer (and BUR listing later)? | 2–4k per firm |

Verified facts used on the page (re-check before publishing):
- AI Act art. 50 transparency applies from **2 Aug 2026**; users must be told they talk to AI at the
  latest at the first interaction (artificialintelligenceact.eu/article/50). Fines for SMEs: the lower
  of €15M / 3% (art. 99(6)). Art. 4 AI literacy since 2 Feb 2025 (softened to "support" by the Digital
  Omnibus, Reg. (EU) 2026/1744).
- KSeF: mandatory receiving for all VAT payers from 1 Feb 2026, issuing for most firms from 1 Apr 2026,
  micro-firm exemption until 31 Dec 2026, certificates-only auth from 1 Jan 2027; penalties planned
  for 1 Jan 2027, MF draft (16 Sep 2026) wants them in 2028 (jpk.info.pl). Don't fear-sell penalties.
- Anthropic commercial terms: no training on customer content; OpenAI API: EU data residency since
  Feb 2025; Gemini API paid tier: prompts not used to improve products, free tier not allowed for EEA apps.

---

## 7. Keyword map (one primary phrase per URL)

| URL | Primary phrase | Change |
|---|---|---|
| /pl | programista stron internetowych Katowice | title; subline under H1 (D1 call) |
| /pl/strony-internetowe/katowice | strony internetowe Katowice | H2 "programista z Katowic", Next.js paragraph |
| /pl/uslugi/strona-internetowa-dla-firmy | strona internetowa dla małej firmy | national; price in title |
| /pl/uslugi/strony-nextjs | strony internetowe w Next.js | P0-2 |
| /pl/automatyzacja-ai (new) | automatyzacja AI dla firm Katowice | P1-1 |
| /pl/uslugi/aplikacje-react | aplikacje webowe na zamówienie | P0-4 |
| /pl/uslugi/wordpress | naprawa i przyspieszenie strony WordPress | P0-4 |
| /pl/uslugi/audyt-szybkosci-seo | audyt szybkości strony | separate from SEO page |
| /pl/uslugi/seo-i-google-ads | SEO i Google Ads dla firm | |
| /pl/uslugi/sklepy-shopify | sklep internetowy na Shopify | |
| /pl/uslugi/frontend-dla-zespolow-rails | frontend developer Ruby on Rails (Hotwire, Stimulus) | |
| /pl/cennik | ile kosztuje strona internetowa | keep |
| /pl/realizacje | realizacje stron internetowych | intro |
| /pl/kontakt | wycena strony internetowej | |
| /pl/cv | Michał Janiec frontend developer | |

---

## 8. Key sources

- Google, AI features and your website: https://developers.google.com/search/docs/appearance/ai-features
- Google Business Profile guidelines: https://support.google.com/business/answer/3038177
- OpenAI publishers FAQ: https://help.openai.com/en/articles/12627856-publishers-and-developers-faq
- Ahrefs, how long to rank: https://ahrefs.com/blog/?p=14254 · AI citations study: https://ahrefs.com/blog/ai-citations-vs-impressions-study
- AI Act art. 50: https://artificialintelligenceact.eu/article/50/ · Digital Omnibus in force: https://www.hunton.com/privacy-and-cybersecurity-law-blog/eu-digital-omnibus-on-ai-enters-into-force
- KSeF timeline: https://jpk.info.pl/faktury/e-faktura-ustrukturyzowana-ksef/harmonogram/ · penalties to 2028 (draft): https://jpk.info.pl/aktualnosci/2026/kary-za-omijanie-ksef-dopiero-w-2028/
- Anthropic commercial terms: https://www.anthropic.com/legal/commercial-terms · OpenAI EU residency: https://openai.com/index/introducing-data-residency-in-europe/ · Gemini billing: https://ai.google.dev/gemini-api/docs/billing
- GZM "Algorytm" report (95.1% micro firms; 45.1% held back by budget/knowledge): https://metropoliagzm.pl/wp-content/uploads/2026/02/Algorytm-AI_raport-krotki.pdf
- PARP "Kompetencje z automatyzacji": https://www.parp.gov.pl/component/content/article/89548
- Competitor pages: kcmobile.pl/wdrozenia-ai/ · pixelagency.pl/automatyzacja-ai-katowice · pawlicaweb.pl/uslugi/chatbot-dla-firmy · buildbyalex.com/pl · webalpha.pl/strony-internetowe-katowice · programista-katowice.pl · bartoszchmielecki.com/katowice · justidea.agency · arlek.pl
- Directories: https://useme.com/pl/ · https://www.oferteo.pl/strony-internetowe/katowice · https://katowiceteraz.pl/firmy/strony-internetowe-katowice · https://clutch.co
- Local events: Infoshare Katowice 2026 (antyweb.pl), AI Café UŚ, Śniadanie AI Śląsk (luma.com/xzx36sup), GDG Silesia
