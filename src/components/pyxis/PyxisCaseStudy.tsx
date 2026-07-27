import React from "react";
import { Link } from "@tanstack/react-router";
import { RetroScrollProgress } from "@/components/retro/RetroScrollProgress";
import RetroStarfield from "@/components/retro/RetroStarfield";
import heroAsset from "@/assets/pyxis-hero.png.asset.json";
import designSystemAsset from "@/assets/pyxis-building-the-design-system.png.asset.json";
import colorTypeAsset from "@/assets/pyxis-color-typography-iconography.png.asset.json";
import userAppAsset from "@/assets/pyxis-user-app.png.asset.json";
import bookingJourneyAsset from "@/assets/pyxis-booking-journey.png.asset.json";
import captainDashboardAsset from "@/assets/pyxis-captain-dashboard.png.asset.json";

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
      "GeneLink - An app to connect people with their long lost relatives using state of the art DNA mapping",
    company: "Confidential",
    location: "India - 2024",
    role: "Role: UX/UI Designer (Personal Project)",
    gradient:
      "linear-gradient(180deg, #F35DA3 0%, #F35DA3 80%, #9804AF 100%)",
    img: "https://api.builder.io/api/v1/image/assets/TEMP/b982a6847c860f50d4ba512ddbc3c64beca4590a?width=718",
    slug: "genelink",
  },
  {
    title:
      "UTI Mutual Fund - A mutual fund solution for India's oldest AMC, reimaging legacy solutions",
    company: "UTI Mutual Fund",
    location: "India - 2021-2023",
    role: "Role: UX/UI Designer",
    gradient: "linear-gradient(180deg, #69DAEE 0%, #69DAEE 80%, #8A69EE 100%)",
    img: "https://api.builder.io/api/v1/image/assets/TEMP/507f3b9934b6e8a32adc0c0b3941cc887b0f6305?width=718",
  },
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

function GoalCard({ text }: { text: string }) {
  return (
    <div
      className="flex-1 flex items-center justify-center p-4 rounded-xl"
      style={{
        background: "#FA0",
        boxShadow: "-2px -2px 0 0 #4C042C inset, 2px 2px 0 0 #FFFEF6 inset",
      }}
    >
      <p
        style={{
          ...pixelHeading,
          color: "#320032",
          fontSize: 12,
          lineHeight: 1.3,
          letterSpacing: "-0.01em",
          textAlign: "center",
        }}
      >
        {text}
      </p>
    </div>
  );
}

function CaseImage({ src, alt, bg = "#FFFEF6" }: { src: string; alt: string; bg?: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-auto rounded-xl"
      style={{
        imageRendering: "pixelated" as const,
        display: "block",
        background: bg,
      }}
    />
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
  return p.slug ? (
    <Link to="/case-study/$slug" params={{ slug: p.slug }} className={cls} style={style}>
      {inner}
    </Link>
  ) : (
    <article className={cls} style={style}>
      {inner}
    </article>
  );
}

export default function PyxisCaseStudy() {
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
              Pyxis - Electra
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
              background:
                "linear-gradient(180deg, #004802 0%, #001F01 100%)",
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
                Management, Prototyping · Duration: 1.5 Years · Tools: Figma
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
                A full scale Maritime solution for fleet booking, vessel
                chartering, tracking and weather updates, along with the
                interface for captains to help navigate the waters of
                Singapore.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero + info rows */}
      <div className="w-full max-w-[1280px] flex flex-col gap-6 px-6 pb-6">
        <CaseImage src={heroAsset.url} alt="Pyxis Electra hero" />
        <InfoRow
          label="Overview"
          body="Pyxis - Electra was a maritime solution designed for Pyxis for a new fleet of electric vessels to be chartered, haul cargo and glide on the waters of Singapore."
        />
        <InfoRow
          label="The Challenge:"
          body="Our mission was to craft a digital experience, where users effortlessly book and monitor shipments and trips. Captains/fleet managers need to monitor vessel charging status, battery health, and emissions — but this data is often scattered or hard to interpret at a glance."
        />
        <InfoRow
          label="Intent:"
          body="Streamline Intelligible and Modern Design Trends, while ensuring a consistent design ecosystem."
        />
      </div>

      {/* Design goals */}
      <SectionTitle text="Design goals" />
      <div className="w-full max-w-[1440px] px-6 flex flex-col md:flex-row gap-3">
        <GoalCard text="Make critical vessel data easier to scan." />
        <GoalCard text="Tailor information to role and context." />
        <GoalCard text="Support trust through clarity, status visibility, and timely alerts." />
      </div>

      {/* Building the design system */}
      <div className="w-full max-w-[1440px] px-6 pt-6">
        <CaseImage src={designSystemAsset.url} alt="Building the design system" />
      </div>

      {/* Color, typography, iconography */}
      <div className="w-full max-w-[1440px] px-6 pt-6">
        <CaseImage src={colorTypeAsset.url} alt="Color, typography, iconography" />
      </div>

      {/* User app */}
      <div className="w-full max-w-[1440px] flex flex-col gap-6 items-center">
        <SectionTitle text="User app" />
        <div className="w-full px-6">
          <CaseImage src={userAppAsset.url} alt="User app screens" />
        </div>

        <SectionTitle text="Booking journey" />
        <div className="w-full px-6">
          <CaseImage src={bookingJourneyAsset.url} alt="Booking journey" />
        </div>

        <SectionTitle text="Captain dashboard" />
        <div className="w-full px-6">
          <CaseImage src={captainDashboardAsset.url} alt="Captain dashboard" />
        </div>
      </div>

      {/* More case studies */}
      <div className="w-full max-w-[1440px] px-5 pt-5 flex flex-col gap-2.5">
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
