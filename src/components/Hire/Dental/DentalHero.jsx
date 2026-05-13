
// import { useState, useLayoutEffect } from "react";
// import { Link } from "react-router-dom";
// import { LuPenLine, LuShieldCheck, LuCreditCard, LuCalendarDays } from "react-icons/lu";

// const DentalHero = () => {
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

//   // Tightened staggered margins for a more compact "Edge" look
//   const roles = [
//     { 
//       title: "Medical Scribe", 
//       desc: "Documents encounters in real-time.", 
//       icon: <LuPenLine size={22} color="#4D9BD6" />, 
//       mt: "0px" 
//     },
//     { 
//       title: "Insurance Coord.", 
//       desc: "Verifies coverage and pre-auths.", 
//       icon: <LuShieldCheck size={22} color="#4D9BD6" />, 
//       mt: "35px" // Reduced from 45px
//     },
//     { 
//       title: "Billing Coord.", 
//       desc: "Processes claims and accounts.", 
//       icon: <LuCreditCard size={22} color="#4D9BD6" />, 
//       mt: "-15px" 
//     },
//     { 
//       title: "Scheduling Coord.", 
//       desc: "Manages appointments.", 
//       icon: <LuCalendarDays size={22} color="#4D9BD6" />, 
//       mt: "20px" // Reduced from 30px
//     },
//   ];

//   return (
//     <section
//       className="hero-section"
//       style={{
//         paddingTop: headerPad,
//         paddingBottom: "120px",
//         background: "#FFFFFF",
//         overflow: "hidden"
//       }}
//     >
//       <div className="container">
//         <div className="row align-items-center g-4">

//           {/* LEFT: Content */}
//           <div className="col-lg-6 col-md-12">
//             <div style={{ maxWidth: "520px" }}> 
//               <div style={{ marginBottom: "18px" }}>
//                 <span style={{
//                   background: "#F0FDF4",
//                   color: "#166534",
//                   padding: "6px 12px",
//                   borderRadius: "99px",
//                   fontSize: "12px",
//                   fontWeight: 600,
//                   border: "1px solid #DCFCE7",
//                   display: "inline-flex",
//                   alignItems: "center",
//                   gap: "6px"
//                 }}>
//                   <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#22C55E" }}></span>
//                   17 more medical practices just hired through HBS
//                 </span>
//               </div>

//               <h1 style={{
//                 fontWeight: "800",
//                 fontSize: "clamp(2.2rem, 4.2vw, 3.2rem)",
//                 lineHeight: "1.1",
//                 color: "#4D9BD6",
//                 marginBottom: "20px",
//                 letterSpacing: "-0.03em",
//               }}>
//                 We handle insurance, claims, and payments <br />
//                 <span style={{ color: "#199A6F" }}>so you can focus on patient smiles.</span>
//               </h1>

//               <p style={{ fontSize: "17px", lineHeight: "1.6", color: "#475569", marginBottom: "28px" }}>
//                 HBS finds, certifies, and manages compliant remote clinical support professionals trained on leading EHR systems.
//               </p>

//               <div style={{ display: "flex", gap: "10px" }}>
//                 <Link to="/contact" style={{ background: "#4D9BD6", color: "#fff", padding: "12px 24px", borderRadius: "10px", fontWeight: "700", textDecoration: "none" }}>
//                   Book a Demo →
//                 </Link>
//                <button
//   onClick={() => {
//     const section = document.getElementById("dental-roles-section");

//     if (section) {
//       const headerOffset =
//         document.querySelector(".site_header_1")?.offsetHeight || 0;

//       const elementPosition =
//         section.getBoundingClientRect().top + window.pageYOffset;

//       const offsetPosition = elementPosition - headerOffset - 20;

//       window.scrollTo({
//         top: offsetPosition,
//         behavior: "smooth",
//       });
//     }
//   }}
//   style={{
//     background: "#fff",
//     color: "#0F172A",
//     padding: "12px 24px",
//     borderRadius: "10px",
//     fontWeight: "700",
//     border: "1px solid #E2E8F0",
//     textDecoration: "none",
//     cursor: "pointer",
//     transition: "all 0.3s ease"
//   }}
//   onMouseEnter={(e) => {
//     e.currentTarget.style.transform = "translateY(-2px)";
//     e.currentTarget.style.boxShadow =
//       "0 10px 20px rgba(0,0,0,0.05)";
//   }}
//   onMouseLeave={(e) => {
//     e.currentTarget.style.transform = "translateY(0)";
//     e.currentTarget.style.boxShadow = "none";
//   }}
// >
//   See Roles
// </button>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT: Compact Staggered Grid */}
//           <div className="col-lg-6 col-md-12">
//             <div style={{ 
//               display: "flex", 
//               flexWrap: "wrap", 
//               margin: "-6px" // Negative margin to offset card padding
//             }}> 
//               {roles.map((role, i) => (
//                 <div key={i} style={{ 
//                   width: "50%", 
//                   padding: "6px", // Small 12px total gap between cards
//                   boxSizing: "border-box"
//                 }}>
//                   <div
//                     style={{
//                       marginTop: role.mt,
//                       background: "#FFFFFF",
//                       borderRadius: "14px",
//                       padding: "18px",
//                       border: "1px solid #F1F5F9",
//                       boxShadow: "0 8px 15px -3px rgba(0, 0, 0, 0.03)",
//                       transition: "all 0.3s ease",
//                       cursor: "pointer",
//                       height: "165px", // Slightly shorter for compactness
//                       display: "flex",
//                       flexDirection: "column",
//                       justifyContent: "space-between" 
//                     }}
//                     onMouseEnter={(e) => {
//                       e.currentTarget.style.transform = "translateY(-4px)";
//                       e.currentTarget.style.boxShadow = "0 15px 20px -5px rgba(124, 58, 237, 0.08)";
//                       e.currentTarget.style.borderColor = "#DDD6FE";
//                     }}
//                     onMouseLeave={(e) => {
//                       e.currentTarget.style.transform = "translateY(0)";
//                       e.currentTarget.style.boxShadow = "0 8px 15px -3px rgba(0, 0, 0, 0.03)";
//                       e.currentTarget.style.borderColor = "#F1F5F9";
//                     }}
//                   >
//                     <div>
//                       <div style={{ marginBottom: "10px" }}>{role.icon}</div>
//                       <h3 style={{ fontSize: "15px", fontWeight: "700", color: "#0F172A", marginBottom: "4px" }}>
//                         {role.title}
//                       </h3>
//                       <p style={{ color: "#64748B", fontSize: "12.5px", lineHeight: "1.4", margin: 0 }}>
//                         {role.desc}
//                       </p>
//                     </div>
//                     <div style={{ color: "#199A6F", fontWeight: "700", fontSize: "12px", display: "flex", alignItems: "center", gap: "4px" }}>
//                       Learn more →
//                     </div>
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

// export default DentalHero;
import { useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { LuPenLine, LuShieldCheck, LuCreditCard, LuCalendarDays } from "react-icons/lu";

const DentalHero = () => {
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
      icon: <LuPenLine size={22} color="#0F7B6D" />, 
      bg: "#A8E6D9"
    },
    { 
      title: "Insurance Coord.", 
      desc: "Verifies coverage and pre-auths.", 
      icon: <LuShieldCheck size={22} color="#0369A1" />, 
      bg: "#B3D9F2"
    },
    { 
      title: "Billing Coord.", 
      desc: "Processes claims and accounts.", 
      icon: <LuCreditCard size={22} color="#B8860B" />, 
      bg: "#FFEAA7"
    },
    { 
      title: "Scheduling Coord.", 
      desc: "Manages appointments.", 
      icon: <LuCalendarDays size={22} color="#8B4A7C" />, 
      bg: "#F0C5D8"
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
      <div style={{ padding: "14px 18px 16px", textAlign: "center" }}>
        <h3 style={{ fontSize: "14px", fontWeight: "700", color: "#0F172A", margin: "0 0 4px 0" }}>{role.title}</h3>
        <p style={{ fontSize: "11px", color: "#64748B", marginBottom: "0px", fontWeight: "500", margin: 0 }}>{role.desc}</p>
      </div>
    </div>
  );

  return (
    <section
      className="hero-section"
      style={{
        paddingTop: headerPad,
        paddingBottom: "160px",
        background: "#FFFFFF",
        overflow: "hidden"
      }}
    >
      <div className="container">
        <div className="row align-items-center g-5">
          
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
                We handle insurance, claims, and payments <br />
                <span style={{ color: "#199A6F" }}>so you can focus on patient smiles.</span>
              </h1>

              <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#475569", marginBottom: "28px" }}>
               Dental insurance is broken. Authorizations change. Claims get rejected. We manage the chaos so your team can do what they love—create beautiful smiles.
              </p>

              <div style={{ display: "flex", gap: "10px" }}>
                <Link to="/contact" style={{ background: "#4D9BD6", color: "#fff", padding: "12px 24px", borderRadius: "10px", fontWeight: "700", textDecoration: "none" }}>
                  Book a Demo →
                </Link>
                <button
                  onClick={() => {
                    const section = document.getElementById("dental-roles-section");
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
                    e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  See Roles
                </button>
              </div>

              {/* Trust Badges */}
              <div style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "6px 0px",
                marginTop: "20px"
              }}>
                {[
                  "No payment until you hire",
                  "BAA signed before day one",
                  "HIPAA compliant"
                ].map((text, i) => (
                  <div key={i} style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "13px",
                    color: "#475569",
                    fontWeight: "500"
                  }}>
                    <span style={{
                      width: "16px",
                      height: "16px",
                      borderRadius: "50%",
                      background: "#F0FDF4",
                      border: "1px solid #DCFCE7",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0
                    }}>
                      <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                        <path d="M1.5 4.5L3.5 6.5L7.5 2.5" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    {text}
                    {i < 2 && (
                      <span style={{ color: "#CBD5E1", margin: "0 14px" }}>|</span>
                    )}
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* RIGHT: Compact Staggered Grid */}
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

export default DentalHero;