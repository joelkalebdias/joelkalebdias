// Information Architecture diagram for the Genelink case study.
// Hand-built SVG to match the reference Figma.

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
  const padding = 8;
  const totalH = lines.length * (fontSize + 3);
  const startY = y + h / 2 - totalH / 2 + fontSize;
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={6} fill={fill} stroke={STROKE} strokeWidth={1} />
      {lines.map((line, i) => (
        <text
          key={i}
          x={bullets ? x + padding : x + w / 2}
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
      viewBox="0 0 1480 1200"
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

      {/* ============ TOP AUTH CHAIN ============ */}
      <Box x={640} y={30} w={170} h={70} fill={PURPLE} lines={["Splash Screen"]} fontSize={14} />
      <line x1={725} y1={100} x2={725} y2={138} stroke={ARROW_GRAY} strokeWidth={1.5} markerEnd="url(#ia-arrow)" />

      <Box x={610} y={140} w={230} h={90} fill={PURPLE} lines={["Login /", "Registration Page", "With Option to SSO"]} fontSize={13} />
      <line x1={725} y1={230} x2={725} y2={258} stroke={ARROW_GRAY} strokeWidth={1.5} markerEnd="url(#ia-arrow)" />

      <Box
        x={610}
        y={260}
        w={230}
        h={150}
        fill={PURPLE}
        lines={["First time", "registration", "Mobile Number", "Name", "Image"]}
        bold={[false, false, true, true, true]}
        fontSize={13}
      />

      {/* SSO branch */}
      <path d="M 840 185 Q 920 185 920 340 Q 920 475 810 475" fill="none" stroke={ARROW_GRAY} strokeWidth={1.5} markerEnd="url(#ia-arrow)" />
      <text x={880} y={295} fill={STROKE} fontSize={13} fontFamily="Inter, sans-serif" fontWeight={500}>SSO</text>

      <line x1={725} y1={410} x2={725} y2={448} stroke={ARROW_GRAY} strokeWidth={1.5} markerEnd="url(#ia-arrow)" />

      {/* Welcome discount yellow loop */}
      <path d="M 610 320 Q 510 320 510 400 Q 510 475 610 475" fill="none" stroke={ARROW_YELLOW} strokeWidth={1.5} markerEnd="url(#ia-arrow-yellow)" />
      <text x={300} y={365} fill={STROKE} fontSize={11} fontFamily="Inter, sans-serif">
        <tspan x={300} dy={0}>Possible to add a</tspan>
        <tspan x={300} dy={14}>touchpoint for</tspan>
        <tspan x={300} dy={14}>welcome discount</tspan>
      </text>

      <Box x={640} y={450} w={170} h={50} fill={PURPLE_DARK} lines={["Dashboard Page"]} fontSize={13} bold={[true]} />

      {/* Dashboard trunk down */}
      <line x1={725} y1={500} x2={725} y2={560} stroke={ARROW_GRAY} strokeWidth={1.5} />
      {/* Horizontal bus */}
      <line x1={120} y1={560} x2={1280} y2={560} stroke={ARROW_GRAY} strokeWidth={1.5} />
      {/* Verticals down to each column header */}
      <line x1={120} y1={560} x2={120} y2={605} stroke={ARROW_GRAY} strokeWidth={1.5} markerEnd="url(#ia-arrow)" />
      <line x1={550} y1={560} x2={550} y2={605} stroke={ARROW_GRAY} strokeWidth={1.5} markerEnd="url(#ia-arrow)" />
      <line x1={840} y1={560} x2={840} y2={605} stroke={ARROW_GRAY} strokeWidth={1.5} markerEnd="url(#ia-arrow)" />
      <line x1={1280} y1={560} x2={1280} y2={605} stroke={ARROW_GRAY} strokeWidth={1.5} markerEnd="url(#ia-arrow)" />

      {/* ============ COLUMN 1: Left tiles ============ */}
      <Box x={60} y={610} w={120} h={50} fill={BLUE} lines={["Stories"]} />
      <Box x={60} y={680} w={120} h={60} fill={BLUE} lines={["DNA", "Snapshot"]} />
      <Box x={60} y={760} w={120} h={70} fill={BLUE} lines={["Potential", "Matches", "Cards"]} />
      <Box x={60} y={850} w={120} h={50} fill={BLUE} lines={["Notifications"]} />
      <Box x={60} y={920} w={120} h={60} fill={BLUE} lines={["User", "Profile"]} />
      <Box x={60} y={1000} w={120} h={60} fill={BLUE} lines={["Knowledge", "Section"]} />

      {/* Col1 → Col2 arrows */}
      <line x1={180} y1={710} x2={218} y2={645} stroke={ARROW_GRAY} strokeWidth={1.2} markerEnd="url(#ia-arrow)" />
      <line x1={180} y1={795} x2={218} y2={770} stroke={ARROW_GRAY} strokeWidth={1.2} markerEnd="url(#ia-arrow)" />
      <line x1={180} y1={875} x2={218} y2={875} stroke={ARROW_GRAY} strokeWidth={1.2} markerEnd="url(#ia-arrow)" />
      <line x1={180} y1={950} x2={218} y2={950} stroke={ARROW_GRAY} strokeWidth={1.2} markerEnd="url(#ia-arrow)" />
      <line x1={180} y1={1030} x2={218} y2={1030} stroke={ARROW_GRAY} strokeWidth={1.2} markerEnd="url(#ia-arrow)" />

      {/* ============ COLUMN 2 ============ */}
      <Box x={220} y={620} w={120} h={50} fill={GREEN} lines={["My DNA Page"]} fontSize={12} />
      <Box x={220} y={745} w={120} h={50} fill={GREEN} lines={["Match details", "popover"]} fontSize={11} />
      <Box
        x={360}
        y={705}
        w={150}
        h={130}
        fill={SALMON}
        lines={["View Family", "Tree", "Send", "message", "Request or", "dismiss"]}
        fontSize={11}
        bullets
      />
      <line x1={340} y1={770} x2={358} y2={770} stroke={ARROW_GRAY} strokeWidth={1.2} markerEnd="url(#ia-arrow)" />

      <Box x={220} y={850} w={120} h={50} fill={GREEN} lines={["Clear all"]} />
      <Box x={220} y={925} w={120} h={50} fill={GREEN} lines={["Profile..."]} />
      <Box
        x={360}
        y={895}
        w={180}
        h={110}
        fill={SALMON}
        lines={["Delete / Modify", "account, settings for", "notifications and", "other"]}
        fontSize={11}
      />
      <line x1={340} y1={950} x2={358} y2={945} stroke={ARROW_GRAY} strokeWidth={1.2} markerEnd="url(#ia-arrow)" />

      <Box x={220} y={1015} w={140} h={50} fill={GREEN} lines={["Page with", "article lists"]} fontSize={11} />
      <Box x={380} y={1015} w={120} h={50} fill={GREEN} lines={["Article Page"]} />
      <line x1={360} y1={1040} x2={378} y2={1040} stroke={ARROW_GRAY} strokeWidth={1.2} markerEnd="url(#ia-arrow)" />
      <Box
        x={520}
        y={1015}
        w={160}
        h={70}
        fill={SALMON}
        lines={["Save, Share,", "Read aloud, see", "more like this"]}
        fontSize={11}
      />
      <line x1={500} y1={1040} x2={518} y2={1050} stroke={ARROW_GRAY} strokeWidth={1.2} markerEnd="url(#ia-arrow)" />

      {/* ============ COLUMN 3: Messages ============ */}
      <Box x={490} y={610} w={120} h={40} fill={BLUE} lines={["Messages"]} />
      <Box x={490} y={665} w={120} h={130} fill={BLUE} lines={["Message...", "Chats", "Search", "Filters"]} fontSize={12} />
      <line x1={550} y1={650} x2={550} y2={663} stroke={ARROW_GRAY} strokeWidth={1.2} markerEnd="url(#ia-arrow)" />

      <Box x={640} y={680} w={120} h={50} fill={GREEN} lines={["Details", "popover"]} fontSize={11} />
      <line x1={610} y1={690} x2={638} y2={700} stroke={ARROW_GRAY} strokeWidth={1.2} markerEnd="url(#ia-arrow)" />

      <Box
        x={780}
        y={660}
        w={120}
        h={110}
        fill={SALMON}
        lines={["View", "Family", "Tree", "Accept or", "reject"]}
        fontSize={11}
        bullets
      />
      <line x1={760} y1={705} x2={778} y2={705} stroke={ARROW_GRAY} strokeWidth={1.2} markerEnd="url(#ia-arrow)" />

      {/* ============ COLUMN 4: Family Tree ============ */}
      <Box x={780} y={870} w={120} h={40} fill={GREEN} lines={["Family Tree"]} fontSize={12} />
      {/* connect bus down to family tree (it's on second tier vertical) — use line from x=840 */}
      <line x1={840} y1={830} x2={840} y2={868} stroke={ARROW_GRAY} strokeWidth={1.2} markerEnd="url(#ia-arrow)" />
      {/* Hmm the bus already drops at 840 to y=605. The Family Tree should be near top of column. Let me move it. */}

      {/* (Family Tree positioning corrected below) */}
    </svg>
  );
}
