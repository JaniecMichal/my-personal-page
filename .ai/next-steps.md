# Next steps — mjaniec.it rebuild

Status (2026-09-23): the rebuild runs on the local `rebuild` branch. Build, lint and typecheck pass,
and 40 pages are statically generated. Rebuild changes are **not committed or pushed** yet.
Commit `4cbebde` on the branch is a snapshot of the old terminal WIP.

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
- [ ] **Case studies** in `src/content/local/work.ts` (nazielono.pro and jemWszkole.pl done, jemWszkole number metrics hidden in a `TODO(metrics)` comment; Braintrust still to do): real metrics (Lighthouse, LCP, traffic, leads), the "Result" chapter, screenshots in `public/work/` (set `cover` / `gallery`), and a 2–3 sentence client quote with permission to publish.
- [x] **CV facts**: English B2, no notice period shown.
- [x] **Invoicing**: sole trader with VAT invoices, also contract for specific work / mandate contract.
- [x] **Privacy policy**: business name, city and NIP (no street address, on purpose). The email is obfuscated site-wide (`EmailLink`).
- [ ] Optional: phone number (`settings.ts` → `phone`), a new photo, an updated CV PDF (`public/michal_janiec_cv.pdf`; it still contains the email as plain text).

See [content-guide.md](./content-guide.md) for *what* to write.

## 3. Email and search setup before launch (~30 min)

- [ ] **Mailgun**: add the sending domain `mg.mjaniec.it` (EU region) and its SPF/DKIM/MX DNS records at your DNS provider.
- [ ] **Vercel env vars** (Production + Preview): `MAILGUN_API_KEY`, `MAILGUN_DOMAIN`, `MAILGUN_REGION=eu`, `MAILGUN_FROM`, `CONTACT_TO_EMAIL`, `NEXT_PUBLIC_SITE_URL=https://mjaniec.it`. Optional: `OPENAI_API_KEY` for the terminal.
- [ ] Send a test brief from the **preview** URL and check that it lands in your inbox (not spam).
- [ ] **Google Search Console**: verify the Domain property with a DNS TXT record ([search-console.md](./search-console.md)).

## 4. Launch

- [ ] Merge the PR into `main` (Vercel deploys production).
- [ ] Smoke test: `/` redirects to the right language, `/pl` and `/en` load, the brief form sends, old URLs (`/about`, `/projects`) redirect.
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
