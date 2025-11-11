import React from "react";
import HeaderNavbar from "../components/pagesCommonComponents/HeaderNavbar";
import HeroSection from "../components/import&exportcomponets/HeroSection";
import FormSection from "../components/import&exportcomponets/FormSection";
import IecLicenseSection from "../components/import&exportcomponets/IecLicenseSection";
import PartnersCarousel from "../components/import&exportcomponets/PartnersCarousel";
import IssuedCardsCarousel from "../components/import&exportcomponets/IssuedCardsCarousel";
import DocumentsGrid from "../components/import&exportcomponets/DocumentsGrid";
import Advantages from "../components/import&exportcomponets/Advantages";
import WhyUsSection from "../components/homepage-comonent/WhyUsSection";
import HowWeWork from "../components/import&exportcomponets/HowWeWork";
import PartnersRecognitionSection from "../components/pagesCommonComponents/PartnersRecognitionSection";
import CEOSection from "../components/homepage-comonent/CEOSection";
import FAQs from "../components/import&exportcomponets/FAQs";
import Footer from "../components/pagesCommonComponents/Footer";

const ImportExportCodePage = () => {
  return (
    
    <div className="font-sans text-gray-800">
        <HeaderNavbar/>
      <HeroSection />
      <div>
        <div>
          <FormSection />
          <IecLicenseSection/>
          
        </div>
      </div>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <DocumentsGrid />
        </div>
      </section>
      <CEOSection/>

      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <Advantages />
        </div>
      </section>
      

      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <HowWeWork />
        </div>
      </section>
      <WhyUsSection/>
      <PartnersRecognitionSection/>

      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <FAQs />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ImportExportCodePage;
