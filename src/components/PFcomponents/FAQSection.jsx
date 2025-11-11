import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "What is PF or EPF?",
    answer:
      "All employers who have PF registration are required to file returns on a monthly basis. The filing of returns has to be done by the 15th of each month through a unified portal. During the working tenure, the employer and employee both contribute 12% of the basic salary of employees into the EPF account.",
  },
  {
    question: "How can I return my PF?",
    answer:
      "You can withdraw your PF amount by logging into the EPFO portal using your UAN and password, then submitting a withdrawal request under the 'Online Services' section.",
  },
  {
    question: "What is PF return monthly?",
    answer:
      "PF return is the process of submitting details about employee contributions to the EPF account every month before the 15th through the EPFO portal.",
  },
  {
    question: "Is PF mandatory for a salary above ₹15,000?",
    answer:
      "PF is mandatory for employees earning a basic salary of up to ₹15,000 per month. For higher salaries, contribution is voluntary unless the employee is already a PF member.",
  },
  {
    question: "What is ECR in PF?",
    answer:
      "ECR stands for Electronic Challan cum Return — it is an online monthly return that contains details of employee and employer contributions.",
  },
  {
    question: "How is the Provident Fund calculated in Excel?",
    answer:
      "PF contribution is calculated as 12% of the employee’s basic salary. For Excel, use: `=Basic_Salary * 12%` for both employee and employer contributions.",
  },
  {
    question: "How to compute ESI contribution?",
    answer:
      "ESI contribution is 3.25% of gross salary by the employer and 0.75% by the employee, applicable to employees earning up to ₹21,000 per month.",
  },
  {
    question: "Are there any benefits to ESIC after retirement?",
    answer:
      "No, ESIC benefits are available only during the employment period. However, retired employees may be eligible for medical benefits if they meet contribution criteria.",
  },
  {
    question: "If the salary increases during the year, what will be the effect?",
    answer:
      "If the salary increases above ₹15,000, the employer can continue PF contribution voluntarily, but it is not mandatory under EPFO rules.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-12 px-6 md:px-20">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
        Frequently Asked Questions (FAQs)
        <span className="block w-20 h-[3px] bg-green-600 mx-auto mt-2 rounded"></span>
      </h2>

      <div className="max-w-5xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-300 mb-3 rounded-md overflow-hidden">
            <button
              className={`w-full flex justify-between items-center text-left px-5 py-3 font-medium ${
                openIndex === index
                  ? "bg-[#0b1b3f] text-white"
                  : "bg-[#0b1b3f]/90 text-white hover:bg-[#0b1b3f]"
              } transition-colors duration-200`}
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </button>

            {openIndex === index && (
              <div className="bg-white text-gray-700 px-5 py-3 text-sm border-t border-gray-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
