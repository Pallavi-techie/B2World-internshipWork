import React from "react";
import { FaMedal, FaUserAlt, FaShieldAlt, FaCalendarAlt, FaBolt, FaStar } from "react-icons/fa";
import { AiOutlineCheckCircle } from "react-icons/ai";

const features = [
  { icon: <FaMedal className="text-green-600 text-2xl" />, text: "Recognized by Govt. of India" },
  { icon: <FaUserAlt className="text-green-600 text-2xl" />, text: "1 Lakh+ Happy Customers Across India" },
  { icon: <AiOutlineCheckCircle className="text-green-600 text-2xl" />, text: "ISO 9001: 2015 Certified" },
  { icon: <FaShieldAlt className="text-orange-500 text-2xl" />, text: "Personal Data Security & Trust" },
  { icon: <FaCalendarAlt className="text-orange-500 text-2xl" />, text: "10+ Years Experienced CA/CS" },
  { icon: <AiOutlineCheckCircle className="text-orange-500 text-2xl" />, text: "Quick Services Assured" },
  { icon: <FaBolt className="text-orange-500 text-2xl" />, text: "Quick Response Team" },
  { icon: <FaStar className="text-green-600 text-2xl" />, text: "Excellent Reviews & Ratings" },
];

export default function WhyUs() {
  return (
    <section className="py-12 bg-white text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-10 relative inline-block">
        Why Us?
        <span className="block w-16 h-[3px] bg-green-600 mx-auto mt-2 rounded"></span>
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-y-8 gap-x-6 text-left px-6">
        {features.map((item, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div>{item.icon}</div>
            <p className="text-gray-700 font-medium text-sm">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
