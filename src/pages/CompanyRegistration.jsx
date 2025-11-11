// import React from 'react';
// import HeaderNavbar from '../components/HeaderNavbar';
// import HeroSection from '../components/companyResgistrationPage/HeroSection';
// import OverviewSection from '../components/companyResgistrationPage/OverviewSection';
// import DocumentsRequired from '../components/companyResgistrationPage/DocumentsRequired';
// import WhyChooseUs from '../components/companyResgistrationPage/WhyChooseUs';
// import CompanyTypes from '../components/companyResgistrationPage/CompanyTypes';
// import ComparisonTable from '../components/companyResgistrationPage/ComparisonTable';
// import CompanyRegistrationProcess from '../components/companyResgistrationPage/CompanyRegistrationProcess';
// import HowWeWork from '../components/companyResgistrationPage/HowWeWork';
// import FAQSection from '../components/companyResgistrationPage/FAQSection';
// import Footer from '../components/Footer';
// import WhyUsSection from '../components/homepage-comonent/WhyUsSection';
// import PartnersRecognitionSection from '../components/pagesComponents/PartnersRecognitionSection';


// const CompanyRegistration = () => {
//   return (
//     <div>
//       <HeaderNavbar/>
//       <HeroSection/>
//       <OverviewSection/>
//       <DocumentsRequired/>
//       <WhyChooseUs/>
//       <CompanyTypes/>
//       <ComparisonTable/>
//       <CompanyRegistrationProcess/>
//       <HowWeWork/>
//       <WhyUsSection/>
//       <PartnersRecognitionSection/>
//       <FAQSection/>
//       <Footer/>
//     </div>
//   )
// }

// export default CompanyRegistration

import React from "react";
import HeaderNavbar from "../components/pagesCommonComponents/HeaderNavbar";
import HeroSection from "../components/companyResgistrationPage/HeroSection";
import OverviewSection from "../components/companyResgistrationPage/OverviewSection";
import DocumentsRequired from "../components/companyResgistrationPage/DocumentsRequired";
import WhyChooseUs from "../components/companyResgistrationPage/WhyChooseUs";
import CompanyTypes from "../components/companyResgistrationPage/CompanyTypes";
import ComparisonTable from "../components/companyResgistrationPage/ComparisonTable";
import CompanyRegistrationProcess from "../components/companyResgistrationPage/CompanyRegistrationProcess";
import HowWeWork from "../components/companyResgistrationPage/HowWeWork";
import FAQSection from "../components/companyResgistrationPage/FAQSection";
import Footer from "../components/pagesCommonComponents/Footer";
import WhyUsSection from "../components/homepage-comonent/WhyUsSection";
import PartnersRecognitionSection from "../components/pagesCommonComponents/PartnersRecognitionSection";

const CompanyRegistration = () => {
  return (
    <div className="bg-white text-gray-800 overflow-y-scroll h-screen scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
      {/* Header */}
      <HeaderNavbar />

      {/* Main Content */}
      <main className="flex flex-col space-y-16 md:space-y-24">
        <HeroSection />
        <OverviewSection />
        <DocumentsRequired />
        <WhyChooseUs />
        <CompanyTypes />
        <ComparisonTable />
        <CompanyRegistrationProcess />
        <HowWeWork />
        <WhyUsSection />
        <PartnersRecognitionSection />
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CompanyRegistration;
