import { useEffect, useRef, useState } from "react";
import RetroStarfield from "./RetroStarfield";
import PixelShip from "./PixelShip";

const SESSION_KEY = "jkd_intro_seen";
const FLY_DURATION = 2600; // ms — ship traversal
const ENTER_FADE_IN = 400;
const AUTO_ADVANCE_AFTER_BUTTON = 1000;
const EXIT_DURATION = 500;

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
}

export default function IntroSplash() {
  const [mounted, setMounted] = useState(false);
  const [phase, setPhase] = useState<"flying" | "ready" | "exiting">("flying");
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  // Mount decision runs client-side after hydration.
  useEffect(() => {
    try {
      if (typeof window === "undefined") return;
      if (sessionStorage.getItem(SESSION_KEY) === "1") return;
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* ignore */
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mounted]);

  // Timeline
  useEffect(() => {
    if (!mounted) return;
    const reduced = prefersReducedMotion();
    const flyMs = reduced ? 0 : FLY_DURATION;
    const t1 = window.setTimeout(() => {
      setPhase("ready");
      buttonRef.current?.focus();
    }, flyMs);
    const t2 = window.setTimeout(() => {
      setPhase("exiting");
    }, flyMs + AUTO_ADVANCE_AFTER_BUTTON);
    const t3 = window.setTimeout(
      () => setMounted(false),
      flyMs + AUTO_ADVANCE_AFTER_BUTTON + EXIT_DURATION,
    );
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === "Escape" || e.key === " ") {
        e.preventDefault();
        dismiss();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted]);

  function dismiss() {
    setPhase("exiting");
    window.setTimeout(() => setMounted(false), EXIT_DURATION);
  }

  if (!mounted) return null;

  return (
    <div
      className={`intro-splash ${phase === "exiting" ? "is-exiting" : ""}`}
      role="dialog"
      aria-label="Welcome"
    >
      <RetroStarfield />

      <div className="intro-content">
        <div className="intro-lines">
          <div className="intro-line intro-line-1">
            <span className="intro-text-burn" data-text="Joel Kaleb Dias">
              Joel Kaleb Dias
            </span>
          </div>
          <div className="intro-line intro-line-2">
            <span className="intro-text-burn intro-text-burn--delay" data-text="Product (UX/UI) Designer">
              Product (UX/UI) Designer
            </span>
          </div>
        </div>

        <button
          ref={buttonRef}
          type="button"
          className={`intro-enter ${phase === "ready" ? "is-ready" : ""}`}
          onClick={dismiss}
        >
          <span>&gt; Enter</span>
        </button>
      </div>

      <div className="intro-ship" aria-hidden>
        <div className="intro-ship-flames" />
        <PixelShip size={56} />
      </div>
    </div>
  );
}
