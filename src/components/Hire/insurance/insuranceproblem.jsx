import React from 'react';
import {
  FaBan,
  FaHeartBroken,
  FaChartLine,
  FaTired,
  FaBullseye,
  FaMoneyBillWave,
} from 'react-icons/fa';
import insurance from '../../../Pages/Hiretalent/insurance';

const insuranceproblem = () => {
  const challenges = [
    {
      icon: <FaBan />,
      title: 'Denial Epidemic',
      description:
        'Behavioral health faces the highest denial rates in healthcare (30-40%). Insurance companies intentionally deny mental health, substance abuse, and telehealth claims. Fighting each denial manually takes 5-10 hours per week.',
    },
    {
      icon: <FaHeartBroken />,
      title: 'Authorization Delays',
      description:
        'Insurance companies use prior authorization as a gatekeeping tool. Delayed authorizations = delayed patient care. Patients wait days for treatment. Insurance companies buy time for denials.',
    },
    {
      icon: <FaChartLine />,
      title: 'Telehealth Chaos',
      description:
        'Telehealth reimbursement varies by state, modality, and insurance company. Different rules for video vs phone vs chat. Different rules for synchronous vs asynchronous. Different rules for group vs individual. Your team can’t keep up.',
    },
    {
      icon: <FaTired />,
      title: 'Staff Burnout',
      description:
        'Your staff is frustrated. Insurance calls, authorization chasing, denial fighting, state compliance rules. You’re training the third billing person this year. Each one burns out within 12 months.',
    },
    {
      icon: <FaBullseye />,
      title: 'Growth Blocked',
      description:
        'You want to expand services. Add locations. Add modalities. But your billing infrastructure can’t handle it. Growth = more insurance complexity = more staff needed = unsustainable.',
    },
    {
      icon: <FaMoneyBillWave />,
      title: 'Revenue Leakage',
      description:
        'Uncollected denials. Missed rebilling deadlines. Patient balances that fell through cracks. Denied authorizations that never got resubmitted. You’re losing $500K-2M per year silently.',
    },
  ];

  return (
    <section
      style={{
        background: '#F5F7FB',
        padding: 'clamp(80px, 8vw, 100px) 0',
        width: '100%',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h2
            className="mb-3"
            style={{
              color: '#002856',
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
              fontWeight: '700',
              fontFamily: "var(--bs-heading-font-family)",
              lineHeight: 1.3,
            }}
          >
            <span
              style={{
                background: '#3498db',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Behavioral health reimbursement is broken.&nbsp;
            </span>

            <span
              style={{
                background: '#1abc9c',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Insurance companies know it.
            </span>
          </h2>

          <p
            style={{
              fontSize: '1rem',
              fontWeight: 400,
              color: '#475569',
              lineHeight: 1.6,
              maxWidth: '760px',
              margin: '0 auto',
            }}
          >
            Behavioral health providers are drowning in denials, authorizations,
            compliance complexity, and reimbursement chaos.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '18px',
            marginTop: '24px',
          }}
        >
          {challenges.map((item, index) => (
            <div
              key={index}
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                padding: '20px',
                borderLeft: '5px solid #199A6F',
                boxShadow: '0 6px 24px rgba(15, 23, 42, 0.06)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                textAlign: 'center',
                transition:
                  'transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease',
                border: '1px solid #E2E8F0',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow =
                  '0 16px 36px rgba(25, 154, 111, 0.14)';
                e.currentTarget.style.borderColor = '#199a6f';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow =
                  '0 6px 24px rgba(15, 23, 42, 0.06)';
                e.currentTarget.style.borderColor = '#E2E8F0';
              }}
            >
              {/* Icon */}
              <div
                style={{
                  fontSize: '24px',
                  marginBottom: '16px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '44px',
                  height: '44px',
                  borderRadius: '14px',
                  background: 'rgba(25, 154, 111, 0.12)',
                  color: '#2E86DE',
                }}
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: '#0F172A',
                  marginBottom: '12px',
                  marginTop: '0px',
                  lineHeight: 1.4,
                }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: '15px',
                  fontWeight: 400,
                  color: '#475569',
                  lineHeight: 1.5,
                  marginBottom: '0px',
                  textAlign: 'center',
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default insuranceproblem;