import React from 'react';
import {
  FaFileSignature,
  FaGavel,
  FaLaptopMedical,
  FaHandHoldingMedical,
  FaChartLine,
  FaCommentsDollar,
} from 'react-icons/fa';

const Problemsolution = () => {
  const services = [
    {
      icon: <FaFileSignature />,
      title: 'Authorization Mastery',
      description:
        'Proactive prior authorization requests submitted before patient arrival. Real-time status tracking. Escalation if delayed. Never let an authorization delay patient care.',
    },
    {
      icon: <FaGavel />,
      title: 'Denial Prevention',
      description:
        'AI-powered root cause analysis on every denial. Behavioral-health specific appeal strategies. Resubmit immediately with corrected documentation. 40%+ denial reduction average.',
    },
    {
      icon: <FaLaptopMedical />,
      title: 'Telehealth Optimization',
      description:
        'We know the reimbursement rules for telehealth in all 50 states. Video, phone, chat, group, individual, synchronous, asynchronous—we handle every modality correctly.',
    },
    {
      icon: <FaHandHoldingMedical />,
      title: 'Medicaid Compliance',
      description:
        'Medicaid is critical for behavioral health. State rules vary dramatically. We navigate state-specific requirements, licensing, and reimbursement rates.',
    },
    {
      icon: <FaChartLine />,
      title: 'Revenue Visibility',
      description:
        'Dashboard showing denial trends by payer. Authorization status by patient. Reimbursement forecasts. Know exactly where your money is at all times.',
    },
    {
      icon: <FaCommentsDollar />,
      title: 'Patient Education',
      description:
        'Clear patient responsibility communication. Insurance explanation of benefits. Payment plan setup. Insurance appeals education. Maximize patient collections.',
    },
  ];

  return (
    <section
      id="medical-roles-section"
      style={{
        width: '100%',
        background: '#ffffff',
        padding: 'clamp(80px, 8vw, 100px) 0',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h2
            className="mb-3"
            style={{
              color: '#002856',
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
              fontWeight: '700',
              fontFamily: 'var(--bs-heading-font-family)',
              lineHeight: 1.2,
            }}
          >
            <span
              style={{
                background: '#3498db',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Complete behavioral health RCM—
            </span>

            <span
              style={{
                background: '#1abc9c',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              from authorization to reimbursement
            </span>
          </h2>

          <button
            onClick={() => (window.location.href = '/hire')}
            style={{
              backgroundColor: '#199A6F',
              color: '#FFFFFF',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '700',
              cursor: 'pointer',
            }}
          >
            Learn More
          </button>

          <p
            style={{
              margin: '10px auto 0',
              maxWidth: 760,
              fontSize: '16px',
              lineHeight: 1.6,
              color: '#475569',
              fontWeight: 400,
            }}
          >
            We own every step so your team focuses on patient care
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '18px',
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                padding: '20px',
                boxShadow: '0 6px 24px rgba(15, 23, 42, 0.06)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                transition:
                  'transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease',
                border: '1px solid #E2E8F0',
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
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '14px',
                  background: 'rgba(25, 154, 111, 0.12)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#2E86DE',
                  fontSize: '24px',
                  marginBottom: '16px',
                }}
              >
                {service.icon}
              </div>

              <h3
                style={{
                  margin: 0,
                  fontSize: '1rem',
                  lineHeight: 1.4,
                  fontWeight: 700,
                  color: '#0F172A',
                  marginBottom: '12px',
                }}
              >
                {service.title}
              </h3>

              <p
                style={{
                  margin: 0,
                  fontSize: '15px',
                  lineHeight: 1.5,
                  color: '#475569',
                  flex: 1,
                }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problemsolution;