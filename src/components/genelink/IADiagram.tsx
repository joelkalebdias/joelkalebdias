// Information Architecture diagram for the Genelink case study.
// Hand-built SVG matching the reference Figma.

const STROKE = "#2A2440";
const ARROW_GRAY = "#3A2F4A";
const ARROW_YELLOW = "#E0A82E";

const PURPLE = "#CBB7F7";
const PURPLE_DARK = "#A78BFA";
const BLUE = "#B6D8F2";
const GREEN = "#B5EBC8";
const SALMON = "#F8C3B0";
const ORANGE = "#FFB552";

type BoxProps = {
  x: number;
  y: number;
  w: number;
  h: number;
  fill: string;
  lines: string[];
  bold?: boolean[];
  bullets?: boolean;
  fontSize?: number;
};

function Box({ x, y, w, h, fill, lines, bold, bullets, fontSize = 12 }: BoxProps) {
  const padding = 10;
  const lh = fontSize + 3;
  const totalH = lines.length * lh;
  const startY = y + h / 2 - totalH / 2 + fontSize;
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={6} fill={fill} stroke={STROKE} strokeWidth={1} />
      {lines.map((line, i) => (
        <text
          key={i}
          x={bullets ? x + padding : x + w / 2}
          y={startY + i * lh}
          fill={STROKE}
          fontSize={fontSize}
          fontFamily="Inter, system-ui, sans-serif"
          fontWeight={bold?.[i] ? 700 : 500}
          textAnchor={bullets ? "start" : "middle"}
        >
          {bullets ? `• ${line}` : line}
        </text>
      ))}
    </g>
  );
}

function Arrow({ d, yellow }: { d: string; yellow?: boolean }) {
  return (
    <path
      d={d}
      fill="none"
      stroke={yellow ? ARROW_YELLOW : ARROW_GRAY}
      strokeWidth={1.3}
      markerEnd={yellow ? "url(#ia-arrow-yellow)" : "url(#ia-arrow)"}
    />
  );
}

export function IADiagram() {
  return (
    <svg
      viewBox="0 0 1920 1180"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto block"
      style={{ background: "#FFF8F0" }}
    >
      <defs>
        <marker id="ia-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={ARROW_GRAY} />
        </marker>
        <marker id="ia-arrow-yellow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={ARROW_YELLOW} />
        </marker>
      </defs>

      {/* ============ TOP AUTH CHAIN (centered ~x=850) ============ */}
      <Box x={765} y={30} w={170} h={70} fill={PURPLE} lines={["Splash Screen"]} fontSize={14} />
      <Arrow d="M 850 100 L 850 138" />

      <Box x={735} y={140} w={230} h={90} fill={PURPLE} lines={["Login /", "Registration Page", "With Option to SSO"]} fontSize={13} />
      <Arrow d="M 850 230 L 850 258" />

      <Box
        x={735}
        y={260}
        w={230}
        h={150}
        fill={PURPLE}
        lines={["First time", "registration", "Mobile Number", "Name", "Image"]}
        bold={[false, false, true, true, true]}
        fontSize={13}
      />
      <Arrow d="M 850 410 L 850 448" />

      {/* SSO branch from Login → Dashboard */}
      <Arrow d="M 965 185 Q 1050 185 1050 340 Q 1050 475 935 475" />
      <text x={1000} y={295} fill={STROKE} fontSize={13} fontFamily="Inter, sans-serif" fontWeight={500}>SSO</text>

      {/* Welcome discount yellow loop (left side) */}
      <Arrow d="M 735 320 Q 630 320 630 400 Q 630 475 735 475" yellow />
      <text x={420} y={365} fill={STROKE} fontSize={11} fontFamily="Inter, sans-serif">
        <tspan x={420} dy={0}>Possible to add a</tspan>
        <tspan x={420} dy={14}>touchpoint for</tspan>
        <tspan x={420} dy={14}>welcome discount</tspan>
      </text>

      <Box x={765} y={450} w={170} h={50} fill={PURPLE_DARK} lines={["Dashboard Page"]} fontSize={13} bold={[true]} />

      {/* Dashboard down to bus */}
      <line x1={850} y1={500} x2={850} y2={560} stroke={ARROW_GRAY} strokeWidth={1.5} />
      {/* Horizontal bus */}
      <line x1={140} y1={560} x2={1750} y2={560} stroke={ARROW_GRAY} strokeWidth={1.5} />
      {/* Branch drops */}
      <Arrow d="M 140 560 L 140 605" />
      <Arrow d="M 740 560 L 740 595" />
      <Arrow d="M 1200 560 L 1200 595" />
      <Arrow d="M 1660 560 L 1660 595" />

      {/* ============ COL 1: Left blue stack (x=80) ============ */}
      <Box x={80} y={610} w={120} h={50} fill={BLUE} lines={["Stories"]} />
      <Box x={80} y={680} w={120} h={60} fill={BLUE} lines={["DNA", "Snapshot"]} />
      <Box x={80} y={760} w={120} h={70} fill={BLUE} lines={["Potential", "Matches", "Cards"]} />
      <Box x={80} y={850} w={120} h={50} fill={BLUE} lines={["Notifications"]} />
      <Box x={80} y={920} w={120} h={60} fill={BLUE} lines={["User", "Profile"]} />
      <Box x={80} y={1000} w={120} h={60} fill={BLUE} lines={["Knowledge", "Section"]} />

      {/* Arrows col1 → col2 */}
      <Arrow d="M 200 710 L 218 625" />
      <Arrow d="M 200 795 L 218 770" />
      <Arrow d="M 200 875 L 218 875" />
      <Arrow d="M 200 950 L 218 950" />
      <Arrow d="M 200 1030 L 218 1035" />

      {/* ============ COL 2: Greens (x=220) ============ */}
      <Box x={220} y={600} w={140} h={50} fill={GREEN} lines={["My DNA Page"]} fontSize={12} />
      <Box x={220} y={745} w={140} h={50} fill={GREEN} lines={["Match details", "popover"]} fontSize={11} />
      <Box x={220} y={850} w={130} h={50} fill={GREEN} lines={["Clear all"]} />
      <Box x={220} y={925} w={130} h={50} fill={GREEN} lines={["Profile..."]} />
      <Box x={220} y={1010} w={150} h={50} fill={GREEN} lines={["Page with", "article lists"]} fontSize={11} />

      {/* Col2 → Col3 popovers/cards */}
      <Arrow d="M 360 770 L 388 770" />
      <Arrow d="M 350 950 L 388 945" />
      <Arrow d="M 370 1035 L 398 1035" />

      {/* ============ COL 3: Salmon popovers / Article ============ */}
      <Box
        x={390}
        y={705}
        w={170}
        h={130}
        fill={SALMON}
        lines={["View Family", "Tree", "Send", "message", "Request or", "dismiss"]}
        fontSize={11}
        bullets
      />
      <Box
        x={390}
        y={895}
        w={200}
        h={100}
        fill={SALMON}
        lines={["Delete / Modify", "account, settings for", "notifications and", "other"]}
        fontSize={11}
      />
      <Box x={400} y={1010} w={140} h={50} fill={GREEN} lines={["Article Page"]} />
      <Arrow d="M 540 1035 L 568 1045" />
      <Box
        x={570}
        y={1010}
        w={170}
        h={70}
        fill={SALMON}
        lines={["Save, Share,", "Read aloud, see", "more like this"]}
        fontSize={11}
      />

      {/* ============ MESSAGES BRANCH (x=680) ============ */}
      <Box x={680} y={600} w={120} h={40} fill={BLUE} lines={["Messages"]} />
      <Box x={680} y={650} w={120} h={140} fill={BLUE} lines={["Message...", "Chats", "Search", "Filters"]} fontSize={12} />
      <Arrow d="M 800 695 L 828 695" />
      <Box x={830} y={670} w={120} h={50} fill={GREEN} lines={["Details", "popover"]} fontSize={11} />
      <Arrow d="M 950 695 L 978 695" />
      <Box
        x={980}
        y={650}
        w={130}
        h={100}
        fill={SALMON}
        lines={["View", "Family", "Tree", "Accept or", "reject"]}
        fontSize={11}
        bullets
      />

      {/* ============ FAMILY TREE BRANCH (x=1140) ============ */}
      <Box x={1140} y={600} w={140} h={40} fill={GREEN} lines={["Family Tree"]} fontSize={12} />
      <Box x={1140} y={660} w={140} h={50} fill={BLUE} lines={["You"]} />
      <Box x={1140} y={725} w={140} h={50} fill={BLUE} lines={["Add Parent"]} />
      <Box x={1140} y={790} w={140} h={60} fill={BLUE} lines={["Switch", "views"]} />
      <Box x={1140} y={865} w={140} h={50} fill={BLUE} lines={["Search"]} />

      {/* FT vertical connector to children */}
      <line x1={1210} y1={640} x2={1210} y2={655} stroke={ARROW_GRAY} strokeWidth={1.2} />
      <line x1={1210} y1={655} x2={1135} y2={655} stroke={ARROW_GRAY} strokeWidth={1.2} />
      <Arrow d="M 1140 685 L 1138 685" />

      {/* Add Parent → Add father popover */}
      <Arrow d="M 1280 750 L 1308 750" />
      <Box
        x={1310}
        y={720}
        w={140}
        h={80}
        fill={SALMON}
        lines={["Add father", "Add", "mother"]}
        fontSize={11}
        bullets
      />
      {/* popover → Details of info */}
      <Arrow d="M 1450 760 L 1478 760" />
      <Box x={1480} y={735} w={150} h={50} fill={GREEN} lines={["Details of", "information"]} fontSize={11} />

      {/* "After adding info" loop up to My DNA */}
      <Arrow d="M 1630 750 Q 1680 750 1680 670 Q 1680 615 1665 615" />
      <text x={1530} y={695} fill={STROKE} fontSize={11} fontFamily="Inter, sans-serif">
        After adding info
      </text>

      {/* ============ MY DNA BRANCH (x=1660) ============ */}
      <Box x={1600} y={600} w={130} h={40} fill={PURPLE} lines={["My DNA"]} fontSize={13} bold={[true]} />

      {/* Bus drop arrow lands on My DNA header */}
      {/* (already drawn above at x=1660) */}

      {/* Sub blue tiles (left col of group) at x=1600 */}
      <Box x={1600} y={665} w={140} h={70} fill={BLUE} lines={["Disclaimer", "for", "reassurance"]} fontSize={11} />
      <Box x={1600} y={750} w={140} h={80} fill={BLUE} lines={["DNA", "Breakdown", "ethnicity", "wise"]} fontSize={11} />
      <Box x={1600} y={845} w={140} h={70} fill={BLUE} lines={["Health", "issues"]} fontSize={12} />
      <Box x={1600} y={930} w={140} h={75} fill={BLUE} lines={["Potential", "Matches", "Cards"]} fontSize={11} />

      {/* Sub expansion col (right) */}
      <Arrow d="M 1740 790 L 1768 790" />
      <Box x={1770} y={760} w={130} h={60} fill={GREEN} lines={["More details,", "location"]} fontSize={11} />

      <Arrow d="M 1740 880 L 1768 880" />
      <Box x={1770} y={845} w={130} h={80} fill={ORANGE} lines={["Option to", "consult", "partner", "doctor"]} fontSize={11} />
    </svg>
  );
}
