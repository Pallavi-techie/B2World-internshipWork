import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="bg-blue-600 text-white py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Goods and Services Tax (GST) <br /> Compliance
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg">
            <div className="flex items-center space-x-2">
              <FaCheckCircle className="text-white" />
              <span>Get help in GST Registration</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaCheckCircle className="text-white" />
              <span>Get help in GST Return Filing</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaCheckCircle className="text-white" />
              <span>Get help in GST Surrender/Cancel</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaCheckCircle className="text-white" />
              <span>Get help in GST Modification Update</span>
            </div>
          </div>
        </motion.div>

        {/* Right image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center"
        >
          <img
            src="/assets/gst-hero.png"
            alt="GST illustration"
            className="w-3/4 max-w-md"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
