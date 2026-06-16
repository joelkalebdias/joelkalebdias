import { createFileRoute, Link, notFound } from "@tanstack/react-router";

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

type CaseStudy = {
  title: string;
  titleShadow: string;
  titleColor: string;
  tagline: string;
  meta: string;
  hero: string;
  overview: string;
  process: string[];
  stats: { value: string; label: string }[];
  research: { heading: string; body: string }[];
  competition: {
    intro: string;
    heading: string;
    sub: string;
    images: string[];
    table: { tool: string; strength: string; offering: string }[];
  };
  worksWell: { tool: string; body: string }[];
  shortfall: { heading: string; body: string }[];
  implications: string[];
  solutionHero: string;
  ia: {
    navItems: string[];
    intro: string;
    principles: { title: string; body: string }[];
  };
  screens: { title: string; body: string; headerGradient?: string; images?: string[] }[];
  aiIntro: string;
  aiProcess: { title: string; body: string }[];
  learnedIntro: string;
  lessons: { title: string; body: string }[];
};

const OTHER_PROJECTS = [
  {
    title: "GeneLink - An app to connect people with their long lost relatives using state of the art DNA mapping",
    company: "Lollypop Design",
    location: "India - 2024",
    role: "Role: UX/UI Designer (Personal Project)",
    gradient: "linear-gradient(180deg, #F35DA3 0%, #F35DA3 80%, #9804AF 100%)",
    img: "https://api.builder.io/api/v1/image/assets/TEMP/b982a6847c860f50d4ba512ddbc3c64beca4590a?width=718",
  },
  {
    title: "Electra - A digital ecosystem for booking ships and for captains to effectively view ship status",
    company: "Pyxis",
    location: "Singapore - 2023 - 2025",
    role: "Role: Design Team Lead",
    gradient: "linear-gradient(180deg, #F0D642 0%, #F0D642 80%, #F08A42 100%)",
    img: "https://api.builder.io/api/v1/image/assets/TEMP/77f2c90dac4d95f68256e2b5f2aa4400bb85dd67?width=718",
  },
  {
    title: "UTI Mutual Fund - A mutual fund solution for India's oldest AMC, reimaging legacy solutions",
    company: "UTI Mutual Fund",
    location: "India - 2021-2023",
    role: "Role: UX/UI Designer",
    gradient: "linear-gradient(180deg, #69DAEE 0%, #69DAEE 80%, #8A69EE 100%)",
    img: "https://api.builder.io/api/v1/image/assets/TEMP/507f3b9934b6e8a32adc0c0b3941cc887b0f6305?width=718",
  },
];

const CASE_STUDIES: Record<string, CaseStudy> = {
  "lol-ai": {
    title: "LoL.ai",
    titleColor: "#FFEC7F",
    titleShadow: "2px 2px 0 #FF5900",
    tagline:
      "An AI-assisted replay analysis experience for League of Legends players that helps them identify key moments, understand recurring mistakes, and improve faster.",
    meta: "Role: UX/UI Designer - Research, Prototyping · Duration: 2 weeks · Tools: Figma, Figma make, Perplexity AI",
    hero: "https://api.builder.io/api/v1/image/assets/TEMP/3c898625b1d03a15aa466d686110fb08247e9c71?width=2588",
    overview:
      "Playing League of Legends should feel rewarding, not frustrating.\nWith over 131 million monthly active players and 67% stuck in the bottom two ranks, most League players never reach the level they aspire to. The game has a built-in replay system, yet fewer than 2% of players actually analyze their own replays. The problem isn't tools — it's that parsing through 30+ minutes of dense gameplay to find what went wrong is exhausting, unclear, and ultimately discouraging.\nI set out to design a product that removes the friction from post-match review and turns every game into a learning opportunity.",
    process: [
      "Research & Problem Framing (Perplexity)",
      "Competition & Benchmarking (Perplexity)",
      "Visual Exploration (Figma)",
      "Prototype Creation (Figma Make)",
    ],
    stats: [
      { value: "131M+", label: "Monthly active League players" },
      { value: "67%", label: "Players in the lowest ranks" },
      { value: "95%", label: "Below Diamond tier" },
      { value: "35min", label: "Average game length in ranked" },
    ],
    research: [
      {
        heading: "Why players don't review replays",
        body: "A typical ranked match produces over 30 minutes of footage. Without guidance, finding the moments that matter — the missed roams, the vision gaps, the poor engagements — requires manually scrubbing through the entire recording. That's a significant time investment with no guarantee of useful insight. As a community-driven analysis noted, League replays have been available for over a decade, yet the barrier remains the effort required to extract meaning from them.",
      },
      {
        heading: "The opportunity",
        body: "Mobalytics, a performance analytics tool for League, conducted a study of 1.7 million players and found that users of their platform were 27% more likely to climb at least one ranked division compared to non-users. Structured post-match analysis produces measurable improvement. The gap is making that analysis accessible, fast, and actionable for every player — not just the ones willing to spend hours in third-party tools.",
      },
    ],
    competition: {
      intro:
        "Before designing anything, I mapped the existing landscape of League of Legends companion tools. The goal wasn't to replicate what already exists — it was to identify where current tools succeed, where they fall short, and where LoL.ai could sit in the ecosystem.",
      heading: "The existing tools",
      sub: "I benchmarked four major tools that together represent the dominant third-party League ecosystem:",
      images: [
        "https://api.builder.io/api/v1/image/assets/TEMP/fa71af17fc4ed9be8b33f8c71e518613be264a1b?width=779",
        "https://api.builder.io/api/v1/image/assets/TEMP/d7fdd280e645799e6f265f20482f6929e8e4b234?width=779",
        "https://api.builder.io/api/v1/image/assets/TEMP/7c47fcd383dd2d903ad36e51043baa85a4773004?width=779",
      ],
      table: [
        {
          tool: "OP.GG",
          strength: "Fast, clean stat lookup",
          offering:
            "Real-time champion tier lists, build recommendations, and summoner stats",
        },
        {
          tool: "Mobalytics",
          strength: "Holistic performance scoring",
          offering:
            "The GPI (Gamer Performance Index) — 8 skill dimensions: Aggression, Consistency, Farming, Fighting, Objectives, Survivability, Versatility, Vision",
        },
        {
          tool: "Porofessor",
          strength: "Pre-game intelligence",
          offering:
            "Real-time matchup data, draft insights, and in-game overlay with phase-by-phase performance tracking",
        },
        {
          tool: "U.GG",
          strength: "Data-driven build optimisation",
          offering:
            "Detailed win rate breakdowns by runes, items, and skill order",
        },
      ],
    },
    worksWell: [
      { tool: "Mobalytics", body: "Their GPI system is the most sophisticated performance framework available. It deconstructs a player's skills into 8 dimensions and provides a visual radar chart that functions almost like a performance fingerprint. Their post-game summaries surface timestamps for best and worst moments — the closest existing feature to what LoL.ai does." },
      { tool: "Porofessor", body: "Excels at pre-game preparation. The in-game overlay shows real-time gold per minute, vision, and level comparisons against a benchmark player (e.g., \"platinum average\"), with colour-coded feedback that lights up green when you're on track and red when you're behind. This live, comparative feedback is highly effective within a single match." },
      { tool: "OP.GG", body: "The gold standard for speed and simplicity. Its clean interface makes stat lookup frictionless, which is why it remains the most widely used tool among casual and competitive players alike." },
    ],
    shortfall: [
      { heading: "Post-match replay analysis is superficial or absent", body: "Mobalytics comes closest with Smart Highlights, but these still require manual timestamp navigation and interpretation. None of the four tools offer a fully curated, AI-explained replay experience where the system walks the player through the 3–5 moments that determined the outcome." },
      { heading: "Data is presented, not explained", body: "OP.GG and U.GG excel at surfacing large volumes of stats — win rates, builds, tier lists — but stop short of translating data into actionable behaviour. A player might see their Vision score is \"Developing\" on Mobalytics, but the tool doesn't walk them through the specific game where a vision gap cost them the objective." },
      { heading: "No tool connects pre-game, in-game, and post-game into one coherent loop", body: "Porofessor handles pre-game and in-game well. Mobalytics handles post-game and trend tracking well. But no single tool closes the full loop — understanding a past mistake, preparing before the next match, and tracking whether behaviour actually changed." },
      { heading: "Information density creates cognitive overload", body: "Porofessor's overlay displays gold per minute, KPC, vision, level comparison, jungle timers, and matchup data simultaneously. This density works mid-game but doesn't translate to post-match learning. Community discussions note that tools \"perform the same tasks\" without explaining why a behaviour should change." },
    ],
    implications: [
      "AI surfaces only the 3–5 most important moments — not every event.",
      "Each insight includes a \"why\" explanation — addressing the data overload problem coaches report with AI systems.",
      "Progress is tracked across sessions — because research shows players want validation of growth, not just raw feedback.",
    ],
    solutionHero: "https://api.builder.io/api/v1/image/assets/TEMP/e4ec64d0082416f7e15e5a791dfba30dc1df3fd8?width=2464",
    ia: {
      navItems: ["Dashboard", "Match History", "Replay Analyser", "Personal Progress", "Settings"],
      intro: "The navigation wasn't guessed — it follows how League players already think about improvement. Players don't think in abstract categories. They think in a temporal sequence: What just happened? What's in my history? Let me look at one game. Am I getting better?\nThis informed the five-item sidebar: Dashboard, Match History, Replay Analyser, Progress, Settings — which follows the natural post-game workflow from summary to deep-dive to long-term tracking. Three principles guided the structure:",
      principles: [
        { title: "Recognition over recall", body: "In a post-match state, players are fatigued. The sidebar stays consistent across every screen so they never need to remember where something lives — they just look left." },
        { title: "Progressive disclosure", body: "The game generates enormous amounts of data. Rather than presenting it all at once, the IA layers depth across three screens: Dashboard shows a snapshot, Match History shows scan-level data, Replay Analyser shows full depth. Each screen answers one question well." },
        { title: "Familiarity over novelty", body: "Every major League tool — OP.GG, Mobalytics, Porofessor — uses a left-sidebar structure. Re-inventing this would introduce friction at the one point where the player is already emotionally charged. The innovation is in the content, not the container." },
      ],
    },
    screens: [
      { title: "Dashboard", body: "The Dashboard is the first screen players see after logging in. It serves two purposes: giving an immediate snapshot of recent performance, and surfacing the most relevant replay to review.\nKey champion overview, Tier List, Personalized Action Plan, Match history all just a touch away.", headerGradient: "linear-gradient(180deg, #FBFFF6 0%, #F5ED94 50%, #ECD948 100%)", images: [
        "https://api.builder.io/api/v1/image/assets/TEMP/6959d3152ac16000e515750b9b911cd2ea67462c?width=1304",
        "https://api.builder.io/api/v1/image/assets/TEMP/c68fd1df165a1ff0a0a48f80a926a541a10c6da3?width=1352"
      ] },
      { title: "Match History", body: "Match History is designed as a dense, scannable list — similar to League's native match history, but enriched with AI context.\nThis design respects how players already use match history as a reference tool, while adding a single new layer — the AI badge — that signals where the most useful review opportunities are.", headerGradient: "linear-gradient(180deg, #FBFFF6 0%, #B5EAF4 50%, #69DAEE 100%)", images: [
        "https://api.builder.io/api/v1/image/assets/TEMP/1475c75e9728a3a85e27cf839e128295b270b742?width=2750"
      ] },
      { title: "Replay Analysis", body: "When a player selects a match to analyse, they are taken to the Replay Analysis view. This is where the AI does its heaviest lifting. Key actionable insights are the meat of the matter.", headerGradient: "linear-gradient(180deg, #FBFFF6 0%, #F5ED94 50%, #ECD948 100%)", images: [
        "https://api.builder.io/api/v1/image/assets/TEMP/e8064b9c52589359d0d856c02bf4cf9f9d3d4623?width=1206",
        "https://api.builder.io/api/v1/image/assets/TEMP/f46defae44bb7076775461f3ff06d2f3b9de5c1a?width=1224",
        "https://api.builder.io/api/v1/image/assets/TEMP/8f894d0e5e81fbc3f0f8f0ac509c6c2765366a2e?width=612",
        "https://api.builder.io/api/v1/image/assets/TEMP/720fb25450d3370054ffcf9a8630566d81973cad?width=3000"
      ] },
      { title: "Personal Improvement Summary", body: "Since matchmaking targets a 50% win rate, rank alone is a misleading improvement signal. This screen tracks skill dimensions — Vision, Farming, Objectives — across 10–50 games, giving players tangible evidence of growth even when LP hasn't moved. This directly serves the need for competence: one of three core psychological drivers in Self-Determination Theory which explains sustained motivation in competitive gaming.", headerGradient: "linear-gradient(180deg, #FBFFF6 0%, #F5ED94 50%, #ECD948 100%)", images: [
        "https://api.builder.io/api/v1/image/assets/TEMP/e824d8282b1d3d7332c4ca3f277fae1b4552bd51?width=2336",
        "https://api.builder.io/api/v1/image/assets/TEMP/30dffc2d371b6fc99a37fa93fc04690501185dff?width=2336"
      ] },
    ],
    aiIntro: "This project wasn't just about designing AI into a product. AI was also part of how I designed it. I used it at four stages of the workflow — not to generate the design for me, but to accelerate the thinking behind it.",
    aiProcess: [
      { title: "1. Research & Problem Framing — Perplexity", body: "Before opening Figma, I used conversational AI to validate the problem space and surface existing research. I asked targeted questions like: How many LoL players actually review their replays? and What metrics prove coaching tools improve ranked performance?\nThe goal wasn't to accept the AI's answers as fact, but to identify leads — specific statistics, studies, and reports I could then verify through primary sources. AI acted as a research assistant that pointed me toward credible data, which I then cited directly in the case study." },
      { title: "2. Competition & Benchmarking — AI for Landscape Analysis", body: "I used AI tools to quickly map the existing tool landscape — OP.GG, Mobalytics, U.GG, Porofessor — and identify what they do well and where they fall short. Rather than manually visiting and documenting each tool, AI helped me summarise feature sets, user reviews, and gap analysis patterns. This freed up time to focus on the actual design decisions rather than the research grunt work." },
      { title: "3. Visual Exploration and rapid prototyping — Figma Make", body: "The early visual direction for the dashboard, match history, and key moment screens was prototyped using Figma Make. I provided structured prompts describing the target aesthetic — dark premium esports, gold accents, minimal hierarchy — and the output gave me a starting point to refine rather than a final design. I then manually restructured every component to match my own design system, typography choices, and interaction logic.\nThe difference between the AI-generated starting point and the final screens reflects where human design judgment still matters: spacing, visual weight, information density, and how a player's eye moves through a data-heavy interface." },
    ],
    learnedIntro: "This project challenged me to design for AI as a design material, not just a feature. The biggest lesson was that the quality of the AI output is only half the story — the other half is how players receive, trust, and act on that output.",
    lessons: [
      { title: "Less is more.", body: "Showing every data point the AI generates creates overwhelm. Curating the 3–5 most relevant insights is a design decision, not a technical one." },
      { title: "Transparency builds trust.", body: "Players sceptical of AI recommendations engage more when they can see the reasoning behind a suggestion." },
      { title: "Progress tracking matters more than single insights.", body: "A player who sees improvement over time is more likely to keep using the tool than one who receives isolated feedback." },
    ],
  },
};

export const Route = createFileRoute("/case-study/$slug")({
  head: ({ params }) => {
    const cs = CASE_STUDIES[params.slug];
    const title = cs ? `${cs.title} — Case Study` : "Case Study";
    return {
      meta: [
        { title },
        { name: "description", content: cs?.tagline ?? "Case study" },
        { property: "og:title", content: title },
        { property: "og:description", content: cs?.tagline ?? "Case study" },
        ...(cs?.hero ? [{ property: "og:image", content: cs.hero }] : []),
      ],
    };
  },
  loader: ({ params }) => {
    if (!CASE_STUDIES[params.slug]) throw notFound();
    return null;
  },
  notFoundComponent: () => (
    <main className="min-h-screen flex items-center justify-center text-white" style={{ background: "#0A0224" }}>
      <div className="text-center">
        <p style={{ ...pixelHeading, fontSize: 18 }}>Case study not found</p>
        <Link to="/" className="underline mt-4 inline-block" style={pixelBody}>Back home</Link>
      </div>
    </main>
  ),
  component: CaseStudyPage,
});

function PanelHeader({ label, gradient }: { label: string; gradient: string }) {
  return (
    <div
      className="w-full flex items-center justify-center rounded-t-lg"
      style={{ padding: 16, background: gradient }}
    >
      <h2
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
        {label}
      </h2>
    </div>
  );
}

function PanelShell({ children }: { children: React.ReactNode }) {
  return (
    <section
      className="rounded-lg overflow-hidden flex flex-col"
      style={{
        background: "#FDEBE2",
        boxShadow: "2px 2px 0 0 #D33869, -2px -2px 0 0 #FF94C2",
        paddingBottom: 16,
      }}
    >
      {children}
    </section>
  );
}

/* Pixel icon used in solid section headers */
function PixelIcon({ kind }: { kind: "check" | "x" | "bolt" }) {
  const bg = kind === "check" ? "#73CB00" : kind === "x" ? "#F35468" : "#FFC700";
  const stroke = "#1A1F1A";
  return (
    <div
      style={{
        width: 28,
        height: 28,
        background: bg,
        boxShadow: `inset 0 0 0 2px ${stroke}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        imageRendering: "pixelated",
      }}
      aria-hidden
    >
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        {kind === "check" && (
          <g fill="#FFFFFF">
            <rect x="2" y="8" width="2" height="2" />
            <rect x="4" y="10" width="2" height="2" />
            <rect x="6" y="12" width="2" height="2" />
            <rect x="8" y="10" width="2" height="2" />
            <rect x="10" y="8" width="2" height="2" />
            <rect x="12" y="6" width="2" height="2" />
            <rect x="14" y="4" width="2" height="2" />
          </g>
        )}
        {kind === "x" && (
          <g fill="#FFFFFF">
            <rect x="3" y="3" width="2" height="2" />
            <rect x="13" y="3" width="2" height="2" />
            <rect x="5" y="5" width="2" height="2" />
            <rect x="11" y="5" width="2" height="2" />
            <rect x="7" y="7" width="2" height="2" />
            <rect x="9" y="7" width="2" height="2" />
            <rect x="8" y="9" width="2" height="2" />
            <rect x="7" y="11" width="2" height="2" />
            <rect x="9" y="11" width="2" height="2" />
            <rect x="5" y="13" width="2" height="2" />
            <rect x="11" y="13" width="2" height="2" />
            <rect x="3" y="15" width="2" height="2" />
            <rect x="13" y="15" width="2" height="2" />
          </g>
        )}
        {kind === "bolt" && (
          <g fill="#FFFFFF">
            <rect x="9" y="2" width="3" height="2" />
            <rect x="7" y="4" width="3" height="2" />
            <rect x="5" y="6" width="3" height="2" />
            <rect x="7" y="8" width="6" height="2" />
            <rect x="9" y="10" width="3" height="2" />
            <rect x="7" y="12" width="3" height="2" />
            <rect x="5" y="14" width="3" height="2" />
          </g>
        )}
      </svg>
    </div>
  );
}

/* Solid colored section header with optional pixel icon, left-aligned */
function SolidHeader({
  label,
  background,
  icon,
  titleColor = "#320032",
  textShadow = "1px 1px 0 #F29A9C",
}: {
  label: string;
  background: string;
  icon?: "check" | "x" | "bolt";
  titleColor?: string;
  textShadow?: string;
}) {
  return (
    <div
      className="w-full flex items-center gap-3 rounded-t-lg"
      style={{ padding: "12px 16px", background }}
    >
      {icon && <PixelIcon kind={icon} />}
      <h3
        style={{
          ...pixelHeading,
          color: titleColor,
          textShadow,
          fontSize: 14,
          lineHeight: 1.3,
          letterSpacing: "-0.02em",
          margin: 0,
        }}
      >
        {label}
      </h3>
    </div>
  );
}


function CaseStudyPage() {
  const { slug } = Route.useParams();
  const cs = CASE_STUDIES[slug];
  if (!cs) return null;

  return (
    <main
      className="min-h-screen w-full px-4 sm:px-6 lg:px-8 py-8 flex justify-center"
      style={{ background: "linear-gradient(180deg, #0A0224 0%, #260A20 100%)" }}
    >
      <div className="w-full max-w-[1280px] flex flex-col gap-6">
        {/* Header */}
        <header
          className="rounded-xl p-6 flex flex-col gap-6"
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
                color: cs.titleColor,
                textShadow: cs.titleShadow,
                fontSize: "clamp(28px, 4vw, 36px)",
                lineHeight: 1.3,
                letterSpacing: "-0.1em",
              }}
            >
              {cs.title}
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

          {/* Terminal info box */}
          <div
            className="rounded-xl px-4 sm:px-6 pt-4 pb-4 relative overflow-hidden"
            style={{
              border: "2px solid #008000",
              background: `${scanlines}, linear-gradient(180deg, #004802 0%, #001F01 100%)`,
              boxShadow:
                "0 0 4px 0 rgba(0,0,0,0.4) inset, 2px 2px 0 0 #8F0045",
            }}
          >
            <div
              className="rounded-md px-4 py-2"
              style={{ background: "#032201" }}
            >
              <p
                style={{
                  ...pixelTerminal,
                  color: "#21801E",
                  fontSize: 16,
                  letterSpacing: "-0.01em",
                  margin: 0,
                }}
              >
                {cs.meta}
              </p>
            </div>
            <p
              style={{
                ...pixelBody,
                color: "#3BFD00",
                textShadow: "2px 2px 0 rgba(0,0,0,0.25)",
                fontSize: 22,
                lineHeight: 1.3,
                margin: 0,
                marginTop: 16,
              }}
            >
              {cs.tagline}
            </p>
          </div>
        </header>

        {/* Hero image */}
        <div
          className="rounded-xl overflow-hidden w-full"
          style={{ aspectRatio: "16/7", background: "#000" }}
        >
          <img
            src={cs.hero}
            alt={cs.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overview */}
        <PanelShell>
          <PanelHeader
            label="Overview"
            gradient="linear-gradient(180deg, #FBFFF6 0%, #CFF594 50%, #AEEC48 100%)"
          />
          <div className="px-4 pt-4">
            <p
              style={{
                ...pixelBody,
                color: "#320032",
                fontSize: 16,
                lineHeight: 1.45,
                whiteSpace: "pre-line",
                margin: 0,
              }}
            >
              {cs.overview}
            </p>
          </div>
        </PanelShell>

        {/* My Process */}
        <PanelShell>
          <PanelHeader
            label="My Process"
            gradient="linear-gradient(180deg, #FBFFF6 0%, #B5EAF4 50%, #69DAEE 100%)"
          />
          <div className="px-4 pt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {cs.process.map((p) => (
              <div
                key={p}
                className="rounded-xl p-4 flex items-center justify-center text-center"
                style={{
                  background: "#FA0",
                  boxShadow:
                    "-2px -2px 0 0 #4C042C inset, 2px 2px 0 0 #FFFEF6 inset",
                  minHeight: 80,
                }}
              >
                <span
                  style={{
                    ...pixelHeading,
                    color: "#320032",
                    fontSize: 12,
                    lineHeight: 1.35,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {p}
                </span>
              </div>
            ))}
          </div>
        </PanelShell>

        {/* Research */}
        <PanelShell>
          <PanelHeader
            label="Research"
            gradient="linear-gradient(180deg, #FBFFF6 0%, #F5ED94 50%, #ECD948 100%)"
          />
          <div className="px-4 pt-4 flex flex-col gap-4">
            {cs.research.map((r) => (
              <div key={r.heading}>
                <h3
                  style={{
                    ...pixelBody,
                    color: "#320032",
                    fontSize: 24,
                    lineHeight: 1.3,
                    letterSpacing: "-0.02em",
                    margin: 0,
                    marginBottom: 4,
                  }}
                >
                  {r.heading}
                </h3>
                <p
                  style={{
                    ...pixelBody,
                    color: "#320032",
                    fontSize: 16,
                    lineHeight: 1.45,
                    margin: 0,
                  }}
                >
                  {r.body}
                </p>
              </div>
            ))}
          </div>
        </PanelShell>

        {/* Stats (terminal cards) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {cs.stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl p-4 flex flex-col gap-3"
              style={{
                border: "2px solid #008000",
                background: `${scanlines}, linear-gradient(180deg, #004802 0%, #001F01 100%)`,
                boxShadow:
                  "0 0 4px 0 rgba(0,0,0,0.4) inset, 2px 2px 0 0 #8F0045",
              }}
            >
              <div
                style={{
                  ...pixelHeading,
                  color: "#09FF00",
                  fontSize: 40,
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                }}
              >
                {s.value}
              </div>
              <div
                className="rounded-md px-3 py-2"
                style={{ background: "#032201" }}
              >
                <p
                  style={{
                    ...pixelTerminal,
                    color: "#21801E",
                    fontSize: 14,
                    margin: 0,
                    lineHeight: 1.35,
                  }}
                >
                  {s.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Competition & Benchmarking */}
        <PanelShell>
          <PanelHeader
            label="Competition & Benchmarking"
            gradient="linear-gradient(180deg, #FBFFF6 0%, #F58ABC 50%, #F35DA3 100%)"
          />
          <div className="px-4 pt-4 flex flex-col gap-4">
            <p
              style={{
                ...pixelBody,
                color: "#320032",
                fontSize: 16,
                lineHeight: 1.45,
                margin: 0,
              }}
            >
              {cs.competition.intro}
            </p>

            <h3
              style={{
                ...pixelBody,
                color: "#320032",
                fontSize: 24,
                lineHeight: 1.3,
                letterSpacing: "-0.02em",
                margin: 0,
              }}
            >
              {cs.competition.heading}
            </h3>
            <p
              style={{
                ...pixelBody,
                color: "#320032",
                fontSize: 16,
                lineHeight: 1.45,
                margin: 0,
              }}
            >
              {cs.competition.sub}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {cs.competition.images.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={`Competitor ${i + 1}`}
                  className="w-full rounded-lg object-cover"
                  style={{ aspectRatio: "197/92", border: "1px solid #000" }}
                  loading="lazy"
                />
              ))}
            </div>

            {/* Table */}
            <div
              className="rounded-xl overflow-hidden"
              style={{ border: "1px solid #F365A7" }}
            >
              <div
                className="grid"
                style={{ gridTemplateColumns: "minmax(0,0.5fr) minmax(0,1fr) minmax(0,2.5fr)" }}
              >
                {["Tool", "Primary Strength", "Core Offering"].map((h) => (
                  <div
                    key={h}
                    className="px-4 py-2"
                    style={{
                      background: "#FFB3D6",
                      borderBottom: "1px solid #F365A7",
                      borderRight: h !== "Core Offering" ? "1px solid #F365A7" : undefined,
                    }}
                  >
                    <span
                      style={{
                        ...pixelBody,
                        color: "#320032",
                        fontSize: 16,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {h}
                    </span>
                  </div>
                ))}
                {cs.competition.table.map((row, i) => {
                  const isLast = i === cs.competition.table.length - 1;
                  const cellStyle = (right: boolean): React.CSSProperties => ({
                    padding: "8px 16px",
                    borderBottom: isLast ? undefined : "1px solid #F365A7",
                    borderRight: right ? "1px solid #F365A7" : undefined,
                  });
                  return (
                    <div key={row.tool} className="contents">
                      <div style={cellStyle(true)}>
                        <span style={{ ...pixelBody, color: "#320032", fontSize: 16 }}>
                          {row.tool}
                        </span>
                      </div>
                      <div style={cellStyle(true)}>
                        <span style={{ ...pixelBody, color: "#320032", fontSize: 16 }}>
                          {row.strength}
                        </span>
                      </div>
                      <div style={cellStyle(false)}>
                        <span style={{ ...pixelBody, color: "#320032", fontSize: 16 }}>
                          {row.offering}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </PanelShell>

        {/* Works well / Fall short / Design implications — 2 column composite */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Left column: What works well + Design implications */}
          <div className="flex flex-col gap-6">
            {/* What works well */}
            <section
              className="rounded-lg overflow-hidden flex flex-col"
              style={{
                background: "#3BC976",
                boxShadow: "2px 2px 0 0 #1F8A4D, -2px -2px 0 0 #9FF2C1",
                paddingBottom: 16,
              }}
            >
              <SolidHeader
                label="What works well"
                background="#3BC976"
                icon="check"
                textShadow="1px 1px 0 rgba(0,0,0,0.15)"
              />
              <div className="px-4 pt-2 flex flex-col gap-3">
                {cs.worksWell.map((w) => (
                  <div
                    key={w.tool}
                    className="rounded-lg px-4 py-3"
                    style={{ background: "#9FF2C1", boxShadow: "inset 0 0 0 2px #1F8A4D" }}
                  >
                    <p style={{ ...pixelBody, color: "#320032", fontSize: 16, lineHeight: 1.45, margin: 0 }}>
                      <strong>{w.tool} — </strong>{w.body}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Design implications */}
            <section
              className="rounded-lg overflow-hidden flex flex-col"
              style={{
                background: "#FF8A3D",
                boxShadow: "2px 2px 0 0 #C25A18, -2px -2px 0 0 #FFC089",
                paddingBottom: 16,
              }}
            >
              <SolidHeader
                label="Design implications"
                background="#FF8A3D"
                icon="bolt"
                textShadow="1px 1px 0 rgba(0,0,0,0.15)"
              />
              <div className="px-4 pt-2 flex flex-col gap-3">
                {cs.implications.map((t, i) => (
                  <div
                    key={i}
                    className="rounded-lg px-4 py-3"
                    style={{ background: "#FFC089", boxShadow: "inset 0 0 0 2px #C25A18" }}
                  >
                    <p style={{ ...pixelBody, color: "#320032", fontSize: 16, lineHeight: 1.45, margin: 0 }}>
                      <span style={{ marginRight: 6 }}>{i + 1}.</span>{t}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right column: Where they fall short */}
          <section
            className="rounded-lg overflow-hidden flex flex-col"
            style={{
              background: "#FDEBE2",
              boxShadow: "2px 2px 0 0 #D33869, -2px -2px 0 0 #FF94C2",
              paddingBottom: 16,
              height: "100%",
            }}
          >
            <SolidHeader
              label="Where they fall short"
              background="#FDEBE2"
              icon="x"
              textShadow="1px 1px 0 #F29A9C"
            />
            <div className="px-4 pt-2 flex flex-col gap-3">
              {cs.shortfall.map((s) => (
                <div
                  key={s.heading}
                  className="rounded-lg px-4 py-3"
                  style={{ background: "#FFD5D5", boxShadow: "inset 0 0 0 2px #D33869" }}
                >
                  <h4 style={{ ...pixelBody, color: "#320032", fontSize: 18, margin: 0, marginBottom: 4, letterSpacing: "-0.02em", fontWeight: 700 }}>
                    {s.heading}
                  </h4>
                  <p style={{ ...pixelBody, color: "#320032", fontSize: 16, lineHeight: 1.45, margin: 0 }}>{s.body}</p>
                </div>
              ))}
            </div>
          </section>
        </div>


        {/* The Solution — centered title */}
        <div className="pt-6 pb-2 text-center">
          <h2
            style={{
              ...pixelHeading,
              color: cs.titleColor,
              textShadow: cs.titleShadow,
              fontSize: "clamp(28px, 4vw, 36px)",
              lineHeight: 1.3,
              letterSpacing: "-0.1em",
            }}
          >
            The Solution
          </h2>
        </div>

        {/* Solution hero */}
        <div
          className="rounded-xl overflow-hidden w-full"
          style={{ aspectRatio: "308/123" }}
        >
          <img src={cs.solutionHero} alt="Solution preview" className="w-full h-full object-cover" />
        </div>

        {/* Information Architecture & Navigation */}
        <PanelShell>
          <PanelHeader
            label="Information Architecture & Navigation"
            gradient="linear-gradient(180deg, #FBFFF6 0%, #B5EAF4 50%, #69DAEE 100%)"
          />
          <div className="px-4 pt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {cs.ia.navItems.map((n) => (
              <div
                key={n}
                className="rounded-xl p-4 flex items-center justify-center text-center"
                style={{
                  background: "#FA0",
                  boxShadow: "-2px -2px 0 0 #4C042C inset, 2px 2px 0 0 #FFFEF6 inset",
                  minHeight: 64,
                }}
              >
                <span style={{ ...pixelHeading, color: "#320032", fontSize: 12, lineHeight: 1.35, letterSpacing: "-0.01em" }}>
                  {n}
                </span>
              </div>
            ))}
          </div>
          <div className="px-4 pt-4">
            <div
              className="rounded-xl p-4"
              style={{ background: "#FA0", boxShadow: "-2px -2px 0 0 #4C042C inset, 2px 2px 0 0 #FFFEF6 inset" }}
            >
              <p style={{ ...pixelBody, color: "#320032", fontSize: 18, lineHeight: 1.45, margin: 0, whiteSpace: "pre-line", marginBottom: 12 }}>
                {cs.ia.intro}
              </p>
              <div className="flex flex-col gap-3">
                {cs.ia.principles.map((p) => (
                  <div key={p.title} className="rounded-lg px-4 py-3" style={{ background: "#FFD581" }}>
                    <h4 style={{ ...pixelBody, color: "#320032", fontSize: 18, margin: 0, marginBottom: 2, letterSpacing: "-0.02em" }}>
                      {p.title}
                    </h4>
                    <p style={{ ...pixelBody, color: "#320032", fontSize: 16, lineHeight: 1.45, margin: 0 }}>{p.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </PanelShell>

        {/* An in depth look — title */}
        <div className="pt-4 pb-2 text-center">
          <h2
            style={{
              ...pixelHeading,
              color: cs.titleColor,
              textShadow: cs.titleShadow,
              fontSize: "clamp(20px, 2.5vw, 24px)",
              lineHeight: 1.3,
              letterSpacing: "-2.4px",
            }}
          >
            An in depth look into my vision
          </h2>
        </div>

        {/* Screens */}
        <div className="flex flex-col gap-6">
          {/* Dashboard */}
          <PanelShell>
            <PanelHeader
              label={cs.screens[0].title}
              gradient={cs.screens[0].headerGradient || "linear-gradient(180deg, #FBFFF6 0%, #CFF594 50%, #AEEC48 100%)"}
            />
            <div className="px-4 pt-4 flex flex-col gap-3">
              <p style={{ ...pixelBody, color: "#320032", fontSize: "clamp(16px, 2.2vw, 24px)", lineHeight: 1.3, letterSpacing: "-0.02em", margin: 0, whiteSpace: "pre-line" }}>
                {cs.screens[0].body}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 rounded-xl overflow-hidden" style={{ aspectRatio: "652/435" }}>
                  <img src={cs.screens[0].images?.[0]} alt="" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="flex-1 rounded-xl overflow-hidden" style={{ aspectRatio: "169/113" }}>
                  <img src={cs.screens[0].images?.[1]} alt="" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
            </div>
          </PanelShell>

          {/* Match History */}
          <PanelShell>
            <PanelHeader
              label={cs.screens[1].title}
              gradient={cs.screens[1].headerGradient || "linear-gradient(180deg, #FBFFF6 0%, #CFF594 50%, #AEEC48 100%)"}
            />
            <div className="px-4 pt-4 flex flex-col gap-3">
              <p style={{ ...pixelBody, color: "#320032", fontSize: "clamp(16px, 2.2vw, 24px)", lineHeight: 1.3, letterSpacing: "-0.02em", margin: 0, whiteSpace: "pre-line" }}>
                {cs.screens[1].body}
              </p>
              <div className="rounded-xl overflow-hidden" style={{ aspectRatio: "1375/978" }}>
                <img src={cs.screens[1].images?.[0]} alt="" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          </PanelShell>

          {/* Replay Analysis */}
          <PanelShell>
            <PanelHeader
              label={cs.screens[2].title}
              gradient={cs.screens[2].headerGradient || "linear-gradient(180deg, #FBFFF6 0%, #CFF594 50%, #AEEC48 100%)"}
            />
            <div className="px-4 pt-4 flex flex-col gap-3">
              <p style={{ ...pixelBody, color: "#320032", fontSize: "clamp(16px, 2.2vw, 24px)", lineHeight: 1.3, letterSpacing: "-0.02em", margin: 0, whiteSpace: "pre-line" }}>
                {cs.screens[2].body}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr_1fr] gap-3">
                <div className="rounded-xl overflow-hidden" style={{ aspectRatio: "3/2" }}>
                  <img src={cs.screens[2].images?.[0]} alt="" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="rounded-xl overflow-hidden" style={{ aspectRatio: "1/1" }}>
                  <img src={cs.screens[2].images?.[1]} alt="" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="rounded-xl overflow-hidden" style={{ aspectRatio: "2/3" }}>
                  <img src={cs.screens[2].images?.[2]} alt="" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
              <div className="rounded-xl overflow-hidden" style={{ aspectRatio: "125/36" }}>
                <img src={cs.screens[2].images?.[3]} alt="" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          </PanelShell>

          {/* Personal Improvement Summary */}
          <PanelShell>
            <PanelHeader
              label={cs.screens[3].title}
              gradient={cs.screens[3].headerGradient || "linear-gradient(180deg, #FBFFF6 0%, #CFF594 50%, #AEEC48 100%)"}
            />
            <div className="px-4 pt-4 flex flex-col gap-3">
              <p style={{ ...pixelBody, color: "#320032", fontSize: "clamp(16px, 2.2vw, 24px)", lineHeight: 1.3, letterSpacing: "-0.02em", margin: 0, whiteSpace: "pre-line" }}>
                {cs.screens[3].body}
              </p>
              <div className="rounded-xl overflow-hidden p-4" style={{ background: "#030B12" }}>
                <img src={cs.screens[3].images?.[0]} alt="" className="w-full rounded-xl border border-[#282924] object-cover object-top" style={{ maxHeight: 520, aspectRatio: "245/449" }} loading="lazy" />
              </div>
              <div className="rounded-xl overflow-hidden p-4" style={{ background: "#030B12" }}>
                <img src={cs.screens[3].images?.[1]} alt="" className="w-full rounded-xl border border-[#282924] object-cover" style={{ aspectRatio: "1168/199" }} loading="lazy" />
              </div>
            </div>
          </PanelShell>
        </div>

        {/* How I Used AI — centered title above orange container */}
        <div className="py-5 text-center">
          <h2
            style={{
              ...pixelHeading,
              color: cs.titleColor,
              textShadow: cs.titleShadow,
              fontSize: "clamp(20px, 2.5vw, 24px)",
              lineHeight: 1.3,
              letterSpacing: "-2.4px",
            }}
          >
            How I Used AI in My Design Process
          </h2>
        </div>

        <section
          className="rounded-xl p-4 flex flex-col gap-4"
          style={{
            background: "#FA0",
            boxShadow: "-3px -3px 0 0 #4C042C inset, 3px 3px 0 0 #FFFEF6 inset",
          }}
        >
          <p
            style={{
              ...pixelBody,
              color: "#320032",
              fontSize: 20,
              lineHeight: 1.4,
              margin: 0,
              padding: "4px 4px",
            }}
          >
            {cs.aiIntro}
          </p>
          <div className="flex flex-col gap-3">
            {cs.aiProcess.map((a) => (
              <div
                key={a.title}
                className="rounded-lg px-4 py-3"
                style={{ background: "#FFD581" }}
              >
                <h4
                  style={{
                    ...pixelBody,
                    color: "#320032",
                    fontSize: 16,
                    margin: 0,
                    marginBottom: 4,
                    letterSpacing: "-0.01em",
                    fontWeight: 700,
                  }}
                >
                  {a.title}
                </h4>
                <p
                  style={{
                    ...pixelBody,
                    color: "#320032",
                    fontSize: 16,
                    lineHeight: 1.45,
                    margin: 0,
                    whiteSpace: "pre-line",
                  }}
                >
                  {a.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* What I Learned — green container, matches AI section structure */}
        <section
          className="rounded-xl p-4 flex flex-col gap-4"
          style={{
            background: "#3BC976",
            boxShadow: "-3px -3px 0 0 #1F5C30 inset, 3px 3px 0 0 #C8FBDC inset",
          }}
        >
          <h3
            style={{
              ...pixelHeading,
              color: "#1A4D24",
              textShadow: "1px 1px 0 rgba(0,0,0,0.15)",
              fontSize: 16,
              margin: 0,
              padding: "4px 4px 0",
              letterSpacing: "-0.02em",
            }}
          >
            What I Learned
          </h3>
          <p
            style={{
              ...pixelBody,
              color: "#102914",
              fontSize: 18,
              lineHeight: 1.45,
              margin: 0,
              padding: "0 4px",
            }}
          >
            {cs.learnedIntro}
          </p>
          <div className="flex flex-col gap-3">
            {cs.lessons.map((l) => (
              <div
                key={l.title}
                className="rounded-lg px-4 py-3"
                style={{ background: "#9FF2C1" }}
              >
                <p
                  style={{
                    ...pixelBody,
                    color: "#102914",
                    fontSize: 16,
                    lineHeight: 1.45,
                    margin: 0,
                  }}
                >
                  <strong>{l.title} </strong>{l.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* More case studies */}
        <section
          className="rounded-lg overflow-hidden flex flex-col"
          style={{
            background: "#FCE8F0",
            boxShadow: "3px 3px 0 0 #D33869, -3px -3px 0 0 #FF94C2",
            paddingBottom: 16,
          }}
        >
          <SolidHeader
            label="More case studies"
            background="linear-gradient(180deg, #FF94C2 0%, #D33869 100%)"
            textShadow="1px 1px 0 rgba(255,255,255,0.4)"
          />
          <div className="px-4 pt-4 pb-2 grid grid-cols-1 md:grid-cols-3 gap-4">
            {OTHER_PROJECTS.map((p) => (
              <article
                key={p.title}
                className="retro-card rounded-xl p-4 flex flex-col gap-4"
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
                <p style={{ ...pixelBody, color: "#320032", fontSize: 15, lineHeight: 1.4, margin: 0 }}>
                  {p.title}
                </p>
                <div style={{ ...pixelBody, color: "#320032", fontSize: 15, lineHeight: 1.4 }}>
                  <div>{p.company}</div>
                  <div>{p.location}</div>
                  <div>{p.role}</div>
                </div>
                <span className="pix tl" aria-hidden />
                <span className="pix tr" aria-hidden />
                <span className="pix bl" aria-hidden />
                <span className="pix br" aria-hidden />
                <span className="pix tl2" aria-hidden />
                <span className="pix tr2" aria-hidden />
                <span className="pix bl2" aria-hidden />
                <span className="pix br2" aria-hidden />
              </article>
            ))}
          </div>
        </section>





        {/* Footer back */}
        <div className="flex justify-center pt-2 pb-4">
          <Link
            to="/"
            className="rounded-lg px-6 py-3"
            style={{
              background: "#FA0",
              boxShadow:
                "-2px -2px 0 0 #4C042C inset, 2px 2px 0 0 #FFFEF6 inset",
              ...pixelHeading,
              color: "#320032",
              fontSize: 13,
            }}
          >
            ← Back to portfolio
          </Link>
        </div>
      </div>
    </main>
  );
}
