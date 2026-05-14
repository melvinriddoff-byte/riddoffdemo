// Navbar — sticky ticker + navigation bar

const NAV_LINKS = ['Tracks', 'Syllabus', 'Outcomes', 'Instructors', 'Pricing', 'FAQ'];

const TICKER_ITEMS = [
  { k: 'COHORT 07', v: 'Begins 05 May 2026' },
  { k: 'SEATS', v: '12 of 40 remaining', hot: true },
  { k: 'FORMAT', v: 'Mon/Tue/Wed/Thur/Fri · 10:00 IST' },
  { k: 'COHORT 06 PLACEMENT', v: '34 of 38 · median ₹14.2 LPA' },
  { k: 'GCC PARTNERS', v: 'Kochi · UAE · Bangalore' },
  { k: 'NEXT OPEN HOUSE', v: 'Sat 26 Apr · 18:00 IST' },
  { k: 'BUILD COUNT', v: '1,412 agents shipped by alumni' },
];

function Ticker() {
  return (
    <div style={{
      position: 'sticky', top: 0, zIndex: 20,
      background: 'var(--ink)', color: 'var(--paper)',
      borderBottom: '1px solid var(--ink)',
      overflow: 'hidden',
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 11, letterSpacing: '0.06em',
    }}>
      <div style={{
        display: 'flex', gap: 40, padding: '8px 0',
        whiteSpace: 'nowrap',
        animation: 'tickerScrollSmooth 60s linear infinite',
        width: 'max-content',
      }}>
        {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((it, i) => (
          <span key={i} style={{ display: 'inline-flex', gap: 10, alignItems: 'center' }}>
            <span style={{ opacity: .55 }}>{it.k}</span>
            <span style={{ color: it.hot ? 'oklch(0.78 0.15 60)' : 'var(--paper)' }}>{it.v}</span>
            <span style={{ opacity: .3, marginLeft: 30 }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Nav() {
  return (
    <nav style={{
      display: 'grid', gridTemplateColumns: '1fr auto 1fr',
      alignItems: 'center',
      padding: '18px 32px',
      borderBottom: '1px solid var(--rule-strong)',
      background: 'var(--paper)',
      position: 'sticky', top: 34, zIndex: 18,
    }}>
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{
          width: 28, height: 28, background: 'var(--ink)', color: 'var(--paper)',
          display: 'grid', placeItems: 'center',
          fontFamily: "'Melodrama', serif", fontSize: 20, fontStyle: 'italic',
        }}>R</div>
        <div>
          <div className="mono" style={{ fontSize: 13, fontWeight: 600 }}>RIDDOFF</div>
          <div className="mono" style={{ fontSize: 10, color: 'var(--ink-3)', letterSpacing: '0.08em' }}>.</div>
        </div>
      </div>

      {/* Links */}
      <div style={{ display: 'flex', gap: 26, justifyContent: 'center' }}>
        {NAV_LINKS.map(l => (
          <a key={l} href={`#${l.toLowerCase()}`} className="mono cap" style={{ textDecoration: 'none', color: 'var(--ink-2)' }}>
            {l}
          </a>
        ))}
      </div>

      {/* CTA */}
      <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', alignItems: 'center' }}>
        <span className="mono cap" style={{ color: 'var(--ink-3)' }}>.</span>
        <Btn primary small>Apply <Arrow /></Btn>
      </div>
    </nav>
  );
}

Object.assign(window, { Ticker, Nav });
