/**
 * CRTFrame — a persistent, site-wide overlay that makes the viewport look like
 * it's playing inside an old CRT monitor. Purely decorative, pointer-events
 * disabled so it never blocks scrolling or clicks. Mounted once in __root.
 */
export default function CRTFrame() {
  return (
    <div
      aria-hidden="true"
      className="crt-frame pointer-events-none fixed inset-0 z-[60]"
    >
      {/* Outer bezel — dark plastic ring drawn with inset box-shadows.
          The border-radius creates the rounded screen corners. */}
      <div className="crt-frame__bezel absolute inset-0" />

      {/* Inner screen area — clips all reflections/vignettes to the rounded
          "glass" surface so they don't spill over the bezel. */}
      <div className="crt-frame__screen absolute overflow-hidden">
        {/* Corner vignette — subtle darkening at the edges of the tube */}
        <div className="crt-frame__vignette absolute inset-0" />

        {/* Primary diagonal reflection in the top-left of the glass */}
        <div className="crt-frame__reflection-primary absolute" />

        {/* Secondary glint near the top-right */}
        <div className="crt-frame__reflection-secondary absolute" />

        {/* Slow horizontal sheen band (respects prefers-reduced-motion) */}
        <div className="crt-frame__sheen absolute" />

        {/* Very subtle scanline overlay on top of everything on the tube */}
        <div className="crt-frame__scanlines absolute inset-0" />

        {/* Faint chromatic edge tint — barely visible red/blue bloom at edges */}
        <div className="crt-frame__chroma absolute inset-0" />
      </div>
    </div>
  );
}
