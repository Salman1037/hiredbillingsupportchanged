import React from 'react';
import {
  FaPhoneAlt, FaClipboardList, FaLock, FaCreditCard, FaBolt, FaChartLine,
  FaSearch, FaUsers, FaPlug, FaRocket
} from 'react-icons/fa';

const services = [
  {
    icon: <FaPhoneAlt color="#4D9BD6" />,
    title: 'Patient Call Handling',
    desc: 'Professional answering, scheduling, and follow-up. Zero dropped calls.',
  },
  {
    icon: <FaClipboardList color="#4D9BD6" />,
    title: 'Appointment Scheduling',
    desc: 'Optimized scheduling, confirmations, and reminders. 98% show-up rate.',
  },
  {
    icon: <FaLock color="#4D9BD6" />,
    title: 'Insurance Verification',
    desc: 'Pre-authorization, benefits verification, eligibility checking. Done before visit.',
  },
  {
    icon: <FaCreditCard color="#4D9BD6" />,
    title: 'Billing & Claims',
    desc: 'Accurate coding, claim submission, compliance. HIPAA-certified.',
  },
  {
    icon: <FaBolt color="#4D9BD6" />,
    title: 'Denial Management',
    desc: 'AI-powered appeals, root cause analysis, prevention. 45% denial reduction.',
  },
  {
    icon: <FaChartLine color="#4D9BD6" />,
    title: 'AR & Reporting',
    desc: 'Real-time dashboards, KPI tracking, predictive forecasts. Full visibility.',
  },
];

const timeline = [
  {
    icon: <FaSearch color="#4D9BD6" />,
    number: 1,
    title: 'Discovery & Assessment',
    desc: 'We audit your current workflows, identify bottlenecks, and create a roadmap.',
  },
  {
    icon: <FaUsers color="#4D9BD6" />,
    number: 2,
    title: 'Team Onboarding',
    desc: 'Dedicated team trained on your EHR, systems, and workflows. Day-one productivity.',
  },
  {
    icon: <FaPlug color="#4D9BD6" />,
    number: 3,
    title: 'Integration & Coordination',
    desc: 'Seamless integration with your systems. Daily check-ins. Real-time problem-solving.',
  },
  {
    icon: <FaRocket color="#4D9BD6" />,
    number: 4,
    title: 'Optimize & Scale',
    desc: 'Continuous improvements, proactive optimization, and scaling as you grow.',
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    marginTop: '3rem',
  },
  card: {
    background: '#fff',
    padding: '2rem',
    borderRadius: 12,
    textAlign: 'center',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
    transition: 'transform 0.28s cubic-bezier(.2,.8,.2,1), box-shadow 0.28s cubic-bezier(.2,.8,.2,1), border-color 0.28s cubic-bezier(.2,.8,.2,1), background-color 0.28s cubic-bezier(.2,.8,.2,1)',
    border: '2px solid transparent',
    position: 'relative',
    overflow: 'hidden',
    willChange: 'transform, box-shadow, border-color',
  },
  icon: {
    fontSize: '2.6rem',
    marginBottom: '1rem',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.28s cubic-bezier(.2,.8,.2,1), color 0.28s cubic-bezier(.2,.8,.2,1)',
  },
  cardTitle: {
    fontSize: '1.2rem',
    marginBottom: '1rem',
    color: '#4D9BD6', // fallback for var(--primary)
    fontWeight: 700,
  },
  cardDesc: {
    color: '#64748b', // fallback for var(--text-secondary)
    fontSize: '0.95rem',
  },
  timeline: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem',
    marginTop: '3rem',
    position: 'relative',
  },
  timelineItem: {
    background: '#fff',
    padding: '2rem',
    borderRadius: 12,
    border: '2px solid #e5e7eb', // fallback for var(--border-color)
    position: 'relative',
    zIndex: 1,
    textAlign: 'center',
    boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
    transition: 'transform 0.28s cubic-bezier(.2,.8,.2,1), box-shadow 0.28s cubic-bezier(.2,.8,.2,1), border-color 0.28s cubic-bezier(.2,.8,.2,1)',
    willChange: 'transform, box-shadow, border-color',
  },
  timelineNumber: {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: '#4D9BD6', // fallback for var(--secondary)
    marginBottom: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  timelineTitle: {
    fontSize: '1.1rem',
    marginBottom: '1rem',
    color: '#4D9BD6', // fallback for var(--primary)
    fontWeight: 700,
  },
  timelineDesc: {
    color: '#64748b', // fallback for var(--text-secondary)
    fontSize: '0.95rem',
  },
};

export default function SolutionAndHowItWorks() {
  return (
    <>
      <style>{`
        .how-card:hover {
          transform: translateY(-10px) scale(1.015);
          border-color: #1ac98f;
          box-shadow: 0 16px 36px rgba(15, 23, 42, 0.12);
          background: linear-gradient(180deg, #ffffff 0%, #f9fffc 100%);
        }

        .how-card:hover .how-card-icon {
          transform: translateY(-2px) scale(1.06);
        }

        .how-card:hover .how-card-title {
          color: #0f766e;
        }

        .how-card:hover .how-card-desc {
          color: #475569;
        }

        .how-timeline-item:hover {
          transform: translateY(-8px);
          box-shadow: 0 14px 30px rgba(15, 23, 42, 0.1);
          border-color: #c7f0e2;
        }

        .how-timeline-item:hover .how-timeline-number {
          transform: scale(1.05);
        }

        .how-card,
        .how-timeline-item {
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .how-card,
          .how-timeline-item,
          .how-card:hover,
          .how-timeline-item:hover,
          .how-card .how-card-icon,
          .how-timeline-item .how-timeline-number {
            transition: none !important;
            transform: none !important;
          }
        }
      `}</style>
      {/* SOLUTION SECTION */}
      <section style={styles.section} id="solution">
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
                We manage your practice operations&nbsp;
              </span>

              <span
                style={{
                  background: '#1abc9c',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                end-to-end
              </span>
            </h2>
            <p style={styles.p}>From first patient call to final payment — fully managed</p>
          </div>
          <div style={styles.grid}>
            {services.map((item, idx) => (
              <div
                key={item.title}
                style={{
                  ...styles.card,
                  animationDelay: `${idx * 0.06}s`,
                }}
                className="how-card"
              >
                <div style={styles.icon} className="how-card-icon">{item.icon}</div>
                <div style={styles.cardTitle} className="how-card-title">{item.title}</div>
                <div style={styles.cardDesc} className="how-card-desc">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section style={{ ...styles.section, background: '#fff' }} id="how">
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
                We work as your in-house team,&nbsp;
              </span>

              <span
                style={{
                  background: '#1abc9c',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                without the overhead
              </span>
            </h2>
            <p style={styles.p}>Not a separate vendor. An extension of your practice.</p>
          </div>
          <div style={styles.timeline}>
            {timeline.map((item, idx) => (
              <div key={item.title} style={styles.timelineItem} className="how-timeline-item">
                <div style={styles.timelineNumber} className="how-timeline-number">
                  {item.icon}
                  <span>{item.number}</span>
                </div>
                <div style={styles.timelineTitle}>{item.title}</div>
                <div style={styles.timelineDesc}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}