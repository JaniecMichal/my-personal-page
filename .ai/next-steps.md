# Next steps — mjaniec.it rebuild

Status (2026-09-24): the rebuild is pushed to `rebuild` and a PR `rebuild` → `main` is open (Vercel
preview). Build, lint and typecheck pass, 40 pages are statically generated. All real content is in
(sections 1–2 done). **Next up: 3d–3f** (Search Console, primary domain, DNS cleanup), then launch.

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
  site's canonical/hreflang/sitemap use `https://mjaniec.it` (step 3e). Added `scripts/smoke.sh`
  (27 checks, all pass on a local production build). DNS unchanged: still no DMARC.
- 2026-10-12: 3b + 3c done (env vars in Vercel, test brief arrived). Brief form simplified to one
  step: only name, email, message and consent are required; project type, budget, timeline and
  company are optional. Field errors now clear as soon as the field is fixed. `.env.local` has the
  Mailgun vars, so the local form sends real emails.

Related docs: [rebuild-plan.md](./rebuild-plan.md) · [search-console.md](./search-console.md) ·
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

## 3. Email and search setup before launch (~30 min) ← next

Setup facts (2026-09-29): the Mailgun domain `mjaniec.it` already exists (EU, set up for the
nazielono contact form) and is reused here. DNS is at **OVH** (`ns20.ovh.net` / `dns20.ovh.net`), so all records go into the OVH DNS zone.
Current zone: A `@` → `76.76.21.21` (Vercel), TXT `@` `v=spf1 include:mailgun.org ~all` (the Mailgun
domain), TXT `@` `1|www.mjaniec.it` (OVH
redirect artifact, check before launch), no MX, no DMARC yet.

Order: 3a Mailgun → 3b Vercel env vars → 3c test brief → 3d Search Console. Update this file after each.

- [x] **3a Mailgun**: reuse domain `mjaniec.it` (EU, DKIM verified, shared with nazielono), own sending key. Still to do (optional): TXT `_dmarc` `v=DMARC1; p=none;` in OVH.
- [x] **3b Vercel env vars** (Production + Preview): `MAILGUN_API_KEY` (sending key, Sensitive), `MAILGUN_DOMAIN=mjaniec.it`, `MAILGUN_REGION=eu`, `MAILGUN_FROM=mjaniec.it <no-reply@mjaniec.it>`, `CONTACT_TO_EMAIL`, `NEXT_PUBLIC_SITE_URL=https://mjaniec.it`. Optional: `OPENAI_API_KEY` for the terminal.
  `CONTACT_TO_EMAIL` must be a real mailbox (e.g. Gmail): `mjaniec.it` has no MX, so it can't receive.
  Paste the key only in Vercel, never in chat. After saving, **redeploy** the latest `rebuild` preview
  (Deployments → ⋯ → Redeploy), because env vars apply only to new builds.
- [x] **3c** (2026-10-12, landed in inbox) Send a test brief from the **preview** URL and check that it lands in your inbox (not spam).
- [ ] **3d Google Search Console**: verify the Domain property with a DNS TXT record ([search-console.md](./search-console.md)).
- [ ] **3e Primary domain**: Vercel → Settings → Domains: make `mjaniec.it` the primary domain and set
  `www.mjaniec.it` to redirect (308) to it. Today it is the other way round, so every canonical URL
  would point at a redirect. Can be done any time, takes effect immediately on production.
- [ ] **3f DNS cleanup (OVH)**: remove TXT `@` `1|www.mjaniec.it` (old OVH redirect, not needed with
  Vercel) and add TXT `_dmarc` `v=DMARC1; p=none;` (helps the brief emails avoid spam).

## 4. Launch

- [ ] Merge the PR into `main` (Vercel deploys production).
- [ ] Smoke test: `scripts/smoke.sh` (production) or `scripts/smoke.sh <preview-url>`. Covers: `/` redirects to the right language, `/pl` and `/en` load, the brief form sends, old URLs (`/about`, `/projects`) redirect.
- [ ] Search Console: submit `sitemap.xml`, request indexing for `/pl`, `/en`, `/pl/uslugi`, `/en/services` and the service pages.
- [ ] Bing Webmaster Tools: import from Search Console, submit the same sitemap.
- [ ] Google Business Profile as a service-area business in Katowice / Silesia, linking to `https://mjaniec.it/pl`.
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
