import React from "react";

const steps = [
  {
    number: 1,
    title: "Practice Audit",
    description:
      "We analyze your denial patterns by payer. Identify where money is being left on the table. Review your current authorization process. Create a roadmap.",
    day: "Step 1",
  },
  {
    number: 2,
    title: "System Integration",
    description:
      "Integrated into your EHR and practice management system. Daily coordination. Real-time authorization tracking. Access to all insurance communications.",
    day: "Step 2",
  },
  {
    number: 3,
    title: "Full Operations Takeover",
    description:
      "We handle 100% of prior authorizations, claims, denials, and reimbursement follow-up. Your team is freed immediately to focus on patient care and growth.",
    day: "Step 3",
  },
  {
    number: 4,
    title: "Continuous Optimization",
    description:
      "Monthly denial analysis. Payer-specific strategies. Behavioral health trend analysis. Revenue optimization never stops. We improve every month.",
    day: "Step 4",
  },
];

const ClockIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export default function InsuranceTeam() {
  return (
    <section style={styles.section}>
      <style>{`
        @media (max-width: 992px) {
          .hiw-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }

          .hiw-connector {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .hiw-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hiw-step {
          animation: fadeUp 0.5s ease both;
        }

        .hiw-step:nth-child(1) {
          animation-delay: 0.1s;
        }

        .hiw-step:nth-child(2) {
          animation-delay: 0.2s;
        }

        .hiw-step:nth-child(3) {
          animation-delay: 0.3s;
        }

        .hiw-step:nth-child(4) {
          animation-delay: 0.4s;
        }

        .hiw-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          box-shadow: 0 6px 24px rgba(15, 23, 42, 0.06);
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease,
            border-color 0.2s ease;
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
          box-shadow:
            0 12px 28px rgba(52, 152, 219, 0.4),
            0 0 0 6px rgba(26, 188, 156, 0.15) !important;
        }
      `}</style>

      {/* <span style={styles.badge}>HOW IT WORKS</span> */}

      <h2 style={styles.headline}>
        <span style={styles.headlineBlue}>
          We become your insurance operations{" "}
        </span>
        <span style={styles.headlineGreen}>team</span>
      </h2>

      <p style={styles.subheading}>
        Not a vendor. Part of your infrastructure.
      </p>

      <div style={styles.stepsWrapper}>
        <div className="hiw-connector" style={styles.connector} />

        <div className="hiw-grid" style={styles.stepsGrid}>
          {steps.map((step) => (
            <div key={step.number} className="hiw-step" style={styles.step}>
              <div className="hiw-card" style={styles.card}>
                <div className="hiw-circle" style={styles.circle}>
                  {step.number}
                </div>

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
    fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
    fontWeight: 900,
    letterSpacing: "-0.02em",
    marginBottom: "16px",
    lineHeight: 1.1,
    maxWidth: "900px",
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

  subheading: {
    fontSize: "16px",
    color: "#475569",
    lineHeight: 1.6,
    marginBottom: "52px",
    maxWidth: "700px",
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
    textAlign: "center",
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
    boxShadow:
      "0 8px 24px rgba(52,152,219,0.3), 0 0 0 5px rgba(26,188,156,0.12)",
    cursor: "default",
    flexShrink: 0,
  },

  stepTitle: {
    fontFamily: "var(--bs-heading-font-family)",
    fontSize: "1rem",
    fontWeight: 700,
    color: "#0f172a",
    marginBottom: "10px",
  },

  stepDesc: {
    fontSize: "15px",
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