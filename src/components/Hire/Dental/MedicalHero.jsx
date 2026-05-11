
// import { useState, useLayoutEffect } from "react";
// import { Link } from "react-router-dom";
// import { LuPenLine, LuShieldCheck, LuCreditCard, LuCalendarDays } from "react-icons/lu";

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

//   const roles = [
//     { 
//       title: "Medical Scribe", 
//       subtitle: "Remote Documentation Specialist",
//       badges: ["Epic", "✓ Certified"],
//       headerBg: "#A8E6D9",
//       icon: <LuPenLine size={26} color="#0F7B6D" />,
//       offset: "0px"
//     },
//     { 
//       title: "Insurance Coordinator", 
//       subtitle: "Pre-Auth & Verification Specialist",
//       badges: ["Athena Health", "✓ Certified"],
//       headerBg: "#B3D9F2",
//       icon: <LuShieldCheck size={26} color="#0369A1" />,
//       offset: "30px"
//     },
//     { 
//       title: "Medical Billing Coordinator", 
//       subtitle: "Claims Processing Expert",
//       badges: ["CareCloud", "✓ Certified"],
//       headerBg: "#FFEAA7",
//       icon: <LuCreditCard size={26} color="#B8860B" />,
//       offset: "0px"
//     },
//     { 
//       title: "Scheduling Coordinator", 
//       subtitle: "Patient Care Coordinator",
//       badges: ["NextGen", "✓ Certified"],
//       headerBg: "#F0C5D8",
//       icon: <LuCalendarDays size={26} color="#8B4A7C" />,
//       offset: "30px"
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
//                 We handle your patient revenue cycle. <br />
//                 <span style={{ color: "#199A6F" }}>so you can focus on care—not paperwork.</span>
//               </h1>

//               <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#475569", marginBottom: "28px" }}>
//                 From the moment a patient calls to final payment, we manage everything. Your clinical team stays focused on what matters: delivering quality care.
//               </p>

//               <div style={{ display: "flex", gap: "10px" }}>
//                 <Link to="/contact" style={{ background: "#4D9BD6", color: "#fff", padding: "12px 24px", borderRadius: "10px", fontWeight: "700", textDecoration: "none" }}>
//                   Book a Demo →
//                 </Link>
//                 <button
//                   onClick={() => {
//                     const section = document.getElementById("medical-roles-section");
//                     if (section) {
//                       const headerOffset =
//                         document.querySelector(".site_header_1")?.offsetHeight || 0;
//                       const elementPosition =
//                         section.getBoundingClientRect().top + window.pageYOffset;
//                       const offsetPosition = elementPosition - headerOffset - 20;
//                       window.scrollTo({
//                         top: offsetPosition,
//                         behavior: "smooth",
//                       });
//                     }
//                   }}
//                   style={{
//                     background: "#fff",
//                     color: "#0F172A",
//                     padding: "12px 24px",
//                     borderRadius: "10px",
//                     fontWeight: "700",
//                     border: "1px solid #E2E8F0",
//                     textDecoration: "none",
//                     cursor: "pointer",
//                     transition: "all 0.3s ease"
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.transform = "translateY(-2px)";
//                     e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.05)";
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.transform = "translateY(0)";
//                     e.currentTarget.style.boxShadow = "none";
//                   }}
//                 >
//                   See Roles
//                 </button>
//               </div>

//               {/* Trust Badges */}
//               <div style={{
//                 display: "flex",
//                 flexWrap: "wrap",
//                 alignItems: "center",
//                 gap: "6px 0px",
//                 marginTop: "20px"
//               }}>
//                 {[
//                   "No payment until you hire",
//                   "BAA signed before day one",
//                   "HIPAA compliant"
//                 ].map((text, i) => (
//                   <div key={i} style={{
//                     display: "flex",
//                     alignItems: "center",
//                     gap: "6px",
//                     fontSize: "13px",
//                     color: "#475569",
//                     fontWeight: "500"
//                   }}>
//                     <span style={{
//                       width: "16px",
//                       height: "16px",
//                       borderRadius: "50%",
//                       background: "#F0FDF4",
//                       border: "1px solid #DCFCE7",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       flexShrink: 0
//                     }}>
//                       <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
//                         <path d="M1.5 4.5L3.5 6.5L7.5 2.5" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                       </svg>
//                     </span>
//                     {text}
//                     {i < 2 && (
//                       <span style={{ color: "#CBD5E1", margin: "0 14px" }}>|</span>
//                     )}
//                   </div>
//                 ))}
//               </div>

//             </div>
//           </div>

//           {/* RIGHT: Profile Cards Grid */}
//           <div className="col-lg-6 col-md-12">
//             <div style={{ 
//               display: "grid",
//               gridTemplateColumns: "repeat(2, 1fr)",
//               gap: "20px"
//             }}> 
//               {roles.map((role, i) => (
//                 <div key={i} style={{ 
//                   background: "#FFFFFF",
//                   borderRadius: "16px",
//                   overflow: "hidden",
//                   boxShadow: "0 8px 20px rgba(0, 0, 0, 0.06)",
//                   transition: "all 0.3s ease",
//                   cursor: "pointer",
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.transform = "translateY(-4px)";
//                   e.currentTarget.style.boxShadow = "0 12px 28px rgba(0, 0, 0, 0.12)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.transform = "translateY(0)";
//                   e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.06)";
//                 }}>
//                   {/* Colored Header with Icon */}
//                   <div style={{
//                     background: role.headerBg,
//                     padding: "20px 24px",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     minHeight: "80px"
//                   }}>
//                     <div style={{ fontSize: "28px" }}>
//                       {role.icon}
//                     </div>
//                   </div>

//                   {/* Content Section */}
//                   <div style={{ padding: "24px 20px" }}>
//                     <h3 style={{ 
//                       fontSize: "16px", 
//                       fontWeight: "700", 
//                       color: "#0F172A", 
//                       margin: "0 0 6px 0",
//                       lineHeight: "1.3"
//                     }}>
//                       {role.title}
//                     </h3>
//                     <p style={{ 
//                       fontSize: "13px", 
//                       color: "#64748B", 
//                       margin: "0 0 16px 0",
//                       lineHeight: "1.4"
//                     }}>
//                       {role.subtitle}
//                     </p>

//                     {/* Badges Row */}
//                     <div style={{
//                       display: "flex",
//                       flexWrap: "wrap",
//                       gap: "8px"
//                     }}>
//                       {role.badges.map((badge, j) => (
//                         <span key={j} style={{
//                           fontSize: "12px",
//                           fontWeight: "600",
//                           padding: "5px 12px",
//                           borderRadius: "16px",
//                           background: badge.includes("✓") ? "#E8F5E9" : "#EFF6FF",
//                           color: badge.includes("✓") ? "#1B5E20" : "#0369A1",
//                           border: badge.includes("✓") ? "1px solid #A5D6A7" : "1px solid #7DD3FC",
//                           whiteSpace: "nowrap"
//                         }}>
//                           {badge}
//                         </span>
//                       ))}
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

// export default MedicalHero;
import { useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import {
  LuPenLine,
  LuShieldCheck,
  LuCreditCard,
  LuCalendarDays,
} from "react-icons/lu";

const MedicalHero = () => {
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
        paddingBottom: "100px",
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
                We handle your patient revenue cycle.
                <br />
                <span style={{ color: "#199A6F" }}>
                  so you can focus on care—not paperwork.
                </span>
              </h1>

              {/* DESCRIPTION */}
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.7",
                  color: "#475569",
                  marginBottom: "30px",
                  maxWidth: "500px",
                }}
              >
                From patient calls to final payment collection, we manage your
                backend operations while your clinical team stays focused on
                exceptional patient care.
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
         {/* RIGHT CARDS */}
<div className="col-lg-6 col-md-12">
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(2, minmax(250px, 1fr))",
      gap: "16px",
      maxWidth: "560px",
      marginLeft: "auto",
    }}
  >
    {roles.map((role, i) => (
      <div
        key={i}
        style={{
          background: "#FFFFFF",
          borderRadius: "18px",
          overflow: "hidden",
          border: "1px solid #EEF2F7",
          boxShadow: "0 12px 30px rgba(15,23,42,0.05)",
          transition: "all 0.35s ease",
          cursor: "pointer",
          position: "relative",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform =
            "translateY(-6px) scale(1.01)";
          e.currentTarget.style.boxShadow =
            "0 18px 40px rgba(15,23,42,0.12)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform =
            "translateY(0px) scale(1)";
          e.currentTarget.style.boxShadow =
            "0 12px 30px rgba(15,23,42,0.05)";
        }}
      >
        {/* TOP */}
        <div
          style={{
            background: role.headerBg,
            padding: "14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "62px",
          }}
        >
          <div
            style={{
              width: "46px",
              height: "46px",
              borderRadius: "12px",
              background: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 6px 16px rgba(0,0,0,0.05)",
            }}
          >
            {role.icon}
          </div>
        </div>

        {/* CONTENT */}
        <div style={{ padding: "16px 18px" }}>
          <h3
            style={{
              fontSize: "15px",
              fontWeight: "700",
              color: "#0F172A",
              marginBottom: "5px",
              lineHeight: "1.3",
            }}
          >
            {role.title}
          </h3>

          <p
            style={{
              fontSize: "12px",
              color: "#64748B",
              lineHeight: "1.45",
              marginBottom: "12px",
              minHeight: "32px",
            }}
          >
            {role.subtitle}
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "6px",
            }}
          >
            {role.badges.map((badge, j) => (
              <span
                key={j}
                style={{
                  fontSize: "10.5px",
                  fontWeight: "600",
                  padding: "4px 10px",
                  borderRadius: "999px",
                  background: badge.includes("✓")
                    ? "#E8F5E9"
                    : "#EFF6FF",
                  color: badge.includes("✓")
                    ? "#166534"
                    : "#0369A1",
                  border: badge.includes("✓")
                    ? "1px solid #BBF7D0"
                    : "1px solid #BFDBFE",
                }}
              >
                {badge}
              </span>
            ))}
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