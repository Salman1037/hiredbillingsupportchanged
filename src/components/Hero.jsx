import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { FaTooth, FaStethoscope, FaShieldAlt } from 'react-icons/fa';
import { createPortal } from 'react-dom';
import DrAfreenImage from '../assets/images/avatar/img1.webp';
import DrNagwaImage from '../assets/images/avatar/img2.webp';
import DrNaikImage from '../assets/images/avatar/img3.webp';

// --- Styles ---
const heroSection = {
  background: '#fff',
  minHeight: '700px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',
  padding: 'var(--header-space, 110px) 0 32px 0', // Responsive to header height
};
const heroWrap = {
  zIndex: 2,
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'center',
  width: '100%',
  maxWidth: 1280,
  margin: '0 auto',
  padding: '0 24px',
  gap: 48, // More breathing room between columns
};
const left = {
  flex: 1,
  minWidth: 320,
  maxWidth: 600,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  paddingTop: 24,
};
const right = {
  flex: 1,
  minWidth: 320,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', // Center the card stack horizontally
  justifyContent: 'center',
  gap: 0,
  height: '100%',
};
const badge = {
  background: '#E0F7EF',
  color: '#199A6F',
  fontWeight: 600,
  fontSize: 15,
  borderRadius: 18,
  padding: '4px 18px',
  marginBottom: 18,
  display: 'inline-block',
  letterSpacing: 0.1,
};
const headline = {
  fontWeight: 900,
  fontSize: 'clamp(2.6rem, 5.8vw, 4.4rem)',
  color: '#4D9BD6',
  lineHeight: 1.02,
  marginBottom: 0,
  letterSpacing: '-0.08em',
  maxWidth: 560,
};
const subtext = {
  fontWeight: 400,
  fontSize: 'clamp(1.05rem, 2vw, 1.35rem)',
  color: '#52525B',
  lineHeight: 1.6,
  maxWidth: 560,
  margin: '22px 0 32px 0',
};
const ctaRow = {
  display: 'flex',
  gap: 14,
  marginBottom: 24,
};
const ctaBtn = {
  background: '#199A6F',
  color: '#fff',
  fontWeight: 700,
  fontSize: '1.08rem',
  padding: '13px 32px',
  borderRadius: 12,
  border: 'none',
  boxShadow: '0 4px 24px 0 rgba(139,92,246,0.10)',
  transition: 'background 0.2s',
  cursor: 'pointer',
  marginRight: 8,
};
const ctaBtnSecondary = {
  background: '#fff',
  color: '#18181B',
  fontWeight: 700,
  fontSize: '1.08rem',
  padding: '13px 32px',
  borderRadius: 12,
  border: '1.5px solid #E5E7EB',
  boxShadow: '0 2px 12px 0 rgba(0,0,0,0.04)',
  cursor: 'pointer',
};
const trustRow = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 18,
  marginTop: 18,
  alignItems: 'center',
  fontSize: 15,
  color: '#52525B',
};
const trustItem = {
  display: 'flex',
  alignItems: 'center',
  gap: 6,
  background: '#F4F4F5',
  borderRadius: 16,
  padding: '4px 12px',
  fontWeight: 500,
};
const cardGrid = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', // Center the cards within the grid
  gap: 18, // Add vertical gap between top and bottom cards
  marginTop: 8,
  position: 'relative',
  minHeight: 320,
};
const cardRow = {
  display: 'flex',
  flexDirection: 'row',
  gap: 18,
  marginTop: -18, // Reduce negative margin for more balanced overlap
};
const topCardWrap = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  marginBottom: 0,
  zIndex: 2,
};
const card = {
  background: 'transparent', // No background
  borderRadius: 24,
  boxShadow: 'none', // No shadow
  border: 'none', // No border
  padding: 0, // No padding
  minWidth: 180,
  maxWidth: 210,
  minHeight: 280, // Increased height
  height: 280,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: 8,
  position: 'relative',
};
const cardBadge = {
  position: 'absolute',
  top: 12,
  right: 12,
  background: '#E0F7EF',
  color: '#199A6F',
  fontWeight: 700,
  fontSize: 13,
  borderRadius: 12,
  padding: '2px 10px',
};
const cardImg = {
  width: '100%',
  height: '100%', // Fill the container
  borderRadius: 18,
  objectFit: 'cover',
  boxShadow: '0 8px 32px 0 rgba(0,0,0,0.15)', // Add shadow to image directly
  background: '#F4F4F5',
};
const cardName = {
  display: 'none', // Hide details
};
const cardRole = {
  display: 'none', // Hide details
};
const cardTags = {
  display: 'none', // Hide details
};
const tag = {
  fontSize: 12,
  fontWeight: 600,
  borderRadius: 8,
  padding: '2px 8px',
  background: '#EDE9FE',
  color: '#4D9BD6',
};
const tagGreen = {
  ...tag,
  background: '#E0F7EF',
  color: '#199A6F',
};

function Hero() {
  const navigate = useNavigate();
  
  // Dynamically set --header-space CSS variable based on header height
  React.useEffect(() => {
    const header = document.querySelector('header, .site_header_1, .main-header, .hbs-header');
    if (header) {
      const headerHeight = header.offsetHeight || 110;
      document.body.style.setProperty('--header-space', `${headerHeight + 32}px`);
    }
    return () => {
      document.body.style.removeProperty('--header-space');
    };
  }, []);

  // Animation keyframes and hover effects
  const cardKeyframes = `
    @keyframes cardFadeInUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes cardFloat { 0% { transform: translateY(0); } 50% { transform: translateY(-16px); } 100% { transform: translateY(0); } }

    /* Smooth card hover */
    .hero-card {
      transition: box-shadow 0.32s cubic-bezier(.4,1,.4,1), transform 0.32s cubic-bezier(.4,1,.4,1), border 0.22s;
    }
    .hero-card:hover {
      transform: translateY(-10px) scale(1.045);
      z-index: 3;
    }
    .hero-card:hover .hero-card-img {
      box-shadow: 0 12px 36px 0 rgba(139,92,246,0.22), 0 2px 8px 0 rgba(0,0,0,0.12);
    }
    /* Top card gradient */
    .hero-card.top-card {
      background: transparent;
    }
    /* Smooth button hover */
    .hero-btn, .hero-btn-secondary {
      transition: background 0.22s, color 0.22s, box-shadow 0.22s, transform 0.22s;
    }
    .hero-btn:hover {
      background: #4D9BD6;
      box-shadow: 0 8px 32px 0 rgba(139,92,246,0.22);
      transform: translateY(-2px) scale(1.055);
    }
    .hero-btn-secondary:hover {
      background: #F4F4F5;
      color: #4D9BD6;
      border-color: #4D9BD6;
      transform: translateY(-2px) scale(1.055);
    }
    @media (max-width: 900px) {
      .hero-wrap {
        flex-direction: column;
        gap: 32px;
        align-items: center;
      }
      .hero-btn, .hero-btn-secondary {
        width: 100%;
        margin-right: 0 !important;
        margin-bottom: 10px;
      }
    }
  `;

  // Animation styles
  const animatedCard = {
    animation: 'cardFadeInUp 0.8s cubic-bezier(0.22,1,0.36,1) both',
  };
  const animatedCardDelay = delay => ({
    ...animatedCard,
    animationDelay: `${delay}s`,
  });
  const floatingCard = {
    ...animatedCard,
    animation: 'cardFadeInUp 0.8s cubic-bezier(0.22,1,0.36,1) both, cardFloat 3.2s ease-in-out infinite',
    animationDelay: '0.1s, 0s',
  };

  // Service card popup hooks (must be at top level)
  const dentalRef = useRef();
  const [showDental, setShowDental] = useState(false);
  const dentalHideTimer = useRef();
  const medicalRef = useRef();
  const [showMedical, setShowMedical] = useState(false);
  const medicalHideTimer = useRef();
  const insuranceRef = useRef();
  const [showInsurance, setShowInsurance] = useState(false);
  const insuranceHideTimer = useRef();

  const createHoverHandlers = (setShow, hideTimerRef) => ({
    onEnter: () => {
      if (hideTimerRef.current) {
        clearTimeout(hideTimerRef.current);
        hideTimerRef.current = undefined;
      }
      setShow(true);
    },
    onLeave: () => {
      if (hideTimerRef.current) {
        clearTimeout(hideTimerRef.current);
      }
      hideTimerRef.current = setTimeout(() => {
        setShow(false);
        hideTimerRef.current = undefined;
      }, 140);
    },
  });

  const dentalHover = createHoverHandlers(setShowDental, dentalHideTimer);
  const medicalHover = createHoverHandlers(setShowMedical, medicalHideTimer);
  const insuranceHover = createHoverHandlers(setShowInsurance, insuranceHideTimer);

  return (
    <section style={heroSection}>
      <style>{cardKeyframes}</style>
      <div style={heroWrap} className="hero-wrap">
        {/* Left Side */}
        <div style={left}>
          <div style={badge}>64 more businesses just hired through HBS</div>
          <h1 style={headline}>
            You didn't open a practice to manage chaos.
          </h1>
          <div style={subtext}>
           We handle everything from patient calls to payments. So you can focus on care, not operations.
          </div>
          <div style={ctaRow}>
            <Link to="/contact" style={ctaBtn} className="hero-btn" aria-label="Contact HBS">Contact HBS →</Link>
            <Link to="/provider-portal" style={ctaBtnSecondary} className="hero-btn-secondary" aria-label="Provider Portal">Provider Portal</Link>
          </div>
          <div style={trustRow}>

            <div style={trustItem}><span style={{color:'#199A6F',fontWeight:700}}>✓</span> HIPAA compliant</div>
            <div style={trustItem}><span style={{color:'#199A6F',fontWeight:700}}>$0</span> replacement guarantee</div>
            <div style={trustItem}><span style={{color:'#199A6F',fontWeight:700}}>4.5★</span> Trustpilot reviews</div>
          </div>
        </div>
        {/* Right Side: Cards with animation */}
        <div style={right}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', marginTop: 28, gap: 12 }}>
            {/* Dental Card */}
            <>
              <div
                ref={dentalRef}
                style={{...card, minWidth: 80, maxWidth: 100, minHeight: 44, height: 44, padding: '0 10px', position: 'relative', zIndex: 20, cursor: 'pointer', boxShadow: '0 2px 8px 0 rgba(139,92,246,0.07)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, color: '#4D9BD6', background: '#f8fafc'}}
                className="hero-card"
                onClick={() => navigate('/dental-services')}
                onMouseEnter={dentalHover.onEnter}
                onMouseLeave={dentalHover.onLeave}
                onFocus={dentalHover.onEnter}
                onBlur={dentalHover.onLeave}
                tabIndex={0}
              >
                Dental
              </div>
              <ServiceCardPopup
                show={showDental}
                anchorRef={dentalRef}
                onMouseEnter={dentalHover.onEnter}
                onMouseLeave={dentalHover.onLeave}
              >
                Stop managing insurance headaches. We handle verifications, claims, and payments so you can focus on smiles.
              </ServiceCardPopup>
            </>
            {/* Medical Card */}
            <>
              <div
                ref={medicalRef}
                style={{...card, minWidth: 80, maxWidth: 100, minHeight: 44, height: 44, padding: '0 10px', position: 'relative', zIndex: 20, cursor: 'pointer', boxShadow: '0 2px 8px 0 rgba(139,92,246,0.07)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, color: '#4D9BD6', background: '#f8fafc'}}
                className="hero-card"
                onClick={() => navigate('/medical-services')}
                onMouseEnter={medicalHover.onEnter}
                onMouseLeave={medicalHover.onLeave}
                onFocus={medicalHover.onEnter}
                onBlur={medicalHover.onLeave}
                tabIndex={0}
              >
                Medical
              </div>
              <ServiceCardPopup
                show={showMedical}
                anchorRef={medicalRef}
                onMouseEnter={medicalHover.onEnter}
                onMouseLeave={medicalHover.onLeave}
              >
                We handle your entire patient revenue cycle so you can focus on patient care not paperwork.
              </ServiceCardPopup>
            </>
            {/* Insurance Card */}
            <>
              <div
                ref={insuranceRef}
                style={{...card, minWidth: 80, maxWidth: 100, minHeight: 44, height: 44, padding: '0 10px', position: 'relative', zIndex: 20, cursor: 'pointer', boxShadow: '0 2px 8px 0 rgba(139,92,246,0.07)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, color: '#4D9BD6', background: '#f8fafc'}}
                className="hero-card"
                onClick={() => navigate('/insurance-services')}
                onMouseEnter={insuranceHover.onEnter}
                onMouseLeave={insuranceHover.onLeave}
                onFocus={insuranceHover.onEnter}
                onBlur={insuranceHover.onLeave}
                tabIndex={0}
              >
                Insurance
              </div>
              <ServiceCardPopup
                show={showInsurance}
                anchorRef={insuranceRef}
                onMouseEnter={insuranceHover.onEnter}
                onMouseLeave={insuranceHover.onLeave}
              >
                We maximize your reimbursements and minimize denials so you can expand care without expanding admin overhead.
              </ServiceCardPopup>
            </>
          </div>
          <div style={cardGrid}>
            <div style={topCardWrap}>
              <div style={{
                ...card,
                minWidth: 240,
                maxWidth: 270,
                minHeight: 330, // Increased height
                height: 330,
                marginBottom: 0,
                position: 'relative',
                zIndex: 2,
                ...floatingCard
              }} className="hero-card top-card">
                <img src={DrAfreenImage} alt="Dr. Afreen Sheikh" style={cardImg} className="hero-card-img" />
                <div style={cardName}>Dr. Afreen Sheikh</div>
                <div style={cardRole}>Patient Care Assistant</div>
                <div style={cardTags}>
                  <span style={tagGreen}>Verified</span>
                  <span style={tag}>Medical</span>
                  <span style={tagGreen}>Certified</span>
                </div>
              </div>
            </div>
            <div style={cardRow}>
              <div style={{...card, marginTop: 0, minWidth: 220, maxWidth: 250, minHeight: 310, height: 310, position: 'relative', zIndex: 1, ...animatedCardDelay(0.3)}} className="hero-card">
                <img src={DrNagwaImage} alt="Nagwa S. Awad" style={cardImg} className="hero-card-img" />
                <div style={cardName}>Nagwa S. Awad</div>
                <div style={cardRole}>Treatment Coordinator</div>
                <div style={cardTags}>
                  <span style={tagGreen}>Verified</span>
                  <span style={tag}>Dental</span>
                  <span style={tagGreen}>Certified</span>
                </div>
              </div>
              <div style={{...card, marginTop: 0, minWidth: 220, maxWidth: 250, minHeight: 310, height: 310, position: 'relative', zIndex: 1, ...animatedCardDelay(0.5)}} className="hero-card">
                <img src={DrNaikImage} alt="Dr. Harmesh Naik" style={cardImg} className="hero-card-img" />
                <div style={cardName}>Dr. Harmesh Naik</div>
                <div style={cardRole}>Insurance Auditor</div>
                <div style={cardTags}>
                  <span style={tagGreen}>Verified</span>
                  <span style={tag}>Insurance</span>
                  <span style={tagGreen}>Certified</span>
                </div>
              </div>
            </div>
          </div>

          {/* three small cards of service with icons and description on hover like popup or any smooth effect will be */}
          
        </div>
      </div>
    </section>
  );
}

function ServiceCardPopup({ show, anchorRef, children, onMouseEnter, onMouseLeave }) {
  const [coords, setCoords] = React.useState({ left: 0, top: 0 });
  React.useEffect(() => {
    if (show && anchorRef.current) {
      const rect = anchorRef.current.getBoundingClientRect();
      setCoords({
        left: rect.left + rect.width / 2,
        top: rect.top, // anchor at the top of the button
      });
    }
  }, [show, anchorRef]);
  if (!show && coords.left === 0 && coords.top === 0) return null;
  return createPortal(
    <div style={{
      position: 'fixed',
      left: coords.left,
      top: coords.top,
      transform: show
        ? 'translate(-50%, calc(-100% - 10px))'
        : 'translate(-50%, calc(-100% + 10px))',
      width: 280,
      minHeight: 88,
      background: '#fff',
      borderRadius: 10,
      boxShadow: '0 8px 32px 0 rgba(139,92,246,0.13), 0 2px 8px 0 rgba(0,0,0,0.10)',
      padding: '12px 14px',
      zIndex: 20000,
      fontSize: 14,
      color: '#444',
      boxSizing: 'border-box',
      border: '1.5px solid #F3F0FF',
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      pointerEvents: show ? 'auto' : 'none',
      opacity: show ? 1 : 0,
      transition: 'opacity 0.22s cubic-bezier(.4,1,.4,1), transform 0.22s cubic-bezier(.4,1,.4,1)',
    }} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {children}
    </div>,
    document.body
  );
}

export default Hero;