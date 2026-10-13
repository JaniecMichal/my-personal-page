#!/usr/bin/env bash
# Tells Bing (and other IndexNow engines) about every URL in the live sitemap.
# Run after a production deploy that adds or changes pages: scripts/indexnow.sh
# The key is served by src/app/f226fde4051379d41545fce5506e9a20.txt/route.ts and must stay deployed.
set -euo pipefail
HOST="www.mjaniec.it"
KEY="f226fde4051379d41545fce5506e9a20"

urls=$(curl -fsS "https://$HOST/sitemap.xml" | grep -o '<loc>[^<]*' | sed 's/<loc>//' | sort -u)
count=$(wc -l <<<"$urls" | tr -d ' ')
json_urls=$(sed 's/.*/"&"/' <<<"$urls" | paste -sd, -)

status=$(curl -s -o /dev/null -w "%{http_code}" -X POST "https://api.indexnow.org/indexnow" \
	-H "Content-Type: application/json; charset=utf-8" \
	-d "{\"host\":\"$HOST\",\"key\":\"$KEY\",\"keyLocation\":\"https://$HOST/$KEY.txt\",\"urlList\":[$json_urls]}")

# 200 = accepted, 202 = accepted, key not verified yet (first run).
echo "IndexNow: $count URLs, HTTP $status"
[[ "$status" == 200 || "$status" == 202 ]]
