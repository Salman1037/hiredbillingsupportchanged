import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const SuccessNumber = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const stats = [
    {
      number: 150,
      suffix: "+",
      title: "Providers Supported",
      color: "#199A6F"
    },
    {
      number: 10,
      suffix: "K+",
      title: "Patient Interactions / Month",
      color: "#199A6F"
    },
    {
      number: 80,
      suffix: "%",
      title: "Charting Time Reduced",
      color: "#199A6F"
    },
    {
      number: 99,
      suffix: "%",
      title: "Appointment Confirmation Rate",
      color: "#199A6F"
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

          .successSection{
            width:100%;
            background:#ffffff;
            padding:clamp(80px, 8vw, 100px) 0;
            marginTop:120px;
            font-family:'Inter', sans-serif;
          }

          .successContainer{
            max-width:1280px;
            margin:auto;
            padding:0 24px;
          }

          .successHeader{
            text-align:center;
            margin-bottom:64px;
          }

          .successTitle{
            font-size:clamp(2.2rem, 4vw, 3.2rem);
            line-height:1.02;
            font-weight:900;
            color:#4D9BD6;
            letter-spacing:-0.08em;
            max-width:900px;
            margin:auto;
            margin-bottom:22px;
          }

          .successTitle span:first-child{
            background:linear-gradient(135deg, #4D9BD6, #199A6F);
            -webkit-background-clip:text;
            -webkit-text-fill-color:transparent;
            background-clip:text;
          }

          .successTitle span:last-child{
            color:#52525B;
          }

          .statsGrid{
            display:grid;
            grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));
            gap:48px;
            text-align:center;
          }

          .statItem{
            padding:32px 24px;
            background:#f8f9fa;
            border-radius:16px;
            transition:0.22s;
          }

          .statItem:hover{
            transform:translateY(-4px);
            box-shadow:0px 10px 35px rgba(0,0,0,0.08);
          }

          .statNumber{
            font-size:clamp(2.5rem, 5vw, 3.5rem);
            font-weight:700;
            color:#199A6F;
            margin-bottom:16px;
            display:flex;
            align-items:center;
            justify-content:center;
            gap:4px;
            line-height:1;
          }

          .statTitle{
            font-size:16px;
            font-weight:600;
            color:#52525B;
            margin:0;
            line-height:1.4;
          }

          @media(max-width:991px){
            .statsGrid{
              grid-template-columns:repeat(2, 1fr);
              gap:32px;
            }

            .successTitle{
              font-size:42px;
            }
          }

          @media(max-width:600px){
            .successSection{
              padding:80px 15px;
            }

            .successTitle{
              font-size:34px;
            }

            .statsGrid{
              grid-template-columns:1fr;
              gap:24px;
            }

            .statItem{
              padding:24px 20px;
            }

            .statNumber{
              font-size:2.5rem;
              margin-bottom:12px;
            }
          }
        `}
      </style>

      <section className="successSection">
        <div className="successContainer">
          <div className="successHeader">
            <h2 className="successTitle">
              <span>Our Success in</span> <span>Numbers</span>
            </h2>
          </div>

          <div ref={ref} className="statsGrid">
            {stats.map((stat, index) => (
              <div key={index} className="statItem">
                <div className="statNumber">
                  {inView && (
                    <>
                      <CountUp
                        start={0}
                        end={stat.number}
                        duration={2.5}
                        separator=","
                      />
                      <span>{stat.suffix}</span>
                    </>
                  )}
                </div>
                <p className="statTitle">{stat.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SuccessNumber;
