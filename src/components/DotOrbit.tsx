import { useEffect, useRef } from "react";

interface Ring {
  radius: number;
  tilt: number;      // degrees, X-axis perspective tilt
  speed: number;     // seconds per full revolution
  dotCount: number;
  dotSize: number;
  color: string;
  offset: number;    // starting phase offset in degrees
}

const rings: Ring[] = [
  { radius: 80,  tilt: 68, speed: 5,  dotCount: 1, dotSize: 7,  color: "rgba(1,73,124,0.9)",   offset: 0 },
  { radius: 130, tilt: 60, speed: 8,  dotCount: 2, dotSize: 5,  color: "rgba(0,119,182,0.75)", offset: 45 },
  { radius: 185, tilt: 55, speed: 12, dotCount: 3, dotSize: 4,  color: "rgba(1,73,124,0.6)",   offset: 20 },
  { radius: 245, tilt: 50, speed: 18, dotCount: 4, dotSize: 3,  color: "rgba(0,150,210,0.45)", offset: 70 },
  { radius: 310, tilt: 45, speed: 24, dotCount: 5, dotSize: 2.5,color: "rgba(1,42,74,0.35)",   offset: 10 },
];

const DotOrbit = ({ size = 680 }: { size?: number }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    const cx = size / 2;
    const cy = size / 2;

    const draw = (timestamp: number) => {
      ctx.clearRect(0, 0, size, size);

      // Draw rings (ellipses from tilt) then dots on top
      rings.forEach((ring) => {
        const scaleY = Math.sin((ring.tilt * Math.PI) / 180);
        const rx = ring.radius;
        const ry = ring.radius * scaleY;

        // Orbit ellipse
        ctx.beginPath();
        ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(1,73,124,0.1)";
        ctx.lineWidth = 1;
        ctx.stroke();

        // Dots on ring
        for (let d = 0; d < ring.dotCount; d++) {
          const phase = ((ring.offset + (d * 360) / ring.dotCount) * Math.PI) / 180;
          const elapsed = timestamp / 1000;
          const angle = phase + (elapsed / ring.speed) * Math.PI * 2;

          const x = cx + Math.cos(angle) * rx;
          const y = cy + Math.sin(angle) * ry;

          // depth cue: dots "behind" the center are smaller/dimmer
          const depthFactor = (Math.sin(angle) + 1) / 2; // 0 (back) to 1 (front)
          const alphaMod = 0.35 + depthFactor * 0.65;
          const sizeMod = 0.6 + depthFactor * 0.4;
          const ds = ring.dotSize * sizeMod;

          // Glow
          const grd = ctx.createRadialGradient(x, y, 0, x, y, ds * 3.5);
          grd.addColorStop(0, ring.color.replace(/[\d.]+\)$/, `${alphaMod * 0.6})`));
          grd.addColorStop(1, "rgba(0,0,0,0)");
          ctx.beginPath();
          ctx.arc(x, y, ds * 3.5, 0, Math.PI * 2);
          ctx.fillStyle = grd;
          ctx.fill();

          // Dot core
          ctx.beginPath();
          ctx.arc(x, y, ds, 0, Math.PI * 2);
          ctx.fillStyle = ring.color.replace(/[\d.]+\)$/, `${alphaMod})`);
          ctx.fill();
        }
      });

      // Center orb glow
      const centerGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, 40);
      centerGlow.addColorStop(0, "rgba(1,73,124,0.35)");
      centerGlow.addColorStop(0.5, "rgba(0,119,182,0.12)");
      centerGlow.addColorStop(1, "rgba(0,0,0,0)");
      ctx.beginPath();
      ctx.arc(cx, cy, 40, 0, Math.PI * 2);
      ctx.fillStyle = centerGlow;
      ctx.fill();

      // Center dot
      ctx.beginPath();
      ctx.arc(cx, cy, 6, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(1,73,124,0.8)";
      ctx.fill();

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animRef.current);
  }, [size]);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: size, height: size, display: "block" }}
      aria-hidden="true"
    />
  );
};

export default DotOrbit;
