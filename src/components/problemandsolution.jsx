import React, { useEffect, useRef, useState } from 'react';

const problems = [
  {
    title: 'Operations pull staff away from core work',
    desc: 'Your team spends time coordinating tasks instead of completing them.',
  },
  {
    title: "Hiring doesn't actually create capacity",
    desc: 'New hires ramp slowly and still leave coverage gaps.',
  },
  {
    title: 'Remote hiring provides no control or visibility',
    desc: "You can't clearly see who is doing what or how securely.",
  },
];

const solutions = [
  {
    title: 'Certified, role-aligned professionals',
    desc: 'Prepared for your workflows and systems before day one.',
  },
  {
    title: 'Secure, monitored operations',
    desc: 'Equipment, campuses, payroll, HR, compliance - all included.',
  },
  {
    title: 'Continuous coverage with dedicated employees',
    desc: 'Full-time, career-driven employees, not contractors. Invested in your success.',
  },
];

const XIcon = () => (
  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
    <line x1="3" y1="3" x2="11" y2="11" stroke="#EF4444" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="11" y1="3" x2="3" y2="11" stroke="#EF4444" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

const CheckIcon = () => (
  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
    <polyline
      points="2,7 6,11 12,3"
      stroke="#22C55E"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const heroFontStack = 'Inter, Open Sans, Arial, sans-serif';

const Card = ({ item, type, index, visible }) => {
  const [hovered, setHovered] = useState(false);
  const isProblem = type === 'problem';

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '14px',
        padding: '18px 20px',
        borderRadius: '14px',
        border: `1px solid ${hovered ? (isProblem ? '#FCA5A5' : 'var(--brand-green-light)') : 'var(--brand-blue-pale)'}`,
        background: hovered ? (isProblem ? '#FFFBFB' : 'var(--brand-green-light)') : '#FFFFFF',
        marginBottom: '12px',
        transform: visible ? (hovered ? 'translateX(6px)' : 'translateX(0)') : 'translateX(-24px)',
        opacity: visible ? 1 : 0,
        transition: `opacity 0.5s ease ${index * 0.1 + 0.2}s, transform ${
          hovered ? '0.25s' : '0.5s'
        } ${hovered ? 'ease' : `ease ${index * 0.1 + 0.2}s`}, border-color 0.25s ease, background 0.25s ease`,
        boxShadow: hovered
          ? isProblem
            ? '0 6px 24px rgba(239,68,68,0.08)'
            : '0 6px 24px rgba(34,197,94,0.08)'
          : '0 1px 3px rgba(0,0,0,0.03)',
        cursor: 'default',
      }}
    >
      <div
        style={{
          flexShrink: 0,
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          border: `1px solid ${isProblem ? '#FCA5A5' : 'var(--brand-green-light)'}`,
          background: isProblem ? '#FEF2F2' : 'var(--brand-green-light)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '2px',
          transition: 'transform 0.2s ease',
          transform: hovered ? 'scale(1.1)' : 'scale(1)',
        }}
      >
        {isProblem ? <XIcon /> : <CheckIcon />}
      </div>

      <div>
        <p
          style={{
            fontFamily: heroFontStack,
            fontWeight: 600,
            fontSize: '14.5px',
            color: '#0F172A',
            marginBottom: '5px',
            lineHeight: 1.35,
          }}
        >
          {item.title}
        </p>
        <p
          style={{
            fontFamily: heroFontStack,
            fontSize: '13.5px',
            color: '#64748B',
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          {item.desc}
        </p>
      </div>
    </div>
  );
};

const Problemsolution = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const headStyle = {
    fontFamily: heroFontStack,
    fontWeight: 900,
    fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
    color: '#0F172A',
    lineHeight: 1.1,
    marginBottom: '14px',
    letterSpacing: '-0.5px',
  };

  const subStyle = {
    fontFamily: heroFontStack,
    fontSize: '15px',
    color: '#475569',
    lineHeight: 1.7,
    marginBottom: '28px',
  };

  const badgeBase = {
    display: 'inline-block',
    padding: '6px 16px',
    borderRadius: '8px',
    fontSize: '11px',
    fontWeight: 700,
    letterSpacing: '1.5px',
    marginBottom: '20px',
    fontFamily: heroFontStack,
    textTransform: 'uppercase',
    border: '1px solid currentColor',
    opacity: 0.85,
  };

  return (
    <>
      <div
        ref={ref}
        style={{
          padding: '0 clamp(20px, 5vw, 48px)',
          backgroundColor: 'var(--brand-bg)',
          minHeight: 'auto',
          display: 'block',
          paddingTop: '0',
          paddingBottom: '0',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%', paddingTop: '0' }}>
          <div
            style={{
              textAlign: 'center',
              marginBottom: '0',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease',
            }}
          >
           
         
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '28px',
              padding: '0',
            }}
          >
            <div
              style={{
                padding: 'clamp(32px, 5vw, 48px)',
                background: '#FFFFFF',
                borderRadius: '16px',
                border: '2px solid #E0F2FE',
                boxShadow: '0 4px 20px rgba(15,88,206,0.06)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '4px',
                height: '100%',
                background: 'linear-gradient(180deg, #4D9BD6, #3B82F6)',
              }} />
              <div style={{ marginBottom: '28px', paddingLeft: '12px' }}>
                <span style={{ ...badgeBase, background: 'transparent', color: 'var(--brand-blue)', borderColor: 'var(--brand-blue)' }}>
                  The Problem
                </span>
                <h3 style={headStyle}>Your growth is outpacing your workforce</h3>
                <p style={subStyle}>
                  Administrative workload is expanding faster than internal capacity. Overtime, delays, and quality
                  issues become routine and compliance risk increases.
                </p>
              </div>

              {problems.map((item, index) => (
                <Card key={item.title} item={item} type="problem" index={index} visible={visible} />
              ))}
            </div>

            <div
              style={{
                padding: 'clamp(32px, 5vw, 48px)',
                background: '#FFFFFF',
                borderRadius: '16px',
                border: '2px solid #E0FDF4',
                boxShadow: '0 4px 20px rgba(34,197,94,0.06)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '4px',
                height: '100%',
                background: 'linear-gradient(180deg, #22C55E, #10B981)',
              }} />
              <div style={{ marginBottom: '28px', paddingLeft: '12px' }}>
                <span style={{ ...badgeBase, background: 'transparent', color: 'var(--brand-green)', borderColor: 'var(--brand-green)' }}>
                  The Solution
                </span>
                <h3 style={headStyle}>A workforce infrastructure built to scale</h3>
                <p style={subStyle}>
                  Hired Billing Support provides trained, compliant professionals inside a managed operating environment so work gets
                  done reliably without adding overhead or risk.
                </p>
              </div>

              {solutions.map((item, index) => (
                <Card key={item.title} item={item} type="solution" index={index} visible={visible} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Problemsolution;