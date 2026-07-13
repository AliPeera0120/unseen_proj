#!/usr/bin/env bash
# One-time script: downloads the images still hosted on Base44 into
# public/images/ and rewrites the source code to reference the local copies.
# Run from the repo root:  bash scripts/localize-images.sh
set -euo pipefail

cd "$(dirname "$0")/.."
mkdir -p public/images

declare -a URLS=(
  "https://media.base44.com/images/public/69ebed55a2b77ce4342a0caf/5249a9601_UnseenLogo.png|logo.png"
  "https://media.base44.com/images/public/69e83cf8c4dd316fee3a8deb/656fe3f9d_generated_1380d52c.png|hero.png"
)

echo "Downloading images..."
for entry in "${URLS[@]}"; do
  url="${entry%%|*}"
  name="${entry##*|}"
  echo "  $name"
  curl -fsSL "$url" -o "public/images/$name"
done

echo "Rewriting source references..."
FILES=(src/components/home/HeroSection.jsx src/components/layout/Footer.jsx src/components/layout/Navbar.jsx index.html)
for entry in "${URLS[@]}"; do
  url="${entry%%|*}"
  name="${entry##*|}"
  for f in "${FILES[@]}"; do
    if grep -q "$url" "$f" 2>/dev/null; then
      perl -pi -e "s|\Q$url\E|/images/$name|g" "$f"
    fi
  done
done

echo "Done. Images are in public/images/ and code now references them locally."
echo "Commit the changes: git add -A && git commit -m 'Localize images'"
