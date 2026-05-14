// Hero section

function Stat({ k, v, sub }) {
  return (
    <div>
      <div className="mono cap" style={{ color: 'var(--ink-3)', marginBottom: 4 }}>{k}</div>
      <div className="serif" style={{ fontSize: 36, lineHeight: 1, letterSpacing: '-0.02em' }}>{v}</div>
      <div className="mono" style={{ fontSize: 11, color: 'var(--ink-3)', marginTop: 4 }}>{sub}</div>
    </div>
  );
}

function DossierCard() {
  return (
    <div style={{
      background: 'var(--paper-2)',
      border: '1px solid var(--ink)',
      padding: 24,
      position: 'relative',
      boxShadow: '8px 8px 0 var(--ink)',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <div className="mono cap">Dossier · C07</div>
        <div className="mono cap" style={{ color: 'var(--accent)' }}>● LIVE</div>
      </div>
      <Rule strong />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
        {[
          ['Starts', '02 Jun 2026'],
          ['Ends', '08 Sep 2026'],
          ['Duration', '14 weeks'],
          ['Hours', '8 per week'],
          ['Live sessions', 'Mon · Wed · Fri'],
          ['Timing', '19:30–21:00 IST'],
          ['Cohort size', '40 max'],
          ['Seats left', '12'],
        ].map(([k, v], i) => (
          <div key={i} style={{
            padding: '12px 0',
            borderBottom: i < 6 ? '1px solid var(--rule)' : 'none',
            paddingLeft: i % 2 ? 14 : 0,
            borderLeft: i % 2 ? '1px solid var(--rule)' : 'none',
          }}>
            <div className="mono cap" style={{ color: 'var(--ink-3)', fontSize: 10 }}>{k}</div>
            <div className="mono" style={{ fontSize: 14, marginTop: 2 }}>{v}</div>
          </div>
        ))}
      </div>

      <Rule strong style={{ margin: '16px 0' }} />

      <div className="mono cap" style={{ color: 'var(--ink-3)', marginBottom: 10 }}>Capstone</div>
      <div style={{ fontSize: 15, lineHeight: 1.4, marginBottom: 14 }}>
        Ship a containerised multi-agent RAG system to Hugging Face Spaces with MLflow tracking,
        cost instrumentation, and a FastAPI gateway. Graded by two practicing engineers.
      </div>

      <Rule strong style={{ margin: '12px 0' }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div className="mono cap" style={{ color: 'var(--ink-3)' }}>Tuition</div>
          <div className="serif" style={{ fontSize: 32, letterSpacing: '-0.02em' }}>₹65,000</div>
          <div className="mono" style={{ fontSize: 11, color: 'var(--ink-3)' }}>or 3 × ₹22,500 · ISA available</div>
        </div>
        <Btn primary small>Apply <Arrow/></Btn>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section style={{ padding: '56px 32px 40px', position: 'relative' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.25fr 1fr', gap: 48, alignItems: 'start' }}>
        {/* Left: display */}
        <div>
          <div style={{ display: 'flex', gap: 10, marginBottom: 28, flexWrap: 'wrap' }}>
            <Tag tone="accent">Cohort 07 · Open</Tag>
            <Tag>22 Lectures · 14 Weeks</Tag>
            <Tag tone="ghost">Live · Kochi + Remote</Tag>
          </div>
          <h1 className="serif" style={{
            margin: 0,
            fontSize: 'clamp(68px, 9.5vw, 148px)',
            lineHeight: 0.88,
            letterSpacing: '-0.03em',
            fontWeight: 400,
            overflowWrap: 'break-word',
          }}>
            The textbook<br/>
            <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>that ships</span><br/>
            to production.
          </h1>
          <div style={{
            marginTop: 34, maxWidth: 560,
            fontSize: 20, lineHeight: 1.4, color: 'var(--ink-2)',
            textWrap: 'pretty',
          }}>
            A 14-week applied AI &amp; MLOps program for engineers who'd rather deploy a RAG agent
            than read another blog post about one. Built around a 1,400-page working textbook
            — written, rewritten, and road-tested against real GCC job specs in Kochi, Hyderabad, and Bangalore.
          </div>
          <div style={{ marginTop: 36, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Btn primary>Apply to Cohort 07 <Arrow/></Btn>
            <Btn>Download Syllabus (PDF)</Btn>
            <Btn>Watch 3-min overview</Btn>
          </div>
          <div style={{ marginTop: 28, display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            <Stat k="Alumni placed" v="142" sub="across 28 GCCs" />
            <Stat k="Median offer" v="₹14.2L" sub="cohorts 03–06" />
            <Stat k="Completion" v="89%" sub="cohort average" />
            <Stat k="NPS" v="71" sub="cohort 06" />
          </div>
        </div>

        {/* Right: dossier card */}
        <div style={{ position: 'sticky', top: 120 }}>
          <DossierCard />
        </div>
      </div>

      {/* Marginalia */}
      <div style={{
        marginTop: 64,
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0,
        borderTop: '1px solid var(--ink)', borderBottom: '1px solid var(--rule-strong)',
      }}>
        {[
          { k: 'Written by',    v: "Engineers who've shipped to 10M+ users" },
          { k: 'Optimised for', v: 'GCC hiring panels, not Coursera quizzes' },
          { k: 'Opinionated on',v: 'LangGraph over CrewAI for real systems' },
          { k: 'Allergic to',   v: 'Jupyter-only "AI engineers"' },
        ].map((r, i) => (
          <div key={i} style={{
            padding: '20px 24px',
            borderRight: i < 3 ? '1px solid var(--rule)' : 'none',
          }}>
            <div className="mono cap" style={{ color: 'var(--ink-3)', marginBottom: 8 }}>{r.k}</div>
            <div style={{ fontSize: 15, lineHeight: 1.35 }}>{r.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { Hero, DossierCard, Stat });
