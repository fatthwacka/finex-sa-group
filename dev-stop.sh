#!/bin/bash
set -e

# ================================================
#  Finex SA Group — Dev Shutdown
#  Run before switching machines.
# ================================================

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR"

echo ""
echo "================================================"
echo "  Finex SA Group — Dev Shutdown"
echo "================================================"
echo ""

BRANCH=$(git branch --show-current 2>/dev/null || echo "main")

# ── 1. Check for uncommitted changes ─────────────
CHANGES=$(git status --short 2>/dev/null | wc -l | tr -d ' ')

if [ "$CHANGES" -gt 0 ]; then
    echo "Uncommitted changes detected:"
    echo ""
    git status --short
    echo ""
    read -p "Commit message (or 'skip' to leave uncommitted): " MSG

    if [ "$MSG" != "skip" ] && [ -n "$MSG" ]; then
        git add .
        git commit -m "$MSG"
        echo ""
        echo "Committed."
    else
        echo ""
        echo "WARNING: Changes left uncommitted."
        echo "Remember to commit before switching machines!"
    fi
fi

# ── 2. Push unpushed commits ─────────────────────
if git remote get-url origin &>/dev/null; then
    UNPUSHED=$(git log "origin/$BRANCH..$BRANCH" --oneline 2>/dev/null | wc -l | tr -d ' ')
    if [ "$UNPUSHED" -gt 0 ]; then
        echo ""
        echo "$UNPUSHED unpushed commit(s). Pushing to origin/$BRANCH..."
        git push origin "$BRANCH"
        echo "Pushed."
    else
        echo ""
        echo "Everything synced with origin/$BRANCH."
    fi
else
    echo ""
    echo "No remote configured. Skipping push."
fi

echo ""
echo "================================================"
echo "  Safe to switch machines."
echo "================================================"
echo ""
