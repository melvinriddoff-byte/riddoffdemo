// Finale — final CTA section

function Finale() {
  return (
    <section style={{ background: 'var(--ink)', color: 'var(--paper)', padding: '100px 32px 80px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div className="mono cap" style={{ color: 'rgba(250,246,236,.5)', marginBottom: 24 }}>§07 · End matter</div>
        <h2 className="serif" style={{
          margin: 0,
          fontSize: 'clamp(56px, 11vw, 140px)',
          lineHeight: .9, letterSpacing: '-0.03em', fontWeight: 400,
          overflowWrap: 'break-word',
        }}>
          Apply by <span style={{ fontStyle: 'italic', color: 'oklch(0.78 0.15 60)' }}>01 May</span>.<br />
          To join the course.
        </h2>

        <div style={{ marginTop: 40, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <Btn primary style={{ background: 'var(--accent)', color: 'var(--accent-ink)', borderColor: 'var(--accent)' }}>
            Apply to Join<Arrow />
          </Btn>
          <Btn style={{ background: 'transparent', color: 'var(--paper)', borderColor: 'var(--paper)' }}>
            Book a demo class
          </Btn>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Finale });
