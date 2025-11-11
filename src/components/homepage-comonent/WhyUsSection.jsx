// // src/components/WhyUsSection.jsx
// import React from 'react';
// import {
//   FaAward, FaSmile, FaCertificate, FaShieldAlt, FaUserTie,
//   FaClock, FaBolt, FaUsersCog, FaRupeeSign
// } from 'react-icons/fa';

// const features = [
//   { icon: <FaAward size={20} />, text: "Recognized by Govt. of India" },
//   { icon: <FaSmile size={20} />, text: "1 Lakh+ Happy Customers Across India" },
//   { icon: <FaCertificate size={20} />, text: "ISO Certified" },
//   { icon: <FaShieldAlt size={20} />, text: "Data Security & Trust" },
//   { icon: <FaUserTie size={20} />, text: "Trained & Professional Experts" },
//   { icon: <FaClock size={20} />, text: "On Time Service" },
//   { icon: <FaBolt size={20} />, text: "Super Fast Service" },
//   { icon: <FaUsersCog size={20} />, text: "Quick Response Team" },
//   { icon: <FaRupeeSign size={20} />, text: "Affordable" },
// ];

// const WhyUsSection = () => {
//   return (
//     <section className="py-12 bg-white text-center px-4">
//       <h2 className="text-3xl font-bold mb-4">Why Us?</h2>
//       <div className="h-1 w-16 bg-green-500 mx-auto mb-10 rounded"></div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
//         {features.map((feature, index) => (
//           <div
//             key={index}
//             className="flex items-center rounded-lg shadow-md bg-gradient-to-r from-green-600 to-green-400 text-white"
//           >
//             <div className="bg-orange-500 flex items-center justify-center p-4 rounded-l-full rounded-tr-full w-16 h-16">
//               {feature.icon}
//             </div>
//             <div className="px-4 text-left text-sm sm:text-base font-medium">
//               {feature.text}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default WhyUsSection;

import React from "react";
import {
  FaAward,
  FaSmile,
  FaCertificate,
  FaShieldAlt,
  FaUserTie,
  FaClock,
  FaBolt,
  FaUsersCog,
  FaRupeeSign,
} from "react-icons/fa";

const features = [
  { icon: <FaAward />, text: "Recognized by Govt. of India" },
  { icon: <FaSmile />, text: "1 Lakh+ Happy Customers Across India" },
  { icon: <FaCertificate />, text: "ISO Certified" },
  { icon: <FaShieldAlt />, text: "Data Security & Trust" },
  { icon: <FaUserTie />, text: "Trained & Professional Experts" },
  { icon: <FaClock />, text: "On Time Service" },
  { icon: <FaBolt />, text: "Super Fast Service" },
  { icon: <FaUsersCog />, text: "Quick Response Team" },
  { icon: <FaRupeeSign />, text: "Affordable" },
];

const WhyUsSection = () => {
  return (
    <section className="py-16 bg-white px-4 md:px-10 text-center">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-gray-900 mb-3">Why Us?</h2>
      <div className="h-1 w-16 bg-green-500 mx-auto mb-12 rounded-full"></div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative flex items-center h-20 bg-gradient-to-r from-green-600 to-green-400 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            {/* Orange diamond icon */}
            <div className="absolute left-3 top-4 -translate-y-1-ml-5 rotate-45 bg-orange-500 w-12 h-12 flex items-center justify-center shadow-md transition-transform duration-300 hover:scale-110">
              <div className="-rotate-45 text-white text-lg">{feature.icon}</div>
            </div>

            {/* Text */}
            <div className="pl-20 pr-6 text-left text-white font-medium">
              {feature.text}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUsSection;
