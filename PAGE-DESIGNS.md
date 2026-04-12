# Finex SA Group — Page Design Specification
## Visual Layout, Hero Treatments & Image Direction

This document defines the visual design of every page. It sits alongside the master spec and CLAUDE.md. When building pages, follow these layouts precisely.

> **IMPORTANT:** Section background colours in this document have been superseded by the COLOUR BLOCKING SYSTEM defined in DESIGN-PATTERNS-UPDATE.md. That document takes precedence for:
>
> - Section background colours and rotation patterns
> - Card styling (feature cards, list-item cards, step cards, icon-feature cards)
> - Scroll animations (grow-in from scale 0.3)
> - WhatsApp floating button
>
> This document remains authoritative for page structure, hero treatments, image direction, and section content.

---

## DESIGN LANGUAGE (Global)

### Visual DNA (derived from brand guidelines and collateral)
- **Gradient-heavy:** The sunset gradient (teal > purple > red > orange) is the signature. Use it on heroes, section backgrounds, CTAs, and decorative elements.
- **Warm photography:** Real South African people in real environments. Not stock. Not sanitised. Warm golden-hour lighting. Diverse representation across nationalities, industries, and genders.
- **Energy swooshes:** Flowing gradient ribbon curves that weave through compositions. In code-generated form for section dividers and decorative backgrounds. In composited form on hero lifestyle shots.
- **Dark + vibrant contrast:** Dark navy (#0f4761) and near-black (#111) backgrounds paired with vibrant gradient accents. White text on dark/gradient backgrounds.
- **Cards with depth:** Content cards use subtle shadows, rounded corners (--radius-lg), and a faint gradient hover effect (--gradient-card-hover).
- **Bold headlines, clean body:** Headlines in Raleway (--font-secondary) ExtraBold/Bold. Body text in Plus Jakarta Sans (--font-primary) Regular. High contrast between heading weight and body weight.

### Section Pattern Library
Every page is built from these repeating section patterns:

**Pattern A — Hero (full-width, immersive)**
Full viewport width, 80-90vh height on desktop. Contains headline, subtext, and CTA. Background is either gradient, dark with gradient overlay, or lifestyle image with dark overlay. Content vertically centred, left-aligned or centred depending on page.

**Pattern B — Content + Image Split**
Two columns at desktop (text left, image/visual right, or vice versa). Stacks to single column on mobile (image on top). Max-width contained (--container-max). Generous vertical padding (--space-section).

**Pattern C — Feature Grid**
3 or 4 column grid of cards/blocks, each with icon/visual, heading, and description. Single column on mobile, 2 on tablet. Cards have consistent height per row. Contained width.

**Pattern D — Full-Width Accent Band**
Full viewport width, uses gradient or dark navy background. Contains centred text, stats, or a single powerful statement. Used to break up white sections with brand energy.

**Pattern E — Stepped/Tiered Display**
Horizontal progression showing levels, tiers, or steps. Cards increase in visual weight left to right. Used for pricing tiers and FICA levels.

**Pattern F — Contact/CTA Block**
Contained section with contact details, form, or prominent CTA. Usually at page bottom before footer. Can use gradient or surface-alt background.

---

## PAGE DESIGNS

---

### HOMEPAGE (/)

**Hero (Pattern A — Centred)**
- Background: Animated sunset gradient (the full teal > purple > red > orange). Subtle code-generated energy swooshes floating behind text at low opacity. Slight radial vignette to darken edges.
- Content: Centred alignment.
  - Eyebrow text: "FINEX SA GROUP" (small caps, --text-sm, --weight-semibold, letter-spacing wide, white)
  - Headline: "Financial Power at Every Level." (--text-hero, --weight-extrabold, white)
  - Body: The opening paragraph about financial table and $320 trillion market. (--text-lg, --weight-light, white, max-width 720px, centred)
  - CTA: "Explore Our Brands" scroll-down button (outline white, or subtle down arrow animation)
- Height: 90vh desktop, auto mobile (min 500px)
- No hero image — the gradient IS the hero. Clean, powerful, brand-forward.

**Section: Subsidiary Brand Cards (Pattern C — 5 cards)**
- Background: --color-surface (white)
- Section heading: "Our Ecosystem" or similar (centred, --text-2xl)
- 5x BrandCard components in a grid
- Layout: 3 columns desktop (row 1: 3 cards, row 2: 2 cards centred), 2 columns tablet, 1 column mobile
- Each card:
  - Top: Brand logo (SVG, placeholder gradient block until received)
  - Brand name as heading
  - Tagline in --color-text-secondary
  - Short description paragraph
  - 1-2 CTA buttons (styled per card's data-brand)
  - Subtle border, --radius-lg, --shadow-sm default, --shadow-md on hover
  - Faint brand-coloured left border or top accent line (2-3px, uses --brand-primary)

**Section: Market Positioning (Pattern D — Accent Band)**
- Background: --color-navy or --gradient-dark-overlay
- Content: Centred
  - Key stat: "$320 Trillion" (--text-4xl, --weight-extrabold, gradient text using --gradient-sunset via background-clip)
  - Supporting line: "Global cross-border payments market by 2032" (--text-lg, white)
  - Below: 3-4 StatBlock components in a row showing key group metrics (e.g., "40+ Countries", "Founded 2013", "8 Brands", "FSP 45242")

**Section: Trust & Regulation (Pattern B — Split)**
- Left: Regulatory text — FSP number, SARB authorisation, Category Two ADLA status
- Right: RegulatoryBadge component(s) or a visual shield/trust graphic
- Background: --color-surface-alt

**Section: CTA (Pattern F)**
- Full-width gradient background (sunset)
- Centred text: "Ready to explore?" or similar
- CTA button: "Contact Us" (white, solid)

---

### FINEX MONEY (/finex-money)

**Hero (Pattern A — Left-aligned with image)**
- Background: Solid --color-surface with large lifestyle image taking right 50% on desktop
- Image direction: Young South African person (20s-30s) holding phone, smiling, casual/urban setting. Finex Money card visible in hand or on screen. Warm lighting. Energy swoosh composited through the image.
- Left side content:
  - Brand logo (Finex Money)
  - Headline: "The Finance Solution." (--text-hero, --weight-extrabold, --color-text-primary)
  - Body paragraph
  - Two CTAs: "Visit Website" (outline) + "Download the App" (primary, with app store badges below)
- On mobile: Image stacks above text content

**Section: Everyday Utility (Pattern B — Split, image right)**
- Left: "Everyday Utility and Zero Hassle" heading + body text
- Right: App screenshot mockup (phone frame showing Finex Money app interface). Placeholder: branded gradient phone frame until real screenshots received.
- Icon row below text: Small icons for key features (tap to pay, ATM, airtime, electricity, EFT, online shopping)

**Section: You Belong Here (Pattern D — Accent Band)**
- Background: --gradient-sunset
- Centred white text: "You Belong Here." (--text-3xl, --weight-extrabold)
- Supporting: "We believe in zero exclusion." paragraph
- Below: 3 document icons (SA ID, Foreign Passport, Asylum Seeker) showing accepted ID types

**Section: FICA Tiers (Pattern E — Stepped)**
- 3 tier cards displayed horizontally (left to right progression)
- Level 1 (Entry): Lighter styling, lower visual weight
  - "Up to R25,000"
  - Accepted docs listed
- Level 2 (Mid FICA): Medium styling
  - "Up to R100,000"
- Level 3 (Full FICA): Strongest styling, gradient accent border or background
  - "Up to R500,000"
- Each card slightly overlaps the previous (staggered z-index, offset positioning) to show progression
- On mobile: Vertical stack with connecting line/arrow between

**Section: App Download CTA (Pattern F)**
- Dark navy background
- App store badges (large, prominent)
- "Open your account in 3 minutes" supporting text

---

### FINEXFLOW (/finexflow)

**Hero (Pattern A — Dark, commanding)**
- Background: Dark navy (#0f4761) with subtle gradient overlay. Code-generated energy swooshes in low opacity gradient behind text.
- Content: Left-aligned on desktop
  - FINEXflow logo (white variant)
  - Headline: "Employer Payments Reimagined." (--text-hero, white)
  - Subline: "Stop the Friction. Start the Flow." (--text-xl, gradient text)
  - Brief intro paragraph (white, --weight-light)
  - CTA: "Book a Demo" (gradient sunset button)
- Right side: Abstract visual of the FINEXflow dashboard on a laptop/tablet screen (composited or screenshot). Placeholder: branded gradient rectangle with "Dashboard Preview" text.
- Tone: This page should feel executive, B2B, authoritative. Less warm than Finex Money, more commanding.

**Section: The Challenge (Pattern D — Accent Band, urgent)**
- Background: --color-red at 10% opacity or a subtle red-tinted gradient
- Heading: "The Challenge" (--text-2xl)
- 5 pain points displayed as a horizontal scroll or icon grid
- Each with an icon (shield-off, alert-triangle, etc.) and short text
- Visual tone: friction, urgency, problems to be solved

**Section: The Seamless Solution (Pattern B — Split, image left)**
- Left: Dashboard/platform screenshot or visual
- Right: "The Seamless Solution" heading + body text
- Transition in tone from problem (above) to solution (here) should be visually clear — shift from red-tinged to blue/teal-tinged

**Section: The Ecosystem (Pattern C — 3 cards)**
- Heading: "Three Components. One Seamless Flow."
- 3 cards side by side, connected by a horizontal flow line or arrow:
  1. Employer Dashboard (icon: layout-dashboard)
  2. Worker App & Digital Wallet (icon: smartphone)
  3. Branded Debit Card (icon: credit-card)
- Each card: icon, name, description
- Background: --color-surface-alt
- The connecting flow line uses the sunset gradient

**Section: Strategic Pillars (Pattern C — 5 items in grid)**
- Heading: "Engineered for Absolute Operational Flow"
- 5 feature blocks in a grid (3+2 layout desktop, single column mobile)
- Each: icon, pillar name, description
- Clean white background, subtle borders

**Section: Pay. Verify. Protect. (Pattern D — Accent Band, powerful)**
- Full-width dark navy background
- Three large words displayed as a visual trio:
  - "PAY" (orange gradient)
  - "VERIFY" (cyan)
  - "PROTECT" (white)
- Each with its promise statement below
- This should be a visually striking moment — large type, high impact

**Section: Universal Application / Industries (Pattern C — 5 industry cards)**
- Heading: "Engineered for Universal Application"
- 5 industry cards in a grid:
  1. Corporate & Enterprise (icon: building-2)
  2. Factory & Manufacturing (icon: factory)
  3. Agriculture (icon: wheat)
  4. Builders & Construction (icon: hard-hat)
  5. Security & Cleaning (icon: shield-check)
- Each card: industry icon, name, description
- Image direction for each (when real images arrive): workers in that industry using phones or receiving payment. Same visual language as brand guidelines collateral — real SA workers, warm lighting, energy swooshes.

**Section: Why FINEXFlow Is the Future (Pattern B — Split)**
- Left: 4 future-facing points as a compact list with icons
- Right: Powerful statement or visual
- Background: --color-surface-alt

**Section: Demo CTA (Pattern F)**
- Gradient background (sunset)
- "Ready to Start the Flow?" heading
- "Book a demonstration and see FINEXFlow working with your own workforce data."
- CTA button: "Speak to a FINEXFlow Expert" (white, solid)

---

### iMALI EXPRESS (/imali-express)

**Hero (Pattern A — Warm, community-focused)**
- Background: Warm gradient (weighted toward red/orange end of the sunset spectrum)
- Image direction: Person (foreign national, 25-35) sending money on phone, warm domestic setting or taxi rank. Authentic, not posed. iMali Remit app visible on screen.
- Content centred:
  - iMali Express logo
  - Headline: "Mali Yami" (--text-hero, white, with a subtle glow)
  - Subline: "Taking care of your family and your future." (--text-xl, white)
  - Brief intro paragraph
- Code-generated energy swooshes in warm tones behind text

**Section: iMali Remit (Pattern B — Split, app mockup right)**
- Visual page division: Top half = iMali Remit, Bottom half = iMali Forex
- Left: "Keep Families Connected" heading + body text + app store CTAs
- Right: Phone mockup showing iMali Remit app (send limits screen, rate checker). Placeholder: branded phone frame.
- Background: --color-surface
- Warm, emotional tone in the design — family connection imagery

**Section: Zero Exclusion (Pattern D — Accent Band)**
- Background: --color-navy
- Accepted documents displayed with icons (SA ID, Foreign Passport, Work Permit)
- "No proof of address required to get started." in prominent white text

**Section: iMali Forex — Visual Divider**
- EnergySwoosh component as a clear visual break between the two sub-brands
- Below this point, the visual tone shifts slightly — more corporate/physical presence

**Section: iMali Forex (Pattern B — Split, image left)**
- Left: Branch interior photo or map visual. Placeholder: gradient block with branch pins.
- Right: "Nationwide Bureau de Change Branches" heading + body text + branch list
- Branch list: Display as compact location chips/pills with map-pin icons

**Section: Omnibus Corporate Travel (Pattern B — Split, reversed)**
- Slightly different styling to signal corporate tier — more navy/teal tones
- Business travel allowance details
- CTA: "Speak to iMali Forex"

---

### FINEX SA TREASURY (/treasury)

**Hero (Pattern A — Executive, restrained)**
- Background: Dark navy, almost black, with very subtle teal gradient at edges. No swooshes — this page is deliberately more restrained and corporate than the others.
- Content: Centred
  - Finex SA Treasury logo/name
  - Headline: "Timing Is Everything." (--text-hero, white, --weight-extrabold)
  - Body paragraph (white, --weight-light)
  - CTA: "Speak to a Treasury Advisor" (outline white button)
- No lifestyle imagery in hero — pure typographic authority. The restraint IS the design statement.
- Subtle animated gradient pulse on the background (very slow, barely perceptible)

**Section: Corporate FX & Risk Management (Pattern B — Split)**
- Left: Text content — services, hedging strategies, forward cover contracts
- Right: Abstract data visualisation or subtle chart graphic. Could be a code-generated SVG showing currency flow lines. Placeholder: navy-toned gradient block.
- Background: --color-surface

**Section: Key Capabilities (Pattern C — Feature Grid, 4 items)**
- Forward Cover Contracts
- Stop and Limit Orders
- Balance of Payments
- SPOT and NEXT Day Payments
- Each as a clean card with icon and brief description
- Styling: More muted than other pages — navy/teal palette, no bright oranges or reds

**Section: Regulatory (Pattern D — Accent Band)**
- Dark navy background
- FSP 45242 and SARB authorisation prominently displayed
- RegulatoryBadge component
- Trust-building section — clean, simple, authoritative

**Section: CTA (Pattern F)**
- Teal-to-navy gradient (NOT the full sunset — treasury is cooler in palette)
- "Master your global cash flow." + CTA button

---

### FINEX SA GLOBAL (/global)

**Hero (Pattern A — Ambitious, international)**
- Background: Dark with a globe or world map subtle visual element (CSS-generated or SVG). Energy swooshes suggesting global connectivity.
- Content: Left-aligned
  - Headline: "Strategic Expansion and Wealth Protection." (--text-hero, white)
  - Body paragraph
  - CTA: "Speak to Our Global Experts" (gradient button)
- Image direction (right side): Abstract international business imagery or gold/precious metals subtle visual. Placeholder: dark gradient with globe outline.

**Section: Four Pillars (Pattern C — 4 cards, 2x2 grid)**
- Each pillar as a substantial card with:
  1. Global Partnerships (icon: handshake)
  2. Equity Stakes (icon: trending-up)
  3. Import & Export Facilitation (icon: ship)
  4. Brokerage & Wealth Protection (icon: gem or shield)
- Each card: Icon, heading, description paragraph
- Cards should feel weighty and premium — subtle borders, slight dark backgrounds
- The Brokerage card can include a subtle gold accent (Krugerrand reference)

**Section: Precious Metals (Pattern D — Accent Band)**
- Dark background with warm gold accent tones
- Mention of Krugerrands, gold and silver bars
- This section should feel exclusive and premium — different visual energy from the rest of the site

**Section: CTA (Pattern F)**
- Navy/purple gradient
- CTA to speak to global experts

---

### FINEX PAY & TECHNOLOGIES (/technology)

**Hero (Pattern A — Technical, forward-looking)**
- Background: Near-black (#111) with cyan/electric blue circuit-pattern or grid lines (CSS-generated). Subtle animated pulse effect.
- Content: Centred
  - Headline: "The Infrastructure of Tomorrow." (--text-hero, white)
  - Body paragraph
- This page should feel different from the others — darker, more technical, more futuristic. It's the engine room.

**Section: Finex Pay (Pattern B — Split)**
- Left: Content about alternative payments, crypto integration, 5.8M users stat
- Right: Abstract fintech/crypto visual. Digital currency symbols, blockchain-inspired graphic. Placeholder: dark gradient with tech-pattern.
- Stat block: "5.8 Million" crypto users in SA (large, gradient text)
- Background: Very dark, near-black, with subtle grid lines

**Section: Visual Divider**
- EnergySwoosh in cyan/blue tones (not the full sunset — tech palette)

**Section: Finex Technologies (Pattern B — Split, reversed)**
- Left: Abstract infrastructure visual — server racks, code lines, or connected nodes
- Right: Content about proprietary software, digital wallets, remittance platforms
- Keywords to visualise: "data security", "real-time execution", "agility"
- Background: Dark navy

**Section: CTA (Pattern F)**
- Cyan-to-navy gradient
- "Speak to Our Technology Team"

---

### ABOUT (/about)

**Hero (Pattern A — Heritage, warm)**
- Background: Sunset gradient (full spectrum) with slight dark overlay for text legibility
- Content: Centred
  - Headline: "Trusted Heritage and an Inclusive Future." (--text-hero, white)
  - Subline: "Building a new generation, technology-driven banking platform." (--text-xl, white)
- Warm, established, aspirational tone

**Section: Our Story (Pattern B — Split, timeline left)**
- Left: Visual timeline showing key milestones
  - 2013: Founded
  - 2018: iMali Express Forex acquisition
  - 2025-2026: Category 4 licence pursuit, TPP status
- Right: Narrative text about heritage and growth
- Background: --color-surface

**Section: Strategic Objectives (Pattern D — Accent Band)**
- Dark navy background
- Key strategic goals displayed as prominent text blocks
- Category 4 Licence, Third Party Payment Provider, Bank Sponsorship

**Section: Group Structure (Pattern B — Full-width visual)**
- Org chart/structure diagram showing all 8 entities
- TODO: Client to provide "stunning corporate profile" image
- Placeholder: Code-generated org chart using branded cards for each entity, connected by lines
- Each entity card shows logo placeholder + name + one-line descriptor

**Section: Regulatory (Pattern D — Accent Band)**
- Same regulatory information as homepage but with more detail
- FSP, SARB, Category Two ADLA
- Background: --color-navy

**Section: BankZero Partnership**
- TODO: Content pending from client
- Placeholder section with "Partnership details coming soon" in muted text

---

### CONTACT (/contact)

**Hero (Pattern A — Compact, functional)**
- Shorter hero than other pages (50vh max)
- Background: Sunset gradient, slightly muted
- Content centred:
  - Headline: "We Are Right Where You Need Us." (--text-3xl, white)
  - Body paragraph about support teams

**Section: Contact Grid (Pattern C — Segmented blocks)**
- Each brand gets its own ContactBlock component
- Layout: 2 columns desktop (3 rows), single column mobile
- Each block shows:
  - Brand logo/name (with data-brand styling)
  - Phone number(s)
  - Email
  - Specific CTA (e.g., "Book a Demo" for FINEXflow, "Download App" for Finex Money)
- Group/Corporate enquiries block is larger, spanning full width at the top

**Section: Contact Form (Pattern B — Split)**
- Left: Simple form (Name, Email, Subsidiary dropdown, Message, Submit button)
- Right: Embedded Google Map showing Paarl head office (27 Bergrivier Boulevard)
- Background: --color-surface-alt

**Section: Head Office (Pattern F — compact)**
- Physical address, phone numbers
- Small map or address block
- Background: --color-navy, white text

---

## IMAGE DIRECTION SUMMARY

For the client asset request, here's what we need per page:

| Page | Hero Image | Supporting Images |
|------|-----------|-------------------|
| Homepage | None (gradient only) | Subsidiary logos (SVG) |
| Finex Money | Young person with phone + Finex card, urban setting | App screenshots (2-3 screens), card product shot |
| FINEXflow | Dashboard on laptop/tablet screen | Industry worker photos x5 (construction, agriculture, factory, security, corporate), dashboard screenshots |
| iMali Express | Person sending money on phone, warm domestic/transit setting | App screenshots (send screen, rate checker), branch interior photos |
| Treasury | None (typographic hero) | Abstract finance/data visual (optional) |
| Global | None or subtle globe/map visual | Gold/precious metals product shots (optional) |
| Technology | None (dark tech-aesthetic hero) | Abstract tech/infrastructure visuals |
| About | None (gradient hero) | Group structure diagram, team photo (optional), timeline visual assets |
| Contact | None (compact gradient hero) | Google Maps embed, branch location photos (optional) |

**Photography style guide (for client's photographer or stock selection):**
- Real South African people, diverse representation
- Warm, golden-hour natural lighting
- Real environments: township homes, taxi ranks, supermarkets, farms, construction sites, offices
- NOT sanitised, NOT overly corporate
- Phone/app interactions should show actual screens where possible
- Workers in appropriate industry gear (hi-vis, hard hats, business attire)
- Energy and warmth, not stiffness
- Reference: existing brand collateral in the uploaded ad PDFs matches this direction perfectly

---

*This document defines the visual design. Combine with FINEX-SA-GROUP-SITE-SPEC-FINAL.md for content and CLAUDE.md for build rules.*
