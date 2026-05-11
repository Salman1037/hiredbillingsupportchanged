import React from 'react';
import {
  BsCalendarCheck,
  BsPersonCheck,
  BsShieldCheck,
  BsJournalText,
  BsLaptop,
  BsChatDots,
  BsInbox,
  BsGraphUp
} from 'react-icons/bs';

const Medicalcore = () => {
  const services = [
    {
      icon: BsCalendarCheck,
      title: "Patient Scheduling",
      description: "High-volume inbound/outbound scheduling, rescheduling, and recalls with no-show reduction."
    },
    {
      icon: BsPersonCheck,
      title: "Insurance Verification",
      description: "Real-time eligibility & benefits checks; document co-pays, deductibles, and coverage notes."
    },
    {
      icon: BsShieldCheck,
      title: "Prior Authorizations",
      description: "Gather clinicals, submit PAs, and track approvals; proactive follow-ups to prevent delays."
    },
    {
      icon: BsJournalText,
      title: "Medical Scribing (Live/Async)",
      description: "Chart in real time or from recordings; templates/macros aligned to your specialty & EHR."
    },
    {
      icon: BsLaptop,
      title: "EHR Data Entry & Cleanup",
      description: "Problem lists, meds, allergies, labs, orders, inbox triage—entered consistently and on time."
    },
    {
      icon: BsChatDots,
      title: "Patient Communication",
      description: "Phone/SMS/portal messages, appointment reminders, pre-visit instructions, and recalls."
    },
    {
      icon: BsInbox,
      title: "Provider Inbox & Referrals",
      description: "Fax/portal processing, refills, referrals, and results routing with audit-ready logs."
    },
    {
      icon: BsGraphUp,
      title: "QA & Reporting",
      description: "Daily productivity/accuracy reports; spot checks and workflow improvements you can track."
    }
  ];

  return (
    <>
      <style>
        {`
          *{
            margin:0;
            padding:0;
            box-sizing:border-box;
          }

          .medicalCoreSection{
            width:100%;
            background:#F5F7FB;
            padding:clamp(80px, 8vw, 100px) 0;
            marginTop:120px;
            font-family: var(--bs-body-font-family);
          }

          .medicalCoreContainer{
            max-width:1280px;
            margin:auto;
            padding:0 24px;
          }

          .medicalCoreHeader{
            text-align:center;
            margin-bottom:64px;
          }

          .medicalCoreTitle{
            font-size:clamp(2.2rem, 4vw, 3.2rem);
            line-height:1.02;
            font-weight:900;
            color:#4D9BD6;
            letter-spacing:-0.08em;
            max-width:900px;
            margin:auto;
            margin-bottom:22px;
          }

          .medicalCoreDescription{
            font-size:16px;
            color:#52525B;
            line-height:1.6;
            max-width:800px;
            margin:auto;
          }

          .servicesGrid{
            display:grid;
            grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));
            gap:32px;
          }

          .serviceCard{
            background:#ffffff;
            padding:32px 24px;
            border-radius:16px;
            text-align:center;
            transition:0.22s;
          }

          .serviceCard:hover{
            transform:translateY(-4px);
            box-shadow:0px 10px 35px rgba(0,0,0,0.08);
          }

          .serviceIconWrapper{
            width:80px;
            height:80px;
            border-radius:50%;
            background:linear-gradient(135deg, #4D9BD6, #199A6F);
            display:flex;
            align-items:center;
            justify-content:center;
            margin:auto;
            margin-bottom:24px;
          }

          .serviceIcon{
            font-size:32px;
            color:#ffffff;
          }

          .serviceTitle{
            font-size:20px;
            font-weight:700;
            color:#4D9BD6;
            margin-bottom:16px;
            line-height:1.2;
          }

          .serviceDescription{
            font-size:15px;
            color:#52525B;
            line-height:1.5;
            margin:0;
          }

          @media(max-width:991px){
            .servicesGrid{
              grid-template-columns:repeat(2, 1fr);
              gap:24px;
            }

            .medicalCoreTitle{
              font-size:42px;
            }
          }

          @media(max-width:600px){
            .medicalCoreSection{
              padding:80px 15px;
            }

            .medicalCoreTitle{
              font-size:34px;
            }

            .servicesGrid{
              grid-template-columns:1fr;
              gap:20px;
            }

            .serviceCard{
              padding:24px 20px;
            }

            .serviceIconWrapper{
              width:70px;
              height:70px;
              margin-bottom:20px;
            }

            .serviceIcon{
              font-size:28px;
            }

            .serviceTitle{
              font-size:20px;
            }

            .serviceDescription{
              font-size:15px;
            }
          }
        `}
      </style>

      <section className="medicalCoreSection">
        <div className="medicalCoreContainer">
          <div className="medicalCoreHeader">
           
             <h2 className="mb-3" style={{ 
              color: '#002856', 
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', 
              fontWeight: '700',
              fontFamily: "var(--bs-heading-font-family)"
            }}>
              <span
                style={{
                  background: ' #3498db',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                 Our Core&nbsp;
              </span>

              <span
                style={{
                  background: ' #1abc9c',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                  Services
              </span>
            </h2>
            <p className="medicalCoreDescription">
              Medical Billing Services by us enables healthcare providers to concentrate on giving incredible consideration. Through observing the SOPs of each practice and following them diligently, we find the best and most effective billings to keep your practice going smoothly. With you focused on patient experience, we engage in billing and coding to aid your business.
            </p>
          </div>

          <div className="servicesGrid">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="serviceCard">
                  <div className="serviceIconWrapper">
                    <Icon className="serviceIcon" />
                  </div>
                  <h3 className="serviceTitle">{service.title}</h3>
                  <p className="serviceDescription">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Medicalcore;
