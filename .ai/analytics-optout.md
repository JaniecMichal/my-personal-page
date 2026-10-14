# Excluding own visits from Vercel Analytics

Own visits (checking the site, testing forms) would inflate page views and the `brief_sent` event.
`src/components/layout/site-analytics.tsx` drops every analytics event (page views and custom events)
when the browser has the key `va-disable` in `localStorage`.

## How it works

- The flag is **per browser and per domain**: set it on `https://www.mjaniec.it`, in every browser you
  use (Chrome and Safari on the laptop count separately, and each phone too).
- It stays until the site data is cleared. Private / incognito windows don't keep it.
- Preview deployments (`*.vercel.app`) are a different domain; they don't need it.

## Laptop (Chrome, Safari, Firefox)

1. Open https://www.mjaniec.it/pl.
2. Open the dev tools console: Chrome `Cmd+Option+J`, Safari `Cmd+Option+C` (needs Settings → Advanced →
   "Show features for web developers"), Firefox `Cmd+Option+K`.
3. Paste and press Enter:

   ```js
   localStorage.setItem("va-disable", "1")
   ```

4. Check: `localStorage.getItem("va-disable")` returns `"1"`.

## Phone (no console): bookmarklet

1. Bookmark any page.
2. Edit the bookmark and replace its URL with:

   ```
   javascript:localStorage.setItem('va-disable','1');alert('Analytics off for this browser')
   ```

3. Open https://www.mjaniec.it, then open the bookmark. In Chrome on Android, type the bookmark's name in
   the address bar and pick it from the suggestions; in iOS Safari, open it from the Bookmarks list.
4. The alert confirms it.

## Count own visits again

```js
localStorage.removeItem("va-disable")
```

## Possible improvement

A hidden URL such as `https://www.mjaniec.it/pl?va=off` that sets the flag when opened (about 10 lines in
`SiteAnalytics`). Simpler on the phone than the bookmarklet. Not built yet.
