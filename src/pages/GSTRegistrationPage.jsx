import React from "react";
import HeaderNavbar from "../components/pagesCommonComponents/HeaderNavbar";
import HeroSection from "../components/gst-registrationcomponents/HeroSection";
import PartnersCarousel from "../components/gst-registrationcomponents/PartnersCarousel";
import GstServices from "../components/gst-registrationcomponents/GstServices";
import Footer from "../components/pagesCommonComponents/Footer";

const GSTRegistrationPage = () => {
  return (
    <>
    <HeaderNavbar/>
      <HeroSection />
      <PartnersCarousel />
      <GstServices />
      <Footer/>
    </>
  );
};

export default GSTRegistrationPage;



