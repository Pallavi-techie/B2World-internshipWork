import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  { number: "1", title: "Submit Your Dispute" },
  { number: "2", title: "Get a Call from our Expert" },
  { number: "3", title: "Choose Resolution Type" },
  { number: "4", title: "Initiate Proceedings" },
];

const HowWeWork = () => {
  return (
    <section className="bg-[#F3F3F3] py-20 px-6 md:px-20 text-center">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold mb-3"
      >
        How we work?
      </motion.h2>

      {/* Underline */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "80px" }}
        transition={{ duration: 0.8 }}
        className="h-1 bg-green-500 mx-auto mb-12 rounded-full"
      ></motion.div>

      {/* Steps */}
      <div className="flex flex-wrap justify-center gap-6">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative bg-green-800 text-white rounded-xl w-56 h-56 flex flex-col items-center justify-center shadow-md hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-lg font-medium px-4">{step.title}</h3>
            <div className="absolute bottom-6 right-6 text-6xl font-extrabold opacity-20 select-none">
              {step.number}
            </div>
            <div className="absolute bottom-6 left-6 flex items-center text-sm font-semibold">
              <ArrowRight className="w-4 h-4 mr-1" /> 
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowWeWork;
