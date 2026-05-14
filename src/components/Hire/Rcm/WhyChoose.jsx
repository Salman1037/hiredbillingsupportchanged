
import React from 'react';
import {
  FaCheckCircle,
  FaShieldAlt,
  FaTrophy,
  FaHandsHelping,
  FaLock,
  FaChartLine,
 
} from 'react-icons/fa';

const WhyChooseSection = () => {
  const benefits = [
    {
      icon: <FaCheckCircle />,
      title: 'Specialty Expertise',
      description:
        'Deep knowledge of medical, dental, and behavioral health billing. We understand your specific challenges, payers, and coding requirements.',
    },
    {
      icon: <FaShieldAlt />,
      title: 'Proactive Prevention',
      description:
        'We prevent denials before they happen. AI-powered analysis. Proactive strategies. Not just reactive firefighting.',
    },
    {
      icon: <FaTrophy />,
      title: 'Proven Results',
      description:
        '$50M+ recovered for clients. 35%+ dental reduction average. 500+ practices served. Real numbers. Real results.',
    },
    {
      icon: <FaHandsHelping />,
      title: 'Complete Takeover',
      description:
        'We own everything. You don\'t manage insurance anymore. Your team focuses on patient care. We manage the revenue.',
    },
    {
      icon: <FaLock />,
      title: 'Full Compliance',
      description:
        'HIPAA certified. BAA signed before day one. SOC 2 audited. State licensed. Full documentation. Peace of mind.',
    },
    {
      icon: <FaChartLine />,
      title: 'Growth Enablement',
      description:
        'Scale without scaling overhead. Add locations. Add modalities. Add services. We scale with you. Growth is no longer bottlenecked by billing.',
    },
     {
      icon: <FaChartLine />,
      title: 'Transparent Reporting',
      description:
        'Clear dashboards, regular updates, and full visibility into claims, collections, denials, and revenue performance at all times.',
    },
     {
      icon: <FaHandsHelping />,
      title: 'Dedicated Account Support',
      description:
        'A responsive team that understands your workflow, resolves issues quickly, and stays aligned with your practice goals.',
    },
     
  ];

  return (
    <section
      style={{
        background: '#FFFFFF',
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
            Why Choose HBS?
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
            We're not a generic billing company. We specialize in what makes your practice unique.
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
          {benefits.map((item, index) => (
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

export default WhyChooseSection;