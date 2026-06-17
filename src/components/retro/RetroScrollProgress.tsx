import { useEffect, useRef } from "react";

export function RetroScrollProgress() {
  const fillRef = useRef<HTMLSpanElement | null>(null);
  const tickingRef = useRef(false);

  useEffect(() => {
    const update = () => {
      tickingRef.current = false;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      const p = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      const clamped = Math.min(100, Math.max(0, p));
      if (fillRef.current) {
        // Write directly to DOM to avoid React re-renders on every scroll tick.
        fillRef.current.style.transform = `scaleX(${clamped / 100})`;
      }
    };
    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="retro-progress" aria-hidden>
      <span ref={fillRef} />
    </div>
  );
}
