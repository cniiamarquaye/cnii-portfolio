#!/bin/bash

# -------------------------------------------------
# safe_publish.sh
# Pushes main → public repo and dev → private repo
# -------------------------------------------------

set -e

echo "🔍 Checking git status..."

# Ensure no uncommitted changes
if [[ -n $(git status --porcelain) ]]; then
  echo "❌ You have uncommitted changes. Commit or stash before publishing."
  exit 1
fi

# Ensure remotes exist
git remote get-url origin > /dev/null 2>&1 || { echo "❌ 'origin' remote not set"; exit 1; }
git remote get-url private > /dev/null 2>&1 || { echo "❌ 'private' remote not set"; exit 1; }

# --- 1. Push main to public repo ---
echo "🚀 Pushing main → public (origin)..."
git checkout main
git pull --rebase origin main
git push origin main
echo "✅ main successfully pushed to public repo."

# --- 2. Push dev to private repo ---
echo "🚀 Pushing dev → private..."
git checkout dev
git pull --rebase private dev || echo "⚠️ No remote dev branch yet or nothing to pull."
git push private dev
echo "✅ dev successfully pushed to private repo."

# --- 3. Return to main branch ---
git checkout main

echo "🎯 Done. Everything synced cleanly."

read -p "⚠️ Push main to PUBLIC repo? (y/n): " confirm
[[ $confirm == "y" ]] || { echo "Aborted."; exit 1; }