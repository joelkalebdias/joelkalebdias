import React, { useEffect, useState, type CSSProperties, type ElementType, type ReactNode } from "react";
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

export function TypewriterText({
  text,
  style,
  className = "",
  speed,
  mode = "auto",
  caret = true,
}: TypewriterProps) {
  const { ref, revealed } = useReveal<HTMLParagraphElement>();
  const isMultiline = text.includes("\n");
  const resolvedMode =
    mode === "auto" ? (isMultiline || text.length > 180 ? "line" : "char") : mode;
  const tickSpeed = speed ?? (resolvedMode === "line" ? 90 : 14);

  const units = resolvedMode === "line" ? text.split("\n") : Array.from(text);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!revealed) return;
    if (count >= units.length) return;
    const id = window.setTimeout(() => setCount((c) => c + 1), tickSpeed);
    return () => window.clearTimeout(id);
  }, [revealed, count, units.length, tickSpeed]);

  const done = count >= units.length;
  let shown: string;
  if (!revealed) {
    shown = "";
  } else if (resolvedMode === "line") {
    shown = units.slice(0, count).join("\n");
  } else {
    shown = units.slice(0, count).join("");
  }

  return (
    <p
      ref={ref}
      className={className}
      style={{
        ...style,
        whiteSpace: isMultiline ? "pre-line" : style?.whiteSpace,
        // Reserve space to prevent layout shift
        minHeight: "1.45em",
      }}
    >
      {revealed ? shown : "\u00A0"}
      {revealed && caret && !done && (
        <span className="retro-caret" aria-hidden>
          ▍
        </span>
      )}
    </p>
  );
}
