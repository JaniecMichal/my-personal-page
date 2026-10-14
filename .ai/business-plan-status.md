# Business plan — status and first steps (2026-10-13)

Source: [business-plan.md](./business-plan.md) (PL, D1–D6 approved 2026-10-13). Technical side:
[technical-audit.md](./technical-audit.md).

Rule from the plan: **no content change until the fact behind it is confirmed** (table F01–F12). So
the first step is Michał filling in the table below. Content work (US-01…US-10) starts after that.

## Facts table (F01–F12), prefilled with what the site says today

Fill in the "Decision" column. Every row marked ⚠ is a claim that is live now and that the plan
blocks until confirmed.

| ID | What the site says now | Conflict with the plan | Decision (Michał) |
|---|---|---|---|
| F01 Prices | Landing / one-page from **1 000 zł** (since 2026-10-13), website with CMS from 2 900 zł, Shopify from 2 500 / 5 900 zł, audit from 900 zł, 120 zł/h. All net. | Each "from" price needs a minimum scope, what's excluded, and add-ons (D2 hybrid). Landing scope = "from your ready design" (FAQ). | |
| F02 Scope | Services: business website, Next.js sites, Shopify, WordPress, web apps, Rails frontend, speed/SEO audit, SEO & Google Ads | Confirm each is really offered, e.g. WordPress depth, Shopify themes vs apps. | |
| F03 B2B trial | ⚠ "zadanie próbne: do 10 h po 100 zł/h" (= 1 000 zł) in the "Współpraca godzinowa" plan ("Wsparcie, zespoły, agencje") and in the FAQ | D3 says the trial is **for agencies** only, with conditions (unused hours, deadline, availability). The amount already matches; the package mixes support clients and agencies. | |
| F04 Support | Care is mentioned in packages ("30 dni wsparcia") and on the WordPress page; no separate one-off vs subscription | D4: show one-off fixes vs optional care clearly, without 24/7. | |
| F05 SEO/Ads partner | ⚠ `/pl/uslugi/seo-i-google-ads`: "prowadzę razem ze sprawdzonym zespołem specjalistów", 6 included items, 10 FAQ | D6/US-10: the full offer only after the partner terms are confirmed. Referral terms with Na Zielono are **not agreed yet** (next-steps §6). | Terms still open. 2026-10-14: card stays on the home page with a softer caption ("Lepsza widoczność w Google i efekty, które możesz zmierzyć…"); the page text is unchanged until the terms are agreed. |
| F06 Response time | ⚠ **inconsistent**: "Wycena w 24 h" (meta description, home lead, contact lead, Katowice) vs "zwykle w ciągu 48 godzin" (pricing FAQ) and "W ciągu 48 h dostajesz zakres, cenę i harmonogram" (process) | Separate *first reply* from *full quote*, e.g. "odpowiadam w 1 dzień roboczy, wycena w 2–3 dni". | **Decided 2026-10-14:** first reply within 24 h ("w ciągu 24 godzin", no working-days note), full quote (scope, price, timeline) in 2–3 working days ("2–3 dni robocze"). Applied site-wide. |
| F07 Experience | "5+ lat doświadczenia", "Ponad 5 lat", "Od ponad 5 lat" | Consistent on the site (5+). Check it matches the CV and LinkedIn. | **Decided 2026-10-14:** 5+ years, as on the site. |
| F08 Case studies | nazielono.pro, jemWszkole.pl, Braintrust, each with a quote. Metrics only for nazielono (desktop Lighthouse) | Konrad Bilski's permission is still assumed (next-steps §2). jemWszkole has no numbers (fine). | |
| F09 Meetings | ⚠ "kawa przy Rynku albo u Ciebie w firmie", "do Krakowa dojadę", "Spotkanie na miejscu" (Katowice meta) | Keep only if true (already on the "to confirm" list). | |
| F10 Google Business Profile | none | Service-area business without an address; eligibility check first (your business plan). | |
| F11 History | Site live since 2026-10-12; GSC and Bing verified the same day | Baseline = "brak danych" for the 3 months before. Real baseline: export after 30 days. | |
| F12 Public projects | 3 case studies + CV entries | Confirm nothing in the CV is under NDA. | |

Claims to soften whatever the decisions are (US-01: no unproven promises): hero "Strony, sklepy i
aplikacje, które **sprzedają**", "Strona, która **przyprowadza klientów**", "ładuje się w **ułamku
sekundy**", "Core Web Vitals **na zielono od pierwszego dnia**". The plan's proposed headline: "Strony
internetowe dla firm. Tworzenie, rozwój i wsparcie techniczne."

## Where the site already meets the plan

- US-06 contact: one short form (name, email, message, consent), the rest optional, honeypot,
  confirmation and error message with an email fallback. Missing: a phone number (alternative channel).
- US-07 local: one Katowice page; districts named on it, no doorway pages.
- D5 personal brand: the whole site is "Michał Janiec", with no fake agency.
- PL-first, `/` → `/pl` (technical plan, deployed 2026-10-13).
- Pricing: "from" prices only. D2 also needs an explicit "custom project = individual quote" line (missing today).

## Order of work

**Today (2026-10-13), in this order:**

1. **Google Search Console → Request indexing** (about 10 a day). Local and business pages first (D1):
   1. `https://www.mjaniec.it/pl/strony-internetowe/katowice`
   2. `https://www.mjaniec.it/pl/uslugi/strona-internetowa-dla-firmy`
   3. `https://www.mjaniec.it/pl/cennik` (price changed today)
   4. `https://www.mjaniec.it/pl/uslugi/wordpress`
   5. `https://www.mjaniec.it/pl/realizacje/nazielono-pro`
   6. `https://www.mjaniec.it/pl/uslugi/sklepy-shopify`
   7. `https://www.mjaniec.it/pl/kontakt`
   8. `https://www.mjaniec.it/en/web-design/katowice`
   9. `https://www.mjaniec.it/en/services/business-website`
   10. `https://www.mjaniec.it/pl/uslugi/aplikacje-react`

   Skip `seo-i-google-ads` until F05 is decided (it may change). Then **Sitemaps → resubmit
   `sitemap.xml`**.
2. **Bing**: all 38 URLs were already sent through **IndexNow** today (HTTP 202). In Bing Webmaster
   Tools: check **Sitemaps** (status "Success") and, tomorrow, **IndexNow** (URLs received). Manual URL
   Submission is only needed for the top 5 if IndexNow shows nothing after 2 days: `/pl`,
   `/pl/strony-internetowe/katowice`, `/pl/uslugi/strona-internetowa-dla-firmy`, `/pl/cennik`,
   `/pl/kontakt`.
3. **Fill in the facts table above** (30–45 min). It unblocks everything else.
4. **Lead sheet** (US-11): one Google Sheet with the stages from the plan: nowy → kwalifikacja → rozmowa →
   oferta → wygrane / przegrane / odłożone.

**After the facts table (agent, 1–2 sessions, CP2 / MVP):**

5. Fix F06 everywhere (one wording for reply time and quote time).
6. Hero and service cards without unproven promises (US-01); the plan's headline as the starting point.
7. Trial package moved to the B2B path for agencies (US-09), or the Rails-teams page as its home.
8. SEO & Google Ads page: keep, rewrite to "my part / partner's part" (US-10), or hide, depending on F05.
9. Support: one-off fixes vs optional care, without 24/7 (US-08), on the existing WordPress page and in
   the pricing section, no new page.
10. Phone number as the alternative channel (US-06), if you want one.

**Days 15–30:** CP2 test of J1–J3 on mobile. **Days 31–90:** opinions, partners, 2–3 articles (cost of
a website first), monthly AI Search benchmark (10–15 fixed prompts, list in growth-plan.md).
