
import React from 'react';

const styles = {
  section: {
    padding: 'clamp(40px, 6vw, 64px) 24px',
    background: '#F8FAFC',
    fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
    color: '#64748B',
    boxSizing: 'border-box',
  },
  eyebrow: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '2.5rem',
  },
  eyebrowLine: {
    width: 40,
    height: 1,
    // background: '#94a3b8',
  },
  eyebrowText: {
    fontSize: '11px',
    letterSpacing: '2.2px',
    textTransform: 'uppercase',
    color: '#94A3B8',
    fontWeight: 700,
    fontFamily: "'Inter', sans-serif",
  },
  container: {
    maxWidth: 1200,
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    alignItems: 'start',
  },
  // Left column
  left: {},
  headline: {
    fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
    lineHeight: 1.15,
    marginBottom: '18px',
    fontWeight: 700,
    letterSpacing: '-0.025em',
    color: '#0F172A',
    fontFamily: "'Inter', sans-serif",
  },
  headlineNormal: {
    background: 'linear-gradient(90deg, #0072CE, #00A6E6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    fontFamily: "'Inter', sans-serif",
    fontStyle: 'normal',
    fontWeight: 700,
  },
  headlineItalic: {
    background: 'linear-gradient(90deg, #0BA07A, #1abc9c)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    fontFamily: "'Inter', sans-serif",
    fontStyle: 'italic',
    fontWeight: 400,
  },
  description: {
    fontSize: '16px',
    lineHeight: 1.72,
    color: '#64748B',
    marginBottom: '56px',
    maxWidth: 580,
    fontFamily: "'Inter', sans-serif",
    textAlign: 'center',
  },
  featureList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  featureItem: {
    display: 'grid',
    gridTemplateColumns: '2.5rem 1fr',
    gap: '0 1rem',
    alignItems: 'start',
  },
  featureNumber: {
    fontSize: '11px',
    fontWeight: 600,
    color: '#94A3B8',
    paddingTop: '0.25rem',
    letterSpacing: '1.1px',
    fontFamily: "'Inter', sans-serif",
  },
  featureContent: {},
  featureTitle: {
    fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)',
    fontWeight: 700,
    color: '#0F172A',
    marginBottom: '0.5rem',
    fontFamily: "'Inter', sans-serif",
    lineHeight: 1.4,
  },
  featureDesc: {
    fontSize: '14px',
    color: '#64748B',
    lineHeight: 1.65,
    fontFamily: "'Inter', sans-serif",
  },
  // Right column — pipeline diagram
  right: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0',
    paddingTop: '0.5rem',
  },
  layerCard: {
    background: '#FFFFFF',
    border: '1px solid #E8EEF4',
    borderRadius: 16,
    padding: '28px 44px',
    position: 'relative',
  },
  layerLabel: {
    fontSize: '11px',
    letterSpacing: '1.1px',
    textTransform: 'uppercase',
    color: '#94A3B8',
    fontWeight: 700,
    marginBottom: '0.75rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
    fontFamily: "'Inter', sans-serif",
  },
  layerDash: {
    display: 'inline-block',
    width: 12,
    height: 1,
    background: '#94A3B8',
    verticalAlign: 'middle',
    marginRight: 4,
  },
  layerTitle: {
    fontSize: 'clamp(0.95rem, 1.2vw, 1.1rem)',
    fontWeight: 700,
    color: '#0F172A',
    letterSpacing: '-0.01em',
    fontFamily: "'Inter', sans-serif",
    lineHeight: 1.4,
  },
  connector: {
    width: 1,
    height: 28,
    background: '#E8EEF4',
    margin: '0 auto 0 1.5rem',
  },
  outcomeCard: {
    background: '#00A6E6',
    borderRadius: 16,
    padding: '2rem 2.5rem',
    marginTop: 0,
  },
  outcomeLabel: {
    fontSize: '11px',
    letterSpacing: '1.1px',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.7)',
    fontWeight: 700,
    marginBottom: '0.75rem',
    fontFamily: "'Inter', sans-serif",
  },
  outcomeTitle: {
    fontSize: 'clamp(1.15rem, 1.8vw, 1.35rem)',
    fontWeight: 700,
    color: '#fff',
    lineHeight: 1.3,
    letterSpacing: '-0.01em',
    fontFamily: "'Inter', sans-serif",
  },
};

const features = [
  {
    num: '01',
    title: 'Automated eligibility & scrubbing',
    desc: 'Every claim is validated against payer rules before submission. First-pass rate above 98%.',
  },
  {
    num: '02',
    title: 'AI-triaged denials',
    desc: 'Denials are categorized, prioritized, and routed to the right specialist queue within minutes — not weeks.',
  },
  {
    num: '03',
    title: 'Human-led appeals',
    desc: 'Trained appeals specialists write payer-specific responses. Higher overturn rates, less staff time.',
  },
  {
    num: '04',
    title: 'Real-time visibility',
    desc: 'You see everything we see — KPIs, queues, payments, denials — in a shared dashboard.',
  },
];

const layers = [
  { label: 'Layer 01 / Intake', title: 'Eligibility · Auth · Demographics' },
  { label: 'Layer 02 / AI Scrub', title: 'Claim validation · Payer rules' },
  { label: 'Layer 03 / Specialist Queue', title: 'Triaged · Routed · Tracked' },
  { label: 'Layer 04 / Human Judgment', title: 'Appeals · Calls · Resolution' },
];

export default function AiHumanAdvantageSection() {
  return (
    <section style={styles.section}>
      {/* Eyebrow */}
      <div style={styles.eyebrow}>
        <div style={styles.eyebrowLine} />
        <span style={styles.eyebrowText}>The AI + Human Advantage</span>
      </div>

      <div style={styles.container}>
        {/* LEFT COLUMN */}
        <div style={styles.left}>
          <h2 style={styles.headline}>
            <span style={styles.headlineNormal}>AI does the lifting. </span>
            <span style={styles.headlineItalic}>People do the thinking.</span>
          </h2>
          <p style={styles.description}>
            We pair trained healthcare specialists with AI-assisted workflows. Eligibility checks, claim scrubs, and denial categorization happen in seconds. Specialists focus on the work that actually requires a human — payer escalations, complex appeals, and patient relationships.
          </p>
          <ul style={styles.featureList}>
            {features.map((f) => (
              <li key={f.num} style={styles.featureItem}>
                <span style={styles.featureNumber}>{f.num}</span>
                <div style={styles.featureContent}>
                  <div style={styles.featureTitle}>{f.title}</div>
                  <div style={styles.featureDesc}>{f.desc}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT COLUMN — Pipeline */}
        <div style={styles.right}>
          {layers.map((layer, i) => (
            <React.Fragment key={layer.label}>
              <div style={styles.layerCard}>
                <div style={styles.layerLabel}>
                  <span style={styles.layerDash} />
                  {layer.label}
                </div>
                <div style={styles.layerTitle}>{layer.title}</div>
              </div>
              {i < layers.length - 1 && <div style={styles.connector} />}
            </React.Fragment>
          ))}
          <div style={styles.connector} />
          <div style={styles.outcomeCard}>
            <div style={styles.outcomeLabel}>— Outcome</div>
            <div style={styles.outcomeTitle}>Faster reimbursement. Cleaner books.</div>
          </div>
        </div>
      </div>
    </section>
  );
}