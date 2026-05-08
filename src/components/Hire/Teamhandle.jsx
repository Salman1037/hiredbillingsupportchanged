import React from 'react';
import { FaPhoneAlt, FaClipboardList, FaLock, FaFileInvoiceDollar, FaBolt, FaChartLine } from 'react-icons/fa';

const Teamhandle = () => {
  const services = [
    {
      icon: <FaPhoneAlt />,
      title: 'Patient Call Handling',
      description: 'Professional answering & scheduling. Every call captured. Zero dropped calls. Reminders & confirmations included.',
    },
    {
      icon: <FaClipboardList />,
      title: 'Appointment Scheduling',
      description: 'Optimization & reminders. 98% show-up rate. Pre-visit checks. Time management that respects your schedule.',
    },
    {
      icon: <FaLock />,
      title: 'Insurance Verification',
      description: 'Pre-authorization, benefits, coverage limits. Done BEFORE the patient arrives. Zero surprises on billing.',
    },
    {
      icon: <FaFileInvoiceDollar />,
      title: 'Medical Billing & Claims',
      description: 'Accurate coding, claim submission, compliance. HIPAA-certified. Every claim submitted correctly the first time.',
    },
    {
      icon: <FaBolt />,
      title: 'Denial Management',
      description: 'AI-powered appeal strategy, root cause analysis. 45% denial reduction. We fight every denial aggressively.',
    },
    {
      icon: <FaChartLine />,
      title: 'AR & Financial Reporting',
      description: 'Real-time dashboards, KPI tracking, predictive forecasts. You know exactly where your money is at all times.',
    },
  ];

  return (
    <section
    id='medical-roles-section'
      style={{
        width: '100%',
        background: '#ffffff',
        padding: 'clamp(80px, 8vw, 100px) 0',
        // marginTop: '120px',
      }}
      
    >
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          


            <h2 className="mb-3" style={{ 
              color: '#002856', 
              fontSize: '2.5rem', 
              fontWeight: '700',
              fontFamily: "'Plus Jakarta Sans', sans-serif"
            }}>
              <span
                style={{
                  background: ' #3498db',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                One team handles everything from&nbsp;
              </span>

              <span
                style={{
                  background: ' #1abc9c',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                patient call to payment
              </span>
            </h2>

            {/* button in center of hire  */}
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
            End-to-end medical revenue cycle management designed specifically for your practice
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
