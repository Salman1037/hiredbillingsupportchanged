import React, { useState } from 'react';

const Faq = () => {
  const [activeKey, setActiveKey] = useState(null);

  const faqData = [
    {
      question: "What does a Medical VA handle?",
      answer: "Our Medical VAs handle various tasks including appointment scheduling, patient communication, medical records management, insurance verification, and basic billing support. They are trained in healthcare protocols and HIPAA compliance."
    },
    {
      question: "Do you sign a BAA and follow HIPAA?",
      answer: "Yes, we sign Business Associate Agreements (BAA) and strictly follow HIPAA guidelines. Our team is trained in patient privacy and data security protocols to ensure compliance with all healthcare regulations."
    },
    {
      question: "Which EHRs do you support?",
      answer: "We support major EHR systems including Epic, Cerner, Allscripts, eClinicalWorks, NextGen, and many others. Our VAs are trained to adapt to your specific EHR system and workflows."
    },
    {
      question: "How fast can we start?",
      answer: "We can typically begin within 1-2 weeks of signing the agreement. This includes BAA signing, EHR access setup, and initial training on your specific workflows."
    },
    {
      question: "Can your VAs make and receive patient calls?",
      answer: "Yes, our VAs are trained to handle both inbound and outbound patient calls professionally. They manage appointment scheduling, reminders, and basic patient inquiries with a focus on patient satisfaction."
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

          .faqSection{
            width:100%;
            background:#f5f5f5;
            padding:clamp(80px, 8vw, 100px) 0;
            marginTop:120px;
            font-family: var(--bs-body-font-family);
          }

          .faqContainer{
            max-width:1280px;
            margin:auto;
            padding:0 24px;
          }

          .faqHeader{
            text-align:center;
            margin-bottom:48px;
          }

          .faqTitle{
            font-size:clamp(2.2rem, 4vw, 3.2rem);
            line-height:1.02;
            font-weight:900;
            color:#4D9BD6;
            letter-spacing:-0.08em;
            max-width:900px;
            margin:auto;
            margin-bottom:22px;
          }

          .faqDescription{
            max-width:560px;
            margin:22px auto 0;
            text-align:center;
            font-size:16px;
            line-height:1.6;
            color:#52525B;
          }

          .faqAccordion{
            max-width:800px;
            margin:0 auto;
          }

          .faqItem{
            border:1px solid #e5e5e5;
            border-radius:12px;
            margin-bottom:16px;
            overflow:hidden;
          }

          .faqHeaderBtn{
            width:100%;
            background:none;
            border:none;
            padding:24px 32px;
            text-align:left;
            cursor:pointer;
            display:flex;
            align-items:center;
            justify-content:space-between;
            font-family: var(--bs-body-font-family);
            transition:0.22s;
          }

          .faqHeaderBtn:hover{
            background:#f8f8f8;
          }

          .faqQuestion{
            font-size:16px;
            font-weight:600;
            color:#4D9BD6;
            line-height:1.4;
          }

          .faqIcon{
            width:24px;
            height:24px;
            border-radius:50%;
            background:#199A6F;
            color:#ffffff;
            display:flex;
            align-items:center;
            justify-content:center;
            font-size:12px;
            font-weight:700;
            transition:0.22s;
          }

          .faqItem.active .faqIcon{
            background:#4D9BD6;
            transform:rotate(45deg);
          }

          .faqBody{
            padding:0 32px 24px;
            display:none;
          }

          .faqItem.active .faqBody{
            display:block;
          }

          .faqAnswer{
            font-size:15px;
            line-height:30px;
            color:#52525B;
            margin:0;
          }

          @media(max-width:991px){
            .faqTitle{
              font-size:42px;
            }
          }

          @media(max-width:600px){
            .faqSection{
              padding:80px 15px;
            }

            .faqTitle{
              font-size:34px;
            }

            .faqDescription{
              font-size:15px;
              line-height:28px;
            }

            .faqHeaderBtn{
              padding:20px 24px;
            }

            .faqBody{
              padding:0 24px 20px;
            }
          }
        `}
      </style>

      <section className="faqSection">
        <div className="faqContainer">
          <div className="faqHeader">
            <h2 className="faqTitle">Frequently Asked Questions</h2>
            <p className="faqDescription">
              Get answers to common questions about our medical virtual assistant services and how we can help your practice.
            </p>
          </div>

          <div className="faqAccordion">
            {faqData.map((faq, index) => (
              <div 
                key={index} 
                className={`faqItem ${activeKey === index ? 'active' : ''}`}
              >
                <button
                  className="faqHeaderBtn"
                  onClick={() => setActiveKey(activeKey === index ? null : index)}
                >
                  <span className="faqQuestion">{faq.question}</span>
                  <span className="faqIcon">+</span>
                </button>
                <div className="faqBody">
                  <p className="faqAnswer">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
