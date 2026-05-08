
// import React from 'react';
// import { FaPhoneSlash, FaMoneyBillWave, FaBalanceScale, FaTired, FaSearch, FaBullseye } from 'react-icons/fa';

// const MedicalVA = () => {
//   const challenges = [
//     {
//       icon: <FaPhoneSlash />,
//       title: 'Dropped Calls',
//       description: "Patients can't reach you. Appointments go unmade. Revenue is lost before it starts. Front desk is overwhelmed.",
//     },
//     {
//       icon: <FaMoneyBillWave />,
//       title: 'Revenue Leakage',
//       description: 'Claims sit unprocessed for weeks. Insurance verification is incomplete. You\'re leaving money on the table every single day.',
//     },
//     {
//       icon: <FaBalanceScale />,
//       title: 'Rising Denials',
//       description: 'Insurance companies use AI to increase denials. Claims get rejected for missing information or code errors. No one fights the appeals.',
//     },
//     {
//       icon: <FaTired />,
//       title: 'Staff Burnout',
//       description: 'Your team is overwhelmed managing billing, scheduling, and insurance. Turnover is high. Training new staff is endless.',
//     },
//     {
//       icon: <FaSearch />,
//       title: 'No Visibility',
//       description: "You don't know your financial metrics. AR days? Denial rates? Patient acquisition cost? It's all a mystery to you.",
//     },
//     {
//       icon: <FaBullseye />,
//       title: 'System Chaos',
//       description: 'Multiple vendors, fragmented systems, no coordination. EHR, practice management, clearinghouse—all separate. Data doesn\'t flow.',
//     },
//   ];

//   return (
//     <section
//       style={{
//         background: '#F5F7FB',
//         padding: 'clamp(80px, 8vw, 100px) 0',
//         width: '100%',
//         marginTop: '120px',
//       }}
//     >
//       <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
//         {/* Header */}
//         <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          

//             <h2 className="mb-3" style={{ 
//               color: '#002856', 
//               fontSize: '2.5rem', 
//               fontWeight: '700',
//               fontFamily: "'Plus Jakarta Sans', sans-serif"
//             }}>
//               <span
//                 style={{
//                   background: ' #3498db',
//                   WebkitBackgroundClip: 'text',
//                   WebkitTextFillColor: 'transparent',
//                 }}
//               >
//                  Medical practices face unique &nbsp;
//               </span>

//               <span
//                 style={{
//                   background: ' #1abc9c',
//                   WebkitBackgroundClip: 'text',
//                   WebkitTextFillColor: 'transparent',
//                 }}
//               >
//               operational challenges
//               </span>
//             </h2>
//           <p
//             style={{
//               fontSize: '1rem',
//               fontWeight: 400,
//               color: '#475569',
//               lineHeight: 1.6,
//               maxWidth: '760px',
//               margin: '0 auto',
//             }}
//           >
//             Doctors want to focus on patient care, but admin work consumes 40-50% of staff time
//           </p>
//         </div>

//         {/* Cards Grid */}
//         <div
//           style={{
//             display: 'grid',
//             gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
//             gap: '20px',
//             marginTop: '24px',
//           }}
//         >
//           {challenges.map((item, index) => (
//             <div
//               key={index}
//               style={{
//                 background: '#FFFFFF',
//                 borderRadius: '16px',
//                 padding: '22px 20px',
//                 borderLeft: '5px solid #E63946',
//                 boxShadow: '0 6px 24px rgba(15, 23, 42, 0.06)',
//                 transition: 'all 0.22s ease',
//                 cursor: 'pointer',
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.transform = 'translateY(-4px)';
//                 e.currentTarget.style.boxShadow = '0 8px 32px rgba(15, 76, 129, 0.12)';
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform = 'translateY(0)';
//                 e.currentTarget.style.boxShadow = '0 4px 16px rgba(15, 76, 129, 0.06)';
//               }}
//             >
//               {/* Icon */}
//               <div
//                 style={{
//                   fontSize: '28px',
//                   marginBottom: '16px',
//                   display: 'inline-flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   width: '40px',
//                   height: '40px',
//                   color: '#E63946',
//                 }}
//               >
//                 {item.icon}
//               </div>

//               {/* Title */}
//               <h3
//                 style={{
//                   fontSize: '1.05rem',
//                   fontWeight: 700,
//                   color: '#0F172A',
//                   marginBottom: '12px',
//                   marginTop: '0px',
//                   lineHeight: 1.4,
//                 }}
//               >
//                 {item.title}
//               </h3>

//               {/* Description */}
//               <p
//                 style={{
//                   fontSize: '0.92rem',
//                   fontWeight: 400,
//                   color: '#475569',
//                   lineHeight: 1.5,
//                   marginBottom: '0px',
//                 }}
//               >
//                 {item.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MedicalVA;
import React from 'react';
import { FaPhoneSlash, FaMoneyBillWave, FaBalanceScale, FaTired, FaSearch, FaBullseye } from 'react-icons/fa';

const MedicalVA = () => {
  const challenges = [
    {
      icon: <FaPhoneSlash />,
      title: 'Dropped Calls',
      description: "Patients can't reach you. Appointments go unmade. Revenue is lost before it starts. Front desk is overwhelmed.",
    },
    {
      icon: <FaMoneyBillWave />,
      title: 'Revenue Leakage',
      description: 'Claims sit unprocessed for weeks. Insurance verification is incomplete. You\'re leaving money on the table every single day.',
    },
    {
      icon: <FaBalanceScale />,
      title: 'Rising Denials',
      description: 'Insurance companies use AI to increase denials. Claims get rejected for missing information or code errors. No one fights the appeals.',
    },
    {
      icon: <FaTired />,
      title: 'Staff Burnout',
      description: 'Your team is overwhelmed managing billing, scheduling, and insurance. Turnover is high. Training new staff is endless.',
    },
    {
      icon: <FaSearch />,
      title: 'No Visibility',
      description: "You don't know your financial metrics. AR days? Denial rates? Patient acquisition cost? It's all a mystery to you.",
    },
    {
      icon: <FaBullseye />,
      title: 'System Chaos',
      description: 'Multiple vendors, fragmented systems, no coordination. EHR, practice management, clearinghouse—all separate. Data doesn\'t flow.',
    },
  ];

  return (
    <section
      style={{
        background: '#F5F7FB',
        padding: 'clamp(80px, 8vw, 100px) 0',
        width: '100%',
        marginTop: '120px',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h2
            className="mb-3"
            style={{
              color: '#002856',
              fontSize: '2.5rem',
              fontWeight: '700',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            <span
              style={{
                background: ' #3498db',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Medical practices face unique &nbsp;
            </span>

            <span
              style={{
                background: ' #1abc9c',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              operational challenges
            </span>
          </h2>

          <p
            style={{
              fontSize: '1rem',
              fontWeight: 400,
              color: '#475569',
              lineHeight: 1.6,
              maxWidth: '760px',
              margin: '0 auto',
            }}
          >
            Doctors want to focus on patient care, but admin work consumes 40-50% of staff time
          </p>
        </div>

        {/* Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
            marginTop: '24px',
          }}
        >
          {challenges.map((item, index) => (
            <div
              key={index}
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                padding: '22px 20px',
                borderLeft: '5px solid #E63946',
                boxShadow: '0 6px 24px rgba(15, 23, 42, 0.06)',
                minHeight: '260px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                transition:
                  'transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease',
                border: '1px solid #E2E8F0',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow =
                  '0 16px 36px rgba(25, 154, 111, 0.14)';
                e.currentTarget.style.borderColor = '#199a6f';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow =
                  '0 6px 24px rgba(15, 23, 42, 0.06)';
                e.currentTarget.style.borderColor = '#E2E8F0';
              }}
            >
              {/* Icon */}
              <div
                style={{
                  fontSize: '28px',
                  marginBottom: '16px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  color: '#199a6f',
                }}
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: '#0F172A',
                  marginBottom: '12px',
                  marginTop: '0px',
                  lineHeight: 1.4,
                }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: '0.92rem',
                  fontWeight: 400,
                  color: '#475569',
                  lineHeight: 1.5,
                  marginBottom: '0px',
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MedicalVA;