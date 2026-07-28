import { useEffect, useRef, useState } from "react";
import RetroStarfield from "./RetroStarfield";
import PixelShip from "./PixelShip";

const SESSION_KEY = "jkd_intro_seen";
const FLY_DURATION = 5000; // ms — ship acts as a 5s progress bar
const EXIT_DURATION = 600;

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
}

export default function IntroSplash() {
  const [mounted, setMounted] = useState(false);
  const [exiting, setExiting] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

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

  // Auto-advance when the ship reaches the end (or immediately if reduced motion).
  useEffect(() => {
    if (!mounted) return;
    const reduced = prefersReducedMotion();
    const flyMs = reduced ? 800 : FLY_DURATION;
    buttonRef.current?.focus();
    const t1 = window.setTimeout(() => setExiting(true), flyMs);
    const t2 = window.setTimeout(() => setMounted(false), flyMs + EXIT_DURATION);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
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
    setExiting(true);
    window.setTimeout(() => setMounted(false), EXIT_DURATION);
  }

  if (!mounted) return null;

  return (
    <div
      className={`intro-splash ${exiting ? "is-exiting" : ""}`}
      role="dialog"
      aria-label="Welcome"
    >
      <RetroStarfield />

      <div className="intro-content">
        <div className="intro-lines">
          <div className="intro-line intro-line-1">
            <span className="intro-name-reveal">Joel Kaleb Dias</span>
            <span className="intro-shooting-star" aria-hidden>
              <span className="intro-shooting-star-head" />
              <span className="intro-shooting-star-tail" />
            </span>
          </div>
          <div className="intro-line intro-line-2">
            <span className="intro-text-burn intro-text-burn--delay">
              Product (UX/UI) Designer
            </span>
          </div>
        </div>

        <button
          ref={buttonRef}
          type="button"
          className="intro-enter is-ready"
          onClick={dismiss}
        >
          <span>&gt; Enter</span>
        </button>
      </div>

      {/* Ship progress bar — spans full width over 5s */}
      <div className="intro-ship-track" aria-hidden>
        <div className="intro-progress-line" />
        <div className="intro-ship">
          <div className="intro-ship-flames" />
          <PixelShip size={56} />
        </div>
      </div>
    </div>
  );
}
