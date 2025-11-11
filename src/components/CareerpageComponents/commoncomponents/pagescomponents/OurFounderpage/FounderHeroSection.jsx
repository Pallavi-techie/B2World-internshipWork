import React from "react";
import heroImage from "../../../../../assets/founder-hero.jpeg"; // replace with your hero image path

const FounderHeroSection = () => {
  return (
    <div
      className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-teal-900/60"></div>
      <h1 className="relative text-white text-4xl md:text-5xl font-bold z-10">Our Founder</h1>
    </div>
  );
};

export default FounderHeroSection;
