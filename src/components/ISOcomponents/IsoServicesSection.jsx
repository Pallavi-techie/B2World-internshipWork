import React, { useState } from "react";
import { motion } from "framer-motion";

// ISO Services Data
const isoServices = [
  {
    title: "ISO 9001:2015",
    subtitle: "Quality Management System (QMS)",
    description:
      "Demonstrates the ability to meet global Quality Standards on products or services.",
  },
  {
    title: "ISO 14001:2015",
    subtitle: "Environment Management System (EMS)",
    description:
      "Ensures environmental safety and helps minimize pollution as per defined rules.",
  },
  {
    title: "ISO 45001:2018",
    subtitle: "Occupational Health & Safety Management System",
    description:
      "Ensures occupational health and safety with effective management practices.",
  },
  {
    title: "ISO 22000:2018",
    subtitle: "Food Safety Management System (FSMS)",
    description:
      "Maintains food quality and safety across the supply chain for safe consumption.",
  },
  {
    title: "ISO 27001:2022",
    subtitle: "Information Security Management System (ISMS)",
    description:
      "Focuses on data security policies to protect sensitive organizational information.",
  },
  {
    title: "ISO 21001:2018 (EOMS)",
    subtitle: "Educational Organization Management System",
    description:
      "Improves educational outcomes using systematic management processes.",
  },
];

// Other Services Data
const otherServices = [
  {
    title: "HACCP",
    subtitle: "Hazard Analysis and Critical Control Points",
    description:
      "Ensures food manufacturing safety and prevents contamination in the production process.",
  },
  {
    title: "RoHS",
    subtitle: "Restriction of Hazardous Substances",
    description:
      "Regulates the use of hazardous materials in electrical and electronic products.",
  },
  {
    title: "GMP",
    subtitle: "Good Manufacturing Practices",
    description:
      "Standardizes manufacturing policies to ensure quality and safety of products.",
  },
  {
    title: "CE Marking Certification",
    subtitle: "European Conformity Certification",
    description:
      "Provides authority to certify products as safe for sale within the European market.",
  },
  {
    title: "ISO Modification",
    subtitle: "Modification & Surveillance Audit",
    description:
      "Allows modification or renewal of ISO certifications according to updated standards.",
  },
  {
    title: "Energy Audit",
    subtitle: "Energy Efficiency Compliance",
    description:
      "Assesses energy consumption and helps organizations meet sustainability goals.",
  },
];

const IsoServicesSection = () => {
  const [activeTab, setActiveTab] = useState("ISO Services");

  // Select correct dataset based on active tab
  const currentServices =
    activeTab === "ISO Services" ? isoServices : otherServices;

  return (
    <section className="py-16 bg-white text-center px-4 md:px-16">
      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-[#053B50] mb-3"
      >
        Popular ISO Services We Offer:
      </motion.h2>

      {/* Tabs */}
      <div className="flex justify-center mb-10">
        <div className="bg-gray-100 rounded-full flex gap-2 p-2 shadow-sm">
          {["ISO Services", "Other Services"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? "bg-green-500 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Dynamic Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {currentServices.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="border border-gray-300 rounded-2xl shadow-sm p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white"
          >
            <h3 className="text-xl font-bold text-[#053B50] mb-1">
              {service.title}
            </h3>
            <h4 className="text-md font-semibold text-gray-700 mb-2">
              {service.subtitle}
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Request Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-12"
      >
        <button className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition-all shadow-md">
          Request a Callback
        </button>
      </motion.div>
    </section>
  );
};

export default IsoServicesSection;

