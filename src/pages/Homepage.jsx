// import React from 'react'
// import HeaderNavbar from '../components/pagesCommonComponents/HeaderNavbar';
// import Herosection from '../components/homepage-comonent/Herosection';
// import Aboutus from '../components/homepage-comonent/Aboutus';
// import Footer from '../components/pagesCommonComponents/Footer';
// import ServicesSection from '../components/homepage-comonent/ServicesSection';
// import EventsGallery from '../components/homepage-comonent/EventsGallery';
// import CEOSection from '../components/homepage-comonent/CEOSection';
// import WhyUsSection from '../components/homepage-comonent/WhyUsSection';

// const Homepage = () => {
//   return (
//     <div>
//         <HeaderNavbar/>
//         <Herosection/>
//         <Aboutus/>
//         <ServicesSection/>
//         <CEOSection/>
//         <EventsGallery/>
//         <WhyUsSection/>
//         <Footer/>
        

//     </div>
//   )
// }

// export default Homepage

import React from 'react';
import HeaderNavbar from '../components/pagesCommonComponents/HeaderNavbar';
import Herosection from '../components/homepage-comonent/Herosection';
import Aboutus from '../components/homepage-comonent/Aboutus';
import ServicesSection from '../components/homepage-comonent/ServicesSection';
import CEOSection from '../components/homepage-comonent/CEOSection';
import EventsGallery from '../components/homepage-comonent/EventsGallery';
import WhyUsSection from '../components/homepage-comonent/WhyUsSection';
import Footer from '../components/pagesCommonComponents/Footer';

const Homepage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 overflow-x-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
      
      {/* Navbar */}
      <header className="sticky top-0 z-50 shadow-md bg-white">
        <HeaderNavbar />
      </header>

      {/* Hero Section */}
      <section className="w-full">
        <Herosection />
      </section>

      {/* About Us */}
      <section className="w-full px-4 md:px-10 py-10 bg-gray-50">
        <Aboutus />
      </section>

      {/* Services */}
      <section className="w-full px-4 md:px-10 py-12 bg-white">
        <ServicesSection />
      </section>

      {/* CEO Section */}
      <section className="w-full px-4 md:px-10 py-12 bg-gray-50">
        <CEOSection />
      </section>

      {/* Events Gallery */}
      <section className="w-full px-4 md:px-10 py-12 bg-white">
        <EventsGallery />
      </section>

      {/* Why Choose Us */}
      <section className="w-full px-4 md:px-10 py-12 bg-gray-50">
        <WhyUsSection />
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#053B50] text-white mt-auto">
        <Footer />
      </footer>
    </div>
  );
};

export default Homepage;
