#!/bin/bash

# -------------------------------------------------
# safe_publish.sh
# Pushes main → public repo and dev → private repo
# -------------------------------------------------

# Exit immediately if any command fails
set -e

# Go to the directory of this script (optional if running from repo root)
# cd "$(dirname "$0")"

# --- 1. Push main to public repo ---
echo "Pushing main branch to public repo (origin)..."
git checkout main
git pull origin main
git push origin main
echo "✅ main successfully pushed to public repo."

# --- 2. Push dev to private repo ---
echo "Pushing dev branch to private repo (private)..."
git checkout dev
git pull private dev || echo "No updates to pull from private repo."
git push private dev
echo "✅ dev successfully pushed to private repo."

# --- 3. Return to main branch ---
git checkout main
echo "Done. Local branches synced with respective remotes."