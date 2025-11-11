import React from "react";
import { motion } from "framer-motion";
import { Phone, FileText, IndianRupee, FileCheck, Globe, CheckCircle2 } from "lucide-react";

const steps = [
  { icon: Phone, text: "1) Call Us" },
  { icon: FileText, text: "2) Send Us Documents" },
  { icon: IndianRupee, text: "3) Make Your Payment" },
  { icon: FileCheck, text: "4) Get a Draft certificate" },
  { icon: Globe, text: "5) Get an ISO certificate" },
];

const features = [
  "Hassle-Free Certification",
  "20 years of experience expert",
  "Challenging Prices across India",
  "Fastest ISO Certificate Delivery",
  "Satisfied Customer Ratings",
  "Reliable Service Proving Assurance",
  "Easy Communication and Query Solution",
  "High Google (4.4) Rating",
  "Highly Secured Payment Gateway",
  "100% Personal Data Security",
];

const IsoProcessSection = () => {
  return (
    <section className="bg-[#f6fff6] w-full py-16 px-6 md:px-20 text-center">
      {/* Title */}
      <motion.h2
        className="text-2xl md:text-3xl font-semibold text-gray-900 mb-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        ISO Certification Is So Easy To Get…
      </motion.h2>

      {/* Process Steps */}
      <motion.div
        className="flex flex-wrap justify-center items-center gap-6 md:gap-10 mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center w-36"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-20 h-20 rounded-full shadow-md bg-white flex items-center justify-center mb-3">
              <step.icon className="text-green-600 w-10 h-10" />
            </div>
            <p className="text-sm md:text-base font-medium text-gray-800">
              {step.text}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Why Choose Us */}
      <div className="max-w-5xl mx-auto">
        <h3 className="text-xl font-semibold mb-6 text-gray-900 text-left">
          Why choose us?
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-2 text-gray-800"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <CheckCircle2 className="text-green-600 w-5 h-5" />
              <span>{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Button */}
      <motion.div
        className="mt-12"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <a
          href="/contact"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-full transition duration-300"
        >
          Get Started Now
        </a>
      </motion.div>
    </section>
  );
};

export default IsoProcessSection;
