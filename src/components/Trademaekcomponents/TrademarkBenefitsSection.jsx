import React from "react";
import { FaCheckCircle, FaGlobe, FaGavel, FaTrademark, FaCubes, FaHandshake, FaBalanceScale } from "react-icons/fa";
import { motion } from "framer-motion";

const TrademarkBenefitsSection = () => {
  const benefits = [
    {
      icon: <FaTrademark className="text-green-600 text-4xl mb-3" />,
      title: "Exclusive Right",
      desc: "The registration of Trademark gives you the exclusive right to use it and protect your brand identity and logo by using only your brand name.",
    },
    {
      icon: <FaBalanceScale className="text-green-600 text-4xl mb-3" />,
      title: "A Legal Protection",
      desc: "In case any doubt, your trademark is being copied by anyone, the law enables you to take legal actions against them if you have registered your logo, brand name or slogan.",
    },
    {
      icon: <FaCubes className="text-green-600 text-4xl mb-3" />,
      title: "Differentiates Product",
      desc: "Registering a trademark ensures that competitors will not use a similar business name or logo, helping you stand out.",
    },
    {
      icon: <FaGavel className="text-green-600 text-4xl mb-3" />,
      title: "Creation of Asset",
      desc: "Registered trademarks act as legal assets which can be sold, assigned, franchised, or commercially contracted.",
    },
    {
      icon: <FaGlobe className="text-green-600 text-4xl mb-3" />,
      title: "Global Trademark Registration",
      desc: "For any person willing to expand outside India, the trademark registered in India can be used as a base when filing in other countries as well.",
    },
    {
      icon: <FaHandshake className="text-green-600 text-4xl mb-3" />,
      title: "Build Trust and Goodwill",
      desc: "It helps in creating permanent customers who are loyal and always opt for the same brand.",
    },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-20 text-gray-800">
      {/* Why Online Legal India */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          Why Online Legal India?
        </h2>
        <ul className="text-left max-w-3xl mx-auto space-y-3 text-lg text-gray-700">
          {[
            "We conduct a thorough research regarding your TM availability from the Govt.",
            "Authorization letter is prepared from our side in order to file Trademark registration on your behalf.",
            "We offer the best services to make sure that our client does not have to face any responsibility of filing Trademark.",
            "You will be guided on the classes you have to apply under and we are the one to guide you.",
            "We will provide assistance regarding form fill up with the Registrar.",
            "You will be receiving updates constantly from our side till the registration is completed.",
            "We assure you to protect your brand of products or services.",
          ].map((item, index) => (
            <motion.li
              key={index}
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <FaCheckCircle className="text-green-600 mt-1" />
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Advantages of Registering Trademarks */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Advantages of Registering Trademarks
        </h2>
        <div className="w-20 h-1 bg-green-600 mx-auto mb-12 rounded"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-2xl shadow-md border hover:shadow-lg transition duration-300 bg-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="flex flex-col items-center text-center">
                {item.icon}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-base">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrademarkBenefitsSection;
