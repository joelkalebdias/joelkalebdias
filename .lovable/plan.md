## Goal
Make the case study (and home) pages more delightful to scroll by adding subtle retro CRT/terminal reveal animations as content enters the viewport — typewriter for paragraphs, CRT power-on scanline sweep for image panels, and pixel "boot-in" for cards.

## What you'll feel scrolling
- Body paragraphs in panels (Overview, Research, Competition intro, Screen descriptions, AI intro, lessons) reveal with a **typewriter effect** — characters/lines appear in sequence with a blinking pixel cursor, only on first scroll into view.
- Section headers and the green terminal info boxes do a quick **CRT power-on**: brief horizontal scanline expand from a thin line into full panel, then settle.
- Image panels (hero, solution hero, screen images, competitor images) **boot in** with a momentary RGB-shift + scanline sweep, then snap clean.
- Stat cards and process tiles **cascade** in (stagger) with a pixelated fade — feels like a terminal listing items.
- The "More case studies" + experience cards keep their existing hover sparkles but get a stagger-in on first reveal.
- A thin **retro progress bar** (pixelated, scanline-textured) along the top of the case study page indicates scroll progress — fits the CRT aesthetic and gives feedback while reading long content.

Animations only play **once per element** (on first intersection) so re-scrolling up doesn't re-trigger and feel busy. All effects respect `prefers-reduced-motion` (disabled / instant).

## How it'll be built (technical)

### 1. New hook: `src/hooks/use-reveal.ts`
- `useReveal()` returns a ref + boolean. Uses `IntersectionObserver` with `threshold: 0.15`, `rootMargin: "0px 0px -10% 0px"`. Sets revealed=true once and disconnects.
- Honors `prefers-reduced-motion` by returning `revealed: true` immediately.

### 2. New components: `src/components/retro/`
- `<TypewriterText text fontStyle delay speed>` — splits text into characters (or lines for long blocks to keep perf reasonable), reveals progressively with a blinking `▍` cursor that disappears at end. For multi-line `whiteSpace: pre-line` paragraphs, animates line-by-line instead of char-by-char to avoid jank.
- `<RevealPanel as="section" effect="crt-boot" delay>` — wrapper that applies a CSS class once visible. Effects: `crt-boot` (scanline sweep + slight scale/brightness), `pixel-fade` (stepped opacity + translateY), `rgb-glitch` (one-shot RGB split on images).
- `<StaggerGroup staggerMs>` — provides delay to children via context for cascade entry.

### 3. New CSS in `src/styles.css`
- `@keyframes crt-power-on` — height 2px→100%, brightness 2→1, brief horizontal scanline wipe.
- `@keyframes pixel-fade-up` — stepped (`steps(6)`) opacity + 8px translateY.
- `@keyframes rgb-glitch` — short 350ms one-shot: text/image-shadow R/B split, then settle.
- `@keyframes blink-caret` — block cursor blink.
- `.reveal-crt-boot`, `.reveal-pixel-fade`, `.reveal-rgb-glitch`, `.reveal-stagger > *` utility classes activated by a `.is-visible` state class added via the hook.
- `@media (prefers-reduced-motion: reduce)` no-ops all of the above (instant visible).

### 4. Wire into `src/routes/case-study.$slug.tsx`
- Wrap each `<PanelShell>` (Overview, Process, Research, Competition, IA, Screens, AI, Learned, More case studies) with reveal-on-scroll using the hook (add `is-visible` class).
- Replace large `<p>` body copy inside Overview, Research bodies, Competition intro, Screen body descriptions, AI intro, and Learned intro with `<TypewriterText>` (line-mode for multi-line, char-mode for single-line ≤200 chars). Headings stay instant.
- Apply `reveal-crt-boot` to the hero image, solution hero, and each screen image container.
- Apply `reveal-stagger` to the Stats grid, Process tiles, IA nav items, Works-well/Shortfall/Implications card lists, and More case studies grid.
- Add a thin sticky **retro progress bar** component at top of the main container (height 4px, pixelated, hue based on scroll %, with scanline overlay).

### 5. Touch home page lightly (`src/routes/index.tsx`)
- Wrap Projects grid, Experiences grid, Skills grid, Recommendations with `reveal-stagger` (same hook). No typewriter on home — keep its scannable feel. Hero text gets a one-shot `rgb-glitch` on mount.

## Out of scope
- No layout / copy / color changes.
- No new dependencies (pure CSS + IntersectionObserver).
- No changes to existing hover sparkle effects.

## Risk / notes
- Typewriter on very long paragraphs can feel slow → uses line-mode (1 line per ~80ms) so a 6-line paragraph completes in ~500ms — perceptible but not blocking.
- All effects guarded by `prefers-reduced-motion`.
- One-shot reveals (no re-trigger) avoid the "every scroll re-animates" annoyance.
