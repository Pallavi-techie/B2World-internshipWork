// import React, { useState } from "react";
// import { FiPlus, FiMinus } from "react-icons/fi";

// const faqs = [
//   { q: "What Is IEC Code?", a: "An Import Export Code (IEC) is a key business identification..." },
//   { q: "How to Apply For IEC Code through Online Legal India?", a: "Follow form and documentation..." },
//   { q: "What Documents Are Required To Get IEC Code Online?", a: "PAN, address proof, photos..." },
//   { q: "What Is The Fee Applicable For IEC Code?", a: "Fee details vary." },
//   { q: "How Many Days It Will Take To Get IEC Code Online?", a: "Usually within 7-10 working days." }
// ];

// const FAQs = () => {
//   const [open, setOpen] = useState(null);
//   return (
//     <div>
//       <h3 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions (FAQs)</h3>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {faqs.map((f, i) => (
//           <div key={i} className="bg-white p-4 rounded shadow-card flex items-center justify-between">
//             <div onClick={() => setOpen(open === i ? null : i)} className="cursor-pointer flex-1">
//               <p className="font-medium">{f.q}</p>
//               {open === i && <p className="text-sm text-gray-600 mt-2">{f.a}</p>}
//             </div>
//             <div className="ml-4">
//               {open === i ? <FiMinus /> : <FiPlus />}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FAQs;

import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "What Is IEC Code?",
    answer:
      "IEC (Import Export Code) is a 10-digit business identification number issued by the Directorate General of Foreign Trade (DGFT). It is mandatory for anyone importing or exporting goods/services from India."
  },
  {
    question: "Is it mandatory to update IEC every year?",
    answer:
      "Yes, IEC needs to be confirmed or updated annually. If not updated, it may get deactivated until renewed."
  },
  {
    question: "How to Apply For IEC Code through Online Legal India?",
    answer:
      "You can apply through Online Legal India by filling the application form, uploading required documents, and completing payment. Experts will assist in filing with DGFT."
  },
  {
    question: "Can a person/entity have more than 1 IEC Code?",
    answer:
      "No, one PAN number can have only one IEC code. Multiple IECs for the same PAN are not allowed."
  },
  {
    question: "What Documents Are Required To Get IEC Code Online?",
    answer:
      "You’ll need PAN card, Aadhaar, business address proof, bank details, and a digital signature if applicable."
  },
  {
    question: "Is there any tax levied based on IEC Code?",
    answer:
      "No, IEC itself doesn’t impose taxes. However, normal import/export duties apply based on products."
  },
  {
    question: "What Is The Fee Applicable For IEC Code?",
    answer:
      "The government fee is ₹500, excluding professional or consultancy charges."
  },
  {
    question: "Can individuals/proprietors obtain IE Code?",
    answer:
      "Yes, individuals and sole proprietors can apply for IEC just like any business entity."
  },
  {
    question: "How Many Days It Will Take To Get IEC Code Online?",
    answer:
      "Usually, IEC is issued within 1–2 working days after successful document verification."
  },
  {
    question: "What is the penalty levied for not registering for IE code?",
    answer:
      "If you conduct export/import without IEC, your shipments can be delayed or seized by customs authorities."
  },
  {
    question: "Can I Import Without IEC Code Registration?",
    answer:
      "No, IEC registration is mandatory for import/export in India."
  },
  {
    question: "Does Custom department use IEC?",
    answer:
      "Yes, customs authorities use IEC for tracking and verifying export-import transactions."
  }
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Split into 2 columns
  const half = Math.ceil(faqs.length / 2);
  const firstCol = faqs.slice(0, half);
  const secondCol = faqs.slice(half);

  return (
    <div className="bg-white py-12">
      <h2 className="text-2xl font-bold text-center mb-8">
        Frequently Asked Questions (FAQs)
      </h2>
      <div className="w-20 h-1 bg-green-500 mx-auto mb-8 rounded"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 px-4">
        {[firstCol, secondCol].map((col, colIndex) => (
          <div key={colIndex} className="space-y-4">
            {col.map((faq, index) => {
              const globalIndex = colIndex * half + index;
              const isActive = activeIndex === globalIndex;
              return (
                <div
                  key={index}
                  className="bg-gray-50 shadow-sm hover:shadow-md rounded-xl p-4 flex justify-between items-start transition-all"
                >
                  <div>
                    <h4
                      className="font-medium text-gray-800 cursor-pointer"
                      onClick={() => toggleFAQ(globalIndex)}
                    >
                      {faq.question}
                    </h4>
                    {isActive && (
                      <p className="mt-2 text-gray-600 text-sm transition-all">
                        {faq.answer}
                      </p>
                    )}
                  </div>

                  <button
                    onClick={() => toggleFAQ(globalIndex)}
                    className="ml-4 text-green-600"
                  >
                    {isActive ? <FaMinus /> : <FaPlus />}
                  </button>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
