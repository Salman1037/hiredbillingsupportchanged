import React from "react";
import {
  FaShieldAlt,
  FaHospitalUser,
  FaLaptopMedical,
  FaChartLine,
  FaLock,
  FaClipboardCheck,
  FaFileMedical,
  FaClock,
  FaPhoneAlt,
  FaArrowRight,
} from "react-icons/fa";

const differentiators = [
  {
    icon: <FaShieldAlt />,
    title: "Denial Expertise",
    description:
      "We specialize in the denials behavioral health faces. Mental health medical necessity challenges. Substance abuse authorization complexity. Telehealth state regulations. We've fought these denials thousands of times.",
  },
  {
    icon: <FaHospitalUser />,
    title: "Medicaid Mastery",
    description:
      "Behavioral health relies on Medicaid (40-60% of revenue). We navigate state-specific Medicaid rules, licensing requirements, and reimbursement rates.",
  },
  {
    icon: <FaLaptopMedical />,
    title: "Telehealth Complexity",
    description:
      "Telehealth is 40-50% of behavioral health volume. Different reimbursement for different modalities and states. We handle the complexity so you don't have to.",
  },
  {
    icon: <FaChartLine />,
    title: "Stress-Free Growth",
    description:
      "Want to add locations? Add modalities? Expand services? Growth doesn't mean billing chaos. We scale with you.",
  },
];

const metrics = [
  "$500K-2M Annual Recovery",
  "40%+ Denial Reduction",
  "35-40 Day Average AR",
  "24-Hour Authorization Turnaround",
];

const trustItems = [
  {
    icon: <FaLock />,
    title: "HIPAA Certified",
    description:
      "Business Associate Agreement signed before day one. Full HIPAA compliance. Your patient data is legally protected.",
  },
  {
    icon: <FaClipboardCheck />,
    title: "SOC 2 Certified",
    description:
      "Third-party audited security controls. Ongoing compliance verification. Trust reports available.",
  },
  {
    icon: <FaFileMedical />,
    title: "State Compliant",
    description:
      "Compliance with state behavioral health billing requirements. Medicaid compliance built into every claim.",
  },
  {
    icon: <FaClock />,
    title: "99.8% Uptime",
    description:
      "Your patient authorizations never wait. Redundant systems. 24/7 monitoring.",
  },
  {
    icon: <FaPhoneAlt />,
    title: "BH Expertise",
    description:
      "We specialize in behavioral health. We're not a generic billing company. We understand your business.",
  },
];

export default function BehavioralHealthSection() {
  return (
    <section style={styles.section}>
      <style>{`
        .bh-feature-card {
          transition: all 0.3s ease;
        }

        .bh-feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(15, 23, 42, 0.10);
          border-color: #199a6f !important;
        }

        .bh-feature-card:hover .bh-icon {
          transform: scale(1.08);
          background: linear-gradient(135deg, #3498db, #2E86DE);
          color: #2E86DE !important;
        }

        .bh-icon {
          transition: all 0.3s ease;
        }

        .metric-card {
          transition: all 0.3s ease;
        }

        .metric-card:hover {
          transform: translateY(-5px) scale(1.02);
        }

        .trust-card {
          transition: all 0.3s ease;
        }

        .trust-card:hover {
          transform: translateX(6px);
          border-color: #199a6f !important;
          box-shadow: 0 12px 30px rgba(15,23,42,0.08);
        }

        @media (max-width: 992px) {
          .top-grid {
            grid-template-columns: 1fr 1fr !important;
          }

          .metrics-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 768px) {
          .top-grid,
          .metrics-grid,
          .trust-grid {
            grid-template-columns: 1fr !important;
          }

          .trust-card {
            flex-direction: column;
          }
        }
      `}</style>

      <div style={styles.container}>
        {/* HEADER */}
        <div style={styles.header}>
          <span style={styles.badge}>WHY PRACTICES CHOOSE US</span>

          <h2 style={styles.heading}>
            <span style={styles.blueText}>
              Built specifically for behavioral health{" "}
            </span>

            <span style={styles.greenText}>practices</span>
          </h2>

          <p style={styles.subheading}>
            Revenue cycle management designed for behavioral
            health realities — not generic medical billing.
          </p>
        </div>

        {/* DIFFERENTIATORS */}
        <div className="top-grid" style={styles.grid}>
          {differentiators.map((item, index) => (
            <div
              key={index}
              style={styles.card}
              className="bh-feature-card"
            >
              <div style={styles.topRow}>
                <div className="bh-icon" style={styles.iconWrapper}>
                  {item.icon}
                </div>

                <div style={styles.arrowIcon}>
                  <FaArrowRight />
                </div>
              </div>

              <h3 style={styles.cardTitle}>{item.title}</h3>

              <p style={styles.cardDescription}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* METRICS */}
        <div className="metrics-grid" style={styles.metricsGrid}>
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="metric-card"
              style={styles.metricCard}
            >
              <h3 style={styles.metricValue}>{metric}</h3>
            </div>
          ))}
        </div>

        {/* TRUST SECTION */}
        <div style={styles.trustSection}>
          <div style={styles.trustHeader}>
            <span style={styles.badge}>TRUST & SECURITY</span>

            <h2 style={styles.heading}>
              <span style={styles.blueText}>
                Behavioral health demands trust.{" "}
              </span>

              <span style={styles.greenText}>
                We deliver it.
              </span>
            </h2>
          </div>

          <div className="trust-grid" style={styles.trustGrid}>
            {trustItems.map((item, index) => (
              <div
                key={index}
                className="trust-card"
                style={styles.trustCard}
              >
                <div style={styles.trustIcon}>
                  {item.icon}
                </div>

                <div>
                  <h3 style={styles.trustTitle}>
                    {item.title}
                  </h3>

                  <p style={styles.trustDescription}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    width: "100%",
    background:
      "linear-gradient(to bottom, #ffffff 0%, #f8fafc 100%)",
    padding: "clamp(80px, 8vw, 110px) 20px",
    fontFamily: "var(--bs-body-font-family)",
  },

  container: {
    maxWidth: "1180px",
    margin: "0 auto",
  },

  header: {
    textAlign: "center",
    marginBottom: "60px",
  },

  badge: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid rgba(26,188,156,0.25)",
    borderRadius: "999px",
    padding: "8px 18px",
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "0.12em",
    color: "#199a6f",
    textTransform: "uppercase",
    marginBottom: "24px",
    background: "#ecfdf5",
  },

  heading: {
    fontSize: "clamp(2.3rem, 4vw, 3.5rem)",
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: "16px",
    letterSpacing: "-0.03em",
  },

  subheading: {
    maxWidth: "760px",
    margin: "0 auto",
    fontSize: "17px",
    lineHeight: 1.7,
    color: "#64748b",
  },

  blueText: {
    background: "#3498db",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  greenText: {
    background: "#1abc9c",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "22px",
    marginBottom: "70px",
  },

  card: {
    background: "#fff",
    border: "1px solid #e2e8f0",
    borderRadius: "24px",
    padding: "28px",
    boxShadow: "0 8px 30px rgba(15, 23, 42, 0.05)",
    position: "relative",
    overflow: "hidden",
  },

  topRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "22px",
  },

  iconWrapper: {
    width: "62px",
    height: "62px",
    borderRadius: "18px",
    background: "rgba(25,154,111,0.10)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#2E86DE",
    fontSize: "26px",
  },

  arrowIcon: {
    color: "#cbd5e1",
    fontSize: "14px",
  },

  cardTitle: {
    fontSize: "1.05rem",
    fontWeight: 800,
    color: "#0f172a",
    marginBottom: "14px",
    lineHeight: 1.4,
    textAlign: "center",
  },

  cardDescription: {
    fontSize: "15px",
    color: "#64748b",
    lineHeight: 1.7,
    margin: 0,
    textAlign: "center",
  },

  metricsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "18px",
    marginBottom: "90px",
  },

  metricCard: {
    background: "linear-gradient(135deg, #3498db, #1abc9c)",
    borderRadius: "22px",
    padding: "28px 22px",
    textAlign: "center",
    boxShadow: "0 12px 30px rgba(52,152,219,0.20)",
  },

  metricValue: {
    color: "#fff",
    fontSize: "1.05rem",
    fontWeight: 800,
    lineHeight: 1.5,
    margin: 0,
  },

  trustSection: {
    background: "#ffffff",
    border: "1px solid #e2e8f0",
    borderRadius: "32px",
    padding: "50px 40px",
    boxShadow: "0 10px 40px rgba(15,23,42,0.05)",
  },

  trustHeader: {
    textAlign: "center",
    marginBottom: "42px",
  },

  trustGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",
  },

  trustCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "18px",
    padding: "24px",
    borderRadius: "20px",
    border: "1px solid #e2e8f0",
    background: "#f8fafc",
    textAlign: "center",
  },

  trustIcon: {
    width: "56px",
    height: "56px",
    borderRadius: "16px",
    background: "rgba(25,154,111,0.12)",
    color: "#2E86DE",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    margin: "0 auto",
  },

  trustTitle: {
    fontSize: "1rem",
    fontWeight: 800,
    color: "#0f172a",
    marginBottom: "8px",
    textAlign: "center",
  },

  trustDescription: {
    fontSize: "15px",
    lineHeight: 1.7,
    color: "#64748b",
    margin: 0,
    textAlign: "center",
  },
};