import React, { useState } from "react";

const BrowseRoles = () => {
  const [activeTab, setActiveTab] = useState("Medical");

  const roleData = {
    Medical: [
      {
        title: "Medical Scribe",
        description:
          "Documents clinical encounters in real time - reducing physician admin burden by 40+ hours a month so you can see more patients.",
      },
      {
        title: "Medical Scheduling Coordinator",
        description:
          "Manages appointment scheduling, patient reminders, and calendar optimization - keeping your schedule full and your practice running smoothly.",
      },
      {
        title: "Medical Insurance Coordinator",
        description:
          "Handles insurance verification, pre-authorizations, and claims - so your clinical team stays focused on patient care.",
      },
      {
        title: "Medical Billing Coordinator",
        description:
          "Processes claims, tracks payments, manages collections, and follows up on denials - keeping your revenue cycle on track.",
      },
      {
        title: "Patient Care Coordinator",
        description:
          "Coordinates patient intake, referrals, and follow-ups - improving care continuity and patient experience.",
      },
    ],

    Dental: [
      {
        title: "Dental Receptionist",
        description:
          "Handles patient communication, scheduling, and front desk operations for smooth clinic management.",
      },
      {
        title: "Dental Insurance Coordinator",
        description:
          "Verifies dental insurance, processes claims, and manages patient billing support efficiently.",
      },
      {
        title: "Dental Treatment Coordinator",
        description:
          "Assists patients with treatment plans, scheduling, and financing coordination.",
      },
      {
        title: "Dental Billing Specialist",
        description:
          "Tracks invoices, payments, insurance submissions, and outstanding balances.",
      },
    ],

    Insurance: [
      {
        title: "Claims Specialist",
        description:
          "Processes insurance claims efficiently while ensuring policy compliance and accuracy.",
      },
      {
        title: "Insurance Verification Coordinator",
        description:
          "Handles policy verification and eligibility checks for streamlined operations.",
      },
      {
        title: "Policy Support Assistant",
        description:
          "Provides customer support and assists with policy updates and renewals.",
      },
      {
        title: "Insurance Billing Coordinator",
        description:
          "Manages invoicing, collections, and billing workflows for insurance operations.",
      },
    ],
  };

  return (
    <>
      <style>
        {`
          *{
            margin:0;
            padding:0;
            box-sizing:border-box;
          }

          .browseRoles{
            width:100%;
            padding:clamp(80px, 8vw, 100px) 0;
            background:#f5f5f5;
            marginTop:120px;
            fontFamily: "'Inter', sans-serif;
          }

          .browseContainer{
            max-width:1280px;
            margin:auto;
            padding:0 24px;
          }

          .topBadge{
            display:flex;
            justify-content:center;
            margin-bottom:20px;
          }

          .topBadge span{
            border:1px solid #BCEFDC;
            padding:4px 18px;
            border-radius:18px;
            background:#E0F7EF;
            color:#199A6F;
            font-size:15px;
            font-weight:600;
            letter-spacing:0.1px;
          }

          .mainHeading{
            text-align:center;
            font-size:clamp(2.6rem, 5.8vw, 4.4rem);
            line-height:1.02;
            font-weight:900;
            color:#4D9BD6;
            letter-spacing:-0.08em;
            max-width:900px;
            margin:auto;
          }

          .mainText{
            max-width:560px;
            margin:22px auto 0;
            text-align:center;
            font-size:clamp(1.05rem, 2vw, 1.35rem);
            line-height:1.6;
            color:#52525B;
          }

          .tabsWrapper{
            display:flex;
            align-items:center;
            justify-content:center;
            gap:18px;
            margin-top:32px;
            flex-wrap:wrap;
          }

          .arrowBtn{
            width:46px;
            height:46px;
            border-radius:50%;
            border:1px solid #d9d9d9;
            background:#fff;
            cursor:pointer;
            font-size:18px;
            transition:0.3s;
          }

          .arrowBtn:hover{
            background:#123b8d;
            color:#fff;
          }

          .tabs{
            display:flex;
            gap:14px;
            flex-wrap:wrap;
          }

          .tabBtn{
            height:50px;
            padding:0 34px;
            border-radius:12px;
            border:1.5px solid #E5E7EB;
            background:#fff;
            font-size:1.08rem;
            font-weight:700;
            color:#18181B;
            cursor:pointer;
            transition:0.22s;
          }

          .tabBtn:hover{
            background:#199A6F;
            color:#fff;
            border-color:#199A6F;
          }

          .activeTab{
            background:#199A6F;
            color:#fff;
            border-color:#199A6F;
          }

          .cardsWrapper{
            margin-top:48px;
            display:flex;
            flex-direction:column;
            gap:20px;
          }

          .roleCard{
            background:#fff;
            border:1px solid #dddddd;
            border-radius:18px;
            padding:30px 28px;
            display:flex;
            align-items:center;
            justify-content:space-between;
            gap:30px;
            transition:0.3s;
          }

          .roleCard:hover{
            transform:translateY(-4px);
            box-shadow:0px 10px 35px rgba(0,0,0,0.08);
          }

          .roleTitle{
            width:24%;
          }

          .roleTitle h3{
            color:#4D9BD6;
            font-size:22px;
            line-height:30px;
            font-weight:700;
            margin-bottom:14px;
          }

          .roleDescription{
            width:56%;
          }

          .roleDescription p{
            color:#52525B;
            font-size:16px;
            line-height:30px;
          }

          .learnMore{
            width:20%;
            display:flex;
            justify-content:flex-end;
          }

          .learnMore button{
            border:none;
            background:transparent;
            color:#199A6F;
            font-size:16px;
            font-weight:700;
            cursor:pointer;
            display:flex;
            align-items:center;
            gap:10px;
            transition:0.22s;
          }

          .learnMore button:hover{
            gap:16px;
          }

          @media(max-width:991px){

            .mainHeading{
              font-size:clamp(2.4rem, 4vw, 3.2rem);
            }

            .roleCard{
              flex-direction:column;
              align-items:flex-start;
            }

            .roleTitle,
            .roleDescription,
            .learnMore{
              width:100%;
            }

            .learnMore{
              justify-content:flex-start;
            }
          }

          @media(max-width:600px){

            .browseRoles{
              padding:clamp(60px, 6vw, 80px) 15px;
            }

            .mainHeading{
              font-size:clamp(2.2rem, 5vw, 2.8rem);
            }

            .mainText{
              font-size:clamp(1rem, 2.2vw, 1.15rem);
              line-height:1.6;
            }

            .tabBtn{
              padding:0 24px;
              height:46px;
            }

            .roleCard{
              padding:24px 20px;
            }

            .roleTitle h3{
              font-size:20px;
            }
          }
        `}
      </style>

      <section className="browseRoles" id="dental-roles-section">
        <div className="browseContainer">

          <div className="topBadge">
            <span>BROWSE ROLES BY INDUSTRY</span>
          </div>

         
           <h2 className="mb-3" style={{ 
              color: '#002856', 
              fontSize: '2.5rem', 
              fontWeight: '700',
            textAlign: 'center',
              fontFamily: "'Plus Jakarta Sans', sans-serif"
            }}>
              <span
                style={{
                  background: ' #3498db',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                 Find the Right Role  &nbsp;
              </span>

              <span
                style={{
                  background: ' #1abc9c',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                for Your Needs
              </span>
            </h2>

          <p className="mainText">
            Edge provides fully managed, HIPAA-certified remote admin staff
            across medical, dental, and insurance operations. Select your
            industry to browse available roles.
          </p>

          <div className="tabsWrapper">

            <button className="arrowBtn">
              &#10094;
            </button>

            <div className="tabs">
              {["Medical", "Dental", "Insurance"].map((tab) => (
                <button
                  key={tab}
                  className={`tabBtn ${
                    activeTab === tab ? "activeTab" : ""
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            <button className="arrowBtn">
              &#10095;
            </button>

          </div>

          <div className="cardsWrapper">
            {roleData[activeTab].map((item, index) => (
              <div className="roleCard" key={index}>

                <div className="roleTitle">
                  <h3>{item.title}</h3>
                </div>

                <div className="roleDescription">
                  <p>{item.description}</p>
                </div>

                <div className="learnMore">
                  <button>
                    Learn More <span>&#8594;</span>
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default BrowseRoles;