
// import React from 'react';

// const Dentalpractice = () => {
//   const challenges = [
//     {
//       title: '⚠️ Insurance Changes',
//       description: 'Plan updates, code changes, authorization requirements—constantly.',
//     },
//     {
//       title: '💸 Revenue Leakage',
//       description: 'Insurance delays payments. Claims sit unapproved.',
//     },
//     {
//       title: '📄 Manual Work',
//       description: 'Insurance verification is manual. Front desk spends hours on calls.',
//     },
//     {
//       title: '😫 Staff Burnout',
//       description: 'Team overwhelmed. Insurance calls, claim chasing, denials.',
//     },
//     {
//       title: '🚫 High Denials',
//       description: 'Insurance denies claims constantly. Missing documentation.',
//     },
//     {
//       title: '👀 No Visibility',
//       description: 'Claim status? Denial rates? You don’t know your metrics.',
//     },
//   ];

//   return (
//     <section
//       style={{
//         background: '#F5F7FB',
//         padding: 'clamp(40px, 6vw, 64px) 0',
//         width: '100%',
//       }}
//     >
//       <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
//         {/* Header */}
//         <div style={{ textAlign: 'left', marginBottom: '32px' }}>
         
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
//                 Dental practices struggle with&nbsp;
//               </span>

//               <span
//                 style={{
//                   background: ' #1abc9c',
//                   WebkitBackgroundClip: 'text',
//                   WebkitTextFillColor: 'transparent',
//                 }}
//               >
//                insurance complexity
//               </span>
//             </h2>
//           <p
//             style={{
//               fontSize: '1rem',
//               fontWeight: 400,
//               color: '#64748B',
//               lineHeight: 1.7,
//               maxWidth: '760px',
//               margin: '0',
//             }}
//           >
//             Dental insurance changes constantly, eating your team’s time and money
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
//               {/* Title */}
//               <h3
//                 style={{
//                   fontSize: '1.05rem',
//                   fontWeight: 700,
//                   color: '#0F3B70',
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
//                   fontSize: '0.95rem',
//                   fontWeight: 400,
//                   color: '#64748B',
//                   lineHeight: 1.7,
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

// export default Dentalpractice;
import React from 'react';
import {
  FaExclamationTriangle,
  FaMoneyBillWave,
  FaClipboardList,
  FaUserClock,
  FaBan,
  FaEye,
} from 'react-icons/fa';

const Dentalpractice = () => {
  const challenges = [
    {
      icon: <FaExclamationTriangle />,
      title: 'Insurance Changes',
      description:
        'Plan updates, code changes, authorization requirements—constantly.',
    },
    {
      icon: <FaMoneyBillWave />,
      title: 'Revenue Leakage',
      description:
        'Insurance delays payments. Claims sit unapproved.',
    },
    {
      icon: <FaClipboardList />,
      title: 'Manual Work',
      description:
        'Insurance verification is manual. Front desk spends hours on calls.',
    },
    {
      icon: <FaUserClock />,
      title: 'Staff Burnout',
      description:
        'Team overwhelmed. Insurance calls, claim chasing, denials.',
    },
    {
      icon: <FaBan />,
      title: 'High Denials',
      description:
        'Insurance denies claims constantly. Missing documentation.',
    },
    {
      icon: <FaEye />,
      title: 'No Visibility',
      description:
        'Claim status? Denial rates? You don’t know your metrics.',
    },
  ];

  return (
    <section
      style={{
        background: '#F5F7FB',
        padding: 'clamp(48px, 8vw, 88px) 0',
        width: '100%',
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '0 24px',
        }}
      >
        {/* Header */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '50px',
          }}
        >
          <h2
            className="mb-3"
            style={{
              color: '#002856',
              fontSize: '2.5rem',
              fontWeight: '700',
              fontFamily: "var(--bs-heading-font-family)",
              lineHeight: '1.2',
              marginBottom: '18px',
            }}
          >
            <span
              style={{
                background: '#3498db',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Dental practices struggle with&nbsp;
            </span>

            <span
              style={{
                background: '#1abc9c',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              insurance complexity
            </span>
          </h2>

          <p
            style={{
              fontSize: '1rem',
              fontWeight: 400,
              color: '#64748B',
              lineHeight: 1.7,
              maxWidth: '760px',
              margin: '0 auto',
            }}
          >
            Dental insurance changes constantly, eating your team’s
            time and money
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
          }}
        >
          {challenges.map((item, index) => (
            <div
              key={index}
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                padding: '22px 20px',
                boxShadow:
                  '0 6px 24px rgba(15, 23, 42, 0.06)',
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
                e.currentTarget.style.transform =
                  'translateY(-6px)';
                e.currentTarget.style.boxShadow =
                  '0 16px 36px rgba(25, 154, 111, 0.14)';
                e.currentTarget.style.borderColor =
                  '#199a6f';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  'translateY(0)';
                e.currentTarget.style.boxShadow =
                  '0 6px 24px rgba(15, 23, 42, 0.06)';
                e.currentTarget.style.borderColor =
                  '#E2E8F0';
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  background: 'rgba(46, 134, 222, 0.12)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#2E86DE',
                  fontSize: '22px',
                  marginBottom: '22px',
                }}
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  margin: 0,
                  fontSize: '1.05rem',
                  lineHeight: 1.4,
                  fontWeight: 700,
                  color: '#0F172A',
                  marginBottom: '12px',
                }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  margin: 0,
                  fontSize: '0.92rem',
                  lineHeight: 1.5,
                  color: '#475569',
                  flex: 1,
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

export default Dentalpractice;