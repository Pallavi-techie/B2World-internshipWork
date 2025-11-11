import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is an ISO for?",
    answer:
      "It is International standards ensure that the products and services you use in your daily life are safe, reliable, and of high quality. This organisation guides businesses in adopting suitable, sustainable and ethical practices that help create a future where customers’ purchases not only perform excellently but also safeguard our planet.",
  },
  {
    question: "What is NABCB Accreditation for ISO?",
    answer:
      "NABCB Accreditation ensures certification bodies are competent to assess and certify organizations according to ISO standards.",
  },
  {
    question: "Why do I need ISO certification?",
    answer:
      "ISO certification boosts your business credibility and improves customer confidence by ensuring quality and consistency.",
  },
  {
    question: "What is the Cost of ISO Certification?",
    answer:
      "The cost depends on the type of ISO standard, company size, and complexity of operations.",
  },
  {
    question: "Is ISO a Government Organization?",
    answer:
      "No, ISO is an independent, non-governmental international organization that develops standards.",
  },
  {
    question: "Is there any Indian Government body for ISO accreditation?",
    answer:
      "Yes, NABCB (National Accreditation Board for Certification Bodies) operates under the Quality Council of India.",
  },
  {
    question: "Why Do I Need ISO Certification for My Company?",
    answer:
      "It demonstrates your commitment to quality and helps gain customer trust and access to global markets.",
  },
  {
    question: "What is IAF ISO?",
    answer:
      "IAF (International Accreditation Forum) ensures international recognition and credibility of ISO certifications.",
  },
  {
    question: "What is Non-IAF ISO?",
    answer:
      "Non-IAF ISO certificates are issued by bodies not recognized internationally, hence may not hold global credibility.",
  },
  {
    question: "What is the validity of an ISO certification?",
    answer:
      "Most ISO certifications are valid for three years with yearly surveillance audits.",
  },
  {
    question: "How can I check the validity of an ISO Certificate?",
    answer:
      "You can verify ISO certificates on the certification body’s official website or IAF database.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white" id="faq">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">
          Frequently Asked Questions (FAQs)
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-green-100 rounded-lg shadow-sm border border-green-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full p-4 text-left font-semibold text-gray-800"
              >
                {faq.question}
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-green-700" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-green-700" />
                )}
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden px-4 pb-4 text-gray-700"
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
