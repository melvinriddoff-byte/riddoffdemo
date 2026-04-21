import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// ── Tokens — matched to site theme (hsl vars from index.css) ────────
const WRAP: React.CSSProperties = {
  "--ink":        "#012a4a",   // --foreground / --secondary
  "--ink-2":      "#013a63",   // --accent (slightly lighter navy)
  "--ink-3":      "#4d7a96",   // --muted-foreground
  "--paper":      "#ffffff",   // --background
  "--paper-2":    "#f0f6fc",   // --card (very light blue tint)
  "--paper-3":    "#dceaf5",   // --muted (light blue)
  "--rule":       "#c8d8e6",   // --border
  "--rule-strong":"#a8c4d8",   // stronger border
  "--accent":     "#01497c",   // --primary
  "--accent-ink": "#ffffff",   // --primary-foreground
} as React.CSSProperties;

// ── Primitive components ────────────────────────────────────────────
const mono: React.CSSProperties = { fontFamily: "'JetBrains Mono', 'Courier New', monospace" };
const serif: React.CSSProperties = { fontFamily: "'Playfair Display', 'Georgia', serif" };
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

function Placeholder({ ratio = "4 / 3", label, style }: { ratio?: string; label?: string; style?: React.CSSProperties }) {
  return (
    <div style={{
      aspectRatio: ratio,
      background: "repeating-linear-gradient(135deg, var(--paper-2) 0 6px, var(--paper-3) 6px 12px)",
      border: "1px solid var(--rule-strong)", position: "relative", ...style,
    }}>
      {label && (
        <div style={{ ...mono, ...cap, position: "absolute", left: 10, bottom: 10, background: "var(--paper)", padding: "4px 7px", border: "1px solid var(--rule-strong)", color: "var(--ink-2)" }}>
          {label}
        </div>
      )}
    </div>
  );
}

function SectionHead({ num, label, title, kicker }: { num: string; label: string; title: string; kicker?: string }) {
  return (
    <div style={{ padding: "0 32px", marginBottom: 40 }}>
      <div style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: 24, alignItems: "baseline", borderBottom: "1px solid var(--ink)", paddingBottom: 14 }}>
        <div style={{ ...mono, ...cap, color: "var(--ink-3)" }}>§ {num}</div>
        <div>
          <div style={{ ...mono, ...cap, color: "var(--accent)", marginBottom: 8 }}>{label}</div>
          <h2 style={{ ...serif, margin: 0, fontSize: "clamp(40px, 6vw, 64px)", lineHeight: .95, letterSpacing: "-0.015em", fontWeight: 400, color: "var(--ink)" }}>{title}</h2>
          {kicker && <div style={{ marginTop: 14, maxWidth: 620, color: "var(--ink-2)", fontSize: 17, lineHeight: 1.45 }}>{kicker}</div>}
        </div>
      </div>
    </div>
  );
}

// ── Hero ────────────────────────────────────────────────────────────
function Stat({ k, v, sub }: { k: string; v: string; sub: string }) {
  return (
    <div>
      <div style={{ ...mono, ...cap, color: "var(--ink-3)", marginBottom: 4 }}>{k}</div>
      <div style={{ ...serif, fontSize: 36, lineHeight: 1, letterSpacing: "-0.02em", color: "var(--ink)" }}>{v}</div>
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
          ["Starts", "02 Jun 2026"],
          ["Ends", "08 Sep 2026"],
          ["Duration", "14 weeks"],
          ["Hours", "8 per week"],
          ["Live sessions", "Mon · Wed · Fri"],
          ["Timing", "19:30–21:00 IST"],
          ["Cohort size", "40 max"],
          ["Seats left", "12"],
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
          <div style={{ ...serif, fontSize: 32, letterSpacing: "-0.02em", color: "var(--ink)" }}>₹65,000</div>
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
    <section style={{ padding: "72px 32px 40px", position: "relative", background: "var(--paper)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.25fr 1fr", gap: 48, alignItems: "start", maxWidth: 1200, margin: "0 auto" }}>
        <div>
          <div style={{ display: "flex", gap: 10, marginBottom: 28, flexWrap: "wrap" as const }}>
            <Tag tone="accent">Cohort 07 · Open</Tag>
            <Tag>22 Lectures · 14 Weeks</Tag>
            <Tag tone="ghost">Live · Kochi + Remote</Tag>
          </div>
          <h1 style={{ ...serif, margin: 0, fontSize: "clamp(56px, 9vw, 120px)", lineHeight: .88, letterSpacing: "-0.03em", fontWeight: 400, color: "var(--ink)", overflowWrap: "break-word" as const }}>
            The textbook<br />
            <span style={{ fontStyle: "italic", color: "var(--accent)" }}>that ships</span><br />
            to production.
          </h1>
          <div style={{ marginTop: 34, maxWidth: 560, fontSize: 20, lineHeight: 1.4, color: "var(--ink-2)" }}>
            A 14-week applied AI &amp; MLOps program for engineers who'd rather deploy a RAG agent than read another blog post about one. Built around a 1,400-page working textbook — written, rewritten, and road-tested against real GCC job specs in Kochi, Hyderabad, and Bangalore.
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
        <div style={{ position: "sticky" as const, top: 120 }}>
          <DossierCard />
        </div>
      </div>

      {/* Marginalia bar */}
      <div style={{ maxWidth: 1200, margin: "64px auto 0", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, borderTop: "1px solid var(--ink)", borderBottom: "1px solid var(--rule-strong)" }}>
        {([
          { k: "Written by", v: "Engineers who've shipped to 10M+ users" },
          { k: "Optimised for", v: "GCC hiring panels, not Coursera quizzes" },
          { k: "Opinionated on", v: "LangGraph over CrewAI for real systems" },
          { k: "Allergic to", v: "Jupyter-only \"AI engineers\"" },
        ] as { k: string; v: string }[]).map((r, i) => (
          <div key={r.k} style={{ padding: "20px 24px", borderRight: i < 3 ? "1px solid var(--rule)" : "none" }}>
            <div style={{ ...mono, ...cap, color: "var(--ink-3)", marginBottom: 8 }}>{r.k}</div>
            <div style={{ fontSize: 15, lineHeight: 1.35, color: "var(--ink)" }}>{r.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Tracks ──────────────────────────────────────────────────────────
const TRACKS = [
  {
    id: "A", tag: "Track A", title: "Operator",
    for: "BPO professionals · non-engineers · career switchers",
    price: "₹24,000", duration: "8 weeks",
    blurb: "Build AI workflows without writing Python. Ship client-ready automations using n8n, Make, Lindy, and Zapier AI. Freelance-ready by week 6.",
    modules: ["No-code agents", "Business ops AI", "Upwork / Fiverr playbook", "Regional-language prompting", "Client delivery templates"],
    outcomes: ["First paid client", "Retainer-ready toolkit", "4 working automations"],
    ribbon: "Most accessible",
  },
  {
    id: "B", tag: "Track B", featured: true, title: "Engineer",
    for: "Working software engineers · 1–5 years · GCC aspirants",
    price: "₹65,000", duration: "14 weeks",
    blurb: "The flagship. 22 lectures · 7 sections · 1 production capstone. Python, RAG, CrewAI, LangGraph, MLflow, Docker, FastAPI, observability. Built for hiring panels.",
    modules: ["Advanced prompting", "Multi-agent orchestration", "RAG with ChromaDB", "MLflow + Docker", "LangGraph + guardrails", "FastAPI + CI/CD", "Evaluation (Ragas)", "Deployment capstone"],
    outcomes: ["GitHub portfolio", "Deployed agent", "Interview-ready stories"],
    ribbon: "Flagship",
  },
  {
    id: "C", tag: "Track C", title: "Architect",
    for: "Senior engineers · 5+ years · tech leads · heads of AI",
    price: "₹1,75,000", duration: "10 weeks · fellowship",
    blurb: "A working group, not a course. System design for LLM products at scale: advanced RAG, fine-tuning, cost/latency, red-teaming, governance (DPDP Act, EU AI Act). Taught from Riddoff case studies.",
    modules: ["Hybrid + graph RAG", "LoRA / QLoRA", "Eval at scale · LLM-as-judge", "Cost & latency", "Prompt-injection defence", "Governance & audit", "Build-vs-buy frameworks"],
    outcomes: ["Architecture dossier", "Riddoff alumni network", "Fellowship credential"],
    ribbon: "Invitation only",
  },
];

function TrackCard({ t, last }: { t: typeof TRACKS[0]; last: boolean }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        padding: 28,
        borderRight: last ? "none" : "1px solid var(--ink)",
        background: t.featured ? "var(--ink)" : hover ? "var(--paper-2)" : "transparent",
        color: t.featured ? "var(--paper)" : "var(--ink)",
        position: "relative", minHeight: 640, display: "flex", flexDirection: "column",
        transition: "background .25s ease",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
        <Tag tone={t.featured ? "accent" : "default"}>{t.tag}</Tag>
        <span style={{ ...mono, ...cap, color: t.featured ? "rgba(250,246,236,.5)" : "var(--ink-3)" }}>{t.ribbon}</span>
      </div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
        <div style={{ ...serif, fontSize: 22, opacity: .6 }}>0{t.id === "A" ? 1 : t.id === "B" ? 2 : 3}</div>
        <h3 style={{ ...serif, margin: 0, fontSize: "clamp(48px, 5vw, 68px)", lineHeight: .9, letterSpacing: "-0.02em", fontWeight: 400 }}>{t.title}</h3>
      </div>
      <div style={{ ...mono, marginTop: 10, fontSize: 13, color: t.featured ? "rgba(250,246,236,.6)" : "var(--ink-3)" }}>For: {t.for}</div>
      <div style={{ marginTop: 16, fontSize: 15, lineHeight: 1.45, color: t.featured ? "rgba(250,246,236,.9)" : "var(--ink-2)" }}>{t.blurb}</div>
      <div style={{ marginTop: 22 }}>
        <div style={{ ...mono, ...cap, color: t.featured ? "rgba(250,246,236,.5)" : "var(--ink-3)", marginBottom: 10 }}>What you learn</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {t.modules.map(m => (
            <div key={m} style={{ ...mono, fontSize: 13, display: "flex", gap: 10 }}>
              <span style={{ color: "var(--accent)" }}>→</span><span>{m}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ flex: 1 }} />
      <div style={{ marginTop: 24, paddingTop: 18, borderTop: `1px solid ${t.featured ? "rgba(250,246,236,.2)" : "var(--rule-strong)"}` }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 14 }}>
          <div>
            <div style={{ ...mono, ...cap, color: t.featured ? "rgba(250,246,236,.5)" : "var(--ink-3)" }}>Tuition</div>
            <div style={{ ...serif, fontSize: 40, lineHeight: 1, letterSpacing: "-0.02em" }}>{t.price}</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ ...mono, ...cap, color: t.featured ? "rgba(250,246,236,.5)" : "var(--ink-3)" }}>Duration</div>
            <div style={{ ...mono, fontSize: 14, marginTop: 4 }}>{t.duration}</div>
          </div>
        </div>
        <Btn primary={!t.featured} style={t.featured ? { background: "var(--paper)", color: "var(--ink)", borderColor: "var(--paper)", width: "100%", justifyContent: "center" } : { width: "100%", justifyContent: "center" }}>
          {t.id === "C" ? "Request invitation" : "Apply now"} <Arrow />
        </Btn>
      </div>
    </div>
  );
}

function Tracks() {
  return (
    <section style={{ padding: "80px 0 40px", background: "var(--paper)" }}>
      <SectionHead num="01" label="Three Ladders · One Craft" title="Pick the rung you're on."
        kicker="We run three parallel programs so the curriculum actually fits the student. The content converges at the same destination: shipped production AI that a hiring panel can verify." />
      <div style={{ padding: "0 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, border: "1px solid var(--ink)" }}>
          {TRACKS.map((t, i) => <TrackCard key={t.id} t={t} last={i === TRACKS.length - 1} />)}
        </div>
      </div>
    </section>
  );
}

// ── Syllabus ────────────────────────────────────────────────────────
const SYLLABUS_SECTIONS = [
  { num: "01", title: "The 2026 AI Landscape", weeks: "Wk 01", featured: false, lectures: [["01", "Welcome: Why Applied AI & MLOps", "Reading · Setup"], ["02", "Hype vs. Hiring: What 2026 actually pays for", "Market study"], ["03", "Environment: Colab, GitHub, uv, Cursor", "Hands-on"]] },
  { num: "02", title: "AI Literacy & Advanced Prompting", weeks: "Wk 02", featured: false, lectures: [["04", "The Science of Prompting: CoT & Few-Shot", "Lab"], ["05", "Beyond Chat: Perplexity, NotebookLM, Deep Research", "Workflow"], ["06", "Hallucinations & Bias: When & why AI fails", "Case study"]] },
  { num: "03", title: "Data Engineering & Experimentation", weeks: "Wk 03–04", featured: false, lectures: [["07", "Python for AI: a rapid crash course", "Lab"], ["08", "Data pipelines with Pandas & SQL", "Lab"], ["09", "Experiment tracking with MLflow", "Hands-on"], ["10", "Hugging Face: models, datasets, spaces", "Studio"]] },
  { num: "04", title: "Agents & Orchestration", weeks: "Wk 05–07", featured: true, lectures: [["11", "What agents actually are (and are not)", "Theory"], ["12", "Multi-agent teams with CrewAI", "Build"], ["13", "Tool use, function calling, structured outputs", "Build"], ["14", "RAG with ChromaDB: long-term memory", "Build"], ["14b", "LangGraph: state machines for real systems", "Build · new 2026"]] },
  { num: "05", title: "MLOps: Deployment & Containerization", weeks: "Wk 08–10", featured: false, lectures: [["15", "Docker basics for AI engineers", "Lab"], ["16", "Containerizing your agent for production", "Build"], ["16b", "FastAPI gateways: async, streaming, auth", "Build · new 2026"], ["16c", "CI/CD for AI systems with GitHub Actions", "Build · new 2026"], ["17", "Monitoring data drift & performance", "Lab"]] },
  { num: "06", title: "Evaluation, Guardrails & Observability", weeks: "Wk 11", featured: false, lectures: [["17b", "Evaluation: Ragas, DeepEval, LLM-as-judge", "Lab · new 2026"], ["17c", "Guardrails AI & NeMo Guardrails", "Lab · new 2026"], ["17d", "Observability: Langfuse, cost & token tracking", "Lab · new 2026"]] },
  { num: "07", title: "Ethics, Industry & Career", weeks: "Wk 12", featured: false, lectures: [["18", "AI ethics: bias detection with Fairlearn", "Lab"], ["19", "Fintech & healthcare: domain architectures", "Case studies"], ["20", "Navigating the GCC job market", "Career"]] },
  { num: "08", title: "Capstone & Beyond", weeks: "Wk 13–14", featured: false, lectures: [["21", "Future-proofing your career in AI", "Career"], ["22", "Ship the capstone: review & defense", "Final"]] },
];

function SyllabusRow({ s, defaultOpen }: { s: typeof SYLLABUS_SECTIONS[0]; defaultOpen: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ borderBottom: "1px solid var(--ink)" }}>
      <button onClick={() => setOpen(!open)} style={{ display: "grid", gridTemplateColumns: "80px 2fr 1fr 40px", gap: 24, alignItems: "center", width: "100%", padding: "22px 24px", background: s.featured && !open ? "var(--paper-2)" : "transparent", border: "none", cursor: "pointer", textAlign: "left", fontFamily: "inherit" }}>
        <div style={{ ...mono, ...cap, color: "var(--ink-3)" }}>§ {s.num}</div>
        <div style={{ ...serif, fontSize: 28, letterSpacing: "-0.015em", color: "var(--ink)" }}>{s.title}</div>
        <div style={{ ...mono, ...cap, color: "var(--ink-3)", textAlign: "right" }}>{s.weeks} · {s.lectures.length} lectures</div>
        <div style={{ textAlign: "right", fontSize: 22, color: "var(--ink-3)" }}>{open ? "–" : "+"}</div>
      </button>
      {open && (
        <div style={{ background: "var(--paper-2)", borderTop: "1px solid var(--rule-strong)" }}>
          {s.lectures.map(([n, title, kind], j) => (
            <div key={n} style={{ display: "grid", gridTemplateColumns: "80px 60px 1fr auto", gap: 24, alignItems: "center", padding: "14px 24px", borderBottom: j < s.lectures.length - 1 ? "1px solid var(--rule)" : "none" }}>
              <div />
              <div style={{ ...mono, ...cap, color: "var(--ink-3)" }}>L{n}</div>
              <div style={{ fontSize: 16, color: "var(--ink)" }}>{title}</div>
              <div style={{ ...mono, ...cap, color: kind.includes("new 2026") ? "var(--accent)" : "var(--ink-3)" }}>{kind}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Syllabus() {
  return (
    <section style={{ padding: "60px 0", background: "var(--paper)" }}>
      <SectionHead num="02" label="§02 · The Syllabus" title="Twenty-six lectures. One production system."
        kicker="The Track B curriculum in full. Every lecture is a chapter in the textbook you'll carry in after the course ends. Marked new 2026 are the six gap-filling modules added this year." />
      <div style={{ padding: "0 32px" }}>
        <div style={{ border: "1px solid var(--ink)", borderBottom: "none" }}>
          {SYLLABUS_SECTIONS.map((s, i) => <SyllabusRow key={s.num} s={s} defaultOpen={i === 3} />)}
        </div>
        <div style={{ padding: "18px 24px", border: "1px solid var(--ink)", background: "var(--ink)", color: "var(--paper)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ ...mono, ...cap }}>Total · 26 lectures · 14 weeks · 1 capstone · ~112 hours live</div>
          <Btn small style={{ background: "transparent", color: "var(--paper)", borderColor: "var(--paper)" }}>Full PDF syllabus <Arrow /></Btn>
        </div>
      </div>
    </section>
  );
}

// ── Outcomes ────────────────────────────────────────────────────────
const PLACEMENT_DATA: [string, number, string, string][] = [
  ["Bangalore", 48, "₹16.5L", "₹28.0L"],
  ["Hyderabad", 39, "₹14.0L", "₹24.5L"],
  ["Kochi", 34, "₹12.8L", "₹22.0L"],
  ["Chennai", 12, "₹13.2L", "₹21.0L"],
  ["Remote / intl.", 9, "₹18.0L", "₹42.0L"],
];
const GCC_PARTNERS = ["Acme Fintech", "Nair Health", "Backwater Labs", "Deccan Cloud", "Kochi Data Co.", "Coromandel AI", "Tritiya Systems", "21 more"];

function Outcomes() {
  return (
    <section style={{ padding: "80px 0", background: "var(--paper-2)", borderTop: "1px solid var(--ink)", borderBottom: "1px solid var(--ink)" }}>
      <SectionHead num="03" label="§03 · Outcomes" title="What hiring panels actually see."
        kicker="We optimise for what happens after the course, not the certificate. These are the artefacts every Track B graduate ships." />
      <div style={{ padding: "0 32px", display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 48, alignItems: "start" }}>
        <div style={{ border: "1px solid var(--ink)", background: "var(--paper)" }}>
          {([
            ["01", "A deployed agent", "Containerized, instrumented, live on Hugging Face Spaces. URL in your CV."],
            ["02", "A GitHub portfolio", "5–7 repos with meaningful commit history, docstrings, and unit tests."],
            ["03", "A capstone defense", "A 30-minute recorded design review you can send to any hiring manager."],
            ["04", "Three interview stories", "Structured STAR stories for the three hardest bugs you shipped around."],
            ["05", "Riddoff referral", "Top-quartile graduates routed to 28 partner GCCs in Kochi, Hyderabad, Bangalore."],
          ] as [string, string, string][]).map(([n, title, desc], i, arr) => (
            <div key={n} style={{ display: "grid", gridTemplateColumns: "60px 1fr", gap: 20, padding: "22px 24px", borderBottom: i < arr.length - 1 ? "1px solid var(--rule-strong)" : "none" }}>
              <div style={{ ...serif, fontSize: 36, lineHeight: 1, color: "var(--accent)" }}>{n}</div>
              <div>
                <div style={{ ...serif, fontSize: 24, letterSpacing: "-0.01em", marginBottom: 6, color: "var(--ink)" }}>{title}</div>
                <div style={{ color: "var(--ink-2)", fontSize: 15, lineHeight: 1.45 }}>{desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div style={{ ...mono, ...cap, color: "var(--ink-3)", marginBottom: 14 }}>Alumni placement · cohorts 03–06 · n = 142</div>
          <div style={{ border: "1px solid var(--ink)", background: "var(--paper)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", padding: "14px 18px", background: "var(--ink)", color: "var(--paper)" }}>
              {["City", "Placed", "Median", "Top 10%"].map(h => <div key={h} style={{ ...mono, ...cap }}>{h}</div>)}
            </div>
            {PLACEMENT_DATA.map(([city, placed, median, top], i, arr) => (
              <div key={city} style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", padding: "14px 18px", borderBottom: i < arr.length - 1 ? "1px solid var(--rule)" : "none", alignItems: "center" }}>
                <div style={{ fontSize: 15, color: "var(--ink)" }}>{city}</div>
                <div style={{ ...mono, fontSize: 14, color: "var(--ink)" }}>{placed}</div>
                <div style={{ ...serif, fontSize: 22, letterSpacing: "-0.01em", color: "var(--ink)" }}>{median}</div>
                <div style={{ ...mono, fontSize: 14, color: "var(--ink-3)" }}>{top}</div>
              </div>
            ))}
          </div>
          <div style={{ ...mono, fontSize: 11, color: "var(--ink-3)", marginTop: 10 }}>Self-reported within 180 days of graduation. Verified against offer letters for top-quartile figures.</div>
          <div style={{ marginTop: 28 }}>
            <div style={{ ...mono, ...cap, color: "var(--ink-3)", marginBottom: 14 }}>Partner GCCs · extract</div>
            <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 8 }}>
              {GCC_PARTNERS.map(c => (
                <div key={c} style={{ ...mono, ...cap, padding: "8px 10px", border: "1px solid var(--rule-strong)", background: c === "21 more" ? "var(--ink)" : "var(--paper)", color: c === "21 more" ? "var(--paper)" : "var(--ink-2)" }}>{c}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Instructors ─────────────────────────────────────────────────────
const TEAM = [
  { name: "Razal Rahman.", role: "Lead Instructor · Track B", pill: "Systems · Fintech", bio: "Ex-principal engineer at a Bangalore fintech. Ten years shipping payment systems; last four building LLM products used by 4M monthly actives. Writes the textbook." },
  { name: "Melvin Maichle T.", role: "Fellowship Director · Track C", pill: "Governance · Health", bio: "Architect at a healthcare AI unicorn. DPDP Act practitioner, former regulator consultant. Runs Riddoff's red-team for client case studies." },
  { name: "Nandu K.", role: "Operator Lead · Track A", pill: "No-code · Ops", bio: "Ran a 40-person BPO floor for six years. Now builds n8n and Lindy workflows for Tier-2 clients in Kochi and Coimbatore. Teaches the non-technical track in plain language." },
];
const TESTIMONIALS = [
  { q: "Three weeks in, I deployed my first RAG agent to staging. Four months later I was leading the AI pod at my GCC.", a: "Sreelakshmi V. · Cohort 04 · Kochi" },
  { q: "The textbook alone is worth the tuition. I keep it open on a second monitor during every new project.", a: "Rohit K. · Cohort 05 · Hyderabad" },
  { q: "They teach LangGraph and guardrails like people who've actually debugged them at 3 AM. Because they have.", a: "Meera A. · Cohort 06 · Bangalore" },
];

function Instructors() {
  return (
    <section style={{ padding: "80px 0", background: "var(--paper)" }}>
      <SectionHead num="04" label="§04 · Who teaches" title="Working engineers. Not influencers."
        kicker="Every lecture is taught by someone on-call for a real production system this week." />
      <div style={{ padding: "0 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, border: "1px solid var(--ink)" }}>
          {TEAM.map((p, i) => (
            <div key={p.name} style={{ padding: 28, borderRight: i < 2 ? "1px solid var(--ink)" : "none" }}>
              <Placeholder ratio="4 / 5" label={`portrait · ${p.name.split(" ")[0].toLowerCase()}`} style={{ marginBottom: 20 }} />
              <Tag style={{ marginBottom: 14 }}>{p.pill}</Tag>
              <div style={{ ...serif, fontSize: 36, lineHeight: 1, letterSpacing: "-0.02em", marginBottom: 8, color: "var(--ink)" }}>{p.name}</div>
              <div style={{ ...mono, ...cap, color: "var(--ink-3)", marginBottom: 14 }}>{p.role}</div>
              <div style={{ color: "var(--ink-2)", fontSize: 15, lineHeight: 1.5 }}>{p.bio}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 40, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} style={{ padding: 24, background: "var(--paper-2)", border: "1px solid var(--rule-strong)" }}>
              <div style={{ ...serif, fontSize: 22, lineHeight: 1.3, letterSpacing: "-0.01em", color: "var(--ink)" }}>
                <span style={{ color: "var(--accent)" }}>"</span>{t.q}<span style={{ color: "var(--accent)" }}>"</span>
              </div>
              <div style={{ ...mono, ...cap, color: "var(--ink-3)", marginTop: 18 }}>— {t.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Pricing ─────────────────────────────────────────────────────────
const PLANS = [
  { n: "Operator", track: "A", p: "₹24,000", sub: "or 2 × ₹13,000", featured: false, bullets: ["8 weeks live", "No-code toolkit", "Freelance playbook", "Community for 1 yr"], cta: "Apply" },
  { n: "Engineer", track: "B", p: "₹65,000", sub: "or 3 × ₹22,500 · ISA option", featured: true, bullets: ["14 weeks live", "Textbook + code", "Capstone defense", "Placement referral", "Community for life"], cta: "Apply" },
  { n: "Architect", track: "C", p: "₹1,75,000", sub: "invoiced quarterly", featured: false, bullets: ["10-week fellowship", "Riddoff case studies", "Peer group of 12", "Credential", "Alumni residency"], cta: "Request invite" },
];
const FINE_PRINT: [string, string][] = [
  ["Scholarships", "30% seats · need-based · auto-considered on apply"],
  ["ISA (Track B)", "0 upfront · 12% of salary for 24 months · capped"],
  ["Team plans", "15% off for groups of 3+ from the same GCC"],
  ["Refund", "100% refund · attend all sessions · 30 days post-grad"],
];

function Pricing() {
  return (
    <section style={{ padding: "80px 0", background: "var(--paper-2)", borderTop: "1px solid var(--ink)", borderBottom: "1px solid var(--ink)" }}>
      <SectionHead num="05" label="§05 · Tuition" title="Pay once. Refer forever."
        kicker="Every track has the same return policy: if you attend all live sessions, ship the capstone, and don't feel hiring-ready, we refund 100% within 30 days of graduation." />
      <div style={{ padding: "0 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", border: "1px solid var(--ink)" }}>
          {PLANS.map((t, i, arr) => (
            <div key={t.n} style={{ padding: 32, background: t.featured ? "var(--ink)" : "var(--paper)", color: t.featured ? "var(--paper)" : "var(--ink)", borderRight: i < arr.length - 1 ? "1px solid var(--ink)" : "none" }}>
              <div style={{ ...mono, ...cap, color: t.featured ? "rgba(250,246,236,.5)" : "var(--ink-3)", marginBottom: 10 }}>Track {t.track}</div>
              <div style={{ ...serif, fontSize: 44, lineHeight: 1, letterSpacing: "-0.02em", marginBottom: 18 }}>{t.n}</div>
              <div style={{ ...serif, fontSize: 64, lineHeight: 1, letterSpacing: "-0.03em" }}>{t.p}</div>
              <div style={{ ...mono, marginTop: 6, fontSize: 12, color: t.featured ? "rgba(250,246,236,.6)" : "var(--ink-3)" }}>{t.sub}</div>
              <div style={{ height: 1, background: t.featured ? "rgba(250,246,236,.2)" : "var(--rule-strong)", margin: "22px 0" }} />
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {t.bullets.map(b => (
                  <div key={b} style={{ ...mono, fontSize: 13, display: "flex", gap: 10 }}>
                    <span style={{ color: "var(--accent)" }}>✓</span>{b}
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 30 }}>
                <Btn primary={!t.featured} style={t.featured ? { background: "var(--accent)", borderColor: "var(--accent)", color: "var(--accent-ink)", width: "100%", justifyContent: "center" } : { width: "100%", justifyContent: "center" }}>
                  {t.cta} <Arrow />
                </Btn>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 28, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, border: "1px solid var(--rule-strong)" }}>
          {FINE_PRINT.map(([k, v], i) => (
            <div key={k} style={{ padding: "18px 20px", borderRight: i < 3 ? "1px solid var(--rule)" : "none", background: "var(--paper)" }}>
              <div style={{ ...mono, ...cap, color: "var(--ink-3)", marginBottom: 6 }}>{k}</div>
              <div style={{ fontSize: 14, lineHeight: 1.4, color: "var(--ink-2)" }}>{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── FAQ ──────────────────────────────────────────────────────────────
const FAQ_ITEMS: [string, string][] = [
  ["Do I need a CS degree?", "No. Track B assumes working knowledge of one programming language; we'll bring you up to speed on Python in week 3. Track A assumes none."],
  ["What if I miss a live session?", "Every session is recorded and indexed against the textbook. You can miss up to 4 of 40 sessions in Track B and still qualify for the refund policy."],
  ["Is this remote or in-person?", "Fully remote live. Optional in-person sessions in Kochi once per cohort (capstone demo). Track C fellows meet in person twice."],
  ["What tools do I need?", "A laptop (8GB RAM minimum), a free OpenAI/Anthropic API key for labs, and a GitHub account. We cover API credits for the first two weeks."],
  ["Will you place me?", "We refer — we don't place. Top-quartile graduates get a direct introduction to 28 partner GCCs. The rest is interview work you do, not us."],
  ["Why is Track C invitation-only?", "Because the fellowship teaches from active Riddoff client case studies under NDA. We vet for seniority (5+ years shipping production systems)."],
  ["Does the textbook come free?", "Yes. Physical copy mailed on day 1 for Track B and C. Track A gets the relevant chapters as a non-technical edition."],
  ["Do you use Claude or ChatGPT?", "Both, deliberately. You'll build against Anthropic, OpenAI, and open-source models (via Hugging Face) so you leave model-agnostic."],
];

function FAQ() {
  return (
    <section style={{ padding: "80px 0", background: "var(--paper)" }}>
      <SectionHead num="06" label="§06 · Details" title="Questions we're asked most." />
      <div style={{ padding: "0 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 0, border: "1px solid var(--ink)" }}>
          {FAQ_ITEMS.map(([q, a], i) => (
            <div key={q} style={{ padding: 24, borderRight: i % 2 === 0 ? "1px solid var(--ink)" : "none", borderBottom: i < FAQ_ITEMS.length - 2 ? "1px solid var(--rule-strong)" : "none" }}>
              <div style={{ ...serif, fontSize: 22, lineHeight: 1.2, letterSpacing: "-0.01em", marginBottom: 12, color: "var(--ink)" }}>{q}</div>
              <div style={{ color: "var(--ink-2)", fontSize: 15, lineHeight: 1.5 }}>{a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Finale ───────────────────────────────────────────────────────────
function Finale() {
  return (
    <section style={{ background: "var(--ink)", color: "var(--paper)", padding: "100px 32px 80px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ ...mono, ...cap, color: "rgba(250,246,236,.5)", marginBottom: 24 }}>§07 · End matter</div>
        <h2 style={{ ...serif, margin: 0, fontSize: "clamp(48px, 10vw, 120px)", lineHeight: .9, letterSpacing: "-0.03em", fontWeight: 400, overflowWrap: "break-word" as const }}>
          Apply by <span style={{ fontStyle: "italic", color: "#6ab8de" }}>01 May</span>.<br />
          To join the course.
        </h2>
        <div style={{ marginTop: 40, display: "flex", gap: 14, flexWrap: "wrap" as const }}>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <Btn primary style={{ background: "var(--accent)", color: "var(--accent-ink)", borderColor: "var(--accent)" }}>Apply to Join <Arrow /></Btn>
          </Link>
          <Btn style={{ background: "transparent", color: "var(--paper)", borderColor: "var(--paper)" }}>Book a demo class</Btn>
        </div>
      </div>
    </section>
  );
}

// ── Page ─────────────────────────────────────────────────────────────
export default function AICourse() {
  return (
    <div style={WRAP}>
      {/* Google Fonts for the editorial type system */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=JetBrains+Mono:wght@400;600&display=swap');
      `}</style>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <Hero />
        <Tracks />
        <Syllabus />
        <Outcomes />
        <Instructors />
        <Pricing />
        <FAQ />
        <Finale />
      </motion.div>
    </div>
  );
}
