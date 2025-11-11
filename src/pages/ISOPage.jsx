// import React from 'react';
// import HeaderNavbar from '../components/pagesCommonComponents/HeaderNavbar';
// import IsoCertificationHeroSection from '../components/ISOcomponents/IsoCertificationHeroSection';
// import IsoServicesSection from '../components/ISOcomponents/IsoServicesSection';
// import IsoCategoryTabs from '../components/ISOcomponents/IsoCategoryTabs';
// import IsoCertificationSection from '../components/ISOcomponents/IsoCertificationSection';
// import PremiumIsoCertificationSection from '../components/ISOcomponents/PremiumIsoCertificationSection';
// import IsoProcessSection from '../components/ISOcomponents/IsoProcessSection';
// import IsoPackagesSection from '../components/ISOcomponents/IsoPackagesSection';
// import SatisfiedClientsCarousel from '../components/ISOcomponents/SatisfiedClientsCarousel';
// import FAQSection from '../components/ISOcomponents/FAQSection';
// import Footer from '../components/pagesCommonComponents/Footer';

// const ISOPage = () => {
//   return (
//     <div>
//       <HeaderNavbar/>
//       <IsoCertificationHeroSection/>
//       <IsoServicesSection/>
//       <IsoCategoryTabs/>
//       <IsoCertificationSection/>
//       <PremiumIsoCertificationSection/>
//       <IsoProcessSection/>
//       <IsoPackagesSection/>
//       <SatisfiedClientsCarousel/>
//       <FAQSection/>
//       <Footer/>
//     </div>
//   )
// }

// export default ISOPage

import React, { useEffect } from 'react';
import HeaderNavbar from '../components/pagesCommonComponents/HeaderNavbar';
import IsoCertificationHeroSection from '../components/ISOcomponents/IsoCertificationHeroSection';
import IsoServicesSection from '../components/ISOcomponents/IsoServicesSection';
import IsoCategoryTabs from '../components/ISOcomponents/IsoCategoryTabs';
import IsoCertificationSection from '../components/ISOcomponents/IsoCertificationSection';
import PremiumIsoCertificationSection from '../components/ISOcomponents/PremiumIsoCertificationSection';
import IsoProcessSection from '../components/ISOcomponents/IsoProcessSection';
import IsoPackagesSection from '../components/ISOcomponents/IsoPackagesSection';
import SatisfiedClientsCarousel from '../components/ISOcomponents/SatisfiedClientsCarousel';
import FAQSection from '../components/ISOcomponents/FAQSection';
import Footer from '../components/pagesCommonComponents/Footer';

const ISOPage = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-green-50 overflow-y-auto scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-gray-200">
      {/* Fixed Navbar */}
      <header className="sticky top-0 z-50 shadow-md bg-white">
        <HeaderNavbar />
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="w-full">
          <IsoCertificationHeroSection />
        </section>

        {/* ISO Services */}
        <section className="w-full py-16 bg-white">
          <IsoServicesSection />
        </section>

        {/* ISO Category Tabs */}
        <section className="w-full py-16 bg-green-50">
          <IsoCategoryTabs />
        </section>

        {/* ISO Certification Section */}
        <section className="w-full py-16 bg-white">
          <IsoCertificationSection />
        </section>

        {/* Premium ISO Certifications */}
        <section className="w-full py-16 bg-gradient-to-b from-green-50 to-white">
          <PremiumIsoCertificationSection />
        </section>

        {/* ISO Process Section */}
        <section className="w-full py-16 bg-white">
          <IsoProcessSection />
        </section>

        {/* ISO Packages */}
        <section className="w-full py-16 bg-green-50">
          <IsoPackagesSection />
        </section>

        {/* Satisfied Clients Carousel */}
        <section className="w-full py-16 bg-white">
          <SatisfiedClientsCarousel />
        </section>

        {/* FAQ Section */}
        <section className="w-full py-16 bg-green-50">
          <FAQSection />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#053B50] text-white py-10">
        <Footer />
      </footer>
    </div>
  );
};

export default ISOPage;
