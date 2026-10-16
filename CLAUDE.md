# CLAUDE.md — mjaniec.it

Personal sales + CV site of Michał Janiec (Senior Frontend Developer, Katowice). Goal: win freelance
clients (Next.js sites, Shopify, WordPress, React apps, frontend for Rails teams) and job offers.
Bilingual **PL (default) / EN**. Deployed on Vercel at https://www.mjaniec.it.

Start of a session: read `.ai/next-steps.md` for current status and open items.

## Commands

```bash
pnpm dev                    # http://localhost:3000 → redirects to /pl or /en
pnpm build                  # production build (also runs lint + typecheck)
npx tsc --noEmit            # typecheck
npx next lint --dir src     # lint (add --fix for import order / type imports)
```

- Package manager: **pnpm**. Node 22.
- No test suite yet. Verify changes with build + lint + typecheck. For UI, run the server and check with
  a headless browser (playwright-core with `channel: "chrome"` works on this machine; install it in the
  scratchpad, not in the project).
- No `.env` is needed locally. Without Mailgun keys the brief form logs the email to the server console.
- `scripts/smoke.sh [base-url]` checks redirects, pages, canonical/hreflang, robots, headers.
  `scripts/indexnow.sh` pings Bing with all sitemap URLs after a production deploy.

## Git

- Repo: `github.com/JaniecMichal/my-personal-page`. Remote uses the personal SSH alias `git@github-private:…`.
- Commit with the personal identity only, injected per command (never edit git config):
  `git -c user.name="JaniecMichal" -c user.email="michal.janiec95@gmail.com" commit -m "…"`.
  Single-line messages. The user's `git-commit-push` skill handles this.
- Work on branches. Pushing to `main` deploys production.

## Architecture

| Path | Purpose |
|---|---|
| `src/app/[locale]/…` | All pages (home, services, services/[slug], work, work/[slug], pricing, cv, contact, privacy, 404). Static, with `generateStaticParams`; detail pages use `dynamicParams = false`. |
| `src/app/layout.tsx` | Pass-through. `[locale]/layout.tsx` and `terminal/layout.tsx` each render their own `<html>`. |
| `src/app/sitemap.ts`, `robots.ts`, `llms.txt/route.ts` | SEO / AI endpoints. |
| `src/app/terminal/` + `src/components/terminal/` | English-only CLI easter egg (older WIP code, 2-space indent). Reads local content directly. |
| `src/i18n/routing.ts` | Locales and **localized pathnames** (`/pl/uslugi` ↔ `/en/services`). Add every new route here. |
| `src/i18n/navigation.ts` | Locale-aware `Link`, `redirect`, `usePathname`, `getPathname`. Always use these, not `next/link`, inside `[locale]`. |
| `src/middleware.ts` | Plain next-intl (`localeDetection: false`). The bare `/` is a permanent 308 to `/pl` in `next.config.js` (ADR-001: no language detection). |
| `src/messages/{pl,en}.json` | UI copy. Typed via `src/global.d.ts`. |
| `src/content/` | **Content layer.** Pages only call `content.getX(locale)` from `@/content`. |
| `src/content/types.ts` | Domain types mirroring planned Sanity schemas. |
| `src/content/local/*.ts` | Current data. Localized fields are `{ pl, en }`, resolved by `resolveLocale`. |
| `src/content/sanity/` | Adapter stub, GROQ queries, migration README. Switch with `CONTENT_SOURCE=sanity`. |
| `src/components/sections/` | Page sections (hero, services grid, work grid, process, testimonials, pricing, FAQ, final CTA). |
| `src/components/layout/` | Header, footer, mobile menu, locale switch, theme toggle. |
| `src/components/effects/` | `Sphere` (2D canvas dot sphere) and `AberrationField` (pointer/scroll → CSS vars). |
| `src/app/[locale]/ai-automation/` | AI automation page (MVP, noindex until prices are confirmed). **Deliberate exception**: copy lives in the page-local `content.ts` (`{ pl, en }`) and components in `_components/` (glow stage, flow diagram, calculator, GitHub heatmap from both accounts). Move to the content layer if it stays. |
| `src/app/[locale]/blog/` + `src/components/blog/` | Blog listing and post view. Posts: `src/content/local/posts.ts` (`BlogPost`, body as typed blocks, inline `**bold**` / `[label](/pl/…)`). `draft: true` renders only outside production (`VERCEL_ENV`), always noindex, never in sitemap / llms.txt. A post may exist in one language: `slugs` is partial and `pageMetadata({ locales })` limits hreflang. Helpers in `src/lib/blog.ts` (heading ids, TOC, reading time). |
| `src/components/ui/` | `ButtonLink`/`ButtonAnchor`, `Container` (+ `gutter`), `SectionHeader`, `Tag`, `JsonLd`, `ImagePlaceholder`. |
| `src/actions/brief.ts` | Brief form server action: Zod (`src/lib/brief.ts`), honeypot, in-memory rate limit, HTML escaping, Mailgun. |
| `src/lib/brief-options.ts` | Client-safe options/types for the form (keeps zod out of the client bundle). |
| `src/lib/mail/` | `MailProvider` interface + Mailgun HTTP client (no SDK). |
| `src/lib/seo.ts` | `pageMetadata` / `alternatesFor` / `localizedUrl`: canonical + hreflang for every page. |
| `src/lib/json-ld.ts` | Person, ProfessionalService, Service, FAQPage, BreadcrumbList. |
| `src/styles/globals.css` | Tailwind v4, design tokens (light + `[data-theme="dark"]`), custom utilities. |

## Rules that matter

- **i18n:** every user-facing string goes into both `pl.json` and `en.json`, or into content with `{ pl, en }`.
  Never hardcode copy in components. next-intl rejects **arrays inside namespaces** in typed keys; use keyed
  objects (`{ p1, p2 }`) instead.
- **Slugs differ per locale.** `Service`, `CaseStudy` and `LocalPage` carry `slug` (current locale) and `slugs`
  (all locales). The `[locale]` layout passes a map of all `slugs` to the header, keyed `<route folder>/<slug>`,
  and `LocaleSwitch` resolves the route with `useSelectedLayoutSegments`, so the switch links are correct in
  the server HTML (crawlers). A new detail route needs its entries added to that map. For hreflang, pass
  `hrefFor: (l) => ({ pathname, params: { slug: x.slugs[l] } })` to `pageMetadata`.
- **Every page** exports `generateMetadata` using `pageMetadata(...)` and calls `setRequestLocale(locale)`.
- **New content type:** add the type in `types.ts`, a method in `source.ts`, local data + adapter method in
  `local/`, a stub in `sanity/index.ts`, and a GROQ query in `sanity/queries.ts`.
- **Styling:** Tailwind v4 with semantic tokens (`bg-ground`, `bg-surface`, `text-ink`, `text-ink-soft`,
  `text-muted`, `border-rule`, `bg-accent`, `text-on-accent`). Dark sections use the `inverse` utility, which
  remaps tokens, so components inside work unchanged. Signature utilities: `brackets` (corner frame, needs
  `relative`), `ab` / `ab-xl` (chromatic aberration text), `chamfer`, `label`, `dotgrid`, `u-accent`.
  No hardcoded hex in components, except the error red.
- **Fonts:** Instrument Serif (`font-serif`, headings), JetBrains Mono (body/labels), Doto (`font-dots`,
  numbers and buttons). All via `next/font` with `latin-ext` for Polish.
- **Theme:** next-themes with `attribute="data-theme"`. Dark variant: `dark:`.
- **Accessibility:** real `<button>`/`<a>`/`<label>`, `aria-current` on nav, touch targets ≥44px, FAQ as
  native `<details>`, respect `prefers-reduced-motion` (both effects already do).
- **Server-only code** (`@/content`, `@/lib/mail`) imports `server-only`. Client components get data via props.
- **Code style:** tabs, double quotes, semicolons, width 100 (Prettier). ESLint enforces import order,
  `import type`, no default exports except in `src/app/**`, `middleware.ts`, `i18n/request.ts`.
- **Links out of `[locale]`** (e.g. `/terminal`) use `next/link`, not the i18n `Link`.

## Content status

Placeholders in `[BRACKETS]` (prices, availability date, metrics, English level, invoicing, privacy business
details) still need real data from Michał. Never invent numbers, testimonials or client names; keep a
placeholder and flag it instead. Real facts: `src/content/local/cv.ts` and `src/data/profile.ts`
(the terminal AI prompt).

## Design references

- Claude Design canvas "Signal": https://claude.ai/artifact/LVAjN2GBbYzMRAsxbAbDuN
- Inspired by the Visuality redesign (`~/projects_visuality/visuality-website`, branch `staging`, and Figma
  file `sFdqDgGlAZqN6P3gf9q0Gw`), deliberately not a copy: different fonts and a blue accent instead of
  Visuality's orange. Michał works at Visuality, so the site must not look like theirs.

## Docs

- `.ai/next-steps.md`: current status, **open topics table** (where to pick up each topic) and to-do list (**start here**)
- `.ai/plan-pracy-seo.md` (PL): working checklist P0–P3 for search visibility, facts AI-F1–F9, keyword map
- `.ai/search-growth-plan.md`: competitor report (websites, apps, AI automation in GZM), SEO audit, full plan with sources
- `.ai/ai-search-visibility.md`: AI-search test phrases and how to collect answers
- `.ai/blog-prompt.md`: blog workflow and the prompt for a writing agent
- `.ai/business-plan.md` (PL, D1–D6: offer, journeys, user stories) and `.ai/business-plan-status.md` (facts table F01–F12, order of work). **No content change without a confirmed fact.**
- `.ai/technical-plan.md` (PL, owner-approved ADRs) and `.ai/technical-audit.md` (audit + status per TECH task)
- `.ai/rebuild-plan.md`: original plan, IA, tech decisions
- `.ai/search-console.md`: Google Search Console / Bing setup
- `.ai/content-guide.md`: how to write the content
- `src/content/sanity/README.md`: Sanity migration
