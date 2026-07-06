import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { RevealPanel, StaggerGroup, TypewriterText } from "@/components/retro/Reveal";
import { RetroScrollProgress } from "@/components/retro/RetroScrollProgress";
import RetroStarfield from "@/components/retro/RetroStarfield";
import genelinkHeroAsset from "@/assets/genelink-hero.png.asset.json";
import mitLogo from "@/assets/genelink/mit-tech-review.png.asset.json";
import nihLogo from "@/assets/genelink/nih.png.asset.json";
import nistLogo from "@/assets/genelink/nist.png.asset.json";
import logo23andme from "@/assets/genelink/23andme.png.asset.json";
import logoAncestry from "@/assets/genelink/ancestry.png.asset.json";
import logoMapMyGenome from "@/assets/genelink/mapmygenome.png.asset.json";
import logoMyHeritage from "@/assets/genelink/myheritage.png.asset.json";
import sarahAvatar from "@/assets/genelink/sarah.png.asset.json";
import michaelAvatar from "@/assets/genelink/michael.png.asset.json";
import { IADiagram } from "@/components/genelink/IADiagram";
import { LowFiWireframes } from "@/components/genelink/LowFiWireframes";

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
  aiSectionTitle?: string;
  learnedIntro: string;
  lessons: { title: string; body: string }[];
};

const OTHER_PROJECTS = [
  {
    title: "GeneLink - An app to connect people with their long lost relatives using state of the art DNA mapping",
    company: "Confidential",
    location: "India - 2024",
    role: "Role: UX/UI Designer (Personal Project)",
    gradient: "linear-gradient(180deg, #D8B4FE 0%, #D8B4FE 80%, #7E22CE 100%)",
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
  genelink: {
    title: "Genelink",
    titleColor: "#FFEC7F",
    titleShadow: "2px 2px 0 #FF5900",
    tagline:
      "A DNA-powered platform to reconnect with long-lost relatives, offering secure genetic matching, communication tools, and educational resources for a seamless and meaningful experience.",
    meta: "Role: UX/UI Designer - Research, Prototyping · Duration: 3 Days · Tools: Figma",
    hero: "https://api.builder.io/api/v1/image/assets/TEMP/9908a3fc336b65092fa87da381b773e58714eaf0?width=2464",
    overview:
      "The Challenge: Connecting families through DNA analysis becomes challenging when users face disjointed tools and interfaces. This fragmentation complicates the search process and hampers effective communication and meaningful connections, especially when dealing with extensive genetic data.\nTarget Audience: People who want to know where they come from and to whom they are biologically related — adopted individuals seeking to reconnect, mixed-race or orphaned users, aged 25–55 and financially comfortable, since DNA testing isn't cheap.",
    process: [
      "01. Discovery — Research & Competitive Analysis",
      "02. Ideation — Insights, Personas, Avenues",
      "03. Creation — IA, Branding & Visual Design",
    ],
    stats: [
      { value: "26M+", label: "Consumers who added DNA to the four leading ancestry & health databases" },
      { value: "1-2%", label: "Discordance between sibling pairs in Western populations" },
    ],
    research: [
      {
        heading: "Let's Connect People!",
        body: "Without access to users due to the limited timeline, I leaned on third-party quantitative research. By 2019, more than 26 million consumers had added their DNA to four leading commercial ancestry and health databases — and at that pace, the gene troves could hold genetic data on over 100 million people within 24 months.",
      },
      {
        heading: "What people actually feel about the results",
        body: "Ancestry testing can yield unanticipated results — unexpected ancestry, or discordance between siblings revealing nonpaternity (roughly 1–2% of Western births). Participants generally understood that tests reveal ancestry and kinship, but worried about accuracy, scientific errors, and the fact that result quality depends on the reference pool that has already been tested.",
      },
    ],
    competition: {
      intro:
        "Before designing anything, I mapped the existing landscape of DNA & ancestry platforms. The goal wasn't to copy what works — it was to spot where current tools fall short, and where Genelink could carve out a more human, more guided experience.",
      heading: "The existing tools",
      sub: "I benchmarked four major platforms that together represent the dominant ancestry & genetic-testing ecosystem:",
      images: [
        "https://api.builder.io/api/v1/image/assets/TEMP/c0ba8d11aee59653a56825c88fb5b605f996d7e8?width=600",
        "https://api.builder.io/api/v1/image/assets/TEMP/a0aec7389b59c267fe9e6cb147a75e605ac97963?width=480",
        "https://api.builder.io/api/v1/image/assets/TEMP/e695fcd1866eccfba259938f841a203fd926c8ec?width=254",
      ],
      table: [
        {
          tool: "23andMe",
          strength: "Health + ancestry insights",
          offering: "Comprehensive genetic testing with a strong brand reputation and extensive genetic database.",
        },
        {
          tool: "Ancestry.com",
          strength: "Genealogical depth",
          offering: "Established recognition, a huge user base, comprehensive genealogical resources, and mature DNA testing tech.",
        },
        {
          tool: "Map my Genome",
          strength: "User-friendly UX",
          offering: "Intuitive navigation for genetic testing, appealing data visualization, and personalized dashboards.",
        },
        {
          tool: "My Heritage",
          strength: "Family-tree storytelling",
          offering: "Interactive family-tree builder, multimedia integration for photos & documents, and friendly navigation.",
        },
      ],
    },
    worksWell: [
      { tool: "23andMe", body: "Strong brand reputation, comprehensive genetic testing services, focus on health insights, and an extensive genetic database that compounds in value over time." },
      { tool: "Ancestry.com", body: "Established brand recognition, large user base, comprehensive genealogical resources, and advanced DNA testing technology." },
      { tool: "Map my Genome", body: "User-friendly interface design, intuitive navigation for genetic testing services, visually appealing data visualization, and personalized dashboards." },
      { tool: "My Heritage", body: "Intuitive and visually appealing UI, interactive family-tree builder, multimedia integration for photos and documents, and friendly navigation." },
    ],
    shortfall: [
      { heading: "Privacy is a quiet anxiety", body: "Across every major platform, privacy concerns are consistently raised but rarely surfaced clearly in-product. Users don't always know what is stored, what is shared, or how to revoke it." },
      { heading: "Complex interfaces, high cost", body: "Ancestry.com and similar tools have dense interfaces and high price points for users, with limited international reach for many regions." },
      { heading: "Limited customization & learning curve", body: "Tools like Map my Genome offer limited customization for user interface preferences, and there's a meaningful learning curve for first-time users dealing with unfamiliar genetic concepts." },
      { heading: "UI inconsistency across devices", body: "Platforms struggle to maintain a consistent UI across mobile, tablet and desktop — especially when displaying long-form family trees and dense ancestry data." },
    ],
    implications: [
      "Integrate more personalized health and ancestry recommendations powered by the user's own data.",
      "Simplify the interface so first-time users can navigate genetic data without prior knowledge.",
      "Leverage emerging tech (AI, AR) for interactive engagement instead of static reports.",
    ],
    solutionHero:
      "https://api.builder.io/api/v1/image/assets/TEMP/e1a7d02c5037c647363cf4e05b7b94ad72242eee?width=2456",
    ia: {
      navItems: ["Dashboard", "My DNA", "Family Tree", "Connections", "Knowledge"],
      intro:
        "After understanding the research and personas, four product pillars emerged. Each one answers a real anxiety surfaced in the research — connection, clarity, ancestry, and trust.\nThree principles guided the structure:",
      principles: [
        { title: "Highly intuitive", body: "Every screen leans on recognition, not recall. Genetic data is already heavy — the navigation should not add cognitive load on top." },
        { title: "Visually appealing", body: "DNA and ancestry data feels clinical by default. Soft visuals, warm hierarchy, and human imagery were used to make the experience feel personal rather than lab-grade." },
        { title: "Enjoyable experience", body: "Discovering family should feel like opening a story, not parsing a report. Micro-moments of celebration, progress and storytelling were threaded through every flow." },
      ],
    },
    screens: [
      {
        title: "Dashboard",
        body: "The Dashboard combines stories, closest matches and a clear DNA-processing tracker — so users instantly understand what's new in their network and where their analysis stands.\nStories, Closest Matches, A Trail of Discoveries and DNA Processing Status are all surfaced one tap away.",
        headerGradient: "linear-gradient(180deg, #FBFFF6 0%, #F5ED94 50%, #ECD948 100%)",
        images: [
          "https://api.builder.io/api/v1/image/assets/TEMP/9c4d35fd421c273cbb01f03daa1cb7e52a27ddf7?width=551",
          "https://api.builder.io/api/v1/image/assets/TEMP/c354b7c9cc25414091879dc1f8b26ceda0a736a8?width=551",
        ],
      },
      {
        title: "My DNA",
        body: "An integrated DNA profile combining real-time processing status with initial racial demographics and health indicators — turning a long, opaque analysis pipeline into a transparent, glanceable story.",
        headerGradient: "linear-gradient(180deg, #FBFFF6 0%, #B5EAF4 50%, #69DAEE 100%)",
        images: [
          "https://api.builder.io/api/v1/image/assets/TEMP/f2a6fe8480201fd8e3b3880f7f92d84907dbfaa2?width=530",
        ],
      },
      {
        title: "Closest Matches & Stories",
        body: "Facilitate immediate connections by highlighting the user's closest genetic relatives, and inspire users with engaging articles and personal stories of ancestral exploration.",
        headerGradient: "linear-gradient(180deg, #FBFFF6 0%, #F5ED94 50%, #ECD948 100%)",
        images: [
          "https://api.builder.io/api/v1/image/assets/TEMP/809a982ae0a52278677cbdf3003e670ca54f4279?width=177",
          "https://api.builder.io/api/v1/image/assets/TEMP/2d086e8b6ee9676b02e11adb735a49d2913fe36c?width=177",
          "https://api.builder.io/api/v1/image/assets/TEMP/6a24d2278d52805c90ddc867c0cf5e59e1d98181?width=177",
          "https://api.builder.io/api/v1/image/assets/TEMP/4a56334c1e6497d7bb7f7bd4e868e90ef1fa2074?width=700",
        ],
      },
      {
        title: "DNA Kit Promotion & Drive",
        body: "Drive engagement and conversions with targeted, limited-time discount offers for family DNA kits — built to feel like an invitation, not an ad.",
        headerGradient: "linear-gradient(180deg, #FBFFF6 0%, #B5EAF4 50%, #69DAEE 100%)",
        images: [
          "https://api.builder.io/api/v1/image/assets/TEMP/95b2df7b048786be3aeb66a687d1b68d49c28de6?width=552",
          "https://api.builder.io/api/v1/image/assets/TEMP/32b7975556dc20c55a9e804a29511936dbaaaaae?width=552",
        ],
      },
    ],
    aiSectionTitle: "Future Scope",
    aiIntro:
      "A lot more can be done on this application. Below are a few of the features that can be implemented to make Genelink more versatile and genuinely cutting edge.",
    aiProcess: [
      { title: "1. AI-powered ancestry predictions", body: "Use AI to provide more accurate ancestry predictions and surface potential family connections by combining genetic data patterns with historical records." },
      { title: "2. AR family tree", body: "Allow users to visualize their family tree using augmented reality — an interactive, immersive way to explore ancestry and family connections." },
      { title: "3. Interactive storytelling", body: "Create features that let users add and share stories, photos and videos about their ancestors, enriching the family-history experience for everyone connected." },
    ],
    learnedIntro:
      "Designing Genelink in three days reinforced one thing: when the subject matter is emotional, the interface has to absorb the complexity so the user doesn't have to.",
    lessons: [
      { title: "Trust is a UI problem.", body: "Privacy concerns showed up in every research source. Surfacing data handling clearly in-product matters more than a dense privacy page." },
      { title: "Genetic data needs a story.", body: "Numbers and percentages don't move people — moments, matches and shared history do. The data is the foundation, not the experience." },
      { title: "Speed forces clarity.", body: "A 3-day timeline meant cutting every screen to its essential job. Constraints sharpened the IA more than any extra week could have." },
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

function PanelShell({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <RevealPanel
      as="section"
      effect="pixel-fade"
      className="rounded-lg overflow-hidden flex flex-col"
      style={{
        background: "#FDEBE2",
        boxShadow: "2px 2px 0 0 #D33869, -2px -2px 0 0 #FF94C2",
        paddingBottom: 16,
        ...style,
      }}
    >
      {children}
    </RevealPanel>
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
  if (slug === "genelink") return <GenelinkCaseStudy cs={cs} />;

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
        <RevealPanel
          effect="crt-boot"
          className="rounded-xl overflow-hidden w-full"
          style={{ aspectRatio: "16/7", background: "#000" }}
        >
          <img
            src={cs.hero}
            alt={cs.title}
            className="w-full h-full object-cover"
          />
        </RevealPanel>

        {/* Overview */}
        <PanelShell>
          <PanelHeader
            label="Overview"
            gradient="linear-gradient(180deg, #FBFFF6 0%, #CFF594 50%, #AEEC48 100%)"
          />
          <div className="px-4 pt-4">
            <TypewriterText
              text={cs.overview}
              style={{
                ...pixelBody,
                color: "#320032",
                fontSize: 16,
                lineHeight: 1.45,
                margin: 0,
              }}
            />
          </div>
        </PanelShell>

        {/* My Process */}
        <PanelShell>
          <PanelHeader
            label="My Process"
            gradient="linear-gradient(180deg, #FBFFF6 0%, #B5EAF4 50%, #69DAEE 100%)"
          />
          <StaggerGroup
            className="px-4 pt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
            staggerMs={90}
          >
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
          </StaggerGroup>
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
                <TypewriterText
                  text={r.body}
                  style={{
                    ...pixelBody,
                    color: "#320032",
                    fontSize: 16,
                    lineHeight: 1.45,
                    margin: 0,
                  }}
                />
              </div>
            ))}
          </div>
        </PanelShell>

        {/* Stats (terminal cards) */}
        <StaggerGroup className="grid grid-cols-2 lg:grid-cols-4 gap-4" staggerMs={100} effect="crt-boot">
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
        </StaggerGroup>

        {/* Competition & Benchmarking */}
        <PanelShell>
          <PanelHeader
            label="Competition & Benchmarking"
            gradient="linear-gradient(180deg, #FBFFF6 0%, #E9D5FF 50%, #D8B4FE 100%)"
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
        <RevealPanel
          effect="crt-boot"
          className="rounded-xl overflow-hidden w-full"
          style={{ aspectRatio: "308/123" }}
        >
          <img src={cs.solutionHero} alt="Solution preview" className="w-full h-full object-cover" />
        </RevealPanel>

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
              <TypewriterText
                text={cs.screens[0].body}
                style={{ ...pixelBody, color: "#320032", fontSize: "clamp(16px, 2.2vw, 24px)", lineHeight: 1.3, letterSpacing: "-0.02em", margin: 0 }}
              />
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
              <TypewriterText
                text={cs.screens[1].body}
                style={{ ...pixelBody, color: "#320032", fontSize: "clamp(16px, 2.2vw, 24px)", lineHeight: 1.3, letterSpacing: "-0.02em", margin: 0 }}
              />
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
              <TypewriterText
                text={cs.screens[2].body}
                style={{ ...pixelBody, color: "#320032", fontSize: "clamp(16px, 2.2vw, 24px)", lineHeight: 1.3, letterSpacing: "-0.02em", margin: 0 }}
              />
              <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr_1fr] gap-3" style={{ gridAutoRows: "minmax(180px, 27vw)" }}>
                <div className="rounded-xl overflow-hidden">
                  <img src={cs.screens[2].images?.[0]} alt="" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <img src={cs.screens[2].images?.[1]} alt="" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="rounded-xl overflow-hidden">
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
              <TypewriterText
                text={cs.screens[3].body}
                style={{ ...pixelBody, color: "#320032", fontSize: "clamp(16px, 2.2vw, 24px)", lineHeight: 1.3, letterSpacing: "-0.02em", margin: 0 }}
              />
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
            {cs.aiSectionTitle ?? "How I Used AI in My Design Process"}
          </h2>
        </div>

        <RevealPanel
          as="section"
          effect="pixel-fade"
          className="rounded-xl p-4 flex flex-col gap-4"
          style={{
            background: "#FA0",
            boxShadow: "-3px -3px 0 0 #4C042C inset, 3px 3px 0 0 #FFFEF6 inset",
          }}
        >
          <TypewriterText
            text={cs.aiIntro}
            style={{
              ...pixelBody,
              color: "#320032",
              fontSize: 20,
              lineHeight: 1.4,
              margin: 0,
              padding: "4px 4px",
            }}
          />
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
        </RevealPanel>

        {/* What I Learned — green container, matches AI section structure */}
        <RevealPanel
          as="section"
          effect="pixel-fade"
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
          <TypewriterText
            text={cs.learnedIntro}
            style={{
              ...pixelBody,
              color: "#102914",
              fontSize: 18,
              lineHeight: 1.45,
              margin: 0,
              padding: "0 4px",
            }}
          />
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
        </RevealPanel>

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

/* ========================================================================== */
/*  GENELINK CASE STUDY — dedicated renderer matching the Figma 1:1            */
/* ========================================================================== */

const GENELINK = {
  challenge:
    "Connecting families through DNA analysis becomes challenging when users face disjointed tools and interfaces. This fragmentation complicates the search process and hampers effective communication and meaningful connections, especially when dealing with extensive genetic data.",
  targetAudience:
    "People want to know where they come from and to whom they are biologically related. People who might be adopted or gave up their children for adoption and wish to reconnect, or people who are mostly mixed race and orphaned. Aged between 25–55, financially comfortable — DNA testing is not cheap.",
  designProcessIntro:
    "How I managed to create this experience in a couple of days? I followed a lean UX method which streamlined processes to ensure timely delivery.",
  phases: [
    {
      number: "01",
      title: "Discovery",
      bullets: ["Quantitative and 3rd party research", "Competitive Analysis"],
    },
    {
      number: "02",
      title: "Ideation",
      bullets: ["Analyzing insights", "Crafting personas", "Defining avenues"],
    },
    {
      number: "03",
      title: "Creation",
      bullets: ["Information architecture", "Branding", "Visual design"],
    },
  ],
  heroPhones: {
    left: "https://api.builder.io/api/v1/image/assets/TEMP/8bd13acc675ba8a17c37002124504d3c624a3f2e?width=447",
    center: "https://api.builder.io/api/v1/image/assets/TEMP/a777d58a294dde49990c89cbffadccc161f82f84?width=524",
    right: "https://api.builder.io/api/v1/image/assets/TEMP/3331caf3062bfc77c5f20f62aded11884b521fa6?width=438",
  },
  researchHeading: "Let's Connect People!",
  researchIntro:
    "Since I did not have access to users for research due to the limited timeline, I used third party sources for quantitative research data and tried to infer from it.",
  researchCards: [
    {
      body: "At 2019, more than 26 million consumers had added their DNA to four leading commercial ancestry and health databases. If the pace continues, the gene troves could hold data on the genetic makeup of more than 100 million people within 24 months.",
      logo: mitLogo.url,
      logoAlt: "MIT Technology Review",
      logoHeight: 56,
    },
    {
      body: "Ancestry testing also can yield unanticipated results such as lack of expected ancestry or the presence of unexpected ancestry. Discordance between pairs of siblings or between father and child can reveal nonpaternity, which is estimated to occur in approximately 1% to 2% of births in Western populations. These results could have significant psychosocial impacts.",
      logo: nihLogo.url,
      logoAlt: "National Library of Medicine — National Center for Biotechnology Information",
      logoHeight: 40,
    },
    {
      body: "If you have taken these tests, you may see the percentages in your ancestry report fluctuate over time, or if you've taken multiple DNA tests with different companies you may see slight differences in the report numbers. This could be due to differences in each company's methods, the continued growth and improvement of the reference datasets, and other factors.",
      logo: nistLogo.url,
      logoAlt: "NIST",
      logoHeight: 28,
    },
    {
      body: "Most participants understood that test could provide insights about ancestry and kinship, although some individuals in every group raised questions about the accuracy and stability of results, with some expressing worries about scientific errors. A few participants were surprised to learn that the accuracy of a user's results depend on the pool of people who had previously been tested.",
      logo: nihLogo.url,
      logoAlt: "National Library of Medicine — National Center for Biotechnology Information",
      logoHeight: 40,
    },
  ],
  stats: [
    { value: "26M+", label: "Added their DNA to four leading commercial ancestry and health databases" },
    { value: "1-2%", label: "Discordance between sibling pairs" },
  ],
  competition: {
    intro:
      "Before designing anything, I mapped the existing landscape of ancestry & DNA-testing platforms. The goal wasn't to copy them — it was to see where each one wins, where each one falls short, and where Genelink could carve out a more human, more guided experience.",
    apps: [
      { name: "23andMe", logo: logo23andme.url },
      { name: "Ancestry.com", logo: logoAncestry.url },
      { name: "Map my Genome", logo: logoMapMyGenome.url },
      { name: "My Heritage", logo: logoMyHeritage.url },
    ],
    swot: [
      {
        trait: "Strengths",
        cells: [
          "Strong brand reputation, comprehensive genetic testing services, focus on health insights, and extensive genetic database.",
          "Established brand recognition, large user base, comprehensive genealogical resources, advanced DNA testing technology.",
          "User-friendly interface design, intuitive navigation for genetic testing services, visually appealing data visualization, and personalized user dashboards.",
          "Intuitive and visually appealing user interface, interactive family tree builder, multimedia integration for photos and documents, and user-friendly navigation.",
        ],
      },
      {
        trait: "Weaknesses",
        cells: [
          "Potential privacy concerns, and complex health-related data interpretation.",
          "Complex user interface, high cost for users, privacy concerns, limited international reach.",
          "Limited customization options for user interface preferences, and potential learning curve for new users.",
          "Challenges in maintaining UI consistency across different devices.",
        ],
      },
      {
        trait: "Opportunities",
        cells: [
          "Integrating more personalized health recommendations.",
          "Simplify user interface.",
          "Leveraging emerging technologies for interactive user engagement.",
          "Leveraging AI for personalized user interaction.",
        ],
      },
      {
        trait: "Threats",
        cells: [
          "Other platforms with advanced AI capabilities.",
          "Complexity may lead to longer adoption times.",
          "Competitive pressures from other UI/UX-focused genetic testing apps.",
          "Risks of design fatigue with long-term user engagement.",
        ],
      },
    ],
  },
  personas: [
    {
      name: "Sarah",
      age: "34",
      role: "Marketing Manager",
      accent: "green" as const,
      avatar: sarahAvatar.url,
      about:
        "Sarah is a tech-savvy professional with a passion for uncovering her family history. She lives in a suburban area in the USA and enjoys exploring new technologies that simplify complex tasks. Sarah has a bachelor's degree in marketing and works for a mid-sized company, where she applies her creativity and analytical skills.",
      goals:
        "Sarah is eager to discover her ancestral roots and connect with long-lost relatives using modern technology. She values efficiency and wants a user-friendly app that seamlessly integrates DNA analysis with intuitive UI/UX design. Sarah is willing to invest in reliable tools that provide accurate results and meaningful connections.",
      challenges:
        "Sarah finds the process of navigating through extensive genetic data and complex family connections daunting. She seeks an app that simplifies this process while offering robust features for communication and data visualization. Privacy and data security are also significant concerns for Sarah when using genetic testing and family history services.",
      tech:
        "Sarah is proficient in using smartphones and computers for both work and personal tasks. She prefers apps with clean, modern interfaces that are easy to navigate and provide clear instructions. Sarah appreciates apps that offer customization options to tailor the user experience to her preferences.",
      quote:
        "I want an app that not only helps me uncover my family history but also makes the journey enjoyable and easy to understand. Privacy and accuracy are non-negotiable for me—I need to trust the app with my genetic data.",
    },
    {
      name: "Michael Nguyen",
      age: "42",
      role: "Software Engineer",
      accent: "orange" as const,
      avatar: michaelAvatar.url,
      about:
        "Michael is a driven software engineer who resides in a bustling urban area. He holds a master's degree in computer science and works for a tech startup, where he applies his expertise in coding and problem-solving. Michael enjoys exploring new technologies and is interested in using them to uncover his family history.",
      goals:
        "Michael is curious about his ancestral origins and wants to discover connections with distant relatives through DNA analysis. He values efficiency and accuracy in tools he uses, preferring apps that offer seamless integration of genetic data with intuitive UI/UX design. Michael seeks meaningful insights into his heritage and desires a user-friendly app that simplifies the complexities of genealogy.",
      challenges:
        "Navigating through extensive genetic data and interpreting complex family relationships poses challenges for Michael. He seeks an app that not only provides comprehensive genetic analysis but also simplifies the presentation of family connections. Michael is cautious about data privacy and wants assurances that his genetic information will be handled securely.",
      tech:
        "Michael is highly proficient in using technology, particularly smartphones and computers, both professionally and personally. He appreciates apps with sleek, modern interfaces that are easy to navigate and offer customizable features.",
      quote:
        "I'm fascinated by the potential of technology to uncover my family history. I want an app that not only gives me accurate genetic insights but also makes it easy for me to explore and understand my ancestry. Security and privacy are paramount—it's crucial that my genetic data is protected.",
    },
  ],
  hmwIntro:
    "After understanding the research & personas, I was able to visualize how the solution might look like.",
  hmwPillars: [
    { title: "Communication system", body: "Build a system to help users connect and communicate with each other." },
    { title: "DNA Insights", body: "Visually represent DNA insights and give information in byte-sized format." },
    { title: "Family Tree", body: "Easy to create, parent-child link based family tree." },
    { title: "Knowledge center", body: "For making users aware of DNA testing, its possibilities, and addressing concerns." },
  ],
  iaImage:
    "https://api.builder.io/api/v1/image/assets/TEMP/f2a6fe8480201fd8e3b3880f7f92d84907dbfaa2?width=530",
  sketchImage:
    "https://api.builder.io/api/v1/image/assets/TEMP/544d737c196b675f2818c21fdf596eb654c74762?width=596",
  branding: {
    logoIntro:
      "Before jumping into UI screens, I needed the logo, colors and typeface that would determine the UI style and art direction. And so I started sketching…",
    logoSubcaption: "DNA chain with link — to denote connection and people.",
    logoSketch:
      "https://api.builder.io/api/v1/image/assets/TEMP/4a56334c1e6497d7bb7f7bd4e868e90ef1fa2074?width=700",
    ethos: ["Highly Intuitive", "Visually Appealing", "Enjoyable Experience"],
    colors: [
      { name: "Pure White", hex: "#FFFFFF", rationale: "Crisp · Pure · Perfection · Honesty · New Beginnings", fg: "#1A1A1A" },
      { name: "Royal Blue", hex: "#344EAD", rationale: "Eminence · Sophistication · Trustworthiness · Reliability", fg: "#FFFFFF" },
      { name: "Grey", hex: "#F4F4F4", rationale: "Neutral surface", fg: "#1A1A1A" },
      { name: "Grey", hex: "#EAEAEA", rationale: "Neutral surface", fg: "#1A1A1A" },
      { name: "Secondary", hex: "#F2F1DF", rationale: "Warm secondary surface", fg: "#1A1A1A" },
      { name: "Text", hex: "#3A353D", rationale: "Primary text", fg: "#FFFFFF" },
      { name: "Semantic", hex: "#4CACA6", rationale: "Success", fg: "#FFFFFF" },
      { name: "Semantic", hex: "#DA3A3A", rationale: "Error", fg: "#FFFFFF" },
      { name: "Semantic", hex: "#EAB040", rationale: "Warning", fg: "#1A1A1A" },
    ],
    finalLogoTagline: "We share with both — to enable connection and people.",
  },
  dashboard: {
    intro:
      "An integrated dashboard that combines stories, closest matches, ancestry discoveries, and real-time DNA processing — so users always know what's new in their network and where their analysis stands.",
    phoneImage:
      "https://api.builder.io/api/v1/image/assets/TEMP/9c4d35fd421c273cbb01f03daa1cb7e52a27ddf7?width=551",
    callouts: [
      { title: "Stories", body: "Engage users with real-time updates and shared life moments from their genetic network." },
      { title: "Closest Matches", body: "Facilitate immediate connections by highlighting the user's closest genetic relatives and matches." },
      { title: "A Trail of Discoveries", body: "Inspire users and build community through engaging articles and personal stories of ancestral exploration." },
      { title: "DNA Processing Status", body: "Keep users informed and manage expectations with a clear, real-time progress tracker for their DNA analysis." },
      { title: "Dashboard DNA Kit Promotion", body: "Drive engagement and conversions with targeted, limited-time discount offers for family DNA kits." },
    ],
  },
  myDna: {
    caption:
      "An integrated DNA profile combining real-time processing status with initial racial demographics and health indicators.",
    images: [
      "https://api.builder.io/api/v1/image/assets/TEMP/c354b7c9cc25414091879dc1f8b26ceda0a736a8?width=551",
      "https://api.builder.io/api/v1/image/assets/TEMP/461051f1939d88c6ed79b53ca502081016ed5979?width=551",
      "https://api.builder.io/api/v1/image/assets/TEMP/a3faa68ee0f2deb13e9723f082752f97f29b479a?width=551",
    ],
  },
  futureScope: {
    intro:
      "Lot more can be done on this application. A few features that can be implemented to make it more versatile and cutting edge.",
    items: [
      { title: "AI-powered ancestry predictions", body: "Use artificial intelligence to provide more accurate ancestry predictions and potential family connections based on genetic data patterns and historical records." },
      { title: "AR Family Tree", body: "Allow users to visualize their family tree using augmented reality, providing an interactive and immersive way to explore their ancestry and family connections." },
      { title: "Interactive storytelling", body: "Create interactive storytelling features that allow users to add and share stories, photos, and videos about their ancestors, enriching the family history experience." },
    ],
  },
} as const;

function PhaseDivider({ label }: { label: string }) {
  return (
    <div className="pt-4 pb-2 text-center">
      <h2
        style={{
          ...pixelHeading,
          color: "#FFEC7F",
          textShadow: "2px 2px 0 #FF5900",
          fontSize: "clamp(28px, 4vw, 36px)",
          lineHeight: 1.3,
          letterSpacing: "-0.08em",
        }}
      >
        {label}
      </h2>
    </div>
  );
}

function PhaseCard({ number, title, bullets }: { number: string; title: string; bullets: string[] }) {
  return (
    <div
      className="rounded-xl p-4 flex items-center justify-center text-center"
      style={{
        background: "#FA0",
        boxShadow: "-2px -2px 0 0 #4C042C inset, 2px 2px 0 0 #FFFEF6 inset",
        minHeight: 110,
      }}
    >
      <div style={{ ...pixelHeading, color: "#320032", fontSize: 12, lineHeight: 1.3, letterSpacing: "-0.01em", whiteSpace: "pre-line" }}>
        {`${number}.${title}\n${bullets.join("\n")}`}
      </div>
    </div>
  );
}


function PersonaCard({ p }: { p: (typeof GENELINK)["personas"][number] }) {
  const isGreen = p.accent === "green";
  const bg = isGreen ? "#3BC976" : "#FFA42A";
  const chip = isGreen ? "#9FF2C1" : "#FFD08A";
  const shadowDark = isGreen ? "#1F8A4D" : "#A85E00";
  const shadowLight = isGreen ? "#C8FBDC" : "#FFE5BD";
  return (
    <section
      className="rounded-lg p-4 flex flex-col gap-4"
      style={{
        background: bg,
        boxShadow: `-3px -3px 0 0 ${shadowDark} inset, 3px 3px 0 0 ${shadowLight} inset`,
      }}
    >
      <div className="flex items-center gap-4">
        <div
          className="rounded-lg overflow-hidden flex-shrink-0"
          style={{ width: 72, height: 72, background: "#FFF", boxShadow: "inset 0 0 0 2px #320032" }}
        >
          <img src={p.avatar} alt={p.name} className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div>
          <div style={{ ...pixelHeading, color: "#102914", fontSize: 18, letterSpacing: "-0.02em" }}>
            {p.name}, {p.age}
          </div>
          <div style={{ ...pixelBody, color: "#102914", fontSize: 14, opacity: 0.85 }}>{p.role}</div>
        </div>
      </div>
      {([
        ["About", p.about],
        ["Goals and Motivations", p.goals],
        ["Challenges", p.challenges],
        ["Technology Usage", p.tech],
      ] as const).map(([h, body]) => (
        <div key={h}>
          <h4 style={{ ...pixelBody, color: "#102914", fontSize: 15, fontWeight: 700, margin: 0, marginBottom: 2 }}>
            {h}
          </h4>
          <p style={{ ...pixelBody, color: "#102914", fontSize: 14, lineHeight: 1.45, margin: 0 }}>{body}</p>
        </div>
      ))}
      <div className="rounded-lg px-4 py-3" style={{ background: chip, boxShadow: "inset 0 0 0 2px #102914" }}>
        <p style={{ ...pixelBody, color: "#102914", fontSize: 14, lineHeight: 1.45, margin: 0, fontStyle: "italic" }}>
          "{p.quote}"
        </p>
      </div>
    </section>
  );
}

function PillarTile({ title, body }: { title: string; body: string }) {
  return (
    <div
      className="rounded-xl p-4 flex flex-col gap-2"
      style={{
        background: "#FA0",
        boxShadow: "-2px -2px 0 0 #4C042C inset, 2px 2px 0 0 #FFFEF6 inset",
        minHeight: 110,
      }}
    >
      <div style={{ ...pixelHeading, color: "#320032", fontSize: 14, letterSpacing: "-0.02em", lineHeight: 1.3 }}>
        {title}
      </div>
      <p style={{ ...pixelBody, color: "#320032", fontSize: 14, lineHeight: 1.4, margin: 0 }}>{body}</p>
    </div>
  );
}

function ColorSwatch({ name, hex, rationale, fg }: { name: string; hex: string; rationale: string; fg: string }) {
  return (
    <div
      className="rounded-lg overflow-hidden flex flex-col"
      style={{ boxShadow: "inset 0 0 0 2px #320032" }}
    >
      <div className="p-3 flex flex-col gap-1" style={{ background: hex, minHeight: 90 }}>
        <span style={{ ...pixelHeading, color: fg, fontSize: 12, letterSpacing: "-0.02em" }}>{name}</span>
        <span style={{ ...pixelBody, color: fg, fontSize: 12, opacity: 0.9 }}>{hex}</span>
      </div>
      <div className="p-2" style={{ background: "#FDEBE2" }}>
        <p style={{ ...pixelBody, color: "#320032", fontSize: 11, lineHeight: 1.35, margin: 0 }}>{rationale}</p>
      </div>
    </div>
  );
}

function ColorRow({
  bg,
  fg,
  name,
  rationale,
  hex,
  border,
}: {
  bg: string;
  fg: string;
  name: string;
  rationale: string;
  hex: string;
  border?: string;
}) {
  return (
    <div
      className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 rounded-xl px-4 py-3"
      style={{ background: bg, border, boxShadow: "-2px -2px 0 0 rgba(0,0,0,0.15) inset, 2px 2px 0 0 rgba(255,255,255,0.35) inset" }}
    >
      <div className="flex-1 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center">
        <span style={{ ...pixelHeading, color: fg, fontSize: 12, letterSpacing: "-0.02em" }}>{name}</span>
        <span style={{ ...pixelBody, color: fg, fontSize: 12, opacity: 0.9 }}>: {rationale}</span>
      </div>
      <span style={{ ...pixelBody, color: fg, fontSize: 12, opacity: 0.85 }}>{hex}</span>
    </div>
  );
}

function ColorGroup({
  label,
  swatches,
}: {
  label: string;
  swatches: { hex: string; fg: string; border?: string }[];
}) {
  return (
    <div className="flex flex-col gap-2">
      <span style={{ ...pixelHeading, color: "#320032", fontSize: 12, letterSpacing: "-0.02em" }}>{label}</span>
      <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${swatches.length}, minmax(0, 1fr))` }}>
        {swatches.map((s) => (
          <div
            key={s.hex}
            className="flex items-end justify-end rounded-lg px-2 py-3"
            style={{
              background: s.hex,
              border: s.border,
              minHeight: 60,
              boxShadow: "-2px -2px 0 0 rgba(0,0,0,0.12) inset, 2px 2px 0 0 rgba(255,255,255,0.3) inset",
            }}
          >
            <span style={{ ...pixelBody, color: s.fg, fontSize: 11, opacity: 0.9 }}>{s.hex}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function GenelinkCaseStudy({ cs }: { cs: CaseStudy }) {
  const G = GENELINK;
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
          className="rounded-xl p-6 flex flex-col gap-6"
          style={{
            background: "linear-gradient(180deg, #F360A3 0%, #FF289E 76.44%, #8A00B1 100%)",
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
            <Link to="/" className="retro-lightning" style={{ ...pixelBody, color: "#fff", fontSize: 24, letterSpacing: "-0.02em" }}>
              ← Back
            </Link>
          </div>
          <div
            className="rounded-xl px-4 sm:px-6 pt-4 pb-4 relative overflow-hidden"
            style={{
              border: "2px solid #008000",
              background: `${scanlines}, linear-gradient(180deg, #004802 0%, #001F01 100%)`,
              boxShadow: "0 0 4px 0 rgba(0,0,0,0.4) inset, 2px 2px 0 0 #8F0045",
            }}
          >
            <div className="rounded-md px-4 py-2" style={{ background: "#032201" }}>
              <p style={{ ...pixelTerminal, color: "#21801E", fontSize: 16, letterSpacing: "-0.01em", margin: 0 }}>
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
        <RevealPanel
          effect="crt-boot"
          className="rounded-xl overflow-hidden w-full"
          style={{ aspectRatio: "16/7", background: "#000" }}
        >
          <img
            src={genelinkHeroAsset.url}
            alt={cs.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </RevealPanel>

        {/* The Challenge + Target Audience (side-by-side) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <PanelShell>
            <PanelHeader label="The Challenge:" gradient="linear-gradient(180deg, #FBFFF6 0%, #CFF594 50%, #AEEC48 100%)" />
            <div className="px-4 pt-4">
              <p style={{ ...pixelBody, color: "#320032", fontSize: 16, lineHeight: 1.4, margin: 0, letterSpacing: "-0.01em" }}>
                {G.challenge}
              </p>
            </div>
          </PanelShell>
          <PanelShell>
            <PanelHeader label="Target Audience" gradient="linear-gradient(180deg, #FBFFF6 0%, #E9D5FF 50%, #D8B4FE 100%)" />
            <div className="px-4 pt-4">
              <p style={{ ...pixelBody, color: "#320032", fontSize: 16, lineHeight: 1.4, margin: 0, letterSpacing: "-0.01em" }}>
                {G.targetAudience}
              </p>
            </div>
          </PanelShell>
        </div>

        {/* Design Process */}
        <PanelShell>
          <PanelHeader label="Design Process" gradient="linear-gradient(180deg, #FBFFF6 0%, #B5EAF4 50%, #69DAEE 100%)" />
          <div className="px-4 pt-4 flex flex-col gap-4">
            <p style={{ ...pixelBody, color: "#320032", fontSize: 16, lineHeight: 1.4, margin: 0, textAlign: "center", letterSpacing: "-0.01em" }}>
              {G.designProcessIntro}
            </p>
            <StaggerGroup className="grid grid-cols-1 sm:grid-cols-3 gap-3" staggerMs={90}>
              {G.phases.map((p) => (
                <PhaseCard key={p.title} number={p.number} title={p.title} bullets={[...p.bullets]} />
              ))}
            </StaggerGroup>
          </div>
        </PanelShell>

        {/* ===== DISCOVERY ===== */}
        <PhaseDivider label="Discovery" />

        <PanelShell>
          <PanelHeader label="Research" gradient="linear-gradient(180deg, #FBFFF6 0%, #F5ED94 50%, #ECD948 100%)" />
          <div className="px-4 pt-4 pb-4 flex flex-col gap-4">
            <h3
              style={{
                ...pixelBody,
                color: "#320032",
                fontSize: 24,
                lineHeight: 1.3,
                letterSpacing: "-0.01em",
                margin: 0,
              }}
            >
              {G.researchHeading}
            </h3>
            <p style={{ ...pixelBody, color: "#320032", fontSize: 16, lineHeight: 1.4, margin: 0, letterSpacing: "-0.01em" }}>
              {G.researchIntro}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {G.researchCards.map((c, i) => (
                <div
                  key={i}
                  className="rounded-lg p-4 flex flex-col gap-3"
                  style={{ background: "#FFF8E0", boxShadow: "inset 0 0 0 1px #ECD948" }}
                >
                  <p style={{ ...pixelBody, color: "#320032", fontSize: 14, lineHeight: 1.45, margin: 0, letterSpacing: "-0.01em", flex: 1 }}>
                    {c.body}
                  </p>
                  <div style={{ height: c.logoHeight, display: "flex", alignItems: "center" }}>
                    <img
                      src={c.logo}
                      alt={c.logoAlt}
                      style={{ height: "100%", width: "auto", objectFit: "contain" }}
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </PanelShell>

        {/* Stats */}
        <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 gap-4" staggerMs={120} effect="crt-boot">
          {G.stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl p-4 flex flex-col gap-3"
              style={{
                border: "2px solid #008000",
                background: `${scanlines}, linear-gradient(180deg, #004802 0%, #001F01 100%)`,
                boxShadow: "0 0 4px 0 rgba(0,0,0,0.4) inset, 2px 2px 0 0 #8F0045",
              }}
            >
              <div style={{ ...pixelHeading, color: "#09FF00", fontSize: 48, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                {s.value}
              </div>
              <div className="rounded-md px-3 py-2" style={{ background: "#032201" }}>
                <p style={{ ...pixelTerminal, color: "#21801E", fontSize: 14, margin: 0, lineHeight: 1.35 }}>{s.label}</p>
              </div>
            </div>
          ))}
        </StaggerGroup>

        {/* Competition & Benchmarking */}
        <PanelShell style={{ paddingBottom: 0 }}>
          <PanelHeader label="Competition & Benchmarking" gradient="linear-gradient(180deg, #FBFFF6 0%, #E9D5FF 50%, #D8B4FE 100%)" />
          <div className="px-0 pt-0 pb-0 flex flex-col">
            {/* Desktop: unified table — logo row, app names row, SWOT rows */}
            <div className="hidden md:block" style={{ borderTop: "1px solid #F365A7" }}>
              <div className="grid" style={{ gridTemplateColumns: `minmax(160px,0.9fr) repeat(${G.competition.apps.length}, minmax(0,1fr))` }}>
                {/* Logo row — empty trait cell + logo cells (cream bg) */}
                <div
                  style={{
                    background: "#FDEBE2",
                    borderBottom: "1px solid #F365A7",
                    borderRight: "1px solid #F365A7",
                  }}
                />
                {G.competition.apps.map((a, i) => (
                  <div
                    key={`logo-${a.name}`}
                    className="flex items-center justify-center px-4 py-6"
                    style={{
                      background: "#FDEBE2",
                      borderBottom: "1px solid #F365A7",
                      borderRight: i < G.competition.apps.length - 1 ? "1px solid #F365A7" : undefined,
                      height: 96,
                    }}
                  >
                    <img
                      src={a.logo}
                      alt={a.name}
                      style={{ maxHeight: 44, maxWidth: "80%", objectFit: "contain" }}
                      loading="lazy"
                    />
                  </div>
                ))}

                {/* App names row — Traits/Apps diagonal cell + app name cells (pink bg) */}
                <div
                  className="relative px-4 py-4"
                  style={{
                    background: "#FFB3D6",
                    borderBottom: "1px solid #F365A7",
                    borderRight: "1px solid #F365A7",
                    minHeight: 64,
                  }}
                >
                  {/* Diagonal line from top-left to bottom-right */}
                  <svg
                    aria-hidden
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
                    preserveAspectRatio="none"
                    viewBox="0 0 100 100"
                  >
                    <line x1="0" y1="0" x2="100" y2="100" stroke="#D8B4FE" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
                  </svg>
                  <span
                    style={{
                      ...pixelBody,
                      color: "#320032",
                      fontSize: 15,
                      fontWeight: 700,
                      position: "absolute",
                      left: 16,
                      bottom: 10,
                    }}
                  >
                    Traits
                  </span>
                  <span
                    style={{
                      ...pixelBody,
                      color: "#320032",
                      fontSize: 15,
                      fontWeight: 700,
                      position: "absolute",
                      right: 16,
                      top: 10,
                    }}
                  >
                    Apps
                  </span>
                </div>
                {G.competition.apps.map((a, i) => (
                  <div
                    key={`name-${a.name}`}
                    className="px-3 py-4 flex items-center justify-center text-center"
                    style={{
                      background: "#FFB3D6",
                      borderBottom: "1px solid #F365A7",
                      borderRight: i < G.competition.apps.length - 1 ? "1px solid #F365A7" : undefined,
                    }}
                  >
                    <span style={{ ...pixelHeading, color: "#320032", fontSize: 16, letterSpacing: "-0.02em" }}>
                      {a.name}
                    </span>
                  </div>
                ))}

                {/* SWOT rows */}
                {G.competition.swot.map((row, ri) => {
                  const isLast = ri === G.competition.swot.length - 1;
                  return (
                    <div key={row.trait} className="contents">
                      <div
                        className="px-4 py-4 flex items-center"
                        style={{
                          background: "#FFB3D6",
                          borderBottom: isLast ? undefined : "1px solid #F365A7",
                          borderRight: "1px solid #F365A7",
                        }}
                      >
                        <span style={{ ...pixelHeading, color: "#320032", fontSize: 15, letterSpacing: "-0.02em" }}>
                          {row.trait}
                        </span>
                      </div>
                      {row.cells.map((c, ci) => (
                        <div
                          key={ci}
                          className="px-4 py-4"
                          style={{
                            background: "#FFFFFF",
                            borderBottom: isLast ? undefined : "1px solid #F365A7",
                            borderRight: ci < row.cells.length - 1 ? "1px solid #F365A7" : undefined,
                          }}
                        >
                          <p style={{ ...pixelBody, color: "#320032", fontSize: 13, lineHeight: 1.5, margin: 0 }}>{c}</p>
                        </div>
                      ))}
                    </div>
                  );
                })}
              </div>
            </div>


            {/* Mobile fallback: per-app cards */}
            <div className="md:hidden grid grid-cols-1 gap-3 px-4 pt-4 pb-4">
              {G.competition.apps.map((a, i) => (
                <div key={a.name} className="rounded-lg p-3" style={{ background: "#FDEBE2", boxShadow: "inset 0 0 0 2px #F365A7" }}>
                  <div className="flex items-center justify-center mb-3 p-2 rounded" style={{ background: "#FFB3D6" }}>
                    <span style={{ ...pixelBody, color: "#320032", fontSize: 15, fontWeight: 700 }}>{a.name}</span>
                  </div>
                  {G.competition.swot.map((row) => (
                    <div key={row.trait} className="mb-2">
                      <h5 style={{ ...pixelBody, color: "#320032", fontSize: 13, fontWeight: 700, margin: 0 }}>{row.trait}</h5>
                      <p style={{ ...pixelBody, color: "#320032", fontSize: 13, lineHeight: 1.45, margin: 0 }}>{row.cells[i]}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </PanelShell>


        {/* ===== IDEATION ===== */}
        <PhaseDivider label="Ideation" />
        <StaggerGroup className="grid grid-cols-1 lg:grid-cols-2 gap-6" staggerMs={150}>
          {G.personas.map((p) => (
            <PersonaCard key={p.name} p={p} />
          ))}
        </StaggerGroup>

        {/* ===== CREATION ===== */}
        <PhaseDivider label="Creation" />

        <PanelShell>
          <PanelHeader label="How Might We" gradient="linear-gradient(180deg, #FBFFF6 0%, #F5ED94 50%, #ECD948 100%)" />
          <div className="px-4 pt-4 flex flex-col gap-4">
            <p style={{ ...pixelBody, color: "#320032", fontSize: 16, lineHeight: 1.45, margin: 0 }}>{G.hmwIntro}</p>
            <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3" staggerMs={80}>
              {G.hmwPillars.map((p) => (
                <PillarTile key={p.title} title={p.title} body={p.body} />
              ))}
            </StaggerGroup>
          </div>
        </PanelShell>

        {/* Information Architecture */}
        <PanelShell>
          <PanelHeader label="Information Architecture" gradient="linear-gradient(180deg, #FBFFF6 0%, #F5ED94 50%, #ECD948 100%)" />
          <div className="px-4 pt-4">
            <div className="rounded-xl overflow-hidden" style={{ background: "#FFF8F0" }}>
              <IADiagram />
            </div>
          </div>
        </PanelShell>

        {/* Low-fidelity wireframes */}
        <PanelShell>
          <PanelHeader
            label="Low fidelity wireframes"
            gradient="linear-gradient(180deg, #FFF6FA 0%, #FFB5D6 50%, #FF289E 100%)"
          />
          <LowFiWireframes />
        </PanelShell>

        {/* Branding — section title */}
        <div className="pt-4 pb-2 text-center">
          <h2
            style={{
              ...pixelHeading,
              color: cs.titleColor,
              textShadow: cs.titleShadow,
              fontSize: "clamp(22px, 2.5vw, 28px)",
              lineHeight: 1.3,
              letterSpacing: "-0.06em",
            }}
          >
            Branding
          </h2>
        </div>

        {/* The logo */}
        <PanelShell>
          <PanelHeader
            label="The logo"
            gradient="linear-gradient(180deg, #FBFFF6 0%, #CFF594 50%, #AEEC48 100%)"
          />
          <div className="px-4 pt-4 flex flex-col gap-4">
            <p style={{ ...pixelBody, color: "#320032", fontSize: 16, lineHeight: 1.4, margin: 0 }}>
              {G.branding.logoIntro}
            </p>
            <StaggerGroup className="grid grid-cols-2 md:grid-cols-4 gap-4" staggerMs={80}>
              {[
                "https://api.builder.io/api/v1/image/assets/TEMP/c1199cb3bf402f943cd4fe0516e4bf8bee9e73e2?width=551",
                "https://api.builder.io/api/v1/image/assets/TEMP/bca5b14ab1445d92347814079e9696c497dc9246?width=551",
                "https://api.builder.io/api/v1/image/assets/TEMP/d7b7b7b2158b4298e3aefeceead88602dc1a168a?width=551",
                "https://api.builder.io/api/v1/image/assets/TEMP/0bc4d0c2750e5c80688b0b4f132957191c111463?width=551",
              ].map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={`Logo sketch ${i + 1}`}
                  className="w-full h-auto object-cover"
                  style={{ borderRadius: 12, border: "4px solid #C1F174", aspectRatio: "551/470" }}
                  loading="lazy"
                />
              ))}
            </StaggerGroup>
          </div>
        </PanelShell>

        {/* Dark GeneLink reveal strip */}
        <RevealPanel
          as="section"
          effect="crt-boot"
          className="rounded-lg overflow-hidden flex flex-col items-center justify-center gap-6 px-4 py-8"
          style={{ background: "#1E1E1E" }}
        >
          <p
            style={{
              ...pixelHeading,
              color: "#FFF",
              textShadow: "1px 1px 0 #F29A9C",
              fontSize: 13,
              letterSpacing: "-0.065px",
              margin: 0,
              textAlign: "center",
            }}
          >
            DNA chain with link — to denote connection and people
          </p>
          <div className="flex items-center gap-4 md:gap-6">
            {/* DNA mark */}
            <svg width="80" height="90" viewBox="0 0 24 24" fill="none" aria-hidden style={{ flexShrink: 0 }}>
              <g stroke="#B9B9B9" strokeWidth="2" strokeLinecap="square">
                <path d="M5 3 Q12 12 5 21" />
                <path d="M19 3 Q12 12 19 21" />
                <line x1="7" y1="6" x2="17" y2="6" />
                <line x1="6" y1="10" x2="18" y2="10" />
                <line x1="6" y1="14" x2="18" y2="14" />
                <line x1="7" y1="18" x2="17" y2="18" />
              </g>
            </svg>
            <span
              style={{
                color: "#B9B9B9",
                fontFamily: "Manrope, system-ui, sans-serif",
                fontWeight: 300,
                fontSize: "clamp(48px, 10vw, 128px)",
                letterSpacing: "-0.03em",
                lineHeight: 1,
              }}
            >
              GeneLink
            </span>
          </div>
          {/* Proportion guide markers */}
          <div
            className="grid w-full max-w-[860px] px-4"
            style={{ gridTemplateColumns: "1fr 2fr 6fr", color: "#595959", fontFamily: "Manrope, system-ui, sans-serif", fontSize: 18, fontWeight: 600 }}
          >
            <span>X</span>
            <span>1/2*X</span>
            <span>5*X</span>
          </div>

        </RevealPanel>

        {/* Design ethos */}
        <PanelShell>
          <PanelHeader
            label="Design ethos"
            gradient="linear-gradient(180deg, #FBFFF6 0%, #B5EAF4 50%, #69DAEE 100%)"
          />
          <div className="px-4 pt-4">
            <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-3" staggerMs={80}>
              {G.branding.ethos.map((e) => (
                <div
                  key={e}
                  className="flex items-center justify-center px-4 py-4 rounded-xl text-center"
                  style={{
                    ...pixelHeading,
                    color: "#320032",
                    fontSize: 12,
                    background: "#FF94C2",
                    boxShadow: "-2px -2px 0 0 #4C042C inset, 2px 2px 0 0 #FFFEF6 inset",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {e}
                </div>
              ))}
            </StaggerGroup>
          </div>
        </PanelShell>

        {/* Color rationale */}
        <PanelShell>
          <PanelHeader
            label="Color rationale"
            gradient="linear-gradient(180deg, #FBFFF6 0%, #F5ED94 50%, #ECD948 100%)"
          />
          <div className="px-4 pt-4 flex flex-col gap-3">
            {/* Full-width color rows */}
            <ColorRow
              bg="#FFFFFF"
              fg="#320032"
              name="Pure White"
              rationale="Crisp · Pure · Perfection · Honesty · New Beginnings"
              hex="#FFFFFF"
              border="1px solid #EAEAEA"
            />
            <ColorRow
              bg="#344EAD"
              fg="#FFFFFF"
              name="Royal blue"
              rationale="Eminence · Sophistication · Trustworthiness · Reliability"
              hex="#344EAD"
            />
            {/* 3-column group row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
              <ColorGroup label="Greys" swatches={[
                { hex: "#F4F4F4", fg: "#320032", border: "1px solid #EAEAEA" },
                { hex: "#EAEAEA", fg: "#320032" },
              ]} />
              <ColorGroup label="Secondary & text" swatches={[
                { hex: "#F2F1DF", fg: "#320032" },
                { hex: "#3A353D", fg: "#FFFFFF" },
              ]} />
              <ColorGroup label="Semantic" swatches={[
                { hex: "#DE3E3A", fg: "#FFFFFF" },
                { hex: "#EAB040", fg: "#320032" },
                { hex: "#4CACA6", fg: "#FFFFFF" },
              ]} />
            </div>
          </div>
        </PanelShell>


        {/* A sneak peek heading */}
        <div className="pt-4 pb-2 text-center">
          <h2
            style={{
              ...pixelHeading,
              color: cs.titleColor,
              textShadow: cs.titleShadow,
              fontSize: "clamp(22px, 2.5vw, 28px)",
              lineHeight: 1.3,
              letterSpacing: "-0.06em",
            }}
          >
            A sneak peek into my envisioned design
          </h2>
        </div>

        {/* Dashboard with callouts */}
        <PanelShell>
          <PanelHeader label="Dashboard" gradient="linear-gradient(180deg, #FBFFF6 0%, #F5ED94 50%, #ECD948 100%)" />
          <div className="px-4 pt-4 flex flex-col gap-4">
            <p style={{ ...pixelBody, color: "#320032", fontSize: 16, lineHeight: 1.45, margin: 0 }}>{G.dashboard.intro}</p>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 items-center">
              {/* Left callouts */}
              <StaggerGroup className="flex flex-col gap-3 order-2 lg:order-1" staggerMs={120}>
                {G.dashboard.callouts.slice(0, 3).map((c) => (
                  <div key={c.title} className="rounded-lg px-4 py-3 lg:text-right" style={{ background: "#FDEBE2", boxShadow: "inset 0 0 0 2px #D33869" }}>
                    <h4 style={{ ...pixelHeading, color: "#320032", fontSize: 13, margin: 0, marginBottom: 4, letterSpacing: "-0.02em" }}>{c.title}</h4>
                    <p style={{ ...pixelBody, color: "#320032", fontSize: 14, lineHeight: 1.4, margin: 0 }}>{c.body}</p>
                  </div>
                ))}
              </StaggerGroup>
              {/* Phone */}
              <RevealPanel
                effect="crt-boot"
                className="rounded-2xl overflow-hidden mx-auto order-1 lg:order-2"
                style={{ width: 240, aspectRatio: "240/500", background: "#000" }}
              >
                <img src={G.dashboard.phoneImage} alt="Dashboard mockup" className="w-full h-full object-cover" loading="lazy" />
              </RevealPanel>
              {/* Right callouts */}
              <StaggerGroup className="flex flex-col gap-3 order-3" staggerMs={120}>
                {G.dashboard.callouts.slice(3).map((c) => (
                  <div key={c.title} className="rounded-lg px-4 py-3" style={{ background: "#FDEBE2", boxShadow: "inset 0 0 0 2px #D33869" }}>
                    <h4 style={{ ...pixelHeading, color: "#320032", fontSize: 13, margin: 0, marginBottom: 4, letterSpacing: "-0.02em" }}>{c.title}</h4>
                    <p style={{ ...pixelBody, color: "#320032", fontSize: 14, lineHeight: 1.4, margin: 0 }}>{c.body}</p>
                  </div>
                ))}
              </StaggerGroup>
            </div>
          </div>
        </PanelShell>

        {/* My DNA */}
        <PanelShell>
          <PanelHeader label="My DNA" gradient="linear-gradient(180deg, #FBFFF6 0%, #B5EAF4 50%, #69DAEE 100%)" />
          <div className="px-4 pt-4 flex flex-col gap-4">
            <p style={{ ...pixelBody, color: "#320032", fontSize: 16, lineHeight: 1.45, margin: 0 }}>{G.myDna.caption}</p>
            <div className="rounded-xl p-4" style={{ background: "#030B12" }}>
              <StaggerGroup className="grid grid-cols-1 sm:grid-cols-3 gap-4" staggerMs={120} effect="crt-boot">
                {G.myDna.images.map((src, i) => (
                  <div key={src} className="rounded-2xl overflow-hidden mx-auto w-full max-w-[220px]" style={{ aspectRatio: "220/460", background: "#000" }}>
                    <img src={src} alt={`My DNA screen ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                ))}
              </StaggerGroup>
            </div>
          </div>
        </PanelShell>

        {/* Future Scope */}
        <RevealPanel
          as="section"
          effect="pixel-fade"
          className="rounded-xl p-4 flex flex-col gap-4"
          style={{
            background: "#FA0",
            boxShadow: "-3px -3px 0 0 #4C042C inset, 3px 3px 0 0 #FFFEF6 inset",
          }}
        >
          <h3
            style={{
              ...pixelHeading,
              color: "#320032",
              textShadow: "1px 1px 0 #F29A9C",
              fontSize: 16,
              margin: 0,
              padding: "4px 4px 0",
              letterSpacing: "-0.02em",
            }}
          >
            Future Scope
          </h3>
          <TypewriterText
            text={G.futureScope.intro}
            style={{ ...pixelBody, color: "#320032", fontSize: 18, lineHeight: 1.4, margin: 0, padding: "0 4px" }}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {G.futureScope.items.map((a) => (
              <div key={a.title} className="rounded-lg px-4 py-3" style={{ background: "#FFD581" }}>
                <h4 style={{ ...pixelBody, color: "#320032", fontSize: 15, margin: 0, marginBottom: 4, fontWeight: 700 }}>{a.title}</h4>
                <p style={{ ...pixelBody, color: "#320032", fontSize: 14, lineHeight: 1.45, margin: 0 }}>{a.body}</p>
              </div>
            ))}
          </div>
        </RevealPanel>

        {/* What I Learned (reuses data) */}
        <RevealPanel
          as="section"
          effect="pixel-fade"
          className="rounded-xl p-4 flex flex-col gap-4"
          style={{
            background: "#3BC976",
            boxShadow: "-3px -3px 0 0 #1F5C30 inset, 3px 3px 0 0 #C8FBDC inset",
          }}
        >
          <h3 style={{ ...pixelHeading, color: "#1A4D24", textShadow: "1px 1px 0 rgba(0,0,0,0.15)", fontSize: 16, margin: 0, padding: "4px 4px 0", letterSpacing: "-0.02em" }}>
            What I Learned
          </h3>
          <TypewriterText
            text={cs.learnedIntro}
            style={{ ...pixelBody, color: "#102914", fontSize: 18, lineHeight: 1.45, margin: 0, padding: "0 4px" }}
          />
          <div className="flex flex-col gap-3">
            {cs.lessons.map((l) => (
              <div key={l.title} className="rounded-lg px-4 py-3" style={{ background: "#9FF2C1" }}>
                <p style={{ ...pixelBody, color: "#102914", fontSize: 15, lineHeight: 1.45, margin: 0 }}>
                  <strong>{l.title} </strong>{l.body}
                </p>
              </div>
            ))}
          </div>
        </RevealPanel>

        {/* More case studies */}
        <section
          className="rounded-lg overflow-hidden flex flex-col"
          style={{ background: "#FCE8F0", boxShadow: "3px 3px 0 0 #D33869, -3px -3px 0 0 #FF94C2", paddingBottom: 16 }}
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
                style={{ background: p.gradient, boxShadow: "-2px -2px 0 0 #4C042C inset, 2px 2px 0 0 #FFFEF6 inset" }}
              >
                <img src={p.img} alt="" className="w-full rounded-lg object-cover" style={{ aspectRatio: "308/173" }} loading="lazy" />
                <p style={{ ...pixelBody, color: "#320032", fontSize: 15, lineHeight: 1.4, margin: 0 }}>{p.title}</p>
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
              boxShadow: "-2px -2px 0 0 #4C042C inset, 2px 2px 0 0 #FFFEF6 inset",
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

