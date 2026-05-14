
import React from 'react';
import {
  FaCheckCircle,
  FaCloudUploadAlt,
  FaLightbulb,
  FaHandHoldingUsd,
  FaChartBar,
  FaUsers,
   FaUserMd,
  FaPhone,
} from 'react-icons/fa';

const WhatwemanageSection = () => {
  const services = [
    {
      icon: <FaCheckCircle />,
      title: 'Insurance Verification',
      description:
        'Real-time verification before patient arrival. Benefits, coverage, authorization requirements confirmed. Zero surprises on billing.',
    },
    {
      icon: <FaCloudUploadAlt />,
      title: 'Claim Submission',
      description:
        'Accurate coding and electronic submission. Proper authorizations included. 95%+ first-time acceptance across all specialties.',
    },
    {
      icon: <FaLightbulb />,
      title: 'Denial Prevention & Appeals',
      description:
        'AI-powered root cause analysis. Proactive prevention before denials happen. Aggressive appeals for every rejected claim. 35%+ reduction average.',
    },
    {
      icon: <FaHandHoldingUsd />,
      title: 'Payment Processing',
      description:
        'Insurance follow-up and claims tracing. Payment posting and reconciliation. Fast reimbursements (32-40 day average AR).',
    },
    {
      icon: <FaChartBar />,
      title: 'Real-Time Revenue Visibility',
      description:
        'Dashboards showing dental trends, claim status, reimbursement forecasts. You know exactly where your money is at all times.',
    },
    {
      icon: <FaUsers />,
      title: 'Patient Billing & Collections',
      description:
        'Clear responsibility communication. Payment plan setup. Collection support. Maximize patient revenue without overhead.',
    },
    {
      icon: <FaUserMd />,
      title: 'Credentialing & Enrollment',
      description:
        'Provider enrollment, payer applications, revalidations, and credentialing updates managed to keep billing active and compliant.',
    },
    {
      icon: <FaPhone />,
      title: 'Reporting & Performance Tracking',
      description:
        'Regular reports on claims, payments, denials, AR, and revenue trends so your practice stays fully informed.',
    },
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
            What We Manage For You
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
            End-to-end revenue cycle management. Every step. Every claim. Every dollar.
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
          {services.map((item, index) => (
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

export default WhatwemanageSection;