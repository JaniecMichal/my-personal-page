# Next steps — mjaniec.it

Status (2026-10-12): **live at https://www.mjaniec.it** since 2026-10-12 (rebuild merged, 27/27 smoke
checks on production). Branch **`ui-corrections`** holds the first post-launch round (section 6):
not merged yet. 44 static pages, build + lint + typecheck pass, axe clean on key pages in both themes.
**Next up:** review `ui-corrections` locally → push → check the Vercel preview → merge. Then the open
items in sections 4–6.

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

Related docs: [ai-services-ideas.md](./ai-services-ideas.md) · [rebuild-plan.md](./rebuild-plan.md) · [search-console.md](./search-console.md) ·
[content-guide.md](./content-guide.md) · [Sanity migration](../src/content/sanity/README.md)

---

## 1. Save the work (5 min)

- [x] Commit the rebuild on `rebuild` with the personal identity (JaniecMichal), then push.
- [x] Open a PR `rebuild` → `main`. Vercel builds a **preview URL**: check it on your phone and share it for feedback before anything goes live.

## 2. Fill in real content (you, ~1–2 h)

All placeholders look like `[X]`, `[MIESIĄC]`, `[LEVEL]`. Find them with `grep -rn "\[" src/content src/messages`.

- [x] **Prices**: landing page od 500 zł, website with CMS od 2 900 zł, Shopify od 2 500 / 5 900 zł, audit od 900 zł, one rate 120 zł/h, trial task up to 10 h at 100 zł/h (all net).
- [x] **Availability**: "Open to new projects", no date.
- [x] **Case studies** in `src/content/local/work.ts`: nazielono.pro, jemWszkole.pl and Braintrust, with screenshots in `public/work/` and a quote each.
- [x] **CV facts**: English B2, no notice period shown.
- [x] **Invoicing**: sole trader with VAT invoices, also contract for specific work / mandate contract.
- [x] **Privacy policy**: business name, city and NIP (no street address, on purpose). The email is obfuscated site-wide (`EmailLink`).
- [ ] Optional: phone number (`settings.ts` → `phone`), a new photo, an updated CV PDF (`public/michal_janiec_cv.pdf`; it still contains the email as plain text).

Follow-ups (not blocking launch):

- [ ] Ask Konrad Bilski for permission to publish his quote (assumed for now).
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
- [ ] Replace the account-level Mailgun key in `.env.local` / Vercel with a domain sending key.

Follow-ups:

- [ ] AI offer pages: see [ai-services-ideas.md](./ai-services-ideas.md) (hub + 4 offers).
- [ ] Per-page OG images in the Signal style (`opengraph-image.tsx`); the current one is the old
  design, only resized.
- [ ] `http://mjaniec.it` takes two redirect hops; wrong-locale slugs redirect with 307 (next-intl).
- [ ] Google Business Profile (section 4) — the Katowice page is the natural link target.
