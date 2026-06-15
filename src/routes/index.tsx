import { createFileRoute } from "@tanstack/react-router";

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

// Scanline overlay used inside green CRT panels
const scanlines =
  "repeating-linear-gradient(0deg, rgba(0,0,0,0.25) 0px, rgba(0,0,0,0.25) 1px, transparent 1px, transparent 3px)";

type Linkout = { label: string; href: string };

function LinkoutRow({ label, href, bg }: Linkout & { bg: string }) {
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
      <span style={{ color: "#fff", fontWeight: 600 }}>↗</span>
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
};

const PROJECTS: Project[] = [
  {
    title:
      "GeneLink - An app to connect people with their long lost relatives using state of the art DNA mapping",
    company: "Lollypop Design",
    location: "India - 2024",
    role: "Role: UX/UI Designer (Personal Project)",
    gradient: "linear-gradient(180deg, #F35DA3 0%, #F35DA3 80%, #9804AF 100%)",
    img: "https://api.builder.io/api/v1/image/assets/TEMP/b982a6847c860f50d4ba512ddbc3c64beca4590a?width=718",
  },
  {
    title:
      "LoL.ai - An AI first, AI driven analytics and trainer to help players skill up their League of Legends gameplay",
    company: "League of Legends (Unofficial, Fan Made)",
    location: "Germany - 2026",
    role: "Role: UX/UI Designer (Personal Project)",
    gradient: "linear-gradient(180deg, #BAEB76 0%, #BAEB76 80%, #51D830 100%)",
    img: "https://api.builder.io/api/v1/image/assets/TEMP/d17070ff09152bc08826d04dfc8215337fa84651?width=718",
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

function Index() {
  return (
    <main
      className="min-h-screen w-full px-4 sm:px-6 lg:px-8 py-8 flex justify-center"
      style={{ background: "linear-gradient(180deg, #0A0224 0%, #260A20 100%)" }}
    >
      <div className="w-full max-w-[1280px] flex flex-col gap-6">
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
                fontSize: "clamp(22px, 4vw, 36px)",
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
            {["Work", "About"].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                style={{
                  ...pixelBody,
                  color: "#fff",
                  textShadow: "1px 1px 0 #FF5900",
                  fontSize: 24,
                }}
              >
                {label}
              </a>
            ))}
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
            <span
              aria-hidden
              style={{ ...pixelTerminal, color: "#3BFD00", fontSize: 14 }}
            >
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
            Werkstudent @ Publicis Media · Master&apos;s thesis on algorithmic
            transparency · Open to full-time roles from July 2026 · Based in Germany.
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
            I design software people actually want to use. Research-driven UX and
            aesthetic interfaces that celebrate inclusivity and accessibility — for
            SaaS, startups, and enterprises that solve real problems.
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
                Hey those are just my case studies, There are lots of more works that I have
                not built comprehensive studies for, You can find them here!
              </p>
              <LinkoutRow label="All my other works" href="#" bg="#9FF2C1" />
            </div>
          </aside>

          {/* CV / Case studies */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Tabs */}
            <div className="flex gap-2">
              <button
                type="button"
                className="px-4 py-2 rounded-lg"
                style={{
                  border: "1px solid #4F1D5E",
                  background: "linear-gradient(180deg, #FFE324 0%, #FF06B3 100%)",
                  boxShadow: "0 4px 0 0 #4F1D5E",
                  ...pixelHeading,
                  color: "#000",
                  textShadow: "1px 1px 0 #BC007E",
                  fontSize: 12,
                }}
              >
                Case studies
              </button>
              <button
                type="button"
                className="px-4 py-2 rounded-lg"
                style={{
                  border: "1px solid #4F1D5E",
                  background: "#000",
                  boxShadow: "0 4px 0 0 #4F1D5E",
                  ...pixelHeading,
                  color: "#fff",
                  fontSize: 12,
                }}
              >
                Exp. & Education
              </button>
            </div>

            {/* Project grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PROJECTS.map((p) => (
                <article
                  key={p.title}
                  className="rounded-xl p-4 flex flex-col gap-4"
                  style={{
                    background: p.gradient,
                    boxShadow: "-2px -2px 0 0 #4C042C inset, 2px 2px 0 0 #FFFEF6 inset",
                  }}
                >
                  <img
                    src={p.img}
                    alt=""
                    className="w-full rounded-lg object-cover"
                    style={{ aspectRatio: "308/173" }}
                    loading="lazy"
                  />
                  <p
                    style={{
                      ...pixelBody,
                      color: "#320032",
                      fontSize: 16,
                      lineHeight: 1.4,
                    }}
                  >
                    {p.title}
                  </p>
                  <div style={{ ...pixelBody, color: "#320032", fontSize: 16, lineHeight: 1.4 }}>
                    <div>{p.company}</div>
                    <div>{p.location}</div>
                    <div>{p.role}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Recommendations */}
        <section
          className="rounded-xl p-4"
          style={{
            border: "2px solid #008000",
            background:
              "url('https://api.builder.io/api/v1/image/assets/TEMP/9bbb47a675199d50144097675d55c53916eff659?width=1624') 50%/cover no-repeat, linear-gradient(180deg, #004802 0%, #001F01 100%)",
            backgroundBlendMode: "multiply, normal",
            boxShadow: "0 0 4px 0 rgba(0,0,0,0.4) inset, 2px 2px 0 0 #8F0045",
          }}
        >
          <div className="rounded-lg px-4 py-2" style={{ background: "#032201" }}>
            <p style={{ ...pixelHeading, color: "#21801E", fontSize: 12 }}>Recommendations:</p>
          </div>
          <ul className="flex flex-col gap-8 mt-6">
            {RECOMMENDATIONS.map((r) => (
              <li key={r.author} className="flex flex-col gap-4">
                <blockquote
                  style={{
                    ...pixelBody,
                    color: "#3BFD00",
                    textShadow: "2px 2px 0 rgba(0,0,0,0.25)",
                    fontSize: 24,
                    lineHeight: 1.3,
                  }}
                >
                  {r.quote}
                </blockquote>
                <cite
                  style={{
                    ...pixelHeading,
                    fontStyle: "normal",
                    color: "#21801E",
                    textShadow: "2px 2px 0 rgba(0,0,0,0.25)",
                    fontSize: 12,
                  }}
                >
                  {r.author}
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
          <p style={{ ...pixelHeading, color: "#320032", fontSize: 13 }}>
            {"> Made with love in Figma < 2026 — Joel Kaleb Dias"}
          </p>
        </footer>
      </div>
    </main>
  );
}
