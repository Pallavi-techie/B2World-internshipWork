import React from "react";
import { motion } from "framer-motion";
import { Building2, Briefcase, FileText, Tag, MapPin } from "lucide-react";

export default function DocumentsNeeded() {
  const leftDocs = [
    "Name of the applicant",
    "Type of business",
    "Nature of business (specific goods/services)",
    "Name of a brand/logo/slogan",
    "Registrant’s mailing address with PIN CODE.",
  ];

  const rightDocs = [
    "Form-48 has been signed. (Power of Attorney/Vakalatnama)",
    "Signatory identification evidence",
    "Proof of the signatory’s address",
    "Business validation (depends on the type of business)",
    "MSME registration certificate/Udyog Aadhaar (optional)",
  ];

  const icons = [
    { icon: Building2, label: "Applicant’s / Company Name" },
    { icon: Briefcase, label: "Business Type" },
    { icon: FileText, label: "Business Details" },
    { icon: Tag, label: "Brand/logo/slogan name" },
    { icon: MapPin, label: "Office / Business address" },
  ];

  return (
    <section className="w-full bg-white py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-gray-800 mb-10"
        >
          Documents Needed for Trademark Registration
        </motion.h2>

        {/* Top Icons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-12">
          {icons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex flex-col items-center text-center"
            >
              <div className="bg-blue-100 p-4 rounded-full mb-2 shadow-sm">
                <item.icon className="w-8 h-8 text-blue-600" />
              </div>
              <p className="text-sm text-gray-700 font-medium">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Documents section */}
        <div className="grid md:grid-cols-2 gap-10 text-left">
          {/* Left Box */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-blue-50 rounded-2xl shadow-md p-6"
          >
            <h3 className="text-lg font-semibold text-blue-700 mb-4">
              The documents that are required for trademark registration:
            </h3>
            <ul className="space-y-2 text-gray-700">
              {leftDocs.map((doc, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">→</span> {doc}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Box */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-blue-50 rounded-2xl shadow-md p-6"
          >
            <h3 className="text-lg font-semibold text-blue-700 mb-4">
              The following documents are required:
            </h3>
            <ul className="space-y-2 text-gray-700">
              {rightDocs.map((doc, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">→</span> {doc}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Footer Text */}
        <p className="text-sm text-gray-600 mt-10 leading-relaxed">
          A trademark is a distinct identity that distinguishes your organization,
          product, or service from the competition. A registered trademark is the
          intellectual property/intangible asset of your company. It safeguards
          your investment in building client trust and loyalty. <br />
          Registration of a trademark gives you the ability to sue anybody who
          attempts to replicate your trademark and prohibits others from using an
          identical trademark to the one you registered.
        </p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-8"
        >
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300">
            Apply For Series Trademark
          </button>
        </motion.div>
      </div>
    </section>
  );
}
