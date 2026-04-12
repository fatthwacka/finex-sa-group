# Dev Startup Guide — Multi-Device Workflow

## The Problem
Developing on both ARM (Apple Silicon Mac) and Intel machines. `node_modules` contains platform-specific native binaries that break across architectures. Syncing these via Dropbox or any file sync service causes build failures.

## The Solution
Git handles code. Each machine builds its own `node_modules` locally. Dropbox (if used) is told to ignore build artifacts.

---

## Initial Project Setup (Run Once)

### 1. Create the project and initialise Git

```bash
# Create Next.js project
npx create-next-app@latest finex-sa-group --typescript --tailwind --eslint --app --src-dir --use-npm

cd finex-sa-group

# Initialise Git repo
git init
git remote add origin <YOUR_GITHUB_REPO_URL>
```

### 2. Verify .gitignore

Next.js generates this by default but confirm it includes:

```
node_modules/
.next/
out/
.DS_Store
*.tsbuildinfo
.env*.local
```

### 3. Set up Dropbox ignore (if project folder lives in Dropbox)

Dropbox doesn't natively support `.dropboxignore` on all platforms. Use the `xattr` method on macOS:

```bash
# Run from project root
xattr -w com.dropbox.ignored 1 node_modules
xattr -w com.dropbox.ignored 1 .next
xattr -w com.dropbox.ignored 1 out

# Verify
xattr -l node_modules | grep dropbox
# Should show: com.dropbox.ignored: 1
```

If `node_modules` doesn't exist yet (fresh clone), create it first then ignore:

```bash
mkdir -p node_modules .next out
xattr -w com.dropbox.ignored 1 node_modules
xattr -w com.dropbox.ignored 1 .next
xattr -w com.dropbox.ignored 1 out
```

### 4. Install dependencies

```bash
npm install
npm install framer-motion lucide-react
```

### 5. Push initial commit

```bash
git add .
git commit -m "Initial project setup with design system"
git push -u origin main
```

---

## Switching Machines

### Script: `dev-start.sh`

Save this in your project root. Run it every time you sit down at a machine.

```bash
#!/bin/bash

echo "================================================"
echo "  Finex SA Group — Dev Startup"
echo "================================================"
echo ""

# Pull latest code
echo "[1/4] Pulling latest from Git..."
git pull origin main
if [ $? -ne 0 ]; then
    echo "ERROR: Git pull failed. Resolve conflicts before continuing."
    exit 1
fi
echo "     Done."
echo ""

# Check for and rebuild node_modules
echo "[2/4] Checking node_modules..."
if [ ! -d "node_modules" ] || [ "package.json" -nt "node_modules" ]; then
    echo "     Installing/updating dependencies..."
    npm install
    if [ $? -ne 0 ]; then
        echo "ERROR: npm install failed."
        exit 1
    fi
else
    echo "     node_modules up to date."
fi
echo ""

# Set Dropbox ignore flags (safe to run repeatedly)
echo "[3/4] Setting Dropbox ignore flags..."
if command -v xattr &> /dev/null; then
    for dir in node_modules .next out; do
        mkdir -p "$dir"
        xattr -w com.dropbox.ignored 1 "$dir" 2>/dev/null
    done
    echo "     Dropbox ignore flags set."
else
    echo "     xattr not available (not macOS). Skipping."
fi
echo ""

# Report status
echo "[4/4] Environment check..."
echo "     Node:    $(node -v)"
echo "     npm:     $(npm -v)"
echo "     Arch:    $(uname -m)"
echo "     Branch:  $(git branch --show-current)"
echo "     Status:  $(git status --short | wc -l | tr -d ' ') uncommitted changes"
echo ""
echo "================================================"
echo "  Ready. Run 'npm run dev' to start."
echo "================================================"
```

Make it executable:

```bash
chmod +x dev-start.sh
```

Usage:

```bash
# Every time you sit down at either machine
./dev-start.sh

# Then start developing
npm run dev
```

---

## End of Session

### Script: `dev-stop.sh`

Run before switching machines.

```bash
#!/bin/bash

echo "================================================"
echo "  Finex SA Group — Dev Shutdown"
echo "================================================"
echo ""

# Check for uncommitted changes
CHANGES=$(git status --short | wc -l | tr -d ' ')

if [ "$CHANGES" -gt 0 ]; then
    echo "Uncommitted changes detected:"
    echo ""
    git status --short
    echo ""
    read -p "Commit message (or 'skip' to leave uncommitted): " MSG

    if [ "$MSG" != "skip" ]; then
        git add .
        git commit -m "$MSG"
        git push origin main
        echo ""
        echo "Pushed to origin/main."
    else
        echo "Changes left uncommitted. Remember to commit before switching machines."
    fi
else
    echo "Working tree clean."
    # Push any unpushed commits
    UNPUSHED=$(git log origin/main..HEAD --oneline | wc -l | tr -d ' ')
    if [ "$UNPUSHED" -gt 0 ]; then
        echo "$UNPUSHED unpushed commit(s). Pushing..."
        git push origin main
    else
        echo "Everything synced with origin."
    fi
fi

echo ""
echo "================================================"
echo "  Safe to switch machines."
echo "================================================"
```

Make it executable:

```bash
chmod +x dev-stop.sh
```

---

## Quick Reference

| Action | Command |
|--------|---------|
| Start session on any machine | `./dev-start.sh` |
| Run dev server | `npm run dev` |
| End session / switch machines | `./dev-stop.sh` |
| Production build | `npm run build` |
| Check static export output | `ls out/` |
| Nuke and rebuild deps | `rm -rf node_modules .next && npm install` |

## Troubleshooting

**"Module not found" after switching machines:**
```bash
rm -rf node_modules .next
npm install
```

**Dropbox re-syncing node_modules:**
```bash
xattr -w com.dropbox.ignored 1 node_modules
xattr -w com.dropbox.ignored 1 .next
```

**Git conflicts on package-lock.json:**
Accept incoming, then run `npm install` to regenerate for your architecture.

**Sharp/SWC binary mismatch errors:**
This means node_modules from the other architecture leaked through. Nuke and reinstall:
```bash
rm -rf node_modules .next
npm install
```
