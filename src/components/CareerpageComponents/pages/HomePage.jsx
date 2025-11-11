import React from "react";

import HeroSection from "../commoncomponents/pagescomponents/homecomponents/HeroSection";
import OurFounder from "../commoncomponents/pagescomponents/homecomponents/OurFounder";
import NewsCoverage from "../commoncomponents/pagescomponents/homecomponents/NewsCoverage";
import WhyChooseUs from "../commoncomponents/pagescomponents/homecomponents/WhyChooseUs";
import PopularBrands from "../commoncomponents/pagescomponents/homecomponents/PopularBrands";
import AssociatedWith from "../commoncomponents/pagescomponents/homecomponents/AssociatedWith";
import BrandCarousel from "../commoncomponents/pagescomponents/homecomponents/BrandCarousel";

const HomePage = () => {
  return (
    <div className="overflow-hidden">
    
      <HeroSection />
      <OurFounder />
      <NewsCoverage />
      <WhyChooseUs />
      <PopularBrands />
      <AssociatedWith />
      <BrandCarousel />
      
    </div>
  );
};

export default HomePage;
