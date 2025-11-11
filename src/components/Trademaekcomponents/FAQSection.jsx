import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is a Trademark?",
    answer:
      "A trademark is an intellectual property consisting of a recognizable sign, logo, or design that distinguishes products or services of one business from another. Trademarks used to identify services are called service marks.",
  },
  {
    question: "What can be registered as a Trademark?",
    answer:
      "Any word, phrase, symbol, logo, design, or combination that identifies and differentiates the source of goods or services can be registered as a trademark. Even unique sounds, shapes, or colors associated with a brand may qualify.",
  },
  {
    question: "What Trademarks are not Registrable?",
    answer:
      "Trademarks that are generic, descriptive, misleading, offensive, or similar to an existing mark cannot be registered. Also, marks that use national symbols or official emblems are not registrable.",
  },
  {
    question: "What is Trademark class?",
    answer:
      "Trademark classes categorize products and services into 45 classes — 34 for goods and 11 for services. It helps determine the scope of protection for your trademark registration.",
  },
  {
    question: "How long does it take to file a Trademark application?",
    answer:
      "Filing a trademark application usually takes 1–2 days if all documents are in order. The entire registration process, however, may take 6–12 months depending on examination and opposition stages.",
  },
  {
    question: "What are the documents required for Trademark filing?",
    answer:
      "You need a soft copy of your brand logo, the applicant’s identity proof (like Aadhaar, PAN, or Passport), address proof, and a signed authorization letter (Form 48) allowing a trademark attorney to file the application.",
  },
  {
    question: "When Can I Use ™ Symbol?",
    answer:
      "You can start using the ™ symbol immediately after filing your trademark application with the Trademark Registry. It shows that you’ve applied for protection of your mark.",
  },
  {
    question: "What if someone has a similar word trademarked?",
    answer:
      "If a similar mark already exists in the same class, your application may be rejected or opposed. You can, however, make modifications or file an objection reply through your attorney to prove distinctiveness.",
  },
  {
    question: "Do you guarantee approval of my trademark?",
    answer:
      "No agency or consultant can guarantee approval, as it depends on the examiner’s decision and possible objections. However, professional filing minimizes chances of rejection and speeds up the process.",
  },
  {
    question: "What is the difference between trademark, copyright and patent?",
    answer:
      "A trademark protects brand names, logos, or slogans. Copyright protects literary and artistic works like books or music. A patent protects inventions or new technological processes.",
  },
  {
    question: "What are the different kinds of trademarks I can have?",
    answer:
      "You can register word marks (like brand names), logo marks (visual designs), tagline marks, sound marks, and even three-dimensional marks depending on how your brand is represented.",
  },
  {
    question: "How long is a registered trademark valid for?",
    answer:
      "A registered trademark is valid for 10 years from the date of application and can be renewed indefinitely for additional 10-year periods by paying the renewal fee.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">FAQ</h2>
        <div className="w-16 h-1 bg-green-600 mx-auto mt-3 rounded-full"></div>
      </div>

      {/* FAQ List */}
      <div className="max-w-5xl mx-auto space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-md overflow-hidden"
          >
            {/* Question Row */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center bg-[#1B2240] text-white px-6 py-3 text-left font-medium hover:bg-[#242d58] transition-all"
            >
              {faq.question}
              <motion.div
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown size={20} />
              </motion.div>
            </button>

            {/* Answer Box */}
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white text-gray-700 px-6 py-4 text-sm leading-relaxed"
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
}

