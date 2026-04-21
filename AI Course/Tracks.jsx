// Tracks section

const TRACKS = [
  {
    id: 'A', tag: 'Track A',
    title: 'Operator',
    for: 'BPO professionals · non-engineers · career switchers',
    price: '₹24,000', duration: '8 weeks',
    blurb: 'Build AI workflows without writing Python. Ship client-ready automations using n8n, Make, Lindy, and Zapier AI. Freelance-ready by week 6.',
    modules: ['No-code agents', 'Business ops AI', 'Upwork / Fiverr playbook', 'Regional-language prompting', 'Client delivery templates'],
    outcomes: ['First paid client', 'Retainer-ready toolkit', '4 working automations'],
    ribbon: 'Most accessible',
  },
  {
    id: 'B', tag: 'Track B', featured: true,
    title: 'Engineer',
    for: 'Working software engineers · 1–5 years · GCC aspirants',
    price: '₹65,000', duration: '14 weeks',
    blurb: 'The flagship. 22 lectures · 7 sections · 1 production capstone. Python, RAG, CrewAI, LangGraph, MLflow, Docker, FastAPI, observability. Built for hiring panels.',
    modules: ['Advanced prompting', 'Multi-agent orchestration', 'RAG with ChromaDB', 'MLflow + Docker', 'LangGraph + guardrails', 'FastAPI + CI/CD', 'Evaluation (Ragas)', 'Deployment capstone'],
    outcomes: ['GitHub portfolio', 'Deployed agent', 'Interview-ready stories'],
    ribbon: 'Flagship',
  },
  {
    id: 'C', tag: 'Track C',
    title: 'Architect',
    for: 'Senior engineers · 5+ years · tech leads · heads of AI',
    price: '₹1,75,000', duration: '10 weeks · fellowship',
    blurb: 'A working group, not a course. System design for LLM products at scale: advanced RAG, fine-tuning, cost/latency, red-teaming, governance (DPDP Act, EU AI Act). Taught from Riddoff case studies.',
    modules: ['Hybrid + graph RAG', 'LoRA / QLoRA', 'Eval at scale · LLM-as-judge', 'Cost & latency', 'Prompt-injection defence', 'Governance & audit', 'Build-vs-buy frameworks'],
    outcomes: ['Architecture dossier', 'Riddoff alumni network', 'Fellowship credential'],
    ribbon: 'Invitation only',
  },
];

function TrackCard({ t, last }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        padding: 28,
        borderRight: last ? 'none' : '1px solid var(--ink)',
        background: t.featured ? 'var(--ink)' : (hover ? 'var(--paper-2)' : 'transparent'),
        color: t.featured ? 'var(--paper)' : 'var(--ink)',
        position: 'relative',
        minHeight: 640,
        display: 'flex', flexDirection: 'column',
        transition: 'background .25s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
        <Tag tone={t.featured ? 'accent' : 'default'}>{t.tag}</Tag>
        <span className="mono cap" style={{ color: t.featured ? 'rgba(250,246,236,.5)' : 'var(--ink-3)' }}>{t.ribbon}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
        <div className="serif" style={{ fontSize: 22, opacity: .6 }}>0{t.id === 'A' ? 1 : t.id === 'B' ? 2 : 3}</div>
        <h3 className="serif" style={{ margin: 0, fontSize: 68, lineHeight: .9, letterSpacing: '-0.02em', fontWeight: 400 }}>{t.title}</h3>
      </div>
      <div className="mono" style={{ marginTop: 10, fontSize: 13, color: t.featured ? 'rgba(250,246,236,.6)' : 'var(--ink-3)' }}>
        For: {t.for}
      </div>
      <div style={{ marginTop: 16, fontSize: 15, lineHeight: 1.45, color: t.featured ? 'rgba(250,246,236,.9)' : 'var(--ink-2)' }}>
        {t.blurb}
      </div>

      <div style={{ marginTop: 22 }}>
        <div className="mono cap" style={{ color: t.featured ? 'rgba(250,246,236,.5)' : 'var(--ink-3)', marginBottom: 10 }}>What you learn</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {t.modules.map(m => (
            <div key={m} className="mono" style={{ fontSize: 13, display: 'flex', gap: 10 }}>
              <span style={{ color: 'var(--accent)' }}>→</span>
              <span>{m}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ flex: 1 }} />

      <div style={{
        marginTop: 24, paddingTop: 18,
        borderTop: `1px solid ${t.featured ? 'rgba(250,246,236,.2)' : 'var(--rule-strong)'}`,
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 14 }}>
          <div>
            <div className="mono cap" style={{ color: t.featured ? 'rgba(250,246,236,.5)' : 'var(--ink-3)' }}>Tuition</div>
            <div className="serif" style={{ fontSize: 40, lineHeight: 1, letterSpacing: '-0.02em' }}>{t.price}</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div className="mono cap" style={{ color: t.featured ? 'rgba(250,246,236,.5)' : 'var(--ink-3)' }}>Duration</div>
            <div className="mono" style={{ fontSize: 14, marginTop: 4 }}>{t.duration}</div>
          </div>
        </div>
        <Btn primary={!t.featured} style={t.featured ? {
          background: 'var(--paper)', color: 'var(--ink)', borderColor: 'var(--paper)',
          width: '100%', justifyContent: 'center',
        } : { width: '100%', justifyContent: 'center' }}>
          {t.id === 'C' ? 'Request invitation' : 'Apply now'} <Arrow/>
        </Btn>
      </div>
    </div>
  );
}

function Tracks() {
  return (
    <section id="tracks" style={{ padding: '80px 0 40px', background: 'var(--paper)' }}>
      <SectionHead
        num="01"
        label="Three Ladders · One Craft"
        title="Pick the rung you're on."
        kicker="We run three parallel programs so the curriculum actually fits the student. The content converges at the same destination: shipped production AI that a hiring panel can verify."
      />
      <div style={{ padding: '0 32px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, border: '1px solid var(--ink)' }}>
        {TRACKS.map((t, i) => (
          <TrackCard key={t.id} t={t} last={i === TRACKS.length - 1} />
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { Tracks, TrackCard });
