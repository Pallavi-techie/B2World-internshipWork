import React from "react";
import heroImage from "../../assets/trademark-hero.webp"; // rename your uploaded image and place it in src/assets

const HeroSection = () => {
  return (
    <section className="w-full h-[90vh] md:h-[100vh] overflow-hidden">
      <img
        src={heroImage}
        alt="Trademark Registration"
        className="w-full h-full object-cover"
      />
    </section>
  );
};

export default HeroSection;
