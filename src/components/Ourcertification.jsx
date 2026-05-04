
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import hipaaImg from '../assets/images/hero/HPPPA.png';
import soc2Img from '../assets/images/hero/ASIPA.png';
import iso27001Img from '../assets/images/hero/1S027001.png';

const certifications = [
  { id: 1, image: hipaaImg, alt: 'HIPAA Compliant', label: 'HIPAA' },
  { id: 2, image: soc2Img, alt: 'AICPA SOC 2', label: 'SOC 2' },
  { id: 3, image: iso27001Img, alt: 'ISO 27001', label: 'ISO 27001' },
];

// We triple the list so the infinite loop has enough content on any screen size
const loopItems = [...certifications, ...certifications, ...certifications];

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,700&family=DM+Sans:wght@400;500;600&display=swap');

  .cert-section {
    background: #F8FAFC;
    padding: 72px 24px 80px;
    overflow: hidden;
    font-family: 'DM Sans', sans-serif;
  }

  .cert-inner {
    max-width: 860px;
    margin: 0 auto;
  }

  .cert-eyebrow {
    text-align: center;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 2.2px;
    text-transform: uppercase;
    color: #94A3B8;
    margin-bottom: 16px;
  }

  .cert-heading {
    font-family: 'Fraunces', serif;
    font-size: clamp(1.9rem, 4vw, 2.8rem);
    font-weight: 700;
    text-align: center;
    line-height: 1.15;
    letter-spacing: -0.025em;
    color: #0F172A;
    margin-bottom: 18px;
  }

  .cert-heading .word-blue {
    background: linear-gradient(90deg, #0072CE, #00A6E6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .cert-heading .word-teal {
    background: linear-gradient(90deg, #0BA07A, #1abc9c);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .cert-desc {
    text-align: center;
    font-size: 15.5px;
    color: #64748B;
    line-height: 1.72;
    max-width: 580px;
    margin: 0 auto 56px;
  }

  /* ── MARQUEE TRACK ── */
  .marquee-outer {
    position: relative;
    overflow: hidden;
    width: 100%;
    margin: 0 -24px;
    padding: 0 24px;
  }

  /* Fade edges */
  .marquee-outer::before,
  .marquee-outer::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 120px;
    z-index: 2;
    pointer-events: none;
  }
  .marquee-outer::before {
    left: 0;
    background: linear-gradient(to right, #F8FAFC, transparent);
  }
  .marquee-outer::after {
    right: 0;
    background: linear-gradient(to left, #F8FAFC, transparent);
  }

  .marquee-track {
    display: flex;
    width: max-content;
    animation: marquee-scroll 22s linear infinite;
  }

  .marquee-track:hover {
    animation-play-state: paused;
  }

  @keyframes marquee-scroll {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-33.333%); }
  }

  .cert-logo-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 28px 44px;
    margin: 0 12px;
    background: #FFFFFF;
    border: 1px solid #E8EEF4;
    border-radius: 16px;
    min-width: 180px;
    transition: box-shadow 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
    cursor: default;
  }

  .cert-logo-card:hover {
    box-shadow: 0 8px 32px rgba(0, 114, 206, 0.1);
    border-color: #BAD8F5;
    transform: translateY(-4px);
  }

  .cert-logo-card img {
    height: 56px;
    width: auto;
    object-fit: contain;
    display: block;
  }

  .cert-logo-label {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 1.1px;
    text-transform: uppercase;
    color: #94A3B8;
  }

  /* ── TRUST BADGE ROW ── */
  .cert-trust-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 28px;
    margin-top: 44px;
    flex-wrap: wrap;
  }

  .cert-trust-pill {
    display: flex;
    align-items: center;
    gap: 8px;
    background: #FFFFFF;
    border: 1px solid #E8EEF4;
    border-radius: 50px;
    padding: 8px 18px;
    font-size: 13px;
    color: #475569;
    font-weight: 500;
  }

  .cert-trust-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  /* ── CTA SECTION ── */
  .cta-section {
    background: linear-gradient(135deg, #002856 0%, #00416A 60%, #005F8A 100%);
    padding: 52px 32px;
    font-family: 'DM Sans', sans-serif;
    position: relative;
    overflow: hidden;
  }

  .cta-section::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: radial-gradient(circle at 80% 50%, rgba(0,166,230,0.18) 0%, transparent 60%),
                      radial-gradient(circle at 10% 80%, rgba(46,251,118,0.07) 0%, transparent 50%);
    pointer-events: none;
  }

  .cta-inner {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
    position: relative;
    z-index: 1;
    flex-wrap: wrap;
  }

  .cta-text-block {
    flex: 1;
    min-width: 260px;
  }

  .cta-eyebrow {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: rgba(255,255,255,0.45);
    margin-bottom: 10px;
  }

  .cta-heading {
    font-family: 'Fraunces', serif;
    font-size: clamp(1.4rem, 3vw, 2rem);
    font-weight: 700;
    color: #FFFFFF;
    line-height: 1.2;
    letter-spacing: -0.02em;
    margin: 0;
  }

  .cta-heading span {
    color: #2EFB76;
  }

  .cta-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: #2EFB76;
    color: #002856;
    font-family: 'DM Sans', sans-serif;
    font-weight: 700;
    font-size: 13.5px;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    border: none;
    border-radius: 50px;
    padding: 16px 36px;
    cursor: pointer;
    transition: background 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
    box-shadow: 0 0 24px rgba(46,251,118,0.3);
    flex-shrink: 0;
    white-space: nowrap;
  }

  .cta-btn:hover {
    background: #1ce868;
    transform: translateY(-3px);
    box-shadow: 0 10px 32px rgba(46,251,118,0.45);
  }

  .cta-btn:active {
    transform: translateY(-1px);
  }

  .cta-btn-arrow {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    background: rgba(0,40,86,0.15);
    border-radius: 50%;
    flex-shrink: 0;
    transition: transform 0.2s ease;
  }

  .cta-btn:hover .cta-btn-arrow {
    transform: translateX(3px);
  }
`;

const Ourcertification = () => {
  const navigate = useNavigate();
  const [btnHover, setBtnHover] = useState(false);

  return (
    <>
      <style>{styles}</style>

      {/* ── CERTIFICATIONS SECTION ── */}
      <section className="cert-section">
        <div className="cert-inner">
          <p className="cert-eyebrow">Security &amp; Compliance</p>

          <h2 className="cert-heading">
            <span className="word-blue">Compliance That Builds</span>{' '}
            <span className="word-teal">Confidence</span>
          </h2>

          <p className="cert-desc">
            Over 500 businesses trust HBS as their remote staffing solution
            because we meet the strictest security and compliance standards. We
            safeguard sensitive data while helping you grow with confidence.
          </p>
        </div>

        {/* Infinite logo marquee — full bleed */}
        <div className="marquee-outer">
          <div className="marquee-track">
            {loopItems.map((cert, i) => (
              <div className="cert-logo-card" key={`${cert.id}-${i}`}>
                <img src={cert.image} alt={cert.alt} />
                <span className="cert-logo-label">{cert.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Trust pills */}
        <div className="cert-trust-row">
          <div className="cert-trust-pill">
            <span className="cert-trust-dot" style={{ background: '#22C55E' }} />
            500+ Businesses Trust Us
          </div>
          <div className="cert-trust-pill">
            <span className="cert-trust-dot" style={{ background: '#00A6E6' }} />
            Bank-Grade Data Security
          </div>
          <div className="cert-trust-pill">
            <span className="cert-trust-dot" style={{ background: '#7C3AED' }} />
            Fully Audited Operations
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      {/* <section className="cta-section">
        <div className="cta-inner">
          <div className="cta-text-block">
            <p className="cta-eyebrow">Get Started Today</p>
            <h2 className="cta-heading">
              Ready to Optimize Your{' '}
              <span>Revenue Cycle Management?</span>
            </h2>
          </div>

          <button
            className="cta-btn"
            onClick={() => navigate('/contact')}
          >
            Schedule Demo
            <span className="cta-btn-arrow">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M6 2l4 4-4 4" stroke="#002856" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </button>
        </div>
      </section> */}
    </>
  );
};

export default Ourcertification;