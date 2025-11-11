// import React from 'react';
// import HeaderNavbar from '../components/pagesCommonComponents/HeaderNavbar';
// import HeroSection from '../components/Trademaekcomponents/HeroSection';
// import TrademarkConsultationSection from '../components/Trademaekcomponents/TrademarkConsultationSection';
// import TrademarkEligibilitySection from '../components/Trademaekcomponents/TrademarkEligibilitySection';
// import KindsOfTrademarkSection from '../components/Trademaekcomponents/KindsOfTrademarkSection';
// import ImportanceOfTrademarkSection from '../components/Trademaekcomponents/ImportanceOfTrademarkSection';
// import TrademarkInfoSection from '../components/Trademaekcomponents/TrademarkInfoSection';
// import TrademarkStepsSection from '../components/Trademaekcomponents/TrademarkStepsSection';
// import OnlineTrademarkProcedure from '../components/Trademaekcomponents/OnlineTrademarkProcedure';
// import DocumentsNeeded from '../components/Trademaekcomponents/DocumentsNeeded';
// import CustomerReviews from '../components/Trademaekcomponents/CustomerReviews';
// import PricingPlans from '../components/Trademaekcomponents/PricingPlans';
// import CEOSection from '../components/homepage-comonent/CEOSection';
// import TrademarkBenefitsSection from '../components/Trademaekcomponents/TrademarkBenefitsSection';
// import TrademarkProcessSection from '../components/Trademaekcomponents/TrademarkProcessSection';
// import HowWeWork from '../components/Trademaekcomponents/HowWeWork';
// import WhyUsSection from '../components/homepage-comonent/WhyUsSection';
// import PartnersRecognitionSection from '../components/pagesCommonComponents/PartnersRecognitionSection';
// import FAQSection from '../components/Trademaekcomponents/FAQSection';
// import Footer from '../components/pagesCommonComponents/Footer';


// const TrademarkPage = () => {
//   return (
//     <div>
//       <HeaderNavbar/>
//       <HeroSection/>
//       <TrademarkConsultationSection/>
//       <TrademarkEligibilitySection/>
//       <KindsOfTrademarkSection/>
//       <ImportanceOfTrademarkSection/>
//       <TrademarkInfoSection/>
//       <TrademarkStepsSection/>
//       <OnlineTrademarkProcedure/>
//       <DocumentsNeeded/>
//       <CustomerReviews/>
//       <PricingPlans/>
//       <CEOSection/>
//       <TrademarkBenefitsSection/>
//       <TrademarkProcessSection/>
//       <HowWeWork/>
//       <WhyUsSection/>
//       <PartnersRecognitionSection/>
//       <FAQSection/>
//       <Footer/>
//     </div>
//   )
// }

// export default TrademarkPage

import React from "react";
import HeaderNavbar from "../components/pagesCommonComponents/HeaderNavbar";
import HeroSection from "../components/Trademaekcomponents/HeroSection";
import TrademarkConsultationSection from "../components/Trademaekcomponents/TrademarkConsultationSection";
import TrademarkEligibilitySection from "../components/Trademaekcomponents/TrademarkEligibilitySection";
import KindsOfTrademarkSection from "../components/Trademaekcomponents/KindsOfTrademarkSection";
import ImportanceOfTrademarkSection from "../components/Trademaekcomponents/ImportanceOfTrademarkSection";
import TrademarkInfoSection from "../components/Trademaekcomponents/TrademarkInfoSection";
import TrademarkStepsSection from "../components/Trademaekcomponents/TrademarkStepsSection";
import OnlineTrademarkProcedure from "../components/Trademaekcomponents/OnlineTrademarkProcedure";
import DocumentsNeeded from "../components/Trademaekcomponents/DocumentsNeeded";
import CustomerReviews from "../components/Trademaekcomponents/CustomerReviews";
import PricingPlans from "../components/Trademaekcomponents/PricingPlans";
import CEOSection from "../components/homepage-comonent/CEOSection";
import TrademarkBenefitsSection from "../components/Trademaekcomponents/TrademarkBenefitsSection";
import TrademarkProcessSection from "../components/Trademaekcomponents/TrademarkProcessSection";
import HowWeWork from "../components/Trademaekcomponents/HowWeWork";
import WhyUsSection from "../components/homepage-comonent/WhyUsSection";
import PartnersRecognitionSection from "../components/pagesCommonComponents/PartnersRecognitionSection";
import FAQSection from "../components/Trademaekcomponents/FAQSection";
import Footer from "../components/pagesCommonComponents/Footer";
import { motion } from "framer-motion";

const TrademarkPage = () => {
  return (
    <div
      className="bg-gray-50 text-gray-900 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 
                 scroll-smooth leading-relaxed"
    >
      {/* Header */}
      <HeaderNavbar />

      {/* Each section wrapped in a motion.div for fade-up animation */}
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <HeroSection />
      </motion.div>

      <motion.div className="section-spacing" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}>
        <TrademarkConsultationSection />
      </motion.div>

      <motion.div className="section-spacing" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}>
        <TrademarkEligibilitySection />
      </motion.div>

      <motion.div className="section-spacing" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}>
        <KindsOfTrademarkSection />
      </motion.div>

      <motion.div className="section-spacing" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}>
        <ImportanceOfTrademarkSection />
      </motion.div>

      <motion.div className="section-spacing" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}>
        <TrademarkInfoSection />
      </motion.div>

      <motion.div className="section-spacing" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}>
        <TrademarkStepsSection />
      </motion.div>

      <motion.div className="section-spacing" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}>
        <OnlineTrademarkProcedure />
      </motion.div>

      <motion.div className="section-spacing" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}>
        <DocumentsNeeded />
      </motion.div>

      <motion.div className="section-spacing" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}>
        <CustomerReviews />
      </motion.div>

      <motion.div className="section-spacing" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}>
        <PricingPlans />
      </motion.div>

      <motion.div className="section-spacing" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}>
        <CEOSection />
      </motion.div>

      <motion.div className="section-spacing" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}>
        <TrademarkBenefitsSection />
      </motion.div>

      <motion.div className="section-spacing" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}>
        <TrademarkProcessSection />
      </motion.div>

      <motion.div className="section-spacing" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}>
        <HowWeWork />
      </motion.div>

      <motion.div className="section-spacing" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}>
        <WhyUsSection />
      </motion.div>

      <motion.div className="section-spacing" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}>
        <PartnersRecognitionSection />
      </motion.div>

      <motion.div className="section-spacing" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}>
        <FAQSection />
      </motion.div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TrademarkPage;

