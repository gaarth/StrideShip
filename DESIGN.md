---
name: StrideShip
description: Custom operational systems for global trade logistics — dark, precise, glass-and-slate.
colors:
  void-navy: "#060B14"
  abyss-core: "#05070A"
  ghost-white: "#F1F5F9"
  slate-mid: "#CBD5E1"
  slate-muted: "#94A3B8"
  slate-deep: "#64748B"
  slate-shadow: "#475569"
  steel-accent: "#6B8FA8"
  glass-surface: "#0A0F1E"
  border-whisper: "#FFFFFF0F"
  border-faint: "#FFFFFF1A"
  blue-wash: "#2563EB"
typography:
  display:
    fontFamily: "Work Sans, system-ui, sans-serif"
    fontSize: "clamp(3.5rem, 7vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Work Sans, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Work Sans, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Work Sans, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Space Grotesk, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.06em"
  italic-contrast:
    fontFamily: "Libre Baskerville, Georgia, serif"
    fontSize: "inherit"
    fontWeight: 400
    lineHeight: "inherit"
    letterSpacing: "normal"
rounded:
  none: "0px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  pill: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "clamp(48px, 7vw, 84px)"
  xl: "clamp(64px, 10vw, 120px)"
components:
  button-primary:
    backgroundColor: "{colors.ghost-white}"
    textColor: "{colors.void-navy}"
    rounded: "{rounded.pill}"
    padding: "14px 36px"
  button-primary-hover:
    backgroundColor: "{colors.slate-mid}"
    textColor: "{colors.void-navy}"
    rounded: "{rounded.pill}"
    padding: "14px 36px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ghost-white}"
    rounded: "{rounded.pill}"
    padding: "13px 35px"
  button-ghost-hover:
    backgroundColor: "{colors.glass-surface}"
    textColor: "{colors.ghost-white}"
    rounded: "{rounded.pill}"
    padding: "13px 35px"
  card-glass:
    backgroundColor: "{colors.glass-surface}"
    textColor: "{colors.ghost-white}"
    rounded: "{rounded.lg}"
    padding: "{spacing.md}"
---

# Design System: StrideShip

## 1. Overview

**Creative North Star: "The Operations Floor at Midnight"**

This is not a startup. It is not a dashboard. It is the visual equivalent of a precision instrument: dark, exact, and devoid of decoration that does not earn its place. Every surface is purpose-built for the operations leader who has been burned by off-the-shelf software and has no patience for marketing aesthetics masquerading as infrastructure.

The system operates in deep navy darkness — not black for drama, but the particular near-black of a trading terminal or industrial control panel. Glass surfaces press into the darkness with inset highlight lines, not with colored borders or drop shadows. Motion is architectural: fast in, slow to settle, no bounce. Typography is heavy, compressed, and close-tracked — the letterforms of a person who writes memos, not tweets.

This system explicitly rejects the visual language of SaaS: no gradient text, no hero-metric templates, no identical card grids, no friendly-startup warmth. Notion, Monday.com, Zapier, Salesforce, and Webflow templates are anti-references — not because they fail aesthetically but because they signal the wrong posture. StrideShip is infrastructure, not tooling.

**Key Characteristics:**
- Ultra-dark navy ground with muted steel-blue accent used at ≤10% surface coverage
- Glassmorphism as structural language, not decoration — translucent planes with inset highlight lines
- Heavy, compressed sans-serif headlines (Work Sans 800) cut by Libre Baskerville italic for subordinate contrast
- Motion: fast entry, exponential ease-out, no choreography for its own sake
- Copy earns every word; no word restates what the adjacent element already communicates

## 2. Colors: The Slate-and-Glass Palette

A near-monochromatic dark system with a single restrained accent. Color is information, not atmosphere.

### Primary
- **Void Navy** (`#060B14`): The base background across all sections and the page root. Not black — a deep navy tinted toward blue. Never substitute with pure `#000000`.
- **Steel Accent** (`#6B8FA8`): The sole chromatic accent. Used for hover glows, active borders, icon highlights, and bullet dots. Prohibited from appearing on more than 10% of any given screen.

### Neutral
- **Ghost White** (`#F1F5F9`): Primary text and high-contrast UI elements (primary button fill, active labels).
- **Slate Mid** (`#CBD5E1`): Secondary headings, subheadings, and card titles at rest.
- **Slate Muted** (`#94A3B8`): Body copy, supporting text, and Libre Baskerville italic clauses.
- **Slate Deep** (`#64748B`): Tertiary labels, metadata, and divider text.
- **Slate Shadow** (`#475569`): Lowest-hierarchy text — footnotes, legal copy, timestamps.
- **Abyss Core** (`#05070A`): Used for the deepest-inset card surfaces and mobile nav backdrop when maximum contrast is needed.
- **Glass Surface** (`rgba(10, 15, 30, 0.75)`): Translucent card backgrounds. Always paired with `inset 0 1px 0 rgba(255,255,255,0.06)` highlight. Never solid.
- **Border Whisper** (`rgba(255,255,255,0.06)`): Default card and section borders — just enough to separate planes without creating hard lines.
- **Border Faint** (`rgba(255,255,255,0.10)`): Hover-state borders and interactive element outlines.
- **Blue Wash** (`rgba(37, 99, 235, 0.18)` → `rgba(37, 99, 235, 0.05)`): Fixed radial gradient behind all content, z-index: -1. Provides depth without layout shift. Never used as a foreground color.

### Named Rules
**The One Accent Rule.** Steel Accent (`#6B8FA8`) appears on no more than 10% of any screen. It is used at hover, active, or highlight states only — never as a fill, never as a background, never gradient-mixed with another color. Its rarity is exactly the point: when it appears, it means something.

**The No-Pure-Black Rule.** Neither `#000000` nor `#ffffff` appears anywhere in the system. Every neutral is tinted toward the brand hue. Void Navy is the darkest surface; Ghost White is the lightest text. Substituting pure black or white fails the system.

## 3. Typography

**Display Font:** Work Sans (system-ui, sans-serif fallback)
**Contrast/Italic Font:** Libre Baskerville (Georgia, serif fallback)
**Data/Label Font:** Space Grotesk (monospace fallback)

**Character:** Work Sans at high weight and negative tracking reads as architectural — compressed, confident, no wasted space. Libre Baskerville italic introduces serif texture at subordinate weight, creating a visual register shift without adding a third typeface. Space Grotesk handles tabular data and stats with the visual language of a terminal.

### Hierarchy
- **Display** (800 weight, `clamp(3.5rem, 7vw, 6rem)`, line-height 0.95, tracking -0.04em): Hero headlines and primary section statements. Always Work Sans. Maximum one Display element per screen section.
- **Headline** (700 weight, `clamp(2.5rem, 6vw, 4.5rem)`, line-height 1.0, tracking -0.03em): Section headers and primary CTA headings.
- **Title** (600 weight, `clamp(1.25rem, 2.5vw, 1.75rem)`, line-height 1.2, tracking -0.02em): Card headings, capability titles, secondary section labels.
- **Body** (400 weight, 1rem, line-height 1.6): All prose, descriptions, and supporting copy. Max line length 65–75ch enforced. Rendered in Slate Muted (`#94A3B8`) against dark surfaces.
- **Label** (Space Grotesk, 500 weight, 0.75rem, line-height 1.4, tracking +0.06em, uppercase): Stats, data points, KPI figures, process step numbers. Tabular numerals.
- **Italic Contrast** (Libre Baskerville, 400 weight, inherited size): Used within headlines for subordinate clauses — the lighter, slightly softer thought that adds texture to the primary statement. Always rendered in Slate Muted (`#94A3B8`), never in Ghost White.

### Named Rules
**The Compression Rule.** Headline and Display type is always negatively tracked. If a heading looks like it was set with default letter-spacing, it has failed. Minimum -0.02em for Title; -0.03em for Headline; -0.04em for Display.

**The Serif Sparingly Rule.** Libre Baskerville appears only inside headline elements as an italic subordinate clause, and only when the surrounding text is Work Sans. Never use it for body copy, labels, or standalone headings. It creates contrast by exception — use it constantly and the contrast disappears.

## 4. Elevation

This system does not use box shadows for depth. Depth is conveyed through tonal layering: the background (`#060B14`) is the lowest plane; glass surfaces (`rgba(10, 15, 30, 0.75)`) sit one plane above; interactive elements at hover reveal the accent (`#6B8FA8`) at the border. There is no shadow stack.

The single exception is the abstract SVG background geometry: decorative shapes carry `filter: drop-shadow(...)` at very low opacity (~0.35) to create the sense of floating matte forms behind content. This is ambient, not structural.

### Shadow Vocabulary
- **Glass Highlight** (`inset 0 1px 0 rgba(255,255,255,0.06)`): Applied to all glass card surfaces. This is an inset highlight, not a drop shadow — it reads as a lit edge, not elevation.
- **Hover Glow** (`0 0 24px rgba(107,143,168,0.15)`): Applied to interactive cards at hover state. Subtle diffuse glow in the steel accent hue. Used sparingly.
- **SVG Ambient** (`drop-shadow(0 20px 60px rgba(0,0,0,0.6))`): Background decorative geometry only. Never applied to content elements.

### Named Rules
**The Inset-Not-Drop Rule.** Cards and glass surfaces use inset highlights, not drop shadows. If a card has a `box-shadow` with positive Y-offset and blur greater than 4px applied as the primary depth signal, it is wrong. The plane system is tonal, not shadow-based.

## 5. Components

### Buttons
Buttons are architectural and pill-shaped. They communicate confidence, not invitation.

- **Shape:** Full pill (border-radius 9999px). Never square, never rounded-md. The pill is load-bearing to the brand register.
- **Primary:** Ghost White (`#F1F5F9`) fill, Void Navy (`#060B14`) text, 48–54px height, 32–38px horizontal padding. The primary button inverts the surface — it is the only truly light element on a dark screen.
- **Hover / Focus:** Background shifts to Slate Mid (`#CBD5E1`); no scale transform; transition 200ms ease-out. Focus ring: 2px solid Steel Accent (`#6B8FA8`) at 2px offset.
- **Ghost / Secondary:** Transparent background, Ghost White text, 1px solid Border Faint (`rgba(255,255,255,0.10)`) border. Hover: Border Faint shifts to Steel Accent at 40% opacity; faint glass fill (`rgba(10,15,30,0.4)`) appears.
- **StarButton (signature):** Custom animated CTA with a CSS path-sweep effect (`@keyframes star-btn-sweep`, offset-distance 0–100%). Used for the primary demo-booking CTA only. Never replicated for secondary actions.

### Cards / Containers
Glass cards are the primary container. They are translucent planes, not boxes.

- **Corner Style:** 24px radius (rounded-lg). Never sharp corners; never small radius (8px or under) on a card.
- **Background:** `rgba(10, 15, 30, 0.75)` — always translucent. Never opaque fills on cards.
- **Shadow Strategy:** Glass Highlight (`inset 0 1px 0 rgba(255,255,255,0.06)`) on all cards. No drop shadows except the hover glow variant.
- **Border:** `1px solid rgba(255,255,255,0.06)` at rest; shifts to `rgba(255,255,255,0.12)` on hover with Steel Accent bleed.
- **Internal Padding:** 24px (`spacing.md`) default; 32px for feature cards with prominent headings.
- **Hover behavior:** Border brightens, accent color bleeds into the border or icon, hover glow appears. Content does not shift or scale.

### Navigation
- **Default:** Transparent background, Ghost White links at 400 weight, 0.9rem size.
- **Scrolled state (past 85vh):** Compresses into a compact pill-shaped bar with `backdrop-filter: blur(12px)` and Glass Surface background. Height reduces; horizontal padding tightens. Transition 300ms ease-out.
- **Active link:** Steel Accent (`#6B8FA8`) color; no underline, no border.
- **Mobile:** Hamburger toggle reveals a full-screen overlay with backdrop blur. Links stack vertically at Display weight (not the same as the desktop nav weight).

### BeamsBackground (signature component)
Animated canvas-based light rays that form the hero atmosphere. Not decorative — this component IS the hero surface.

- 12 beams on desktop, 8 on mobile. DPR capped at 2×. Frame rate capped at 30fps. Never remove these optimizations.
- Colors: HSL hue 190–260 range (blue-cyan family). No warm hues.
- Must not be replicated as a CSS/SVG effect. The canvas implementation controls performance precisely.

### SVG Geometry (signature component)
Abstract matte-gradient shapes used as decorative background elements in content sections.

- Fill: muted gradient in the steel/slate family. Never bright or saturated fills.
- Opacity: ~0.35 at rest. Never full opacity.
- Shadow: `drop-shadow` for ambient depth. Not `box-shadow`.
- Purpose: visual punctuation between sections. Not iconography; not illustration.

## 6. Do's and Don'ts

### Do:
- **Do** use `#060B14` as the base background. If any surface needs to be "darker," use `#05070A` — never `#000000`.
- **Do** keep Steel Accent (`#6B8FA8`) at or below 10% surface coverage. Reserve it for glows, active borders, and icon highlights only.
- **Do** use Glass Surface (`rgba(10, 15, 30, 0.75)`) with the inset highlight (`inset 0 1px 0 rgba(255,255,255,0.06)`) on every translucent container.
- **Do** use Work Sans at 700–800 weight with negative tracking (-0.03em to -0.04em) for all headline and display type.
- **Do** use Libre Baskerville italic in Slate Muted (`#94A3B8`) for subordinate headline clauses only — one per headline maximum.
- **Do** use Space Grotesk for all numerical data, stats, KPIs, and tabular displays.
- **Do** keep all body copy at 65–75ch maximum line length.
- **Do** ease all motion with exponential curves (`cubic-bezier(0.16, 1, 0.3, 1)` — fast in, slow settle). No linear, no ease-in, no bounce.
- **Do** use logistics vocabulary: ICEGATE, demurrage, Nhava Sheva, NVOCC, RFQ, CHAs, LCL. Never substitute generic SaaS language.
- **Do** use specific numbers: ₹50,000+ per container, 6–8 hours daily, 30–90 day receivables gaps. Never round to vague claims.

### Don't:
- **Don't** use gradient text (`background-clip: text` with a gradient). Prohibited. Use solid Ghost White or Slate Muted for emphasis.
- **Don't** use colored `border-left` or `border-right` greater than 1px as a card or list-item accent stripe. Rewrite with full borders, background tints, or leading icons.
- **Don't** use glassmorphism decoratively — blur and glass cards must be structural. If the blur serves no depth purpose, remove it.
- **Don't** use the hero-metric template: big number + small label + supporting stats + gradient accent. This is a SaaS cliché and fails the AI slop test.
- **Don't** use identical card grids — same-sized cards with icon + heading + text repeated endlessly. Vary sizing, weight, and content density.
- **Don't** use modals as a first-response to interaction. Exhaust inline and progressive disclosure alternatives first.
- **Don't** use em dashes (—) or double hyphens (--) in copy. Use commas, colons, semicolons, or parentheses.
- **Don't** borrow aesthetic language from Notion, Monday.com, Zapier, Salesforce, Freshworks, Zoho, Fiverr, Upwork, or any generic Webflow template.
- **Don't** use friendly-startup tone: no "Hey there!", no rocket emojis, no "seamlessly", no "unlock your potential", no "game-changing", no "revolutionary".
- **Don't** use consultant-speak: no "leverage best-in-class methodologies", no "drive outcomes", no "synergies".
- **Don't** animate CSS layout properties (width, height, top, left, padding). Animate only opacity and transform.
- **Don't** use bounce or elastic easing curves. Ever.
- **Don't** nest cards inside cards. Nested cards are always wrong.
- **Don't** wrap every element in a container. Most things don't need one.
- **Don't** use pure `#000000` or `#ffffff` anywhere. Tint every neutral toward the brand hue.
