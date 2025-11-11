import React from "react";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const penalties = [
  {
    text: "The sale of substandard quality of food is considered as an offence under the FSSAI regulations and a penalty of 5 lakhs is to be paid.",
  },
  {
    text: "The sale of misbranded products is punishable with a penalty of 3 lakhs.",
  },
  {
    text: "The production, processing and storage of food with unethical means is punished with a penalty of 1 lakh.",
  },
  {
    text: "The production, processing and storage of food with unhealthy means is punished with a penalty of 1 lakh.",
  },
  {
    text: "There is also a penalty of 5 lakhs if the person suffers because of low quality food.",
  },
  {
    text: "The individual who fails to rectify their mistakes will be faced with shutting down of the business and cancellation of license.",
  },
];

const PenaltiesOffencesSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-16 text-center">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-gray-900"
        >
          Penalties and Offences for Non-compliance
        </motion.h2>

        <div className="w-16 h-1 bg-green-500 mx-auto mt-2 mb-6 rounded-full"></div>

        <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-12">
          The Food Safety and Standard Authority of India (FSSAI) takes the
          matters related to the production and processing of food seriously.
          There is Section 50 to Section 65 that deals with the offenses under
          the FSSAI 2006. It keeps track of all the necessary requirements that
          one needs to abide by and follow the compliance policy to avoid being
          punished. The basic offence is the sale of food without the FSSAI
          licence for which one can be punished with imprisonment and a penalty
          of about 5 lakhs. Some of the other offences are:
        </p>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {penalties.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center bg-white shadow-md hover:shadow-lg rounded-2xl p-6 border border-gray-100 transition-all duration-300"
            >
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <CheckCircle2 className="text-green-600 w-10 h-10" />
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PenaltiesOffencesSection;
