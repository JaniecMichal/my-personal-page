#!/usr/bin/env bash
# Launch smoke test. Usage: scripts/smoke.sh [base-url]   (default: https://www.mjaniec.it)
# Checks language redirects, old-URL redirects, key pages, canonical + hreflang, SEO endpoints.
BASE="${1:-https://www.mjaniec.it}"
BASE="${BASE%/}"
fail=0

check() { # name, expected, actual
	if [[ "$3" == $2 ]]; then echo "  ok   $1"; else echo "  FAIL $1 (expected $2, got $3)"; fail=1; fi
}
status() { curl -s -o /dev/null -w "%{http_code}" "${@:2}" "$BASE$1"; }
location() { curl -s -o /dev/null -w "%{redirect_url}" "${@:2}" "$BASE$1"; }

echo "Smoke test: $BASE"
echo "Language detection on /"
check "/ with pl Accept-Language -> /pl" "*/pl" "$(location / -H 'Accept-Language: pl-PL,pl;q=0.9')"
check "/ with en Accept-Language -> /en" "*/en" "$(location / -H 'Accept-Language: en-US,en;q=0.9')"

echo "Old URLs"
for p in /about /experience /skills /projects /for-business; do
	check "$p redirects" "30[178]" "$(status $p)"
done

echo "Pages"
for p in /pl /en /pl/uslugi /en/services /pl/realizacje /en/work /pl/cennik /en/pricing /pl/cv /en/cv /pl/kontakt /en/contact /terminal; do
	check "$p 200" "200" "$(status $p)"
done
check "unknown page 404" "404" "$(status /pl/nie-ma-takiej-strony)"

echo "SEO"
for p in /sitemap.xml /robots.txt /llms.txt; do check "$p 200" "200" "$(status $p)"; done
html="$(curl -s "$BASE/pl")"
canonical="$(grep -o '<link rel="canonical" href="[^"]*"' <<<"$html" | head -1 | sed 's/.*href="//;s/"$//')"
check "/pl canonical points to https://www.mjaniec.it/pl" "https://www.mjaniec.it/pl" "$canonical"
check "/pl has hreflang en" "*hrefLang=\"en\"*" "$(grep -o 'hrefLang="en"' <<<"$html" | head -1 | sed 's/^/*/;s/$/*/')"
grep -q "noindex" <<<"$html" && { echo "  WARN /pl contains noindex (expected on previews only)"; }

echo
[[ $fail == 0 ]] && echo "All checks passed." || { echo "Some checks failed."; exit 1; }
