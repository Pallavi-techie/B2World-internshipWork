import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is a consumer dispute?",
    answer: "",
  },
  {
    question: "Who can file a Consumer complaint?",
    answer: "",
  },
  {
    question: "Who can use this platform?",
    answer:
      "Any individual consumer or registered business who is a party to a consumer dispute can use our platform. Consumers can file Dispute, and businesses can respond and settle disputes amicably.",
  },
  {
    question: "How do I file a complaint?",
    answer: "",
  },
  {
    question: "Do I need to submit any documents or proof?",
    answer: "",
  },
  {
    question: "What if the other party doesn’t respond?",
    answer: "",
  },
  {
    question: "Is my case eligible for ODR or Consumer Complaint ?",
    answer: "",
  },
  {
    question: "Can a Consumer court decision be challenged?",
    answer: "",
  },
  {
    question: "How can you make the payment?",
    answer: "",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white text-gray-800">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-3">FAQ</h2>
      <div className="w-16 h-1 bg-green-500 mx-auto mb-10 rounded"></div>

      {/* Accordion */}
      <div className="max-w-4xl mx-auto space-y-3">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center bg-[#0b1534] text-white px-5 py-3 text-left text-sm sm:text-base font-medium rounded-md hover:bg-[#16224d] transition-all"
            >
              <span>{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {activeIndex === index && faq.answer && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white text-gray-700 px-5 py-3 text-sm sm:text-base border-l-4 border-green-500"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Note Section */}
      <div className="max-w-5xl mx-auto mt-12 text-sm text-gray-700 space-y-4 px-6 leading-relaxed">
        <p>
          <strong>Note:</strong> Before payment of any fees please ensure to
          provide to us, full and complete information with supporting documents
          wherever possible regarding your dispute / grievances. Our mediation
          proposal to the opposite party and subsequent correspondences, if
          required, shall be based only upon the information / Data / documents
          submitted and uploaded from your end. Any misinformation,
          exaggeration, incorrect fact, suppression of facts from your end
          leading to subsequent legal consequences from and by the opposite
          party shall be solely your responsibility and this company shall not
          be liable in any way for any such consequences.
        </p>

        <p>
          Please also note that with the overall guidance of mediation experts
          and other professionals every possible effort shall be resorted to
          resolve your dispute provided the opposite party consents to
          mediation. However no commitment is assured.
        </p>

        <p className="text-xs text-gray-500 mt-6">
          <strong>Disclaimer:</strong> Online Legal India is not a law firm and
          does not offer legal advice. The materials and services provided are
          not a substitute for professional legal counsel. The use of these
          materials or services does not create an Attorney-Client relationship.
          Online Legal India serves as a neutral platform that connects
          individuals seeking Online Dispute Resolution (ODR) services with
          arbitrators and mediators.
        </p>
      </div>
    </section>
  );
};

export default FAQSection;

