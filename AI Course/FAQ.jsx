// FAQ section

const FAQ_ITEMS = [
  [
    'Do I need a CS degree?',
    "No. Track B assumes working knowledge of one programming language; we'll bring you up to speed on Python in week 3. Track A assumes none. Most Track C fellows have no formal CS background — only shipped products.",
  ],
  [
    'What if I miss a live session?',
    "Every session is recorded and indexed against the textbook. You can miss up to 4 of 40 sessions in Track B and still qualify for the refund policy. Beyond that, we'll ask you to catch up in office hours.",
  ],
  [
    'Is this remote or in-person?',
    'Fully remote live. Optional in-person sessions in Kochi once per cohort (capstone demo). Track C fellows meet in person twice.',
  ],
  [
    'What tools do I need?',
    'A laptop (8GB RAM minimum), a free OpenAI/Anthropic API key for labs, and a GitHub account. We cover API credits for the first two weeks.',
  ],
  [
    'Will you place me?',
    "We refer — we don't place. Top-quartile graduates get a direct introduction to 28 partner GCCs. The rest is interview work you do, not us.",
  ],
  [
    'Why is Track C invitation-only?',
    'Because the fellowship teaches from active Riddoff client case studies under NDA. We vet for seniority (5+ years shipping production systems) and sign a participation agreement.',
  ],
  [
    'Does the textbook come free?',
    'Yes. Physical copy mailed on day 1 for Track B and C. Track A gets the relevant chapters as a non-technical edition.',
  ],
  [
    'Do you use Claude or ChatGPT in the course?',
    "Both, deliberately. You'll build against Anthropic, OpenAI, and open-source models (via Hugging Face) so you leave model-agnostic.",
  ],
];

function FAQ() {
  return (
    <section id="faq" style={{ padding: '80px 0', background: 'var(--paper)' }}>
      <SectionHead
        num="06"
        label="§06 · Details"
        title="Questions we're asked most."
      />
      <div style={{ padding: '0 32px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 0, border: '1px solid var(--ink)' }}>
        {FAQ_ITEMS.map(([q, a], i) => (
          <div key={q} style={{
            padding: 24,
            borderRight: i % 2 === 0 ? '1px solid var(--ink)' : 'none',
            borderBottom: i < FAQ_ITEMS.length - 2 ? '1px solid var(--rule-strong)' : 'none',
          }}>
            <div className="serif" style={{ fontSize: 26, lineHeight: 1.15, letterSpacing: '-0.01em', marginBottom: 12 }}>{q}</div>
            <div style={{ color: 'var(--ink-2)', fontSize: 15, lineHeight: 1.5 }}>{a}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { FAQ });
