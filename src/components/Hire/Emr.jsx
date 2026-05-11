
import React from "react";

import advancedMD from '../../assets/images/services/advancedmd-logo.jpg';
import athenaHealth from '../../assets/images/services/athenahealth-logo.jpg';
import careCloud from '../../assets/images/services/carecloud-logo.jpg';
import eClinicalWorks from '../../assets/images/services/eclinicalworks-logo.jpg';
import epic from '../../assets/images/services/epic-logo.jpg';
import nextgen from '../../assets/images/services/nextgen-logo.jpg';

const EHRSection = () => {
  const ehrLogos = [
    { src: advancedMD, alt: "AdvancedMD" },
    { src: athenaHealth, alt: "Athena Health" },
    { src: careCloud, alt: "CareCloud" },
    { src: eClinicalWorks, alt: "eClinicalWorks" },
    { src: epic, alt: "Epic" },
    { src: nextgen, alt: "NextGen" }
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

          .ehrSection{
            width:100%;
            background:#f8f9fa;
            padding:clamp(80px, 8vw, 100px) 0;
            marginTop:120px;
            font-family:'Inter', sans-serif;
          }

          .ehrContainer{
            max-width:1280px;
            margin:auto;
            padding:0 24px;
            text-align:center;
          }

          .ehrTitle{
            font-size:clamp(2.2rem, 4vw, 3.2rem);
            line-height:1.02;
            font-weight:900;
            color:#4D9BD6;
            letter-spacing:-0.08em;
            max-width:900px;
            margin:auto;
            margin-bottom:22px;
          }

          .ehrTitle span:first-child{
            background:linear-gradient(135deg, #4D9BD6, #199A6F);
            -webkit-background-clip:text;
            -webkit-text-fill-color:transparent;
            background-clip:text;
          }

          .ehrTitle span:last-child{
            color:#52525B;
          }

          .ehrDivider{
            width:60px;
            height:3px;
            background:#4D9BD6;
            margin:auto;
            margin-bottom:24px;
          }

          .ehrDescription{
            font-size:16px;
            color:#52525B;
            line-height:1.6;
            margin-bottom:64px;
            max-width:600px;
            margin-left:auto;
            margin-right:auto;
          }

          .ehrGrid{
            display:grid;
            grid-template-columns:repeat(auto-fit, minmax(160px, 1fr));
            gap:32px;
            margin-bottom:48px;
          }

          .ehrLogo{
            background:#ffffff;
            padding:24px;
            border-radius:12px;
            box-shadow:0px 4px 16px rgba(0,0,0,0.04);
            display:flex;
            align-items:center;
            justify-content:center;
            height:100px;
            transition:0.22s;
          }

          .ehrLogo:hover{
            transform:translateY(-2px);
            box-shadow:0px 8px 24px rgba(0,0,0,0.08);
          }

          .ehrLogo img{
            max-height:60px;
            max-width:100%;
            object-fit:contain;
          }

          .ehrButton{
            background:linear-gradient(135deg, #4D9BD6, #199A6F);
            color:#ffffff;
            border:none;
            padding:16px 32px;
            border-radius:50px;
            font-size:16px;
            font-weight:600;
            cursor:pointer;
            transition:0.22s;
            box-shadow:0px 4px 16px rgba(77,155,214,0.3);
          }

          .ehrButton:hover{
            transform:translateY(-2px);
            box-shadow:0px 8px 24px rgba(77,155,214,0.4);
          }

          @media(max-width:991px){
            .ehrGrid{
              grid-template-columns:repeat(3, 1fr);
              gap:24px;
            }

            .ehrTitle{
              font-size:42px;
            }
          }

          @media(max-width:600px){
            .ehrSection{
              padding:80px 15px;
            }

            .ehrTitle{
              font-size:34px;
            }

            .ehrGrid{
              grid-template-columns:repeat(2, 1fr);
              gap:16px;
            }

            .ehrLogo{
              padding:16px;
              height:80px;
            }

            .ehrLogo img{
              max-height:40px;
            }

            .ehrDescription{
              font-size:16px;
              margin-bottom:40px;
            }
          }
        `}
      </style>

      <section className="ehrSection">
        <div className="ehrContainer">
          <h2 className="ehrTitle">
            <span>We excel in utilizing these</span> <span>EHRs</span>
          </h2>
          <div className="ehrDivider"></div>
          <p className="ehrDescription">
            The specialists at HBS are highly knowledgeable about the features and workflows
            of your EHR system.
          </p>

          <div className="ehrGrid">
            {ehrLogos.map((logo, index) => (
              <div key={index} className="ehrLogo">
                <img src={logo.src} alt={logo.alt} />
              </div>
            ))}
          </div>

          <button className="ehrButton">
            EXPLORE MORE
          </button>
        </div>
      </section>
    </>
  );
};

export default EHRSection;
