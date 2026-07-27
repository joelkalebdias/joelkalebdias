## Intro splash: spaceship writes your name in pixel flames

A one-time-per-session welcome screen renders before the home page. A pixel-art spaceship flies left→right across a starfield, leaving a chunky orange/yellow/pink flame trail that reveals "Joel Kaleb Dias" and "Product (UX/UI) Designer". An "Enter" button appears, and after ~1s it auto-advances to the home page.

### Behavior
- Shows on first load of the site within a session; skipped on subsequent navigations using `sessionStorage` key (e.g. `jkd_intro_seen`).
- Ship flies across (~2.2s), trail fades in the two lines of text as the ship passes over their bounding boxes.
- Enter button fades in when the animation finishes; auto-advances to home ~1s later. Clicking Enter dismisses immediately.
- Respects `prefers-reduced-motion`: ship + trail are skipped, text and button appear instantly.
- Reuses existing `RetroStarfield` for the background so it feels part of the site.

### Visual direction
- Fullscreen black overlay with starfield; same pixel/retro aesthetic used elsewhere (pink/yellow gradients, pixel font, crisp edges, retro caret vibe).
- Spaceship: small pixel-art SVG (chunky, `shape-rendering: crispEdges`) sized ~48–56px.
- Flame trail: repeating pixel puff SVG sprites in orange → yellow → pink, masked by the two text strings so the letters "burn in" as the ship passes. Implemented with an SVG `<mask>` (or `background-clip: text`) over a horizontally sweeping gradient of pixel flame tiles, so the letters fill left-to-right in sync with the ship.
- Enter button matches the existing tab/CTA style (black bg, yellow→pink gradient border, purple shadow, pixel font).

### Files
- New: `src/components/retro/IntroSplash.tsx` — the overlay component (state: `phase = "flying" | "settling" | "done"`, session-storage gate, auto-advance timer, reduced-motion branch, keyboard Enter/Escape to dismiss).
- New: `src/components/retro/PixelShip.tsx` — inline SVG spaceship sprite.
- Edit: `src/routes/__root.tsx` — mount `<IntroSplash />` inside `RootComponent` above `<Outlet />` so it overlays whichever route is first loaded (home page in this case; component internally no-ops on subsequent routes/sessions).
- Edit: `src/styles.css` — add keyframes: `ship-fly` (translateX -10vw → 110vw), `flame-burn` (mask-position sweep revealing text), `intro-fade-out` for the whole overlay when Enter fires; plus utility classes for the flame gradient tiles.

### Technical notes
- Session gate runs in `useEffect` so SSR/prerender never blocks the home page; overlay starts hidden and shows only if `sessionStorage.getItem('jkd_intro_seen') !== '1'`, then sets it.
- Overlay uses `position: fixed; inset: 0; z-index: 9999` and traps focus on the Enter button.
- Animation timing (approximate):
  - 0.0s ship enters from left
  - 0.4s ship passes over "Joel Kaleb Dias" — line 1 burns in
  - 1.2s ship passes over "Product (UX/UI) Designer" — line 2 burns in
  - 2.2s ship exits right, Enter button fades in
  - 3.2s auto-advance (fade overlay out, unmount)
- No route changes needed — overlay just unmounts to reveal the already-rendered home page underneath.

### Out of scope
- No changes to home page content, other routes, or global layout.
- No audio.
