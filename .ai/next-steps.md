# Next steps — mjaniec.it

Status (2026-10-16, end of day): **live at https://www.mjaniec.it** (production = `main` from 2026-10-15).
Four branches are pushed and waiting for review, each built on the previous one, so **merge in this order**:
1. `fix-locale-switch`: language-switch links in the server HTML (404 slugs found by Search Console),
   permanent redirects for unprefixed paths. After deploy: smoke test, IndexNow, Search Console →
   "Nie znaleziono (404)" → **Zatwierdź poprawkę**.
2. `ai-automation`: AI automation page `/pl/automatyzacja-ai` ↔ `/en/ai-automation` (MVP, **noindex** until
   prices AI-F1–F4 replace the `[CENA]` placeholders), "AI" in the top nav and footer, research docs.
3. `seo-quick-wins`: SEO research applied (P0-2, P0-3, P0-4, P1-4, part of P1-3).
4. `blog`: blog MVP (listing + post), "Blog" in the top nav, first post as a draft.
Previews: `https://my-personal-page-git-<branch>-michals-projects-f269e437.vercel.app`.
**Next up:** Michał writes the first article (prompt + workflow: [blog-prompt.md](./blog-prompt.md); posts go into
`src/content/local/posts.ts`; AI test phrases: [ai-search-visibility.md](./ai-search-visibility.md)), confirms AI-F1–F9, then the off-site tasks P0-5 / P0-6 / P1-2 (Google Business
Profile, reviews, Useme / Oferteo profiles).
**Working checklist (PL): [plan-pracy-seo.md](./plan-pracy-seo.md)** · master plan with competitor report,
SEO audit and sources: [search-growth-plan.md](./search-growth-plan.md).
Search Console verdicts (2026-10-16): "Strona zawiera przekierowanie" (`mjaniec.it/`, `/work`) is expected;
"Zeskanowana, jeszcze nie zindeksowana" (`/pl/cv`, `/en/services/wordpress`): wait 2–4 weeks.
### Open topics: where to pick up (updated 2026-10-16)

| Topic | State | Where | Next action |
|---|---|---|---|
| Language-switch 404s (Search Console) | fixed, not deployed | branch `fix-locale-switch`; progress log 2026-10-16 | Merge, smoke test, IndexNow, Search Console → "Nie znaleziono (404)" → Zatwierdź poprawkę |
| AI search visibility (Google AI Mode / ChatGPT tests) | method + 22 test phrases ready | [ai-search-visibility.md](./ai-search-visibility.md) §5–6 | **M**: collect answers for the 6 core phrases with the template, paste them in a session; agent compares and updates the plan |
| SEO growth plan | P0 code done, off-site open | [plan-pracy-seo.md](./plan-pracy-seo.md) (checklist) · [search-growth-plan.md](./search-growth-plan.md) (research) · branch `seo-quick-wins` | **M**: P0-5 Google Business Profile, P0-6 reviews, P1-2 Useme / Oferteo / Clutch; **A**: P1-3 business name once decided |
| AI automation page | MVP, noindex | branch `ai-automation`: `src/app/[locale]/ai-automation/` (copy in `content.ts`); home tile + nav + footer | **M**: facts AI-F1–F9 (prices, tools, KSeF, on-site audits); **A**: then remove noindex, add to sitemap and llms.txt; later live assistant demo (P2-5) |
| Blog | MVP, first post is a draft | branch `blog`: `src/app/[locale]/blog/`, posts in `src/content/local/posts.ts` | **M**: first article with [blog-prompt.md](./blog-prompt.md), confirm the draft's 2 × [DO POTWIERDZENIA]; **A**: convert to `posts.ts`, `draft: false`; later pagination, tags, RSS, covers |
| Shorter redirect chains (apex → www) | planned, not built | section 5 table, row "Shorter redirect chains" (commit `d8c7f31`) | **A**: host-based redirects in `next.config.js`, then **M**: Vercel domain setting |
| Analytics, lead sheet, mini-audit | open | section 7 | **M**: lead sheet; **A**: brief funnel events |

Plans: [business-plan.md](./business-plan.md) (what/why, D1–D6) · [technical-plan.md](./technical-plan.md)
(how) · results: [technical-audit.md](./technical-audit.md).

Progress log:

- 2026-09-23: rebuild built locally (`4cbebde` = snapshot of the old terminal WIP).
- 2026-09-24 `ef04e41`: rebuild committed and pushed, PR opened. Removed leftovers (unused
  `src/assets/`, outdated `.ai/terminal-route.md`).
- 2026-09-24 `438abac`: prices, availability, CV facts, invoicing, privacy details; contact email
  obfuscated site-wide; nazielono.pro case study.
- 2026-09-24 `28ea49d`: jemWszkole.pl case study (screenshots with blurred names, PM quote); full
  Maciej Rygielski testimonial restored.
- 2026-09-24 `dd20de5`: Braintrust case study (wallet data blurred, team leader quote).
- 2026-09-29: started section 3. DNS confirmed at OVH, Mailgun account exists (nazielono).
- 2026-09-29: 3a done. Reusing the existing Mailgun domain `mjaniec.it` (EU, DKIM verified), shared
  with nazielono; separate domain sending key created for this site. No `mg.` subdomain needed.
- 2026-10-12: re-checked before launch. `rebuild` is up to date with `origin`, `main` has nothing new,
  build passes. Found that Vercel serves **`www.mjaniec.it` as primary** (apex 308 → www), while the
  site's canonical/hreflang/sitemap use `https://www.mjaniec.it` (step 3e). Added `scripts/smoke.sh`
  (27 checks, all pass on a local production build). DNS unchanged: still no DMARC.
- 2026-10-12: 3b + 3c done (env vars in Vercel, test brief arrived). Brief form simplified to one
  step: only name, email, message and consent are required; project type, budget, timeline and
  company are optional, behind an "add project details" checkbox. Field errors now clear as soon as the field is fixed. `.env.local` has the
  Mailgun vars, so the local form sends real emails. Email removed from the contact sidebar and
  the success message (still in the footer and in the send-error fallback).
- 2026-10-12: Mailgun key rotated. The EU domain was deleted by accident; `mjaniec.it` was re-added in
  the **US region** (EU not available on the plan), DKIM TXT `krs._domainkey` added in OVH, domain
  **active**, test send OK. Env is now `MAILGUN_REGION=us`; privacy policy updated (US servers, SCCs).
  nazielono.pro (Netlify) sends through this domain too: `MAILGUN_API_BASE=https://api.mailgun.net`
  and a new sending key. OVH: old `1|www` TXT removed, `_dmarc` `p=none` added.
- 2026-10-12: primary domain is `www.mjaniec.it`; all canonical URLs switched to www. Apex A record
  changed in OVH from `76.76.21.21` to Vercel's current `216.198.79.1`. Search Console verified.
- 2026-10-12: **launched**: PR merged, production smoke test 27/27. The smoke test now checks English
  via the `NEXT_LOCALE` cookie (from Poland the geo rule always picks /pl, by design).
- 2026-10-12 (`ui-corrections`): hero without captions and fitted to laptop height; new WebGL
  `WaveSphere` (inspired by Visuality's hero, own dot design, 2D `Sphere` as fallback); Polish
  translations + fixed height for testimonials and case-study quotes (with "translated" note);
  terminal hides the AI prompt while `OPENAI_API_KEY` is unset; SEO/a11y audit fixes; new service
  "Strona internetowa dla firmy"; local page Katowice; scroll reveal + link underline;
  `.ai/ai-services-ideas.md`.
- 2026-10-12: PR #3 (`ui-corrections`) merged. Production deploy failed with "Git information
  retrieval failed" (Vercel could not fetch the commit, build never started); fixed with
  `vercel redeploy … --target production`. Smoke 27/27. Google "Request indexing" quota used up
  for the day (10 URLs), so the new pages wait until tomorrow.

- 2026-10-13: technical plan audited (`.ai/technical-audit.md`) and implemented, landing price
  500 → 1 000 zł, PR #4 merged and deployed. Smoke 35/35 on production, `scripts/indexnow.sh` sent 38 URLs.
  Business plan added (`.ai/business-plan.md`, D1–D6 approved); status + facts table prefilled in
  `.ai/business-plan-status.md`.
- 2026-10-13: own visits excluded from Vercel Analytics (`SiteAnalytics`, `beforeSend`). Opt a browser
  out once on the live site: dev tools console → `localStorage.setItem("va-disable", "1")` (laptop and phone).
  Full steps incl. phone bookmarklet: [analytics-optout.md](./analytics-optout.md).
- 2026-10-14 (`perf`, based on `analytics-optout`): PSI mobile 59. Cause: `WaveField` created the WebGL
  context and compiled its shader during hydration, which blocked the first paint (production FCP 2.46 s
  with the HTML loaded at 0.42 s). Now it starts after `load` + idle, compiles with
  `KHR_parallel_shader_compile`, skips software rendering (`failIfMajorPerformanceCaveat`) and fades in.
  `AberrationField` starts after load and writes the CSS variables only on change. Local mobile (real
  throttling, no GPU): LCP 1.8 → 1.4 s. CV hero shows the photo (`public/cv/michal-janiec.jpg`, the old
  site's photo from git history) in a `brackets` frame. To do: PSI on the preview / production.
- 2026-10-14 (`content-mvp`): text work per the business plan. Home hero „Strony internetowe dla firm.”
  (CTAs „Opowiedz o projekcie” / „Zobacz realizacje”), services order by segment + „W czym mogę pomóc”,
  F06 site-wide (first reply „w ciągu 24 godzin”, no „dni robocze” on it; quote „2–3 dni robocze”),
  home FAQ 13 Qs (field `group: "about"` keeps the 2 „about me” Qs off /cennik), final CTA
  „Porozmawiajmy.” (fluid size), business-website FAQ 6 Qs. Decided: F05 (SEO via Na Zielono, not named),
  F06, F07 (5+). Full map of what's left: [content-audit.md](./content-audit.md).
- 2026-10-14 (`content-mvp`, part 2): content-audit items 1–6. Business-website page: support row per service,
  custom-quote line under packages, nazielono linked, new „Dlaczego developer”, confident speed/Google
  lines (Michał prefers benefit-led copy over hedged wording). One CTA „Opowiedz o projekcie”; packages
  „Strona-wizytówka” / „Strona firmowa z panelem”; no „Najczęściej wybierany”. Problem-first meta for
  services, pricing, work and 6 service pages. Contact: next-step success message, no-passwords hint,
  one-off fix and B2B brief types. Mailgun tags capped at 3.
- 2026-10-14 (`content-mvp`, part 3): Katowice page got the case-study grid and 4 FAQ answers. Structured
  data after a review of nazielono.pro: `WebSite` + business node site-wide (no dangling `provider` refs),
  Service `@id` + `offers` from the shown "from" price (net PLN, hourly as `UnitPriceSpecification`),
  case studies with image / `about` → services, `CollectionPage` + breadcrumb on /uslugi and /realizacje,
  `poweredByHeader: false`, AVIF/WebP. Later items in section 5. Next case study: zapachdomu.com
  (notes in [case-study-zapachdomu.md](./case-study-zapachdomu.md)), then bilscy.info.
- 2026-10-14 (`content-mvp`, part 4): zapachdomu.com case study (PL/EN, 4 chapters, prices blurred in the
  screenshots). Quote: Konrad Bilski, nazielono.pro. All
  case-study screenshots now sit in CSS device frames (`DeviceFrame`: browser window with the host,
  phone for portrait images).
- 2026-10-14 (`content-mvp`, part 5): bilscy.info case study (PL/EN, linked to `seo-sem`, cart prices
  blurred). Notes: [case-study-bilscy.md](./case-study-bilscy.md). To check: Saturday block on a Saturday.
- 2026-10-14 (`content-mvp`, part 6): case-study screenshots in an Embla carousel (`CaseStudyGallery`,
  `embla-carousel-react` + `-autoplay` 8.6.0): several slides in view (one-per-view was tried and reverted),
  autoplay 4.5 s that pauses on hover / focus / off-screen, pause button (WCAG 2.2.2), off with reduced
  motion. `ImageAsset.framed` skips `DeviceFrame` for images that already contain a mock-up (jemWszkole
  parent dashboard). Canonicals checked on all 42 sitemap URLs: each page is self-canonical with hreflang.
- 2026-10-14 Lighthouse mobile, local production build (simulated throttling; SEO/best-practices dips are
  local only: canonical points to www, Vercel Analytics script missing): case studies 94–95 (nazielono 95
  on a repeat run, 88 on the first), /pl/realizacje 93 (71 on a noisy first run), desktop nazielono 100.
  LCP ~2.9–3.2 s on mobile; the LCP element is the summary text in the case-study header, not a
  screenshot. Idea if PSI on production agrees: check the serif font loading for the header text.
- 2026-10-15 PR #8 merged (`5dcb454`): smoke test passed, all 42 sitemap URLs 200, IndexNow sent,
  10 URLs requested in Google Search Console (Katowice, new services, zapachdomu, bilscy).
- 2026-10-15 PR #9 merged (`efc97ea`, `0ea6aba`): owner answers applied. Care plans (2–4 h a month or
  one-off) at 90–150 zł/h, hourly/team work stays 120 zł/h; agency trial replaced by part-time work in
  teams; website package up to 4 pages, CMS per project; audit = PDF + fixes list + call with a quote;
  Shopify claims trimmed (no WooCommerce migration, feeds or named gateways); jemWszkole "sole frontend
  developer", Braintrust "Feature Owner"; phone on contact + footer via `PhoneLink` (no JSON-LD
  `telephone`). Smoke test passed, IndexNow sent after deploy.
- 2026-10-16 (`fix-locale-switch`, `25dbd4b`): Search Console 404 for `/pl/uslugi/react-web-apps`. The PL/EN
  switch got the translated slug from an effect (`SetAlternateSlugs`), so the server HTML linked wrong slugs
  (404) or untranslated paths (307) on every detail page. Now the `[locale]` layout passes all slugs and
  `LocaleSwitch` resolves the route with `useSelectedLayoutSegments`; `SetAlternateSlugs` removed. Unprefixed
  `/work`, `/services`, `/pricing`, `/cv`, `/contact`, `/privacy` → 308 to Polish. Smoke test checks switch links.
- 2026-10-16: research (4 agents): local competitors (websites, apps, AI automation in GZM), SEO audit of the
  live site, AI automation market (prices, KSeF, AI Act art. 50, funding, local events), Visuality `/ai`.
  Result: [search-growth-plan.md](./search-growth-plan.md) and the Polish checklist
  [plan-pracy-seo.md](./plan-pracy-seo.md).
- 2026-10-16 (`ai-automation`, `1ad133a`, `8f5ce22`): AI automation page MVP with page-local copy and components
  (deliberately outside the content layer for now): dark stage with an accent → violet glow and the wave
  field (Visuality-style pattern, own colours), glass cards, animated process flow, 6 use cases (KSeF
  invoices first), industries, savings calculator, process, safety and law, pricing placeholders, FAQ 10,
  "AI to nie dodatek" section with real counters and a GitHub calendar combining JaniecMichal +
  JaniecMichalV (parsed from GitHub's contribution page, refreshed daily; "Include private contributions"
  is on for the company account). New token `--accent-glow`. "AI" in the top nav and footer.
- 2026-10-16 (`seo-quick-wins`, `5d32564`): Next.js page rewritten (own copy, who it's for, FAQ 7, packages
  removed), FAQ on every service + "co dostajesz" cards on apps / audit / Rails, FAQ heading on service pages,
  keyword titles (home "Programista stron internetowych Katowice — Michał Janiec", prices in service titles),
  Katowice H2 with "programista", footer lists all services, `areaServed` Katowice + Silesia on services,
  Polish entity line in `llms.txt`. Header nav gap tightened so 7 items fit at 1024 px.
- 2026-10-16 (`blog`, `caba419`): blog MVP. New content type `BlogPost` (`src/content/local/posts.ts`, body as
  typed blocks with `**bold**` / `[link](/pl/…)` inline markup, Sanity stub + GROQ), `/pl/blog` ↔ `/en/blog`
  listing (featured newest + grid) and post view (progress bar, sticky TOC with active section, key points,
  tables, callouts, FAQ, related service, read next). `BlogPosting` with `hasPart` from H2s, breadcrumb,
  FAQPage; hreflang only for the languages a post exists in (`pageMetadata({ locales })`); a single-language
  post's switch link goes to the other listing. `draft: true` = previews and local only, noindex, not in the
  sitemap or llms.txt. First post (draft): "Ile kosztuje strona internetowa dla firmy w 2026" with 2
  `[DO POTWIERDZENIA]`. "Blog" in the top nav and footer.
- 2026-10-16 (`ec93766` on `ai-automation`, cherry-picked to `seo-quick-wins` and `blog`): home services grid
  shows an "Automatyzacja AI" tile (dark variant) linking to the AI page; card markup moved to a shared
  `ServiceTile`. Docs: open-topics table here, new docs listed in CLAUDE.md.

Related docs: [search-growth-plan.md](./search-growth-plan.md) · [blog-prompt.md](./blog-prompt.md) · [ai-search-visibility.md](./ai-search-visibility.md) · [content-audit.md](./content-audit.md) · [analytics-optout.md](./analytics-optout.md) · [growth-plan.md](./growth-plan.md) · [ai-services-ideas.md](./ai-services-ideas.md) · [rebuild-plan.md](./rebuild-plan.md) · [search-console.md](./search-console.md) ·
[content-guide.md](./content-guide.md) · [Sanity migration](../src/content/sanity/README.md)

---

## 1. Save the work (5 min)

- [x] Commit the rebuild on `rebuild` with the personal identity (JaniecMichal), then push.
- [x] Open a PR `rebuild` → `main`. Vercel builds a **preview URL**: check it on your phone and share it for feedback before anything goes live.

## 2. Fill in real content (you, ~1–2 h)

All placeholders look like `[X]`, `[MIESIĄC]`, `[LEVEL]`. Find them with `grep -rn "\[" src/content src/messages`.

- [x] **Prices**: landing page od 1 000 zł (raised 2026-10-13, was 500), website with CMS od 2 900 zł, Shopify od 2 500 / 5 900 zł, audit od 900 zł, one rate 120 zł/h, trial task up to 10 h at 100 zł/h (all net).
- [x] **Availability**: "Open to new projects", no date.
- [x] **Case studies** in `src/content/local/work.ts`: nazielono.pro, jemWszkole.pl and Braintrust, with screenshots in `public/work/` and a quote each.
- [x] **CV facts**: English B2, no notice period shown.
- [x] **Invoicing**: sole trader with VAT invoices, also contract for specific work / mandate contract.
- [x] **Privacy policy**: business name, city and NIP (no street address, on purpose). The email is obfuscated site-wide (`EmailLink`).
- [ ] Optional: phone number (`settings.ts` → `phone`), a new photo, an updated CV PDF (`public/michal_janiec_cv.pdf`; it still contains the email as plain text).

Follow-ups (not blocking launch):

- [x] Konrad Bilski's permission confirmed (2026-10-15).
- [ ] jemWszkole.pl number metrics (build time CRA → Vite, dev server start, Lighthouse, number of
  schools): swap them in from the `TODO(metrics)` comment in `work.ts` when available.
- [ ] nazielono.pro mobile Lighthouse is weak: fix it on the client site, then add mobile metrics.
- [ ] Profit calculator on nazielono.pro is in progress: update chapter 04 when it ships, and
  expand the case study into a full article later.

See [content-guide.md](./content-guide.md) for *what* to write.

## 3. Email and search setup before launch (~30 min) ✓

Setup facts (updated 2026-10-12): the Mailgun domain `mjaniec.it` is in the **US region** (re-created
2026-10-12, DKIM `krs._domainkey`), shared with the nazielono contact form. DNS is at **OVH** (`ns20.ovh.net` / `dns20.ovh.net`), so all records go into the OVH DNS zone.
Current zone: A `@` → `76.76.21.21` (Vercel), TXT `@` `v=spf1 include:mailgun.org ~all` (the Mailgun
domain), TXT `@` `1|www.mjaniec.it` (OVH
redirect artifact, check before launch), no MX, no DMARC yet.

Order: 3a Mailgun → 3b Vercel env vars → 3c test brief → 3d Search Console. Update this file after each.

- [x] **3a Mailgun**: reuse domain `mjaniec.it` (EU, DKIM verified, shared with nazielono), own sending key. Still to do (optional): TXT `_dmarc` `v=DMARC1; p=none;` in OVH.
- [x] **3b Vercel env vars** (Production + Preview): `MAILGUN_API_KEY` (sending key, Sensitive), `MAILGUN_DOMAIN=mjaniec.it`, `MAILGUN_REGION=us`, `MAILGUN_FROM=mjaniec.it <no-reply@mjaniec.it>`, `CONTACT_TO_EMAIL`, `NEXT_PUBLIC_SITE_URL=https://www.mjaniec.it`. Optional: `OPENAI_API_KEY` for the terminal.
  `CONTACT_TO_EMAIL` must be a real mailbox (e.g. Gmail): `mjaniec.it` has no MX, so it can't receive.
  Paste the key only in Vercel, never in chat. After saving, **redeploy** the latest `rebuild` preview
  (Deployments → ⋯ → Redeploy), because env vars apply only to new builds.
- [x] **3c** (2026-10-12, landed in inbox) Send a test brief from the **preview** URL and check that it lands in your inbox (not spam).
- [x] **3d Google Search Console** (2026-10-12, Domain property, TXT on `@`): verify the Domain property with a DNS TXT record ([search-console.md](./search-console.md)).
- [x] **3e Primary domain**: decided 2026-10-12 to keep **`www.mjaniec.it` as primary** (Vercel already
  redirects the apex to it with 308). Canonical, hreflang, sitemap and `SITE_URL` now use
  `https://www.mjaniec.it`; Vercel env `NEXT_PUBLIC_SITE_URL` must match.
- [x] **3f DNS cleanup (OVH)** (2026-10-12): remove TXT `@` `1|www.mjaniec.it` (old OVH redirect, not needed with
  Vercel) and add TXT `_dmarc` `v=DMARC1; p=none;` (helps the brief emails avoid spam).

## 4. Launch

- [x] Merge the PR into `main` (Vercel deploys production). (2026-10-12)
- [x] (2026-10-12, 27/27 on production) Smoke test: `scripts/smoke.sh` (production) or `scripts/smoke.sh <preview-url>`. Covers: `/` redirects to the right language, `/pl` and `/en` load, the brief form sends, old URLs (`/about`, `/projects`) redirect.
- [x] (2026-10-12; status may show "couldn't fetch" for the first hours) Search Console: submit `sitemap.xml`, request indexing for `/pl`, `/en`, `/pl/uslugi`, `/en/services` and the service pages.
- [x] Bing Webmaster Tools (2026-10-12): import showed no sites (Domain property), so added manually,
  verified with a CNAME in OVH, sitemap submitted.
- [ ] Google Business Profile as a service-area business in Katowice / Silesia, linking to `https://www.mjaniec.it/pl`.
- [ ] Update the website link on LinkedIn, GitHub and other profiles (same name, email and URL everywhere).

## 5. After launch (when you want)

| Item | Effort | Notes |
|---|---|---|
| Sanity CMS | 1–2 days | Implement `src/content/sanity/index.ts`, embed the Studio at `/studio`, import local data. Guide: `src/content/sanity/README.md`. |
| "Switch to Polish?" banner | 1–2 h | Dismissible hint on `/en` for visitors in Poland (Vercel geo header). |
| Cal.com booking | 1 h | Embed on the contact page and service pages, then restore "book a call" copy. |
| Spam protection | 1 h | Cloudflare Turnstile on the brief form if spam shows up (honeypot + rate limit are in place). |
| OG images per page | 2–3 h | `opengraph-image.tsx` with the Signal look instead of the single `/mjaniec-og.png`. |
| Lead storage | 2 h | Save briefs to Supabase or Notion in addition to email. |
| Blog / notes | ongoing | 2 posts a month (topics in content-guide.md), route `/pl/blog` ↔ `/en/notes`. |
| New case studies | ongoing | After the first Shopify and WordPress gigs. |
| Next.js 16 | ½ day | Upgrade once the site is stable; migrate `next lint` to the ESLint CLI. |
| Tests for SEO helpers | ½ day | Vitest for `json-ld.ts` / `seo.ts`: valid JSON, every `@id` resolves, no `[` placeholders, hreflang pairs symmetric (pattern from nazielono `tests/unit/`). |
| E2E brief form | ½ day | One Playwright spec: validation, honeypot, success message, language switch on detail pages (nazielono `tests/e2e/contact-modal.spec.ts`). |
| Brief funnel events | 1 h | `brief_start` on first focus and an error outcome next to `brief_sent`, so drop-off is visible (nazielono `lib/analytics.ts`). |
| WebPage node per page | 1–2 h | `webPageJsonLd` (isPartOf `#website`, breadcrumb, mainEntity) on CV, contact, pricing; lists already have `CollectionPage`. |
| CV `ProfilePage` | 1 h | `mainEntity → #person`, `knowsLanguage`, `worksFor`. Waits on English level and F12 (naming Visuality). |
| Blog `BlogPosting` schema | with the blog | Port nazielono `lib/blog-structured-data.ts` (author, dates, `hasPart` from h2 ids), without Sanity-specific fields. |
| Sanity revalidation webhook | with Sanity | nazielono `app/api/revalidate/sanity` as the reference. |
| Shorter redirect chains | 30 min + 1 dashboard change | httpstatus.io, 2026-10-15: `http://mjaniec.it` 3 hops, `https://mjaniec.it` 2, `http://www` 2, `https://www` 1 (→ `/pl`). The http → https hop is forced by Vercel and can't be removed. Fix: (1) in `next.config.js` add redirects with `has: [{ type: "host", value: "mjaniec.it" }]` that go straight to the final URL (`/` → `https://www.mjaniec.it/pl`, old URLs → their final `www` target, `/:path*` → `https://www.mjaniec.it/:path*`), test locally with a faked `Host`, merge; (2) **after** that deploy, Vercel → Settings → Domains → `mjaniec.it`: serve Production instead of "Redirect to www". Result: `https://mjaniec.it` 1 hop, `http://mjaniec.it` 2. Optional later: HSTS preload (`includeSubDomains; preload`), only after checking subdomains (Mailgun tracking); hard to undo. Low SEO impact, not urgent. |

## 6. Post-launch round 1: branch `ui-corrections` (2026-10-12)

Done on the branch:

- [x] Hero: removed "Otwarty na nowe projekty" and the "Senior Frontend · Katowice · zdalnie" kicker;
  height capped to the viewport so headline, lead and both CTAs fit on 1366×768 and 1440×900.
  `StatusLine` component removed (unused).
- [x] Hero background: `src/components/effects/wave-field.tsx`, raw WebGL2 (no three.js), same
  technique as the Visuality staging hero (requested by Michał): 110 latitude rings × 280 segments
  as lines, fBm noise "breathing", pointer ripples, facing fade, oversized behind the copy (z-0,
  copy z-10). Theme-aware, DPR cap 1.5, pauses off-screen, still frame with reduced motion.
  The 2D dot `Sphere` now sits in the local (Katowice) page hero.
- [x] Testimonials: PL translations, original language stored (`lang`), "Tłumaczenie z języka
  angielskiego" note, quotes and captions stacked in one grid cell → constant height. Same for
  case-study quotes (nazielono translated to EN).
- [x] Terminal checked on production: built-in commands work. No `OPENAI_API_KEY`, so free text now
  answers "command not found" and the "Just ask" hint is removed. Restore the hint in
  `commands/help.ts` if a key is added.
- [x] SEO/a11y (audit 2026-10-12, Lighthouse /pl mobile 97/96/100/100): link underlines in text,
  accessible names match visible text (logo, PL/EN), mobile menu focus + `inert`, 44px targets
  (footer, logo, terminal chips), consent link outside the label, required markers, titles ≤60
  chars, case-study title pattern, EN description, 404 metadata + noindex, heading order on listing
  pages (`headingLevel`), terminal h1/contrast/log region/OG, OG image 1200×630 JPG (110 KB),
  Doto not preloaded, `scroll-padding-top`, focusable `<main>`, sitemap x-default and no fake
  lastmod, JSON-LD image/priceRange/consistent url, FAQ JSON-LD on service pages.
- [x] New service **Strona internetowa dla firmy** (`business-website`): problem-first, Next.js named
  as the main technology (chip + intro), existing prices only. First on the home page.
- [x] **Strony firmowe w Next.js** kept (already submitted for indexing) but `showOnHome: false`:
  still on /uslugi, in the footer and the sitemap.
- [x] "Aplikacje webowe React" renamed **Aplikacje webowe** / Web applications; React stays a chip.
  Slug unchanged (`aplikacje-react`), so no redirect needed.
- [x] Local page **Katowice**: new content type `LocalPage`, route `/pl/strony-internetowe/[slug]`
  ↔ `/en/web-design/[slug]`, districts and nearby towns named on one page, local FAQ, Service JSON-LD
  with `areaServed`, linked from the footer and in the sitemap.
- [x] Hero line field also on **Realizacje**: a square as tall as the whole black section, centred
  behind all projects (`strength={1.6}` because the large canvas renders at a lower resolution).
- [x] Footer: local pages as their own "Lokalnie" group under Usługi.
- [x] New service **SEO i Google Ads** (`seo-sem`, `/pl/uslugi/seo-i-google-ads`). Internally SEO and
  campaigns are run with Na Zielono, but the page does not name the partner ("razem ze sprawdzonym
  zespołem specjalistów", Michał is the single contact). 6 "included" items and 10 FAQ entries
  based on the generic SEO/marketing questions from nazielono.pro, rewritten (no copied text, no
  unsourced numbers). Not linked to the nazielono case study. Brief form got a "SEO / Google Ads"
  type.
  The "30 dni wsparcia" row on service pages now shows only for services with packages.
- [x] Standalone docs: [lead-generation-brief.md](./lead-generation-brief.md) (PL, paste into a
  strategy session) and [logo-brief.md](./logo-brief.md) with 3 SVG concepts in `.ai/brand/`.
- [x] Visuality-inspired (not copied): scroll reveal (`ScrollReveal`, `data-reveal`) and the
  `link-draw` underline.

Decisions:

- **No page per district** (Giszowiec, Ligota, …) and no Gliwice/Kraków pages yet: near-duplicate
  location pages are doorway pages for Google. Districts are named on the Katowice page instead.
  Add another city only with content that is really about it.
- Skipped from Visuality on purpose: blur-to-sharp case cards, glitch buttons, logo marquee (too
  recognisably theirs).

To check / decide (Michał):

- [ ] Katowice page claims to confirm: "kawa przy Rynku", meeting at the client's office, travel to
  Kraków for meetings, "znam wymogi RODO/cookies". Edit `src/content/local/local-pages.ts` if any is
  not right.
- [ ] Business-website FAQ: "domain, hosting and code are in your name" and the stock-photo answer.
- [ ] Privacy text now says Mailgun US servers + SCCs (since 2026-10-12).
- [ ] Agree the referral terms with Na Zielono (commission, who invoices, how leads are handed
  over). The page doesn't name the agency, so no public consent needed.
- [ ] Pick a logo concept (`.ai/logo-brief.md`), then replace favicon / header mark.
- [ ] Replace the account-level Mailgun key in `.env.local` / Vercel with a domain sending key.

Follow-ups:

- [ ] AI offer pages: see [ai-services-ideas.md](./ai-services-ideas.md) (hub + 4 offers).
- [ ] Per-page OG images in the Signal style (`opengraph-image.tsx`); the current one is the old
  design, only resized.
- [ ] `http://mjaniec.it` takes two redirect hops (Vercel domain layer); wrong-locale slugs redirect with 307 (next-intl).
- [ ] Google Business Profile (section 4) — the Katowice page is the natural link target.

## 7. Growth (branch `growth`, from 2026-10-12)

Plan and methodology: [growth-plan.md](./growth-plan.md).

### 2026-10-16: re-index pages changed by the owner answers (after the `status-2026-10-15` merge)

The 10 Google requests for 2026-10-15 are used (Katowice, new services, zapachdomu, bilscy). Run these
on 2026-10-16, only after the PR is merged and deployed. Run `scripts/indexnow.sh` right after the
merge for Bing (no daily limit worth worrying about).

- [ ] **Google Search Console → URL inspection → Request indexing** (10 URLs, most important first):
  - `https://www.mjaniec.it/pl/cennik`
  - `https://www.mjaniec.it/pl/uslugi/strona-internetowa-dla-firmy`
  - `https://www.mjaniec.it/pl/uslugi/sklepy-shopify`
  - `https://www.mjaniec.it/pl/uslugi/wordpress`
  - `https://www.mjaniec.it/pl/uslugi/audyt-szybkosci-seo`
  - `https://www.mjaniec.it/pl/uslugi/frontend-dla-zespolow-rails`
  - `https://www.mjaniec.it/pl/realizacje/jemwszkole`
  - `https://www.mjaniec.it/pl/realizacje/braintrust`
  - `https://www.mjaniec.it/pl/kontakt`
  - `https://www.mjaniec.it/en/pricing`
- [ ] Optional, the day after (2026-10-17): `/en/services/business-website`,
  `/en/services/shopify-stores`, `/en/services/wordpress`, `/en/services/speed-seo-audit`,
  `/en/services/frontend-for-rails-teams`, `/pl/uslugi/strony-nextjs`, `/en/work/jemwszkole`,
  `/en/work/braintrust`, `/en/contact`.

### 2026-10-13: index the new pages (updated list: business-plan-status.md, "Order of work")

Google allows about 10 "Request indexing" a day per property; today's 10 are used. Bing has its own
limit (100 a day), but it waits until tomorrow too.

- [x] **Google Search Console → URL inspection → Request indexing** (2026-10-15, these 6 plus the 4
  zapachdomu / bilscy case studies PL+EN):
  - `https://www.mjaniec.it/pl/strony-internetowe/katowice`
  - `https://www.mjaniec.it/pl/uslugi/strona-internetowa-dla-firmy`
  - `https://www.mjaniec.it/pl/uslugi/seo-i-google-ads`
  - `https://www.mjaniec.it/en/web-design/katowice`
  - `https://www.mjaniec.it/en/services/business-website`
  - `https://www.mjaniec.it/en/services/seo-and-google-ads`
- [ ] **Google Search Console → Sitemaps**: resubmit `sitemap.xml` (no daily limit). Check that the
  status changed from "Nie udało się odczytać" to "Udane".
- [x] **Bing**: all 38 URLs sent via IndexNow (2026-10-13, HTTP 202). Check the IndexNow report in Bing
  Webmaster Tools tomorrow; manual URL Submission only if nothing shows up after 2 days.
- [ ] Optional, with requests left: the case studies and the remaining service pages
  (`/pl/uslugi/sklepy-shopify`, `/pl/uslugi/wordpress`, `/pl/uslugi/aplikacje-react`,
  `/pl/uslugi/frontend-dla-zespolow-rails`, `/pl/uslugi/audyt-szybkosci-seo`).

### Fixes found by the mini-audit (own site, 2026-10-12)

- [x] (2026-10-15, obfuscated, no JSON-LD `telephone`) **Phone number on the site**: the only issue the audit finds on mjaniec.it is "no visible phone
  number". Add `phone` in `src/content/local/settings.ts` (it already renders as a `tel:` link on the
  contact page); also show a tap-to-call link in the header or the mobile menu, and in JSON-LD
  (`telephone`, already wired). Local clients prefer calling, and the leaflet says so.
- [ ] **Mobile performance 88 → 90+**: Lighthouse mobile LCP 2.8 s on `/pl` (the hero `h1`).
  Ideas: start the WebGL hero field after first paint / on idle, check font loading for the serif
  italic, keep the field off the critical path. Re-run `tools/mini-audit` before/after.

### Tracking and one place for lead data

Nothing measures conversions yet, and leads would sit in three places (Gmail, mini-audit CSV, notes).

- [ ] **Analytics**: Vercel Web Analytics (free on Hobby, no cookies, so no banner needed) or
  Plausible. Custom event **"brief_sent"** (with project type) from the brief form, and UTM
  reporting for `utm_source=mini-audyt` (QR on printed audits).
- [ ] **Search Console + Bing**: weekly 5-minute look at clicks, impressions and queries; note them in
  the KPI tab.
- [ ] **Lead sheet** (Google Sheets, one file, private):
  - tab **Leady**: firma, źródło (ciepła sieć / partner / wizyta / platforma / strona / AI), etap
    (znaleziony → kontakt → odpowiedź → rozmowa → wycena → wygrany / przegrany), data kontaktu,
    następny krok + data, wartość, notatki;
  - tab **Audyty**: paste `tools/mini-audit/out/summary.csv`;
  - tab **KPI**: per month: kontakty, rozmowy, wyceny, wygrane, briefy ze strony, wejścia z QR,
    kliknięcia z Google;
  - tab **AI**: monthly check of 10 prompts in ChatGPT / Perplexity / Gemini / Claude (list in
    growth-plan.md).
- [ ] Later: **brief form → lead sheet automatically** (Google Sheets API or Notion), so website
  leads land in the same place as outreach leads (the "Lead storage" item in section 5).

### Mini-audit as a client tool (`tools/mini-audit`)

- [x] `--report` mode for existing clients: neutral footer, "Raport strony" heading.
- [ ] Before/after reports for every client project (material for case studies).
- [ ] Monthly report for care clients (nazielono.pro: mobile 68/100, LCP 9.1 s, phone below the fold;
  matches the open follow-up in section 2).

### Next (from growth-plan.md)

- [ ] Google Business Profile (service area, link to the Katowice page), then Bing Places and Apple
  Business Connect.
- [x] Code: mini-audit script: `tools/mini-audit/` (see its README). CSV of businesses → one A4 PDF each + `summary.csv`.
- [x] Code: IndexNow (`scripts/indexnow.sh`, run after each production deploy). Branch `tech-plan`.
- [x] Code: `llms.txt` with the Katowice page + Polish URLs; `brief_sent` Vercel Analytics event
  (visible on Pro only). Branch `tech-plan`.
- [ ] Warm network: list of 30 people, referral message (template in growth-plan.md).
