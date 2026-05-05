import React from 'react';
import { FaPhoneSlash, FaMoneyBillWave, FaBalanceScale, FaTired, FaSearch, FaBullseye } from 'react-icons/fa';

const problems = [
  {
    icon: <FaPhoneSlash />,
    title: 'Calls Dropping',
    desc: "Patients can't reach you. Appointments go unmade. Revenue is lost before it starts.",
  },
  {
    icon: <FaMoneyBillWave />,
    title: 'Revenue Leakage',
    desc: "Claims sit unprocessed. Insurance companies delay reimbursement. No visibility on money owed.",
  },
  {
    icon: <FaBalanceScale />,
    title: 'High Denials',
    desc: "Insurance companies use AI to increase denials. Claims get rejected for simple mistakes.",
  },
  {
    icon: <FaTired />,
    title: 'Staff Burnout',
    desc: "Your team is overwhelmed managing billing, scheduling, and insurance. Turnover is high.",
  },
  {
    icon: <FaSearch />,
    title: 'No Visibility',
    desc: "You don't know your financial metrics. AR days, denial rates, forecast — all a mystery.",
  },
  {
    icon: <FaBullseye />,
    title: 'System Chaos',
    desc: "Multiple vendors, fragmented systems, no coordination. Each department works in silos.",
  },
];

export default function ProblemSection() {
  return (
    <>
      <style>{`
        .problem-section {
          padding: clamp(48px, 8vw, 88px) clamp(20px, 5vw, 48px);
          background: #f8fafc;
        }

        .problem-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .problem-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .problem-header h2 {
          font-family: 'Inter', 'Open Sans', Arial, sans-serif;
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          font-weight: 900;
          color: #0f172a;
          letter-spacing: -0.02em;
          margin: 0 0 10px 0;
        }

        .problem-header p {
          font-family: 'Inter', 'Open Sans', Arial, sans-serif;
          font-size: 1rem;
          color: #475569;
          margin: 0;
        }

        .problem-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
          margin-top: 24px;
        }

        .problem-card {
          background: #ffffff;
          padding: 22px 20px;
          border-radius: 16px;
          text-align: center;
          border: 1px solid #e2e8f0;
          box-shadow: 0 6px 24px rgba(15, 23, 42, 0.06);
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }

        .problem-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 36px rgba(25, 154, 111, 0.14);
          border-color: #199a6f;
        }

        .problem-icon {
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

        .problem-card h3 {
          font-family: 'Inter', 'Open Sans', Arial, sans-serif;
          font-size: 1.05rem;
          margin: 0 0 6px 0;
          color: #0f172a;
        }

        .problem-card p {
          font-family: 'Inter', 'Open Sans', Arial, sans-serif;
          color: #475569;
          font-size: 0.92rem;
          margin: 0;
          line-height: 1.5;
        }
      `}</style>
      <section className="problem-section" id="problem">
        <div className="problem-container">
          <div className="problem-header">
            <h2 style={{ display: 'inline-block', lineHeight: 1.1 }}>
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
            <p>You're managing challenges that have nothing to do with patient care</p>
          </div>
          <div className="problem-grid">
            {problems.map((item) => (
              <div key={item.title} className="problem-card">
                <div className="problem-icon">{item.icon}</div>
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