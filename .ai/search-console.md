# Google Search Console & Bing — setup for mjaniec.it

What the code already does:

- `https://mjaniec.it/sitemap.xml`: every PL/EN URL with `xhtml:link` hreflang alternates.
- `https://mjaniec.it/robots.txt`: allows everything (including AI crawlers) except `/api/` and `/studio`, and points to the sitemap.
- Every page: self-referencing canonical, `hreflang` pl / en / x-default, Open Graph, JSON-LD
  (Person, ProfessionalService, Service, FAQPage, BreadcrumbList, CreativeWork).
- Old URLs (`/about`, `/experience`, `/skills`, `/projects/*`, `/for-business`) redirect with 308 to the new ones.
- `https://mjaniec.it/llms.txt`: plain-text summary for AI assistants.
- Optional verification meta tags from env: `GOOGLE_SITE_VERIFICATION`, `BING_SITE_VERIFICATION`.

## 1. Verify the domain (recommended: Domain property via DNS)

1. https://search.google.com/search-console → **Add property** → **Domain** → `mjaniec.it`.
2. Copy the `google-site-verification=...` TXT record and add it at your DNS provider
   (root `@`, type TXT). Wait a few minutes, then **Verify**.
   A Domain property covers http/https, www and every subdomain, so it survives the rebuild.

Alternative (URL-prefix property `https://mjaniec.it/`): choose **HTML tag**, copy only the
`content` value, set `GOOGLE_SITE_VERIFICATION=<value>` in Vercel → Project → Settings →
Environment Variables (Production), redeploy, then **Verify**.

## 2. After the rebuild goes live

1. **Sitemaps** → submit `sitemap.xml`. Remove any old sitemap entry if it errors.
2. **URL inspection** → request indexing for `/pl`, `/en`, `/pl/uslugi`, `/en/services` and the service pages.
3. **Pages** report: expect the old URLs to show as "Page with redirect". That's correct.
4. **Settings → International targeting** is gone in the new GSC; hreflang in HTML + sitemap is enough.
5. Check **Enhancements** for FAQ and Breadcrumbs after a few days.

## 3. Bing Webmaster Tools (also feeds ChatGPT search / Copilot)

https://www.bing.com/webmasters → **Import from Google Search Console** (fastest), or add the site
and verify with `BING_SITE_VERIFICATION` (the `msvalidate.01` value). Submit the same sitemap.

## 4. Other quick wins

- Google Business Profile for "Michał Janiec — strony internetowe, Katowice" (service-area business,
  no public address needed). Link to `https://mjaniec.it/pl`.
- Same name, email and URL on LinkedIn, GitHub, Clutch, Useme, Oferia.
- Real prices, metrics and screenshots replace the `[X]` placeholders before launch:
  placeholder text in titles or FAQ answers hurts click-through.
