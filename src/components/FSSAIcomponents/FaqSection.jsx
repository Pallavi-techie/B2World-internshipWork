import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is the full form of FSSAI?",
    answer:
      "The full form of FSSAI is the Food Safety and Standards Authority of India.",
  },
  {
    question: "What is FoSCos?",
    answer:
      "FoSCoS stands for Food Safety Compliance System — it is the new system launched by FSSAI to replace FLRS.",
  },
  {
    question: "Why Register Under FSSAI and get FoSCos License?",
    answer:
      "Registering under FSSAI ensures your food business follows proper safety standards and builds consumer trust.",
  },
  {
    question: "What are the types of FoSCos Food Licenses?",
    answer:
      "There are three types: Basic Registration, State License, and Central License based on turnover and business scale.",
  },
  {
    question:
      "How much does FoSCos Food License Registration under FSSAI cost?",
    answer:
      "The cost depends on the business category and license type. Basic starts from ₹100 per year (approx).",
  },
  {
    question:
      "What are the documents required for FoSCos License Registration?",
    answer:
      "Documents include passport-size photo, identity proof, address proof, business details, and NOC (if applicable).",
  },
  {
    question: "What is the validity period for the FSSAI FoSCos License?",
    answer:
      "FSSAI Licenses are valid for 1 to 5 years and must be renewed before expiry.",
  },
  {
    question: "What is FLRS?",
    answer:
      "FLRS stands for Food Licensing and Registration System — the old system replaced by FoSCos.",
  },
  {
    question: "How to check my FSSAI FoSCos License Renewal status?",
    answer:
      "You can check your renewal status on the FoSCos portal using your application number.",
  },
  {
    question:
      "Do I need to issue a different FoSCos License for different states?",
    answer:
      "Yes, if you operate in multiple states, you need a separate license for each state location.",
  },
  {
    question:
      "I am importing food items for selling in India even then it requires FoSCos Food License?",
    answer:
      "Yes, importers must also obtain a Central FSSAI License before importing food items.",
  },
  {
    question: "Can I transfer my FSSAI License to someone else?",
    answer:
      "No, FSSAI Licenses are non-transferable. A new owner must apply for a fresh license.",
  },
  {
    question:
      "I am planning to sell some Homemade food items online on a small scale, do I need to get a FSSAI enabled FoSCos License?",
    answer:
      "Yes, even small homemade food sellers must register under FSSAI for legal compliance.",
  },
  {
    question: "What will happen if I forget to renew my Food License?",
    answer:
      "If you forget to renew, your license will expire and you’ll need to apply for a fresh one.",
  },
  {
    question:
      "I plan to start an import-export business. Do I need an FoSCos License?",
    answer:
      "Yes, all import-export food businesses need an FSSAI Central License.",
  },
  {
    question: "How can I make changes to my existing FSSAI Certificate?",
    answer:
      "You can apply for modification in your FoSCos dashboard using your registered login credentials.",
  },
  {
    question:
      "Is the FoSCos license needed for a catering business authorized by the Central Government?",
    answer:
      "Yes, catering units working under Central Government agencies also require an FSSAI Central License.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-100 py-16 px-4 md:px-20" id="faq">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">FAQ</h2>
        <div className="h-1 w-20 bg-green-500 mx-auto mb-10 rounded"></div>
      </div>

      <div className="max-w-5xl mx-auto space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-[#101f3d] text-white rounded-md overflow-hidden shadow-md"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left px-6 py-4 font-semibold focus:outline-none"
            >
              {faq.question}
              {openIndex === index ? (
                <ChevronUp size={22} />
              ) : (
                <ChevronDown size={22} />
              )}
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white text-gray-700 px-6 py-3"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
