import { RevealPanel } from "@/components/retro/Reveal";
import logoAsset from "@/assets/genelink-logo.png.asset.json";

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

      <div className="relative w-full max-w-[1100px]">
        <img
          src={logoAsset.url}
          alt="GeneLink logo with proportion guides"
          className="w-full h-auto block"
          style={{ imageRendering: "auto" }}
        />
      </div>
    </RevealPanel>
  );
}
