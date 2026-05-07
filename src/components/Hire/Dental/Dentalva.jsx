
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaStethoscope } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';

const DentalVA = () => {
  const dentalRoles = [
    {
      title: 'Dental Scheduling Coordinator',
      description:
        'Manages appointment scheduling, incoming calls, and patient inquiries.',
    },
    {
      title: 'Dental Insurance Coordinator',
      description:
        'Verifies patient insurance coverage, handles pre-authorizations, and manages claims.',
    },
    {
      title: 'Dental Billing Coordinator',
      description:
        'Processes billing, tracks payments, manages collections, and reconciles patient accounts.',
    },
    {
      title: 'Dental Scribe',
      description:
        'Documents patient encounters in real-time during telehealth or in-person visits.',
    },
    {
      title: 'Patient Care Coordinator',
      description:
        'Coordinates patient care, manages intake, and organizes medical histories and follow-ups.',
    },
  ];

  return (
    <section
      className="py-5 position-relative"   id="dental-roles-section"
      style={{
        background: '#ffffff',
        overflow: 'hidden',
      }}
    >
      {/* Background Glow */}
      <div
        style={{
          position: 'absolute',
          top: '-150px',
          left: '-150px',
          width: '320px',
          height: '320px',
          background: 'rgba(52, 152, 219,0.08)',
          borderRadius: '50%',
          filter: 'blur(80px)',
        }}
      />

      <Container>
        {/* Heading */}
        <Row className="justify-content-center">
          <Col lg={9} className="text-center">
            <h2
              style={{
                fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
                fontWeight: '800',
                color: '#08214D',
                lineHeight: '1.15',
                letterSpacing: '-1px',
                marginBottom: '20px',
              }}
            >
              Scale medical operations with compliant support.
            </h2>

            <p
              style={{
                color: '#667085',
                fontSize: '1.08rem',
                lineHeight: '1.9',
                maxWidth: '760px',
                margin: '0 auto',
              }}
            >
              Hire Billing Support professionals arrive trained in EHR workflows,
              ICD-10 and CPT coding, and HIPAA requirements.
            </p>

            {/* Button */}
            <div className="mt-4">
              <a
                href="#dental-roles"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '16px 34px',
                  borderRadius: '18px',
                  background:
                    'linear-gradient(135deg, #3498db 0%, #1abc9c 100%)',
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontWeight: '700',
                  fontSize: '1rem',
                  transition: 'all 0.35s ease',
                  boxShadow: '0 12px 35px rgba(52,152,219,0.25)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow =
                    '0 20px 40px rgba(26,188,156,0.28)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow =
                    '0 12px 35px rgba(52,152,219,0.25)';
                }}
              >
                Browse Medical Roles
                <BsArrowRight size={18} />
              </a>
            </div>
          </Col>
        </Row>

        {/* Cards */}
        <Row className="g-4 mt-5">
          {dentalRoles.map((role, index) => (
            <Col lg={4} md={6} key={index}>
              <div
                style={{
                  background: '#ffffff',
                  border: '1px solid #e9eef5',
                  borderRadius: '28px',
                  padding: '35px 30px',
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.4s ease',
                  minHeight: '250px',
                  boxShadow: '0 8px 30px rgba(8,33,77,0.04)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.border =
                    '1px solid rgba(52,152,219,0.25)';
                  e.currentTarget.style.boxShadow =
                    '0 20px 45px rgba(52,152,219,0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.border = '1px solid #e9eef5';
                  e.currentTarget.style.boxShadow =
                    '0 8px 30px rgba(8,33,77,0.04)';
                }}
              >
                {/* Top Glow */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-60px',
                    right: '-40px',
                    width: '150px',
                    height: '150px',
                    background: 'rgba(26,188,156,0.08)',
                    borderRadius: '50%',
                    filter: 'blur(15px)',
                  }}
                />

                {/* Icon */}
                <div
                  style={{
                    width: '62px',
                    height: '62px',
                    borderRadius: '18px',
                    background:
                      'linear-gradient(135deg, rgba(52,152,219,0.14), rgba(26,188,156,0.14))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#3498db',
                    fontSize: '26px',
                    marginBottom: '28px',
                  }}
                >
                  <FaStethoscope />
                </div>

                {/* Title */}
                <h3
                  style={{
                    color: '#08214D',
                    fontSize: '1.3rem',
                    fontWeight: '700',
                    marginBottom: '18px',
                    lineHeight: '1.5',
                  }}
                >
                  {role.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    color: '#667085',
                    fontSize: '0.98rem',
                    lineHeight: '1.9',
                    marginBottom: 0,
                  }}
                >
                  {role.description}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default DentalVA;