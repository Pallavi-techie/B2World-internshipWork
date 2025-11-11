// import React from 'react';
// import HeaderNavbar from '../components/pagesCommonComponents/HeaderNavbar';
// import HeroSection from '../components/FSSAIcomponents/HeroSection';
// import FssaiRegistrationSection from '../components/FSSAIcomponents/FssaiRegistrationSection';
// import FssaiBenefitsSection from '../components/FSSAIcomponents/FssaiBenefitsSection';
// import PenaltiesOffencesSection from '../components/FSSAIcomponents/PenaltiesOffencesSection';
// import DocumentsRequiredSection from '../components/FSSAIcomponents/DocumentsRequiredSection';
// import HowWeWork from '../components/FSSAIcomponents/HowWeWork';
// import CustomerReviews from '../components/FSSAIcomponents/CustomerReviews';
// import WhoNeedsLicense from '../components/FSSAIcomponents/WhoNeedsLicense';
// import CEOSection from '../components/homepage-comonent/CEOSection';
// import FaqSection from '../components/FSSAIcomponents/FaqSection';
// import Footer from '../components/pagesCommonComponents/Footer';

// const FSSAILicensePage = () => {
//   return (
//     <div>
//       <HeaderNavbar/>
//       <HeroSection/>
//       <FssaiRegistrationSection/>
//       <FssaiBenefitsSection/>
//       <PenaltiesOffencesSection/>
//       <DocumentsRequiredSection/>
//       <WhoNeedsLicense/>
//       <HowWeWork/>
//       <CEOSection/>
//      <CustomerReviews/>
//      <FaqSection/>
//       <Footer/>
//     </div>
//   )
// }

// export default FSSAILicensePage

import React from 'react';
import HeaderNavbar from '../components/pagesCommonComponents/HeaderNavbar';
import HeroSection from '../components/FSSAIcomponents/HeroSection';
import FssaiRegistrationSection from '../components/FSSAIcomponents/FssaiRegistrationSection';
import FssaiBenefitsSection from '../components/FSSAIcomponents/FssaiBenefitsSection';
import PenaltiesOffencesSection from '../components/FSSAIcomponents/PenaltiesOffencesSection';
import DocumentsRequiredSection from '../components/FSSAIcomponents/DocumentsRequiredSection';
import WhoNeedsLicense from '../components/FSSAIcomponents/WhoNeedsLicense';
import HowWeWork from '../components/FSSAIcomponents/HowWeWork';
import CEOSection from '../components/homepage-comonent/CEOSection';
import CustomerReviews from '../components/FSSAIcomponents/CustomerReviews';
import FaqSection from '../components/FSSAIcomponents/FaqSection';
import Footer from '../components/pagesCommonComponents/Footer';

const FSSAILicensePage = () => {
  return (
    <div 
      className="w-full min-h-screen overflow-y-scroll scroll-smooth bg-white text-gray-900"
      style={{
        scrollbarWidth: 'thin',
        scrollbarColor: '#053B50 #f0f0f0',
      }}
    >
      {/* Navbar */}
      <HeaderNavbar />

      {/* Hero Section */}
      <HeroSection />

      {/* FSSAI Registration Info */}
      <FssaiRegistrationSection />

      {/* Benefits of FSSAI License */}
      <FssaiBenefitsSection />

      {/* Penalties and Offences */}
      <PenaltiesOffencesSection />

      {/* Documents Required */}
      <DocumentsRequiredSection />

      {/* Who Needs License */}
      <WhoNeedsLicense />

      {/* How We Work */}
      <HowWeWork />

      {/* CEO Section */}
      <CEOSection />

      {/* Customer Reviews */}
      <CustomerReviews />

      {/* FAQs Section */}
      <FaqSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FSSAILicensePage;
