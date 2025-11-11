import React from "react";
import { motion } from "framer-motion";

const ServiceCard = ({ title, description, image, link }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -5 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="bg-white shadow-md rounded-2xl p-5 border border-gray-100 hover:shadow-xl flex flex-col transition-all duration-300"
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-36 object-cover rounded-lg mb-4"
        />
      )}
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <div className="h-1 w-12 bg-orange-400 mb-3 rounded"></div>
      <p className="text-gray-600 flex-grow text-sm leading-relaxed">
        {description}
      </p>
      <a
        href={link}
        className="text-blue-600 text-sm font-medium mt-4 hover:underline"
      >
        Click Here
      </a>
    </motion.div>
  );
};

export default ServiceCard;
