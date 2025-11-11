import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  "/assets/hero1.webp",
  "/assets/hero2.webp",
  "/assets/hero3.png",
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % images.length),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-r from-white via-gray-100 to-teal-50 py-16 flex flex-col md:flex-row items-center justify-around px-6">
      <div className="max-w-lg">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
        >
          Our <span className="text-teal-600">Brands</span>
        </motion.h1>
        <img src="/assets/fastinfo-group.svg" alt="FastInfo Hub" className="w-48" />
      </div>

      <motion.div
        className="relative w-[350px] md:w-[500px] mt-8 md:mt-0"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-gray-200">
          <img src={images[index]} alt="Laptop Slide" className="w-full h-[250px] md:h-[300px] object-cover" />
        </div>

        <div className="absolute inset-y-0 flex justify-between items-center px-4">
          <button
            onClick={() => setIndex((index - 1 + images.length) % images.length)}
            className="p-2 bg-white rounded-full shadow-md hover:bg-teal-100"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() => setIndex((index + 1) % images.length)}
            className="p-2 bg-white rounded-full shadow-md hover:bg-teal-100"
          >
            <FaChevronRight />
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
