import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const documents = [
  "Passport-size photo",
  "Certificate of the business constitution, such as a partnership deed, certificate of incorporation, shop and establishment licence, or other business registration certificate.",
  "Plan for a food safety management system",
  "Address proof of business premises (rental agreement, a letter of authorisation from the owner of the rented premises, utility bills, and so on)",
  "List of food products manufactured or processed",
  "Any Identity Proof documents like Aadhaar Card, Ration Card, Voter ID Card, PAN Card, or Driving License.",
];

const DocumentsRequiredSection = () => {
  return (
    <section className="relative bg-[#000000] bg-opacity-90 text-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-center"
        >
          Documents required for new FSSAI registration/licence
        </motion.h2>

        {/* Animated underline */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          transition={{ duration: 0.8 }}
          className="h-1 bg-green-500 mx-auto mt-2 mb-12 rounded-full"
        ></motion.div>

        {/* Document list */}
        <div className="grid md:grid-cols-2 gap-8">
          {documents.map((doc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start space-x-3"
            >
              <CheckCircle2 className="text-green-500 mt-1 w-5 h-5 flex-shrink-0" />
              <p className="text-gray-100 text-sm md:text-base leading-relaxed">
                {doc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DocumentsRequiredSection;
