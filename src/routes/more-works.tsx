import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
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
};

// Row-grouped layout to mirror the Figma composition.
type Row = { cols: 2 | 3; items: Work[] };

const ROWS: Row[] = [
  {
    cols: 2,
    items: [
      { title: "Doctor anywhere", category: "UX/UI Design", filter: "UX/UI", aspect: "612 / 423", tint: "linear-gradient(135deg,#5B7CFA,#8B5CF6)" },
      { title: "Apex Airplane", category: "UI Design", filter: "UI Design", aspect: "612 / 423", tint: "linear-gradient(135deg,#0E1A3A,#26468C)" },
    ],
  },
  {
    cols: 3,
    items: [
      { title: "Mahindra Finance", category: "UI Design", filter: "UI Design", aspect: "400 / 260", tint: "linear-gradient(135deg,#EE3A43,#8A0F14)" },
      { title: "HSBC", category: "UI Design", filter: "UI Design", aspect: "400 / 260", tint: "linear-gradient(135deg,#111,#DB0011)" },
      { title: "Laundry app", category: "UI Design", filter: "UI Design", aspect: "400 / 260", tint: "linear-gradient(135deg,#3CC1B0,#0E766A)" },
    ],
  },
  {
    cols: 2,
    items: [
      { title: "Godrej properties limited", category: "UX/UI Design", filter: "UX/UI", aspect: "612 / 423", tint: "linear-gradient(135deg,#123,#2A2A5E)" },
      { title: "Subc()n.work", category: "UX/UI Design", filter: "UX/UI", aspect: "612 / 423", tint: "linear-gradient(135deg,#F79646,#BE3A0E)" },
    ],
  },
  {
    cols: 2,
    items: [
      { title: "IG Post", category: "Art", filter: "Art", aspect: "608 / 585", tint: "linear-gradient(135deg,#E091D0,#7A2C7A)" },
      { title: "IG Post", category: "Art", filter: "Art", aspect: "608 / 585", tint: "linear-gradient(135deg,#F5C542,#E15A2B)" },
    ],
  },
  {
    cols: 3,
    items: [
      { title: "Universal studios singapore", category: "UX/UI", filter: "UX/UI", aspect: "400 / 264", tint: "linear-gradient(135deg,#1B1145,#5E3AE0)" },
      { title: "Astro 11", category: "Logo", filter: "Logo", aspect: "400 / 264", tint: "linear-gradient(135deg,#0E0E20,#4C4C90)" },
      { title: "3R", category: "Logo", filter: "Logo", aspect: "400 / 264", tint: "linear-gradient(135deg,#111,#333)" },
    ],
  },
  {
    cols: 2,
    items: [
      { title: "The departure gate", category: "Installation, Art", filter: "Art", aspect: "608 / 420", tint: "linear-gradient(135deg,#0B0B0B,#3A3A3A)" },
      { title: "Dead inside", category: "Art", filter: "Art", aspect: "608 / 420", tint: "linear-gradient(135deg,#7A0E1A,#1A0206)" },
    ],
  },
  {
    cols: 3,
    items: [
      { title: "Poster", category: "Graphic", filter: "Graphic Design", aspect: "400 / 364", tint: "linear-gradient(135deg,#F58ABC,#8A1E5A)" },
      { title: "Vinh", category: "Logo", filter: "Logo", aspect: "400 / 364", tint: "linear-gradient(135deg,#F5ED94,#E0A020)" },
      { title: "Delivery for franchisees", category: "UX/UI", filter: "UX/UI", aspect: "400 / 364", tint: "linear-gradient(135deg,#3B82F6,#1E3A8A)" },
    ],
  },
  {
    cols: 2,
    items: [
      { title: "Card game - Data security", category: "Graphic design", filter: "Graphic Design", aspect: "608 / 420", tint: "linear-gradient(135deg,#0F172A,#334155)" },
      { title: "Pattern design", category: "Graphic", filter: "Graphic Design", aspect: "608 / 420", tint: "linear-gradient(135deg,#FDE68A,#F97316)" },
    ],
  },
  {
    cols: 3,
    items: [
      { title: "Karnuada Market", category: "Logo", filter: "Logo", aspect: "400 / 264", tint: "linear-gradient(135deg,#7B3F00,#2A1400)" },
      { title: "Visiting card design", category: "Graphic", filter: "Graphic Design", aspect: "400 / 264", tint: "linear-gradient(135deg,#F4F4F4,#B8B8B8)" },
      { title: "Darisa", category: "Logo", filter: "Logo", aspect: "400 / 264", tint: "linear-gradient(135deg,#DA3A3A,#4C0000)" },
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

function WorkTile({ work }: { work: Work }) {
  return (
    <figure style={{ margin: 0, display: "flex", flexDirection: "column" }}>
      <div
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
        }}
      >
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
      </div>
      <figcaption>
        <ItemCaption title={work.title} category={work.category} />
      </figcaption>
    </figure>
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
      className="retro-card"
      style={{
        ...pixelBody,
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "10px 16px",
        borderRadius: 8,
        border: "none",
        cursor: "pointer",
        background: active
          ? "linear-gradient(180deg, #FFEC7F 0%, #F0D642 100%)"
          : "linear-gradient(180deg, #260A20 0%, #3A0F30 100%)",
        color: active ? "#320032" : "#FFEC7F",
        boxShadow: active
          ? "-2px -2px 0 0 #A70 inset, 2px 2px 0 0 #FFFEF6 inset"
          : "-2px -2px 0 0 #4C042C inset, 2px 2px 0 0 #F58ABC inset",
        fontSize: 17,
        lineHeight: 1,
        letterSpacing: "-0.34px",
      }}
    >
      <span>{label}</span>
      <span
        style={{
          ...pixelHeading,
          fontSize: 11,
          color: active ? "#8A00B1" : "#F58ABC",
          textShadow: active ? "1px 1px 0 #FF94C2" : "1px 1px 0 #4C042C",
        }}
      >
        [{count}]
      </span>
      <span className="pix tl" aria-hidden />
      <span className="pix tr" aria-hidden />
      <span className="pix bl" aria-hidden />
      <span className="pix br" aria-hidden />
    </button>
  );
}

function MoreWorksPage() {
  const [active, setActive] = useState<FilterKey>("All");

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
                <WorkTile key={`${w.title}-${j}`} work={w} />
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
