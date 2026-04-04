import { useEffect, useRef } from "react";

interface OrbProps {
  size?: number;
  className?: string;
}

const Orb = ({ size = 420, className = "" }: OrbProps) => {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const orb = orbRef.current;
    if (!orb) return;

    let frame: number;
    let t = 0;

    const animate = () => {
      t += 0.004;
      const x = Math.sin(t * 0.9) * 14;
      const y = Math.cos(t * 0.7) * 10;
      const scale = 1 + Math.sin(t * 1.1) * 0.03;
      orb.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  const s = size;
  const half = s / 2;

  return (
    <div
      className={`relative flex-shrink-0 ${className}`}
      style={{ width: s, height: s }}
      aria-hidden="true"
    >
      {/* Outer glow */}
      <div
        style={{
          position: "absolute",
          inset: -s * 0.18,
          borderRadius: "50%",
          background: `radial-gradient(circle at 50% 50%, rgba(1,73,124,0.22) 0%, rgba(0,119,182,0.1) 40%, transparent 70%)`,
          filter: `blur(${s * 0.08}px)`,
          animation: "orb-pulse 4s ease-in-out infinite",
        }}
      />

      {/* Main sphere */}
      <div
        ref={orbRef}
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          background: `
            radial-gradient(circle at 35% 30%, rgba(255,255,255,0.55) 0%, transparent 45%),
            radial-gradient(circle at 65% 70%, rgba(0,80,150,0.45) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(1,73,124,1) 0%, rgba(1,42,74,1) 55%, rgba(0,20,50,1) 100%)
          `,
          boxShadow: `
            0 0 ${half * 0.5}px ${half * 0.15}px rgba(1,73,124,0.45),
            0 0 ${half * 1.2}px ${half * 0.3}px rgba(0,119,182,0.18),
            inset 0 ${half * 0.08}px ${half * 0.25}px rgba(255,255,255,0.18),
            inset 0 -${half * 0.1}px ${half * 0.3}px rgba(0,0,0,0.5)
          `,
        }}
      >
        {/* Specular highlight */}
        <div
          style={{
            position: "absolute",
            top: "12%",
            left: "20%",
            width: "38%",
            height: "28%",
            borderRadius: "50%",
            background: "radial-gradient(ellipse at 40% 35%, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.1) 60%, transparent 100%)",
            filter: `blur(${s * 0.012}px)`,
          }}
        />

        {/* Secondary shimmer */}
        <div
          style={{
            position: "absolute",
            bottom: "18%",
            right: "16%",
            width: "20%",
            height: "14%",
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(100,180,255,0.35) 0%, transparent 80%)",
            filter: `blur(${s * 0.015}px)`,
          }}
        />

        {/* Animated inner shimmer ring */}
        <div
          style={{
            position: "absolute",
            inset: "8%",
            borderRadius: "50%",
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.08)",
            animation: "orb-ring 6s linear infinite",
          }}
        />
      </div>

      <style>{`
        @keyframes orb-pulse {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.06); }
        }
        @keyframes orb-ring {
          0% { transform: rotate(0deg) scale(1); opacity: 0.4; }
          50% { transform: rotate(180deg) scale(1.04); opacity: 0.1; }
          100% { transform: rotate(360deg) scale(1); opacity: 0.4; }
        }
      `}</style>
    </div>
  );
};

export default Orb;
