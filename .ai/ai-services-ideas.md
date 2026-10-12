# AI for small companies in Silesia — page ideas

Goal: win small and medium companies (5–50 people) in Katowice / Silesia that hear about AI but
don't know where to start. Angle: **practical, measurable, safe** — not hype. Michał already uses
AI daily (Claude, MCP servers, custom tooling; see `src/data/profile.ts`), which is the proof.

Status: ideas only, nothing built. Prices are placeholders: decide them before publishing.

## Recommended structure

One hub page plus 3–4 concrete offers. Every page answers one owner's problem, in their words.

| Page (PL / EN) | Route idea | Problem it answers |
|---|---|---|
| **AI w małej firmie** / AI for small businesses (hub) | `/pl/ai-dla-firm` ↔ `/en/ai-for-business` | "Everyone talks about AI. What does it change for *my* company?" |
| Asystent AI na stronie / AI assistant on your website | `/pl/ai-dla-firm/asystent-na-stronie` | Same questions every day by phone and email, enquiries after hours |
| Automatyzacja biura / Office automation | `/pl/ai-dla-firm/automatyzacja` | Retyping invoices and orders, copying data between systems |
| Warsztat AI dla zespołu / AI workshop for your team | `/pl/ai-dla-firm/warsztat` | Staff use ChatGPT ad hoc, nobody knows what's allowed |
| Audyt AI / AI audit (entry offer) | `/pl/ai-dla-firm/audyt` | "Where would AI actually save us time?" |

Local SEO: the hub links to the Katowice page and mentions Silesia naturally ("firmy z Katowic i
Śląska"), but **no city-specific AI pages**: same doorway-page risk as districts.

## Offer ideas (what Michał would actually deliver)

1. **Audyt AI (entry, fixed price `[PRICE]`)**: 2–3 h workshop + a written list of 5–10 processes,
   each with time saved per week, cost, risk and a "do now / later / never" verdict. Low risk for
   the client, natural upsell to the rest.
2. **Asystent na stronie**: a chat answering from the company's own documents (offer, price list,
   FAQ, regulations), handing over to a human by email or phone, with logs the owner can read.
   Fits the existing site work (Next.js, the brief form, Mailgun).
3. **Automatyzacja dokumentów**: invoices / orders / CVs from email to a spreadsheet or the
   accounting tool; AI extracts the data, a person approves. Measured in hours per month.
4. **Treści i SEO z AI**: product descriptions, blog drafts and Google Business posts in the
   company's tone, reviewed by a person. Pairs with the website and local SEO offers.
5. **Wewnętrzna wyszukiwarka wiedzy**: "ask our procedures": staff ask questions, answers cite
   the source document. For companies with lots of manuals or regulations.
6. **Warsztat dla zespołu (½ day)**: safe everyday use (what data must not go into a chatbot),
   prompt patterns for their roles, a short internal AI policy as a deliverable.
7. **Opieka AI (monthly)**: keep assistants and automations working, update knowledge, monthly
   report of questions asked and time saved.

## Content each page needs

- **The problem in the owner's words** and a before/after for one ordinary day.
- **3 concrete examples per industry** common locally: services and offices (accounting,
  law, medical and physio clinics), local shops and
  e-commerce, manufacturing and logistics (Silesia), real estate.
- **Safety and GDPR (RODO)**: where data goes, EU hosting options, nothing used for training,
  human approval. This is the main objection; answer it up front.
- **How it works**: audit → pilot on one process (2–4 weeks) → measure → expand.
- **Proof**: one small real pilot first (e.g. an assistant on nazielono.pro or Michał's own site,
  or the brief form triaging enquiries). Never invent case studies or numbers.
- **FAQ**: cost, "will it replace my staff", "what if it makes a mistake", "do I need ChatGPT
  Plus", data ownership, which models (Claude / OpenAI / open-source).

## Keyword starting points (validate in Search Console / Keyword Planner)

PL: "wdrożenie AI w firmie", "AI dla małych firm", "automatyzacja procesów AI", "chatbot na stronę
internetową", "asystent AI dla firmy", "szkolenie AI dla pracowników Katowice", "audyt AI".
EN: "AI consultant Poland", "AI chatbot for website", "AI automation small business".

## Build notes

- New content type `AiOffer` (or reuse `Service` with a `category` field) following the
  CLAUDE.md "new content type" checklist; hub as a static page under `[locale]`.
- Add the hub to the nav only once 2+ offers are live; until then, link it from the home services
  grid and the footer.
- A working demo beats copy: a small assistant on the site itself (the terminal's OpenAI hook in
  `src/actions/terminal-ai.ts` is a starting point) answering questions about Michał's services.
