import React from "react";
import heroBg from "../../../../../assets/workwithus-bg.jpeg"; // use your image path

const CareerHeroSection = () => {
  return (
    <section
      className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center text-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#008b8b]/60"></div>

      {/* Text */}
      <h1 className="relative z-10 text-white font-bold text-3xl md:text-5xl">
        Work With Us
      </h1>
    </section>
  );
};

export default CareerHeroSection;
