import React from "react";
import { motion } from "framer-motion";

const logos = [
  "/assets/paytm.webp",
  "/assets/vivact.webp",
  "/assets/midday9999.webp",
  "/assets/muscovy.webp",
  "/assets/google.webp",
];

const BrandCarousel = () => (
  <div className="py-10 bg-gray-50 overflow-hidden">
    <motion.div
      className="flex space-x-12"
      animate={{ x: ["0%", "-100%"] }}
      transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
    >
      {[...logos, ...logos].map((logo, i) => (
        <img key={i} src={logo} alt="brand" className="h-12" />
      ))}
    </motion.div>
  </div>
);

export default BrandCarousel;
