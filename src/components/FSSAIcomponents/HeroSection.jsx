import React from "react";
import heroImage from "../../assets/fssai-hero.webp"; // <-- rename your image to this and place it inside src/assets folder

const HeroSection = () => {
  return (
    <section className="w-full">
      <img
        src={heroImage}
        alt="FSSAI Registration Hero Banner"
        className="w-full h-auto object-cover"
      />
    </section>
  );
};

export default HeroSection;
