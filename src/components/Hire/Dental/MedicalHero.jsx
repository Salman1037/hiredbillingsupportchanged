// import { useState, useLayoutEffect } from "react";
// import { Link } from "react-router-dom";

// const MedicalHero = () => {
//   const [headerPad, setHeaderPad] = useState('110px');

//   useLayoutEffect(() => {
//     const headerEl = document.querySelector('.site_header_1');
//     if (headerEl) setHeaderPad(headerEl.offsetHeight + 32 + 'px');

//     const handleResize = () => {
//       const headerEl = document.querySelector('.site_header_1');
//       if (headerEl) setHeaderPad(headerEl.offsetHeight + 32 + 'px');
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return (
//     <section
//       className="hero-section"
//       style={{
//         paddingTop: headerPad,
//         paddingBottom: "120px", // 🔥 more breathing space like B
//         background: "#fff",
//       }}
//     >
//       <div className="container">
//         <div className="row align-items-center g-5"> {/* 🔥 better gap */}

//           {/* LEFT */}
//           <div className="col-lg-6 col-md-12">
//             <div style={{ maxWidth: "560px" }}> {/* 🔥 same as B */}

//               {/* Badge */}
//               <div style={{ marginBottom: "20px" }}>
//                 <span
//                   style={{
//                     background: "#E0F7EF",
//                     color: "#199A6F",
//                     padding: "6px 18px",
//                     borderRadius: "18px",
//                     fontSize: "14px",
//                     fontWeight: 600,
//                   }}
//                 >
//                   ✓ 20 more medical practices just hired through HBS
//                 </span>
//               </div>

//               {/* Heading */}
//               <h1
//                 style={{
//                   fontWeight: 900,
//                   fontSize: "clamp(2.6rem, 5vw, 3.8rem)",
//                   lineHeight: "1.1",
//                   color: "#18181B",
//                   marginBottom: "18px",
//                   letterSpacing: "-0.04em",
//                 }}
//               >
//                 We handle your patient revenue cycle. {" "} 
//                 <span style={{ color: "#4D9BD6" }}>
//                   So you can focus on care—not paperwork.
//                 </span>
//               </h1>

//               {/* Paragraph */}
//               <p
//                 style={{
//                   fontSize: "18px",
//                   lineHeight: "1.7",
//                   color: "#52525B",
//                   marginBottom: "32px",
//                 }}
//               >
//                 From the moment a patient calls to final payment, we manage everything. Your clinical team stays focused on what matters: delivering quality care.
//               </p>

//               {/* Buttons */}
//               <div
//                 style={{
//                   display: "flex",
//                   gap: "14px",
//                   marginBottom: "26px",
//                   flexWrap: "wrap",
//                 }}
//               >
//                 <Link
//                   to="/contact"
//                   style={{
//                     background: "#199A6F",
//                     color: "#fff",
//                     padding: "13px 28px",
//                     borderRadius: "12px",
//                     fontWeight: "700",
//                   }}
//                 >
//                   Book a Demo →
//                 </Link>

//                 <Link
//                   to="/clinical-roles"
//                   style={{
//                     background: "#fff",
//                     color: "#18181B",
//                     padding: "13px 28px",
//                     borderRadius: "12px",
//                     fontWeight: "700",
//                     border: "1px solid #E5E7EB",
//                   }}
//                 >
//                   See Clinical Roles
//                 </Link>
//               </div>

//               {/* Trust Row */}
//               <div
//                 style={{
//                   display: "flex",
//                   flexWrap: "wrap",
//                   gap: "18px",
//                   marginTop: "10px",
//                 }}
//               >
//                 {[
//                   "No payment until you hire",
//                   "BAA signed before day one",
//                   "HIPAA + SOC 2 Type II"
//                 ].map((text, i) => (
//                   <div
//                     key={i}
//                     style={{
//                       display: "flex",
//                       alignItems: "center",
//                       gap: "6px",
//                       background: "#F4F4F5",
//                       padding: "6px 12px",
//                       borderRadius: "16px",
//                       fontSize: "14px",
//                       color: "#52525B",
//                     }}
//                   >
//                     <span style={{ color: "#199A6F", fontWeight: "700" }}>✓</span>
//                     {text}
//                   </div>
//                 ))}
//               </div>

//             </div>
//           </div>

//           {/* RIGHT */}
//           <div className="col-lg-6 col-md-12">
//             <div className="row g-4"> {/* 🔥 equal spacing */}

//               {[ 
//                 { name: "Dr. Shehzil R.", role: "Remote Medical Scribe", bg: "#E0F7EF" },
//                 { name: "Fatima L.", role: "Patient Care Coordinator", bg: "#F4F4F5" },
//                 { name: "Emilio P.", role: "Medical Billing", bg: "#fff", border: true },
//                 { name: "Huma S.", role: "Insurance Coordinator", bg: "#EDE9FE" },
//               ].map((card, i) => (
//                 <div className="col-6" key={i}>
//                   <div
//                     style={{
//                       background: card.bg,
//                       borderRadius: "16px",
//                       padding: "18px",
//                       minHeight: "120px",
//                       border: card.border ? "1px solid #E5E7EB" : "none",
//                       boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
//                       display: "flex",
//                       flexDirection: "column",
//                       justifyContent: "center",
//                     }}
//                   >
//                     <p style={{ fontWeight: "700", color: "#18181B", marginBottom: "6px" }}>
//                       {card.name}
//                     </p>
//                     <p style={{ color: "#52525B", fontSize: "13px", margin: 0 }}>
//                       {card.role}
//                     </p>
//                   </div>
//                 </div>
//               ))}

//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default MedicalHero;
import { useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { LuPenLine, LuShieldCheck, LuCreditCard, LuCalendarDays } from "react-icons/lu";

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

  // Tightened staggered margins for a more compact "Edge" look
  const roles = [
    { 
      title: "Medical Scribe", 
      desc: "Documents encounters in real-time.", 
      icon: <LuPenLine size={22} color="#4D9BD6" />, 
      mt: "0px" 
    },
    { 
      title: "Insurance Coord.", 
      desc: "Verifies coverage and pre-auths.", 
      icon: <LuShieldCheck size={22} color="#4D9BD6" />, 
      mt: "35px" // Reduced from 45px
    },
    { 
      title: "Billing Coord.", 
      desc: "Processes claims and accounts.", 
      icon: <LuCreditCard size={22} color="#4D9BD6" />, 
      mt: "-15px" 
    },
    { 
      title: "Scheduling Coord.", 
      desc: "Manages appointments.", 
      icon: <LuCalendarDays size={22} color="#4D9BD6" />, 
      mt: "20px" // Reduced from 30px
    },
  ];

  return (
    <section
      className="hero-section"
      style={{
        paddingTop: headerPad,
        paddingBottom: "120px",
        background: "#FFFFFF",
        overflow: "hidden"
      }}
    >
      <div className="container">
        <div className="row align-items-center g-4">

          {/* LEFT: Content */}
          <div className="col-lg-6 col-md-12">
            <div style={{ maxWidth: "520px" }}> 
              <div style={{ marginBottom: "18px" }}>
                <span style={{
                  background: "#F0FDF4",
                  color: "#166534",
                  padding: "6px 12px",
                  borderRadius: "99px",
                  fontSize: "12px",
                  fontWeight: 600,
                  border: "1px solid #DCFCE7",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px"
                }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#22C55E" }}></span>
                  17 more medical practices just hired through HBS
                </span>
              </div>

              <h1 style={{
                fontWeight: "800",
                fontSize: "clamp(2.2rem, 4.2vw, 3.2rem)",
                lineHeight: "1.1",
                color: "#4D9BD6",
                marginBottom: "20px",
                letterSpacing: "-0.03em",
              }}>
                We handle your patient revenue cycle. <br />
                
                <span style={{ color: "#199A6F" }}>so you can focus on care—not paperwork.</span>
              </h1>

              <p style={{ fontSize: "17px", lineHeight: "1.6", color: "#475569", marginBottom: "28px" }}>
                {/* HBS finds, certifies, and manages compliant remote clinical support professionals trained on leading EHR systems. */}
                From the moment a patient calls to final payment, we manage everything. Your clinical team stays focused on what matters: delivering quality care.
              </p>

              <div style={{ display: "flex", gap: "10px" }}>
                <Link to="/contact" style={{ background: "#4D9BD6", color: "#fff", padding: "12px 24px", borderRadius: "10px", fontWeight: "700", textDecoration: "none" }}>
                  Book a Demo →
                </Link>
               <button
  onClick={() => {
    const section = document.getElementById("medical-roles-section");

    if (section) {
      const headerOffset =
        document.querySelector(".site_header_1")?.offsetHeight || 0;

      const elementPosition =
        section.getBoundingClientRect().top + window.pageYOffset;

      const offsetPosition = elementPosition - headerOffset - 20;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }}
  style={{
    background: "#fff",
    color: "#0F172A",
    padding: "12px 24px",
    borderRadius: "10px",
    fontWeight: "700",
    border: "1px solid #E2E8F0",
    textDecoration: "none",
    cursor: "pointer",
    transition: "all 0.3s ease"
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-2px)";
    e.currentTarget.style.boxShadow =
      "0 10px 20px rgba(0,0,0,0.05)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "none";
  }}
>
  See Roles
</button>
              </div>
            </div>
          </div>

          {/* RIGHT: Compact Staggered Grid */}
          <div className="col-lg-6 col-md-12">
            <div style={{ 
              display: "flex", 
              flexWrap: "wrap", 
              margin: "-6px" // Negative margin to offset card padding
            }}> 
              {roles.map((role, i) => (
                <div key={i} style={{ 
                  width: "50%", 
                  padding: "6px", // Small 12px total gap between cards
                  boxSizing: "border-box"
                }}>
                  <div
                    style={{
                      marginTop: role.mt,
                      background: "#FFFFFF",
                      borderRadius: "14px",
                      padding: "18px",
                      border: "1px solid #F1F5F9",
                      boxShadow: "0 8px 15px -3px rgba(0, 0, 0, 0.03)",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                      height: "165px", // Slightly shorter for compactness
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between" 
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-4px)";
                      e.currentTarget.style.boxShadow = "0 15px 20px -5px rgba(124, 58, 237, 0.08)";
                      e.currentTarget.style.borderColor = "#DDD6FE";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 8px 15px -3px rgba(0, 0, 0, 0.03)";
                      e.currentTarget.style.borderColor = "#F1F5F9";
                    }}
                  >
                    <div>
                      <div style={{ marginBottom: "10px" }}>{role.icon}</div>
                      <h3 style={{ fontSize: "15px", fontWeight: "700", color: "#0F172A", marginBottom: "4px" }}>
                        {role.title}
                      </h3>
                      <p style={{ color: "#64748B", fontSize: "12.5px", lineHeight: "1.4", margin: 0 }}>
                        {role.desc}
                      </p>
                    </div>
                    <div style={{ color: "#199A6F", fontWeight: "700", fontSize: "12px", display: "flex", alignItems: "center", gap: "4px" }}>
                      Learn more →
                    </div>
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