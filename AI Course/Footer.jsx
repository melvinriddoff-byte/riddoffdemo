// Footer — site-wide footer with logo, links, and legal bar

const FOOTER_LINKS = [
  ['Programs', ['Track A · Operator', 'Track B · Engineer', 'Track C · Architect', 'Corporate training']],
  ['Company',  ['About', 'Case studies', 'Careers', 'Press']],
  ['Contact',  ['hello@riddoff.co', '+91 484 4xx xxxx', 'Ernakulam, Kerala', '@riddoffco']],
];

function Footer() {
  return (
    <footer style={{
      background: 'var(--ink)', color: 'var(--paper)',
      padding: '60px 32px 40px',
      borderTop: '1px solid rgba(250,246,236,.15)',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Link columns */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 40,
          paddingBottom: 48,
          borderBottom: '1px solid rgba(250,246,236,.15)',
        }}>
          {/* Brand */}
          <div>
            <div style={{
              width: 36, height: 36, background: 'var(--paper)', color: 'var(--ink)',
              display: 'grid', placeItems: 'center',
              fontFamily: "'Melodrama', serif", fontSize: 24, fontStyle: 'italic',
              marginBottom: 14,
            }}>R</div>
            <div style={{ fontSize: 14, lineHeight: 1.6, color: 'rgba(250,246,236,.7)', maxWidth: 280 }}>
              Riddoff is a small applied-AI studio in Kochi. We build production AI for clients, and we teach what we learn from that work.
            </div>
          </div>

          {/* Nav columns */}
          {FOOTER_LINKS.map(([heading, items]) => (
            <div key={heading}>
              <div className="mono cap" style={{ color: 'rgba(250,246,236,.5)', marginBottom: 14 }}>{heading}</div>
              {items.map(item => (
                <div key={item} style={{ fontSize: 14, marginBottom: 10, color: 'rgba(250,246,236,.85)' }}>
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Legal bar */}
        <div style={{
          marginTop: 28,
          display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12,
          fontSize: 11, color: 'rgba(250,246,236,.4)',
        }} className="mono cap">
          <div>© 2026 Riddoff Labs Pvt Ltd · CIN 0000000</div>
          <div>DPDP Act compliant · ISO 27001 (in process)</div>
          <div>Designed for the craft, not the feed.</div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Footer });
