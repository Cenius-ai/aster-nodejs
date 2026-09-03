#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "=== Aster — Install ==="

echo "[1/3] Installing npm dependencies (Tailwind CSS + fonts)..."
npm install --no-audit --no-fund

echo "[2/3] Building CSS..."
npx tailwindcss -i ./static/styles.css -o ./static/styles.min.css --minify

echo "[3/3] Caching Deno dependencies..."
deno cache main.ts dev.ts

echo ""
echo "=== Install complete ==="
echo "Run the app: deno task start    (production)"
echo "Dev mode:     deno task dev      (with hot reload)"
