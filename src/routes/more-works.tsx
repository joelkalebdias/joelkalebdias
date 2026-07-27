import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import RetroStarfield from "@/components/retro/RetroStarfield";
import { RetroScrollProgress } from "@/components/retro/RetroScrollProgress";
import doctoranywhere from "@/assets/more-works/doctoranywhere.png.asset.json";
import apex from "@/assets/more-works/apex-airlines.png.asset.json";
import mahindra from "@/assets/more-works/mahindra-finance.png.asset.json";
import hsbc from "@/assets/more-works/hsbc.png.asset.json";
import laundry from "@/assets/more-works/laundry-app.png.asset.json";
import godrej from "@/assets/more-works/godrej-properties-limited.png.asset.json";
import subcn from "@/assets/more-works/subc-n-work.png.asset.json";
import ig1 from "@/assets/more-works/ig-post-1.png.asset.json";
import ig2 from "@/assets/more-works/ig-post-2.png.asset.json";
import universal from "@/assets/more-works/universal-studios.png.asset.json";
import astro from "@/assets/more-works/astro-11.png.asset.json";
import threeR from "@/assets/more-works/3r.png.asset.json";
import departure from "@/assets/more-works/the-departure-gate.png.asset.json";
import deadInside from "@/assets/more-works/dead-inside.png.asset.json";
import poster from "@/assets/more-works/poster-we-are-insnae.png.asset.json";
import vinh from "@/assets/more-works/vinh-logo.png.asset.json";
import delivery from "@/assets/more-works/delivery-for-franchisees.png.asset.json";
import cardGame from "@/assets/more-works/card-game.png.asset.json";
import pattern from "@/assets/more-works/pattern.png.asset.json";
import karunada from "@/assets/more-works/karunada-market.png.asset.json";
import visiting from "@/assets/more-works/visiting-card.png.asset.json";
import darisa from "@/assets/more-works/darisa.png.asset.json";

export const Route = createFileRoute("/more-works")({
  head: () => ({
    meta: [
      { title: "More works — Joel Kaleb Dias" },
      {
        name: "description",
        content:
          "A gallery of UX/UI, UI, logos, graphic design and art projects by Joel Kaleb Dias.",
      },
      { property: "og:title", content: "More works — Joel Kaleb Dias" },
      {
        property: "og:description",
        content:
          "UX/UI, UI, logos, graphic design and art projects, experiments, and side quests.",
      },
    ],
  }),
  component: MoreWorksPage,
});

const pixelHeading = {
  fontFamily: "'Ac437 IBM CGA', 'Press Start 2P', monospace",
} as const;
const pixelBody = {
  fontFamily: "'Ac437 ATI 8x16', 'AcPlus ToshibaSat 8x16', 'VT323', monospace",
} as const;

type Category = "UX/UI Design" | "UI Design" | "Art" | "Logo" | "Graphic" | "Installation, Art" | "UX/UI" | "Graphic design";

type Work = {
  title: string;
  category: Category;
  filter: "UX/UI" | "UI Design" | "Art" | "Logo" | "Graphic Design";
  aspect: string; // css aspect-ratio
  tint: string; // fallback gradient
  img?: string; // optional image url (upload later)
  liveUrl?: string;
  figmaUrl?: string;
  slideUrl?: string;
  description?: string;
};

// Row-grouped layout to mirror the Figma composition.
type Row = { cols: 2 | 3; items: Work[] };

const ROWS: Row[] = [
  {
    cols: 2,
    items: [
      { title: "Doctor anywhere", category: "UX/UI Design", filter: "UX/UI", aspect: "612 / 423", tint: "linear-gradient(135deg,#5B7CFA,#8B5CF6)", img: doctoranywhere.url, figmaUrl: "https://www.figma.com/proto/ZL373HHy2QsmPkevnjeZyI/My-works?node-id=1049-16161&p=f&t=Sm3Fa8chnXsIdzB1-9&scaling=min-zoom&content-scaling=fixed&page-id=1049%3A13272&starting-point-node-id=1049%3A16161&show-proto-sidebar=1" },
      { title: "Apex Airplane", category: "UI Design", filter: "UI Design", aspect: "612 / 423", tint: "linear-gradient(135deg,#0E1A3A,#26468C)", img: apex.url },
    ],
  },
  {
    cols: 3,
    items: [
      { title: "Mahindra Finance", category: "UI Design", filter: "UI Design", aspect: "400 / 260", tint: "linear-gradient(135deg,#EE3A43,#8A0F14)", img: mahindra.url },
      { title: "HSBC", category: "UI Design", filter: "UI Design", aspect: "400 / 260", tint: "linear-gradient(135deg,#111,#DB0011)", img: hsbc.url, figmaUrl: "https://www.figma.com/proto/ZL373HHy2QsmPkevnjeZyI/My-works?node-id=1049-30467&t=8cuEaztAx0wKIoy5-9&scaling=min-zoom&content-scaling=fixed&page-id=1049%3A30246&starting-point-node-id=1049%3A30467&show-proto-sidebar=1" },
      { title: "Laundry app", category: "UI Design", filter: "UI Design", aspect: "400 / 260", tint: "linear-gradient(135deg,#3CC1B0,#0E766A)", img: laundry.url },
    ],
  },
  {
    cols: 2,
    items: [
      { title: "Godrej properties limited", category: "UX/UI Design", filter: "UX/UI", aspect: "612 / 423", tint: "linear-gradient(135deg,#123,#2A2A5E)", img: godrej.url, liveUrl: "https://www.godrejproperties.com/" },
      { title: "Subc()n.work", category: "UX/UI Design", filter: "UX/UI", aspect: "612 / 423", tint: "linear-gradient(135deg,#F79646,#BE3A0E)", img: subcn.url },
    ],
  },
  {
    cols: 2,
    items: [
      { title: "IG Post", category: "Art", filter: "Art", aspect: "608 / 585", tint: "linear-gradient(135deg,#E091D0,#7A2C7A)", img: ig1.url },
      { title: "IG Post", category: "Art", filter: "Art", aspect: "608 / 585", tint: "linear-gradient(135deg,#F5C542,#E15A2B)", img: ig2.url },
    ],
  },
  {
    cols: 3,
    items: [
      { title: "Universal studios singapore", category: "UX/UI", filter: "UX/UI", aspect: "400 / 264", tint: "linear-gradient(135deg,#1B1145,#5E3AE0)", img: universal.url },
      { title: "Astro 11", category: "Logo", filter: "Logo", aspect: "400 / 264", tint: "linear-gradient(135deg,#0E0E20,#4C4C90)", img: astro.url },
      { title: "3R", category: "Logo", filter: "Logo", aspect: "400 / 264", tint: "linear-gradient(135deg,#111,#333)", img: threeR.url },
    ],
  },
  {
    cols: 2,
    items: [
      { title: "The departure gate", category: "Installation, Art", filter: "Art", aspect: "608 / 420", tint: "linear-gradient(135deg,#0B0B0B,#3A3A3A)", img: departure.url, slideUrl: "https://www.figma.com/deck/s78yTxfBDb12mjGq45L5ha/Total-Loss-Presentaion-II?node-id=1-348&viewport=-16709%2C-138%2C0.7&t=ErUlHP5hOJwSovFd-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1" },
      { title: "Dead inside", category: "Art", filter: "Art", aspect: "608 / 420", tint: "linear-gradient(135deg,#7A0E1A,#1A0206)", img: deadInside.url },
    ],
  },
  {
    cols: 3,
    items: [
      { title: "Poster", category: "Graphic", filter: "Graphic Design", aspect: "400 / 364", tint: "linear-gradient(135deg,#F58ABC,#8A1E5A)", img: poster.url },
      { title: "Vinh", category: "Logo", filter: "Logo", aspect: "400 / 364", tint: "linear-gradient(135deg,#F5ED94,#E0A020)", img: vinh.url },
      { title: "Delivery for franchisees", category: "UX/UI", filter: "UX/UI", aspect: "400 / 364", tint: "linear-gradient(135deg,#3B82F6,#1E3A8A)", img: delivery.url },
    ],
  },
  {
    cols: 2,
    items: [
      { title: "Card game - Data security", category: "Graphic design", filter: "Graphic Design", aspect: "608 / 420", tint: "linear-gradient(135deg,#0F172A,#334155)", img: cardGame.url },
      { title: "Pattern design", category: "Graphic", filter: "Graphic Design", aspect: "608 / 420", tint: "linear-gradient(135deg,#FDE68A,#F97316)", img: pattern.url },
    ],
  },
  {
    cols: 3,
    items: [
      { title: "Karnuada Market", category: "Logo", filter: "Logo", aspect: "400 / 264", tint: "linear-gradient(135deg,#7B3F00,#2A1400)", img: karunada.url },
      { title: "Visiting card design", category: "Graphic", filter: "Graphic Design", aspect: "400 / 264", tint: "linear-gradient(135deg,#F4F4F4,#B8B8B8)", img: visiting.url },
      { title: "Darisa", category: "Logo", filter: "Logo", aspect: "400 / 264", tint: "linear-gradient(135deg,#DA3A3A,#4C0000)", img: darisa.url },
    ],
  },
];

type FilterKey = "All" | "UX/UI" | "UI Design" | "Art" | "Logo" | "Graphic Design";

const FILTERS: FilterKey[] = ["All", "UX/UI", "UI Design", "Art", "Logo", "Graphic Design"];

function ItemCaption({ title, category }: { title: string; category: string }) {
  return (
    <div
      style={{
        ...pixelBody,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 12,
        padding: "10px 12px 0",
        color: "#FFEC7F",
        fontSize: 16,
        lineHeight: "130%",
        letterSpacing: "-0.32px",
        textAlign: "center",
      }}
    >
      <span style={{ color: "#FFF" }}>{title}</span>
      <span style={{ opacity: 0.6 }}>|</span>
      <span style={{ color: "#F58ABC" }}>{category}</span>
    </div>
  );
}

function badgeLabel(work: Work): string | null {
  if (work.liveUrl) return "Live site";
  if (work.figmaUrl) return "Prototype";
  if (work.slideUrl) return "Presentation";
  return null;
}

function CapsuleBadge({ label }: { label: string }) {
  return (
    <div
      style={{
        ...pixelHeading,
        position: "absolute",
        top: 8,
        right: 8,
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "6px 10px",
        borderRadius: 999,
        background: "linear-gradient(180deg, #FFE324 0%, #FF06B3 100%)",
        color: "#000",
        fontSize: 10,
        lineHeight: 1,
        letterSpacing: "0.02em",
        border: "1px solid #4F1D5E",
        boxShadow: "0 2px 0 0 #4F1D5E",
        textShadow: "1px 1px 0 #BC007E",
        zIndex: 2,
      }}
    >
      <span
        aria-hidden
        style={{
          width: 6,
          height: 6,
          borderRadius: 999,
          background: "#00E36A",
          boxShadow: "0 0 6px #00E36A",
        }}
      />
      {label}
    </div>
  );
}

function WorkTile({ work, onOpen }: { work: Work; onOpen: () => void }) {
  const badge = badgeLabel(work);
  return (
    <figure style={{ margin: 0, display: "flex", flexDirection: "column" }}>
      <button
        type="button"
        onClick={onOpen}
        className="retro-card"
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: work.aspect,
          borderRadius: 8,
          overflow: "hidden",
          background: work.img ? "#0A0224" : work.tint,
          boxShadow:
            "-2px -2px 0 0 #4C042C inset, 2px 2px 0 0 #FFFEF6 inset",
          padding: 0,
          border: "none",
          cursor: "pointer",
          display: "block",
        }}
        aria-label={`Open ${work.title}`}
      >
        {badge && <CapsuleBadge label={badge} />}
        {work.img ? (
          <img
            src={work.img}
            alt={work.title}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        ) : (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              ...pixelHeading,
              color: "#FFEC7F",
              textShadow: "2px 2px 0 rgba(0,0,0,0.4)",
              fontSize: "clamp(18px, 3vw, 28px)",
              textAlign: "center",
              padding: 24,
              letterSpacing: "-0.02em",
            }}
          >
            {work.title}
          </div>
        )}
        <span className="pix tl" aria-hidden />
        <span className="pix tr" aria-hidden />
        <span className="pix bl" aria-hidden />
        <span className="pix br" aria-hidden />
      </button>
      <figcaption>
        <ItemCaption title={work.title} category={work.category} />
      </figcaption>
    </figure>
  );
}

function WorkModal({ work, onClose }: { work: Work; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  const linkUrl = work.liveUrl ?? work.figmaUrl ?? work.slideUrl ?? null;
  const linkLabel = work.liveUrl
    ? "View live site"
    : work.figmaUrl
    ? "View Figma prototype"
    : work.slideUrl
    ? "View presentation"
    : null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={work.title}
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        background: "rgba(6, 2, 20, 0.72)",
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "min(1040px, 100%)",
          maxHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          background: "#EDEAE0",
          border: "1px solid #1A1A1A",
          boxShadow:
            "-2px -2px 0 0 #FFFEF6 inset, 2px 2px 0 0 #4C042C inset, 0 12px 0 0 rgba(0,0,0,0.35)",
          borderRadius: 4,
          overflow: "hidden",
          fontFamily: pixelBody.fontFamily,
        }}
      >
        {/* Title bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "6px 8px",
            background: "linear-gradient(180deg, #4F1D5E 0%, #2A0E38 100%)",
            borderBottom: "1px solid #1A1A1A",
            color: "#FFF",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8, minWidth: 0 }}>
            <span
              aria-hidden
              style={{
                width: 10,
                height: 10,
                background: "#FFE324",
                border: "1px solid #1A1A1A",
                display: "inline-block",
              }}
            />
            <span
              style={{
                ...pixelHeading,
                fontSize: 11,
                letterSpacing: "0.02em",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {work.title}.exe
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            style={{
              ...pixelHeading,
              width: 24,
              height: 20,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#D9D5C6",
              color: "#1A1A1A",
              border: "1px solid #1A1A1A",
              boxShadow: "-1px -1px 0 0 #FFFEF6 inset, 1px 1px 0 0 #6E6A5A inset",
              fontSize: 11,
              cursor: "pointer",
              lineHeight: 1,
            }}
          >
            X
          </button>
        </div>

        {/* Body */}
        <div
          style={{
            padding: 16,
            display: "flex",
            flexDirection: "column",
            gap: 14,
            overflowY: "auto",
            background:
              "repeating-linear-gradient(0deg, #EDEAE0 0 2px, #E5E1D3 2px 4px)",
          }}
        >
          <div
            style={{
              background: "#0A0224",
              border: "1px solid #1A1A1A",
              boxShadow: "-2px -2px 0 0 #FFFEF6 inset, 2px 2px 0 0 #4C042C inset",
              padding: 6,
            }}
          >
            {work.img ? (
              <img
                src={work.img}
                alt={work.title}
                style={{
                  width: "100%",
                  maxHeight: "60vh",
                  objectFit: "contain",
                  display: "block",
                  background: "#0A0224",
                }}
              />
            ) : (
              <div
                style={{
                  aspectRatio: work.aspect,
                  background: work.tint,
                }}
              />
            )}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div
              style={{
                ...pixelHeading,
                fontSize: 18,
                color: "#1A1A1A",
                letterSpacing: "-0.01em",
              }}
            >
              {work.title}
            </div>
            <div
              style={{
                ...pixelBody,
                fontSize: 15,
                color: "#4F1D5E",
              }}
            >
              {work.category}
            </div>
            {work.description && (
              <p
                style={{
                  ...pixelBody,
                  fontSize: 16,
                  color: "#2A1E38",
                  margin: 0,
                  lineHeight: 1.4,
                }}
              >
                {work.description}
              </p>
            )}
          </div>

          {linkUrl && linkLabel && (
            <div>
              <a
                href={linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  ...pixelHeading,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "10px 14px",
                  background: "linear-gradient(180deg, #FFE324 0%, #FF06B3 100%)",
                  color: "#000",
                  border: "1px solid #4F1D5E",
                  boxShadow: "0 4px 0 0 #4F1D5E",
                  fontSize: 12,
                  letterSpacing: "0.02em",
                  textDecoration: "none",
                  textShadow: "1px 1px 0 #BC007E",
                }}
              >
                {linkLabel} →
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


function FilterChip({
  label,
  count,
  active,
  onClick,
}: {
  label: FilterKey;
  count: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="px-4 py-2 rounded-lg cursor-pointer"
      style={{
        ...pixelHeading,
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        border: "1px solid #4F1D5E",
        background: active
          ? "linear-gradient(180deg, #FFE324 0%, #FF06B3 100%)"
          : "#000",
        boxShadow: "0 4px 0 0 #4F1D5E",
        color: active ? "#000" : "#fff",
        textShadow: active ? "1px 1px 0 #BC007E" : "none",
        fontSize: 12,
        lineHeight: 1,
      }}
    >
      <span>{label}</span>
      <span
        style={{
          fontSize: 10,
          opacity: 0.85,
          color: active ? "#4F1D5E" : "#FFEC7F",
          textShadow: "none",
        }}
      >
        [{count}]
      </span>
    </button>
  );
}

function MoreWorksPage() {
  const [active, setActive] = useState<FilterKey>("All");
  const [openWork, setOpenWork] = useState<Work | null>(null);

  const allWorks = useMemo(() => ROWS.flatMap((r) => r.items), []);
  const counts = useMemo(() => {
    const c: Record<FilterKey, number> = {
      All: allWorks.length,
      "UX/UI": 0,
      "UI Design": 0,
      Art: 0,
      Logo: 0,
      "Graphic Design": 0,
    };
    for (const w of allWorks) c[w.filter] += 1;
    return c;
  }, [allWorks]);

  const filteredRows = useMemo(() => {
    if (active === "All") return ROWS;
    return ROWS.map((r) => ({ ...r, items: r.items.filter((i) => i.filter === active) })).filter(
      (r) => r.items.length > 0,
    );
  }, [active]);

  return (
    <main
      className="min-h-screen w-full px-4 sm:px-6 lg:px-8 py-8 flex justify-center relative isolate"
      style={{ background: "linear-gradient(180deg, #0A0224 0%, #260A20 100%)" }}
    >
      <RetroStarfield />
      <RetroScrollProgress />
      <div className="w-full max-w-[1280px] flex flex-col gap-6 relative z-10">
        {/* Header */}
        <header
          className="rounded-xl p-6 flex flex-col sm:flex-row gap-6 sm:items-start sm:justify-between"
          style={{
            background:
              "linear-gradient(180deg, #F360A3 0%, #FF289E 76.44%, #8A00B1 100%)",
            boxShadow: "-3px -3px 0 0 #A70 inset, 3px 3px 0 0 #FFEF33 inset",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                ...pixelHeading,
                color: "#FFEC7F",
                textShadow: "2px 2px 0 #FF5900",
                fontSize: "clamp(28px, 4vw, 36px)",
                lineHeight: 1.3,
                letterSpacing: "-0.04em",
              }}
            >
              More works
            </div>
            <div
              style={{
                ...pixelBody,
                color: "#FFF",
                fontSize: 20,
                lineHeight: "130%",
                letterSpacing: "-0.4px",
                marginTop: 8,
                maxWidth: 780,
              }}
            >
              A grab-bag of side projects, freelance briefs, and personal experiments — UX/UI, UI, logos, graphic design and art.
            </div>
          </div>
          <Link
            to="/"
            className="retro-lightning"
            style={{
              ...pixelBody,
              color: "#FFF",
              fontSize: 24,
              lineHeight: "130%",
              letterSpacing: "-0.48px",
              textDecoration: "none",
            }}
          >
            Back
          </Link>
        </header>

        {/* Filter bar */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            padding: "12px 4px",
          }}
        >
          {FILTERS.map((f) => (
            <FilterChip
              key={f}
              label={f}
              count={counts[f]}
              active={active === f}
              onClick={() => setActive(f)}
            />
          ))}
        </div>

        {/* Gallery */}
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {filteredRows.map((row, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns:
                  row.cols === 2
                    ? "repeat(auto-fit, minmax(320px, 1fr))"
                    : "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 24,
              }}
            >
              {row.items.map((w, j) => (
                <WorkTile key={`${w.title}-${j}`} work={w} onOpen={() => setOpenWork(w)} />
              ))}
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer
          className="rounded-xl p-4 text-center mt-4"
          style={{
            background: "#FA0",
            boxShadow: "-2px -2px 0 0 #4C042C inset, 2px 2px 0 0 #FFFEF6 inset",
          }}
        >
          <p style={{ ...pixelHeading, color: "#320032", fontSize: 13, whiteSpace: "pre-line" }}>
            {"> Made with love in Figma + Loveable <\n2026 — Joel Kaleb Dias"}
          </p>
        </footer>
      </div>
    </main>
  );
}
