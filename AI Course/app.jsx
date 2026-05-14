// App root + Tweaks panel

function TweaksPanel({ tweaks, setT, active }) {
  if (!active) return null;
  return (
    <div style={{
      position: 'fixed', right: 20, bottom: 20, zIndex: 9999,
      width: 280, background: 'var(--paper)',
      border: '1px solid var(--ink)',
      boxShadow: '6px 6px 0 var(--ink)',
      padding: 16,
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 12,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <div className="mono cap">Tweaks</div>
        <div className="mono cap" style={{ color: 'var(--ink-3)' }}>C07 · landing</div>
      </div>
      <div style={{ height: 1, background: 'var(--rule-strong)', marginBottom: 12 }} />

      <Field label="Accent">
        <SegBtns
          value={tweaks.accent}
          onChange={v => setT({ accent: v })}
          options={[
            ['oxblood', 'Oxblood'],
            ['ink', 'Ink'],
            ['rust', 'Rust'],
            ['forest', 'Forest'],
            ['cobalt', 'Cobalt'],
          ]}
        />
      </Field>

      <Field label="Hero">
        <SegBtns
          value={tweaks.heroVariant}
          onChange={v => setT({ heroVariant: v })}
          options={[['editorial','Editorial'],['stacked','Stacked']]}
        />
      </Field>

      <Field label="Live ticker">
        <SegBtns
          value={tweaks.showTicker ? 'on' : 'off'}
          onChange={v => setT({ showTicker: v === 'on' })}
          options={[['on','On'],['off','Off']]}
        />
      </Field>

      <Field label="Syllabus">
        <SegBtns
          value={tweaks.denseSyllabus ? 'dense' : 'open'}
          onChange={v => setT({ denseSyllabus: v === 'dense' })}
          options={[['dense','Dense'],['open','Expanded']]}
        />
      </Field>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div style={{ marginBottom: 12 }}>
      <div className="mono cap" style={{ color: 'var(--ink-3)', marginBottom: 6 }}>{label}</div>
      {children}
    </div>
  );
}

function SegBtns({ value, onChange, options }) {
  return (
    <div style={{ display: 'flex', gap: 0, border: '1px solid var(--rule-strong)' }}>
      {options.map(([k, l], i) => (
        <button key={k} onClick={() => onChange(k)} style={{
          flex: 1, padding: '6px 8px', fontSize: 11, fontFamily: 'inherit',
          background: value === k ? 'var(--ink)' : 'transparent',
          color: value === k ? 'var(--paper)' : 'var(--ink)',
          border: 'none', borderRight: i < options.length - 1 ? '1px solid var(--rule-strong)' : 'none',
          cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600,
        }}>{l}</button>
      ))}
    </div>
  );
}

function applyAccent(key) {
  const map = {
    oxblood: 'oklch(0.52 0.14 27)',
    ink:     'oklch(0.28 0.02 60)',
    rust:    'oklch(0.60 0.13 45)',
    forest:  'oklch(0.45 0.10 145)',
    cobalt:  'oklch(0.45 0.15 255)',
  };
  document.documentElement.style.setProperty('--accent', map[key] || map.oxblood);
}

function App() {
  const [tweaks, setTweaks] = React.useState(window.__TWEAKS);
  const [editMode, setEditMode] = React.useState(false);

  React.useEffect(() => { applyAccent(tweaks.accent); }, [tweaks.accent]);

  // Edit-mode protocol
  React.useEffect(() => {
    function handler(e) {
      const d = e.data;
      if (!d || typeof d !== 'object') return;
      if (d.type === '__activate_edit_mode') setEditMode(true);
      if (d.type === '__deactivate_edit_mode') setEditMode(false);
    }
    window.addEventListener('message', handler);
    // Announce availability AFTER listener registered
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', handler);
  }, []);

  function setT(patch) {
    setTweaks(t => {
      const next = { ...t, ...patch };
      window.parent.postMessage({ type: '__edit_mode_set_keys', edits: patch }, '*');
      return next;
    });
  }

  return (
    <>
      {tweaks.showTicker && <Ticker />}
      <Nav />
      <Hero />
      <Tracks />
      <Syllabus />
      <Outcomes />
      <Instructors />
      <Pricing />
      <FAQ />
      <Finale />
      <Footer />
      <TweaksPanel tweaks={tweaks} setT={setT} active={editMode} />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
