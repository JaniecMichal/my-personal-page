# mjaniec.it

Sales and portfolio site of Michał Janiec, bilingual (PL/EN). Next.js 15 App Router, Tailwind CSS v4, next-intl.

## Run locally

```bash
pnpm install
cp .env.example .env.local   # everything is optional for local development
pnpm dev                     # http://localhost:3000 → redirects to /pl
```

Without Mailgun keys, the brief form still works locally: the email is printed to the terminal.
In production it needs `MAILGUN_API_KEY`, `MAILGUN_DOMAIN` and `CONTACT_TO_EMAIL` (see `.env.example`).

## Structure

| Path | What |
|---|---|
| `src/app/[locale]/…` | Pages. URLs are localized in `src/i18n/routing.ts` (`/pl/uslugi` ↔ `/en/services`). |
| `src/messages/{pl,en}.json` | UI copy. |
| `src/content/` | Content layer. Pages only call `content.getX(locale)`. Data lives in `local/` today; `sanity/` has the adapter stub, GROQ queries and a migration guide. |
| `src/components/effects/` | Signature effects: dot sphere (canvas) and chromatic aberration field. |
| `src/styles/globals.css` | Design tokens (light/dark), `brackets`, `ab`, `chamfer`, `inverse` utilities. |
| `src/actions/brief.ts` | Brief form server action (Zod, honeypot, rate limit, Mailgun). |
| `src/lib/mail/` | Mail provider interface + Mailgun HTTP client. |
| `src/app/sitemap.ts`, `robots.ts`, `llms.txt/` | SEO and AI-visibility endpoints. |
| `src/app/terminal/` | Terminal easter egg (optional `OPENAI_API_KEY`). |

## Docs

- `CLAUDE.md`: working notes for Claude Code sessions
- `.ai/next-steps.md`: current status and to-do list
- `.ai/rebuild-plan.md`: plan and roadmap
- `.ai/content-guide.md`: content writing guide (PL)
- `.ai/search-console.md`: Google Search Console and Bing setup
- `src/content/sanity/README.md`: switching content to Sanity
