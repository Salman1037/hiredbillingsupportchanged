import React from "react";
import {
  FaLock,
  FaDesktop,
  FaBuilding,
  FaDollarSign,
  FaAward,
  FaFileAlt,
} from "react-icons/fa";

const WhyhbsSection = () => {
  const features = [
    {
      icon: <FaLock />,
      title: "HIPAA-Trained & PHI-Secure",
      description:
        "Every Edge team member is trained on HIPAA protocols before starting. We operate from regulated, secure office environments and provide a signed Business Associate Agreement (BAA) with every engagement. Fully compliant with HIPAA, SOC 2 Type II, ISO 27001, and GDPR.",
    },
    {
      icon: <FaDesktop />,
      title: "Software-Trained Before Day One",
      description:
        "Staff are guided on your specific systems before their first day - no ramp-up delay, no trial and error. We cover leading platforms across medical, dental, and insurance.",
    },
    {
      icon: <FaBuilding />,
      title: "Fully Managed Infrastructure",
      description:
        "Edge handles recruitment, vetting, HR, payroll, compliance, equipment, IT, and ongoing supervision. You direct the work. We manage the person. Zero additional overhead on your end.",
    },
    {
      icon: <FaDollarSign />,
      title: "Save Up to 70% Compared to In-House Hiring",
      description:
        "The average in-house medical admin hire costs $50,000-$65,000/year before benefits, payroll taxes, and overhead. Edge clients consistently reduce their staffing costs by up to 70% - without any sacrifice in quality or reliability.",
    },
    {
      icon: <FaAward />,
      title: "Top 1% Global Talent, 97.3% Retention Rate",
      description:
        "Edge accepts only 2% of applicants. Every hire has a university degree, speaks fluent English, and is purpose-trained for your industry. Our 97.3% retention rate means your practice gets a long-term team member - not a revolving door.",
    },
    {
      icon: <FaFileAlt />,
      title: "No Payment Until You Hire. No Contract Lock-In.",
      description:
        "Zero-risk hiring: book a demo, interview candidates, and consult with our team at no cost. You only pay when you've found the right person. No upfront fees. No long-term commitments required to get started.",
    },
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

          .whyEdgeSection{
            width:100%;
            background:#f5f5f5;
            padding:clamp(80px, 8vw, 100px) 0;
            marginTop:120px;
          }

          .whyEdgeContainer{
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
            padding:4px 18px;
            border-radius:18px;
            border:1px solid #BCEFDC;
            background:#E0F7EF;
            font-size:15px;
            font-weight:600;
            letter-spacing:0.1px;
            color:#199A6F;
          }

          .mainHeading{
            text-align:center;
            font-size:clamp(2.6rem, 5.8vw, 4.4rem);
            line-height:1.02;
            font-weight:900;
            color:#4D9BD6;
            letterSpacing:-0.08em;
            max-width:900px;
            margin:auto;
          }

          .mainDescription{
            max-width:560px;
            margin:22px auto 0;
            text-align:center;
            font-size:clamp(1.05rem, 2vw, 1.35rem);
            line-height:1.6;
            color:#52525B;
          }

          .featuresGrid{
            margin-top:48px;
            display:grid;
            grid-template-columns:repeat(2,1fr);
            gap:40px 48px;
          }

          .featureCard{
            display:flex;
            align-items:flex-start;
            gap:18px;
            padding:28px 24px;
            border:2px solid #E5E7EB;
            border-radius:16px;
            background:#ffffff;
            transition:0.22s;
            box-shadow:0px 2px 8px rgba(0,0,0,0.04);
          }

          .featureCard:hover{
            border-color:#199A6F;
            box-shadow:0px 8px 24px rgba(25,154,111,0.12);
            transform:translateY(-4px);
          }

          .iconBox{
            min-width:52px;
            width:52px;
            height:52px;
            border-radius:14px;
            background:#E0F7EF;
            display:flex;
            align-items:center;
            justify-content:center;
            font-size:20px;
            color:#199A6F;
            transition:0.22s;
          }

          .featureCard:hover .iconBox{
            background:#199A6F;
            color:#ffffff;
            transform:translateY(-3px);
          }

          .featureContent h3{
            font-size:22px;
            line-height:30px;
            color:#4D9BD6;
            font-weight:700;
            margin-bottom:14px;
          }

          .featureContent p{
            font-size:16px;
            line-height:30px;
            color:#52525B;
          }

          .bottomTags{
            margin-top:48px;
            display:flex;
            justify-content:center;
            gap:14px;
            flex-wrap:wrap;
          }

          .bottomTags span{
            padding:4px 18px;
            border-radius:18px;
            background:#E0F7EF;
            color:#199A6F;
            font-size:15px;
            font-weight:600;
            border:1px solid #BCEFDC;
          }

          @media(max-width:991px){

            .mainHeading{
              font-size:42px;
            }

            .featuresGrid{
              grid-template-columns:1fr;
            }
          }

          @media(max-width:600px){

            .whyEdgeSection{
              padding:80px 15px;
            }

            .mainHeading{
              font-size:34px;
            }

            .mainDescription{
              font-size:15px;
              line-height:28px;
            }

            .featureContent h3{
              font-size:20px;
              line-height:28px;
            }

            .featureContent p{
              font-size:15px;
              line-height:28px;
            }

            .featureCard{
              gap:15px;
              padding:24px 20px;
            }

            .iconBox{
              min-width:45px;
              width:45px;
              height:45px;
              font-size:18px;
            }
          }
        `}
      </style>

      <section className="whyEdgeSection">
        <div className="whyEdgeContainer">

          <div className="topBadge">
            <span>WHY EDGE</span>
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
                 Not a Staffing Agency. &nbsp;
              </span>

              <span
                style={{
                  background: ' #1abc9c',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
               An Operational Partner
              </span>
            </h2>


          <p className="mainDescription">
            Most staffing agencies send you a resume and walk away. Edge finds,
            trains, equips, and manages your remote team member - so you get a
            high-performing, compliant professional who works as part of your
            team from day one.
          </p>

          <div className="featuresGrid">

            {features.map((feature, index) => (
              <div className="featureCard" key={index}>

                <div className="iconBox">
                  {feature.icon}
                </div>

                <div className="featureContent">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>

              </div>
            ))}

          </div>

          <div className="bottomTags">
            <span>HIPAA Compliant</span>
            <span>SOC 2 Type II</span>
            <span>ISO 27001</span>
            <span>GDPR Compliant</span>
          </div>

        </div>
      </section>
    </>
  );
};

export default WhyhbsSection;