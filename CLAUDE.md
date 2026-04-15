# CLAUDE.md — Finex SA Group Website

## Project Overview
Corporate informational website for Finex SA Group (Pty) Ltd. 9-page static site showcasing 5 subsidiary brands + 2 tech divisions. No auth, no e-commerce, no CMS. Drives visitors to brand websites and app stores.

## Session Startup

Read `dev_startup.md` at the start of every session. This project is developed across ARM (Apple Silicon) and Intel Macs with the project folder synced via Dropbox. The startup guide covers architecture detection, Dropbox ignore setup, and the `dev-start.sh`/`dev-stop.sh` scripts. If the user is starting fresh on a machine, walk them through the first-time setup.

## Master Spec
Read `FINEX-SA-GROUP-SITE-SPEC-FINAL.md` in the project root before making any changes. It contains the complete design system, all page content, component architecture, and brand configuration. It is the single source of truth.

## Tech Stack
- Next.js 14+ (App Router) with static export (`output: 'export'`)
- Tailwind CSS extended with CSS custom properties
- Framer Motion for animations
- TypeScript throughout
- Lucide React for icons

## Critical Rules

### Never Hard-Code
- No inline styles. Ever.
- No hard-coded colour values in components. Use `var(--brand-primary)`, `var(--brand-accent)`, or Tailwind utility classes that map to CSS custom properties.
- No hard-coded font families. Use `var(--font-primary)` and `var(--font-secondary)`.
- No hard-coded app store links, phone numbers, or emails. Pull from `src/config/brands.ts`.

### Subsidiary Theming
Every subsidiary page/section uses a `data-brand` attribute on its wrapper element. Components use `var(--brand-primary)` and `var(--brand-accent)` which automatically inherit the correct palette from the nearest `data-brand` ancestor. Never import brand-specific colours into a component directly.

```tsx
// CORRECT
<main data-brand="finexflow">
  <CTAButton label="Speak to Us" />
</main>

// WRONG
<CTAButton label="Speak to Us" className="bg-[#0f4761]" />
```

### CSS Architecture
- All design tokens live in `src/styles/globals.css` under `:root`
- Tailwind config extends from these tokens
- `[data-brand="xxx"]` selectors override `--brand-primary` and `--brand-accent`
- No `!important` declarations
- No CSS specificity hacks
- Component styles via Tailwind utilities only
- If you need a new utility, add it to tailwind.config.js or globals.css, not as a one-off

### Font Swap Readiness
The primary font `Plus Jakarta Sans` is a stand-in for `Codec Warm` (commercial). When .woff2 files are added to `/public/fonts/`, the ONLY change needed is updating `--font-primary` in globals.css and adding the `@font-face` declaration. No component changes.

### Content
All page copy is in the spec doc. Implement it verbatim. Do not rewrite, summarise, or rephrase client copy. Placeholder content is marked with `TODO:` comments.

## Project Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout (Navbar + Footer, fonts, metadata)
│   ├── page.tsx                  # Homepage
│   ├── finex-money/page.tsx
│   ├── finexflow/page.tsx
│   ├── imali-express/page.tsx
│   ├── treasury/page.tsx
│   ├── global/page.tsx
│   ├── technology/page.tsx
│   ├── about/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── layout/                   # Navbar, Footer
│   ├── ui/                       # CTAButton, AppStoreBadges, StatBlock, RegulatoryBadge
│   ├── sections/                 # HeroSection, BrandCard, FeatureGrid, ContactBlock
│   └── effects/                  # EnergySwoosh, ScrollReveal
├── config/
│   ├── brands.ts                 # ALL brand data, links, contacts (single source)
│   └── navigation.ts             # Nav menu items
├── styles/
│   └── globals.css               # Design system root (tokens, theming, base typography)
└── lib/
    └── utils.ts                  # Shared utilities
```

## Component Guidelines

### HeroSection
- Full-width, min-height 80vh on desktop, auto on mobile
- Supports: gradient background, image background, or dark overlay
- Props: title, subtitle, body, cta, backgroundType, dataBrand

### BrandCard
- Used on homepage for subsidiary grid
- Displays: brand name, tagline, short description, CTA button(s)
- Automatically themed via data-brand attribute
- Grid: 1 col mobile, 2 col tablet, 3 col desktop (with last 2 centred on 5-card layout)

### EnergySwoosh
- Code-generated SVG bezier curves with brand gradient stroke
- Variants: `divider` (between sections), `background` (behind content), `accent` (corner flourishes)
- Interactive: cursor proximity triggers glow effect via mousemove listener
- Performance: use `will-change: transform`, `requestAnimationFrame`
- Fallback: renders as static gradient line if JS disabled

### CTAButton
- Variants: `primary` (solid brand-primary), `secondary` (outline), `gradient` (sunset gradient)
- Always uses var(--brand-primary) and var(--brand-accent) from context
- Never import specific colour values

### AppStoreBadges
- Pulls URLs from brands.ts config
- Renders iOS + Android badges side by side
- If a link is empty string, badge renders but links to "#" with a TODO comment
- If a link is null, badge does not render (that brand has no app)

## Build & Deploy Commands

```bash
npm run dev          # Local development server (localhost:3000)
npm run build        # Production build (generates /out for static export)
npm run start        # Serve production build locally
npm run lint         # ESLint check
```

## Git Conventions
- Main branch: production (auto-deploys to Vercel)
- Feature branches for new pages or significant changes
- Commit messages: concise, descriptive (e.g., "Add finexflow page content and industry grid")
- Never commit: node_modules/, .next/, out/

## Image Handling
- All images in `/public/images/` organised by subfolder: logos/, heroes/, lifestyle/, icons/
- Use next/image component with proper width, height, and alt attributes
- Prefer WebP format
- Placeholder images: use a branded gradient div with the brand name until real assets arrive
- Logo SVGs: import as React components or reference via next/image

## Accessibility
- Semantic HTML: proper heading hierarchy (one h1 per page), nav, main, section, footer landmarks
- All images have descriptive alt text
- Interactive elements have visible focus states
- Colour contrast meets WCAG AA minimum
- Skip-to-content link on all pages

## Spelling & Locale
- All copy uses British English spelling (colour, organisation, licence, etc.)
- Code identifiers (variables, CSS properties) use American spelling where it is the technical convention (e.g., `color` in CSS is correct, `colour` is not valid CSS)
