import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const HIRE_OPTIONS = [
  { label: '1 team member', value: 1 },
  { label: '2 team members', value: 2 },
  { label: '3–5 team members', value: 4 },
  { label: '6–10 team members', value: 8 },
  { label: '11–20 team members', value: 15 },
  { label: '20+ team members', value: 25 },
];

const SALARY_OPTIONS = [
  { label: '$35,000 / year', value: 35000 },
  { label: '$45,000 / year', value: 45000 },
  { label: '$55,000 / year', value: 55000 },
  { label: '$65,000 / year', value: 65000 },
  { label: '$80,000 / year', value: 80000 },
  { label: '$100,000 / year', value: 100000 },
];

const INDUSTRY_OPTIONS = [
  { label: 'Medical', multiplier: 1.38 },
  { label: 'Dental', multiplier: 1.34 },
  { label: 'Insurance', multiplier: 1.36 },
  { label: 'Other', multiplier: 1.22 },
];

const CHALLENGE_OPTIONS = [
  { label: 'Cost is too high', savingsBoost: 1.0 },
  { label: 'Hard to find talent', savingsBoost: 0.95 },
  { label: 'Slow hiring process', savingsBoost: 0.92 },
  { label: 'High turnover', savingsBoost: 1.05 },
  { label: 'Compliance risk', savingsBoost: 1.08 },
  { label: 'Coverage gaps', savingsBoost: 0.98 },
];

/* ─────────────────────────────────────────
   SAVINGS FORMULA
   HBS typically costs ~40–50% of US equivalent.
   We model: savings = (US salary × industry multiplier × challenge boost × hires) × 0.52
   + one-time recruitment cost avoided ($8k–$15k per hire)
───────────────────────────────────────── */
function calcSavings({ hires, salary, industryMult, challengeBoost }) {
  const usCost = salary * industryMult * hires;
  const hbsCost = usCost * 0.48;
  const annualSaving = (usCost - hbsCost) * challengeBoost;
  const recruitmentSaving = hires * 11000;
  const total = Math.round((annualSaving + recruitmentSaving) / 100) * 100;
  const monthly = Math.round(total / 12 / 100) * 100;
  const fiveYear = total * 5;
  const roiPercent = Math.round(((total) / (hbsCost)) * 100);
  return { total, monthly, fiveYear, roiPercent };
}

/* ─────────────────────────────────────────
   ANIMATED COUNTER
───────────────────────────────────────── */
function useCounter(target, duration = 900) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) cancelAnimationFrame(ref.current);
    const start = Date.now();
    const from = 0;
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(Math.round(from + (target - from) * eased));
      if (progress < 1) ref.current = requestAnimationFrame(tick);
    };
    ref.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(ref.current);
  }, [target, duration]);
  return val;
}

/* ─────────────────────────────────────────
   SELECT COMPONENT
───────────────────────────────────────── */
function Select({ label, options, value, onChange, labelKey = 'label', valueKey }) {
  return (
    <div style={s.field}>
      <label style={s.label}>{label}</label>
      <div style={s.selectWrap}>
        <select
          style={s.select}
          value={value}
          onChange={e => onChange(e.target.value)}
        >
          {options.map((o, i) => (
            <option key={i} value={valueKey ? o[valueKey] : i}>
              {o[labelKey]}
            </option>
          ))}
        </select>
        <span style={s.chevron}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 5l4 4 4-4" stroke="#199A6F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────── */
const SavingsCalculator = () => {
  const [hireIdx, setHireIdx] = useState(1);
  const [salaryIdx, setSalaryIdx] = useState(1);
  const [industryIdx, setIndustryIdx] = useState(0);
  const [challengeIdx, setChallengeIdx] = useState(0);
  const [calculated, setCalculated] = useState(false);
  const [result, setResult] = useState(null);
  const [animKey, setAnimKey] = useState(0);

  const hireOpt = HIRE_OPTIONS[hireIdx];
  const salaryOpt = SALARY_OPTIONS[salaryIdx];
  const industryOpt = INDUSTRY_OPTIONS[industryIdx];
  const challengeOpt = CHALLENGE_OPTIONS[challengeIdx];

  const handleCalc = () => {
    const res = calcSavings({
      hires: hireOpt.value,
      salary: salaryOpt.value,
      industryMult: industryOpt.multiplier,
      challengeBoost: challengeOpt.savingsBoost,
    });
    setResult(res);
    setCalculated(true);
    setAnimKey(k => k + 1);
  };

  const animTotal = useCounter(calculated ? result?.total ?? 0 : 0, 1000);
  const animMonthly = useCounter(calculated ? result?.monthly ?? 0 : 0, 900);
  const animROI = useCounter(calculated ? result?.roiPercent ?? 0 : 0, 1100);
  const animFive = useCounter(calculated ? result?.fiveYear ?? 0 : 0, 1200);

  return (
    <>
      <style>{CSS}</style>
      <section className="sc-section">

        {/* Background blobs */}
        <div className="sc-blob sc-blob-1" />
        <div className="sc-blob sc-blob-2" />

        <div className="sc-container">

          {/* Header */}
          <div className="sc-header">
            <span className="sc-eyebrow">See Your Savings</span>
            <h2 className="sc-heading">
              <span className="sc-heading-blue">How much could you save&nbsp;</span>
              <span className="sc-heading-green">with HBS?</span>
            </h2>
            <p className="sc-subhead">
              Plug in your numbers. Get your answer in seconds.
            </p>
          </div>

          {/* Card */}
          <div className="sc-card">

            {/* Grid of selects */}
            <div className="sc-grid">
              <Select
                label="Number of Hires Needed"
                options={HIRE_OPTIONS}
                value={hireIdx}
                onChange={v => setHireIdx(Number(v))}
                valueKey={null}
              />
              <Select
                label="Average US Salary Per Role"
                options={SALARY_OPTIONS}
                value={salaryIdx}
                onChange={v => setSalaryIdx(Number(v))}
                valueKey={null}
              />
              <Select
                label="Industry"
                options={INDUSTRY_OPTIONS}
                value={industryIdx}
                onChange={v => setIndustryIdx(Number(v))}
                valueKey={null}
              />
              <Select
                label="Your Biggest Hiring Challenge"
                options={CHALLENGE_OPTIONS}
                value={challengeIdx}
                onChange={v => setChallengeIdx(Number(v))}
                valueKey={null}
              />
            </div>

            {/* Actions row */}
            <div className="sc-actions">
              <button className="sc-btn" onClick={handleCalc}>
                <span>Calculate</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <Link to="/cost-roi" className="sc-adv-link">
                Advanced ROI calculator →
              </Link>
            </div>

            {/* Divider */}
            {calculated && <div className="sc-divider" />}

            {/* Results */}
            {calculated && result && (
              <div className="sc-results" key={animKey}>

                {/* Hero saving */}
                <div className="sc-result-hero">
                  <div className="sc-result-hero-left">
                    <p className="sc-result-eyebrow">Estimated Annual Savings</p>
                    <div className="sc-result-amount">
                      <span className="sc-dollar">$</span>
                      <span className="sc-big-num">{animTotal.toLocaleString()}</span>
                      <span className="sc-per-year">/year</span>
                    </div>
                  </div>
                  <div className="sc-result-badge">
                    <span className="sc-badge-num">{animROI}%</span>
                    <span className="sc-badge-label">ROI</span>
                  </div>
                </div>

                {/* Stat row */}
                <div className="sc-stat-row">
                  <div className="sc-stat">
                    <p className="sc-stat-label">Monthly Savings</p>
                    <p className="sc-stat-val">${animMonthly.toLocaleString()}</p>
                  </div>
                  <div className="sc-stat-sep" />
                  <div className="sc-stat">
                    <p className="sc-stat-label">5-Year Impact</p>
                    <p className="sc-stat-val">${animFive.toLocaleString()}</p>
                  </div>
                  <div className="sc-stat-sep" />
                  <div className="sc-stat">
                    <p className="sc-stat-label">Hires Covered</p>
                    <p className="sc-stat-val">{hireOpt.value}</p>
                  </div>
                </div>

                {/* CTA row */}
                <div className="sc-cta-row">
                  <a href="/contact" className="sc-cta-link">
                    Get My Custom Quote →
                  </a>
                  <p className="sc-cta-sub">Free 15-min call · No obligation</p>
                </div>

              </div>
            )}
          </div>

          {/* Bottom reassurance */}
          <div className="sc-footer-pills">
            {['No credit card required', 'Results in 24 hours', 'Dedicated account manager'].map((t, i) => (
              <span key={i} className="sc-pill">
                <span className="sc-pill-dot" />
                {t}
              </span>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

/* ─────────────────────────────────────────
   STYLES
───────────────────────────────────────── */
const s = {
  field: { display: 'flex', flexDirection: 'column', gap: '8px' },
  label: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '11px',
    fontWeight: 700,
    letterSpacing: '1.4px',
    textTransform: 'uppercase',
    color: '#94A3B8',
  },
  selectWrap: { position: 'relative' },
  select: {
    width: '100%',
    appearance: 'none',
    WebkitAppearance: 'none',
    background: '#F8FAFC',
    border: '1.5px solid #E2E8F0',
    borderRadius: '10px',
    padding: '13px 44px 13px 16px',
    fontSize: '14.5px',
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 500,
    color: '#1E293B',
    cursor: 'pointer',
    outline: 'none',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  },
  chevron: {
    position: 'absolute',
    right: '14px',
    top: '50%',
    transform: 'translateY(-50%)',
    pointerEvents: 'none',
  },
};

const CSS = `


  .sc-section {
    position: relative;
    background: #F1F5F9;
    padding: clamp(40px, 6vw, 64px) 24px;
    overflow: hidden;
    font-family: 'DM Sans', sans-serif;
  }

  .sc-blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    pointer-events: none;
    opacity: 0.35;
  }
  .sc-blob-1 {
    width: 420px; height: 420px;
  
    top: -120px; left: -100px;
  }
  .sc-blob-2 {
    width: 340px; height: 340px;
    
    bottom: -80px; right: -60px;
  }

  .sc-container {
    max-width: 680px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  /* ── HEADER ── */
  .sc-header { text-align: center; margin-bottom: 36px; }

  .sc-eyebrow {
    display: inline-block;
    padding: 6px 18px;
    border-radius: 50px;
    border: 1.5px solid #DDD6FE;
  
    color: #199A6F;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-bottom: 20px;
  }

  .sc-heading {
    font-family: 'Fraunces', serif;
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 800;
    color: #0F172A;
    line-height: 1.1;
    letter-spacing: -0.03em;
    margin-bottom: 14px;
  }

  .sc-heading-blue {
    background: #3498db;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .sc-heading-green {
    background: #1abc9c;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .sc-subhead {
    font-size: 15.5px;
    color: #64748B;
    line-height: 1.6;
  }

  /* ── CARD ── */
  .sc-card {
    background: #FFFFFF;
    border-radius: 20px;
    border: 1px solid #E2E8F0;
    box-shadow: 0 8px 48px rgba(124,58,237,0.07), 0 2px 8px rgba(0,0,0,0.04);
    padding: clamp(24px, 5vw, 40px);
  }

  /* ── GRID ── */
  .sc-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px 24px;
    margin-bottom: 28px;
  }
  @media(max-width: 520px) {
    .sc-grid { grid-template-columns: 1fr; }
  }

  select:focus {
    border-color: #199A6F !important;
    box-shadow: 0 0 0 3px rgba(25, 154, 111, 0.12) !important;
  }
  select:hover {
    border-color: #15803D !important;
  }

  /* ── ACTIONS ── */
  .sc-actions {
    display: flex;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
  }

  .sc-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: linear-gradient(135deg, #199A6F 0%, #208664 100%);
    color: #fff;
    border: none;
    border-radius: 50px;
    padding: 14px 32px;
    font-family: 'DM Sans', sans-serif;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    box-shadow: 0 4px 20px rgba(25, 154, 111, 0.35);
    letter-spacing: 0.2px;
  }
  .sc-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(25, 154, 111, 0.45);
  }
  .sc-btn:active { transform: translateY(0); }

  .sc-adv-link {
    font-size: 13.5px;
    color: #199A6F;
    font-weight: 600;
    text-decoration: none;
    transition: color 0.2s;
  }
  .sc-adv-link:hover { color: #15803D; }

  /* ── DIVIDER ── */
  .sc-divider {
    height: 1px;
    background: linear-gradient(to right, transparent, #E2E8F0 30%, #E2E8F0 70%, transparent);
    margin: 32px 0;
  }

  /* ── RESULTS ── */
  .sc-results {
    animation: fadeSlideUp 0.5s ease both;
  }
  @keyframes fadeSlideUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .sc-result-hero {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 16px;
    background: linear-gradient(135deg, #199A6F 0%, #208664 60%, #22C55E 100%);
    border-radius: 14px;
    padding: 24px 28px;
    margin-bottom: 16px;
  }

  .sc-result-eyebrow {
    font-size: 10.5px;
    font-weight: 700;
    letter-spacing: 1.8px;
    text-transform: uppercase;
    color: rgba(255,255,255,0.6);
    margin-bottom: 10px;
  }

  .sc-result-amount {
    display: flex;
    align-items: flex-end;
    gap: 4px;
    line-height: 1;
  }

  .sc-dollar {
    font-family: 'Fraunces', serif;
    font-size: 2rem;
    font-weight: 700;
    color: rgba(255,255,255,0.8);
    margin-bottom: 6px;
  }

  .sc-big-num {
    font-family: 'Fraunces', serif;
    font-size: clamp(2.6rem, 7vw, 3.8rem);
    font-weight: 800;
    color: #fff;
    letter-spacing: -0.03em;
    line-height: 1;
  }

  .sc-per-year {
    font-size: 1rem;
    color: rgba(255,255,255,0.65);
    font-weight: 500;
    margin-bottom: 8px;
    margin-left: 4px;
  }

  .sc-result-badge {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(255,255,255,0.15);
    border: 1.5px solid rgba(255,255,255,0.25);
    border-radius: 12px;
    padding: 12px 20px;
    backdrop-filter: blur(8px);
    flex-shrink: 0;
  }

  .sc-badge-num {
    font-family: 'Fraunces', serif;
    font-size: 1.8rem;
    font-weight: 800;
    color: #fff;
    line-height: 1;
  }

  .sc-badge-label {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: rgba(255,255,255,0.6);
    margin-top: 4px;
  }

  /* ── STAT ROW ── */
  .sc-stat-row {
    display: flex;
    align-items: stretch;
    background: #F8FAFC;
    border-radius: 12px;
    border: 1px solid #E8EEF4;
    overflow: hidden;
    margin-bottom: 20px;
  }

  .sc-stat {
    flex: 1;
    padding: 16px 20px;
    text-align: center;
  }

  .sc-stat-label {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    color: #94A3B8;
    margin-bottom: 6px;
  }

  .sc-stat-val {
    font-family: 'Fraunces', serif;
    font-size: 1.3rem;
    font-weight: 700;
    color: #1E293B;
    letter-spacing: -0.02em;
  }

  .sc-stat-sep {
    width: 1px;
    background: #E2E8F0;
    margin: 12px 0;
  }

  /* ── CTA ── */
  .sc-cta-row {
    display: flex;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
  }

  .sc-cta-link {
    font-size: 15px;
    font-weight: 700;
    color: #199A6F;
    text-decoration: none;
    border-bottom: 2px solid #DDD6FE;
    padding-bottom: 1px;
    transition: color 0.2s, border-color 0.2s;
  }
  .sc-cta-link:hover { color: #15803D; border-color: #199A6F; }

  .sc-cta-sub {
    font-size: 12.5px;
    color: #94A3B8;
  }

  /* ── FOOTER PILLS ── */
  .sc-footer-pills {
    display: flex;
    justify-content: center;
    gap: 16px;
    flex-wrap: wrap;
    margin-top: 28px;
  }

  .sc-pill {
    display: flex;
    align-items: center;
    gap: 7px;
    background: rgba(255,255,255,0.7);
    border: 1px solid #E2E8F0;
    border-radius: 50px;
    padding: 7px 16px;
    font-size: 12.5px;
    color: #475569;
    font-weight: 500;
    backdrop-filter: blur(4px);
  }

  .sc-pill-dot {
    width: 7px; height: 7px;
    border-radius: 50%;
    background: #199A6F;
    flex-shrink: 0;
  }
`;

export default SavingsCalculator;