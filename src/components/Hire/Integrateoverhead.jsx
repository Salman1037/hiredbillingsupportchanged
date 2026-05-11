import React from "react";

const steps = [
  {
    number: "1",
    title: "Practice Assessment",
    description:
      "We audit your current workflows, identify bottlenecks, and analyze your current denial rates and AR metrics.",
  },
  {
    number: "2",
    title: "Team Onboarding",
    description:
      "Dedicated team trained on your EHR, systems, and workflows. Integration with your practice management system.",
  },
  {
    number: "3",
    title: "Integration & Launch",
    description:
      "Seamless integration with your systems. Daily check-ins. Real-time problem-solving. You see immediate improvements.",
  },
  {
    number: "4",
    title: "Continuous Optimization",
    description:
      "Proactive improvements, denial reduction, revenue optimization. Scaling as your practice grows.",
  },
];

const IntegrateOverhead = () => {
  return (
    <section className="integrateOverheadSection">
      <style>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          .integrateOverheadSection {
            width: 100%;
            background: #ffffff;
            padding: clamp(80px, 8vw, 100px) 0;
            marginTop: 120px;
            font-family: var(--bs-body-font-family);
          }

          .integrateOverheadContainer {
            max-width: 1280px;
            margin: 0 auto;
            padding: 0 24px;
          }

          .integrateHeadingWrapper {
            max-width: 900px;
            margin: 0 auto;
            text-align: center;
          }

          .integrateHeading {
            font-size: clamp(2.4rem, 4.5vw, 4rem);
            line-height: 1.02;
            font-weight: 900;
            color: #0f3b70;
            margin-bottom: 14px;
          }

          .integrateSubtitle {
            font-size: 16px;
            line-height: 1.8;
            color: #52525b;
            max-width: 680px;
            margin: 0 auto;
          }

          .stepsWrapper {
            position: relative;
            margin-top: 56px;
          }

          .stepsLine {
            position: absolute;
            top: 42px;
            left: 5.5%;
            right: 5.5%;
            height: 2px;
            background: rgba(0, 124, 119, 0.12);
            z-index: 1;
          }

          .stepsGrid {
            position: relative;
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 28px;
            z-index: 2;
            align-items: start;
          }

          .stepCard {
            position: relative;
            background: #ffffff;
            border: 1px solid rgba(15, 59, 112, 0.08);
            border-radius: 24px;
            padding: 32px 28px 32px;
            min-height: 320px;
            box-shadow: 0 20px 45px rgba(15, 23, 42, 0.06);
            transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
          }

          .stepCard:hover {
            transform: translateY(-6px);
            box-shadow: 0 16px 36px rgba(25, 154, 111, 0.14);
            border-color: #199a6f;
          }

          .stepCircle {
            position: absolute;
            top: -20px;
            left: 50%;
            transform: translateX(-50%);
            width: 46px;
            height: 46px;
            border-radius: 50%;
            background: #ffffff;
            border: 3px solid #19a26f;
            display: grid;
            place-items: center;
            font-size: 1rem;
            font-weight: 900;
            color: #19a26f;
            box-shadow: 0 12px 28px rgba(25, 154, 111, 0.14);
          }

          .stepTitle {
            margin-top: 34px;
            margin-bottom: 12px;
            font-size: 1rem;
            line-height: 1.35;
            font-weight: 700;
            color: #0f3b70;
          }

          .stepDescription {
            font-size: 15px;
            line-height: 1.8;
            color: #52525b;
          }

          @media (max-width: 1120px) {
            .stepsGrid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
          }

          @media (max-width: 760px) {
            .integrateOverheadSection {
              padding: 48px 0;
            }

            .integrateHeading {
              font-size: 2.4rem;
            }

            .stepsLine {
              left: 10%;
              right: 10%;
            }

            .stepsGrid {
              grid-template-columns: 1fr;
            }

            .stepCard {
              min-height: auto;
              padding: 30px 22px 26px;
            }

            .stepCircle {
              top: -14px;
            }
          }
        `}
      </style>
      <div className="integrateOverheadContainer">
        <div className="integrateHeadingWrapper">
          

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
                 We integrate as your in-house team,&nbsp;
              </span>

              <span
                style={{
                  background: ' #1abc9c',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                without the overhead
              </span>
            </h2>
          <p className="integrateSubtitle">
            Not a separate vendor. An extension of your practice.
          </p>
        </div>

        <div className="stepsWrapper">
          <div className="stepsLine" />
          <div className="stepsGrid">
            {steps.map((step) => (
              <div key={step.number} className="stepCard">
                <div className="stepCircle">{step.number}</div>
                <h3 className="stepTitle">{step.title}</h3>
                <p className="stepDescription">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrateOverhead;
