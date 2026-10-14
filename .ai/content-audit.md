# Content audit vs business plan (2026-10-14)

Read-only audit of all user-facing copy against [business-plan.md](./business-plan.md) and the facts
table in [business-plan-status.md](./business-plan-status.md). Done before this audit (branch
`content-mvp`): home hero, home services, home FAQ (13), business-website FAQ, reply time site-wide
(24 h / quote 2–3 dni robocze), final CTA „Porozmawiajmy.”. Tick items off here as they are done.

## Order of work

**Unblocked (J1 first):**

1. [ ] **Strona internetowa dla firmy**: remove „ładuje się w ułamku sekundy” (`services.ts:31`),
   „dbam o to, żeby klienci ją znaleźli” / „dobrze widoczne w Google” (`:14`); „W skrócie” support row
   per package (now „30 dni w cenie” for every service with plans, `services/[slug]/page.tsx:97`, but the
   1 000 zł package has 1 round of fixes); D2 line „projekty niestandardowe = wycena indywidualna”; link
   the nazielono case to this page (`work.ts:29` points to `nextjs-websites`); non-technical „Dlaczego
   developer” block (now Web3 / UK banks, and „zero wtyczkowego chaosu” clashes with the WordPress offer).
2. [ ] **One CTA wording**: „Wyceń projekt” (header, `common.cta.quote`), „Wyślij brief”, „Zacznij brief”,
   „Zapytaj o wycenę” → „Opowiedz o projekcie”. One name per package (1 000 zł: „Strona-wizytówka” vs
   „Landing page”; 2 900 zł: „z panelem” vs „z CMS”). D2 line on /cennik and home pricing.
3. [ ] **Pricing**: drop „Najczęściej wybierany” (`marketing.ts:113`, `services.ts:380`); Shopify card
   „od 2 500 zł” lists items only the 5 900 zł package has.
4. [ ] **Meta titles/descriptions** problem-first (services, pricing, work); Polish label for the home work
   section („02 — Case studies”).
5. [ ] „ułamek sekundy” on the Next.js page (`services.ts:197`); audit page („dlaczego Google jej nie lubi”).
6. [ ] **Contact**: success message with the next step (quote in 2–3 dni robocze), „nie wysyłaj haseł”
   near the form, brief types for B2B and one-off fix vs care.

**Waiting on one decision each (one answer unblocks the whole row):**

7. [ ] **F04 support**: process step „Opieka: Abonament albo…” (no website plan exists), WordPress page as
   J2 „naprawy i poprawki” with one-off vs care, care packages on business / Shopify / Next.js pages,
   Shopify care „miesięczny raport, szybka reakcja”.
8. [ ] **F03 agency trial**: pricing card 4 „Wsparcie, zespoły, agencje”, FAQ „trial”, Rails/B2B page (NDA,
   white-label, cooperation model).
9. [ ] **F09 + F10 meetings / Google Business Profile**: Katowice page and meta („kawa przy Rynku”,
   „dojadę do Krakowa”, „lokalne SEO… znaleźli Cię”), „wizytówka” on the business-website page.
10. [ ] **F01 + F02 prices and scope**: Shopify scope (payments, WooCommerce migration, feeds), audit scope,
    web apps (D2 line), keep or merge the Next.js page.
11. [ ] **F05 referral terms**: SEO/Ads page „my part / partner's part”, remove result promises („więcej
    zapytań i sprzedaży”, „ruch od pierwszego dnia”, ChatGPT/Gemini), privacy policy „nie udostępniam
    danych innym podmiotom” vs passing enquiries to the partner (`pl.json:255`).
12. [ ] **F08 + F12 permissions / facts**: testimonials and Konrad Bilski quote; trust strip lists Visuality
    (employer) and Gainflow (own startup) as „Pracowałem z”; jemWszkole „Główny” (case) vs „Jedyny” (CV);
    Braintrust „lider zespołu” (case) vs CV; naming Visuality and its bank project.

EN matches PL in meaning everywhere. `llms.txt` is generated from the same content, so it follows.

## Owner questions

- **F01** Minimum scope, exclusions and add-ons for 1 000 / 2 900 / 2 500 / 5 900 / 900 zł (all net)?
- **F02** Keep or merge the Next.js page? Which Shopify payments, migrations, feeds? Do you set up a
  client's Google Business Profile?
- **F03** Agency trial 10 h × 100 zł still valid? Conditions (unused hours, deadline, clients at once)?
  Move it to the Rails/B2B page?
- **F04** Ongoing care plan for websites: yes/no, what's in it? Shopify care „miesięczny raport / szybka
  reakcja”: what exactly? How is a one-off fix priced before work starts?
- **F05** Who sends SEO/Ads reports and sets the fee? Can enquiries go to the partner (privacy policy)?
- **F08** Permission for Konrad Bilski's quote and the four LinkedIn quotes?
- **F09** „Kawa przy Rynku / u Ciebie w firmie / dojadę do Krakowa”: true?
- **F10** Google Business Profile: do you qualify, or no GBP claims at all?
- **F12** jemWszkole: jedyny or główny? Braintrust: team lead? Can you name Visuality and its bank project?
- **US-06** Phone number on the contact page?
