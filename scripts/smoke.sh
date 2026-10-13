#!/usr/bin/env bash
# Launch smoke test. Usage: scripts/smoke.sh [base-url]   (default: https://www.mjaniec.it)
# Checks the root redirect, old-URL redirects, key pages, canonical + hreflang, robots, SEO endpoints, headers.
BASE="${1:-https://www.mjaniec.it}"
BASE="${BASE%/}"
fail=0

check() { # name, expected, actual
	if [[ "$3" == $2 ]]; then echo "  ok   $1"; else echo "  FAIL $1 (expected $2, got $3)"; fail=1; fi
}
status() { curl -s -o /dev/null -w "%{http_code}" "${@:2}" "$BASE$1"; }
location() { curl -s -o /dev/null -w "%{redirect_url}" "${@:2}" "$BASE$1"; }

echo "Smoke test: $BASE"
echo "Root redirect (always /pl, permanent, no language detection)"
check "/ is permanent" "30[18]" "$(status /)"
check "/ -> /pl" "*/pl" "$(location /)"
check "/ with en Accept-Language -> /pl" "*/pl" "$(location / -H 'Accept-Language: en-US,en;q=0.9')"
check "/ with NEXT_LOCALE=en cookie -> /pl" "*/pl" "$(location / -H 'Cookie: NEXT_LOCALE=en')"
check "/en with en Accept-Language stays" "200" "$(status /en -H 'Accept-Language: en-US')"

echo "Old URLs"
for p in /about /experience /skills /projects /for-business; do
	check "$p redirects" "30[178]" "$(status $p)"
done

echo "Pages"
for p in /pl /en /pl/uslugi /en/services /pl/realizacje /en/work /pl/cennik /en/pricing /pl/cv /en/cv /pl/kontakt /en/contact /terminal; do
	check "$p 200" "200" "$(status $p)"
done
check "unknown page 404" "404" "$(status /pl/nie-ma-takiej-strony)"
check "unknown root file 404" "404" "$(status /nie-ma.xml)"

echo "SEO"
for p in /sitemap.xml /robots.txt /llms.txt; do check "$p 200" "200" "$(status $p)"; done
html="$(curl -s "$BASE/pl")"
canonical="$(grep -o '<link rel="canonical" href="[^"]*"' <<<"$html" | head -1 | sed 's/.*href="//;s/"$//')"
check "/pl canonical points to https://www.mjaniec.it/pl" "https://www.mjaniec.it/pl" "$canonical"
check "/pl has hreflang en" "*hrefLang=\"en\"*" "$(grep -o 'hrefLang="en"' <<<"$html" | head -1 | sed 's/^/*/;s/$/*/')"
check "/pl x-default points to /pl" "*x-default\" href=\"https://www.mjaniec.it/pl\"*" "*$(grep -o 'x-default" href="[^"]*"' <<<"$html" | head -1)*"
robots="$(curl -s "$BASE/robots.txt")"
check "robots blocks GPTBot" "*GPTBot*Disallow: /*" "$(tr '\n' ' ' <<<"$robots" | grep -o 'GPTBot.*')"
check "robots names OAI-SearchBot" "*OAI-SearchBot*" "$robots"
headers="$(curl -sI "$BASE/pl")"
check "nosniff header" "*nosniff*" "$headers"
check "frame-ancestors header" "*frame-ancestors*" "$headers"
grep -q "noindex" <<<"$html" && { echo "  WARN /pl contains noindex (expected on previews only)"; }

echo
[[ $fail == 0 ]] && echo "All checks passed." || { echo "Some checks failed."; exit 1; }
