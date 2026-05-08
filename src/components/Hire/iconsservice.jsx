import React from 'react';
import { BsShieldCheck, BsLaptop, BsLightningCharge } from 'react-icons/bs';
import { BiCalendarCheck } from 'react-icons/bi';
import { MdOutlineMedicalServices } from 'react-icons/md';

const IconsService = () => {
  const services = [
    {
      icon: <BsShieldCheck size={40} />,
      title: 'HIPAA-Compliant',
      description: 'VAs'
    },
    {
      icon: <BsLaptop size={40} />,
      title: 'EHR Ready',
      description: ''
    },
    {
      icon: <BsLightningCharge size={40} />,
      title: 'Same-Week',
      description: 'Onboarding'
    },
    {
      icon: <BiCalendarCheck size={40} />,
      title: 'Scheduling, Calls',
      description: '& Reminders'
    },
    {
      icon: <MdOutlineMedicalServices size={40} />,
      title: 'Live or Async',
      description: 'Scribing'
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

          .iconsServiceSection{
            width:100%;
            background:linear-gradient(135deg, #4D9BD6, #199A6F);
            padding:clamp(80px, 8vw, 100px) 0;
            marginTop:120px;
            font-family:'Inter', sans-serif;
          }

          .iconsServiceContainer{
            max-width:1280px;
            margin:auto;
            padding:0 24px;
          }

          .servicesGrid{
            display:grid;
            grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));
            gap:48px;
            text-align:center;
          }

          .serviceItem{
            display:flex;
            flex-direction:column;
            align-items:center;
          }

          .serviceIcon{
            width:80px;
            height:80px;
            border-radius:50%;
            background:#ffffff;
            display:flex;
            align-items:center;
            justify-content:center;
            box-shadow:0px 10px 35px rgba(0,0,0,0.08);
            margin-bottom:24px;
            transition:0.22s;
          }

          .serviceIcon:hover{
            transform:translateY(-4px);
          }

          .serviceIcon svg{
            color:#4D9BD6;
          }

          .serviceTitle{
            font-size:18px;
            font-weight:700;
            color:#ffffff;
            margin-bottom:8px;
            line-height:1.2;
          }

          .serviceDescription{
            font-size:16px;
            color:#ffffff;
            opacity:0.9;
            margin:0;
            line-height:1.4;
          }

          @media(max-width:991px){
            .servicesGrid{
              grid-template-columns:repeat(2, 1fr);
              gap:32px;
            }
          }

          @media(max-width:600px){
            .iconsServiceSection{
              padding:80px 15px;
            }

            .servicesGrid{
              grid-template-columns:1fr;
              gap:24px;
            }

            .serviceIcon{
              width:70px;
              height:70px;
              margin-bottom:20px;
            }

            .serviceIcon svg{
              width:32px;
              height:32px;
            }

            .serviceTitle{
              font-size:16px;
            }

            .serviceDescription{
              font-size:14px;
            }
          }
        `}
      </style>

      <section className="iconsServiceSection">
        <div className="iconsServiceContainer">
          <div className="servicesGrid">
            {services.map((service, index) => (
              <div key={index} className="serviceItem">
                <div className="serviceIcon">
                  {React.cloneElement(service.icon, { color: '#4D9BD6' })}
                </div>
                <h3 className="serviceTitle">{service.title}</h3>
                {service.description && (
                  <p className="serviceDescription">{service.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default IconsService;
