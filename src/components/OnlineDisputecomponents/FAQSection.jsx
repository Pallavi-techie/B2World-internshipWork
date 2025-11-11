import React, { useState } from "react";

const faqs = [
  {
    question: "What is Online Dispute Resolution (ODR)?",
    answer:
      "ODR is a digital way to resolve disputes through mediation, conciliation, or arbitration conducted online. In simpler words, it is the conduct of the ADR (Alternative Dispute Resolution) process in an online environment. Consequently, ODR is not only legally permissible but has also gained broad recognition in India from the judiciary, the government, and business enterprises.",
  },
  {
    question: "What is Online Legal India (OLI)?",
  },
  {
    question: "What kind of disputes can be resolved via ODR?",
  },
  {
    question: "Can criminal cases be resolved via ODR?",
  },
  {
    question: "Is ODR legally valid?",
  },
  {
    question: "What are the benefits?",
  },
  {
    question: "How secure is the process?",
  },
  {
    question: "Can I file a case from anywhere?",
  },
  {
    question: "Are ODR decisions binding?",
  },
  {
    question: "What documents do I need?",
  },
  {
    question: "What happens after settlement?",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-12 px-4 md:px-16">
      <h2 className="text-center text-3xl font-bold mb-8 text-[#001a3a]">
        FAQ
        <div className="w-16 h-1 bg-green-500 mx-auto mt-2"></div>
      </h2>

      <div className="max-w-5xl mx-auto space-y-3">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left bg-[#1b2140] text-white font-medium px-6 py-3 focus:outline-none flex justify-between items-center"
            >
              {faq.question}
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="bg-white text-gray-700 px-6 py-4 text-sm leading-relaxed">
                {faq.answer ? faq.answer : "Answer coming soon..."}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Notes and Disclaimer */}
      <div className="max-w-5xl mx-auto mt-10 text-gray-700 text-sm leading-relaxed">
        <p>
          <strong>Note:</strong> Before payment of any fees please ensure to
          provide to us, full and complete information with supporting documents
          wherever possible regarding your dispute / grievances.
        </p>
        <p className="mt-3">
          Our mediation proposal to the opposite party and subsequent
          correspondences, if required, shall be based only upon the
          information/data/documents submitted and uploaded from your end. Any
          misinformation, exaggeration, incorrect fact, or suppression of facts
          from your end leading to subsequent legal consequences from and by the
          opposite party shall be solely your responsibility and this company
          shall not be liable in any way for any such consequences.
        </p>
        <p className="mt-3">
          Please also note that with the overall guidance of mediation experts
          and other professionals every possible effort shall be resorted to
          resolve your dispute provided the opposite party consents to
          mediation. However, no commitment is assured.
        </p>

        <p className="mt-6 font-semibold text-gray-800">Disclaimer:</p>
        <p className="text-gray-600">
          Online Legal India is not a law firm and does not offer legal advice.
          The materials and services provided are not a substitute for
          professional legal counsel. The use of these materials or services
          does not create an Attorney-Client relationship. Online Legal India
          serves as a neutral platform that connects individuals seeking Online
          Dispute Resolution (ODR) services with arbitrators and mediators.
        </p>
      </div>
    </section>
  );
};

export default FAQSection;
