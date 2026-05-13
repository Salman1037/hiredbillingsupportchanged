
import { useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { FaClipboard, FaCalendarCheck, FaReceipt, FaShieldAlt } from "react-icons/fa";

const MedicalHero = () => {
  const [headerPad, setHeaderPad] = useState("110px");

  useLayoutEffect(() => {
    const updatePadding = () => {
      const headerEl = document.querySelector(".site_header_1");
      if (headerEl) setHeaderPad(headerEl.offsetHeight + 32 + "px");
    };
    updatePadding();
    window.addEventListener("resize", updatePadding);
    return () => window.removeEventListener("resize", updatePadding);
  }, []);

  const roles = [
    { 
      name: "Dr. Shehzil R.", 
      title: "Remote Medical Scribe", 
      badges: ["Epic", "✓ Certified"], 
      bg: "#A8E6D9", // Mint
      icon: <FaClipboard size={20} color="#0F7B6D" /> 
    },
    { 
      name: "Fatima L.", 
      title: "Patient Care Coordinator", 
      badges: ["Athenahealth", "✓ Certified"], 
      bg: "#B3D9F2", // Blue
      icon: <FaCalendarCheck size={20} color="#0369A1" /> 
    },
    { 
      name: "Emilio P.", 
      title: "Medical Billing Coordinator", 
      badges: ["eCW", "✓ Certified"], 
      bg: "#FFEAA7", // Yellow
      icon: <FaReceipt size={20} color="#B8860B" /> 
    },
    { 
      name: "Huma S.", 
      title: "Medical Insurance Coordinator", 
      badges: ["CareCloud", "✓ Certified"], 
      bg: "#F0C5D8", // Pink
      icon: <FaShieldAlt size={20} color="#8B4A7C" /> 
    },
  ];

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
        background: role.bg, 
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
      <div style={{ padding: "14px 18px 16px" }}>
        <h4 style={{ fontSize: "14px", fontWeight: "700", color: "#0F172A", margin: "0 0 1px 0" }}>{role.name}</h4>
        <p style={{ fontSize: "11px", color: "#64748B", marginBottom: "10px", fontWeight: "500" }}>{role.title}</p>
        <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
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

  return (
    <section style={{ 
      paddingTop: headerPad, 
      paddingBottom: "160px", 
      background: "#FFFFFF", 
      overflow: "hidden" 
    }}>
      <div className="container">
        <div className="row align-items-center g-5">
          
          {/* CONTENT COLUMN */}
          <div className="col-lg-6">
            <div style={{ maxWidth: "580px" }}>
              <div style={{ 
                display: "inline-flex", alignItems: "center", gap: "8px", 
                background: "#F0FDF4", padding: "8px 16px", borderRadius: "100px", 
                border: "1px solid #DCFCE7", marginBottom: "28px" 
              }}>
                <span style={{ width: "8px", height: "8px", background: "#22C55E", borderRadius: "50%" }}></span>
                <span style={{ fontSize: "13px", fontWeight: "600", color: "#166534" }}>
                  17 more medical practices just hired through HBS
                </span>
              </div>
              
              <h1 style={{ 
                fontSize: "clamp(2.8rem, 5vw, 3.8rem)", 
                fontWeight: "850", 
                lineHeight: "1.02", 
                letterSpacing: "-0.045em", 
                color: "#4D9BD6", 
                marginBottom: "24px" 
              }}>
                We handle your patient revenue cycle. <br />
                <span style={{ color: "#199A6F" }}>so you can focus on care—not paperwork.</span>
              </h1>

              <p style={{ 
                fontSize: "18px", color: "#475569", lineHeight: "1.7", 
                marginBottom: "38px", fontWeight: "400", maxWidth: "520px" 
              }}>
                From the moment a patient calls to final payment, we manage everything. Your clinical team stays focused on what matters: delivering quality care.
              </p>

              <div style={{ display: "flex", gap: "16px", marginBottom: "40px" }}>
                <Link to="/contact" style={{ 
                  padding: "16px 34px", background: "#4D9BD6", color: "#fff", 
                  borderRadius: "12px", fontWeight: "700", textDecoration: "none", 
                  boxShadow: "0 10px 20px rgba(77,155,214,0.15)" 
                }}>Book a Demo →</Link>
                
                <button style={{ 
                  padding: "16px 30px", background: "#fff", border: "1px solid #E2E8F0", 
                  borderRadius: "12px", fontWeight: "700", color: "#0F172A", cursor: "pointer" 
                }}>See Roles</button>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px 24px" }}>
                {["No payment until you hire", "BAA signed before day one", "HIPAA compliant"].map((text, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#64748B", fontWeight: "500" }}>
                    <div style={{ width: "18px", height: "18px", background: "#F0FDF4", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #DCFCE7" }}>
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4.5L3.5 7L9 1" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* VISUAL COLUMN */}
          <div className="col-lg-6">
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

export default MedicalHero;