import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import RetroStarfield from "@/components/retro/RetroStarfield";
import publicisLogo from "@/assets/logos/publicis.svg.asset.json";
import niveusLogo from "@/assets/logos/niveus.png.asset.json";
import robosoftLogo from "@/assets/logos/robosoft.png.asset.json";
import narlaLogo from "@/assets/logos/narla.png.asset.json";
import jeelitLogo from "@/assets/logos/jeelit.png.asset.json";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Joel Kaleb Dias — Product (UX/UI) Designer" },
      {
        name: "description",
        content:
          "Research-driven UX and aesthetic interfaces for SaaS, startups, and enterprises. Portfolio of Joel Kaleb Dias.",
      },
      { property: "og:title", content: "Joel Kaleb Dias — Product (UX/UI) Designer" },
      {
        property: "og:description",
        content:
          "Research-driven UX and aesthetic interfaces for SaaS, startups, and enterprises.",
      },
    ],
    links: [],
  }),
  component: Index,
});

const pixelHeading = {
  fontFamily: "'Ac437 IBM CGA', 'Press Start 2P', monospace",
} as const;
const pixelBody = {
  fontFamily: "'Ac437 ATI 8x16', 'AcPlus ToshibaSat 8x16', 'VT323', monospace",
} as const;
const pixelTerminal = {
  fontFamily: "'AcPlus ToshibaSat 8x16', 'Ac437 ATI 8x16', 'VT323', monospace",
} as const;

const scanlines =
  "repeating-linear-gradient(0deg, rgba(0,0,0,0.25) 0px, rgba(0,0,0,0.25) 1px, transparent 1px, transparent 3px)";

// Clean pixel-art retro arrow (↗ replacement)
function RetroArrow({ color = "#320032" }: { color?: string }) {
  // 9x9 pixel arrow pointing up-right; rendered as crisp SVG rects
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 9 9"
      shapeRendering="crispEdges"
      style={{ imageRendering: "pixelated", flexShrink: 0 }}
      aria-hidden
    >
      {/* arrow head */}
      <rect x="4" y="1" width="4" height="1" fill={color} />
      <rect x="7" y="1" width="1" height="4" fill={color} />
      {/* diagonal shaft */}
      <rect x="6" y="2" width="1" height="1" fill={color} />
      <rect x="5" y="3" width="1" height="1" fill={color} />
      <rect x="4" y="4" width="1" height="1" fill={color} />
      <rect x="3" y="5" width="1" height="1" fill={color} />
      <rect x="2" y="6" width="1" height="1" fill={color} />
      <rect x="1" y="7" width="1" height="1" fill={color} />
    </svg>
  );
}

type Linkout = { label: string; href: string };

function LinkoutRow({
  label,
  href,
  bg,
  arrowColor = "#320032",
}: Linkout & { bg: string; arrowColor?: string }) {
  return (
    <a
      href={href}
      className="flex items-center justify-between px-4 py-3 rounded-lg transition-transform hover:-translate-y-0.5"
      style={{ background: bg }}
    >
      <span
        style={{ ...pixelHeading, color: "#320032", textShadow: "1px 1px 0 #D1747D", fontSize: 13 }}
      >
        {label}
      </span>
      <RetroArrow color={arrowColor} />
    </a>
  );
}

type Project = {
  title: string;
  company: string;
  location: string;
  role: string;
  gradient: string;
  img: string;
  slug?: string;
  externalSite?: boolean;
  externalUrl?: string;

const PROJECTS: Project[] = [
  {
    title:
      "Lumen - Social media app to rethink social platforms around transparency and connection",
    company: "Master Thesis",
    location: "Germany - 2026",
    role: "Role: Research, UX/UI Designer",
    gradient: "linear-gradient(180deg, #FF6B5C 0%, #FD7466 80%, #BC2729 100%)",
    img: "https://api.builder.io/api/v1/image/assets/TEMP/a8321c5713c1220171c431e099eb48ae8a68b4dc?width=718",
  },
  {
    title:
      "Manifesto - For more human social platforms, interaction patterns and principles",
    company: "Master Thesis",
    location: "Germany - 2026",
    role: "Role: Research, UX/UI Designer",
    gradient: "linear-gradient(180deg, #18074D 0%, #AE64EF 80%, #FE47DC 100%)",
    img: "https://api.builder.io/api/v1/image/assets/TEMP/61b151e5aec4832a00ff319a93a592868c3117f7?width=718",
    externalSite: true,
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
      "LoL.ai - An AI first, AI driven analytics and trainer to help players skill up their LoL gameplay",
    company: "League of Legends (Unofficial, Fan Made)",
    location: "Germany - 2026",
    role: "Role: UX/UI Designer (Personal Project)",
    gradient: "linear-gradient(180deg, #BAEB76 0%, #BAEB76 80%, #51D830 100%)",
    img: "https://api.builder.io/api/v1/image/assets/TEMP/d17070ff09152bc08826d04dfc8215337fa84651?width=718",
    slug: "lol-ai",
  },
  {
    title:
      "Electra - A digital ecosystem for booking ships and for captains to effectively view ship status",
    company: "Pyxis",
    location: "Singapore - 2023 - 2025",
    role: "Role: Design Team Lead",
    gradient: "linear-gradient(180deg, #F0D642 0%, #F0D642 80%, #F08A42 100%)",
    img: "https://api.builder.io/api/v1/image/assets/TEMP/77f2c90dac4d95f68256e2b5f2aa4400bb85dd67?width=718",
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


const RECOMMENDATIONS = [
  {
    quote:
      "/. \u201CHis ability to conduct thorough user research and usability testing has been instrumental in creating designs that resonate well with users.\u201D",
    author: "Kshitij Ratti, Senior Business Analyst",
  },
  {
    quote: "\u201CTakes responsibility and makes sure the expected outcome is delivered.\u201D",
    author: "Abhishek Shetty, Senior Business Analyst",
  },
  {
    quote:
      "\u201CExcels in translating complex requirements into elegant designs, delivering high-quality work on time and within budget.\u201D",
    author: "Vidya Shetty, Project Delivery Leader ./",
  },
];

type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
  clients?: string;
  /** Outer card gradient */
  gradient: string;
  /** Inner title-header gradient (the strip behind the role name) */
  headerGradient: string;
  logo?: { src: string; width: number; height: number; alt: string; cropLeft?: number };
};

const EXPERIENCES: Experience[] = [
  {
    role: "Werkstudent (Product Design)",
    company: "Publicis Media GmbH",
    period: "March 2025 – Present",
    location: "Berlin, Germany",
    gradient: "linear-gradient(180deg, #D8B4FE 0%, #D8B4FE 80%, #7E22CE 100%)",
    headerGradient: "linear-gradient(180deg, #FBFFF6 0%, #CFF594 50%, #AEEC48 100%)",
    logo: { src: publicisLogo.url, width: 28, height: 34, alt: "Publicis Groupe" },
    bullets: [
      "Worked as a part time working student, while pursuing my masters in design.",
      "Supported end-to-end journey mapping for media advertisement offers and planning processes.",
      "Conducted user interviews to improve user journey frameworks.",
      "Helped develop a cohesive design system for the DACH region.",
      "Created digitized solutions for legacy systems including Andvari, Tableau, Cognos, and Excel.",
      "Designed branding materials for internal initiatives during a master's program in design.",
      "Contributed to a design solution expected to benefit more than 271 users, with potential savings at scale of millions.",
    ],
  },
  {
    role: "UI/UX Designer",
    company: "Niveus Solutions Private Limited",
    period: "November 2022 - October 2024",
    location: "Udupi, India",
    gradient: "linear-gradient(180deg, #BAEB76 0%, #BAEB76 80%, #51D830 100%)",
    headerGradient: "linear-gradient(180deg, #FBFFF6 0%, #E9D5FF 50%, #D8B4FE 100%)",
    logo: { src: niveusLogo.url, width: 121, height: 24, alt: "Niveus Solutions" },
    bullets: [
      "Delivered design solutions for SaaS products serving domestic and international clients.",
      "Collaborated with stakeholders to align product outcomes with business goals and user needs.",
      "Managed a team of three designers and supported junior team members through mentoring.",
      "Implemented strategies that improved ROI from design efforts and streamlined workflows.",
      "Worked across multiple domains and international accounts to strengthen digital presence.",
      "Revised internal procedures to optimize design processes and improve outcomes.",
    ],
    clients:
      "Clients include: Mahindra & Mahindra (India), Mahindra Finance (India), Tune Protect (Singapore), Pyxis (Singapore), Axis My India (India), DTDC (India), Watania (UAE).",
  },
  {
    role: "Associate UI Designer",
    company: "Robosoft Technologies",
    period: "June 2021 - November 2022",
    location: "Udupi, India",
    gradient: "linear-gradient(180deg, #F0D642 0%, #F0D642 80%, #F08A42 100%)",
    headerGradient: "linear-gradient(180deg, #FBFFF6 0%, #B5EAF4 50%, #69DAEE 100%)",
    logo: { src: robosoftLogo.url, width: 150, height: 24, alt: "Robosoft Technologies", cropLeft: 6 },
    bullets: [
      "Conducted user interviews and developed information architecture and app maps.",
      "Designed wireframes, prototypes, UI elements, and prepared development handoffs.",
      "Delivered screen designs and UX presentations informed by user research insights.",
      "Collaborated with clients and stakeholders across aviation and finance projects.",
      "Led client meetings to finalize design approvals and maintain project timelines.",
      "Worked with developers after the design phase to preserve design integrity in implementation.",
    ],
    clients:
      "Clients include: Godrej Properties (India), UTI Mutual Fund (India), Akasa Air (India).",
  },
  {
    role: "Designer (Freelance)",
    company: "Narla",
    period: "January 2021 - June 2021",
    location: "Goa, India",
    gradient: "linear-gradient(180deg, #69DAEE 0%, #69DAEE 80%, #8A69EE 100%)",
    headerGradient: "linear-gradient(180deg, #FBFFF6 0%, #F5ED94 50%, #ECD948 100%)",
    logo: { src: narlaLogo.url, width: 80, height: 32, alt: "Narla" },
    bullets: [],
  },
  {
    role: "UI/UX Design Intern",
    company: "Jee Lit Weighing Solutions",
    period: "January 2021 - June 2021",
    location: "Udupi, India",
    gradient: "linear-gradient(180deg, #D8B4FE 0%, #D8B4FE 80%, #7E22CE 100%)",
    headerGradient: "linear-gradient(180deg, #FBFFF6 0%, #CFF594 50%, #AEEC48 100%)",
    logo: { src: jeelitLogo.url, width: 32, height: 32, alt: "Jee Lit Weighing Solutions" },
    bullets: [],
  },
];

const EDUCATION = [
  {
    degree: "Masters of Arts - Integrated Design",
    spec: "(Spcl. - Sustainable social media platforms (UX))",
    school: "Hochschule Anhalt University of Applied Sciences, Dessau, Germany",
  },
  {
    degree: "Bachelor of Science - Animation",
    spec: "(Spcl. - Graphic Design)",
    school: "Manipal Institute of Communication, Manipal, India",
  },
];

const SKILL_GROUPS = [
  {
    title: "UX/UI",
    items: [
      "AI prototyping and vibe coding",
      "Interface and Interaction design",
      "User research, interviews, testing, journey mapping",
      "Design systems",
    ],
  },
  {
    title: "Communication",
    items: [
      "Cross-Functional Team enabler",
      "Client Relationship Management",
      "Stakeholder Communication",
      "Agile workflow",
      "Design workshops",
    ],
  },
  {
    title: "Visual Design",
    items: [
      "Logo design & branding",
      "Illustrations",
      "Social media designs",
      "Installation design",
      "3D design",
    ],
  },
];


type TabKey = "case" | "exp";

function SkillGroupCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div
      className="rounded-lg p-3 flex flex-col gap-2"
      style={{
        background: "#9FF2C1",
        boxShadow: "-2px -2px 0 0 #1F6A3E inset, 2px 2px 0 0 #FFFEF6 inset",
      }}
    >
      <div className="flex items-center justify-between">
        <h3
          style={{
            ...pixelHeading,
            color: "#320032",
            textShadow: "1px 1px 0 #6FCB94",
            fontSize: 13,
          }}
        >
          {title}
        </h3>
        <RetroArrow color="#320032" />
      </div>
      <ul className="flex flex-col gap-1">
        {items.map((it) => (
          <li
            key={it}
            style={{
              ...pixelBody,
              color: "#173B23",
              fontSize: 14,
              lineHeight: 1.35,
            }}
          >
            &gt; {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

function TitlePanel({ exp: e }: { exp: Experience }) {
  return (
    <div
      className="flex flex-col items-stretch rounded-lg overflow-hidden"
      style={{
        flex: "1 1 220px",
        minWidth: 220,
        paddingBottom: 16,
        background: "#FDEBE2",
        boxShadow: "2px 2px 0 0 #D33869, -2px -2px 0 0 #FF94C2",
      }}
    >
      <div
        className="w-full flex items-center justify-center"
        style={{ padding: 16, background: e.headerGradient }}
      >
        <h3
          style={{
            ...pixelHeading,
            color: "#320032",
            textShadow: "1px 1px 0 #F29A9C",
            fontSize: 13,
            lineHeight: 1.3,
            letterSpacing: "-0.065px",
            width: "100%",
          }}
        >
          {e.role}
        </h3>
      </div>
      <div
        className="w-full flex flex-col items-start"
        style={{ padding: "0 16px", gap: 2 }}
      >
        {e.logo && (
          <div className="flex items-center" style={{ height: 52, overflow: "hidden" }}>
            <img
              src={e.logo.src}
              alt={e.logo.alt}
              width={e.logo.width}
              height={e.logo.height}
              style={{
                width: e.logo.width,
                height: e.logo.height,
                objectFit: "contain",
                marginLeft: e.logo.cropLeft ? -e.logo.cropLeft : undefined,
              }}
              loading="lazy"
            />
          </div>
        )}
        {[e.company, e.period, e.location].map((line) => (
          <div
            key={line}
            style={{
              ...pixelBody,
              color: "#320032",
              fontSize: 15,
              lineHeight: 1.35,
              letterSpacing: "-0.15px",
              alignSelf: "stretch",
            }}
          >
            {line}
          </div>
        ))}
      </div>
    </div>
  );
}

function DescriptionPanel({ text }: { text: string }) {
  return (
    <div
      className="flex items-center"
      style={{
        flex: "1 1 320px",
        minWidth: 260,
        padding: 16,
        borderRadius: 8,
        background: "#FDEBE2",
        boxShadow: "2px 2px 0 0 #D33869, -2px -2px 0 0 #FF94C2",
      }}
    >
      <p
        style={{
          ...pixelBody,
          color: "#320032",
          fontSize: 15,
          lineHeight: 1.35,
          letterSpacing: "-0.15px",
          whiteSpace: "pre-line",
          margin: 0,
        }}
      >
        {text || "—"}
      </p>
    </div>
  );
}

function Index() {
  const [tab, setTab] = useState<TabKey>("case");

  return (
    <main
      className="min-h-screen w-full px-4 sm:px-6 lg:px-8 py-8 flex justify-center relative isolate"
      style={{ background: "linear-gradient(180deg, #0A0224 0%, #260A20 100%)" }}
    >
      <RetroStarfield />
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
          <div>
            <h1
              style={{
                ...pixelHeading,
                color: "#FFEC7F",
                textShadow: "2px 2px 0 #FF5900",
                fontSize: "clamp(28px, 4vw, 36px)",
                lineHeight: 1.3,
                letterSpacing: "-0.04em",
              }}
            >
              Joel Kaleb Dias
            </h1>
            <p
              style={{
                ...pixelBody,
                color: "#fff",
                fontSize: 24,
                lineHeight: 1.3,
                marginTop: 4,
              }}
            >
              Product (UX/UI) Designer
            </p>
          </div>
          <nav className="flex items-center gap-4">
            <a
              href="#work"
              className="retro-lightning"
              style={{
                ...pixelBody,
                color: "#fff",
                fontSize: 24,
              }}
            >
              Work
            </a>
            <Link
              to="/about"
              className="retro-lightning"
              style={{
                ...pixelBody,
                color: "#fff",
                fontSize: 24,
                textDecoration: "none",
              }}
            >
              About
            </Link>
          </nav>
        </header>

        {/* Terminal ticker */}
        <section
          className="rounded-xl p-4 sm:p-5 relative overflow-hidden"
          style={{
            border: "2px solid #008000",
            background: `${scanlines}, linear-gradient(180deg, #004802 0%, #001F01 100%)`,
            boxShadow:
              "0 0 24px 0 rgba(0,255,80,0.08) inset, 0 0 4px 0 rgba(0,0,0,0.6) inset, 2px 2px 0 0 #8F0045",
          }}
        >
          <div
            className="rounded-md px-3 py-2 flex items-center gap-2"
            style={{ background: "#032201", border: "1px solid #0a3a08" }}
          >
            <span aria-hidden style={{ ...pixelTerminal, color: "#3BFD00", fontSize: 14 }}>
              C:\&gt;
            </span>
            <p
              style={{
                ...pixelTerminal,
                color: "#21801E",
                fontSize: 14,
                lineHeight: 1.3,
                margin: 0,
              }}
            >
              status --now
            </p>
          </div>

          <p
            style={{
              ...pixelTerminal,
              color: "#3BFD00",
              textShadow: "0 0 6px rgba(59,253,0,0.35)",
              fontSize: "clamp(15px, 2.2vw, 20px)",
              lineHeight: 1.5,
              marginTop: 14,
            }}
          >
            Product (UX/UI) Designer ·&nbsp;Currently: Werkstudent (Product Design) @ Publicis Media · Master&apos;s thesis on algorithmic transparency &gt; Open to full-time roles from July 2026
          </p>

          <p
            style={{
              ...pixelTerminal,
              color: "#BFFFB0",
              textShadow: "0 0 6px rgba(59,253,0,0.25)",
              fontSize: "clamp(16px, 2.4vw, 22px)",
              lineHeight: 1.5,
              marginTop: 14,
            }}
          >
            For more than half a decade I have been creating research-driven
            experiences and high value interfaces that celebrate inclusivity and
            accessibility — for SaaS, startups, and enterprises that solve real
            problems.
            <span
              aria-hidden
              className="inline-block ml-1 align-baseline"
              style={{
                width: "0.55em",
                height: "1em",
                background: "#3BFD00",
                animation: "crt-blink 1s steps(1) infinite",
                verticalAlign: "-0.12em",
              }}
            />
          </p>
        </section>

        {/* Content */}
        <section className="flex flex-col lg:flex-row gap-5 pt-2">
          {/* Sidebar */}
          <aside className="flex flex-col gap-5 w-full lg:max-w-[368px]">
            {/* Contact (yellow) — always visible */}
            <div
              className="rounded-xl p-4"
              style={{
                background: "#FA0",
                boxShadow: "-2px -2px 0 0 #4C042C inset, 2px 2px 0 0 #FFFEF6 inset",
              }}
            >
              <p
                style={{ ...pixelBody, color: "#320032", fontSize: 16, lineHeight: 1.4 }}
                className="pb-5"
              >
                Think I can be a good addition to your team? Get in touch with me!
              </p>
              <div className="flex flex-col gap-3">
                <LinkoutRow label="joelkalebdias@gmail.com" href="mailto:joelkalebdias@gmail.com" bg="#FFD581" />
                <LinkoutRow label="+49 15510916795" href="tel:+4915510916795" bg="#FFD581" />
                <LinkoutRow label="Linkedin" href="#" bg="#FFD581" />
                <LinkoutRow label="Behance" href="#" bg="#FFD581" />
                <LinkoutRow label="CV / Resume" href="#" bg="#FFD581" />
              </div>
            </div>

            {/* Green box — swaps based on tab */}
            {tab === "case" ? (
              <div
                className="rounded-xl p-4"
                style={{
                  background: "#3BC976",
                  boxShadow: "-2px -2px 0 0 #4C042C inset, 2px 2px 0 0 #FFFEF6 inset",
                }}
              >
                <p
                  style={{ ...pixelBody, color: "#320032", fontSize: 16, lineHeight: 1.4 }}
                  className="pb-5"
                >
                  Hey those are just my case studies, There are lots of more works that I
                  have not built comprehensive studies for, You can find them here!
                </p>
                <LinkoutRow label="All my other works" href="#" bg="#9FF2C1" />
              </div>
            ) : (
              <div
                className="rounded-xl p-4 flex flex-col gap-3"
                style={{
                  background: "#3BC976",
                  boxShadow: "-2px -2px 0 0 #4C042C inset, 2px 2px 0 0 #FFFEF6 inset",
                }}
              >
                <p
                  style={{ ...pixelBody, color: "#320032", fontSize: 16, lineHeight: 1.4 }}
                  className="pb-2"
                >
                  What I can confidently say I am decent at:
                </p>
                {SKILL_GROUPS.map((g) => (
                  <SkillGroupCard key={g.title} title={g.title} items={g.items} />
                ))}
              </div>
            )}
          </aside>

          {/* Main right column */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Tabs */}
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setTab("case")}
                className="px-4 py-2 rounded-lg cursor-pointer"
                style={{
                  border: "1px solid #4F1D5E",
                  background:
                    tab === "case"
                      ? "linear-gradient(180deg, #FFE324 0%, #FF06B3 100%)"
                      : "#000",
                  boxShadow: "0 4px 0 0 #4F1D5E",
                  ...pixelHeading,
                  color: tab === "case" ? "#000" : "#fff",
                  textShadow: tab === "case" ? "1px 1px 0 #BC007E" : "none",
                  fontSize: 12,
                }}
              >
                Case studies
              </button>
              <button
                type="button"
                onClick={() => setTab("exp")}
                className="px-4 py-2 rounded-lg cursor-pointer"
                style={{
                  border: "1px solid #4F1D5E",
                  background:
                    tab === "exp"
                      ? "linear-gradient(180deg, #FFE324 0%, #FF06B3 100%)"
                      : "#000",
                  boxShadow: "0 4px 0 0 #4F1D5E",
                  ...pixelHeading,
                  color: tab === "exp" ? "#000" : "#fff",
                  textShadow: tab === "exp" ? "1px 1px 0 #BC007E" : "none",
                  fontSize: 12,
                }}
              >
                Exp. & Education
              </button>
            </div>

            {tab === "case" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {PROJECTS.map((p) => {
                  const inner = (
                    <>
                      <div className="relative">
                        <img
                          src={p.img}
                          alt=""
                          className="w-full rounded-lg object-cover block"
                          style={{ aspectRatio: "308/173" }}
                          loading="lazy"
                        />
                        {p.externalSite && (
                          <span
                            className="absolute"
                            style={{
                              top: 8,
                              right: 8,
                              padding: "4px 10px",
                              borderRadius: 9999,
                              background: "#FFFEF6",
                              color: "#320032",
                              border: "1px solid #4C042C",
                              boxShadow: "1px 1px 0 0 #4C042C",
                              ...pixelHeading,
                              fontSize: 10,
                              lineHeight: 1,
                            }}
                          >
                            External site
                          </span>
                        )}
                      </div>
                      <p
                        style={{
                          ...pixelBody,
                          color: "#320032",
                          fontSize: 18,
                          lineHeight: 1.4,
                        }}
                      >
                        {p.title}
                      </p>

                      <div
                        style={{ ...pixelBody, color: "#320032", fontSize: 16, lineHeight: 1.4 }}
                      >
                        <div>{p.company}</div>
                        <div>{p.location}</div>
                        <div>{p.role}</div>
                      </div>
                      {/* pixel sparks */}
                      <span className="pix tl" aria-hidden />
                      <span className="pix tr" aria-hidden />
                      <span className="pix bl" aria-hidden />
                      <span className="pix br" aria-hidden />
                      <span className="pix tl2" aria-hidden />
                      <span className="pix tr2" aria-hidden />
                      <span className="pix bl2" aria-hidden />
                      <span className="pix br2" aria-hidden />
                    </>
                  );
                  const sharedStyle = {
                    background: p.gradient,
                    boxShadow: "-2px -2px 0 0 #4C042C inset, 2px 2px 0 0 #FFFEF6 inset",
                  } as const;
                  const className =
                    "retro-card rounded-xl p-4 flex flex-col gap-4 no-underline";
                  return p.slug ? (
                    <Link
                      key={p.title}
                      to="/case-study/$slug"
                      params={{ slug: p.slug }}
                      className={className}
                      style={sharedStyle}
                    >
                      {inner}
                    </Link>
                  ) : (
                    <article key={p.title} className={className} style={sharedStyle}>
                      {inner}
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                {EXPERIENCES.filter((e) => e.bullets.length > 0).map((e) => (
                  <article
                    key={e.role + e.company}
                    className="rounded-xl flex flex-wrap items-stretch gap-4"
                    style={{
                      padding: "24px 16px",
                      background: e.gradient,
                      boxShadow:
                        "-2px -2px 0 0 #4C042C inset, 2px 2px 0 0 #FFFEF6 inset",
                    }}
                  >
                    <TitlePanel exp={e} />
                    <DescriptionPanel
                      text={[...e.bullets, e.clients].filter(Boolean).join(" ")}
                    />
                  </article>
                ))}

                {/* Short cards (title-only) — paired 2-up */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {EXPERIENCES.filter((e) => e.bullets.length === 0).map((e) => (
                    <article
                      key={e.role + e.company}
                      className="rounded-xl flex"
                      style={{
                        padding: "24px 16px",
                        background: e.gradient,
                        boxShadow:
                          "-2px -2px 0 0 #4C042C inset, 2px 2px 0 0 #FFFEF6 inset",
                      }}
                    >
                      <TitlePanel exp={e} />
                    </article>
                  ))}
                </div>

                {/* Education — match job-card styling, gradient title header */}
                <article
                  className="rounded-xl flex flex-wrap gap-4"
                  style={{
                    padding: "24px 16px",
                    background:
                      "linear-gradient(180deg, #D8B4FE 0%, #D8B4FE 80%, #7E22CE 100%)",
                    boxShadow:
                      "-2px -2px 0 0 #4C042C inset, 2px 2px 0 0 #FFFEF6 inset",
                  }}
                >
                  <div
                    className="w-full rounded-lg overflow-hidden"
                    style={{
                      background: "#FDEBE2",
                      boxShadow:
                        "2px 2px 0 0 #D33869, -2px -2px 0 0 #FF94C2",
                    }}
                  >
                    <div
                      style={{
                        padding: 16,
                        background:
                          "linear-gradient(180deg, #FBFFF6 0%, #CFF594 50%, #AEEC48 100%)",
                      }}
                    >
                      <h3
                        style={{
                          ...pixelHeading,
                          color: "#320032",
                          textShadow: "1px 1px 0 #F29A9C",
                          fontSize: 13,
                          lineHeight: 1.3,
                          letterSpacing: "-0.065px",
                        }}
                      >
                        Education
                      </h3>
                    </div>
                    <ul
                      className="grid grid-cols-1 md:grid-cols-2 gap-6"
                      style={{ padding: 16 }}
                    >
                      {EDUCATION.map((ed) => (
                        <li key={ed.degree} className="flex flex-col gap-1">
                          <p
                            style={{
                              ...pixelHeading,
                              color: "#320032",
                              textShadow: "1px 1px 0 #F29A9C",
                              fontSize: 13,
                              lineHeight: 1.3,
                              letterSpacing: "-0.065px",
                            }}
                          >
                            {ed.degree}
                          </p>
                          <p
                            style={{
                              ...pixelBody,
                              color: "#4C042C",
                              fontSize: 15,
                              lineHeight: 1.35,
                              letterSpacing: "-0.15px",
                            }}
                          >
                            {ed.spec}
                          </p>
                          <p
                            style={{
                              ...pixelBody,
                              color: "#320032",
                              fontSize: 15,
                              lineHeight: 1.35,
                              letterSpacing: "-0.15px",
                              marginTop: 8,
                            }}
                          >
                            {ed.school}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </div>
            )}
          </div>
        </section>


        {/* Recommendations */}
        <section
          className="rounded-xl p-4 sm:p-5 relative overflow-hidden"
          style={{
            border: "2px solid #008000",
            background: `${scanlines}, linear-gradient(180deg, #004802 0%, #001F01 100%)`,
            boxShadow:
              "0 0 24px 0 rgba(0,255,80,0.08) inset, 0 0 4px 0 rgba(0,0,0,0.6) inset, 2px 2px 0 0 #8F0045",
          }}
        >
          <div
            className="rounded-md px-3 py-2 flex items-center gap-2"
            style={{ background: "#032201", border: "1px solid #0a3a08" }}
          >
            <span aria-hidden style={{ ...pixelTerminal, color: "#3BFD00", fontSize: 14 }}>
              C:\&gt;
            </span>
            <p style={{ ...pixelTerminal, color: "#21801E", fontSize: 14, margin: 0 }}>
              list recommendations.txt
            </p>
          </div>

          <ul className="flex flex-col gap-7 mt-5">
            {RECOMMENDATIONS.map((r) => (
              <li key={r.author} className="flex flex-col gap-2">
                <blockquote
                  style={{
                    ...pixelTerminal,
                    color: "#3BFD00",
                    textShadow: "0 0 6px rgba(59,253,0,0.3)",
                    fontSize: "clamp(15px, 2.2vw, 20px)",
                    lineHeight: 1.5,
                    margin: 0,
                    paddingLeft: "1.1em",
                    textIndent: "-1.1em",
                  }}
                >
                  <span aria-hidden style={{ color: "#21801E", marginRight: "0.4em" }}>
                    &gt;
                  </span>
                  {r.quote}
                </blockquote>
                <cite
                  style={{
                    ...pixelTerminal,
                    fontStyle: "normal",
                    color: "#9BE08C",
                    fontSize: "clamp(13px, 1.8vw, 16px)",
                    paddingLeft: "1.1em",
                  }}
                >
                  — {r.author}
                </cite>
              </li>
            ))}
          </ul>
        </section>

        {/* Footer */}
        <footer
          className="rounded-xl p-4 text-center"
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
