# Dev Startup Guide — Multi-Device Workflow

> Last updated: 2026-04-14

---

## The Problem

This project is developed on both ARM (Apple Silicon) and Intel Macs. Several dependencies ship platform-specific native binaries:

| Package | ARM binary | Intel binary |
|---------|-----------|-------------|
| Next.js SWC compiler | `@next/swc-darwin-arm64` | `@next/swc-darwin-x64` |
| Sharp (image processing) | `@img/sharp-darwin-arm64` | `@img/sharp-darwin-x64` |
| LightningCSS | `lightningcss-darwin-arm64` | `lightningcss-darwin-x64` |
| Tailwind Oxide | `@tailwindcss/oxide-darwin-arm64` | `@tailwindcss/oxide-darwin-x64` |
| unrs Resolver | `@unrs/resolver-binding-darwin-arm64` | `@unrs/resolver-binding-darwin-x64` |

These binaries are **not interchangeable**. ARM binaries crash on Intel and vice versa. The project lives in a Dropbox-synced folder, so without proper ignore rules Dropbox will sync the wrong binaries to the other machine.

## The Solution

1. **Git handles code.** All source files sync via Git.
2. **Each machine builds its own `node_modules`.** Never share `node_modules` between architectures.
3. **Dropbox ignores build artifacts.** Enforced at two levels (see below).

---

## Dropbox Ignore Setup

### Level 1: Global rules file (new files)

Dropbox now supports a `rules.dropboxignore` file at the **Dropbox root** (not per-project). This file prevents Dropbox from syncing *newly created* matching files/folders.

**Location:** `/Volumes/KLEANDOC/Dropbox/rules.dropboxignore`

This file already exists and covers `node_modules`, `.next`, `out`, `.vercel`, and other common build artifacts. It applies to all projects in Dropbox.

**Important:** This file is local-only — it does not sync between machines. You must create it on each machine. Copy it from the other machine or recreate it.

### Level 2: xattr flags (existing directories)

For directories that already exist and are syncing, the `rules.dropboxignore` file has no effect. You must set extended attributes (xattr) to tell Dropbox to stop syncing them.

The `dev-start.sh` script handles this automatically. To do it manually:

```bash
# Modern method (macOS 12.5+)
xattr -w 'com.apple.fileprovider.ignore#P' 1 node_modules
xattr -w 'com.apple.fileprovider.ignore#P' 1 .next
xattr -w 'com.apple.fileprovider.ignore#P' 1 out
xattr -w 'com.apple.fileprovider.ignore#P' 1 .vercel

# Legacy method (macOS ≤12.3, also works on newer versions as fallback)
xattr -w com.dropbox.ignored 1 node_modules
xattr -w com.dropbox.ignored 1 .next
xattr -w com.dropbox.ignored 1 out
xattr -w com.dropbox.ignored 1 .vercel
```

Verify with:
```bash
xattr -l node_modules | grep -E "dropbox|fileprovider"
```

### Project .dropboxignore

The `.dropboxignore` file in the project root is **documentation only**. Dropbox does not read per-project ignore files. The actual enforcement is via `rules.dropboxignore` at the Dropbox root and xattr flags.

---

## Daily Workflow

### Starting a session (any machine)

```bash
./dev-start.sh
```

This script:
1. Reports machine architecture, Node/npm versions, and Git branch
2. Pulls latest code from Git
3. Sets Dropbox ignore xattr flags on `node_modules`, `.next`, `out`, `.vercel`
4. Detects architecture mismatch (checks if `@next/swc-darwin-{arch}` matches current CPU)
5. If mismatched or missing: nukes `node_modules`/`.next` and runs `npm install`
6. Re-applies Dropbox ignore flags after install (since `rm -rf` removes xattrs)

Then start developing:
```bash
npm run dev
```

### Ending a session / switching machines

```bash
./dev-stop.sh
```

This script:
1. Shows uncommitted changes, prompts for a commit message (or skip)
2. Pushes any unpushed commits to the remote

---

## First-Time Setup on a New Machine

### 1. Clone the repo (or navigate to the Dropbox-synced folder)

```bash
cd /Volumes/KLEANDOC/Dropbox/APPS/Finex/finex-sa-group
```

### 2. Create the global Dropbox ignore file

Copy `rules.dropboxignore` from the Dropbox root of another machine, or create it:

```bash
cat > /Volumes/KLEANDOC/Dropbox/rules.dropboxignore << 'EOF'
# Node.js / JavaScript
node_modules
.next
out
.cache
.turbo
.parcel-cache
*.log

# Build artifacts
dist
build

# Environment & secrets
.env
.env.*

# Platform / IDE
.DS_Store
Thumbs.db

# Deployment
.vercel
.netlify
EOF
```

### 3. Run the startup script

```bash
chmod +x dev-start.sh dev-stop.sh   # first time only
./dev-start.sh
```

The script handles everything else: xattr flags, dependency installation, architecture detection.

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
| Check current architecture | `uname -m` |
| Check Dropbox ignore status | `xattr -l node_modules \| grep -E "dropbox\|fileprovider"` |

---

## Troubleshooting

### "Module not found" or SWC/Sharp binary mismatch after switching machines

The startup script should catch this automatically. If not:
```bash
rm -rf node_modules .next
npm install
```

### Dropbox re-syncing node_modules

Re-apply xattr flags:
```bash
xattr -w 'com.apple.fileprovider.ignore#P' 1 node_modules
xattr -w 'com.apple.fileprovider.ignore#P' 1 .next
xattr -w com.dropbox.ignored 1 node_modules
xattr -w com.dropbox.ignored 1 .next
```

### Git conflicts on package-lock.json

Accept incoming changes, then run `npm install` to regenerate for your architecture. The lockfile contains entries for *both* architectures — npm will install the correct one.

### dev-start.sh says "Architecture mismatch detected"

This is expected when switching machines. The script will automatically nuke and reinstall. Just let it run.

### Dropbox ignore rules not working on a new machine

Remember: `rules.dropboxignore` is local-only and does not sync. You must create it on each machine. See "First-Time Setup" above.
