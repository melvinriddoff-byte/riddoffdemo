// Pricing section

const PLANS = [
  {
    n: 'Operator', track: 'A',
    p: '₹24,000', sub: 'or 2 × ₹13,000',
    bullets: ['8 weeks live', 'No-code toolkit', 'Freelance playbook', 'Community for 1 yr'],
    cta: 'Apply',
  },
  {
    n: 'Engineer', track: 'B',
    p: '₹65,000', sub: 'or 3 × ₹22,500 · ISA option',
    bullets: ['14 weeks live', 'Textbook + code', 'Capstone defense', 'Placement referral', 'Community for life'],
    cta: 'Apply',
    featured: true,
  },
  {
    n: 'Architect', track: 'C',
    p: '₹1,75,000', sub: 'invoiced quarterly',
    bullets: ['10-week fellowship', 'Riddoff case studies', 'Peer group of 12', 'Credential', 'Alumni residency'],
    cta: 'Request invite',
  },
];

const FINE_PRINT = [
  ['Scholarships', '30% seats · need-based · auto-considered on apply'],
  ['ISA (Track B)',  '0 upfront · 12% of salary for 24 months · capped'],
  ['Team plans',    '15% off for groups of 3+ from the same GCC'],
  ['Refund',        '100% refund · attend all sessions · 30 days post-grad'],
];

function Pricing() {
  return (
    <section id="pricing" style={{
      padding: '80px 0',
      background: 'var(--paper-2)',
      borderTop: '1px solid var(--ink)',
      borderBottom: '1px solid var(--ink)',
    }}>
      <SectionHead
        num="05"
        label="§05 · Tuition"
        title="Pay once. Refer forever."
        kicker="Every track has the same return policy: if you attend all live sessions, ship the capstone, and don't feel hiring-ready, we refund 100% within 30 days of graduation. Cohort 03–06: two refund requests, both honoured."
      />
      <div style={{ padding: '0 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', border: '1px solid var(--ink)' }}>
          {PLANS.map((t, i, arr) => (
            <div key={t.n} style={{
              padding: 32,
              background: t.featured ? 'var(--ink)' : 'var(--paper)',
              color: t.featured ? 'var(--paper)' : 'var(--ink)',
              borderRight: i < arr.length - 1 ? '1px solid var(--ink)' : 'none',
            }}>
              <div className="mono cap" style={{ color: t.featured ? 'rgba(250,246,236,.5)' : 'var(--ink-3)', marginBottom: 10 }}>
                Track {t.track}
              </div>
              <div className="serif" style={{ fontSize: 44, lineHeight: 1, letterSpacing: '-0.02em', marginBottom: 18 }}>{t.n}</div>
              <div className="serif" style={{ fontSize: 72, lineHeight: 1, letterSpacing: '-0.03em' }}>{t.p}</div>
              <div className="mono" style={{ marginTop: 6, fontSize: 12, color: t.featured ? 'rgba(250,246,236,.6)' : 'var(--ink-3)' }}>{t.sub}</div>
              <div style={{ height: 1, background: t.featured ? 'rgba(250,246,236,.2)' : 'var(--rule-strong)', margin: '22px 0' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {t.bullets.map(b => (
                  <div key={b} className="mono" style={{ fontSize: 13, display: 'flex', gap: 10 }}>
                    <span style={{ color: 'var(--accent)' }}>✓</span>{b}
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 30 }}>
                <Btn primary={!t.featured} style={t.featured ? {
                  background: 'var(--accent)', borderColor: 'var(--accent)', color: 'var(--accent-ink)',
                  width: '100%', justifyContent: 'center',
                } : { width: '100%', justifyContent: 'center' }}>
                  {t.cta} <Arrow/>
                </Btn>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 28, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, border: '1px solid var(--rule-strong)' }}>
          {FINE_PRINT.map(([k, v], i) => (
            <div key={k} style={{
              padding: '18px 20px',
              borderRight: i < 3 ? '1px solid var(--rule)' : 'none',
              background: 'var(--paper)',
            }}>
              <div className="mono cap" style={{ color: 'var(--ink-3)', marginBottom: 6 }}>{k}</div>
              <div style={{ fontSize: 14, lineHeight: 1.4 }}>{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Pricing });
