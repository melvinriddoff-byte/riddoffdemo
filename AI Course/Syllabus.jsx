// Syllabus section

const SYLLABUS_SECTIONS = [
  {
    num: '01', title: 'The 2026 AI Landscape', weeks: 'Wk 01',
    lectures: [
      ['01',  'Welcome: Why Applied AI & MLOps', 'Reading · Setup'],
      ['02',  'Hype vs. Hiring: What 2026 actually pays for', 'Market study'],
      ['03',  'Environment: Colab, GitHub, uv, Cursor', 'Hands-on'],
    ],
  },
  {
    num: '02', title: 'AI Literacy & Advanced Prompting', weeks: 'Wk 02',
    lectures: [
      ['04',  'The Science of Prompting: CoT & Few-Shot', 'Lab'],
      ['05',  'Beyond Chat: Perplexity, NotebookLM, Deep Research', 'Workflow'],
      ['06',  'Hallucinations & Bias: When & why AI fails', 'Case study'],
    ],
  },
  {
    num: '03', title: 'Data Engineering & Experimentation', weeks: 'Wk 03–04',
    lectures: [
      ['07',  'Python for AI: a rapid crash course', 'Lab'],
      ['08',  'Data pipelines with Pandas & SQL', 'Lab'],
      ['09',  'Experiment tracking with MLflow', 'Hands-on'],
      ['10',  'Hugging Face: models, datasets, spaces', 'Studio'],
    ],
  },
  {
    num: '04', title: 'Agents & Orchestration', weeks: 'Wk 05–07', featured: true,
    lectures: [
      ['11',  'What agents actually are (and are not)', 'Theory'],
      ['12',  'Multi-agent teams with CrewAI', 'Build'],
      ['13',  'Tool use, function calling, structured outputs', 'Build'],
      ['14',  'RAG with ChromaDB: long-term memory', 'Build'],
      ['14b', 'LangGraph: state machines for real systems', 'Build · new 2026'],
    ],
  },
  {
    num: '05', title: 'MLOps: Deployment & Containerization', weeks: 'Wk 08–10',
    lectures: [
      ['15',  'Docker basics for AI engineers', 'Lab'],
      ['16',  'Containerizing your agent for production', 'Build'],
      ['16b', 'FastAPI gateways: async, streaming, auth', 'Build · new 2026'],
      ['16c', 'CI/CD for AI systems with GitHub Actions', 'Build · new 2026'],
      ['17',  'Monitoring data drift & performance', 'Lab'],
    ],
  },
  {
    num: '06', title: 'Evaluation, Guardrails & Observability', weeks: 'Wk 11',
    lectures: [
      ['17b', 'Evaluation: Ragas, DeepEval, LLM-as-judge', 'Lab · new 2026'],
      ['17c', 'Guardrails AI & NeMo Guardrails', 'Lab · new 2026'],
      ['17d', 'Observability: Langfuse, cost & token tracking', 'Lab · new 2026'],
    ],
  },
  {
    num: '07', title: 'Ethics, Industry & Career', weeks: 'Wk 12',
    lectures: [
      ['18',  'AI ethics: bias detection with Fairlearn', 'Lab'],
      ['19',  'Fintech & healthcare: domain architectures', 'Case studies'],
      ['20',  'Navigating the GCC job market', 'Career'],
    ],
  },
  {
    num: '08', title: 'Capstone & Beyond', weeks: 'Wk 13–14',
    lectures: [
      ['21',  'Future-proofing your career in AI', 'Career'],
      ['22',  'Ship the capstone: review & defense', 'Final'],
    ],
  },
];

function SyllabusRow({ s, i }) {
  const [open, setOpen] = React.useState(i === 3);
  return (
    <div style={{ borderBottom: '1px solid var(--ink)' }}>
      <button onClick={() => setOpen(!open)} style={{
        display: 'grid', gridTemplateColumns: '80px 2fr 1fr 40px', gap: 24,
        alignItems: 'center', width: '100%',
        padding: '22px 24px',
        background: s.featured && !open ? 'var(--paper-2)' : 'transparent',
        border: 'none', cursor: 'pointer', textAlign: 'left',
        fontFamily: 'inherit',
      }}>
        <div className="mono cap" style={{ color: 'var(--ink-3)' }}>§ {s.num}</div>
        <div className="serif" style={{ fontSize: 28, letterSpacing: '-0.015em' }}>{s.title}</div>
        <div className="mono cap" style={{ color: 'var(--ink-3)', textAlign: 'right' }}>
          {s.weeks} · {s.lectures.length} lectures
        </div>
        <div style={{ textAlign: 'right', fontSize: 22, color: 'var(--ink-3)' }}>{open ? '–' : '+'}</div>
      </button>
      {open && (
        <div style={{ background: 'var(--paper-2)', borderTop: '1px solid var(--rule-strong)' }}>
          {s.lectures.map(([n, title, kind], j) => (
            <div key={n} style={{
              display: 'grid', gridTemplateColumns: '80px 60px 1fr auto', gap: 24,
              alignItems: 'center', padding: '14px 24px',
              borderBottom: j < s.lectures.length - 1 ? '1px solid var(--rule)' : 'none',
            }}>
              <div></div>
              <div className="mono cap" style={{ color: 'var(--ink-3)' }}>L{n}</div>
              <div style={{ fontSize: 16 }}>{title}</div>
              <div className="mono cap" style={{ color: kind.includes('new 2026') ? 'var(--accent)' : 'var(--ink-3)' }}>{kind}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Syllabus() {
  return (
    <section id="syllabus" style={{ padding: '60px 0', background: 'var(--paper)' }}>
      <SectionHead
        num="02"
        label="§02 · The Syllabus"
        title="Twenty-six lectures. One production system."
        kicker="The Track B curriculum in full. Every lecture is a chapter in the textbook you'll carry in after the course ends. Marked new 2026 are the six gap-filling modules added this year for LangGraph, evaluation, FastAPI, CI/CD, guardrails, and observability."
      />
      <div style={{ padding: '0 32px' }}>
        <div style={{ border: '1px solid var(--ink)', borderBottom: 'none' }}>
          {SYLLABUS_SECTIONS.map((s, i) => (
            <SyllabusRow key={s.num} s={s} i={i} />
          ))}
        </div>
        <div style={{
          padding: '18px 24px', border: '1px solid var(--ink)',
          background: 'var(--ink)', color: 'var(--paper)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <div className="mono cap">Total · 26 lectures · 14 weeks · 1 capstone · ~112 hours live</div>
          <Btn small style={{ background: 'transparent', color: 'var(--paper)', borderColor: 'var(--paper)' }}>
            Full PDF syllabus <Arrow/>
          </Btn>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Syllabus, SyllabusRow });
