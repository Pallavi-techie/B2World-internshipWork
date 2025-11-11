import React from "react";
import { motion } from "framer-motion";
import heroPerson from "../../assets/dispute-hero-person.webp"; // replace with your image path

const HeroSection = () => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between bg-white py-16 px-6 md:px-20">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="text-center md:text-left max-w-3xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-[#FF6600] leading-tight">
          Online Dispute Resolution-
        </h1>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="mt-10 md:mt-0 flex justify-center md:justify-end"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-[#FFF3DC] rounded-full w-72 h-72 md:w-96 md:h-96 -z-10 mx-auto"></div>
          <img
            src={heroPerson}
            alt="Online Dispute Resolution"
            className="w-72 md:w-96 object-contain rounded-3xl"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
