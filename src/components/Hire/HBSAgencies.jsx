import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

const HBSAgencies = () => {
  const hbsFeatures = [
    "Full-time, dedicated Medical VA for your practice",
    "SOP-driven workflows + daily QA & KPIs",
    "EHR expertise",
    "Recall & reactivation managed end-to-end",
    "We sign a BAA and follow HIPAA",
    "US business-hours coverage & clear escalation"
  ];

  const otherAgenciesFeatures = [
    "Rotating, untrained assistants",
    "Unpredictable quality, no KPIs",
    "Limited EHR knowledge, manual errors",
    "Inconsistent recall / re-care follow-ups",
    "No BAA or weak security posture",
    "Mixed time-zone availability, slow response"
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

          .agenciesSection{
            width:100%;
            background:#ffffff;
            padding:clamp(80px, 8vw, 100px) 0;
            marginTop:120px;
            font-family: var(--bs-body-font-family);
          }

          .agenciesContainer{
            max-width:1280px;
            margin:auto;
            padding:0 24px;
          }

          .agenciesHeader{
            text-align:center;
            margin-bottom:64px;
          }

          .agenciesTitle{
            font-size:clamp(2.6rem, 5.8vw, 4.4rem);
            line-height:1.02;
            font-weight:900;
            color:#4D9BD6;
            letter-spacing:-0.08em;
            max-width:900px;
            margin:auto;
            margin-bottom:22px;
          }

          .agenciesTitle span:first-child{
            background:linear-gradient(135deg, #4D9BD6, #199A6F);
            -webkit-background-clip:text;
            -webkit-text-fill-color:transparent;
            background-clip:text;
          }

          .agenciesTitle span:last-child{
            color:#52525B;
          }

          .agenciesDescription{
            max-width:560px;
            margin:22px auto 0;
            text-align:center;
            font-size:clamp(1.05rem, 2vw, 1.35rem);
            line-height:1.6;
            color:#52525B;
          }

          .comparisonGrid{
            display:grid;
            grid-template-columns:1fr 1fr;
            gap:48px;
            max-width:1000px;
            margin:0 auto;
          }

          .comparisonCard{
            background:#ffffff;
            border-radius:20px;
            padding:48px 32px;
            box-shadow:0px 10px 35px rgba(0,0,0,0.08);
            border:2px solid transparent;
            transition:0.22s;
          }

          .comparisonCard.hbs{
            border-color:#199A6F;
          }

          .comparisonCard.other{
            border-color:#e5e5e5;
          }

          .comparisonCard:hover{
            transform:translateY(-4px);
          }

          .cardHeader{
            background:linear-gradient(135deg, #4D9BD6, #199A6F);
            color:#ffffff;
            padding:20px 24px;
            border-radius:12px;
            text-align:center;
            margin-bottom:32px;
            font-size:20px;
            font-weight:700;
          }

          .comparisonCard.other .cardHeader{
            background:#f5f5f5;
            color:#52525B;
          }

          .featureList{
            display:flex;
            flex-direction:column;
            gap:20px;
          }

          .featureItem{
            display:flex;
            align-items:flex-start;
            gap:16px;
          }

          .featureIcon{
            width:24px;
            height:24px;
            border-radius:50%;
            display:flex;
            align-items:center;
            justify-content:center;
            flex-shrink:0;
            margin-top:2px;
          }

          .featureIcon.check{
            background:#199A6F;
            color:#ffffff;
          }

          .featureIcon.cross{
            background:#dc3545;
            color:#ffffff;
          }

          .featureText{
            font-size:16px;
            line-height:24px;
            color:#52525B;
            margin:0;
            font-weight:500;
          }

          @media(max-width:991px){
            .comparisonGrid{
              grid-template-columns:1fr;
              gap:32px;
            }

            .agenciesTitle{
              font-size:42px;
            }
          }

          @media(max-width:600px){
            .agenciesSection{
              padding:80px 15px;
            }

            .agenciesTitle{
              font-size:34px;
            }

            .agenciesDescription{
              font-size:15px;
              line-height:28px;
            }

            .comparisonCard{
              padding:32px 24px;
            }

            .cardHeader{
              padding:16px 20px;
              font-size:18px;
            }
          }
        `}
      </style>

      <section className="agenciesSection">
        <div className="agenciesContainer">
          <div className="agenciesHeader">
            
             <h2 className="mb-3" style={{ 
              color: '#002856', 
              fontSize: '2.5rem', 
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
                 HBS vs. VA&nbsp;
              </span>

              <span
                style={{
                  background: ' #1abc9c',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Agencies
              </span>
            </h2>
            <p className="agenciesDescription">
              Discover what our vetted virtual medical receptionists do for hundreds of healthcare practices.
            </p>
          </div>

          <div className="comparisonGrid">
            <div className="comparisonCard hbs">
              <div className="cardHeader">
                Hiring with HBS
              </div>
              <div className="featureList">
                {hbsFeatures.map((feature, index) => (
                  <div key={index} className="featureItem">
                    <div className="featureIcon check">
                      <FaCheck size={12} />
                    </div>
                    <p className="featureText">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="comparisonCard other">
              <div className="cardHeader">
                Other VA Agencies
              </div>
              <div className="featureList">
                {otherAgenciesFeatures.map((feature, index) => (
                  <div key={index} className="featureItem">
                    <div className="featureIcon cross">
                      <FaTimes size={12} />
                    </div>
                    <p className="featureText">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HBSAgencies;
