import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import specialty icons
import neurology from '../../assets/images/case/brain.png';
import cardiology from '../../assets/images/case/heart.png';
import dental from '../../assets/images/case/dental.png';
import dermatology from '../../assets/images/case/Dermatology.png';
import gastro from '../../assets/images/case/Gastro.png';
import general from '../../assets/images/case/General.png';
import hand from '../../assets/images/case/Hand.png';
import healthcare from '../../assets/images/case/healthcare.png';
import hospital from '../../assets/images/case/hospital.png';
import infectious from '../../assets/images/case/Infectious.png';
import internal from '../../assets/images/case/Internal.png';
import medical from '../../assets/images/case/medical.png';
import nephrology from '../../assets/images/case/Nephrology.png';
import psychology from '../../assets/images/case/psychology.png';
import virus from '../../assets/images/case/virus.png';

const Medicalspecialties = () => {
  const specialties = [
    { icon: neurology, name: 'Neurology' },
    { icon: cardiology, name: 'Cardiology' },
    { icon: dental, name: 'Dental' },
    { icon: dermatology, name: 'Dermatology' },
    { icon: gastro, name: 'Gastroenterology' },
    { icon: general, name: 'General Medicine' },
    { icon: hand, name: 'Hand Surgery' },
    { icon: healthcare, name: 'Healthcare' },
    { icon: hospital, name: 'Hospital Care' },
    { icon: infectious, name: 'Infectious Disease' },
    { icon: internal, name: 'Internal Medicine' },
    { icon: medical, name: 'Medical Care' },
    { icon: nephrology, name: 'Nephrology' },
    { icon: psychology, name: 'Psychology' },
    { icon: virus, name: 'Immunology' }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2
        }
      }
    ]
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

          .specialtiesSection{
            width:100%;
            background:linear-gradient(135deg, #4D9BD6, #199A6F);
            padding:clamp(80px, 8vw, 100px) 0;
            marginTop:120px;
            font-family:'Inter', sans-serif;
            position:relative;
            overflow:hidden;
          }

          .specialtiesContainer{
            max-width:1280px;
            margin:auto;
            padding:0 24px;
          }

          .specialtiesHeader{
            text-align:center;
            margin-bottom:64px;
          }

          .specialtiesTitle{
            font-size:clamp(2.6rem, 5.8vw, 4.4rem);
            line-height:1.02;
            font-weight:900;
            color:#ffffff;
            letter-spacing:-0.08em;
            max-width:900px;
            margin:auto;
            margin-bottom:22px;
          }

          .specialtiesDivider{
            width:80px;
            height:4px;
            background:#ffffff;
            margin:auto;
            margin-bottom:24px;
          }

          .specialtiesDescription{
            font-size:18px;
            color:#ffffff;
            opacity:0.9;
            line-height:1.6;
            margin-bottom:64px;
          }

          .specialtyItem{
            padding:0 12px;
            text-align:center;
          }

          .specialtyIcon{
            width:90px;
            height:90px;
            border-radius:50%;
            background:#ffffff;
            display:flex;
            align-items:center;
            justify-content:center;
            margin:auto;
            margin-bottom:15px;
            transition:0.3s;
            box-shadow:0px 4px 15px rgba(0,0,0,0.1);
          }

          .specialtyIcon:hover{
            transform:translateY(-5px);
            box-shadow:0px 8px 20px rgba(0,0,0,0.15);
          }

          .specialtyIcon img{
            width:45px;
            height:45px;
            filter:invert(46%) sepia(83%) saturate(1265%) hue-rotate(165deg) brightness(96%) contrast(101%);
          }

          .specialtyName{
            font-size:16px;
            font-weight:500;
            color:#ffffff;
            margin:0;
          }

          .specialtiesButtonContainer{
            text-align:center;
            margin-top:48px;
          }

          .specialtiesButton{
            background:#199A6F;
            color:#ffffff;
            border:none;
            padding:12px 24px;
            border-radius:50px;
            font-size:16px;
            font-weight:600;
            cursor:pointer;
            display:inline-flex;
            align-items:center;
            gap:8px;
            transition:0.22s;
            box-shadow:0px 4px 16px rgba(25,154,111,0.3);
          }

          .specialtiesButton:hover{
            background:#17A85F;
            transform:translateY(-2px);
            box-shadow:0px 8px 24px rgba(25,154,111,0.4);
          }

          @media(max-width:991px){
            .specialtiesTitle{
              font-size:42px;
            }
          }

          @media(max-width:600px){
            .specialtiesSection{
              padding:80px 15px;
            }

            .specialtiesTitle{
              font-size:34px;
            }

            .specialtiesDescription{
              font-size:16px;
              margin-bottom:40px;
            }

            .specialtyIcon{
              width:70px;
              height:70px;
              margin-bottom:12px;
            }

            .specialtyIcon img{
              width:35px;
              height:35px;
            }

            .specialtyName{
              font-size:14px;
            }
          }
        `}
      </style>

      <section className="specialtiesSection">
        <div className="specialtiesContainer">
          <div className="specialtiesHeader">
            <h2 className="specialtiesTitle">Medical Specialties We Support</h2>
            <div className="specialtiesDivider"></div>
            <p className="specialtiesDescription">
              Trained VAs familiar with your workflows and terminology.
            </p>
          </div>

          <Slider {...settings}>
            {specialties.map((specialty, index) => (
              <div key={index} className="specialtyItem">
                <div className="specialtyIcon">
                  <img src={specialty.icon} alt={specialty.name} />
                </div>
                <h6 className="specialtyName">{specialty.name}</h6>
              </div>
            ))}
          </Slider>

          <div className="specialtiesButtonContainer">
            <button className="specialtiesButton">
              Schedule Free Demo <span>→</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Medicalspecialties;
