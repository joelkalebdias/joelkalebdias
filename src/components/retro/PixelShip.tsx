export default function PixelShip({ size = 56 }: { size?: number }) {
  // Chunky pixel-art spaceship, points right. Draws on a 16x10 grid, scaled up.
  const px = size / 16;
  const rects: Array<[number, number, number, number, string]> = [
    // body outline (dark)
    [3, 4, 9, 1, "#1a1a2e"],
    [3, 5, 1, 2, "#1a1a2e"],
    [12, 5, 1, 1, "#1a1a2e"],
    [3, 7, 9, 1, "#1a1a2e"],
    // hull light
    [4, 5, 6, 2, "#e6e6fa"],
    // hull shade
    [10, 5, 2, 2, "#8b8bb5"],
    // nose (yellow)
    [12, 4, 2, 4, "#FFEF33"],
    [14, 5, 1, 2, "#FFEF33"],
    [14, 5, 1, 2, "#FFC300"],
    [13, 5, 1, 2, "#FFC300"],
    // cockpit
    [6, 5, 2, 1, "#5ab7e8"],
    [6, 6, 2, 1, "#2e86c1"],
    // fins (pink)
    [4, 3, 3, 1, "#ff5ea8"],
    [4, 8, 3, 1, "#ff5ea8"],
    [3, 2, 2, 1, "#c81d77"],
    [3, 9, 2, 1, "#c81d77"],
    // thruster tip
    [2, 5, 1, 2, "#ff8a3d"],
  ];
  return (
    <svg
      width={size}
      height={(size / 16) * 10}
      viewBox="0 0 16 10"
      shapeRendering="crispEdges"
      aria-hidden
      style={{ display: "block", imageRendering: "pixelated" }}
    >
      {rects.map(([x, y, w, h, fill], i) => (
        <rect key={i} x={x} y={y} width={w} height={h} fill={fill} />
      ))}
    </svg>
  );
}
