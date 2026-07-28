# Site-wide CRT Monitor Frame

Yes — we can wrap the whole app in a persistent CRT "cabinet" so every page looks like it's playing inside an old tube monitor, matching the retro aesthetic already established (scanlines, pixel cursors, glitch intro).

## What it looks like

- A fixed, full-viewport frame that sits above the page content, with the actual site rendered inside a slightly inset "screen" area.
- Bezel: thick, subtly curved dark plastic frame (rounded corners, ~24–40px) with a soft outer shadow and a faint inner shadow to give depth.
- Screen curvature: gentle barrel feel using an inset radial gradient + vignette at the corners (no heavy `filter` warp — keeps text crisp and perf smooth).
- Reflections:
  - One large diagonal specular highlight in the top-left of the glass (soft white gradient, very low opacity).
  - A smaller secondary glint near the top-right.
  - A faint horizontal "glass sheen" band that drifts extremely slowly (optional, respects `prefers-reduced-motion`).
- Ambient details: subtle scanline overlay tuned lighter than the current page-level one, tiny vignette darkening at the four corners, faint chromatic edge tint.
- Everything is `pointer-events: none` so it never blocks clicks/scroll.

## Structure

```text
<CRTFrame>                     ← fixed, inset 16–32px from viewport edges
  ├─ bezel (rounded, shadowed)
  ├─ screen inset (children render here — the whole router)
  └─ overlays (pointer-events-none)
       ├─ corner vignette
       ├─ diagonal reflection (top-left)
       ├─ secondary glint (top-right)
       ├─ soft scanlines
       └─ optional slow sheen
```

## Where it goes

- New component: `src/components/retro/CRTFrame.tsx`.
- Mounted once in `src/routes/__root.tsx` wrapping `<Outlet />` so it persists across route changes (no re-mount flicker).
- The intro splash (`IntroSplash`) renders **inside** the CRT frame too, so the glitch exit happens on the tube.
- Body background stays dark so the space around the bezel reads as "the room behind the monitor."

## Responsiveness & options

- Desktop: full bezel with generous padding (~24–32px inset, ~28px radius).
- Tablet: reduced padding (~12–16px inset, ~20px radius).
- Mobile (<640px): frame collapses to a thin rounded border + scanlines only — a full bezel eats too much screen. This can be tuned once you see it.
- Toggle: I'll expose a small `useCRTFrame` flag so we can disable it on specific routes if needed (e.g. printable pages) — off by default means always on.

## Technical notes

- Pure CSS + SVG overlays, no runtime JS animation loops. Reflections are `linear-gradient` / `radial-gradient` layers.
- Uses existing design tokens in `src/styles.css`; adds a few CRT-specific tokens (`--crt-bezel`, `--crt-screen-radius`, `--crt-reflection`) alongside existing retro variables.
- Content inside remains fully scrollable — the frame is `position: fixed`, the screen area uses `overflow: hidden` on the bezel visual but the inner content wrapper stays `overflow: visible` so page scroll behaves normally.
- Respects `prefers-reduced-motion` (disables the drifting sheen).
- No changes to routing, data, or existing components' logic.

## One quick decision

Do you want the bezel to be:
- **A. Classic black plastic** (matte dark grey, subtle highlights) — cleaner, matches current dark theme.
- **B. Beige/cream retro PC** (like an old CRT from the 90s) — more overtly nostalgic, contrasts with the dark page bg.

If you don't specify I'll go with **A (black plastic)** since it complements the existing palette and the pink/green accents already in the site.
