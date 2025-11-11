import React from "react";
import { motion } from "framer-motion";
import { Clock, DollarSign, MapPin, UserCheck } from "lucide-react";

const advantages = [
  {
    icon: <Clock className="w-8 h-8 text-green-600" />,
    title: "Time saving",
    description: "Filing online consumer Dispute will save your time",
  },
  {
    icon: <DollarSign className="w-8 h-8 text-green-600" />,
    title: "Cost effective",
    description:
      "Dispute resolution offers a more cost-effective and time-efficient alternative to traditional litigation.",
  },
  {
    icon: <MapPin className="w-8 h-8 text-green-600" />,
    title: "Dispute Anywhere",
    description:
      "It can be done from any location i.e. home, office or vacation trip",
  },
  {
    icon: <UserCheck className="w-8 h-8 text-green-600" />,
    title: "Expert Advice",
    description:
      "You will receive assistance from Consumer Dispute experts of Online Legal India.",
  },
];

const steps = [
  { id: 1, title: "Fill the form" },
  { id: 2, title: "Get a call from Expert" },
  { id: 3, title: "Case will be analysed by Expert" },
  { id: 4, title: "Case will be assigned to the professional" },
];

const AdvantagesAndProcess = () => {
  return (
    <div className="w-full bg-white">
      {/* ---------- Our Advantages Section ---------- */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Our Advantages
        </h2>
        <div className="w-16 h-1 bg-green-500 mx-auto mb-12 rounded"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {advantages.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="flex items-start space-x-4"
            >
              <div className="bg-gray-100 p-4 rounded-full shadow-sm">
                {item.icon}
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-800 mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------- How We Work Section ---------- */}
      <section className="bg-gray-100 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
          How we work?
        </h2>
        <div className="w-16 h-1 bg-green-500 mx-auto mb-12 rounded"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-green-700 text-white rounded-2xl shadow-lg p-6 flex flex-col justify-between text-center relative overflow-hidden"
            >
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <span className="absolute text-[120px] font-extrabold text-green-900 opacity-20 bottom-2 right-6">
                {step.id}
              </span>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AdvantagesAndProcess;
