import React from 'react';
import { FaPhoneAlt, FaClipboardList, FaLock, FaFileInvoiceDollar, FaBolt, FaChartLine } from 'react-icons/fa';

const Teamhandle = () => {
  const services = [
    {
      icon: <FaLock />,
      title: 'Insurance Verification',
      description: '100% verification before appointment. Zero surprises.',
    },
    {
      icon: <FaFileInvoiceDollar />,
      title: 'Claim Submission',
      description: 'Accurate coding, proper authorization. 95%+ first-time acceptance.',
    },
    {
      icon: <FaBolt />,
      title: 'Denial Management',
      description: 'AI-powered analysis, proactive appeals. 35% denial reduction.',
    },
    {
      icon: <FaPhoneAlt />,
      title: 'Payment Processing',
      description: 'Fast reimbursements, insurance follow-ups, collections.',
    },
    {
      icon: <FaChartLine />,
      title: 'Reporting & Analytics',
      description: 'Real-time dashboards, claim tracking, denial trends.',
    },
    {
      icon: <FaClipboardList />,
      title: 'Patient Billing Support',
      description: 'Explanation of benefits, payment plans, clear communication.',
    },
  ];

  return (
    <section
      id='dental-roles-section'
      style={{
        width: '100%',
        background: '#ffffff',
        padding: 'clamp(48px, 8vw, 88px) 0',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        
            <h2 className="mb-3" style={{ 
              color: '#002856', 
              fontSize: '2.5rem', 
              fontWeight: '700',
              fontFamily: "var(--bs-heading-font-family)"
            }}>
              <span
                style={{
                  background: ' #3498db',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                 Everything dental insurance—&nbsp;
              </span>

              <span
                style={{
                  background: ' #1abc9c',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
               fully managed
              </span>
            </h2>
            <button 
  onClick={() => window.location.href = '/hire'}
  style={{backgroundColor:'#199A6F', color:'#FFFFFF', border:'none', padding:'12px 24px', borderRadius:'8px', fontSize:'16px', fontWeight:'700', cursor:'pointer'}}
>
  Learn More
</button>

          <p
            style={{
              margin: '10px auto 0',
              maxWidth: 760,
              fontSize: '1rem',
              lineHeight: 1.6,
              color: '#475569',
              fontWeight: 400,
            }}
          >
            Verifications, claims, payments—we handle it all
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                padding: '22px 20px',
                boxShadow: '0 6px 24px rgba(15, 23, 42, 0.06)',
                minHeight: '260px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                transition: 'transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease',
                border: '1px solid #E2E8F0',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 16px 36px rgba(25, 154, 111, 0.14)';
                e.currentTarget.style.borderColor = '#199a6f';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 6px 24px rgba(15, 23, 42, 0.06)';
                e.currentTarget.style.borderColor = '#E2E8F0';
              }}
            >
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
                  fontSize: '24px',
                  marginBottom: '22px',
                }}
              >
                {service.icon}
              </div>
              <h3
                style={{
                  margin: 0,
                  fontSize: '1.05rem',
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
                  fontSize: '0.92rem',
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

export default Teamhandle;
