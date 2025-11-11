import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Slingomacha Singh",
      text: "In my view, I believe that the ONLINE LEGAL INDIA SERVICES and their dealing with people would be fully satisfied...",
    },
    {
      name: "Amit Kumar",
      text: "Great service, fast response, and professional support throughout my company registration.",
    },
    {
      name: "Neha Sharma",
      text: "Smooth process and very polite team. Highly recommend their legal services!",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    adaptiveHeight: true,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white shadow-md rounded-2xl p-5 mt-6"
    >
      <Slider {...settings}>
        {testimonials.map((t, i) => (
          <div key={i}>
            <p className="italic text-gray-700 mb-4 text-sm leading-relaxed">
              "{t.text}"
            </p>
            <h4 className="font-semibold">{t.name}</h4>
            <div className="flex text-yellow-400 mt-2 text-lg">★★★★★</div>
          </div>
        ))}
      </Slider>
    </motion.div>
  );
}
