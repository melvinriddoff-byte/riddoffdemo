import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Cpu, Target, Rocket } from "lucide-react";

const introCards = [
  {
    icon: Cpu,
    title: "Applied AI Program",
    subtitle: "14 weeks · live · production-first.",
    desc: "A rigorous AI & MLOps curriculum built around a 1,400-page working textbook. Every lecture maps to a chapter. Every chapter maps to a real system engineers ship at work.",
  },
  {
    icon: Target,
    title: "GCC-Optimised",
    subtitle: "Built for the hiring panels, not Coursera.",
    desc: "Curriculum reverse-engineered from 200+ GCC job descriptions across Kochi, Hyderabad, and Bangalore. You learn exactly what interviewers test — and nothing they don't.",
  },
  {
    icon: Rocket,
    title: "Ship to Production",
    subtitle: "A deployed agent. A GitHub portfolio. A defense.",
    desc: "You leave with a containerised multi-agent RAG system live on Hugging Face Spaces, a documented GitHub portfolio, and a 30-minute capstone review you can send to any hiring manager.",
  },
];

const WRAP: React.CSSProperties = {
  "--ink": "#012a4a",
  "--ink-2": "#013a63",
  "--ink-3": "#4d7a96",
  "--paper": "#ffffff",
  "--paper-2": "#f0f6fc",
  "--paper-3": "#dceaf5",
  "--rule": "#c8d8e6",
  "--rule-strong": "#a8c4d8",
  "--accent": "#01497c",
  "--accent-ink": "#ffffff",
} as React.CSSProperties;

const STYLES = `
  .aic-img-wrap { position: relative; overflow: hidden; margin-bottom: 20px; border: 1px solid var(--rule-strong); }
  .aic-img-wrap img { width: 100%; aspect-ratio: 4/5; object-fit: cover; object-position: top; display: block; transition: transform 0.4s ease; }
  .aic-img-wrap:hover img { transform: scale(1.04); }
  .aic-pad { padding-left: 32px; padding-right: 32px; }
  .aic-sh { display: grid; grid-template-columns: 80px 1fr; gap: 24px; align-items: baseline; }
  .aic-hero { display: grid; grid-template-columns: 1.25fr 1fr; gap: 48px; align-items: start; max-width: 1200px; margin: 0 auto; }
  .aic-dossier-sticky { position: sticky; top: 120px; }

  @media (max-width: 768px) {
    .aic-pad { padding-left: 16px; padding-right: 16px; }
    .aic-sh { grid-template-columns: 32px 1fr; gap: 12px; }
    .aic-hero { grid-template-columns: 1fr; gap: 32px; }
    .aic-dossier-sticky { position: static; }
  }
`;

const mono: React.CSSProperties = { fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 600 };
const serif: React.CSSProperties = { fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 700 };
const cap: React.CSSProperties = { textTransform: "uppercase" as const, letterSpacing: "0.08em", fontSize: 11 };

function Rule({ strong, style }: { strong?: boolean; style?: React.CSSProperties }) {
  return <div style={{ height: 1, background: strong ? "var(--rule-strong)" : "var(--rule)", width: "100%", ...style }} />;
}

type TagTone = "default" | "accent" | "ink" | "ghost";
function Tag({ children, tone, style }: { children: React.ReactNode; tone?: TagTone; style?: React.CSSProperties }) {
  const tones: Record<TagTone, { bg: string; fg: string; border: string }> = {
    default: { bg: "transparent", fg: "var(--ink)", border: "var(--rule-strong)" },
    accent: { bg: "var(--accent)", fg: "var(--accent-ink)", border: "var(--accent)" },
    ink: { bg: "var(--ink)", fg: "var(--paper)", border: "var(--ink)" },
    ghost: { bg: "var(--paper-2)", fg: "var(--ink-2)", border: "transparent" },
  };
  const t = tones[tone ?? "default"];
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 8px", background: t.bg, color: t.fg, border: `1px solid ${t.border}`, borderRadius: 2, ...mono, ...cap, ...style }}>
      {children}
    </span>
  );
}

function Btn({ children, primary, small, onClick, style }: {
  children: React.ReactNode; primary?: boolean; small?: boolean;
  onClick?: () => void; style?: React.CSSProperties;
}) {
  const [hover, setHover] = useState(false);
  const base: React.CSSProperties = {
    display: "inline-flex", alignItems: "center", gap: 10,
    ...mono, fontWeight: 600, fontSize: small ? 12 : 13, ...cap,
    padding: small ? "10px 14px" : "16px 22px",
    border: "1px solid var(--ink)",
    background: primary ? (hover ? "var(--accent)" : "var(--ink)") : (hover ? "var(--ink)" : "transparent"),
    color: primary ? "var(--paper)" : (hover ? "var(--paper)" : "var(--ink)"),
    cursor: "pointer", borderRadius: 2, transition: "all .15s ease",
    borderColor: primary && hover ? "var(--accent)" : "var(--ink)",
    ...style,
  };
  return (
    <button onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={onClick} style={base}>
      {children}
    </button>
  );
}

function Arrow({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  );
}

function Stat({ k, v, sub }: { k: string; v: string; sub: string }) {
  return (
    <div>
      <div style={{ ...mono, ...cap, color: "var(--ink-3)", marginBottom: 4 }}>{k}</div>
      <div style={{ ...serif, fontSize: 24, lineHeight: 1, letterSpacing: "-0.02em", color: "var(--ink)" }}>{v}</div>
      <div style={{ ...mono, fontSize: 11, color: "var(--ink-3)", marginTop: 4 }}>{sub}</div>
    </div>
  );
}

function DossierCard() {
  return (
    <div style={{ background: "var(--paper-2)", border: "1px solid var(--ink)", padding: 24, position: "relative", boxShadow: "8px 8px 0 var(--ink)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <div style={{ ...mono, ...cap }}>Dossier · C07</div>
        <div style={{ ...mono, ...cap, color: "var(--accent)" }}>● LIVE</div>
      </div>
      <Rule strong />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}>
        {([
          ["Starts", "02 Jun 2026"], ["Ends", "08 Sep 2026"],
          ["Duration", "14 weeks"], ["Hours", "8 per week"],
          ["Live sessions", "Mon · Wed · Fri"], ["Timing", "19:30–21:00 IST"],
          ["Cohort size", "40 max"], ["Seats left", "12"],
        ] as [string, string][]).map(([k, v], i) => (
          <div key={k} style={{ padding: "12px 0", borderBottom: i < 6 ? "1px solid var(--rule)" : "none", paddingLeft: i % 2 ? 14 : 0, borderLeft: i % 2 ? "1px solid var(--rule)" : "none" }}>
            <div style={{ ...mono, ...cap, color: "var(--ink-3)", fontSize: 10 }}>{k}</div>
            <div style={{ ...mono, fontSize: 14, marginTop: 2, color: "var(--ink)" }}>{v}</div>
          </div>
        ))}
      </div>
      <Rule strong style={{ margin: "16px 0" }} />
      <div style={{ ...mono, ...cap, color: "var(--ink-3)", marginBottom: 10 }}>Capstone</div>
      <div style={{ fontSize: 15, lineHeight: 1.4, marginBottom: 14, color: "var(--ink-2)" }}>
        Ship a containerised multi-agent RAG system to Hugging Face Spaces with MLflow tracking, cost instrumentation, and a FastAPI gateway. Graded by two practicing engineers.
      </div>
      <Rule strong style={{ margin: "12px 0" }} />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ ...mono, ...cap, color: "var(--ink-3)" }}>Tuition</div>
          <div style={{ ...serif, fontSize: 22, letterSpacing: "-0.02em", color: "var(--ink)" }}>₹65,000</div>
          <div style={{ ...mono, fontSize: 11, color: "var(--ink-3)" }}>or 3 × ₹22,500 · ISA available</div>
        </div>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <Btn primary small>Apply <Arrow /></Btn>
        </Link>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="aic-pad" style={{ paddingTop: 72, paddingBottom: 40, position: "relative", background: "var(--paper)" }}>
      <div className="aic-hero">
        <div>
          <div style={{ display: "flex", gap: 10, marginBottom: 28, flexWrap: "wrap" as const }}>
            <Tag tone="accent">Cohort 07 · Open</Tag>
            <Tag>22 Lectures · 14 Weeks</Tag>
            <Tag tone="ghost">Live · Kochi + Remote</Tag>
          </div>
          <h1 style={{ ...serif, margin: 0, fontSize: "clamp(36px, 5vw, 72px)", lineHeight: .88, letterSpacing: "-0.03em", color: "var(--ink)", overflowWrap: "break-word" as const }}>
            The textbook<br />
            <span style={{ fontStyle: "italic", color: "var(--accent)" }}>that ships to</span><br />
            production.
          </h1>
          <div style={{ marginTop: 34, maxWidth: 560, fontSize: 16, lineHeight: 1.4, color: "var(--ink-2)" }}>
            A 14-week applied AI & MLOps program for engineers who'd rather deploy a RAG agent than read another blog post about one. Built around a 1,400-page working textbook — written, rewritten, and road-tested against real GCC job specs in Kochi, Hyderabad, and Bangalore.
          </div>
          <div style={{ marginTop: 36, display: "flex", gap: 12, flexWrap: "wrap" as const }}>
            <Link to="/contact" style={{ textDecoration: "none" }}><Btn primary>Apply to Cohort 07 <Arrow /></Btn></Link>
            <Btn>Download Syllabus (PDF)</Btn>
            <Btn>Watch 3-min overview</Btn>
          </div>
          <div style={{ marginTop: 28, display: "flex", gap: 32, flexWrap: "wrap" as const }}>
            <Stat k="Alumni placed" v="142" sub="across 28 GCCs" />
            <Stat k="Median offer" v="₹14.2L" sub="cohorts 03–06" />
            <Stat k="Completion" v="89%" sub="cohort average" />
            <Stat k="NPS" v="71" sub="cohort 06" />
          </div>
        </div>
        <div className="aic-dossier-sticky">
          <DossierCard />
        </div>
      </div>
    </section>
  );
}

function CoursePageHero() {
  return (
    <>
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-hero">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-melodrama text-3xl sm:text-4xl md:text-6xl font-extrabold text-foreground mb-4 sm:mb-6">
              AI Course
            </h1>
            <p className="font-satoshi text-lg text-muted-foreground">
              The textbook that ships to production — a 14-week applied AI & MLOps program for engineers who'd rather deploy than read about deploying.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {introCards.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-card rounded-2xl p-5 sm:p-8 shadow-card border border-border"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                <item.icon className="text-primary" size={28} />
              </div>
              <h3 className="font-melodrama text-xl font-bold text-foreground mb-1">{item.title}</h3>
              <p className="font-satoshi text-sm font-medium text-primary mb-3">{item.subtitle}</p>
              <p className="font-satoshi text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

export default function Masterclass() {
  return (
    <div style={WRAP}>
      <style>{STYLES}</style>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <CoursePageHero />
        <Hero />
      </motion.div>
    </div>
  );
}
