# mjaniec.it — rebuild plan (2026)

Goal: turn the portfolio into a **sales + lead-generation site** for freelance work
(websites, web apps, WordPress, Shopify, frontend for Rails teams), that also works
as a **CV for recruiters**. Bilingual **PL / EN**. Built to rank in Google and to be
quoted by AI assistants (ChatGPT, Perplexity, Gemini, Claude).

Design canvas: https://claude.ai/artifact/LVAjN2GBbYzMRAsxbAbDuN

---

## 1. Positioning

One line (PL first, clients are mostly local):

- PL: *„Strony, sklepy i aplikacje, które sprzedają. Senior frontend developer z Katowic.”*
- EN: *"Websites, stores and web apps that sell. Senior frontend developer, Katowice, Poland."*

Three audiences, each with its own path from the home page:

| Audience | Needs | Primary CTA |
|---|---|---|
| Small business / agency (PL) | Website, WordPress fix, Shopify store, speed, SEO | "Wyceń projekt" → brief form |
| Startup / product team (EN/PL) | React/Next.js app, frontend for Rails team, contract dev | "Book a call" (Cal.com) |
| Recruiter | CV, stack, experience, availability | "Download CV" / `/cv` |

Proof points to lean on: 5+ years, Visuality (enterprise Rails/Stimulus, UK property finance),
HexOcean/Braintrust (50-person team, Web3 marketplace), nazielono.pro (Next.js over WordPress
for Core Web Vitals), jemWszkole.pl (legacy CRA modernisation), Gainflow (co-founder, RN/Expo),
4 LinkedIn testimonials.

## 2. Information architecture

Localized routes (`next-intl` pathnames). Both locales prefixed; `/` redirects by
`Accept-Language`, `x-default` → `/pl`.

| EN | PL | Purpose |
|---|---|---|
| `/en` | `/pl` | Sales home: hero, services, selected work, process, testimonials, pricing teaser, FAQ, CTA |
| `/en/services` | `/pl/uslugi` | Overview of services |
| `/en/services/[slug]` | `/pl/uslugi/[slug]` | One landing page per service (SEO): `nextjs-websites`, `web-apps`, `wordpress`, `shopify`, `frontend-for-rails-teams`, `speed-seo-audit` |
| `/en/work` | `/pl/realizacje` | Case studies index |
| `/en/work/[slug]` | `/pl/realizacje/[slug]` | Case study: problem → approach → result → stack → quote |
| `/en/pricing` | `/pl/cennik` | "From" packages + hourly rate + what affects the price |
| `/en/about` | `/pl/o-mnie` | Story, values, how I work (client-facing) |
| `/en/cv` | `/pl/cv` | Recruiter view: timeline, stack matrix, availability, PDF download |
| `/en/contact` | `/pl/kontakt` | Brief form + Cal.com + email/phone |
| `/en/notes` | `/pl/blog` | Short articles (SEO + AI visibility), phase 2 |
| `/terminal` | — | Keep the WIP terminal as an easter egg, linked from footer |
| `/en/privacy` | `/pl/polityka-prywatnosci` | Required by GDPR once the form stores leads |

## 3. Tech decisions

- **Next.js 15.5 → 16** (after the rebuild branch is stable), React 19, TypeScript strict.
- **Tailwind v4** with CSS-first `@theme` tokens; delete the ~50 unused shadcn components,
  `styles/globals.css`, duplicate `lib/utils.ts`, and unused deps (recharts, embla, vaul,
  cmdk, input-otp, react-day-picker, sonner, most Radix, framer-motion if `motion` is not needed).
- **i18n: `next-intl`**: `messages/{pl,en}.json` for UI copy, localized pathnames,
  `generateStaticParams` per locale, `setRequestLocale` for static rendering.
- **Content: Sanity CMS** (replaces Hygraph). `next-sanity` + Studio embedded at `/studio`
  in the same Next app, TypeGen for typed GROQ queries, `@sanity/image-url` + `next/image`.
  - i18n: `@sanity/document-internationalization` (one document per language, linked as
    translations) for case studies, services, blog posts, legal pages; field-level
    `internationalizedArray` for short shared docs (site settings, FAQ, testimonials).
    UI strings (buttons, nav, form errors) stay in `next-intl` JSON.
  - Schemas: `siteSettings` (availability status, contact, socials, SEO defaults),
    `service`, `caseStudy` (client, role, stack, period, metrics[], chapters[] as Portable Text,
    gallery, quote), `testimonial`, `experience` (CV timeline), `skillGroup`, `pricingPlan`,
    `faq`, `post`, `page` (legal).
  - Caching: static pages + `revalidateTag` via a Sanity webhook → `/api/revalidate`
    (or `defineLive` from next-sanity for live content). Draft Mode + Presentation tool
    for click-to-edit preview.
  - SEO fields per document (title, description, OG image, noindex) feed `generateMetadata`,
    `sitemap.ts` and JSON-LD.
  - Free plan is enough (up to 20 users, 10k documents); dataset `production`, public read
    through the CDN, write token only on the server.
- **Forms: server action + Resend** instead of Gmail SMTP. Zod validation, HTML-escaped
  email body (the current form injects raw input), honeypot + Cloudflare Turnstile,
  rate limit. Leads also saved (Supabase table or Notion DB) so nothing gets lost in email.
- **Booking: Cal.com embed** (free) on contact + service pages.
- **Analytics:** Vercel Analytics + custom events (`cta_click`, `brief_step`, `brief_submit`,
  `cv_download`, `call_booked`). Google Search Console + Bing Webmaster Tools.
- **3D sphere:** `three` (or `ogl`, ~10 kB) point-sphere in a client component, dynamically
  imported, paused off-screen, static SVG fallback + `prefers-reduced-motion`.
- **Chromatic aberration:** pure CSS (`box-shadow`/`text-shadow` RGB split, 1–4 px),
  hover/scroll-driven, no WebGL needed.

## 4. Design direction: "Signal"

Inspired by the Visuality redesign (editorial serif, mono caps labels, corner-bracket frames,
RGB aberration, wireframe 3D object, dark stepped footer), but a **distinct personal brand**:
you work at Visuality, so the site shouldn't look like a clone of your employer's site.

- **Type (all free, Google Fonts, self-host with `next/font`):**
  - Display: **Instrument Serif** (editorial, tight, similar role to Old Standard TT).
  - Body/labels: **JetBrains Mono**.
  - Dot-matrix accents (numbers, buttons, status): **Doto**.
  - Note: all three Visuality fonts are actually free too (Old Standard TT and Iosevka Aile are OFL,
    and their design spec says MatrixType Display is CC0). We skip them on purpose so the site
    doesn't read as a Visuality clone.
- **Color:** paper `#F3F1EC`, ink `#111214`, graphite `#5B5F66`, rule `#D8D5CE`,
  night `#0D0E10` sections, one accent **Signal Blue `#2E3BFF`** (Visuality owns orange-red),
  aberration channels `#FF3B30` / `#00D4FF`.
- **Effect implementation** (same technique as Visuality, our own values): one rAF "signal" hook
  maps pointer + scroll velocity to CSS vars `--ab-x/--ab-y/--ab-strength` on `<body>`;
  `text-shadow`/`drop-shadow` read them. Sphere = `ogl`/`three` points on a Fibonacci sphere,
  IntersectionObserver pause, reduced-motion static frame.
- **Signature elements (what people remember):**
  1. A **dot-matrix sphere** in the hero that slowly rotates and bends toward the cursor.
     The dots are "clients/pixels"; on scroll it flattens into the grid of the next section.
  2. **Corner-bracket frames** with a 1–2 px RGB split that "glitches" on hover.
  3. **Status line** like a terminal: `● available from Nov 2026 — 2 slots left` (drives urgency).
  4. **Language switch as a toggle** `PL / EN` in mono, in the nav.
  5. **Dark "night" footer** with a big serif "Let's build it." / „Zbudujmy to.” CTA.

## 5. Page content (home, top to bottom)

1. Nav: logo `mj.` · Usługi · Realizacje · Cennik · CV · Kontakt · `PL/EN` · CTA "Wyceń projekt".
2. Hero: mono kicker, serif H1, sub, 2 CTAs, availability status, sphere.
3. Trust strip: clients/companies (Visuality, HexOcean/Braintrust, nazielono.pro, jemWszkole.pl, Gainflow).
4. Services grid (6 cards, each links to its landing page, "from" price).
5. Selected work: 3 case studies with a metric each (e.g. Lighthouse 98, LCP 1.2 s). Only real numbers.
6. Process (5 steps, 1–2 weeks for a site): brief → proposal → build → launch → care.
7. Testimonials (4 real LinkedIn quotes).
8. Pricing teaser: 3 packages + "custom".
9. FAQ (8–10 Q&As, `FAQPage` schema, written to be quotable by AI).
10. Final CTA + brief form entry, then footer.

## 6. SEO & AI visibility checklist

- `metadataBase`, per-page `generateMetadata` with `alternates.languages` (hreflang pl/en/x-default).
- `app/sitemap.ts` (all locales + case studies + services, with alternates) and `app/robots.ts`.
  Delete the static `public/sitemap.xml`.
- `opengraph-image.tsx` per route (next/og) using the brand look.
- JSON-LD: `Person` (sameAs LinkedIn/GitHub), `ProfessionalService` (areaServed Katowice,
  Silesia, Poland, remote EU/UK), `Service` per service page, `Offer` with price ranges,
  `FAQPage`, `BreadcrumbList`, `CreativeWork` per case study, `Review` for testimonials.
- **`/llms.txt` + `/llms-full.txt`**: plain-text summary of services, prices, stack,
  availability, contact. Allow GPTBot, ClaudeBot, PerplexityBot and Google-Extended in robots.
- Keyword clusters (PL): *strona internetowa Katowice*, *programista React freelance*,
  *sklep Shopify wdrożenie*, *poprawki WordPress*, *strona Next.js*, *przyspieszenie strony*.
  (EN): *freelance Next.js developer Poland*, *React contractor*, *Stimulus/Tailwind frontend for Rails*.
- Core Web Vitals budget: LCP < 1.8 s, CLS < 0.05, JS < 120 kB on home. Sphere lazy + off main thread.
- Off-site: Google Business Profile (Katowice), LinkedIn featured link, GitHub profile README,
  Clutch/Useme/Oferia profiles, consistent NAP (name/address/phone) everywhere.

## 7. Delivery phases

| Phase | Scope | Est. |
|---|---|---|
| 0 | Branch `rebuild`, commit or park the terminal WIP, cleanup deps/unused UI, Tailwind v4, next-intl skeleton, tokens + fonts | 1–2 days |
| 0.5 | Sanity project + embedded Studio, schemas, document i18n, TypeGen, revalidate webhook, move current content (experience, skills, testimonials, projects) into Sanity | 1–2 days |
| 1 | Home PL/EN, nav/footer, sphere + aberration components, contact brief form (Resend, Turnstile, lead storage) | 3–4 days |
| 2 | Services index + 6 service landing pages, pricing page, FAQ | 2–3 days |
| 3 | Case studies (3 to start: nazielono.pro, jemWszkole.pl, Braintrust/HexOcean), CV page + new PDF | 2–3 days |
| 4 | SEO: metadata, hreflang, sitemap/robots, JSON-LD, OG images, llms.txt, Search Console | 1–2 days |
| 5 | QA: Lighthouse, a11y (axe), mobile, forms, analytics events; launch; Google Business Profile | 1 day |
| 6 | Blog/notes (2 posts/month), Shopify/WordPress case studies after first gigs | ongoing |

## 8. Open questions

- Prices: hourly rate and "from" prices per package (currently in memory: 140–160 zł/h).
- Real metrics for case studies (Lighthouse, traffic, conversion), and client permission to name them.
- Phone number on the site? (Local PL clients expect one.)
- Photo: new professional photo for hero/about?
- Hygraph → Sanity: migrate existing projects by script or re-enter (only a few entries).
- Default locale: PL (local clients) or EN (international)? Recommended: PL.
