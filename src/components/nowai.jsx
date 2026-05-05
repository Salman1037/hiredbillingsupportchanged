import React from 'react';

const styles = {
  section: {
    padding: 'clamp(40px, 6vw, 64px) 2rem',
    background: '#fff',
  },
  container: {
    maxWidth: 1200,
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '3rem',
    alignItems: 'center',
  },
  content: {},
  h2: {
    fontSize: '2.5rem',
    marginBottom: '1.5rem',
    color: '#199A6F', // fallback for var(--primary)
    fontWeight: 900,
  },
  p: {
    fontSize: '1.1rem',
    marginBottom: '1.5rem',
    color: '#64748b', // fallback for var(--text-secondary)
    lineHeight: 1.8,
  },
  highlightBox: {
    marginTop: '2rem',
    padding: '1.5rem',
    background: '#f3f4f6', // fallback for var(--gray-lighter)
    borderRadius: 8,
    borderLeft: '4px solid #199A6F', // fallback for var(--secondary)
  },
  highlightText: {
    color: '#4D9BD6', // fallback for var(--primary)
    fontWeight: 600,
    margin: 0,
  },
  visual: {
    background: "linear-gradient(90deg, var(--primary-blue), var(--primary-green))",
    padding: '3rem',
    borderRadius: 12,
    // color: '#',
    textAlign: 'center',
  },
  h3: {
    fontSize: '2rem',
    marginBottom: '2rem',
    fontWeight: 800,
  },
  comparison: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '2rem',
    marginTop: '2rem',
  },
  item: {
    background: 'rgba(255,255,255,0.10)',
    padding: '1.5rem',
    borderRadius: 8,
    border: '1px solid rgba(255,255,255,0.2)',
    // color: '#fff',
    textAlign: 'left',
  },
  itemH4: {
    marginBottom: '1rem',
    fontWeight: 700,
    fontSize: '1.15rem',
  },
  ul: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  li: {
    padding: '0.5rem 0 0.5rem 1.5rem',
    position: 'relative',
  },
  liCheck: {
    content: "'✓'",
    position: 'absolute',
    left: 0,
    color: '#fff',
    fontWeight: 'bold',
  },
  // Responsive
  '@media (maxWidth: 900px)': {
    container: {
      gridTemplateColumns: '1fr',
      gap: '2rem',
    },
    visual: {
      marginTop: '2rem',
    },
  },
};

const aiTools = [
  'Workflow automation',
  'Clinical support',
  'Scheduling optimization',
];
const insuranceAI = [
  'Denial prediction',
  'Delay tactics',
  'Complexity injection',
];

export default function AiSection() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.content}>
          <h2 style={{ ...styles.h2, lineHeight: 1.1 }}>
            <span style={{ color: '#3498db' }}>You're now in an </span>
            <span style={{ color: '#1abc9c' }}>AI vs AI</span>
            <span style={{ color: '#3498db' }}> environment</span>
          </h2>
          <p style={styles.p}>
            Doctors are using AI to streamline workflows. Insurance companies are using AI to increase denials and delay reimbursements.
          </p>
          <p style={styles.p}>
            <strong>The asymmetry is growing.</strong> You need human expertise backed by AI to compete.
          </p>
          <div style={styles.highlightBox}>
            <p style={styles.highlightText}>
              This is where we come in. AI + Human execution. One team. Full control.
            </p>
          </div>
        </div>
        <div style={styles.visual}>
          <h3 style={styles.h3}>The Reality Today</h3>
          <div style={styles.comparison}>
            <div style={styles.item}>
              <h4 style={styles.itemH4}>Your AI Tools</h4>
              <ul style={styles.ul}>
                {aiTools.map((item) => (
                  <li style={styles.li} key={item}>
                    <span style={styles.liCheck}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={styles.item}>
              <h4 style={styles.itemH4}>Insurance AI</h4>
              <ul style={styles.ul}>
                {insuranceAI.map((item) => (
                  <li style={styles.li} key={item}>
                    <span style={styles.liCheck}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}