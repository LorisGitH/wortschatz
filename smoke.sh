#!/usr/bin/env bash
#
# HTTP smoke check of the served app: what a browser sees, nothing about how it is served.
# Usage: ./smoke.sh <base url>     e.g. http://localhost:8080 or https://sprichoida.lallard.com
# CI runs it against the built container before pushing the image; the same check runs
# against the live site after a deploy. Exits 1 if any check fails.

set -uo pipefail
base=${1:?usage: smoke.sh <base url>}
base=${base%/}
fail=0

pass() { echo "ok:   $1"; }
# Content types are matched loosely (nginx's mime.types maps .js to text/javascript or application/javascript
# depending on its version); unverified against the real image until the first CI run.
bad() { echo "FAIL: $1" >&2; fail=1; }

# fetch <path>: sets status, headers (lower-cased, CR removed) and body_file.
body_file=$(mktemp)
trap 'rm -f "$body_file"' EXIT
fetch() {
  headers=$(curl -s -m 15 -D - -o "$body_file" -w 'status:%{http_code}\n' "$base$1" | tr -d '\r' | tr 'A-Z' 'a-z')
  status=$(sed -n 's/^status://p' <<<"$headers")
}
header() { sed -n "s/^$1:[[:space:]]*//p" <<<"$headers" | head -1; }

revalidates() { [[ "$(header cache-control)" =~ (no-cache|no-store|max-age=0) ]]; }

fetch /
if [[ "$status" == 200 ]] && grep -qi '<html' "$body_file" && grep -q 'Wortschatz' "$body_file"; then
  pass "/ returns 200 with the app's HTML"
else
  bad "/ did not return 200 with the app's HTML (status ${status:-none})"
fi
revalidates && pass "/ revalidates" || bad "/ is cacheable without revalidation (cache-control: '$(header cache-control)')"

fetch /index.html
if [[ "$status" == 200 ]] && revalidates; then
  pass "/index.html returns 200 and revalidates"
else
  bad "/index.html: status ${status:-none}, cache-control '$(header cache-control)'"
fi

fetch /sw.js
if [[ "$status" == 200 && "$(header content-type)" == *javascript* ]] && revalidates; then
  pass "/sw.js returns 200 as JavaScript and revalidates"
else
  bad "/sw.js: status ${status:-none}, content-type '$(header content-type)', cache-control '$(header cache-control)'"
fi

fetch /manifest.webmanifest
if [[ "$status" == 200 && "$(header content-type)" == application/manifest+json* ]]; then
  pass "/manifest.webmanifest returns 200 as application/manifest+json"
else
  bad "/manifest.webmanifest: status ${status:-none}, content-type '$(header content-type)'"
fi
revalidates && pass "/manifest.webmanifest revalidates" || bad "/manifest.webmanifest is cacheable without revalidation"

# Every icon the manifest lists, plus the iOS one the service worker caches.
icons=$(curl -s -m 15 "$base/manifest.webmanifest" | grep -o '"src": *"[^"]*"' | sed 's/.*"\([^"]*\)"$/\1/')
if [[ -z "$icons" ]]; then
  bad "the manifest lists no icons"
fi
for icon in $icons icon-180.png; do
  fetch "/$icon"
  age=$(header cache-control | sed -n 's/.*max-age=\([0-9]*\).*/\1/p')
  if [[ "$status" == 200 && "$(header content-type)" == image/png* && "${age:-0}" -ge 86400 ]]; then
    pass "/$icon returns 200 as image/png with a long cache lifetime"
  else
    bad "/$icon: status ${status:-none}, content-type '$(header content-type)', cache-control '$(header cache-control)'"
  fi
done

fetch /no-such-page
[[ "$status" == 404 ]] && pass "an unknown path returns 404" || bad "an unknown path returned ${status:-none}, not 404"

exit "$fail"
