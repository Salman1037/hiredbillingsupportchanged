import React, { useState, useLayoutEffect, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import { MdCheckCircle } from "react-icons/md";
import { IoArrowBack } from "react-icons/io5";

const RoleDetail = () => {
  const { roleSlug } = useParams();
  const [headerPad, setHeaderPad] = useState(120);

  const roleDetailsData = {
    "medical-scribe": {
      title: "Medical Scribe",
      industry: "Medical",
      description: "Documents clinical encounters in real time while reducing physician administrative burden.",
      fullContent: "Medical scribes deliver fast, accurate clinical documentation so providers can stay focused on patient care. HBS remote scribes are trained to capture encounters precisely, support EMR workflows, and preserve HIPAA compliance.",
    },
    "medical-scheduling-coordinator": {
      title: "Medical Scheduling Coordinator",
      industry: "Medical",
      description: "Manages appointments, reminders, and calendars to keep your practice fully booked and running smoothly.",
      fullContent: "A remote medical scheduling coordinator keeps your clinical schedule optimized and your patient flow consistent. HBS coordinators help reduce no-shows, improve provider utilization, and keep administrative work off your desk.",
    },
    "medical-insurance-coordinator": {
      title: "Medical Insurance Coordinator",
      industry: "Medical",
      description: "Handles eligibility checks, pre-authorizations, and claims coordination for efficient insurance workflows.",
      fullContent: "Our remote medical insurance coordinators keep payer requirements in check and clear the way for faster reimbursements. They manage verification, authorizations, and insurance follow-up so your clinical team can focus on care.",
    },
    "medical-billing-coordinator": {
      title: "Medical Billing Coordinator",
      industry: "Medical",
      description: "Processes claims, monitors payments, and manages denials to keep revenue flowing smoothly.",
      fullContent: "HBS remote billing coordinators ensure claims are submitted accurately and payments are posted timely. They reduce billing bottlenecks while maintaining audit-ready processes and high revenue integrity.",
    },
    "patient-care-coordinator": {
      title: "Patient Care Coordinator",
      industry: "Medical",
      description: "Coordinates intake, referrals, and follow-up so patients experience seamless care journeys.",
      fullContent: "Patient care coordinators improve communication, care continuity, and patient satisfaction. HBS coordinators handle intake, referrals, follow-ups, and coordination across your care team.",
    },
    "dental-receptionist": {
      title: "Dental Receptionist",
      industry: "Dental",
      description: "Manages patient communication, scheduling, and front desk operations for a polished patient experience.",
      fullContent: "Our remote dental receptionists help practices reduce wait times, improve patient service, and keep appointment flow strong. They handle scheduling, patient intake, and front desk tasks with professionalism.",
    },
    "dental-insurance-coordinator": {
      title: "Dental Insurance Coordinator",
      industry: "Dental",
      description: "Verifies dental benefits and manages claims so clinical teams spend less time on paperwork.",
      fullContent: "HBS dental insurance coordinators handle verification, claims submission, and payer communication for faster reimbursement. They keep insurance workflows moving and support smooth patient billing.",
    },
    "dental-treatment-coordinator": {
      title: "Dental Treatment Coordinator",
      industry: "Dental",
      description: "Supports treatment plan communication, scheduling, and financing coordination for better case acceptance.",
      fullContent: "Remote dental treatment coordinators make it easy for patients to understand care plans and financing. HBS coordinators improve case presentation, scheduling, and patient follow-through.",
    },
    "dental-billing-specialist": {
      title: "Dental Billing Specialist",
      industry: "Dental",
      description: "Tracks claims, payments, and outstanding balances to protect your dental practice revenue.",
      fullContent: "Dental billing specialists keep your practice financially healthy by managing claims, payment posting, and AR follow-up. HBS specialists reduce write-offs and improve revenue cycle performance.",
    },
    "claims-specialist": {
      title: "Claims Specialist",
      industry: "Insurance",
      description: "Processes claims accurately while ensuring policy compliance and faster resolution.",
      fullContent: "Remote claims specialists manage claims review, submission, and insurance follow-up so your team avoids denials and delays. HBS experts help improve claims accuracy and approval rates.",
    },
    "insurance-verification-coordinator": {
      title: "Insurance Verification Coordinator",
      industry: "Insurance",
      description: "Checks eligibility and coverage so services are authorized and claims are ready to submit.",
      fullContent: "Verification coordinators confirm payer coverage and eligibility details before appointments. HBS professionals prevent surprises and keep your revenue cycle moving.",
    },
    "policy-support-assistant": {
      title: "Policy Support Assistant",
      industry: "Insurance",
      description: "Provides policy updates, renewals, and member support to keep customers satisfied.",
      fullContent: "HBS policy support assistants handle policy questions, renewals, and updates with precision. They help maintain strong customer relationships and reduce support burden.",
    },
    "insurance-billing-coordinator": {
      title: "Insurance Billing Coordinator",
      industry: "Insurance",
      description: "Manages invoicing, collections, and billing workflows to improve claims cash flow.",
      fullContent: "Remote insurance billing coordinators keep accounts receivable under control and claims workflows efficient. HBS staff support faster payments and accurate billing management.",
    }
  };

  const roleData = roleDetailsData[roleSlug];
  const industryLabel = roleData?.industry || "Healthcare";

  const heroHeading = roleData
    ? `Remote ${roleData.title}s to Streamline ${industryLabel === "Medical" ? "Clinical" : industryLabel === "Dental" ? "Dental" : "Insurance"} Operations`
    : "Remote Healthcare Talent";

  const heroSubline = roleData
    ? roleData.description
    : "Access vetted remote professionals who reduce administrative work and improve practice efficiency.";

  const whatDoesCards = [
    { title: "Live Documentation", description: "Capture patient encounters accurately as they happen." },
    { title: "Seamless Workflow Support", description: "Keep your team moving by managing back-office tasks efficiently." },
    { title: "Procedure Recording", description: "Document clinical and administrative processes with precision." },
    { title: "Accurate Data Entry", description: "Input patient and billing data cleanly into your systems." },
    { title: "Focused Care Notes", description: "Keep notes structured so providers can focus on care, not charts." },
    { title: "Patient Privacy First", description: "Maintain secure patient records with HIPAA-compliant workflows." },
    { title: "Insurance Coordination", description: "Manage eligibility, authorizations, and claim preparation." },
    { title: "Dedicated Billing Support", description: "Support claim tracking, denials, and payment follow-up." },
    { title: "Practice Optimization", description: "Improve utilization and reduce administrative overhead." }
  ];

  const statsCards = [
    { value: "1,000+", label: "Clients supported across practices" },
    { value: "50M", label: "Claims managed in staffing cycles" },
    { value: "500+", label: "Practices matched with remote talent" }
  ];

  

  const whyHireCards = [
    { title: "Top-Tier Talent", description: "Access specialists with healthcare experience and strong compliance training." },
    { title: "Risk-Free Hiring", description: "No payment until you hire, plus BAA protection before the engagement begins." },
    { title: "Payroll & Benefits", description: "We handle payroll, benefits administration, and contractor compliance." },
    { title: "Pre-Vetted & Trained", description: "Remote hires are trained in EMR, billing, insurance, and patient privacy." },
    { title: "Compliance You Trust", description: "HBS staff operate under HIPAA, SOC 2, and ISO-grade security standards." },
    { title: "Cost-Effective Hiring", description: "Hire remote specialists at lower cost than in-house staff, with quick time to match." }
  ];

  const testimonials = [
    { quote: "Our remote team reduced admin overload by 60% while improving claim accuracy.", author: "Dr. Noreen Ali", role: "Medical Practice Owner" },
    { quote: "HBS helped us get faster authorizations and keep our front desk lean.", author: "Practice Owner", role: "Dental Clinic" },
    { quote: "The onboarding was smooth and our remote coordinator was working within 7 days.", author: "Agency Owner", role: "Insurance Provider" }
  ];

  const talentCards = [
    { name: "Dr. Shahid", title: "Medical Coordinator" },
    { name: "Emilia Pavia", title: "Billing Specialist" },
    { name: "Fatima Lucia", title: "Patient Care Lead" }
  ];

  const imageUrls = {
    Medical: {
      remote: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=600",
      privacy: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600"
    },
    Dental: {
      remote: "https://images.unsplash.com/photo-1576085898321-1ab3c3a16b13?w=600",
      privacy: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600"
    },
    Insurance: {
      remote: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600",
      privacy: "https://images.unsplash.com/photo-1522199670076-2852f80289c8?w=600"
    }
  };

  useLayoutEffect(() => {
    function updatePad() {
      const header = document.querySelector("header");
      if (header) {
        setHeaderPad(header.offsetHeight + 50);
      }
    }
    updatePad();
    window.addEventListener("resize", updatePad);
    return () => window.removeEventListener("resize", updatePad);
  }, []);

  if (!roleData) {
    return (
      <>
        <Helmet>
          <title>Role Not Found - HBS</title>
          <meta name="description" content="The requested role was not found." />
        </Helmet>
        <div style={{ padding: "100px 20px", textAlign: "center" }}>
          <h1>Role Not Found</h1>
          <p>The role you&apos;re looking for doesn&apos;t exist.</p>
          <Link to="/hire" className="backButton">
            <IoArrowBack size={20} /> Back to Browse Roles
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{roleData.title} - HBS Hiring</title>
        <meta name="description" content={roleData.fullContent} />
      </Helmet>

      <style>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          .roleDetailContainer {
            max-width: 1280px;
            margin: 0 auto;
            padding: 0 24px;
          }

          .backButton {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 10px 18px;
            margin: 30px 0 20px;
            background: #f8fafc;
            border: 1px solid #d1d5db;
            border-radius: 999px;
            color: #0f172a;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.22s ease;
          }

          .backButton:hover {
            background: #199A6F;
            color: #fff;
            border-color: #199A6F;
          }

          .heroSection {
            padding: ${headerPad + 44}px 0 80px;
            background: linear-gradient(180deg, #00B4D8 0%, #00F5A0 100%);
            color: #ffffff;
            position: relative;
            overflow: hidden;
          }

          .heroSection .roleDetailContainer {
            text-align: center;
          }

          .heroTopBadge {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            padding: 10px 20px;
            margin: 0 auto 32px;
            border: 1px solid rgba(255, 255, 255, 0.28);
            background: rgba(255, 255, 255, 0.14);
            border-radius: 999px;
            font-size: 12px;
            letter-spacing: 0.16em;
            text-transform: uppercase;
            color: #ffffff;
            max-width: fit-content;
          }

          .heroHeading {
            font-size: clamp(2.8rem, 4vw, 4.4rem);
            line-height: 1.02;
            font-weight: 800;
            max-width: 900px;
            margin: 0 auto 24px;
            text-align: center;
            letter-spacing: -0.04em;
            color: #ffffff;
          }

          .heroText {
            max-width: 720px;
            margin: 0 auto 40px;
            text-align: center;
            font-size: 1.05rem;
            line-height: 1.85;
            color: rgba(255, 255, 255, 0.92);
          }

          .heroActions {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 18px;
            flex-wrap: wrap;
            margin-bottom: 38px;
          }

          .heroButton {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 15px 34px;
            border-radius: 999px;
            font-size: 1rem;
            font-weight: 700;
            text-decoration: none;
            transition: transform 0.22s ease, box-shadow 0.22s ease, background 0.22s ease;
          }

          .heroButtonPrimary {
            background: #4D9BD6;
            color: #ffffff;
            box-shadow: 0 14px 30px rgba(77, 155, 214, 0.22);
          }

          .heroButtonPrimary:hover {
            transform: translateY(-2px);
            box-shadow: 0 18px 38px rgba(77, 155, 214, 0.24);
          }

          .heroButtonSecondary {
            background: #ffffff;
            color: #0F172A;
            border: 1px solid rgba(15, 23, 42, 0.08);
          }

          .heroButtonSecondary:hover {
            transform: translateY(-2px);
            box-shadow: 0 14px 28px rgba(0, 0, 0, 0.12);
          }

          .heroFeatures {
            display: inline-flex;
            gap: 20px;
            flex-wrap: wrap;
            justify-content: center;
            margin: 0 auto;
            padding: 18px 26px;
            background: rgba(255, 255, 255, 0.12);
            border-radius: 999px;
            border: 1px solid rgba(255, 255, 255, 0.24);
            max-width: 100%;
          }

          .heroFeatureItem {
            display: flex;
            align-items: center;
            gap: 10px;
            color: #ffffff;
            font-size: 0.95rem;
          }

          .heroFeatureItem span {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.22);
            color: #ffffff;
            font-size: 0.95rem;
            font-weight: 700;
          }

          .sectionBlock {
            padding: 80px 0;
          }

          .sectionHeader {
            text-align: center;
            margin-bottom: 48px;
          }

          .sectionLabel {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 10px 18px;
            border-radius: 999px;
            background: #E0F7EF;
            color: #199A6F;
            font-size: 0.85rem;
            letter-spacing: 0.1em;
            margin-bottom: 20px;
            text-transform: uppercase;
          }

          .sectionTitle {
            font-size: clamp(2rem, 3vw, 3rem);
            color: #002856;
            font-weight: 800;
            line-height: 1.1;
            margin-bottom: 16px;
          }

          .sectionCopy {
            max-width: 760px;
            margin: 0 auto;
            color: #475569;
            font-size: 1rem;
            line-height: 1.85;
          }

          .gridCards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 20px;
            margin-top: 40px;
          }

          .gridCard {
            background: #fff;
            border: 1px solid #e5e7eb;
            border-radius: 24px;
            padding: 28px;
            min-height: 180px;
            box-shadow: 0 10px 30px rgba(15, 23, 42, 0.04);
            transition: transform 0.22s ease, border-color 0.22s ease;
          }

          .gridCard:hover {
            transform: translateY(-4px);
            border-color: #199A6F;
          }

          .gridCardIcon {
            width: 44px;
            height: 44px;
            border-radius: 14px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background: #E0F7EF;
            color: #199A6F;
            margin-bottom: 18px;
          }

          .gridCardTitle {
            font-size: 1.05rem;
            font-weight: 700;
            color: #002856;
            margin-bottom: 12px;
          }

          .gridCardText {
            font-size: 0.96rem;
            color: #475569;
            line-height: 1.7;
          }

          .statsGrid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
            gap: 18px;
            margin-top: 48px;
          }

          .statCard {
            background: #fff;
            padding: 28px;
            border-radius: 24px;
            border: 1px solid #e5e7eb;
            text-align: center;
            box-shadow: 0 10px 30px rgba(15, 23, 42, 0.04);
            transition: transform 0.22s ease, border-color 0.22s ease;
          }

          .statCard:hover {
            transform: translateY(-4px);
            border-color: #199A6F;
          }

          .statValue {
            font-size: 2.4rem;
            color: #199A6F;
            font-weight: 800;
            margin-bottom: 12px;
          }

          .statLabel {
            color: #475569;
            font-size: 0.95rem;
            line-height: 1.7;
          }

          .brandRow {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            gap: 28px;
            margin-top: 44px;
          }

          .brandLogo {
            color: #475569;
            font-size: 0.95rem;
            font-weight: 700;
            opacity: 0.74;
          }

          .featureSplit {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 36px;
            align-items: center;
          }

          .featureText h3 {
            font-size: 2rem;
            color: #002856;
            margin-bottom: 18px;
            line-height: 1.1;
          }

          .featureText p {
            color: #475569;
            line-height: 1.8;
          }

          .featureBlock {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 18px;
            margin-top: 32px;
          }

          .featureBox {
            background: #fff;
            border: 1px solid #e5e7eb;
            border-radius: 18px;
            padding: 20px;
            box-shadow: 0 10px 30px rgba(15, 23, 42, 0.04);
            transition: transform 0.22s ease, border-color 0.22s ease;
          }

          .featureBox:hover {
            transform: translateY(-4px);
            border-color: #199A6F;
          }

          .featureBoxTitle {
            font-size: 1rem;
            color: #002856;
            font-weight: 700;
            margin-bottom: 10px;
          }

          .featureBoxText {
            color: #475569;
            font-size: 0.95rem;
            line-height: 1.75;
          }

          .featureImage {
            width: 100%;
            height: 360px;
            border-radius: 24px;
            object-fit: cover;
          }

          .whyHireGrid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 18px;
            margin-top: 40px;
          }

          .whyHireCard {
            background: #fff;
            border: 1px solid #e5e7eb;
            border-radius: 22px;
            padding: 24px;
            min-height: 170px;
            box-shadow: 0 10px 30px rgba(15, 23, 42, 0.04);
            transition: transform 0.22s ease, border-color 0.22s ease;
          }

          .whyHireCard:hover {
            transform: translateY(-4px);
            border-color: #199A6F;
          }

          .whyHireCardTitle {
            color: #002856;
            font-size: 1rem;
            font-weight: 700;
            margin-bottom: 12px;
          }

          .whyHireCardText {
            color: #475569;
            line-height: 1.75;
            font-size: 0.95rem;
          }

          .whyHireFooter {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 16px;
            margin-top: 32px;
            flex-wrap: wrap;
          }

          .testimonialsGrid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
          }

          .testimonialCard {
            background: #fff;
            border: 1px solid #e5e7eb;
            border-radius: 24px;
            padding: 28px;
            min-height: 210px;
            box-shadow: 0 10px 30px rgba(15, 23, 42, 0.04);
            transition: transform 0.22s ease, border-color 0.22s ease;
          }

          .testimonialCard:hover {
            transform: translateY(-4px);
            border-color: #199A6F;
          }

          .testimonialQuote {
            color: #475569;
            font-size: 1rem;
            line-height: 1.8;
            margin-bottom: 20px;
          }

          .testimonialAuthor {
            color: #002856;
            font-weight: 700;
            font-size: 0.98rem;
          }

          .testimonialRole {
            color: #475569;
            font-size: 0.9rem;
          }

          .talentGrid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 20px;
            margin-top: 40px;
          }

          .talentCard {
            background: #fff;
            border: 1px solid #e5e7eb;
            border-radius: 24px;
            padding: 24px;
            text-align: center;
            box-shadow: 0 10px 30px rgba(15, 23, 42, 0.04);
            transition: transform 0.22s ease, border-color 0.22s ease;
          }

          .talentCard:hover {
            transform: translateY(-4px);
            border-color: #199A6F;
          }

          .talentAvatar {
            width: 90px;
            height: 90px;
            margin: 0 auto 18px;
            border-radius: 20px;
            background: #E0F7EF;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #199A6F;
            font-size: 1.55rem;
            font-weight: 800;
          }

          .talentName {
            color: #002856;
            font-size: 1.05rem;
            font-weight: 700;
            margin-bottom: 8px;
          }

          .talentTitle {
            color: #475569;
            font-size: 0.95rem;
          }

          .bottomCta {
            background: linear-gradient(180deg, #00B4D8 0%, #00F5A0 100%);
            color: #fff;
            border-radius: 32px;
            padding: 60px 28px;
            margin-top: 60px;
            text-align: center;
          }

          .bottomCta h2 {
            font-size: clamp(2rem, 4vw, 3.2rem);
            margin-bottom: 18px;
          }

          .bottomCta p {
            color: rgba(255, 255, 255, 0.88);
            font-size: 1rem;
            margin-bottom: 30px;
            line-height: 1.8;
          }

          .bottomCtaButton {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 16px 38px;
            background: #4D9BD6;
            color: #fff;
            border-radius: 999px;
            font-size: 1rem;
            font-weight: 700;
            text-decoration: none;
            transition: transform 0.22s ease;
          }

          .bottomCtaButton:hover {
            transform: translateY(-2px);
          }

          @media (max-width: 960px) {
            .featureSplit,
            .detailsGrid {
              grid-template-columns: 1fr;
            }
          }

          @media (max-width: 768px) {
            .heroSection {
              padding: ${headerPad + 20}px 0 48px;
            }

            .heroHeading {
              font-size: clamp(2rem, 5vw, 2.7rem);
            }

            .heroFeatures {
              gap: 12px;
            }

            .heroFeatureItem {
              font-size: 0.9rem;
            }

            .gridCards,
            .statsGrid,
            .testimonialsGrid,
            .talentGrid {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>

      <div className="roleDetailContainer">
        <Link to="/hire" className="backButton">
          <IoArrowBack size={18} /> Back to All Roles
        </Link>
      </div>

      <section className="heroSection">
        <div className="roleDetailContainer">
          <div className="heroTopBadge">Excellent on Trustpilot</div>
          <h1 className="heroHeading">{heroHeading}</h1>
          <p className="heroText">{heroSubline}</p>

          <div className="heroActions">
            <a href="/contact" className="heroButton heroButtonPrimary">
              Hire Now ?
            </a>
            <a href="/pricing" className="heroButton heroButtonSecondary">
              Explore Pricing
            </a>
          </div>

          <div className="heroFeatures">
            <div className="heroFeatureItem">
              <span>?</span> No payment until you hire
            </div>
            <div className="heroFeatureItem">
              <span>?</span> BAA signed before you hire
            </div>
            <div className="heroFeatureItem">
              <span>?</span> HIPAA & SOC 2 compliant
            </div>
            <div className="heroFeatureItem">
              <span>?</span> Matched in 7 days
            </div>
          </div>
        </div>
      </section>

      <section className="sectionBlock">
        <div className="roleDetailContainer">
          <div className="sectionHeader">
            <div className="sectionLabel">What Does This Role Do?</div>
            <h2 className="sectionTitle">What Does a {roleData.title} Do?</h2>
            <p className="sectionCopy">
              Role-specific professionals trained for regulated {industryLabel.toLowerCase()} environments.
            </p>
          </div>

          <div className="gridCards">
            {whatDoesCards.map((card, index) => (
              <article key={index} className="gridCard">
                <div className="gridCardIcon">
                  <MdCheckCircle />
                </div>
                <h3 className="gridCardTitle">{card.title}</h3>
                <p className="gridCardText">{card.description}</p>
              </article>
            ))}
          </div>

          <h3 style={{ textAlign: 'center', margin: '48px 0 20px', fontSize: '1.5rem', color: '#002856', fontWeight: '700' }}>Our Impact in Numbers</h3>

          <div className="statsGrid">
            {statsCards.map((stat, index) => (
              <div key={index} className="statCard">
                <div className="statValue">{stat.value}</div>
                <p className="statLabel">{stat.label}</p>
              </div>
            ))}
          </div>

         
        </div>
      </section>

      <section className="sectionBlock">
        <div className="roleDetailContainer">
          <div className="featureSplit">
            <div className="featureText">
              <h3>Reduce Costs, Elevate Care</h3>
              <p>{roleData.fullContent}</p>
              <div className="featureBlock">
                <div className="featureBox">
                  <div className="featureBoxTitle">More time for clinical work</div>
                  <div className="featureBoxText">Delegate back-office tasks so providers can spend time where it matters most.</div>
                </div>
                <div className="featureBox">
                  <div className="featureBoxTitle">Trusted remote staffing</div>
                  <div className="featureBoxText">Access qualified remote pros who understand your workflows and compliance needs.</div>
                </div>
                <div className="featureBox">
                  <div className="featureBoxTitle">Faster onboarding</div>
                  <div className="featureBoxText">Get matched with talent quickly, with no hiring risk until you're ready.</div>
                </div>
              </div>
            </div>
            <img src={imageUrls[industryLabel]?.remote || "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=600"} alt={`${industryLabel} remote staff supporting care operations`} className="featureImage" />
          </div>
        </div>
      </section>

      <section className="sectionBlock" style={{ background: "#f8fafc" }}>
        <div className="roleDetailContainer">
          <div className="featureSplit">
            <img src={imageUrls[industryLabel]?.privacy || "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600"} alt={`${industryLabel} privacy and secure remote support`} className="featureImage" />
            <div className="featureText">
              <h3>Doctor-Patient Privacy? Perfected.</h3>
              <p>Our remote professionals work under strict privacy controls so patients feel secure and providers can continue care without interruption.</p>
              <div className="featureBlock">
                <div className="featureBox">
                  <div className="featureBoxTitle">Secure workflows</div>
                  <div className="featureBoxText">All staff follow HIPAA and SOC 2 compliant processes.</div>
                </div>
                <div className="featureBox">
                  <div className="featureBoxTitle">Discreet support</div>
                  <div className="featureBoxText">Sensitive tasks are handled away from the patient�s direct view.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sectionBlock">
        <div className="roleDetailContainer">
          <div className="sectionHeader">
            <div className="sectionLabel">Why Hire With HBS</div>
            <h2 className="sectionTitle">Why Hire With HBS</h2>
            <p className="sectionCopy">Solve your most pressing workforce challenges with fast access to trained remote talent.</p>
          </div>

          <div className="whyHireGrid">
            {whyHireCards.map((item, index) => (
              <div key={index} className="whyHireCard">
                <h3 className="whyHireCardTitle">{item.title}</h3>
                <p className="whyHireCardText">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="whyHireFooter">
            <a href="/contact" className="heroButton heroButtonPrimary">Hire Now</a>
          </div>
        </div>
      </section>

      <section className="sectionBlock" style={{ background: "#f8fafc" }}>
        <div className="roleDetailContainer">
          <div className="sectionHeader">
            <div className="sectionLabel">Trusted Across Medical, Dental & Insurance</div>
            <h2 className="sectionTitle">Trusted Across Medical, Dental & Insurance</h2>
          </div>

          <div className="testimonialsGrid">
            {testimonials.map((item, index) => (
              <div key={index} className="testimonialCard">
                <p className="testimonialQuote">�{item.quote}�</p>
                <div className="testimonialAuthor">{item.author}</div>
                <div className="testimonialRole">{item.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sectionBlock">
        <div className="roleDetailContainer">
          <div className="sectionHeader">
            <div className="sectionLabel">Meet Our Remote Talent</div>
            <h2 className="sectionTitle">Meet Our Remote Talent</h2>
            <p className="sectionCopy">Our remote professionals are trained, experienced, and ready to deliver exceptional results from day one.</p>
          </div>

          <div className="talentGrid">
            {talentCards.map((talent, index) => (
              <div key={index} className="talentCard">
                <div className="talentAvatar">{talent.name.split(" ").map((n) => n[0]).join("")}</div>
                <div className="talentName">{talent.name}</div>
                <div className="talentTitle">{talent.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="roleDetailContainer bottomCta">
        <h2>Your next full-time hire is 7 days away</h2>
        <p>Book a demo and we�ll match you with a pre-vetted professional in 7 days or less.</p>
        <a href="/contact" className="bottomCtaButton">Hire Now</a>
      </section>
    </>
  );
};

export default RoleDetail;
