
import React from 'react';
import {
  FaLock,
  FaCheckCircle,
  FaShieldAlt,
  FaClipboardList,
  FaClock,
  FaPhone,
} from 'react-icons/fa';

const ComplianceSecuritySection = () => {
  const compliance = [
    {
      icon: <FaLock />,
      title: 'HIPAA Certified',
      description:
        'BAA signed before day one. Full HIPAA compliance with annual audits and continuous monitoring.',
    },
    {
      icon: <FaCheckCircle />,
      title: 'SOC 2 Type II',
      description:
        'Third-party audited security controls. Ongoing compliance verification and trust reports.',
    },
    {
      icon: <FaShieldAlt />,
      title: 'Data Encryption',
      description:
        'End-to-end encryption in transit and at rest. Regular security testing and penetration testing.',
    },
    {
      icon: <FaClipboardList />,
      title: 'State Licensing',
      description:
        'Licensed billing agents in all 50 states. Current continuing education and certifications.',
    },
    // {
    //   icon: <FaClock />,
    //   title: '99.8% Uptime SLA',
    //   description:
    //     'Redundant systems. 24/7 monitoring. SLA-backed reliability guarantees. Your claims never wait.',
    // },
    // {
    //   icon: <FaPhone />,
    //   title: '24/7 Priority Support',
    //   description:
    //     'Dedicated support team available round the clock. Same-day issue resolution. Direct account manager access.',
    // },
  ];

  return (
    <section
      style={{
        background: '#F5F7FB',
        padding: 'clamp(48px, 8vw, 88px) 0',
        width: '100%',
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '0 24px',
        }}
      >
        {/* Header */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '50px',
          }}
        >
          <h2
            className="mb-3"
            style={{
              color: '#002856',
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
              fontWeight: '700',
              fontFamily: "var(--bs-heading-font-family)",
              lineHeight: '1.2',
              marginBottom: '18px',
            }}
          >
            Healthcare Compliance & Security
          </h2>

          <p
            style={{
              fontSize: '1rem',
              fontWeight: 400,
              color: '#64748B',
              lineHeight: 1.7,
              maxWidth: '760px',
              margin: '0 auto',
            }}
          >
            Your patient data is protected. Your practice is secure and compliant.
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '18px',
          }}
        >
          {compliance.map((item, index) => (
            <div
              key={index}
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                padding: '20px',
                boxShadow:
                  '0 6px 24px rgba(15, 23, 42, 0.06)',
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
                e.currentTarget.style.transform =
                  'translateY(-6px)';
                e.currentTarget.style.boxShadow =
                  '0 16px 36px rgba(25, 154, 111, 0.14)';
                e.currentTarget.style.borderColor =
                  '#199a6f';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  'translateY(0)';
                e.currentTarget.style.boxShadow =
                  '0 6px 24px rgba(15, 23, 42, 0.06)';
                e.currentTarget.style.borderColor =
                  '#E2E8F0';
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  background: 'rgba(46, 134, 222, 0.12)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#2E86DE',
                  fontSize: '22px',
                  marginBottom: '22px',
                }}
              >
                {item.icon}
              </div>

              {/* Title */}
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
                {item.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  margin: 0,
                  fontSize: '15px',
                  lineHeight: 1.6,
                  color: '#475569',
                  flex: 1,
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

export default ComplianceSecuritySection;