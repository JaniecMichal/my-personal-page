# Technical audit + backlog — mjaniec.it (2026-10-13)

Source plan: [technical-plan.md](./technical-plan.md) (TECH-001…014, ADR-001…005).
Branch: **`tech-plan`** (from `growth`). Nothing is deployed; production is unchanged.
One report instead of the plan's five `docs/*.md` files (the project keeps its docs in `.ai/`).

## Baseline (production, before changes)

Stack: Next.js 15.5.26 App Router, React 19, next-intl 4 (`localePrefix: "always"`, localized
pathnames), pnpm, Vercel (Hobby), static pages (SSG), one Server Action (brief form → Mailgun HTTP API),
Vercel Web Analytics already installed. No database, no CMS (Sanity adapter stub only), no CI, no tests
besides `scripts/smoke.sh`.

| Check | Result | Evidence |
|---|---|---|
| 38 sitemap URLs | PASS: all 200, exactly one H1, correct `lang`, self-canonical | crawl of `sitemap.xml` |
| hreflang | PASS: reciprocal pl/en on every page, self link included | HTML |
| `x-default` | **FAIL** on home: pointed to `https://www.mjaniec.it` (a redirect) | `/pl` head |
| `/` | **FAIL vs ADR-001**: 307 with cookie / Accept-Language / geo detection | `curl -I /` |
| Host | `http://mjaniec.it` → `https://mjaniec.it` → `https://www.` → `/pl` (3 hops) | Vercel domain layer, not app code |
| Wrong-locale slug | `/en/uslugi` → 307 → `/en/services` (next-intl) | low impact, left |
| 404 | PASS for `/pl/...`; **FAIL**: `/foo.xml`, `/a.b` (any dotted single segment) → **500** | prod + local |
| robots.txt | **FAIL vs ADR-004**: GPTBot, ClaudeBot, Applebot-Extended explicitly allowed; AI group dropped `/api/` disallow | `robots.txt` |
| Security headers | HSTS only (Vercel). No nosniff / Referrer-Policy / Permissions-Policy / frame protection | `curl -I /pl` |
| JSON-LD | PASS: `<` escaped, Person / ProfessionalService / Service / FAQPage / Breadcrumb from real content | `json-ld.tsx` |
| Form | Zod server validation with length limits, honeypot, HTML escaping, secrets server-only, Server Action Origin check (Next built-in). Rate limit is in-memory per instance | `src/actions/brief.ts` |
| Analytics | Vercel Analytics on, no conversion event | layout |
| Lighthouse mobile `/pl` (local prod build) | 91, LCP 3.5 s, CLS 0, TBT 30 ms | 3 runs |

## Status per task

| ID | Status | What |
|---|---|---|
| TECH-001 | DONE | This report. |
| TECH-002 | DONE (branch) | `/` → `/pl` **308** in `next.config.js`, one hop, same for every visitor and crawler. Middleware is now plain next-intl, `localeDetection: false`. `/en` untouched. |
| TECH-003 | DONE (branch) | `x-default` → `/pl` version of the page, never `/`. Canonicals were already correct. |
| TECH-004 | DONE (branch) | Sitemap was already correct (no `/`, no lastmod, x-default now `/pl`). Fixed 500 → 404 for dotted root URLs (`dynamicParams = false` on `[locale]/layout`). Preview `X-Robots-Tag: noindex` comes from Vercel; check on the next preview. |
| TECH-005 | DONE (no change) | Shopify page exists at `/pl/uslugi/sklepy-shopify`, WordPress at `/pl/uslugi/wordpress`. No duplicate pages created. |
| TECH-006 | DECISION_REQUIRED | `/pl/uslugi/wsparcie-techniczne`: not created. See decisions. |
| TECH-007 | DONE (no change) | JSON-LD already escaped and sourced from content. No LocalBusiness (no public address). |
| TECH-008 | DONE (branch) / DECISION_REQUIRED | Training blocked: GPTBot, ClaudeBot, Applebot-Extended, CCBot, Meta-ExternalAgent. Search/user bots allowed with the same private paths as `*`: OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Claude-User, PerplexityBot, Perplexity-User. Vendor docs checked 2026-10-13. **Google-Extended unchanged (allowed)**. WAF: Vercel default, no bot rules seen; `curl` with a bot UA gets 200 (not proof for verified bots). |
| TECH-009/010 | DONE (audit) / PROPOSED | Contract: Server Action `submitBrief`, states idle / success / invalid / error(generic, rateLimit). Logs contain no form content (only Mailgun status text). Open: in-memory rate limit → proposal: Vercel WAF rate-limit rule on POST `/pl/kontakt` + `/en/contact` (dashboard change, needs approval). |
| TECH-011 | DONE (branch) | `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `X-Frame-Options: DENY`, `CSP: frame-ancestors 'none'`. Full CSP left for a Report-Only step (inline JSON-LD + next-themes script need nonces/hashes). |
| TECH-012 | PARTIAL / DECISION_REQUIRED | LCP is gated by the hero fade-in (starts at opacity 0) **and** the Instrument Serif swap. Test: fade from 0.01 → LCP 3.0 s but CLS 0.28 (the font swap becomes visible). Reverted. Real fix needs a choice, see decisions. |
| TECH-013 | DONE (no change) | One H1 everywhere, skip link, focusable main, lang correct (earlier a11y round). |
| TECH-014 | DONE (branch) | `brief_sent` custom event (`types`, `locale`) fired once, only after Mailgun accepted the email (honeypot excluded). No PII. **Custom events show only on Vercel Pro**; on Hobby the call is a no-op. |
| Growth: IndexNow | DONE (branch) | Key served by `src/app/f226fde4051379d41545fce5506e9a20.txt/route.ts`; `scripts/indexnow.sh` posts all sitemap URLs. Run after each production deploy. |
| Growth: llms.txt | DONE (branch) | Added the Katowice page and a Polish section with all PL service URLs. |

## Verification (local production build)

- `tsc`, `next lint`, `next build`: pass.
- `scripts/smoke.sh http://localhost:3100`: 35/35 (new checks: `/` 308 → `/pl` with en Accept-Language and
  with `NEXT_LOCALE=en` cookie, `/en` stays 200, x-default, GPTBot blocked, headers, dotted 404).
  The same script against production fails exactly those new checks (expected until deploy).
- Headless Chrome: `/` → `/pl`, H1s on PL/EN/service/local pages, language switch on a service page
  goes to `/en/services/wordpress`, contact form renders. No console errors except the Vercel
  Analytics script, which only exists on Vercel.

## Risks and rollback

- Root redirect is now **permanent (308)**: browsers cache it. English visitors typing the bare domain
  land on Polish and use the EN switch. Rollback = revert the commit; cached 308s expire with the browser cache.
- `frame-ancestors 'none'` blocks embedding the site in iframes (none known).
- robots changes take effect on the next crawl; revert `src/app/robots.ts` to undo.

## Decisions needed (owner)

1. **Google-Extended**: G1 block (no Gemini training, but also less Gemini grounding) or G2 keep
   allowed (current). Recommendation: **G2** while visibility in AI answers is the goal.
2. **Support page** `/pl/uslugi/wsparcie-techniczne`: recommendation **not now**. The WordPress page already
   covers fixes + care; revisit after real support clients.
3. **Hero LCP**: (a) drop the fade-in only on the H1 and accept the font swap (CLS), (b) `display:
   "optional"` for Instrument Serif (first slow visit shows a fallback serif), (c) keep as is (score 91).
   Recommendation: (c) now, re-check with real CrUX data once traffic exists.
4. **Form rate limit**: add a Vercel WAF rule (free on Hobby, dashboard change)? Only if spam shows up.
5. **Vercel plan**: `brief_sent` needs Pro to be visible; alternative is Plausible (paid) or counting
   Mailgun `brief` tags.
