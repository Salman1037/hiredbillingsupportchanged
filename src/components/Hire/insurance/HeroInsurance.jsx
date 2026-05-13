import { useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import {
  LuPenLine,
  LuShieldCheck,
  LuCreditCard,
  LuCalendarDays,
} from "react-icons/lu";

const InsuranceHero = () => {
  const [headerPad, setHeaderPad] = useState("110px");

  useLayoutEffect(() => {
    const updatePadding = () => {
      const headerEl = document.querySelector(".site_header_1");

      if (headerEl) {
        setHeaderPad(headerEl.offsetHeight + 24 + "px");
      }
    };

    updatePadding();
    window.addEventListener("resize", updatePadding);

    return () => window.removeEventListener("resize", updatePadding);
  }, []);

  const RoleCard = ({ role, isStaggered }) => (
    <div style={{
      background: "#FFFFFF",
      borderRadius: "18px",
      overflow: "hidden",
      border: "1px solid #F1F5F9",
      boxShadow: "0 8px 24px -6px rgba(0,0,0,0.06)",
      transition: "all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)",
      marginBottom: "14px",
      transform: isStaggered ? "translateY(28px)" : "none",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = isStaggered ? "translateY(28px) translateY(-4px)" : "translateY(-6px)";
      e.currentTarget.style.boxShadow = "0 14px 32px -8px rgba(0,0,0,0.08)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = isStaggered ? "translateY(28px)" : "none";
      e.currentTarget.style.boxShadow = "0 8px 24px -6px rgba(0,0,0,0.06)";
    }}
    >
      <div style={{ 
        background: role.headerBg, 
        height: "55px", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        paddingRight: "0px" 
      }}>
         <div style={{ 
           width: "36px", height: "36px", background: "#fff", 
           borderRadius: "9px", display: "flex", alignItems: "center", 
           justifyContent: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" 
         }}>
           {role.icon}
         </div>
      </div>
      <div style={{ padding: "14px 18px 16px", textAlign: "center" }}>
        <h3 style={{ fontSize: "14px", fontWeight: "700", color: "#0F172A", margin: "0 0 4px 0" }}>{role.title}</h3>
        <p style={{ fontSize: "11px", color: "#64748B", marginBottom: "0px", fontWeight: "500", margin: "0 0 8px 0" }}>{role.subtitle}</p>
        <div style={{ display: "flex", gap: "5px", flexWrap: "wrap", justifyContent: "center" }}>
          {role.badges.map((b, i) => (
            <span key={i} style={{
              fontSize: "9px", fontWeight: "600", padding: "3px 8px", borderRadius: "100px",
              background: b.includes("✓") ? "#E8F5E9" : "#EFF6FF",
              color: b.includes("✓") ? "#1B5E20" : "#0369A1",
              border: `1px solid ${b.includes("✓") ? "#A5D6A7" : "#7DD3FC"}`
            }}>{b}</span>
          ))}
        </div>
      </div>
    </div>
  );

  const roles = [
    {
      title: "Medical Scribe",
      subtitle: "Remote Documentation Specialist",
      badges: ["Epic", "✓ Certified"],
      headerBg: "#CFF4EA",
      icon: <LuPenLine size={22} color="#0F7B6D" />,
    },
    {
      title: "Insurance Coordinator",
      subtitle: "Pre-Auth & Verification Specialist",
      badges: ["Athena", "✓ Certified"],
      headerBg: "#D7ECFA",
      icon: <LuShieldCheck size={22} color="#0369A1" />,
    },
    {
      title: "Billing Coordinator",
      subtitle: "Claims Processing Expert",
      badges: ["CareCloud", "✓ Certified"],
      headerBg: "#FFF1BF",
      icon: <LuCreditCard size={22} color="#B8860B" />,
    },
    {
      title: "Scheduling Coordinator",
      subtitle: "Patient Care Coordinator",
      badges: ["NextGen", "✓ Certified"],
      headerBg: "#F6D7E5",
      icon: <LuCalendarDays size={22} color="#8B4A7C" />,
    },
  ];

  return (
    <section
      className="hero-section"
      style={{
        paddingTop: headerPad,
        paddingBottom: "160px",
        background: "#FFFFFF",
        overflow: "hidden",
      }}
    >
      <div className="container">
        <div className="row align-items-center g-5">
          {/* LEFT CONTENT */}
          <div className="col-lg-6 col-md-12">
            <div style={{ maxWidth: "540px" }}>
              {/* TOP BADGE */}
              <div style={{ marginBottom: "18px" }}>
                <span
                  style={{
                    background: "#F0FDF4",
                    color: "#166534",
                    padding: "7px 14px",
                    borderRadius: "999px",
                    fontSize: "12px",
                    fontWeight: "600",
                    border: "1px solid #DCFCE7",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span
                    style={{
                      width: "7px",
                      height: "7px",
                      borderRadius: "50%",
                      background: "#22C55E",
                    }}
                  ></span>
                  17 more medical practices just hired through HBS
                </span>
              </div>

              {/* HEADING */}
              <h1
                style={{
                  fontWeight: "800",
                  fontSize: "clamp(2.3rem, 4vw, 3.5rem)",
                  lineHeight: "1.05",
                  color: "#4D9BD6",
                  marginBottom: "22px",
                  letterSpacing: "-0.04em",
                }}
              >
                We maximize  reimbursements 
                <br />
                <span style={{ color: "#199A6F" }}>
                so you expand care effortlessly
                </span>
              </h1>

              {/* DESCRIPTION */}
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.7",
                  color: "#475569",
                  marginBottom: "30px",
                  maxWidth: "540px",
                }}
              >
                Insurance companies are denying behavioral health claims at
                30–40% rates. We fight every denial, maximize every dollar,
                and handle the complexity so your practice can scale with
                confidence.
              </p>

              {/* BUTTONS */}
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <Link
                  to="/contact"
                  style={{
                    background: "#4D9BD6",
                    color: "#fff",
                    padding: "13px 26px",
                    borderRadius: "12px",
                    fontWeight: "700",
                    textDecoration: "none",
                    boxShadow: "0 10px 20px rgba(77,155,214,0.18)",
                    transition: "all 0.3s ease",
                  }}
                >
                  Book a Demo →
                </Link>

                <button
                  onClick={() => {
                    const section = document.getElementById(
                      "medical-roles-section"
                    );

                    if (section) {
                      const headerOffset =
                        document.querySelector(".site_header_1")
                          ?.offsetHeight || 0;

                      const elementPosition =
                        section.getBoundingClientRect().top +
                        window.pageYOffset;

                      const offsetPosition =
                        elementPosition - headerOffset - 20;

                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth",
                      });
                    }
                  }}
                  style={{
                    background: "#FFFFFF",
                    color: "#0F172A",
                    padding: "13px 24px",
                    borderRadius: "12px",
                    fontWeight: "700",
                    border: "1px solid #E2E8F0",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow =
                      "0 12px 24px rgba(0,0,0,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  See Roles
                </button>
              </div>

              {/* TRUST BADGES */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "10px",
                  marginTop: "26px",
                }}
              >
                {[
                  "No payment until you hire",
                  "BAA signed before day one",
                  "HIPAA compliant",
                ].map((text, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "7px",
                      fontSize: "13px",
                      color: "#475569",
                      fontWeight: "500",
                    }}
                  >
                    <span
                      style={{
                        width: "18px",
                        height: "18px",
                        borderRadius: "50%",
                        background: "#F0FDF4",
                        border: "1px solid #DCFCE7",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <svg
                        width="9"
                        height="9"
                        viewBox="0 0 9 9"
                        fill="none"
                      >
                        <path
                          d="M1.5 4.5L3.5 6.5L7.5 2.5"
                          stroke="#22C55E"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>

                    {text}

                    {i < 2 && (
                      <span style={{ color: "#CBD5E1", marginLeft: "10px" }}>
                        |
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className="col-lg-6 col-md-12">
            <div style={{ display: "flex", gap: "18px", position: "relative", paddingLeft: "20px", justifyContent: "center" }}>
              <div style={{ flex: 0.95, maxWidth: "230px" }}>
                <RoleCard role={roles[0]} isStaggered={false} />
                <RoleCard role={roles[2]} isStaggered={false} />
              </div>
              <div style={{ flex: 0.95, maxWidth: "230px" }}>
                <RoleCard role={roles[1]} isStaggered={true} />
                <RoleCard role={roles[3]} isStaggered={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceHero;