#!/bin/bash
set -e

# ================================================
#  Finex SA Group — Dev Startup
#  Run this every time you sit down at a machine.
# ================================================

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR"

echo ""
echo "================================================"
echo "  Finex SA Group — Dev Startup"
echo "================================================"
echo ""

# ── 1. Environment info ──────────────────────────
ARCH=$(uname -m)
NODE_V=$(node -v 2>/dev/null || echo "NOT INSTALLED")
NPM_V=$(npm -v 2>/dev/null || echo "NOT INSTALLED")
BRANCH=$(git branch --show-current 2>/dev/null || echo "unknown")

echo "[info] Machine:  $(uname -s) $ARCH"
echo "[info] Node:     $NODE_V"
echo "[info] npm:      $NPM_V"
echo "[info] Branch:   $BRANCH"
echo ""

if [ "$NODE_V" = "NOT INSTALLED" ]; then
    echo "ERROR: Node.js is not installed. Install it first."
    exit 1
fi

# ── 2. Pull latest code ──────────────────────────
echo "[1/4] Pulling latest from Git..."
if git remote get-url origin &>/dev/null; then
    git pull origin "$BRANCH" || {
        echo ""
        echo "ERROR: Git pull failed. Resolve conflicts before continuing."
        exit 1
    }
    echo "      Done."
else
    echo "      No remote configured. Skipping pull."
fi
echo ""

# ── 3. Dropbox ignore flags ──────────────────────
# Dropbox syncs platform-specific native binaries which break cross-arch.
# We set xattr flags to prevent Dropbox from syncing build artifacts.
#
# Two xattr methods exist:
#   - com.dropbox.ignored           (legacy, macOS ≤12.3)
#   - com.apple.fileprovider.ignore#P  (modern, macOS ≥12.5)
# We try both for maximum compatibility.

IGNORE_DIRS="node_modules .next out .vercel"

echo "[2/4] Setting Dropbox ignore flags..."
if command -v xattr &>/dev/null; then
    for dir in $IGNORE_DIRS; do
        mkdir -p "$dir"
        # Try modern method first, then legacy
        xattr -w 'com.apple.fileprovider.ignore#P' 1 "$dir" 2>/dev/null || true
        xattr -w com.dropbox.ignored 1 "$dir" 2>/dev/null || true
    done
    echo "      Flags set on: $IGNORE_DIRS"
else
    echo "      xattr not available (not macOS). Skipping Dropbox ignore."
fi
echo ""

# ── 4. Check & install dependencies ──────────────
# Detect architecture mismatch: if node_modules was built for a different
# arch, we must nuke and reinstall.

echo "[3/4] Checking dependencies..."

NEEDS_INSTALL=false

if [ ! -d "node_modules" ]; then
    echo "      node_modules missing."
    NEEDS_INSTALL=true
elif [ "package.json" -nt "node_modules/.package-lock.json" ] 2>/dev/null; then
    echo "      package.json newer than last install."
    NEEDS_INSTALL=true
else
    # Check if native binaries match current architecture
    # @next/swc is the most reliable indicator
    if [ "$ARCH" = "arm64" ]; then
        EXPECTED_SWC="node_modules/@next/swc-darwin-arm64"
    elif [ "$ARCH" = "x86_64" ]; then
        EXPECTED_SWC="node_modules/@next/swc-darwin-x64"
    else
        EXPECTED_SWC=""
    fi

    if [ -n "$EXPECTED_SWC" ] && [ ! -d "$EXPECTED_SWC" ]; then
        echo "      Architecture mismatch detected!"
        echo "      Running on $ARCH but native binaries are for a different arch."
        echo "      Nuking node_modules and .next..."
        rm -rf node_modules .next
        NEEDS_INSTALL=true
    else
        echo "      Dependencies up to date (matching $ARCH)."
    fi
fi

if [ "$NEEDS_INSTALL" = true ]; then
    echo "      Installing dependencies..."
    npm install || {
        echo ""
        echo "ERROR: npm install failed."
        exit 1
    }
    echo "      Done."

    # Re-apply Dropbox ignore flags (npm install recreates node_modules)
    if command -v xattr &>/dev/null; then
        for dir in $IGNORE_DIRS; do
            mkdir -p "$dir"
            xattr -w 'com.apple.fileprovider.ignore#P' 1 "$dir" 2>/dev/null || true
            xattr -w com.dropbox.ignored 1 "$dir" 2>/dev/null || true
        done
        echo "      Re-applied Dropbox ignore flags after install."
    fi
fi
echo ""

# ── 5. Status summary ────────────────────────────
CHANGES=$(git status --short 2>/dev/null | wc -l | tr -d ' ')

echo "[4/4] Status"
echo "      Arch:     $ARCH"
echo "      Branch:   $BRANCH"
echo "      Changes:  $CHANGES uncommitted file(s)"
echo ""
echo "================================================"
echo "  Ready. Run 'npm run dev' to start."
echo "================================================"
echo ""
