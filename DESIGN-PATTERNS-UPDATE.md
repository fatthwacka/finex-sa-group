# DESIGN PATTERNS UPDATE — Extracted from Live Subsidiary Sites

## Supplementary design rules that supersede section styling in PAGE-DESIGNS.md

> **STATUS:** These patterns have been implemented. This document takes precedence over PAGE-DESIGNS.md for section backgrounds, card styling, and scroll animations. PAGE-DESIGNS.md remains authoritative for page structure, hero treatments, and image direction.

---

## CRITICAL: COLOUR BLOCKING SYSTEM

The existing Finex subsidiary sites never use plain white backgrounds for full sections. Every section alternates between bold, saturated background colours. This is the defining visual characteristic of the Finex ecosystem and our parent site MUST match it.

### Section Background Rotation

Sections alternate through these background treatments in sequence. Never place two white sections adjacent to each other.

```
Section 1: Dark navy (#0f4761) or dark green-navy (#1A2F3A) — white text
Section 2: White or off-white — dark text, coloured cards
Section 3: Red/crimson gradient (#EE2737 to #C41230) — white text
Section 4: White or off-white — dark text
Section 5: Dark navy — white text
Section 6: Full-width lifestyle image banner (no text padding, edge-to-edge)
Section 7: White — dark text
... repeat pattern
```

The key principle: the page should feel like stacked coloured blocks when you scroll. Dark, light, red, light, dark, image, light. Never monotone.

### CSS Implementation

```css
/* Section background variants — apply via className */
.section-dark {
  background-color: var(--color-navy);
  color: var(--color-text-on-dark);
}

.section-light {
  background-color: var(--color-white);
  color: var(--color-text-primary);
}

.section-alt {
  background-color: var(--color-off-white);
  color: var(--color-text-primary);
}

.section-brand {
  background: linear-gradient(135deg, var(--color-red) 0%, #C41230 100%);
  color: var(--color-text-on-dark);
}

.section-gradient {
  background: var(--gradient-sunset);
  color: var(--color-text-on-dark);
}

.section-dark-green {
  background-color: #1A3C34;
  color: var(--color-text-on-dark);
}
```

---

## CARD SYSTEM

Cards are the primary content containers across all Finex sites. They always float on coloured backgrounds, never on white-on-white.

### Card Style A — Feature Card (on dark backgrounds)

White card on dark/coloured section background. Used for feature lists, steps, and key points.

```css
.card-feature {
  background: var(--color-white);
  border-radius: var(--radius-lg);           /* ~16px */
  padding: var(--space-xl) var(--space-2xl);  /* generous internal padding */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  color: var(--color-text-primary);
}
```

Visual notes from live sites:
- No visible border — the white on dark contrast IS the definition
- Shadow is subtle, not dramatic
- Corners are noticeably rounded (~16px), giving a soft, approachable feel
- Cards have significant internal padding (at least 24px horizontal, 20px vertical)

### Card Style B — List Item Card (pill-shaped feature rows)

Used for feature checklists and requirement lists. Horizontal layout: icon left, text right. Stacked vertically with spacing between.

```css
.card-list-item {
  background: var(--color-white);
  border-radius: var(--radius-lg);
  padding: var(--space-lg) var(--space-xl);
  display: flex;
  align-items: center;
  gap: var(--space-md);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
}

.card-list-item .icon {
  color: var(--color-red);                    /* Red brand icons */
  flex-shrink: 0;
}
```

Visual notes:
- These appear as wide, flat "pill" shapes
- Icon is always brand red (#EE2737)
- Text uses bold keywords within the sentence (e.g., "Receive your salary **immediately**")
- Stacked with ~16px vertical gap between items
- On dark backgrounds, these white pills create strong visual contrast

### Card Style C — Step Card (numbered process)

Used for "How it works" or step-by-step flows. Number in a dark circle, text below.

```css
.card-step {
  background: var(--color-white);
  border-radius: var(--radius-lg);
  padding: var(--space-2xl);
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.card-step .step-number {
  width: 64px;
  height: 64px;
  border-radius: var(--radius-full);
  background: var(--color-navy);
  color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-secondary);
  font-weight: var(--weight-bold);
  font-size: var(--text-xl);
  margin: 0 auto var(--space-lg);
}
```

### Card Style D — Icon Feature Card (compact grid cards)

Used in 3-column grids for quick feature highlights. Icon top-centre, text below, on coloured backgrounds.

```css
.card-icon-feature {
  background: var(--color-white);
  border-radius: var(--radius-lg);
  padding: var(--space-2xl) var(--space-xl);
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.card-icon-feature .icon {
  color: var(--color-red);
  width: 48px;
  height: 48px;
  margin: 0 auto var(--space-md);
}
```

Visual notes from finexmoney.com screenshot 4:
- Three cards in a row on a red gradient background
- White cards with red outlined icons centred at top
- Short descriptive text below, centred
- Bold keywords within text

---

## BUTTON SYSTEM

### Primary CTA Button

Solid red, full-width (or near-full within its container), rounded, prominent.

```css
.btn-primary {
  background: var(--color-red);
  color: var(--color-white);
  border: none;
  border-radius: var(--radius-md);            /* ~12px */
  padding: var(--space-lg) var(--space-2xl);
  font-family: var(--font-secondary);
  font-weight: var(--weight-bold);
  font-size: var(--text-base);
  width: 100%;                                /* Full-width within container */
  max-width: 480px;                           /* Capped on desktop */
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
}

.btn-primary:hover {
  background: #D11E2B;                        /* Slightly darker red */
  transform: translateY(-1px);
}
```

### Secondary CTA Button (outline)

White outline on dark backgrounds. Used for app store buttons and secondary actions.

```css
.btn-outline {
  background: transparent;
  color: var(--color-white);
  border: 2px solid var(--color-white);
  border-radius: var(--radius-md);
  padding: var(--space-md) var(--space-xl);
  font-family: var(--font-secondary);
  font-weight: var(--weight-semibold);
  font-size: var(--text-base);
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;
}

.btn-outline:hover {
  background: var(--color-white);
  color: var(--color-navy);
}
```

### Button Placement Rules
- Primary CTAs sit BELOW feature list items, full-width within the content column
- App store buttons are side-by-side, outline style, equal width
- Every dark or coloured section should end with a visible CTA
- Never stack two buttons of the same style vertically

---

## TYPOGRAPHY PATTERNS (from live sites)

### Bold Keyword Treatment

Body text uses inline bold for key action words. This is a consistent pattern across ALL pages.

Examples from the sites:
- "Open your bank account **instantly**"
- "Receive your salary **immediately**"
- "Getting your account ready is **fast** and **simple**"
- "Send your wages back home **safely** at very **competitive rates**"

Implementation: The copy in our spec already has these keywords identified. Wrap them in `<strong>` tags.

### Heading Weight Contrast

Headings often use mixed weights within a single line:
- "**South African** Residents" (bold + light)
- "**Claim Your** Financial Power" (mixed)
- "Got A **Different Permit?**" (light + bold)

Implementation: Use `<span>` with font-weight variants within `<h2>` elements.

---

## SCROLL ANIMATION SYSTEM

### Grow-In Animation

Based on user observation: elements scale from near-zero to full size. No opacity fade. Triggers when element enters viewport from below.

```css
/* Base state — element before it enters viewport */
.animate-grow-in {
  transform: scale(0.3);
  transform-origin: center center;
  transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  /* This cubic-bezier gives a slight overshoot/bounce at the end */
}

/* Triggered state — when element is in viewport */
.animate-grow-in.is-visible {
  transform: scale(1);
}
```

### Framer Motion Implementation (preferred)

```tsx
// components/effects/ScrollGrowIn.tsx
'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollGrowInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function ScrollGrowIn({ children, delay = 0, className = '' }: ScrollGrowInProps) {
  return (
    <motion.div
      className={className}
      initial={{ scale: 0.3 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}  // triggers at 10% visibility (low on page)
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 20,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
```

### Animation Rules

1. **Cards:** Every card should grow in when scrolling into view. In grid layouts, stagger the delay across columns (0s, 0.1s, 0.2s, 0.3s).

2. **Trigger point:** `viewport.amount: 0.1` — the animation fires when only 10% of the element is visible. This ensures the user never sees empty space waiting for content to appear.

3. **No fade:** Pure scale transform. The element is fully opaque throughout, it just grows from small to full size.

4. **Once only:** `viewport.once: true` — animation plays once, doesn't re-trigger on scroll up.

5. **Images:** Hero and lifestyle images get a slightly different treatment — scale from 0.85 to 1 (subtler, less dramatic than cards) with a longer duration (0.8s).

6. **Section headings:** Scale from 0.7 to 1, no stagger, fires independently of cards below.

7. **Full-width lifestyle banners:** No grow animation. These are static and grounding — they anchor the page rhythm between animated sections.

### Stagger Pattern for Card Grids

```tsx
// In a 3-column card grid
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {items.map((item, i) => (
    <ScrollGrowIn key={i} delay={i * 0.1}>
      <FeatureCard {...item} />
    </ScrollGrowIn>
  ))}
</div>
```

This creates a left-to-right cascade effect as cards pop into view.

---

## SECTION RHYTHM PATTERN (Updated)

Based on the live sites, here is the corrected section rhythm for our pages. Previous spec was too white/sparse.

### Homepage Section Flow
```
1. Hero — gradient-sunset background (animated swooshes)
2. Subsidiary Cards — section-dark (navy), white cards grow in
3. Market Stats — section-brand (red gradient), stat blocks
4. Trust/Regulation — section-light (white), regulatory badges
5. CTA — section-gradient (sunset), centred text + button
```

### Subsidiary Page Flow (template)
```
1. Hero — lifestyle image with gradient overlay or solid dark
2. Key Features — section-brand (red) or section-dark, white icon-feature cards (3-col grid, grow-in)
3. Content + Image — section-light, split layout
4. Feature List — section-dark, white list-item pills (grow-in staggered)
5. Full-width lifestyle banner — static, edge-to-edge
6. Steps/Process — section-light or section-alt, step cards (grow-in staggered)
7. CTA — section-brand or section-dark, prominent button
8. Support/Contact — section-dark, white contact cards
```

---

## WHATSAPP FLOATING BUTTON

All three live sites have a WhatsApp chat button floating bottom-right. Add this as a global component.

```tsx
// components/ui/WhatsAppButton.tsx
export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/27600198966"  // TODO: confirm correct WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="Chat on WhatsApp"
    >
      {/* WhatsApp icon SVG */}
    </a>
  );
}
```

---

## ADDITIONAL OBSERVATIONS

### Bank Zero Partnership

Screenshot 6 footer shows: "Finex Money (PTY) LTD is a registered credit provider NCRCP27865 - powered by Bank Zero mutual bank". This is the BankZero content that was marked as TODO in the spec. ✅ **IMPLEMENTED** in Footer.tsx and About page regulatory section.

### App Screenshots Available
Screenshot 6 shows actual Finex Money app screens (wallet balance view + login screen). These can be extracted as placeholder mockups for the Finex Money page if clean versions aren't available from the client.

### Icon Style
All icons across the sites use a red outlined/filled style. Not thin-line icons. When using Lucide React, apply a stroke-width of 2 and colour them `var(--color-red)` or `var(--brand-primary)` depending on context.

---

*This update supersedes the card and section background guidance in the original PAGE-DESIGNS.md. The colour blocking system and grow-in animation are now mandatory design rules.*
