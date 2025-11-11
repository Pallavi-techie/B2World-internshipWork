import React from "react";
import HeaderNavbar from "../components/pagesCommonComponents/HeaderNavbar";
import HeroSection from "../components/consumerDispute/HeroSection";
import ConsumerDisputeForm from "../components/consumerDispute/ConsumerDisputeForm";
import WhyChooseODR from "../components/consumerDispute/WhyChooseODR";
import DisputeResolutionSection from "../components/consumerDispute/DisputeResolutionSection";
import ConsumerDisputeSection from "../components/consumerDispute/ConsumerDisputeSection";
import AdvantagesAndProcess from "../components/consumerDispute/AdvantagesAndProcess";
import SelectCategory from "../components/consumerDispute/SelectCategory";
import WhyUsSection from "../components/homepage-comonent/WhyUsSection";
import PartnersRecognitionSection from "../components/pagesCommonComponents/PartnersRecognitionSection";
import FAQSection from "../components/companyResgistrationPage/FAQSection";
import Footer from "../components/pagesCommonComponents/Footer";

const ConsumerDispute = () => {
  return (
    <div className="h-screen w-full overflow-y-scroll scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-gray-200 scroll-smooth">
      {/* Navbar */}
      <HeaderNavbar />

      {/* Hero Section */}
      <section id="hero">
        <HeroSection />
      </section>

      {/* Consumer Form */}
      <section id="form" className="mt-10">
        <ConsumerDisputeForm />
      </section>

      {/* Why Choose ODR */}
      <section id="why-choose" className="mt-10">
        <WhyChooseODR />
      </section>

      {/* Dispute Resolution Section */}
      <section id="dispute-resolution" className="mt-10">
        <DisputeResolutionSection />
      </section>

      {/* Consumer Dispute Section */}
      <section id="consumer-dispute" className="mt-10">
        <ConsumerDisputeSection />
      </section>

      {/* Advantages and Process */}
      <section id="advantages" className="mt-10">
        <AdvantagesAndProcess />
      </section>

      {/* Select Category */}
      <section id="category" className="mt-10">
        <SelectCategory />
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="mt-10">
        <WhyUsSection />
      </section>

      {/* Partners Recognition */}
      <section id="partners" className="mt-10">
        <PartnersRecognitionSection />
      </section>

      {/* FAQ Section */}
      <section id="faq" className="mt-10">
        <FAQSection />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ConsumerDispute;
