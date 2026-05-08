import React from "react";
import { FaArrowRight } from "react-icons/fa";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "My Edge employees have become the backbone of my practice.",
      initials: "DA",
      name: "Dr. Nureen Alim",
      role: "Physician-Owner, Houston Medical Practice",
    },
    {
      quote:
        "We reduced our outstanding AR by 90% within the first quarter of working with Edge.",
      initials: "PO",
      name: "Practice Owner",
      role: "Wisconsin Family Dental",
    },
    {
      quote:
        "Edge cut our quoting time from 24 hours to 15 minutes.",
      initials: "AO",
      name: "Agency Owner",
      role: "Medicare Insurance Agency",
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

          .testimonialsSection{
            width:100%;
            padding:clamp(40px, 6vw, 64px) 0 clamp(40px, 6vw, 64px) 0;
            background:#f5f5f5;
          }

          .testimonialsContainer{
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
            letterSpacing:-0.08em;
            margin-bottom:60px;
          }

          .topCards{
            display:grid;
            grid-template-columns:repeat(3,1fr);
            gap:24px;
          }

          .testimonialCard{
            background:#ffffff;
            border:1px solid #E5E7EB;
            border-radius:20px;
            padding:28px;
            transition:0.22s;
          }

          .testimonialCard:hover{
            transform:translateY(-5px);
            box-shadow:0 8px 32px 0 rgba(139,92,246,0.13), 0 2px 8px 0 rgba(0,0,0,0.10);
          }

          .quoteText{
            font-size:16px;
            line-height:1.6;
            color:#52525B;
            margin-bottom:28px;
            min-height:90px;
          }

          .cardBottom{
            border-top:1px solid #ececec;
            padding-top:18px;
          }

          .userInfo{
            display:flex;
            align-items:center;
            gap:14px;
          }

          .userAvatar{
            width:42px;
            height:42px;
            border-radius:50%;
            background:#199A6F;
            color:#ffffff;
            display:flex;
            align-items:center;
            justify-content:center;
            font-size:13px;
            font-weight:700;
          }

          .userText h4{
            font-size:15px;
            font-weight:700;
            color:#4D9BD6;
            margin-bottom:5px;
          }

          .userText p{
            font-size:13px;
            color:#52525B;
          }

          .caseStudyBtn{
            margin-top:18px;
            border:none;
            background:none;
            color:#199A6F;
            font-size:15px;
            font-weight:700;
            display:flex;
            align-items:center;
            gap:8px;
            cursor:pointer;
            transition:0.22s;
          }

          .caseStudyBtn:hover{
            gap:13px;
          }

          /* Bottom Large Card */

          .bottomCard{
            margin-top:24px;
            background:#ffffff;
            border:1px solid #E5E7EB;
            border-radius:20px;
            padding:30px;
            transition:0.22s;
          }

          .bottomCard:hover{
            transform:translateY(-5px);
            box-shadow:0 8px 32px 0 rgba(139,92,246,0.13), 0 2px 8px 0 rgba(0,0,0,0.10);
          }

          .bottomQuote{
            font-size:17px;
            line-height:1.6;
            color:#52525B;
            margin-bottom:26px;
          }

          .bottomCardInner{
            border-top:1px solid #ececec;
            padding-top:18px;
          }

          /* Dots */

          .dotsWrapper{
            display:flex;
            justify-content:center;
            align-items:center;
            gap:8px;
            margin-top:32px;
          }

          .dot{
            width:9px;
            height:9px;
            border-radius:50%;
            background:#cfcfcf;
          }

          .activeDot{
            background:#199A6F;
          }

          /* Bottom Link */

          .storiesLink{
            display:flex;
            justify-content:center;
            margin-top:32px;
          }

          .storiesLink a{
            text-decoration:none;
            color:#199A6F;
            font-size:17px;
            font-weight:700;
            display:flex;
            align-items:center;
            gap:10px;
            transition:0.22s;
          }

          .storiesLink a:hover{
            gap:16px;
          }

          @media(max-width:991px){

            .mainHeading{
              font-size:42px;
            }

            .topCards{
              grid-template-columns:1fr;
            }
          }

          @media(max-width:600px){

            .testimonialsSection{
              padding:80px 15px;
            }

            .mainHeading{
              font-size:34px;
            }

            .testimonialCard,
            .bottomCard{
              padding:22px;
            }

            .quoteText,
            .bottomQuote{
              font-size:15px;
              line-height:28px;
            }
          }
        `}
      </style>

      <section className="testimonialsSection">
        <div className="testimonialsContainer">

          <div className="topBadge">
            <span>TESTIMONIALS</span>
          </div>

          <h2 className="mainHeading">
            Trusted Across Medical, Dental & Insurance
          </h2>

          {/* Top Cards */}
          <div className="topCards">

            {testimonials.map((item, index) => (
              <div className="testimonialCard" key={index}>

                <p className="quoteText">
                  "{item.quote}"
                </p>

                <div className="cardBottom">

                  <div className="userInfo">

                    <div className="userAvatar">
                      {item.initials}
                    </div>

                    <div className="userText">
                      <h4>{item.name}</h4>
                      <p>{item.role}</p>
                    </div>

                  </div>

                  <button className="caseStudyBtn">
                    Case Study <FaArrowRight size={12} />
                  </button>

                </div>

              </div>
            ))}

          </div>

          {/* Bottom Large Card */}
          <div className="bottomCard">

            <p className="bottomQuote">
              "If we never hired through Edge, we wouldn't be in the growth
              accelerator stage that we are right now."
            </p>

            <div className="bottomCardInner">

              <div className="userInfo">

                <div className="userAvatar">
                  PO
                </div>

                <div className="userText">
                  <h4>Practice Owner</h4>
                  <p>Medical Client</p>
                </div>

              </div>

              <button className="caseStudyBtn">
                Case Study <FaArrowRight size={12} />
              </button>

            </div>

          </div>

          {/* Dots */}
          <div className="dotsWrapper">
            <div className="dot activeDot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>

          {/* Bottom Link */}
          <div className="storiesLink">
            <a href="/">
              See all customer stories
              <FaArrowRight size={13} />
            </a>
          </div>

        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;