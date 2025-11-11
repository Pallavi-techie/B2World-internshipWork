// import React from 'react';
// import HeaderNavbar from '../components/pagesCommonComponents/HeaderNavbar';
// import HeroSection from '../components/OnlineDisputecomponents/HeroSection';
// import AdvantageSection from '../components/OnlineDisputecomponents/AdvantageSection';
// import HowWeWork from '../components/OnlineDisputecomponents/HowWeWork';
// import WhoWeHelp from '../components/OnlineDisputecomponents/WhoWeHelp';
// import ArbitratorsSection from '../components/OnlineDisputecomponents/ArbitratorsSection';
// import CEOSection from '../components/homepage-comonent/CEOSection';
// import FAQSection from '../components/OnlineDisputecomponents/FAQSection';
// import Footer from '../components/pagesCommonComponents/Footer';

// const ODRServicesPage = () => {
//   return (
//     <div>
//       <HeaderNavbar/>
//       <HeroSection/>
//       <AdvantageSection/>
//       <HowWeWork/>
//       <WhoWeHelp/>
//       <ArbitratorsSection/>
//       <CEOSection/>
//       <FAQSection/>
//       <Footer/>
      
//     </div>
//   )
// }

// export default ODRServicesPage


import React from 'react';
import HeaderNavbar from '../components/pagesCommonComponents/HeaderNavbar';
import HeroSection from '../components/OnlineDisputecomponents/HeroSection';
import AdvantageSection from '../components/OnlineDisputecomponents/AdvantageSection';
import HowWeWork from '../components/OnlineDisputecomponents/HowWeWork';
import WhoWeHelp from '../components/OnlineDisputecomponents/WhoWeHelp';
import ArbitratorsSection from '../components/OnlineDisputecomponents/ArbitratorsSection';
import CEOSection from '../components/homepage-comonent/CEOSection';
import FAQSection from '../components/OnlineDisputecomponents/FAQSection';
import Footer from '../components/pagesCommonComponents/Footer';

const ODRServicesPage = () => {
  return (
    <div 
      className="w-full min-h-screen overflow-y-scroll overflow-x-hidden scroll-smooth" 
      style={{ scrollbarGutter: 'stable' }}
    >
      {/* Navbar stays fixed width */}
      <HeaderNavbar />

      {/* Page Content */}
      <HeroSection />
      <AdvantageSection />
      <HowWeWork />
      <WhoWeHelp />
      <ArbitratorsSection />
      <CEOSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default ODRServicesPage;
