import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How many types of company registrations in India are available?",
    answer: (
      <ul className="list-disc ml-5 mt-2 space-y-1">
        <li>Private Limited Company</li>
        <li>OPC Company</li>
        <li>Limited Liability Partnership</li>
        <li>Partnership Registration</li>
        <li>Public Limited Company</li>
        <li>Sec 8 – Non Profit Company</li>
      </ul>
    ),
  },
  {
    question: "Is the process completely online?",
    answer:
      "Yes, the entire registration process is completely online. You can submit documents and complete verification digitally.",
  },
  {
    question: "Can I register a company at the residential address?",
    answer:
      "Yes, you can register your company using your residential address as the official business address.",
  },
  {
    question: "What is DSC?",
    answer:
      "DSC stands for Digital Signature Certificate. It is used to sign electronic documents securely during the company registration process.",
  },
  {
    question: "What is DIN?",
    answer:
      "DIN stands for Director Identification Number. It is a unique identification number assigned to each director of a company.",
  },
  {
    question: "What are the articles of association (AOA)?",
    answer:
      "AOA defines the rules and regulations that govern the internal management of the company.",
  },
  {
    question: "What is a certificate of incorporation?",
    answer:
      "It is a legal document issued by the Registrar of Companies (ROC) that confirms the formation of a company.",
  },
  {
    question: "What is Spice+ Form?",
    answer:
      "SPICe+ (Simplified Proforma for Incorporating Company Electronically Plus) is an integrated web form for company incorporation in India.",
  },
  {
    question: "How much time does it take to register a Company?",
    answer:
      "Typically, it takes around 7–10 working days to complete the registration process, depending on document verification speed.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Frequently Asked Questions (FAQs)
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index ? "bg-white shadow-md" : "bg-gray-100"
              }`}
            >
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-gray-800">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="text-green-500" size={22} />
                ) : (
                  <Plus className="text-green-500" size={22} />
                )}
              </button>
              <div
                className={`transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-60 opacity-100 px-6 pb-4"
                    : "max-h-0 opacity-0 px-6"
                }`}
              >
                <div className="text-gray-700 text-sm md:text-base">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
