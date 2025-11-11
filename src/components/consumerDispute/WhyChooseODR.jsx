import React from "react";
import { motion } from "framer-motion";
import { Clock, IndianRupee, Shield, Calendar, Users } from "lucide-react";

const reasons = [
  {
    icon: <Clock className="w-10 h-10 text-orange-500" />,
    title: "Efficiency",
    description: "Resolve disputes faster than traditional court litigation.",
  },
  {
    icon: <IndianRupee className="w-10 h-10 text-orange-500" />,
    title: "Cost-Effective",
    description: "Significantly lower expenses compared to court cases.",
  },
  {
    icon: <Shield className="w-10 h-10 text-orange-500" />,
    title: "Confidentiality",
    description:
      "All your sensitive data and information will remain secure.",
  },
  {
    icon: <Calendar className="w-10 h-10 text-orange-500" />,
    title: "Flexibility",
    description: "Easy to schedule and less formal procedures.",
  },
  {
    icon: <Users className="w-10 h-10 text-orange-500" />,
    title: "Expert Mediators",
    description:
      "We have a team of mediators skilled in facilitating fruitful resolutions.",
  },
];

const WhyChooseODR = () => {
  return (
    <section className="bg-[#EAF3FB] py-16 px-6 md:px-20 text-center">
      <motion.h2
        className="text-2xl md:text-3xl font-semibold text-gray-800 mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Why Choose Online Dispute Resolution?
      </motion.h2>

      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-10 justify-center items-start max-w-6xl mx-auto">
        {reasons.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center space-y-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="bg-white rounded-full shadow-md p-4 flex justify-center items-center">
              {item.icon}
            </div>
            <h3 className="font-semibold text-gray-800 text-lg">{item.title}</h3>
            <p className="text-gray-600 text-sm max-w-xs">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseODR;
