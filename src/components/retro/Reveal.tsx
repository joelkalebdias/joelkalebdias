import React, { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";

type RevealEffect = "crt-boot" | "pixel-fade" | "rgb-glitch";

type RevealPanelProps = {
  as?: ElementType;
  effect?: RevealEffect;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

export function RevealPanel({
  as: As = "div",
  effect = "pixel-fade",
  delay = 0,
  className = "",
  style,
  children,
}: RevealPanelProps) {
  const { ref, revealed } = useReveal<HTMLDivElement>();
  const stateClass = revealed ? "is-visible" : "";
  const effectClass = `reveal-${effect}`;
  return (
    <As
      ref={ref as React.Ref<HTMLDivElement>}
      className={`${effectClass} ${stateClass} ${className}`.trim()}
      style={{ ...style, animationDelay: delay ? `${delay}ms` : undefined }}
    >
      {children}
    </As>
  );
}

type StaggerGroupProps = {
  as?: ElementType;
  staggerMs?: number;
  className?: string;
  style?: CSSProperties;
  effect?: RevealEffect;
  children: ReactNode;
};

export function StaggerGroup({
  as: As = "div",
  staggerMs = 80,
  className = "",
  style,
  effect = "pixel-fade",
  children,
}: StaggerGroupProps) {
  const { ref, revealed } = useReveal<HTMLDivElement>();
  const items = React.Children.toArray(children);
  return (
    <As ref={ref as React.Ref<HTMLDivElement>} className={className} style={style}>
      {items.map((child, i) => {
        if (!React.isValidElement(child)) return child;
        const el = child as React.ReactElement<{ className?: string; style?: CSSProperties }>;
        const childClass = el.props.className ?? "";
        const childStyle = el.props.style ?? {};
        return React.cloneElement(el, {
          key: el.key ?? i,
          className: `${childClass} reveal-${effect} ${revealed ? "is-visible" : ""}`.trim(),
          style: { ...childStyle, animationDelay: `${i * staggerMs}ms` },
        });
      })}
    </As>
  );
}

type TypewriterProps = {
  text: string;
  style?: CSSProperties;
  className?: string;
  /** ms per character (char-mode) or per line (line-mode) */
  speed?: number;
  /** Force a mode; auto: line-mode if multi-line or >180 chars */
  mode?: "auto" | "char" | "line";
  /** Show caret while typing */
  caret?: boolean;
};

/**
 * Performance-tuned typewriter:
 * - Writes directly to a span via ref (no React re-render per tick).
 * - Drives ticks with rAF + accumulated dt, so it stays smooth under load
 *   and gracefully drops frames instead of queueing setTimeouts.
 * - Reserves min-height to avoid layout shift / scroll jank.
 */
export function TypewriterText({
  text,
  style,
  className = "",
  speed,
  mode = "auto",
  caret = true,
}: TypewriterProps) {
  const { ref: hostRef, revealed } = useReveal<HTMLParagraphElement>();
  const textRef = useRef<HTMLSpanElement | null>(null);
  const caretRef = useRef<HTMLSpanElement | null>(null);
  const [done, setDone] = useState(false);

  const isMultiline = text.includes("\n");
  const resolvedMode =
    mode === "auto" ? (isMultiline || text.length > 180 ? "line" : "char") : mode;
  const tickSpeed = speed ?? (resolvedMode === "line" ? 70 : 12);

  useEffect(() => {
    if (!revealed) return;
    const units = resolvedMode === "line" ? text.split("\n") : Array.from(text);
    let count = 0;
    let raf = 0;
    let last = performance.now();
    let acc = 0;

    const node = textRef.current;
    if (!node) return;

    const tick = (now: number) => {
      const dt = now - last;
      last = now;
      acc += dt;
      let advanced = false;
      // Allow multiple advances per frame if the tab was throttled.
      while (acc >= tickSpeed && count < units.length) {
        acc -= tickSpeed;
        count += 1;
        advanced = true;
      }
      if (advanced) {
        node.textContent =
          resolvedMode === "line" ? units.slice(0, count).join("\n") : units.slice(0, count).join("");
      }
      if (count < units.length) {
        raf = requestAnimationFrame(tick);
      } else {
        setDone(true);
        if (caretRef.current) caretRef.current.style.display = "none";
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [revealed, text, resolvedMode, tickSpeed]);

  return (
    <p
      ref={hostRef}
      className={className}
      style={{
        ...style,
        whiteSpace: isMultiline ? "pre-line" : style?.whiteSpace,
        minHeight: "1.45em",
        contain: "paint",
      }}
    >
      <span ref={textRef}>{revealed ? "" : "\u00A0"}</span>
      {caret && !done && (
        <span ref={caretRef} className="retro-caret" aria-hidden>
          ▍
        </span>
      )}
    </p>
  );
}
