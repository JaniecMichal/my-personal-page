# Moving content to Sanity

Pages only use `content` from `src/content` (the `ContentSource` interface in `../source.ts`).
Switching to Sanity means implementing `sanitySource` and setting `CONTENT_SOURCE=sanity`.
No page or component changes.

## Steps

1. `pnpm add next-sanity @sanity/image-url sanity @sanity/document-internationalization sanity-plugin-internationalized-array`
2. `npx sanity@latest init --env .env.local` to create the project and fill the `NEXT_PUBLIC_SANITY_*` variables (see `.env.example`).
3. Embed the Studio at `src/app/studio/[[...tool]]/page.tsx` (the middleware already skips `/studio`).
4. Create schemas that match `../types.ts`:

   | Type | Sanity document | i18n |
   |---|---|---|
   | `SiteSettings`, `CvFacts` | `siteSettings` singleton | `internationalizedArray*` fields |
   | `Service` | `service` | document i18n (one doc per language, own slug) |
   | `CaseStudy` | `caseStudy` | document i18n; `chapters[].body` as Portable Text |
   | `Experience`, `SkillGroup`, `Education` | `experience`, `skillGroup`, `education` | field-level |
   | `Testimonial` | `testimonial` | field-level (`role`) |
   | `PricingPlan`, `FaqItem`, `ProcessStep` | `pricingPlan`, `faq`, `processStep` | field-level |

5. Implement each method in `./index.ts` with `sanityFetch` and the GROQ in `./queries.ts`.
   Map images through `@sanity/image-url` into `ImageAsset`, and switch `RichText` to Portable Text.
6. Revalidation: a Sanity webhook to `/api/revalidate` calling `revalidateTag(<type>)`, secured by `SANITY_REVALIDATE_SECRET`.
7. Import the existing data: a one-off script that reads `../local/*` and writes documents with the Sanity client.

Slugs can differ per locale. The adapter must return `slugs` (from `translation.metadata`) so hreflang
alternates, the sitemap and the language switch keep pointing at the translated URL.
