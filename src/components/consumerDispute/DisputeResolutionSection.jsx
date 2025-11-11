import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const services = [
  "Online purchases and e-commerce transactions",
  "E-commerce refund and return issues",
  "Service delivery issues",
  "Warranty and guarantee claims",
  "Billing and payment discrepancies",
  "Misleading advertisements",
  "Warranty and guarantee disputes",
];

const DisputeResolutionSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Who Can Use Our{" "}
          <span className="text-blue-600">Online Dispute Resolution Services?</span>
        </h2>
        <p className="text-lg text-gray-600 mt-3">
          Our services are ideal for resolving disputes related to
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
        {/* Left Image with Animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="/assets/dispute-resolution.webp"
            alt="Online Dispute Resolution"
            className="rounded-lg shadow-lg w-full md:w-5/6"
          />
        </motion.div>

        {/* Right List Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <ul className="space-y-4">
            {services.map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircle2 className="text-green-500 mt-1 w-5 h-5 flex-shrink-0" />
                <span className="text-gray-700 text-base md:text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default DisputeResolutionSection;
