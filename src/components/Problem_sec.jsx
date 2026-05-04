import React from 'react';
import { FaPhoneSlash, FaMoneyBillWave, FaBalanceScale, FaTired, FaSearch, FaBullseye } from 'react-icons/fa';

const problems = [
  {
    icon: <FaPhoneSlash color="#4D9BD6" />,
    title: 'Calls Dropping',
    desc: "Patients can't reach you. Appointments go unmade. Revenue is lost before it starts.",
  },
  {
    icon: <FaMoneyBillWave color="#4D9BD6" />,
    title: 'Revenue Leakage',
    desc: "Claims sit unprocessed. Insurance companies delay reimbursement. No visibility on money owed.",
  },
  {
    icon: <FaBalanceScale color="#4D9BD6" />,
    title: 'High Denials',
    desc: "Insurance companies use AI to increase denials. Claims get rejected for simple mistakes.",
  },
  {
    icon: <FaTired color="#4D9BD6" />,
    title: 'Staff Burnout',
    desc: "Your team is overwhelmed managing billing, scheduling, and insurance. Turnover is high.",
  },
  {
    icon: <FaSearch color="#4D9BD6" />,
    title: 'No Visibility',
    desc: "You don't know your financial metrics. AR days, denial rates, forecast — all a mystery.",
  },
  {
    icon: <FaBullseye color="#4D9BD6" />,
    title: 'System Chaos',
    desc: "Multiple vendors, fragmented systems, no coordination. Each department works in silos.",
  },
];

const styles = {
  section: {
    padding: '6rem 2rem',
    background: '#f8fafc', // fallback for var(--gray-lighter)
  },
  container: {
    maxWidth: 1400,
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '4rem',
  },
  h2: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
    color: '#199A6F', // fallback for var(--primary)
    fontWeight: 900,
  },
  p: {
    fontSize: '1.1rem',
    color: '#64748b', // fallback for var(--text-secondary)
    maxWidth: 600,
    margin: '0 auto',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
  },
  card: {
    background: '#fff',
    padding: '2rem',
    borderRadius: 12,
    borderLeft: '4px solid #199A6F', // fallback for var(--danger)
    boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
    transition: 'all 0.25s cubic-bezier(.4,1,.4,1)',
    position: 'relative',
  },
  cardHover: {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 25px rgba(0,0,0,0.12)',
  },
  cardTitle: {
    fontSize: '1.3rem',
    marginBottom: '1rem',
    color: '#4D9BD6', // fallback for var(--primary)
    fontWeight: 700,
    display: 'flex',
    alignItems: 'center',
    gap: 10,
  },
  cardDesc: {
    color: '#64748b', // fallback for var(--text-secondary)
    lineHeight: 1.8,
  },
};

export default function ProblemSection() {
  // For hover effect, use React state for demo; for production, use CSS/SCSS :hover.
  const [hovered, setHovered] = React.useState(null);

  return (
    <section style={styles.section} id="problem">
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
              Running a practice&nbsp;
            </span>

            <span
              style={{
                background: '#1abc9c',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              is operationally complex
            </span>
          </h2>
          <p style={styles.p}>You're managing challenges that have nothing to do with patient care</p>
        </div>
        <div style={styles.grid}>
          {problems.map((item, idx) => (
            <div
              key={item.title}
              style={{
                ...styles.card,
                ...(hovered === idx ? styles.cardHover : {}),
              }}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              <div style={styles.cardTitle}>
                {item.icon} {item.title}
              </div>
              <div style={styles.cardDesc}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}