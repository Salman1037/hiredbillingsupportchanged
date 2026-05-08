import React from "react";

const steps = [
  {
    number: 1,
    title: "Demo: Tell us what you need",
    description:
      "Specialty, EHR, patient volume, documentation style — we match based on your exact clinical workflow.",
    day: "Day 1",
  },
  {
    number: 2,
    title: "Interview and select",
    description:
      "Scribes trained in your specialty's documentation patterns. Coders who know your payer mix. Review and select on your schedule.",
    day: "Day 5",
  },
  {
    number: 3,
    title: "Kick off and onboarding",
    description:
      "Secure workstation, VPN access, HIPAA training, payroll, benefits, and a dedicated Success Manager — all included.",
    day: "Day 7",
  },
  {
    number: 4,
    title: "Go live",
    description:
      "Your new team member is active in your EHR and fully supported. Notes close on time — we make sure of it.",
    day: "Day 14",
  },
];

const ClockIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export default function HowItWorks() {
  return (
    <section style={styles.section}>
      <style>{`


        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .hiw-step { animation: fadeUp 0.5s ease both; }
        .hiw-step:nth-child(1) { animation-delay: 0.1s; }
        .hiw-step:nth-child(2) { animation-delay: 0.2s; }
        .hiw-step:nth-child(3) { animation-delay: 0.3s; }
        .hiw-step:nth-child(4) { animation-delay: 0.4s; }

        .hiw-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          box-shadow: 0 6px 24px rgba(15, 23, 42, 0.06);
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }

        .hiw-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 36px rgba(25, 154, 111, 0.14);
          border-color: #199a6f;
        }

        .hiw-circle {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .hiw-card:hover .hiw-circle {
          transform: translateY(-3px) scale(1.07);
          box-shadow: 0 12px 28px rgba(52,152,219,0.4), 0 0 0 6px rgba(26,188,156,0.15) !important;
        }
      `}</style>

      <span style={styles.badge}>HOW IT WORKS</span>

      <h2 style={styles.headline}>
        <span style={styles.headlineBlue}>Find your talent </span>
        <span style={styles.headlineGreen}>in 7 days.</span>
      </h2>

      <div style={styles.stepsWrapper}>
        <div style={styles.connector} />
        <div style={styles.stepsGrid}>
          {steps.map((step, i) => (
            <div key={step.number} className="hiw-step" style={styles.step}>
              <div className="hiw-card" style={styles.card}>
                <div className="hiw-circle" style={styles.circle}>{step.number}</div>
                <h3 style={styles.stepTitle}>{step.title}</h3>
                <p style={styles.stepDesc}>{step.description}</p>
                <span style={styles.dayBadge}>
                  <ClockIcon />
                  {step.day}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    background: "#f8fafc",
    padding: "clamp(48px, 8vw, 88px) clamp(20px, 5vw, 48px)",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "var(--bs-body-font-family)",
  },
  badge: {
    display: "inline-block",
    border: "1.5px solid #1abc9c",
    borderRadius: "999px",
    padding: "6px 20px",
    fontSize: "11px",
    fontWeight: 600,
    letterSpacing: "0.12em",
    color: "#199a6f",
    textTransform: "uppercase",
    marginBottom: "28px",
    background: "#ecfdf5",
  },
  headline: {
    fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
    fontWeight: 900,
    letterSpacing: "-0.02em",
    marginBottom: "52px",
    lineHeight: 1.1,
  },
  headlineBlue: {
    background: "#3498db",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  headlineGreen: {
    background: "#1abc9c",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  stepsWrapper: {
    position: "relative",
    maxWidth: "1100px",
    width: "100%",
  },
  connector: {
    position: "absolute",
    top: "60px",
    left: "calc(12.5% + 16px)",
    right: "calc(12.5% + 16px)",
    height: "2px",
    background: "linear-gradient(90deg, #1abc9c, #3498db, #1abc9c)",
    opacity: 0.35,
    zIndex: 0,
    pointerEvents: "none",
  },
  stepsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "20px",
    alignItems: "stretch",
  },
  step: {
    display: "flex",
    flexDirection: "column",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "28px 20px 22px",
    flex: 1,
    position: "relative",
    zIndex: 1,
  },
  circle: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #3498db, #1abc9c)",
    color: "#fff",
    fontFamily: "var(--bs-body-font-family)",
    fontSize: "20px",
    fontWeight: 900,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px",
    boxShadow: "0 8px 24px rgba(52,152,219,0.3), 0 0 0 5px rgba(26,188,156,0.12)",
    cursor: "default",
    flexShrink: 0,
  },
  stepTitle: {
    fontFamily: "var(--bs-heading-font-family)",
    fontSize: "1.05rem",
    fontWeight: 700,
    color: "#0f172a",
    marginBottom: "10px",
  },
  stepDesc: {
    fontSize: "0.92rem",
    color: "#475569",
    lineHeight: 1.6,
    marginBottom: "18px",
    flexGrow: 1,
  },
  dayBadge: {
    marginTop: "auto",
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    border: "1.5px solid #1abc9c",
    borderRadius: "999px",
    padding: "5px 14px",
    fontSize: "12px",
    fontWeight: 600,
    color: "#199a6f",
    background: "#ecfdf5",
    flexShrink: 0,
  },
};