// Information Architecture diagram for the Genelink case study.
// Hand-built SVG to match the reference Figma exactly.

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
  bold?: boolean[]; // which lines bold
  bullets?: boolean; // render with bullets
  fontSize?: number;
};

function Box({ x, y, w, h, fill, lines, bold, bullets, fontSize = 12 }: BoxProps) {
  const padding = 6;
  const totalH = lines.length * (fontSize + 3);
  const startY = y + h / 2 - totalH / 2 + fontSize;
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={6}
        fill={fill}
        stroke={STROKE}
        strokeWidth={1}
      />
      {lines.map((line, i) => (
        <text
          key={i}
          x={bullets ? x + padding + 8 : x + w / 2}
          y={startY + i * (fontSize + 3)}
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

export function IADiagram() {
  return (
    <svg
      viewBox="0 0 1240 1180"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto block"
      style={{ background: "#FFF8F0" }}
    >
      <defs>
        <marker
          id="ia-arrow"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill={ARROW_GRAY} />
        </marker>
        <marker
          id="ia-arrow-yellow"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill={ARROW_YELLOW} />
        </marker>
      </defs>

      {/* ============ TOP AUTH CHAIN ============ */}
      <Box x={540} y={30} w={170} h={70} fill={PURPLE} lines={["Splash Screen"]} fontSize={14} />
      <line x1={625} y1={100} x2={625} y2={138} stroke={ARROW_GRAY} strokeWidth={1.5} markerEnd="url(#ia-arrow)" />

      <Box
        x={510}
        y={140}
        w={230}
        h={90}
        fill={PURPLE}
        lines={["Login /", "Registration Page", "With Option to SSO"]}
        fontSize={13}
      />
      <line x1={625} y1={230} x2={625} y2={258} stroke={ARROW_GRAY} strokeWidth={1.5} markerEnd="url(#ia-arrow)" />

      <Box
        x={510}
        y={260}
        w={230}
        h={150}
        fill={PURPLE}
        lines={["First time", "registration", "Mobile Number", "Name", "Image"]}
        bold={[false, false, true, true, true]}
        fontSize={13}
      />

      {/* SSO branch from Login → Dashboard (curved right) */}
      <path
        d="M 740 185 Q 820 185 820 320 Q 820 460 720 475"
        fill="none"
        stroke={ARROW_GRAY}
        strokeWidth={1.5}
        markerEnd="url(#ia-arrow)"
      />
      <text x={780} y={290} fill={STROKE} fontSize={13} fontFamily="Inter, sans-serif" fontWeight={500}>
        SSO
      </text>

      {/* First time reg → Dashboard */}
      <line x1={625} y1={410} x2={625} y2={448} stroke={ARROW_GRAY} strokeWidth={1.5} markerEnd="url(#ia-arrow)" />

      {/* Welcome discount loop (yellow) */}
      <path
        d="M 510 320 Q 420 320 420 400 Q 420 475 510 475"
        fill="none"
        stroke={ARROW_YELLOW}
        strokeWidth={1.5}
        markerEnd="url(#ia-arrow-yellow)"
      />
      <text x={210} y={370} fill={STROKE} fontSize={11} fontFamily="Inter, sans-serif">
        <tspan x={210} dy={0}>Possible to add a</tspan>
        <tspan x={210} dy={14}>touchpoint for</tspan>
        <tspan x={210} dy={14}>welcome discount</tspan>
      </text>

      <Box x={540} y={450} w={170} h={50} fill={PURPLE_DARK} lines={["Dashboard Page"]} fontSize={13} bold={[true]} />

      {/* Dashboard trunk down to horizontal bus */}
      <line x1={625} y1={500} x2={625} y2={560} stroke={ARROW_GRAY} strokeWidth={1.5} />
      {/* Horizontal bus */}
      <line x1={120} y1={560} x2={1110} y2={560} stroke={ARROW_GRAY} strokeWidth={1.5} />
      {/* Verticals down to each column */}
      <line x1={120} y1={560} x2={120} y2={605} stroke={ARROW_GRAY} strokeWidth={1.5} markerEnd="url(#ia-arrow)" />
      <line x1={490} y1={560} x2={490} y2={605} stroke={ARROW_GRAY} strokeWidth={1.5} markerEnd="url(#ia-arrow)" />
      <line x1={750} y1={560} x2={750} y2={605} stroke={ARROW_GRAY} strokeWidth={1.5} markerEnd="url(#ia-arrow)" />
      <line x1={1050} y1={560} x2={1050} y2={605} stroke={ARROW_GRAY} strokeWidth={1.5} markerEnd="url(#ia-arrow)" />

      {/* ============ COLUMN 1: Left tiles (Stories etc) ============ */}
      <Box x={60} y={610} w={120} h={50} fill={BLUE} lines={["Stories"]} />
      <Box x={60} y={680} w={120} h={60} fill={BLUE} lines={["DNA", "Snapshot"]} />
      <Box x={60} y={760} w={120} h={70} fill={BLUE} lines={["Potential", "Matches", "Cards"]} />
      <Box x={60} y={850} w={120} h={50} fill={BLUE} lines={["Notifications"]} />
      <Box x={60} y={920} w={120} h={60} fill={BLUE} lines={["User", "Profile"]} />
      <Box x={60} y={1000} w={120} h={60} fill={BLUE} lines={["Knowledge", "Section"]} />

      {/* Arrows from col1 tiles to col2 expansions */}
      {/* DNA Snapshot → My DNA Page */}
      <line x1={180} y1={710} x2={218} y2={645} stroke={ARROW_GRAY} strokeWidth={1.2} markerEnd="url(#ia-arrow)" />
      {/* Potential Matches → Match details popover */}
      <line x1={180} y1={795} x2={218} y2={770} stroke={ARROW_GRAY} strokeWidth={1.2} markerEnd="url(#ia-arrow)" />
      {/* Notifications → Clear all */}
      <line x1={180} y1={875} x2={218} y2={875} stroke={ARROW_GRAY} strokeWidth={1.2} markerEnd="url(#ia-arrow)" />
      {/* User Profile → Profile... */}
      <line x1={180} y1={950} x2={218} y2={950} stroke={ARROW_GRAY} strokeWidth={1.2} markerEnd="url(#ia-arrow)" />
      {/* Knowledge → Page with article lists */}
      <line x1={180} y1={1030} x2={218} y2={1030} stroke={ARROW_GRAY} strokeWidth={1.2} markerEnd="url(#ia-arrow)" />

      {/* ============ COLUMN 2 ============ */}
      <Box x={220} y={620} w={120} h={50} fill={GREEN} lines={["My DNA Page"]} />
      <Box x={220} y={745} w={120} h={50} fill={GREEN} lines={["Match details", "popover"]} fontSize={11} />
      {/* View Family Tree popover (salmon, bulleted) */}
      <Box
        x={360}
        y={715}
        w={140}
        h={110}
        fill={SALMON}
        lines={["View Family", "Tree", "Send", "message", "Request or", "dismiss"]}
        fontSize={11}
        bullets
      />
      <line x1={340} y1={770} x2={358} y2={770} stroke={ARROW_GRAY} strokeWidth={1.2} markerEnd="url(#ia-arrow)" />

      <Box x={220} y={850} w={120} h={50} fill={GREEN} lines={["Clear all"]} />
      <Box x={220} y={925} w={120} h={50} fill={GREEN} lines={["Profile..."]} />
      {/* Delete/Modify account... (salmon) */}
      <Box
        x={360}
        y={895}
        w={170}
        h={100}
        fill={SALMON}
        lines={["Delete / Modify", "account, settings for", "notifications and", "other"]}
        fontSize={11}
      />
      <line x1={340} y1={950} x2={358} y2={945} stroke={ARROW_GRAY} strokeWidth={1.2} markerEnd="url(#ia-arrow)" />

      <Box x={220} y={1005} w={140} h={50} fill={GREEN} lines={["Page with", "article lists"]} fontSize={11} />
      <Box x={380} y={1005} w={120} h={50} fill={GREEN} lines={["Article Page"]} />
      <line x1={360} y1={1030} x2={378} y2={1030} stroke={ARROW_GRAY} strokeWidth={1.2} markerEnd="url(#ia-arrow)" />
      <Box
        x={520}
        y={1005}
        w={150}
        h={70}
        fill={SALMON}
        lines={["Save, Share,", "Read aloud, see", "more like this"]}
        fontSize={11}
      />
      <line x1={500} y1={1030} x2={518} y2={1040} stroke={ARROW_GRAY} strokeWidth={1.2} markerEnd="url(#ia-arrow)" />

      {/* ============ COLUMN 3: Messages ============ */}
      <Box x={430} y={610} w={120} h={40} fill={BLUE} lines={["Messages"]} />
      {/* Children list */}
      <Box x={430} y={665} w={120} h={130} fill={BLUE} lines={["Message...", "Chats", "Search", "Filters"]} fontSize={12} />
      <line x1={490} y1={650} x2={490} y2={663} stroke={ARROW_GRAY} strokeWidth={1.2} markerEnd="url(#ia-arrow)" />

      <Box x={580} y={680} w={120} h={50} fill={GREEN} lines={["Details", "popover"]} fontSize={11} />
      <line x1={550} y1={690} x2={578} y2={700} stroke={ARROW_GRAY} strokeWidth={1.2} markerEnd="url(#ia-arrow)" />

      <Box
        x={720}
        y={660}
        w={120}
        h={100}
        fill={SALMON}
        lines={["View", "Family", "Tree", "Accept or", "reject"]}
        fontSize={11}
        bullets
      />
      <line x1={700} y1={705} x2={718} y2={705} stroke={ARROW_GRAY} strokeWidth={1.2} markerEnd="url(#ia-arrow)" />

      {/* ============ COLUMN 4: Family Tree ============ */}
      <Box x={870} y={610} w={120} h={40} fill={GREEN} lines={["Family Tree"]} fontSize={12} />
      <Box x={870} y={680} w={120} h={50} fill={BLUE} lines={["You"]} />
      <Box x={870} y={745} w={120} h={50} fill={BLUE} lines={["Add Parent"]} />
      <Box x={870} y={810} w={120} h={50} fill={BLUE} lines={["Switch", "views"]} />
      <Box x={870} y={875} w={120} h={50} fill={BLUE} lines={["Search"]} />

      {/* vertical from FT to children */}
      <line x1={930} y1={650} x2={930} y2={678} stroke={ARROW_GRAY} strokeWidth={1.2} markerEnd="url(#ia-arrow)" />

      {/* Add Parent → Add father/mother popover */}
      <Box
        x={1010}
        y={730}
        w={130}
        h={80}
        fill={SALMON}
        lines={["Add father", "Add", "mother"]}
        fontSize={11}
        bullets
      />
      <line x1={990} y1={770} x2={1008} y2={770} stroke={ARROW_GRAY} strokeWidth={1.2} markerEnd="url(#ia-arrow)" />

      {/* Details of information (green) */}
      <Box x={1160} y={745} w={120} h={50} fill={GREEN} lines={["Details of", "information"]} fontSize={11} />
      <line x1={1140} y1={770} x2={1158} y2={770} stroke={ARROW_GRAY} strokeWidth={1.2} markerEnd="url(#ia-arrow)" />

      {/* After adding info loop back to My DNA */}
      <path
        d="M 1280 770 Q 1340 770 1340 660 Q 1340 600 1230 600"
        fill="none"
        stroke={ARROW_GRAY}
        strokeWidth={1.2}
        markerEnd="url(#ia-arrow)"
      />
      <text x={1180} y={690} fill={STROKE} fontSize={11} fontFamily="Inter, sans-serif">
        After adding info
      </text>

      {/* ============ COLUMN 5: My DNA stack — pushed left to fit ============ */}
    </svg>
  );
}
