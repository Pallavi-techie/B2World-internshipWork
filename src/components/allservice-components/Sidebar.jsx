// import React from "react";
// import Testimonials from "./Testimonials";
// import { FaPhoneAlt } from "react-icons/fa";
// import { motion } from "framer-motion";

// export default function Sidebar() {
//   return (
//     <div className="space-y-6">
//       {/* Green Help Box */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         viewport={{ once: true }}
//         className="bg-green-100 rounded-2xl p-6 text-center shadow-md border border-green-200"
//       >
//         <h3 className="font-bold text-lg mb-2 text-green-800">
//           How We Can Help You?
//         </h3>
//         <p className="text-sm text-gray-700 mb-3">
//           Connect with our experts to get more details about your selected service.
//         </p>
//         <button className="bg-green-600 text-white font-medium px-5 py-2 rounded-full flex items-center gap-2 mx-auto hover:bg-green-700 transition-all duration-300">
//           <FaPhoneAlt /> Contact Now
//         </button>
//       </motion.div>

//       {/* Testimonials */}
//       <Testimonials />

//       {/* Stats Box */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.2 }}
//         viewport={{ once: true }}
//         className="bg-white rounded-2xl shadow-md p-5 space-y-4 border border-gray-100"
//       >
//         <div className="bg-green-600 text-white rounded-lg py-3 px-4 text-center shadow-sm">
//           <h4 className="text-xl font-bold">1 Lakh+</h4>
//           <p className="text-sm">Happy Customers</p>
//         </div>

//         <div className="bg-green-600 text-white rounded-lg py-3 px-4 text-center shadow-sm">
//           <h4 className="text-xl font-bold">4.8 ★</h4>
//           <p className="text-sm">Google Reviews</p>
//         </div>
//       </motion.div>
//     </div>
//   );
// }
import React from "react";
import Testimonials from "./Testimonials";
import { FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Sidebar() {
  return (
    <div className="space-y-8">
      {/* Help Box */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 text-center shadow-lg border border-green-200 relative overflow-hidden"
      >
        {/* Decorative Shape */}
        <div className="absolute top-0 right-0 bg-green-500/10 w-24 h-24 rounded-bl-[100%]" />
        <h3 className="font-bold text-xl mb-2 text-green-800">
          How We Can Help You?
        </h3>
        <p className="text-sm text-gray-700 mb-4 leading-relaxed">
          Connect with our experts to get more details about your selected
          service.
        </p>
        <button className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-2.5 rounded-full flex items-center justify-center gap-2 mx-auto transition-all duration-300 shadow-md hover:shadow-lg">
          <FaPhoneAlt className="text-white" /> Contact Now
        </button>
      </motion.div>

      {/* Testimonials */}
      <Testimonials />

      {/* Stats Box */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-white rounded-2xl shadow-lg p-6 space-y-5 border border-gray-100"
      >
        <div className="bg-green-600 text-white rounded-xl py-4 px-6 text-center shadow-sm hover:shadow-md transition-all duration-300">
          <h4 className="text-2xl font-extrabold tracking-wide">1 Lakh+</h4>
          <p className="text-sm opacity-90">Happy Customers</p>
        </div>

        <div className="bg-green-600 text-white rounded-xl py-4 px-6 text-center shadow-sm hover:shadow-md transition-all duration-300">
          <h4 className="text-2xl font-extrabold tracking-wide">4.8 ★</h4>
          <p className="text-sm opacity-90">Google Reviews</p>
        </div>
      </motion.div>
    </div>
  );
}
