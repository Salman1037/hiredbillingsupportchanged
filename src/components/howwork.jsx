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
    padding: 'clamp(48px, 8vw, 88px) clamp(20px, 5vw, 48px)',
    background: '#f8fafc',
  },
  container: {
    maxWidth: 1400,
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '32px',
  },
  h2: {
    fontFamily: "var(--bs-heading-font-family)",
    fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
    fontWeight: 900,
    color: '#0f172a',
    letterSpacing: '-0.02em',
    margin: '0 0 10px 0',
  },
  p: {
    fontFamily: "var(--bs-body-font-family)",
    fontSize: '1rem',
    color: '#475569',
    maxWidth: 600,
    margin: '0 auto',
  },
};

export default function SolutionAndHowItWorks() {
  return (
    <>
      <style>{`
        .how-work-section {
          padding: clamp(40px, 6vw, 64px) 2rem;
          background: #f8fafc;
        }

        .how-work-section--white {
          background: #ffffff;
        }

        .how-work-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .how-work-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .how-work-header h2 {
          font-family: var(--bs-heading-font-family);
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          font-weight: 900;
          color: #0f172a;
          letter-spacing: -0.02em;
          margin: 0 0 10px 0;
        }

        .how-work-header p {
          font-family: var(--bs-body-font-family);
          font-size: 1rem;
          color: #475569;
          margin: 0;
        }

        .how-work-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
          margin-top: 24px;
        }

        .how-work-card {
          background: #ffffff;
          padding: 22px 20px;
          border-radius: 16px;
          text-align: center;
          border: 1px solid #e2e8f0;
          box-shadow: 0 6px 24px rgba(15, 23, 42, 0.06);
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }

        .how-work-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 36px rgba(25, 154, 111, 0.14);
          border-color: #199a6f;
        }

        .how-work-icon {
          font-size: 1.6rem;
          margin-bottom: 12px;
          display: inline-flex;
          width: 52px;
          height: 52px;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: #ecfdf5;
          color: #199a6f;
        }

        .how-work-card h3 {
          font-family: var(--bs-heading-font-family);
          font-size: 1.05rem;
          margin: 0 0 6px 0;
          color: #0f172a;
        }

        .how-work-card p {
          font-family: var(--bs-body-font-family);
          color: #475569;
          font-size: 0.92rem;
          margin: 0;
          line-height: 1.5;
        }
        
        .timeline-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-top: 24px;
        }
      `}</style>
      {/* SOLUTION SECTION */}
      <section className="how-work-section" id="solution">
        <div className="how-work-container">
          <div className="how-work-header">
            <h2 style={{ display: 'inline-block', lineHeight: 1.1 }}>
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
            <p>From first patient call to final payment — fully managed</p>
          </div>
          <div className="how-work-grid">
            {services.map((item) => (
              <div
                key={item.title}
                className="how-work-card"
              >
                <div className="how-work-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="how-work-section how-work-section--white" id="how">
        <div className="how-work-container">
          <div className="how-work-header">
            <h2 style={{ display: 'inline-block', lineHeight: 1.1 }}>
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
            <p>Not a separate vendor. An extension of your practice.</p>
          </div>
          <div className="timeline-grid">
            {timeline.map((item) => (
              <div key={item.title} className="how-work-card">
                <div className="how-work-icon">
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}