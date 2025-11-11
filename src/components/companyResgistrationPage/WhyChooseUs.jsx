import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const reasons = [
  "We are a Government of India recognized company.",
  "We are ISO certified.",
  "We provide super-fast service.",
  "We render more affordable services than other professionals.",
  "Quick Response Team",
  "We provide services at the proper time.",
  "We have professional and trained experts.",
  "We provide services to one lakh customers who are satisfied with the service.",
  "We save and keep the data of our customers secure and customers can trust our security.",
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto text-center md:text-left">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 relative inline-block"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Why consider <span className="text-green-600">Online Legal India</span> to register your company?
          <span className="block w-16 h-[3px] bg-green-500 mt-2 mx-auto md:mx-0 rounded"></span>
        </motion.h2>

        <ul className="space-y-4 mt-8">
          {reasons.map((item, index) => (
            <motion.li
              key={index}
              className="flex items-start gap-3 text-gray-700 text-base md:text-lg leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <ArrowRight className="text-green-600 w-5 h-5 flex-shrink-0 mt-1" />
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyChooseUs;
