import React from "react";
import { motion } from "framer-motion";

const news = [
  { logo: "TEDx", text: "From Rs. 2000 Salary to Multi-Crore Turnover Company" },
  { logo: "ZEE NEWS", text: "Meet Rajesh Kewat, The Small Town Entrepreneur" },
  { logo: "FORBES", text: "Featured in Forbes India Magazine - Showstoppers 2022-23" },
  { logo: "mid-day", text: "Businessman of the Year Award at Brands Impact NFA 2022" },
  { logo: "ASIA ONE", text: "A movie-like story of resilience and success" },
];

const NewsCoverage = () => {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">
        News <span className="text-teal-600">Covered by</span>
      </h2>
      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 px-8">
        {news.map((n, i) => (
          <motion.div
            key={i}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="font-bold text-lg text-gray-800 mb-2">{n.logo}</h3>
            <p className="text-gray-600 text-sm">{n.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default NewsCoverage;
