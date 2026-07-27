import React from "react";
import { Link } from "@tanstack/react-router";
import { RetroScrollProgress } from "@/components/retro/RetroScrollProgress";
import RetroStarfield from "@/components/retro/RetroStarfield";
import heroAsset from "@/assets/uti/hero.png.asset.json";
import researchAsset from "@/assets/uti/research-setup.png.asset.json";
import insightsAsset from "@/assets/uti/user-insights.png.asset.json";
import journeysAsset from "@/assets/uti/building-journeys.png.asset.json";
import visualAsset from "@/assets/uti/visual-designs.png.asset.json";
import lastAsset from "@/assets/uti/last-image.png.asset.json";

const pixelHeading = {
  fontFamily: "'Ac437 IBM CGA', 'Press Start 2P', monospace",
} as const;
const pixelBody = {
  fontFamily: "'Ac437 ATI 8x16', 'AcPlus ToshibaSat 8x16', 'VT323', monospace",
} as const;
const pixelTerminal = {
  fontFamily: "'AcPlus ToshibaSat 8x16', 'Ac437 ATI 8x16', 'VT323', monospace",
} as const;

const OTHER_PROJECTS = [
  {
    title:
      "Lumen - Social media app to rethink social platforms around transparency and connection",
    company: "Master Thesis",
    location: "Germany - 2026",
    role: "Role: Research, UX/UI Designer",
    gradient: "linear-gradient(180deg, #FF6B5C 0%, #FD7466 80%, #BC2729 100%)",
    img: "https://api.builder.io/api/v1/image/assets/TEMP/a8321c5713c1220171c431e099eb48ae8a68b4dc?width=718",
    slug: "lumen",
  },
  {
    title:
      "GeneLink - An app to connect people with their long lost relatives using state of the art DNA mapping",
    company: "Confidential",
    location: "India - 2024",
    role: "Role: UX/UI Designer (Personal Project)",
    gradient: "linear-gradient(180deg, #8B72E8 0%, #8B72E8 80%, #6B50C8 100%)",
    img: "https://api.builder.io/api/v1/image/assets/TEMP/b982a6847c860f50d4ba512ddbc3c64beca4590a?width=718",
    slug: "genelink",
  },
  {
    title:
      "Electra - A digital ecosystem for booking ships and for captains to effectively view ship status",
    company: "Pyxis",
    location: "Singapore - 2023 - 2025",
    role: "Role: Design Team Lead",
    gradient: "linear-gradient(180deg, #F0D642 0%, #F0D642 80%, #F08A42 100%)",
    img: "https://api.builder.io/api/v1/image/assets/TEMP/77f2c90dac4d95f68256e2b5f2aa4400bb85dd67?width=718",
    slug: "electra",
  },
];

const PROCESS_STEPS: { n: number; title: string; body: string }[] = [
  { n: 1, title: "Discovery", body: "Understanding current standing, and domain knowledge" },
  { n: 2, title: "User Insights", body: "Understanding business & user problems and pain points" },
  { n: 3, title: "Building the journey", body: "Building of wireframes and user flows" },
  { n: 4, title: "Visual Design", body: "Building high fidelity visual and UI Screens" },
];

const STATS: { value: string; label: string }[] = [
  { value: "1M+", label: "Downloads on play store" },
  { value: "+10%", label: "Increase in ticket size" },
  { value: "40%", label: "Users invested more than once" },
];

function SectionTitle({ text }: { text: string }) {
  return (
    <section className="w-full flex flex-col items-center p-6">
      <h2
        style={{
          ...pixelHeading,
          color: "#FFEC7F",
          fontSize: "clamp(28px, 4vw, 36px)",
          lineHeight: 1.3,
          letterSpacing: "-0.1em",
          textShadow: "2px 2px 0 #FF5900",
          textAlign: "center",
        }}
      >
        {text}
      </h2>
    </section>
  );
}

function InfoRow({ label, body }: { label: string; body: string }) {
  return (
    <section className="w-full flex flex-col md:flex-row gap-4 items-start py-4 pl-6">
      <div className="w-full md:w-[200px] flex items-center md:justify-start">
        <h2
          style={{
            ...pixelHeading,
            color: "#fff",
            fontSize: 16,
            lineHeight: 1.3,
            letterSpacing: "-0.005em",
            textShadow: "1px 1px 0 #F29A9C",
          }}
        >
          {label}
        </h2>
      </div>
      <div className="flex-1 flex items-center min-w-0">
        <p
          style={{
            fontFamily: "'JetBrains Mono', ui-monospace, monospace",
            color: "#fff",
            fontSize: 16,
            lineHeight: 1.4,
            letterSpacing: "-0.01em",
          }}
        >
          {body}
        </p>
      </div>
    </section>
  );
}

function ProcessCard({ step }: { step: (typeof PROCESS_STEPS)[number] }) {
  return (
    <div
      className="flex-1 flex items-center justify-center p-4 rounded-xl min-h-[96px]"
      style={{
        background: "#FA0",
        boxShadow: "-2px -2px 0 0 #4C042C inset, 2px 2px 0 0 #FFFEF6 inset",
      }}
    >
      <div
        style={{
          ...pixelHeading,
          color: "#320032",
          fontSize: 12,
          lineHeight: 1.3,
          letterSpacing: "-0.01em",
        }}
      >
        <ol className="list-decimal ml-[18px] mb-0">
          <li>{step.title}</li>
        </ol>
        <ul className="list-disc ml-[18px] mt-1">
          <li>{step.body}</li>
        </ul>
      </div>
    </div>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div
      className="flex-1 rounded-xl border-2 px-6 py-4 flex flex-col gap-4 items-end min-h-[138px]"
      style={{
        borderColor: "#09FF00",
        background: "linear-gradient(180deg, #004802 0%, #001F01 100%)",
        filter: "drop-shadow(2px 2px 0 #8F0045)",
        boxShadow: "inset 0 0 4px rgba(0,0,0,0.4)",
      }}
    >
      <p
        style={{
          ...pixelHeading,
          color: "#09FF00",
          fontSize: 40,
          lineHeight: 1.3,
          letterSpacing: "-0.005em",
          width: "100%",
        }}
      >
        {value}
      </p>
      <div className="w-full rounded-lg px-4 py-2" style={{ background: "#032201" }}>
        <p
          style={{
            ...pixelTerminal,
            color: "#21801E",
            fontSize: 15,
            lineHeight: 1.4,
            letterSpacing: "-0.01em",
          }}
        >
          {label}
        </p>
      </div>
    </div>
  );
}

function CaseImage({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-auto"
      style={{
        imageRendering: "pixelated" as const,
        display: "block",
        position: "relative",
        zIndex: 1,
      }}
    />
  );
}

function ImagePlaceholder({ label, aspect = "1232 / 825" }: { label: string; aspect?: string }) {
  return (
    <div
      className="w-full rounded-lg flex items-center justify-center relative z-[1]"
      style={{
        aspectRatio: aspect,
        background: "#1E1E1E",
        boxShadow: "inset -4px -4px 0 #084170, inset 4px 4px 0 #0E1B37",
      }}
    >
      <p
        style={{
          ...pixelTerminal,
          color: "#5b6b8a",
          fontSize: 14,
          letterSpacing: "-0.01em",
          textAlign: "center",
          padding: 16,
        }}
      >
        {label}
      </p>
    </div>
  );
}

function OtherProjectCard({ p }: { p: (typeof OTHER_PROJECTS)[number] }) {
  const inner = (
    <>
      <div
        className="w-full rounded-lg overflow-hidden"
        style={{ aspectRatio: "762 / 428" }}
      >
        <img
          src={p.img}
          alt={p.title}
          className="w-full h-full object-cover"
          style={{ imageRendering: "pixelated" as const }}
        />
      </div>
      <h3
        style={{
          ...pixelBody,
          color: "#320032",
          fontSize: 15,
          lineHeight: 1.4,
          letterSpacing: "-0.01em",
        }}
      >
        {p.title}
      </h3>
      <div
        className="flex flex-col gap-0.5"
        style={{
          ...pixelBody,
          color: "#320032",
          fontSize: 15,
          lineHeight: 1.4,
          letterSpacing: "-0.01em",
        }}
      >
        <p>{p.company}</p>
        <p>{p.location}</p>
        <p>{p.role}</p>
      </div>
    </>
  );
  const style = {
    background: p.gradient,
    boxShadow: "-2px -2px 0 0 #4C042C inset, 2px 2px 0 0 #FFFEF6 inset",
  } as const;
  const cls = "rounded-xl px-4 py-6 flex flex-col gap-4 min-w-[220px] flex-1 no-underline";
  return (
    <Link to="/case-study/$slug" params={{ slug: p.slug }} className={cls} style={style}>
      {inner}
    </Link>
  );
}

export default function UtiCaseStudy() {
  return (
    <main
      className="min-h-screen w-full flex flex-col items-center pt-8 pb-10 relative isolate"
      style={{ background: "linear-gradient(180deg, #0A0224 0%, #260A20 100%)" }}
    >
      <RetroStarfield />
      <RetroScrollProgress />

      {/* Header */}
      <header className="w-full max-w-[1440px] p-6">
        <div
          className="w-full rounded-xl p-6 flex flex-col gap-6 relative"
          style={{
            background:
              "linear-gradient(180deg, #F360A3 0%, #FF289E 76.44%, #8A00B1 100%)",
            boxShadow: "-3px -3px 0 0 #A70 inset, 3px 3px 0 0 #FFEF33 inset",
          }}
        >
          <div className="flex items-start justify-between gap-6 flex-wrap">
            <h1
              style={{
                ...pixelHeading,
                color: "#FFEC7F",
                textShadow: "2px 2px 0 #FF5900",
                fontSize: "clamp(28px, 4vw, 36px)",
                lineHeight: 1.3,
                letterSpacing: "-0.1em",
              }}
            >
              UTI Mutual Fund
            </h1>
            <Link
              to="/"
              className="retro-lightning"
              style={{
                ...pixelBody,
                color: "#fff",
                fontSize: 24,
                letterSpacing: "-0.02em",
              }}
            >
              ← Back
            </Link>
          </div>

          {/* Green terminal box */}
          <div
            className="w-full rounded-xl relative border-2 pt-4 px-6"
            style={{
              borderColor: "#09FF00",
              background: "linear-gradient(180deg, #004802 0%, #001F01 100%)",
              filter: "drop-shadow(2px 2px 0 #8F0045)",
              boxShadow: "inset 0 0 4px rgba(0,0,0,0.4)",
            }}
          >
            {/* Ticker */}
            <div
              className="w-full px-4 py-2 rounded-lg"
              style={{ background: "#032201" }}
            >
              <p
                style={{
                  ...pixelTerminal,
                  color: "#21801E",
                  fontSize: 15,
                  lineHeight: 1.4,
                  letterSpacing: "-0.01em",
                }}
              >
                Role: UX/UI Designer - Research, UI Design, Stakeholder
                Management, Prototyping · Duration: 1.2 Years · Tools: Figma
              </p>
            </div>
            {/* Tagline */}
            <div className="w-full py-4">
              <p
                style={{
                  ...pixelBody,
                  color: "#3BFD00",
                  fontSize: 24,
                  lineHeight: 1.3,
                  letterSpacing: "-0.02em",
                  textShadow: "2px 2px 0 rgba(0,0,0,0.25)",
                }}
              >
                To renew the experience that a user has digitally UTI mutual
                funds, We created an app and a website from scratch with modern
                visuals, easy to navigate interface, and accessibility as a key
                factor in the formulation of the designs.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero + info rows */}
      <div className="w-full max-w-[1440px] flex flex-col gap-6 px-6 pb-6">
        <ImagePlaceholder label="Hero image — upload UTI hero" aspect="1232 / 659" />
        <InfoRow
          label="Key metrics:"
          body="Ticket size, New registrations, SIP creations, Positive feedback from users and testing"
        />
        <InfoRow
          label="The Challenge:"
          body="UTI Mutual Fund, India's oldest asset management company, required modernizing their vision and financial knowledge for the digital era. Moving away from legacy paper and person based interactions for investments to an all digital platform for the digital age."
        />
        <InfoRow
          label="Design Process:"
          body="This project envisioned a bold design style, that would help resonate with the newer age of customers, while keeping their old userbase content, and delighted."
        />

        {/* Process steps */}
        <div className="w-full flex flex-col md:flex-row gap-3">
          {PROCESS_STEPS.map((s) => (
            <ProcessCard key={s.n} step={s} />
          ))}
        </div>

        {/* Stats */}
        <div className="w-full flex flex-col md:flex-row gap-5 pt-2">
          {STATS.map((s) => (
            <StatCard key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </div>

      {/* Research setup */}
      <SectionTitle text="Research setup" />
      <div className="w-full max-w-[1440px] px-6">
        <ImagePlaceholder label="Research setup — upload image" aspect="1240 / 1081" />
      </div>

      {/* User research insights */}
      <SectionTitle text="User research insights" />
      <div className="w-full max-w-[1440px] px-6">
        <ImagePlaceholder label="User research insights — upload image" />
      </div>

      {/* Building Journeys */}
      <SectionTitle text="Building Journeys" />
      <div className="w-full max-w-[1440px] px-6">
        <ImagePlaceholder label="Building Journeys — upload image" />
      </div>

      {/* Visual Designs */}
      <SectionTitle text="Visual Designs" />
      <div className="w-full max-w-[1440px] px-6 flex flex-col gap-6">
        <ImagePlaceholder label="Visual Designs 1 — upload image" />
        <ImagePlaceholder label="Visual Designs 2 — upload image" />
      </div>

      {/* More case studies */}
      <div className="w-full max-w-[1440px] px-5 pt-10 flex flex-col gap-2.5">
        <div
          className="w-full flex items-center justify-center p-4 rounded-lg"
          style={{
            background:
              "linear-gradient(180deg, #FBFFF6 0%, #CFF594 50%, #AEEC48 100%)",
          }}
        >
          <h2
            style={{
              ...pixelHeading,
              color: "#320032",
              fontSize: 13,
              lineHeight: 1.3,
              letterSpacing: "-0.005em",
              textShadow: "1px 1px 0 #F29A9C",
              width: "100%",
            }}
          >
            More case studies
          </h2>
        </div>
        <div className="w-full py-5 flex flex-col md:flex-row gap-6 items-start">
          {OTHER_PROJECTS.map((p) => (
            <OtherProjectCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </main>
  );
}
