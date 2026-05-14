// Shared small components

const { useState, useEffect, useRef, useMemo } = React;

function Rule({ strong, style }) {
  return <div style={{ height: 1, background: strong ? 'var(--rule-strong)' : 'var(--rule)', width: '100%', ...style }} />;
}

function VRule({ strong, style }) {
  return <div style={{ width: 1, background: strong ? 'var(--rule-strong)' : 'var(--rule)', alignSelf: 'stretch', ...style }} />;
}

function Tag({ children, tone, style }) {
  const tones = {
    default: { bg: 'transparent', fg: 'var(--ink)', border: 'var(--rule-strong)' },
    accent:  { bg: 'var(--accent)', fg: 'var(--accent-ink)', border: 'var(--accent)' },
    ink:     { bg: 'var(--ink)', fg: 'var(--paper)', border: 'var(--ink)' },
    ghost:   { bg: 'var(--paper-2)', fg: 'var(--ink-2)', border: 'transparent' },
  };
  const t = tones[tone || 'default'];
  return (
    <span className="mono cap" style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '4px 8px',
      background: t.bg, color: t.fg,
      border: `1px solid ${t.border}`,
      borderRadius: 2,
      ...style
    }}>{children}</span>
  );
}

function Btn({ children, primary, onClick, small, style }) {
  const [hover, setHover] = useState(false);
  const base = {
    display: 'inline-flex', alignItems: 'center', gap: 10,
    fontFamily: "'JetBrains Mono', monospace",
    fontWeight: 600, fontSize: small ? 12 : 13,
    textTransform: 'uppercase', letterSpacing: '0.08em',
    padding: small ? '10px 14px' : '16px 22px',
    border: '1px solid var(--ink)',
    background: primary ? 'var(--ink)' : 'transparent',
    color: primary ? 'var(--paper)' : 'var(--ink)',
    cursor: 'pointer',
    borderRadius: 2,
    transition: 'all .15s ease',
    textDecoration: 'none',
    ...style,
  };
  if (hover) {
    if (primary) { base.background = 'var(--accent)'; base.borderColor = 'var(--accent)'; }
    else { base.background = 'var(--ink)'; base.color = 'var(--paper)'; }
  }
  return (
    <button onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} onClick={onClick} style={base}>
      {children}
    </button>
  );
}

function Arrow({ size=14 }) {
  return <svg width={size} height={size} viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/></svg>;
}

// Striped placeholder — for "imagery not drawn"
function Placeholder({ ratio = '4 / 3', label, tint, style }) {
  return (
    <div style={{
      aspectRatio: ratio,
      background: tint === 'ink'
        ? 'repeating-linear-gradient(135deg, #141210 0 6px, #1c1815 6px 12px)'
        : 'repeating-linear-gradient(135deg, var(--paper-2) 0 6px, var(--paper-3) 6px 12px)',
      border: '1px solid var(--rule-strong)',
      position: 'relative',
      ...style,
    }}>
      {label && (
        <div className="mono cap" style={{
          position: 'absolute', left: 10, bottom: 10,
          background: 'var(--paper)', padding: '4px 7px',
          border: '1px solid var(--rule-strong)', color: 'var(--ink-2)',
        }}>{label}</div>
      )}
    </div>
  );
}

// Section header
function SectionHead({ num, label, title, kicker, align='left' }) {
  return (
    <div style={{ padding: '0 32px', marginBottom: 40 }}>
      <div style={{
        display: 'grid', gridTemplateColumns: '80px 1fr auto', gap: 24,
        alignItems: 'baseline', borderBottom: '1px solid var(--ink)',
        paddingBottom: 14,
      }}>
        <div className="mono cap" style={{ color: 'var(--ink-3)' }}>§ {num}</div>
        <div>
          <div className="mono cap" style={{ color: 'var(--accent)', marginBottom: 8 }}>{label}</div>
          <h2 className="serif" style={{ margin: 0, fontSize: 64, lineHeight: .95, letterSpacing: '-0.015em' }}>{title}</h2>
          {kicker && <div style={{ marginTop: 14, maxWidth: 620, color: 'var(--ink-2)', fontSize: 17, lineHeight: 1.45 }}>{kicker}</div>}
        </div>
        <div className="mono cap" style={{ color: 'var(--ink-3)' }}>{align}</div>
      </div>
    </div>
  );
}

Object.assign(window, { Rule, VRule, Tag, Btn, Arrow, Placeholder, SectionHead });
