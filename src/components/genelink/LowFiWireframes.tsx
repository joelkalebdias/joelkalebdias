// Low-fidelity wireframes section for Genelink case study.
// Reproduces the Figma frame: 5 phone wireframes (Dashboard, Image, Login,
// Family tree, Chats) + 3 paper sketch images with a handwritten caption.

const S = 1.25; // scale factor applied to Figma pixel coordinates
const px = (n: number) => `${n * S}px`;

const BORDER = "0.459px solid #969696";
const GREY = "#D9D9D9";
const DARK = "#373737";
const MID = "#9E9E9E";

type RectProps = {
  x: number;
  y: number;
  w: number;
  h: number;
  bg?: string;
  border?: string;
  radius?: number;
};
function Rect({ x, y, w, h, bg = GREY, border, radius }: RectProps) {
  return (
    <div
      style={{
        position: "absolute",
        left: px(x),
        top: px(y),
        width: px(w),
        height: px(h),
        background: bg,
        border,
        borderRadius: radius ? px(radius) : undefined,
      }}
    />
  );
}

function Circle({ x, y, size = 27 }: { x: number; y: number; size?: number }) {
  return (
    <div
      style={{
        position: "absolute",
        left: px(x),
        top: px(y),
        width: px(size),
        height: px(size),
        background: GREY,
        border: "0.5px solid #000",
        borderRadius: "50%",
      }}
    />
  );
}

function Label({
  x,
  y,
  children,
  size = 11,
  center,
  color = "#000",
}: {
  x: number;
  y: number;
  children: React.ReactNode;
  size?: number;
  center?: boolean;
  color?: string;
}) {
  return (
    <div
      style={{
        position: "absolute",
        left: px(x),
        top: px(y),
        color,
        fontFamily: "Manrope, system-ui, sans-serif",
        fontSize: px(size),
        fontWeight: 700,
        lineHeight: 1.5,
        letterSpacing: "-0.01em",
        textAlign: center ? "center" : "left",
      }}
    >
      {children}
    </div>
  );
}

function Phone({
  width,
  height,
  children,
}: {
  width: number;
  height: number;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        position: "relative",
        width: px(width),
        height: px(height),
        borderRadius: px(3.671),
        border: BORDER,
        background: "#FFF",
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      {children}
    </div>
  );
}

/* -------------------------------- Phones -------------------------------- */

function Dashboard() {
  return (
    <Phone width={137} height={544}>
      <Label x={5} y={6}>Dashboard</Label>
      <Circle x={101} y={6} size={14} />
      <Circle x={119} y={6} size={14} />
      {/* Row of circular tabs */}
      {[5, 40, 75, 109, 144, 179, 213].map((x, i) => (
        <Circle key={i} x={x} y={34} />
      ))}
      {/* MY DNA card */}
      <Rect x={5} y={68} w={128} h={77} />
      <Rect x={9} y={72} w={121} h={26} bg={MID} />
      <Rect x={9} y={104} w={68} h={6} bg={MID} />
      <Rect x={9} y={114} w={68} h={6} bg={MID} />
      <Rect x={9} y={127} w={121} h={12} bg={DARK} />
      <Label x={14} y={77}>MY DNA card</Label>
      {/* Close match */}
      <Rect x={5} y={152} w={128} h={65} />
      <Label x={14} y={161}>Close match</Label>
      {/* List with avatars */}
      <Rect x={5} y={221} w={128} h={41} />
      <Rect x={5} y={266} w={128} h={41} />
      <Circle x={13} y={184} />
      <Circle x={13} y={229} />
      <Circle x={13} y={274} />
      <Rect x={43} y={187} w={68} h={6} bg={MID} />
      <Rect x={43} y={198} w={46} h={6} bg={MID} />
      <Rect x={43} y={233} w={68} h={6} bg={MID} />
      <Rect x={43} y={243} w={46} h={6} bg={MID} />
      <Rect x={43} y={278} w={68} h={6} bg={MID} />
      <Rect x={43} y={288} w={46} h={6} bg={MID} />
      {/* Articles */}
      <Label x={5} y={315}>Articles</Label>
      <Rect x={5} y={339} w={128} h={77} />
      <Rect x={9} y={343} w={121} h={26} bg={MID} />
      <Rect x={9} y={375} w={68} h={6} bg={MID} />
      <Rect x={9} y={385} w={68} h={6} bg={MID} />
      <Rect x={9} y={397} w={121} h={12} bg={DARK} />
      <Rect x={5} y={420} w={128} h={77} />
      <Rect x={9} y={424} w={121} h={26} bg={MID} />
      <Rect x={9} y={456} w={68} h={6} bg={MID} />
      <Rect x={9} y={466} w={68} h={6} bg={MID} />
      <Rect x={9} y={479} w={121} h={12} bg={DARK} />
      {/* Bottom tab bar */}
      <Rect x={0} y={510} w={137} h={34} bg={DARK} />
      <Circle x={5} y={516} size={22} />
      <Circle x={40} y={516} size={22} />
      <Circle x={75} y={516} size={22} />
      <Circle x={111} y={516} size={22} />
    </Phone>
  );
}

function ImageScreen() {
  return (
    <Phone width={137} height={273}>
      <Rect x={4} y={10} w={128} h={158} />
      <Label x={49} y={79} size={14}>Image</Label>
      <Rect x={5} y={176} w={127} h={6} />
      <Rect x={5} y={186} w={127} h={6} />
      <Rect x={5} y={197} w={56} h={6} />
      <Rect x={4} y={219} w={128} h={20} bg={DARK} />
      <Rect x={4} y={244} w={62} h={20} bg="transparent" border="0.5px solid #373737" />
      <Rect x={71} y={244} w={62} h={20} bg="transparent" border="0.5px solid #373737" />
    </Phone>
  );
}

function Login() {
  return (
    <Phone width={137} height={273}>
      <Label x={9} y={6} size={14}>&lt;</Label>
      <Label x={53} y={6}>Logo</Label>
      <Rect x={5} y={41} w={56} h={6} />
      <Rect x={5} y={52} w={127} h={25} />
      <Rect x={5} y={82} w={56} h={6} />
      <Rect x={5} y={94} w={127} h={25} />
      <Rect x={4} y={245} w={128} h={20} bg={DARK} />
      <Label x={55} y={247} color="#FFF">Login</Label>
    </Phone>
  );
}

function FamilyTree() {
  return (
    <Phone width={137} height={273}>
      <Label x={9} y={6} size={14}>&lt;</Label>
      <Label x={41} y={8}>Family tree</Label>
      {/* Top row of + circles */}
      <Circle x={9} y={62} />
      <Circle x={42} y={62} />
      <Circle x={73} y={62} />
      <Circle x={102} y={62} />
      <Label x={19} y={67}>+</Label>
      <Label x={52} y={67}>+</Label>
      <Label x={82} y={67}>+</Label>
      <Label x={112} y={67}>+</Label>
      {/* Connector lines (approximate) */}
      <div
        style={{
          position: "absolute",
          left: px(38),
          top: px(90),
          width: px(63),
          height: px(1),
          background: "#000",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: px(69),
          top: px(90),
          width: px(1),
          height: px(30),
          background: "#000",
        }}
      />
      {/* Parents */}
      <Circle x={25} y={119} />
      <Circle x={87} y={119} />
      <Label x={22} y={143}>Father</Label>
      <Label x={86} y={145}>Mother</Label>
      {/* Line down to Me */}
      <div
        style={{
          position: "absolute",
          left: px(52),
          top: px(132),
          width: px(35),
          height: px(1),
          background: "#000",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: px(72),
          top: px(132),
          width: px(1),
          height: px(40),
          background: "#000",
        }}
      />
      <Circle x={59} y={170} />
      <Label x={65} y={204}>Me</Label>
    </Phone>
  );
}

function Chats() {
  return (
    <Phone width={137} height={273}>
      <Label x={9} y={6} size={14}>&lt;</Label>
      <Label x={53} y={8}>Chats</Label>
      <Rect x={4} y={32} w={128} h={25} bg="#EEE" />
      <Label x={53} y={36}>Search</Label>
      {[62, 108, 155, 201].map((y, i) => (
        <Rect key={i} x={4} y={y} w={128} h={42} />
      ))}
      {[70, 117, 163, 210].map((y, i) => (
        <Circle key={i} x={12} y={y} />
      ))}
      {[74, 120, 167, 213].map((y, i) => (
        <Rect key={i} x={42} y={y} w={68} h={6} bg={MID} />
      ))}
      {[84, 131, 178, 224].map((y, i) => (
        <Rect key={i} x={42} y={y} w={46} h={6} bg={MID} />
      ))}
    </Phone>
  );
}

/* -------------------------------- Section -------------------------------- */

const SKETCHES = [
  "https://api.builder.io/api/v1/image/assets/TEMP/8c8d05a8cd4bf969ea433a1b873a992205db72b3?width=345",
  "https://api.builder.io/api/v1/image/assets/TEMP/a0782f893535c719fc7df612e98402b95f50a26d?width=273",
  "https://api.builder.io/api/v1/image/assets/TEMP/3fbd5c4ef414bd1c8296416d72f0d1613161b0cf?width=349",
];

export function LowFiWireframes() {
  return (
    <div className="px-4 pt-5 pb-6">
      {/* Wireframes: Dashboard tall on the left, other 4 in a balanced 2x2 grid */}
      <div
        className="flex flex-wrap items-start justify-center"
        style={{ gap: px(16) }}
      >
        <Dashboard />
        <div
          className="grid grid-cols-2"
          style={{ gap: px(16) }}
        >
          <ImageScreen />
          <Login />
          <FamilyTree />
          <Chats />
        </div>
      </div>

      {/* Paper sketches + handwritten caption */}
      <div className="mt-10 flex flex-col lg:flex-row items-center lg:items-end justify-center gap-6 lg:gap-8">
        <img
          src={SKETCHES[0]}
          alt="Paper sketch — onboarding + home flow"
          className="h-auto w-auto object-contain"
          style={{ maxHeight: 320 }}
          loading="lazy"
        />
        <img
          src={SKETCHES[1]}
          alt="Paper sketch — family tree flow"
          className="h-auto w-auto object-contain"
          style={{ maxHeight: 200 }}
          loading="lazy"
        />
        <img
          src={SKETCHES[2]}
          alt="Paper sketch — dashboard layout"
          className="h-auto w-auto object-contain"
          style={{ maxHeight: 240 }}
          loading="lazy"
        />
        <p
          className="max-w-[240px] text-center lg:text-left"
          style={{
            color: "#320032",
            fontFamily: "'Ac437 ATI 8x16', ui-monospace, monospace",
            fontSize: 18,
            lineHeight: 1.3,
            letterSpacing: "-0.02em",
            margin: 0,
          }}
        >
          I also made some paper sketches to help me orient myself
        </p>
      </div>
    </div>
  );
}
