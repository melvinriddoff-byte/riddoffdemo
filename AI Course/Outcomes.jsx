// Outcomes section

const PLACEMENT_DATA = [
  ['Bangalore',    48, '₹16.5L', '₹28.0L'],
  ['Hyderabad',    39, '₹14.0L', '₹24.5L'],
  ['Kochi',        34, '₹12.8L', '₹22.0L'],
  ['Chennai',      12, '₹13.2L', '₹21.0L'],
  ['Remote / intl.', 9, '₹18.0L', '₹42.0L'],
];

const GCC_PARTNERS = [
  'Acme Fintech', 'Nair Health', 'Backwater Labs', 'Deccan Cloud',
  'Kochi Data Co.', 'Coromandel AI', 'Tritiya Systems', '21 more',
];

function Outcomes() {
  return (
    <section id="outcomes" style={{
      padding: '80px 0',
      background: 'var(--paper-2)',
      borderTop: '1px solid var(--ink)',
      borderBottom: '1px solid var(--ink)',
    }}>
      <SectionHead
        num="03"
        label="§03 · Outcomes"
        title="What hiring panels actually see."
        kicker="We optimise for what happens after the course, not the certificate. These are the artefacts every Track B graduate ships."
      />
      <div style={{ padding: '0 32px', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 48, alignItems: 'start' }}>

        {/* Deliverables list */}
        <div>
          <div style={{ border: '1px solid var(--ink)', background: 'var(--paper)' }}>
            {[
              ['01', 'A deployed agent',    'Containerized, instrumented, live on Hugging Face Spaces. URL in your CV.'],
              ['02', 'A GitHub portfolio',  '5–7 repos with meaningful commit history, docstrings, and unit tests.'],
              ['03', 'A capstone defense',  'A 30-minute recorded design review you can send to any hiring manager.'],
              ['04', 'Three interview stories', 'Structured STAR stories for the three hardest bugs you shipped around.'],
              ['05', 'Riddoff referral',    'Top-quartile graduates routed to 28 partner GCCs in Kochi, Hyderabad, Bangalore.'],
            ].map(([n, title, desc], i, arr) => (
              <div key={n} style={{
                display: 'grid', gridTemplateColumns: '60px 1fr', gap: 20,
                padding: '22px 24px',
                borderBottom: i < arr.length - 1 ? '1px solid var(--rule-strong)' : 'none',
              }}>
                <div className="serif" style={{ fontSize: 36, lineHeight: 1, color: 'var(--accent)' }}>{n}</div>
                <div>
                  <div className="serif" style={{ fontSize: 24, letterSpacing: '-0.01em', marginBottom: 6 }}>{title}</div>
                  <div style={{ color: 'var(--ink-2)', fontSize: 15, lineHeight: 1.45 }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Salary table + GCC partners */}
        <div>
          <div className="mono cap" style={{ color: 'var(--ink-3)', marginBottom: 14 }}>
            Alumni placement · cohorts 03–06 · n = 142
          </div>
          <div style={{ border: '1px solid var(--ink)', background: 'var(--paper)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', padding: '14px 18px', background: 'var(--ink)', color: 'var(--paper)' }}>
              <div className="mono cap">City</div>
              <div className="mono cap">Placed</div>
              <div className="mono cap">Median</div>
              <div className="mono cap">Top 10%</div>
            </div>
            {PLACEMENT_DATA.map((r, i, arr) => (
              <div key={r[0]} style={{
                display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
                padding: '14px 18px',
                borderBottom: i < arr.length - 1 ? '1px solid var(--rule)' : 'none',
                alignItems: 'center',
              }}>
                <div style={{ fontSize: 15 }}>{r[0]}</div>
                <div className="mono" style={{ fontSize: 14 }}>{r[1]}</div>
                <div className="serif" style={{ fontSize: 22, letterSpacing: '-0.01em' }}>{r[2]}</div>
                <div className="mono" style={{ fontSize: 14, color: 'var(--ink-3)' }}>{r[3]}</div>
              </div>
            ))}
          </div>
          <div className="mono" style={{ fontSize: 11, color: 'var(--ink-3)', marginTop: 10 }}>
            Self-reported within 180 days of graduation. Verified against offer letters for top-quartile figures.
          </div>

          <div style={{ marginTop: 28 }}>
            <div className="mono cap" style={{ color: 'var(--ink-3)', marginBottom: 14 }}>Partner GCCs · extract</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {GCC_PARTNERS.map(c => (
                <div key={c} className="mono cap" style={{
                  padding: '8px 10px', border: '1px solid var(--rule-strong)',
                  background: c === '21 more' ? 'var(--ink)' : 'var(--paper)',
                  color: c === '21 more' ? 'var(--paper)' : 'var(--ink-2)',
                }}>{c}</div>
              ))}
            </div>
            <div className="mono" style={{ fontSize: 11, color: 'var(--ink-3)', marginTop: 10 }}>
              Partner names shown as placeholders pending publication rights.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Outcomes });
