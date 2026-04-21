// Instructors section

const TEAM = [
  {
    name: 'Razal Rahman.',
    role: 'Lead Instructor · Track B',
    bio: "Ex-principal engineer at a Bangalore fintech. Ten years shipping payment systems; last four building LLM products used by 4M monthly actives. Writes the textbook.",
    pill: 'Systems · Fintech',
  },
  {
    name: 'Melvin Maichle T.',
    role: 'Fellowship Director · Track C',
    bio: "Architect at a healthcare AI unicorn. DPDP Act practitioner, former regulator consultant. Runs Riddoff's red-team for client case studies.",
    pill: 'Governance · Health',
  },
  {
    name: 'Nandu K.',
    role: 'Operator Lead · Track A',
    bio: 'Ran a 40-person BPO floor for six years. Now builds n8n and Lindy workflows for Tier-2 clients in Kochi and Coimbatore. Teaches the non-technical track in plain language.',
    pill: 'No-code · Ops',
  },
];

const TESTIMONIALS = [
  {
    q: 'Three weeks in, I deployed my first RAG agent to staging. Four months later I was leading the AI pod at my GCC.',
    a: 'Sreelakshmi V. · Cohort 04 · Kochi',
  },
  {
    q: 'The textbook alone is worth the tuition. I keep it open on a second monitor during every new project.',
    a: 'Rohit K. · Cohort 05 · Hyderabad',
  },
  {
    q: "They teach LangGraph and guardrails like people who've actually debugged them at 3 AM. Because they have.",
    a: 'Meera A. · Cohort 06 · Bangalore',
  },
];

function Instructors() {
  return (
    <section id="instructors" style={{ padding: '80px 0', background: 'var(--paper)' }}>
      <SectionHead
        num="04"
        label="§04 · Who teaches"
        title="Working engineers. Not influencers."
        kicker="Every lecture is taught by someone on-call for a real production system this week."
      />

      <div style={{ padding: '0 32px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, border: '1px solid var(--ink)' }}>
        {TEAM.map((p, i) => (
          <div key={p.name} style={{ padding: 28, borderRight: i < 2 ? '1px solid var(--ink)' : 'none' }}>
            <Placeholder ratio="4 / 5" label={`portrait · ${p.name.split(' ')[0].toLowerCase()}`} style={{ marginBottom: 20 }} />
            <Tag style={{ marginBottom: 14 }}>{p.pill}</Tag>
            <div className="serif" style={{ fontSize: 40, lineHeight: 1, letterSpacing: '-0.02em', marginBottom: 8 }}>{p.name}</div>
            <div className="mono cap" style={{ color: 'var(--ink-3)', marginBottom: 14 }}>{p.role}</div>
            <div style={{ color: 'var(--ink-2)', fontSize: 15, lineHeight: 1.5 }}>{p.bio}</div>
          </div>
        ))}
      </div>

      {/* Testimonial strip */}
      <div style={{ padding: '0 32px', marginTop: 40 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} style={{ padding: 24, background: 'var(--paper-2)', border: '1px solid var(--rule-strong)' }}>
              <div className="serif" style={{ fontSize: 24, lineHeight: 1.25, letterSpacing: '-0.01em' }}>
                <span style={{ color: 'var(--accent)' }}>"</span>{t.q}<span style={{ color: 'var(--accent)' }}>"</span>
              </div>
              <div className="mono cap" style={{ color: 'var(--ink-3)', marginTop: 18 }}>— {t.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Instructors });
