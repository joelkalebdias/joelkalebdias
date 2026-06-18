import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Joel Kaleb Dias" },
      {
        name: "description",
        content:
          "About Joel Kaleb Dias — Product (UX/UI) Designer originally from Udupi, now based in Dessau, Germany.",
      },
      { property: "og:title", content: "About — Joel Kaleb Dias" },
      {
        property: "og:description",
        content:
          "Product designer with 5+ years of experience, 30+ clients, and work reaching 2M+ users.",
      },
    ],
  }),
  component: AboutPage,
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

const PORTRAIT =
  "https://api.builder.io/api/v1/image/assets/TEMP/47d806ada3fd4776216138c38e5bfc596d6d8c91?width=510";

const STATS = [
  { value: "5+", label: "Years in design" },
  { value: "30+", label: "Clients worked with" },
  { value: "20+", label: "Projects entrusted" },
  { value: "2M+", label: "Users interacted with my work" },
];

type LogoSpec = { src: string; alt: string; w: number; h: number };
const LOGOS: LogoSpec[] = [
  { src: "https://api.builder.io/api/v1/image/assets/TEMP/ae9ae9663a346f2b5c3132ac52b63aeb83ea449b?width=93", alt: "Publicis", w: 46, h: 60 },
  { src: "https://api.builder.io/api/v1/image/assets/TEMP/c093dc190de35bd7d43aedf9f71672605ce13da5?width=176", alt: "Niveus", w: 88, h: 16 },
  { src: "https://api.builder.io/api/v1/image/assets/TEMP/153ba3f9bdea60f9e4f6e668de5b5f7ed458e165?width=148", alt: "Robosoft", w: 74, h: 50 },
  { src: "https://api.builder.io/api/v1/image/assets/TEMP/bc612a918a96ddb74d6d96d22218d2fac225d672?width=128", alt: "UTI Mutual Fund", w: 64, h: 28 },
  { src: "https://api.builder.io/api/v1/image/assets/TEMP/09c49c9f0c83aaa3e084549361bc69aff257863a?width=256", alt: "Godrej Properties", w: 128, h: 28 },
  { src: "https://api.builder.io/api/v1/image/assets/TEMP/5c076b7b0b7801e28e2af6852d9cadb057aa5971?width=200", alt: "Pyxis", w: 100, h: 17 },
  { src: "https://api.builder.io/api/v1/image/assets/TEMP/a8b26ba1dcc34f4796d4c5e65b14481f1eed8c52?width=86", alt: "Narla", w: 43, h: 45 },
  { src: "https://api.builder.io/api/v1/image/assets/TEMP/c226e91cabad56c21eb2642488570683dfd0b742?width=340", alt: "Mahindra Finance", w: 140, h: 24 },
  { src: "https://api.builder.io/api/v1/image/assets/TEMP/3e30b8c93ad1038aa4ee3dfcbbffa8cfed645d57?width=69", alt: "Tune Protect", w: 34, h: 34 },
  { src: "https://api.builder.io/api/v1/image/assets/TEMP/f1cb6a4a309086f9a73454297fa211864e0bfac2?width=140", alt: "Signpost India", w: 70, h: 28 },
  { src: "https://api.builder.io/api/v1/image/assets/TEMP/9585e0ae8b2f28f0adb1614cc992f77cbc0348cd?width=284", alt: "Akasa Air", w: 142, h: 24 },
  { src: "https://api.builder.io/api/v1/image/assets/TEMP/71da9eba94ae80ed38f46fe85d602f776843371d?width=132", alt: "Watania Takaful", w: 66, h: 28 },
];

function PanelHeader({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        padding: "16px",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "stretch",
        borderRadius: "8px 8px 0 0",
        background: "linear-gradient(180deg, #FBFFF6 0%, #CFF594 50%, #AEEC48 100%)",
      }}
    >
      <div
        style={{
          ...pixelHeading,
          flex: "1 0 0",
          color: "#320032",
          textShadow: "1px 1px 0 #F29A9C",
          fontSize: 13,
          lineHeight: "130%",
          letterSpacing: "-0.065px",
        }}
      >
        {children}
      </div>
    </div>
  );
}

function SolidHeader({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        padding: "16px",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "stretch",
        borderRadius: 8,
        background: "linear-gradient(180deg, #FBFFF6 0%, #CFF594 50%, #AEEC48 100%)",
      }}
    >
      <div
        style={{
          ...pixelHeading,
          flex: "1 0 0",
          color: "#320032",
          textShadow: "1px 1px 0 #F29A9C",
          fontSize: 13,
          lineHeight: "130%",
          letterSpacing: "-0.065px",
        }}
      >
        {children}
      </div>
    </div>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div
      style={{
        display: "flex",
        padding: "16px 24px",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 16,
        flex: "1 0 0",
        minWidth: 200,
        borderRadius: 12,
        border: "2px solid #008000",
        background: `${scanlines}, linear-gradient(180deg, #004802 0%, #001F01 100%)`,
        boxShadow:
          "0 0 24px 0 rgba(0,255,80,0.08) inset, 0 0 4px 0 rgba(0,0,0,0.6) inset, 2px 2px 0 0 #8F0045",
      }}
    >
      <div
        style={{
          ...pixelHeading,
          color: "#09FF00",
          fontSize: 40,
          lineHeight: "130%",
          letterSpacing: "-0.2px",
          alignSelf: "stretch",
        }}
      >
        {value}
      </div>
      <div
        style={{
          display: "flex",
          padding: "8px 16px",
          alignSelf: "stretch",
          borderRadius: 8,
          background: "#032201",
        }}
      >
        <div
          style={{
            ...pixelTerminal,
            flex: "1 0 0",
            color: "#3BFD00",
            textShadow: "0 0 6px rgba(59,253,0,0.35)",
            fontSize: 16,
            lineHeight: "140%",
            letterSpacing: "-0.16px",
          }}
        >
          {label}
        </div>
      </div>
    </div>
  );
}

function LogoTile({ logo }: { logo: LogoSpec }) {
  return (
    <div
      style={{
        display: "flex",
        height: 100,
        minWidth: 160,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flex: "1 0 0",
        borderRadius: 8,
        background: "#FDEBE2",
        boxShadow: "2px 2px 0 0 #D33869, -2px -2px 0 0 #FF94C2",
      }}
    >
      <img
        src={logo.src}
        alt={logo.alt}
        style={{ width: logo.w, height: logo.h, objectFit: "contain" }}
      />
    </div>
  );
}

function AboutPage() {
  const aboutParagraphs = [
    "I am originally from sunny and beautiful - Udupi, Karnataka, India. I’m a student in Dessau - Germany, I came here almost a year back and fell in love with the people, culture and obviously the weather (Not really!).",
    "With a traditional background in design, art and animation, I’ve spent years honing my skills in storytelling, art, and innovation. However, I realized my passion lies in empowering people through design - finding new, impactful ways to inclusively, keep people at the core of all I do, design or not. I really love working in teams, but I can also handle things on my own when needed.",
    "Outside work I enjoy playing video games, going on walks to parks, exploring new cities, sometimes drawing and sketching, and more recently I am cycling which has been an incredible new hobby I’ve gained!",
    "I speak fluent English, Hindi, Konkani (Mother tongue) and Kannada. I can also speak German quite well, although I am still learning :)",
  ];

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
                Joel Kaleb Dias
              </div>
              <div
                style={{
                  ...pixelBody,
                  color: "#FFF",
                  fontSize: 24,
                  lineHeight: "130%",
                  letterSpacing: "-0.48px",
                  marginTop: 4,
                }}
              >
                Product (UX/UI) Designer
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

        {/* About + Portrait */}
        <div style={{ display: "flex", gap: 24, alignItems: "stretch", flexWrap: "wrap", justifyContent: "center" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              flex: "1 1 600px",
              paddingBottom: 16,
              borderRadius: 8,
              background: "#FDEBE2",
              boxShadow: "2px 2px 0 0 #D33869, -2px -2px 0 0 #FF94C2",
              overflow: "hidden",
            }}
          >
            <PanelHeader>About Me</PanelHeader>
            <div style={{ padding: "0 16px", display: "flex", flexDirection: "column", gap: "1em" }}>
              {aboutParagraphs.map((p, i) => (
                <p
                  key={i}
                  style={{
                    ...pixelTerminal,
                    color: "#320032",
                    fontSize: 16,
                    lineHeight: "140%",
                    letterSpacing: "-0.16px",
                    margin: 0,
                  }}
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
          <img
            src={PORTRAIT}
            alt="Joel Kaleb Dias"
            style={{
              width: 255,
              height: 360,
              objectFit: "contain",
              flexShrink: 0,
              alignSelf: "center",
            }}
          />
        </div>

        {/* Stats */}
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          {STATS.map((s) => (
            <StatCard key={s.label} value={s.value} label={s.label} />
          ))}
        </div>

        {/* Client List */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24, paddingBottom: 20 }}>
          <SolidHeader>Client List</SolidHeader>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: 24,
            }}
          >
            {LOGOS.map((l) => (
              <LogoTile key={l.alt} logo={l} />
            ))}
          </div>
        </div>

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
