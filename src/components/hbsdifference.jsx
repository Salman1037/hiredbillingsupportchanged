import React from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const traditional = [
  'Fragmented services (billing only)',
  'Reactive approach (respond to problems)',
  'Limited transparency on process',
  'High cost structure ($2-3K/month)',
  'Your practice is one of hundreds',
  'Variable quality & accountability',
];

const hbs = [
  'End-to-end ownership (calls to payments)',
  'Proactive system (prevent problems)',
  'Real-time dashboards & full visibility',
  'Transparent, performance-based pricing',
  'Dedicated team for YOUR practice',
  'Guaranteed results & accountability',
];

const styles = {
  section: {
    padding: 'clamp(40px, 6vw, 64px) 2rem',
    background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
  },
  container: {
    maxWidth: 1400,
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '3.5rem',
  },
  h2: {
    fontSize: 'clamp(2rem, 3vw, 2.8rem)',
    marginBottom: '1rem',
    color: '#0F172A',
    fontWeight: 900,
    letterSpacing: '-0.04em',
    lineHeight: 1.05,
  },
  p: {
    fontSize: 'clamp(1rem, 1.4vw, 1.1rem)',
    color: '#64748b', // fallback for var(--text-secondary)
    maxWidth: 680,
    margin: '0 auto',
    lineHeight: 1.65,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1.5rem',
    marginTop: '3rem',
  },
  card: {
    background: '#ffffff',
    padding: '2rem',
    borderRadius: 20,
    border: '1px solid #e8eef7',
    boxShadow: '0 10px 30px rgba(15, 23, 42, 0.06)',
    transition: 'transform 0.28s cubic-bezier(.2,.8,.2,1), box-shadow 0.28s cubic-bezier(.2,.8,.2,1), border-color 0.28s cubic-bezier(.2,.8,.2,1)',
    position: 'relative',
    overflow: 'hidden',
  },
  cardTitle: {
    fontSize: '1.15rem',
    marginBottom: '1.25rem',
    color: '#199A6F',
    fontWeight: 700,
    letterSpacing: '-0.02em',
  },
  ul: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  li: {
    padding: '0.8rem 0',
    position: 'relative',
    color: '#64748b', // fallback for var(--text-secondary)
    fontSize: '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    lineHeight: 1.45,
  },
  iconCheck: {
    color: '#199A6F',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    minWidth: 18,
  },
  iconCross: {
    /* Use site red for cross icons */
    color: '#ef4444',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    minWidth: 18,
  },
};

export default function HbsDifference() {
  return (
    <section style={styles.section}>
      <style>{`
        .hbs-diff-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 18px 40px rgba(15, 23, 42, 0.10);
          border-color: rgba(25, 154, 111, 0.28);
        }

        .hbs-diff-card:hover .hbs-diff-title {
          color: #0f766e;
        }

        .hbs-diff-card:hover .hbs-diff-item {
          color: #334155;
        }

        @media (max-width: 900px) {
          .hbs-diff-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={{ ...styles.h2, display: 'inline-block', lineHeight: 1.1 }}>
            <span
              style={{
                background: '#3498db',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Why HBS is different&nbsp;
            </span>
            <span
              style={{
                background: '#1abc9c',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              from traditional RCM
            </span>
          </h2>
          <p style={styles.p}>We're not a billing company. We're your operations partner.</p>
        </div>
        <div style={styles.grid} className="hbs-diff-grid">
          {/* Traditional RCM */}
          <div style={styles.card} className="hbs-diff-card">
            <h3 style={styles.cardTitle} className="hbs-diff-title">Traditional RCM Model</h3>
            <ul style={styles.ul}>
              {traditional.map((item) => (
                <li style={styles.li} className="hbs-diff-item" key={item}>
                  <FaTimesCircle style={styles.iconCross} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {/* HBS Model */}
          <div style={styles.card} className="hbs-diff-card">
            <h3 style={styles.cardTitle} className="hbs-diff-title">HBS Model</h3>
            <ul style={styles.ul}>
              {hbs.map((item) => (
                <li style={styles.li} className="hbs-diff-item" key={item}>
                  <FaCheckCircle style={styles.iconCheck} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}