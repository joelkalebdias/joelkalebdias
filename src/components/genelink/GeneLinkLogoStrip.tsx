import { RevealPanel } from "@/components/retro/Reveal";

const pixelHeading = {
  fontFamily: "'Ac437 IBM CGA', 'Press Start 2P', monospace",
} as const;

export function GeneLinkLogoStrip() {
  return (
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

      <div
        className="relative w-full max-w-[1100px]"
        style={{ aspectRatio: "1100 / 240" }}
      >
        <svg
          viewBox="0 0 1100 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto block"
          aria-label="GeneLink logo reveal with proportion guides"
        >
          {/* Proportion grid lines */}
          <line x1="160" y1="0" x2="160" y2="200" stroke="#3A3A3A" strokeWidth="1" />
          <line x1="300" y1="0" x2="300" y2="200" stroke="#3A3A3A" strokeWidth="1" />
          <line x1="0" y1="200" x2="1100" y2="200" stroke="#3A3A3A" strokeWidth="1" />

          {/* DNA chain icon */}
          <g transform="translate(24, 40)">
            {/* Back strand */}
            <path
              d="M12 0C12 0 0 24 0 52C0 80 12 104 12 104"
              stroke="#B8B8B8"
              strokeWidth="7"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M44 0C44 0 56 24 56 52C56 80 44 104 44 104"
              stroke="#B8B8B8"
              strokeWidth="7"
              strokeLinecap="round"
              fill="none"
            />
            {/* Rungs / links */}
            <ellipse cx="16" cy="22" rx="7" ry="5" fill="#B8B8B8" transform="rotate(-20 16 22)" />
            <ellipse cx="40" cy="22" rx="7" ry="5" fill="#B8B8B8" transform="rotate(20 40 22)" />
            <ellipse cx="14" cy="52" rx="7" ry="5" fill="#B8B8B8" transform="rotate(-20 14 52)" />
            <ellipse cx="42" cy="52" rx="7" ry="5" fill="#B8B8B8" transform="rotate(20 42 52)" />
            <ellipse cx="16" cy="82" rx="7" ry="5" fill="#B8B8B8" transform="rotate(-20 16 82)" />
            <ellipse cx="40" cy="82" rx="7" ry="5" fill="#B8B8B8" transform="rotate(20 40 82)" />
            {/* Chain link ring */}
            <ellipse cx="52" cy="104" rx="14" ry="8" stroke="#B8B8B8" strokeWidth="5" fill="none" transform="rotate(-15 52 104)" />
          </g>

          {/* Wordmark: GeneLink */}
          <text
            x="330"
            y="138"
            fill="#B8B8B8"
            fontFamily="'Manrope', 'Inter', system-ui, sans-serif"
            fontSize="132"
            fontWeight="300"
            letterSpacing="-0.04em"
          >
            Gene
          </text>
          <text
            x="690"
            y="138"
            fill="#B8B8B8"
            fontFamily="'Manrope', 'Inter', system-ui, sans-serif"
            fontSize="132"
            fontWeight="800"
            letterSpacing="-0.04em"
          >
            Link
          </text>

          {/* Proportion markers */}
          <text
            x="230"
            y="230"
            fill="#595959"
            fontFamily="'Manrope', 'Inter', system-ui, sans-serif"
            fontSize="20"
            fontWeight="600"
            textAnchor="middle"
          >
            1/2*X
          </text>
          <text
            x="895"
            y="230"
            fill="#595959"
            fontFamily="'Manrope', 'Inter', system-ui, sans-serif"
            fontSize="20"
            fontWeight="600"
            textAnchor="middle"
          >
            5*X
          </text>
        </svg>
      </div>
    </RevealPanel>
  );
}
