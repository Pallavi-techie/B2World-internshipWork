import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Fill the form & Make the Payment",
  },
  {
    id: 2,
    title: "Get a call from FSSAI expert",
  },
  {
    id: 3,
    title: "Upload all necessary documents",
  },
  {
    id: 4,
    title: "FSSAI expert will apply for the certificate",
  },
  {
    id: 5,
    title: "Your certificate will be sent by the FSSAI DEPT. 👍",
  },
];

const HowWeWork = () => {
  return (
    <section className="bg-[#f2f2f2] py-16">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          How We Work?
        </h2>
        <div className="w-16 h-[3px] bg-green-600 mx-auto mt-2 rounded-full"></div>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-6 px-6">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="relative bg-[#176B13] text-white rounded-2xl shadow-lg p-6 w-[160px] md:w-[200px] h-[200px] flex flex-col justify-center items-center text-center"
          >
            <p className="text-sm mb-4 leading-tight">{step.title}</p>
            <span className="text-white text-lg">→</span>

            <span className="absolute bottom-4 right-6 text-[90px] font-extrabold text-green-800 opacity-25 select-none">
              {step.id}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowWeWork;
