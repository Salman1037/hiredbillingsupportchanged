
import CountUpStats from "../components/CountUpStats";
import Faq from "../components/Faq";
import Hero from "../components/Hero";
import HireService from "../components/Hireservicehbs";
import Medicaldesc from "../components/Medicaldesc";
import Ourcertification from "../components/Ourcertification";
import PricingDemoForm from "../components/PricingDemoForm";
// import SavingsCalculator from "../components/SavingsCalculator";
import Servicessec from "../components/Servicessec";
import WhyHireWithWorkdeskVA from "../components/WhyHire";
import Solution_Pillars from "../components/Solution_Pillars";
import LatestInsights from "../components/Latest_Insights";
import AllServices from "../components/AllServices";
import ProblemAndSolution from "../components/problemandsolution";
import SavingsCalculato from "../components/SavingsCalculato";
import Problemsolution from "../components/Problem_sec";
import AiSection from "../components/nowai";
import SolutionAndHowItWorks from "../components/howwork";
import HbsDifference from "../components/hbsdifference";
import ClientReview from "../components/client_review";
import ComplianceHbs from "../components/compliance_hbs";
import Difference from "../components/difference";


function Home() {
  return (
    <>
      <Hero />
      {/* <AllServices /> */}
      
      <CountUpStats/>
      <Ourcertification/>
       <ProblemAndSolution/>
      
      
     
      {/* <Medicaldesc/> */}
      {/* <Servicessec/> */}
      {/* <SavingsCalculator/> */}
      {/* <LatestInsights/> */}
      
        <Problemsolution/>
        <AiSection/>
        <SolutionAndHowItWorks/>
         <HireService/>
        <HbsDifference/>
      {/* <PricingDemoForm/> */}
     <SavingsCalculato/>
      <ComplianceHbs/>
     <Difference/>
 <ClientReview/>
      <Faq/>
     
      
      
      
    </>
  );
}
export default Home;
  
