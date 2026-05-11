import BacklogSection from "../../components/Hire/insurance/BacklogSection";
import HeroBanner from "../../components/Hire/insurance/HeroInsurance";
import InsuranceFeaturesSection from "../../components/Hire/insurance/InsuranceFeaturesSection";
import InsuranceVAServices from "../../components/Hire/insurance/InsuranceVAServices";
import InsuranceOpsSolutions from "../../components/Hire/insurance/InsuranceOpsSolutions";
import Insurancefaq from "../../components/Hire/insurance/Insurancefaq";
import Ourcertification from "../../components/Ourcertification";
import CountUpStats from "../../components/CountUpStats";
import Insuranceproblem from "../../components/Hire/insurance/insuranceproblem";
import Problemsolution from "../../components/Hire/insurance/problumsolution";
import InsuranceTeam from "../../components/Hire/insurance/insuranceteam";
import Difference from "../../components/difference";
import BehavioralHealthSection from "../../components/Hire/insurance/BehavioralHealthSection";
import Ctasection from '../../components/Hire/Ctasection';


function insurance() {
  return (
    <>
    <HeroBanner />
    <Ourcertification />
    <CountUpStats />
    <Insuranceproblem />
    <Problemsolution />
    <BacklogSection />
    <InsuranceTeam />
    <BehavioralHealthSection />
    
    <InsuranceFeaturesSection />
    <Ctasection/>
  
     
    </>
  );
}

export default insurance;
