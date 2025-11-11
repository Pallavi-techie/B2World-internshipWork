// import React from "react";
// import { motion } from "framer-motion";
// import heroImage from "../../assets/consumer-dispute-hero.webp"; // place your image in src/assets folder

// const HeroSection = () => {
//   return (
//     <section className="relative w-full bg-gradient-to-r from-[#053B50] to-[#032E3C] text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 md:py-20 overflow-hidden">
      
//       {/* Left Content */}
//       <motion.div
//         className="max-w-xl space-y-4"
//         initial={{ opacity: 0, x: -40 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <h1 className="text-4xl md:text-5xl font-bold text-orange-400 leading-tight">
//           Got a Consumer Dispute?
//         </h1>
//         <p className="text-lg md:text-xl text-gray-200">
//           Choose Online Dispute Resolution
//         </p>
//       </motion.div>

//       {/* Right Image */}
//       <motion.div
//         className="mt-8 md:mt-0"
//         initial={{ opacity: 0, x: 40 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8, delay: 0.2 }}
//       >
//         <div className="relative rounded-full bg-[#FBD2A2] p-2 md:p-4 shadow-lg overflow-hidden">
//           <img
//             src={heroImage}
//             alt="Consumer dispute"
//             className="w-[220px] md:w-[300px] rounded-full object-cover"
//           />
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default HeroSection;

import React from "react";
import { motion } from "framer-motion";
import heroImage from "../../assets/consumer-dispute-hero.webp"; // make sure image exists

const HeroSection = () => {
  return (
    <section className="relative w-full bg-gradient-to-r from-[#053B50] to-[#032E3C] text-white flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-10 py-16 md:py-24 overflow-hidden">
      
      {/* Left Content */}
      <motion.div
        className="max-w-lg text-center md:text-left space-y-4"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-orange-400 leading-tight">
          Got a Consumer Dispute?
        </h1>
        <p className="text-lg md:text-xl text-gray-200">
          Choose <span className="text-orange-300 font-semibold">Online Dispute Resolution</span> for faster, fair, and simple solutions.
        </p>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="relative rounded-full bg-[#FBD2A2] p-2 md:p-4 shadow-2xl overflow-hidden">
          <img
            src={heroImage}
            alt="Consumer dispute"
            className="w-[200px] md:w-[280px] rounded-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
