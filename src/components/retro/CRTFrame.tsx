import { useEffect, useState } from "react";

type Settings = { bezel: boolean; noise: boolean; bloom: boolean };
const KEY = "crt-settings-v1";
const DEFAULTS: Settings = { bezel: true, noise: true, bloom: true };

/**
 * CRTFrame — persistent site-wide CRT monitor overlay.
 * Includes a barrel-curved top/bottom bezel (SVG), animated noise, phosphor
 * bloom, corner vignette, reflections, sheen, scanlines, and chroma bleed.
 * Toggle panel (bottom-right) lets the user turn each layer off; state persists
 * in localStorage. All decorative layers are pointer-events-none so scrolling
 * and clicking are unaffected.
 */
export default function CRTFrame() {
  const [settings, setSettings] = useState<Settings>(DEFAULTS);
  const [open, setOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<Settings>;
        setSettings({ ...DEFAULTS, ...parsed });
      }
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(KEY, JSON.stringify(settings));
    } catch {
      /* ignore */
    }
  }, [settings, hydrated]);

  const toggle = (key: keyof Settings) =>
    setSettings((s) => ({ ...s, [key]: !s[key] }));

  const { bezel, noise, bloom } = settings;

  return (
    <>
      {bezel && (
        <div
          aria-hidden="true"
          className="crt-frame pointer-events-none fixed inset-0 z-[60]"
        >
          {/* Inner screen area — holds all glassy overlays. Rendered first so
              the curved bezel SVG on top can clip them at the barrel edges. */}
          <div className="crt-frame__screen absolute overflow-hidden">
            {bloom && <div className="crt-frame__bloom absolute inset-0" />}
            <div className="crt-frame__vignette absolute inset-0" />
            <div className="crt-frame__reflection-primary absolute" />
            <div className="crt-frame__reflection-secondary absolute" />
            <div className="crt-frame__sheen absolute" />
            <div className="crt-frame__scanlines absolute inset-0" />
            {noise && <div className="crt-frame__noise absolute inset-0" />}
            <div className="crt-frame__chroma absolute inset-0" />
          </div>

          {/* Barrel-curved bezel drawn as a stretched SVG. evenodd fill: outer
              viewport rect minus a rounded barrel cutout with curved top &
              bottom, giving the illusion of a bulging CRT tube. */}
          <svg
            className="crt-frame__svg absolute inset-0 h-full w-full"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
          >
            <defs>
              <linearGradient id="crt-bezel-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#151518" />
                <stop offset="50%" stopColor="#08080a" />
                <stop offset="100%" stopColor="#151518" />
              </linearGradient>
            </defs>
            <path
              fillRule="evenodd"
              d="M 0 0 H 100 V 100 H 0 Z
                 M 3 1.2
                 Q 50 -0.6 97 1.2
                 L 97 96
                 Q 50 98.8 3 96
                 Z"
              fill="url(#crt-bezel-grad)"
            />
            {/* Inner highlight lip along the curved cutout */}
            <path
              d="M 3 1.2 Q 50 -0.6 97 1.2 L 97 96 Q 50 98.8 3 96 Z"
              fill="none"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="0.15"
              vectorEffect="non-scaling-stroke"
            />
            {/* Soft shadow along inside of cutout */}
            <path
              d="M 3 1.2 Q 50 -0.6 97 1.2 L 97 96 Q 50 98.8 3 96 Z"
              fill="none"
              stroke="rgba(0,0,0,0.9)"
              strokeWidth="0.4"
              vectorEffect="non-scaling-stroke"
              style={{ filter: "blur(1px)" }}
            />

          </svg>
        </div>
      )}

      {/* Toggle panel — always available (even with bezel off) so the user can
          turn it back on. */}
      <div className="fixed bottom-4 right-4 z-[70] flex flex-col items-end gap-2">
        {open && (
          <div className="crt-toggle-panel pointer-events-auto flex flex-col gap-1 rounded-md border border-white/15 bg-black/85 p-2 text-[10px] uppercase tracking-widest text-white/90 shadow-xl backdrop-blur-sm">
            <ToggleRow
              label="Bezel"
              on={bezel}
              onClick={() => toggle("bezel")}
            />
            <ToggleRow
              label="Noise"
              on={noise}
              onClick={() => toggle("noise")}
              disabled={!bezel}
            />
            <ToggleRow
              label="Bloom"
              on={bloom}
              onClick={() => toggle("bloom")}
              disabled={!bezel}
            />
          </div>
        )}
        <button
          type="button"
          aria-label="CRT display settings"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="crt-toggle-button pointer-events-auto flex h-10 w-10 items-center justify-center rounded-md border border-white/20 bg-black/80 text-white/90 shadow-lg backdrop-blur-sm transition hover:bg-black hover:text-white"
        >
          {/* Pixel CRT glyph */}
          <svg width="18" height="18" viewBox="0 0 18 18" shapeRendering="crispEdges">
            <rect x="1" y="3" width="16" height="11" fill="none" stroke="currentColor" strokeWidth="2" />
            <rect x="4" y="14" width="10" height="1" fill="currentColor" />
            <rect x="7" y="15" width="4" height="2" fill="currentColor" />
            <rect x="4" y="6" width="2" height="2" fill="currentColor" opacity="0.7" />
            <rect x="8" y="6" width="6" height="1" fill="currentColor" opacity="0.5" />
            <rect x="8" y="9" width="4" height="1" fill="currentColor" opacity="0.5" />
          </svg>
        </button>
      </div>
    </>
  );
}

function ToggleRow({
  label,
  on,
  onClick,
  disabled,
}: {
  label: string;
  on: boolean;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="flex items-center justify-between gap-3 rounded px-2 py-1 text-left transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
    >
      <span>{label}</span>
      <span
        aria-hidden
        className={`inline-block h-2.5 w-6 rounded-sm border border-white/40 ${
          on ? "bg-[#7CFF9B]" : "bg-white/10"
        }`}
        style={
          on
            ? { boxShadow: "0 0 6px rgba(124,255,155,0.7)" }
            : undefined
        }
      />
    </button>
  );
}
