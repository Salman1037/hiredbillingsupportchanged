import React from 'react';


import DentalHero from '../../components/Hire/Dental/DentalHero';
import IconsService from '../../components/Hire/iconsservice';
import Dentalteam from '../../components/Hire/Dental/Dentalteam';
import MedicalspecialtiesDental from '../../components/Hire/Dental/MedicalspecialtiesDental';
import Medicalcore from '../../components/Hire/Medicalcore';
import SuccessNumber from '../../components/Hire/successnumber';
import Ourcertification from '../../components/Ourcertification';
import DentalVA from '../../components/Hire/Dental/Dentalva';
import Faqdental from '../../components/Hire/Dental/Faqdental';
import HBSAgencies from '../../components/Hire/HBSAgencies';
import Emr from '../../components/Hire/Emr';
import CountUpStats from '../../components/CountUpStats';
import Difference from '../../components/difference';
import ClientReview from '../../components/client_review';
import Ctasection from '../../components/Hire/Ctasection';
import Dentalpractice from '../../components/Hire/Dental/Dentalpractice';



function Dental() {
  return (
    <>
      <DentalHero />
             <Ourcertification/>
      <CountUpStats/>
            <Dentalteam />
            {/* <MedicalspecialtiesDental /> */}
             <Dentalpractice />
             <DentalVA />
              <Medicalcore />
           
              
                
                 <HBSAgencies/>
                  <Difference/>
        <ClientReview/>
                <Faqdental/>
                <Ctasection/>
               
                
     
    </>
  );
}

export default Dental;
