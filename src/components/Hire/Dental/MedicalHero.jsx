import { useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";

const MedicalHero = () => {
  const [headerPad, setHeaderPad] = useState('110px');

  useLayoutEffect(() => {
    const headerEl = document.querySelector('.site_header_1');
    if (headerEl) setHeaderPad(headerEl.offsetHeight + 32 + 'px');

    const handleResize = () => {
      const headerEl = document.querySelector('.site_header_1');
      if (headerEl) setHeaderPad(headerEl.offsetHeight + 32 + 'px');
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      className="hero-section"
      style={{
        paddingTop: headerPad,
        paddingBottom: "120px", // 🔥 more breathing space like B
        background: "#fff",
      }}
    >
      <div className="container">
        <div className="row align-items-center g-5"> {/* 🔥 better gap */}

          {/* LEFT */}
          <div className="col-lg-6 col-md-12">
            <div style={{ maxWidth: "560px" }}> {/* 🔥 same as B */}

              {/* Badge */}
              <div style={{ marginBottom: "20px" }}>
                <span
                  style={{
                    background: "#E0F7EF",
                    color: "#199A6F",
                    padding: "6px 18px",
                    borderRadius: "18px",
                    fontSize: "14px",
                    fontWeight: 600,
                  }}
                >
                  ✓ 20 more medical practices just hired through HBS
                </span>
              </div>

              {/* Heading */}
              <h1
                style={{
                  fontWeight: 900,
                  fontSize: "clamp(2.6rem, 5vw, 3.8rem)",
                  lineHeight: "1.1",
                  color: "#18181B",
                  marginBottom: "18px",
                  letterSpacing: "-0.04em",
                }}
              >
                We handle your patient revenue cycle. {" "} 
                <span style={{ color: "#4D9BD6" }}>
                  So you can focus on care—not paperwork.
                </span>
              </h1>

              {/* Paragraph */}
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "1.7",
                  color: "#52525B",
                  marginBottom: "32px",
                }}
              >
                From the moment a patient calls to final payment, we manage everything. Your clinical team stays focused on what matters: delivering quality care.
              </p>

              {/* Buttons */}
              <div
                style={{
                  display: "flex",
                  gap: "14px",
                  marginBottom: "26px",
                  flexWrap: "wrap",
                }}
              >
                <Link
                  to="/contact"
                  style={{
                    background: "#199A6F",
                    color: "#fff",
                    padding: "13px 28px",
                    borderRadius: "12px",
                    fontWeight: "700",
                  }}
                >
                  Book a Demo →
                </Link>

                <Link
                  to="/clinical-roles"
                  style={{
                    background: "#fff",
                    color: "#18181B",
                    padding: "13px 28px",
                    borderRadius: "12px",
                    fontWeight: "700",
                    border: "1px solid #E5E7EB",
                  }}
                >
                  See Clinical Roles
                </Link>
              </div>

              {/* Trust Row */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "18px",
                  marginTop: "10px",
                }}
              >
                {[
                  "No payment until you hire",
                  "BAA signed before day one",
                  "HIPAA + SOC 2 Type II"
                ].map((text, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      background: "#F4F4F5",
                      padding: "6px 12px",
                      borderRadius: "16px",
                      fontSize: "14px",
                      color: "#52525B",
                    }}
                  >
                    <span style={{ color: "#199A6F", fontWeight: "700" }}>✓</span>
                    {text}
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* RIGHT */}
          <div className="col-lg-6 col-md-12">
            <div className="row g-4"> {/* 🔥 equal spacing */}

              {[ 
                { name: "Dr. Shehzil R.", role: "Remote Medical Scribe", bg: "#E0F7EF" },
                { name: "Fatima L.", role: "Patient Care Coordinator", bg: "#F4F4F5" },
                { name: "Emilio P.", role: "Medical Billing", bg: "#fff", border: true },
                { name: "Huma S.", role: "Insurance Coordinator", bg: "#EDE9FE" },
              ].map((card, i) => (
                <div className="col-6" key={i}>
                  <div
                    style={{
                      background: card.bg,
                      borderRadius: "16px",
                      padding: "18px",
                      minHeight: "120px",
                      border: card.border ? "1px solid #E5E7EB" : "none",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <p style={{ fontWeight: "700", color: "#18181B", marginBottom: "6px" }}>
                      {card.name}
                    </p>
                    <p style={{ color: "#52525B", fontSize: "13px", margin: 0 }}>
                      {card.role}
                    </p>
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MedicalHero;