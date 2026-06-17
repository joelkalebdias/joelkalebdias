## Goal
Make `/case-study/genelink` match the Figma exactly. The current page reuses the LoL.ai layout, which is missing the Genelink-specific sections (phase dividers, personas, How-Might-We pillars, wireframes, branding/logo reveal, future scope styling) and uses the wrong screen compositions.

## Approach
Rather than forcing Genelink into the LoL.ai schema, give Genelink its own renderer inside `case-study.$slug.tsx`. `CaseStudyPage` will branch on slug: `lol-ai` keeps the current renderer untouched, `genelink` gets a dedicated `GenelinkCaseStudy` component that follows the Figma section-by-section. Shared primitives (`PanelShell`, `PanelHeader`, `SolidHeader`, `RetroScrollProgress`, `RevealPanel`, `StaggerGroup`, `TypewriterText`, retro CSS) are reused so the visual language stays consistent.

## Page structure (top → bottom, matching Figma)

1. **Header** — pink/yellow CRT header with `Genelink` title, Back link, terminal meta box, green tagline. (Same as today.)
2. **Hero image** — wide mockup row, image `9908a3fc...` (CRT-boot reveal).
3. **The Challenge** panel — orange/yellow gradient header + body copy.
4. **Target Audience** panel — pink gradient header + body copy.
5. **Design Process** panel — intro line + 3 phase cards (Discovery / Ideation / Creation) with their sub-bullets, styled like Figma's stacked orange tiles.
6. **`Discovery` phase divider** — large pixel heading centered, yellow on orange shadow.
   - **Research panel** — "Let's Connect People!" body, with two inline highlight chips (NSF / Stanford-style citation chips from Figma).
   - **Stats row** — `26M+` and `1-2%` green CRT terminal cards (existing component, 2 items).
7. **Competition & Benchmarking** panel — intro, "The existing tools" sub-heading, 4 competitor logo tiles (23andMe / Ancestry / MapMyGenome / MyHeritage using images `c0ba8d11`, `a0aec789`, `e695fcd1`, `5a6eca84`), then a **5-column comparison table** (Traits × 4 apps): Strengths, Weaknesses, Opportunities, Threats. This replaces today's 3-column "Tool / Strength / Offering" table — the Figma version is a SWOT grid.
8. **`Ideation` phase divider**.
   - **Personas panel** — 2-column grid with Sarah (green) and Michael (blue) cards. Each card: avatar image, name + role, About / Goals & Motivations / Challenges / Technology Usage paragraphs, and a pull-quote in a darker chip at the bottom. Avatars: images `2234d9605` and `2506938cce`.
9. **`Creation` phase divider**.
   - **How Might We** panel — intro + 4 pillar tiles (Communication system, DNA Insights, Family Tree, Knowledge center) in a 4-col responsive grid, each with title + one-line body. Styled like the orange How-Might-We row in Figma.
   - **Information Architecture** panel — title + low-fidelity wireframes image (`f2a6fe848`) inside a soft panel; smaller caption beneath.
   - **Low-fidelity wireframes** panel — sketch screen images (the 4 wireframe images that follow in Figma, using `544d737c` etc.) in a responsive grid.
10. **Branding** panel — header. Inside:
    - **The Logo** sub-section — title, "started sketching…" body, logo sketch strip image.
    - **Design ethos** — 3 pill chips: Highly Intuitive / Visually Appealing / Enjoyable Experience.
    - **Color rationale** — 6 color swatch tiles (Pure White, Royal Blue `#344EAD`, Grey `#F4F4F4`, Grey `#EAEAEA`, Secondary `#F2F1DF`, Text `#3A353D`, Semantic `#4CACA6` / `#DA3A3A` / `#EAB040`) each with hex + rationale.
    - **Logo reveal** band — dark navy strip with the final GeneLink wordmark + DNA mark, tagline "We share with both — to enable connection and people" (the dark band from the Figma).
11. **"A sneak peek into my envisioned design"** centered pixel heading.
    - **Dashboard** section — phone in the middle, 5 labeled callouts around it (Stories / Closest Matches / A Trail of Discoveries / DNA Processing Status / Dashboard DNA Kit Promotion), each callout = title + 1-line body. Implemented as a 3-column grid on desktop: left callouts • phone image • right callouts; stacks to a single column on mobile. Phone image: middle phone from the Figma (`9c4d35fd` or `c354b7c9`).
    - **My DNA** section — three-phone row showing the integrated DNA profile (images `461051f`, `a3faa68e`, plus one more) on dark backdrop, with the "An integrated DNA profile…" caption below.
12. **Future Scope** panel — `FA0` orange container (matching Figma), intro line, then 3 feature cards (AI-Powered Genealogy / AR Family Tree / Interactive Storytelling). Heading reads **Future Scope** (no AI subtitle).
13. **What I Learned** — keep the green container with 3 lessons (already in data).
14. **More case studies** grid — unchanged.
15. **Footer back button** — unchanged.

All text content is already in the `genelink` `CaseStudy` entry; this work mostly remodels structure + adds the missing branding/persona/HMW fields.

## Data model changes
Extend the `CaseStudy` type with optional Genelink-only fields, all marked optional so LoL.ai keeps compiling:
- `challenge: string`, `targetAudience: string`
- `personas: { name, role, avatar, about, goals, challenges, tech, quote }[]`
- `hmwPillars: { title, body }[]`
- `wireframes: { iaImage: string, sketchImages: string[] }`
- `branding: { logoSketch: string, ethos: string[], colors: { name, hex, rationale }[], finalLogo: string, tagline: string }`
- `dashboardCallouts: { title, body }[]` and `dashboardPhone: string`
- `myDna: { images: string[], caption: string }`

Populate these for `genelink` using the Figma-embedded `builder.io` URLs already listed in the Figma HTML export.

## Components added (small, file-local)
- `PhaseDivider({ label })` — large pixel heading centered between sections.
- `PersonaCard({ persona, accent })` — green/blue persona card.
- `PillarTile({ title, body })` — orange pillar tile.
- `ColorSwatch({ name, hex, rationale })` — color-rationale tile.
- `DashboardCallout({ title, body, side })` — labeled callout for the dashboard phone scene.

No new dependencies, no new hooks, no CSS overrides — uses existing tokens, retro CSS, and reveal animations.

## Out of scope
- LoL.ai page is not touched.
- No changes to home page, header, footer, or routing.
- No image upload/replacement — Figma URLs only. If specific images come back broken or low-res after build, I'll list them for you to re-share.

## Risk / notes
- The Figma SWOT table is wide; on mobile it falls back to a stacked per-app card view to stay legible.
- The Dashboard callout scene is the most layout-sensitive piece; on screens below `lg` it collapses to a stacked layout (phone first, callouts as a 2-col grid below).
- A couple of small icon/persona-avatar images in the Figma export are low-resolution (≤250px). I'll use them as-is and flag them in the final reply so you can re-upload sharper versions if needed.
