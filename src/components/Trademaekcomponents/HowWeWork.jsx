import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: 1,
    text: "Fill our Registration Form & Make the Payment →",
  },
  {
    number: 2,
    text: "We will search the class of your brand by trademark expert →",
  },
  {
    number: 3,
    text: "We will draft the authorization letter (Form-48) →",
  },
  {
    number: 4,
    text: "Upload the Required Documents →",
  },
  {
    number: 5,
    text: "Our expert will file the TM Application →",
  },
  {
    number: 6,
    text: "Congratulations! You can now use ™ next to your Brand 🔥",
  },
];

const HowWeWork = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          How we work?
        </h2>
        <div className="w-16 h-1 bg-green-600 mx-auto mt-3 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 justify-center">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative bg-green-700 text-white rounded-lg shadow-md p-6 h-48 flex items-center justify-center text-center overflow-hidden group"
          >
            {/* Faint step number in background */}
            <span className="absolute text-[120px] font-extrabold text-green-800 opacity-30 right-4 bottom-[-10px] select-none leading-none">
              {step.number}
            </span>

            {/* Step text */}
            <p className="text-sm md:text-base font-medium leading-relaxed relative z-10">
              {step.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowWeWork;
