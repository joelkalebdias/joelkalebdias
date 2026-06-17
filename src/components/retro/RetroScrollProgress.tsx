import { useEffect, useState } from "react";

export function RetroScrollProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const update = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      const p = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      setPct(Math.min(100, Math.max(0, p)));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);
  return (
    <div className="retro-progress" aria-hidden>
      <span style={{ ["--p" as string]: `${pct}%` }} />
    </div>
  );
}
