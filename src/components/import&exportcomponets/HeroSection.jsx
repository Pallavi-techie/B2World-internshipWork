


// import React from "react";
// import bgImage from "../../assets/import-export-code.webp";

// const HeroSection = () => {
//   return (
//     <section className="relative bg-gradient-to-r from-white to-blue-50 overflow-hidden">
//       <div
//         className="absolute inset-0"
//         style={{
//           backgroundImage:
//              `url(${bgImage})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           opacity: 1,
//         }}
//       ></div>

//       <div className="absolute inset-0 bg-white/70"></div>

//       <div className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 py-20 md:py-28">
//         <div className="w-full md:w-1/2 flex justify-center">
//           <img
//             src="/assets/hero-ceo.jpg"
//             alt="Man pointing"
//             className="max-w-md w-full object-contain drop-shadow-2xl"
//           />
//         </div>

//         <div className="w-full md:w-1/2 text-center md:text-left space-y-5">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
//             <span className="text-green-600">Online</span>{" "}
//             <span className="text-blue-900">Legal India</span>
//           </h2>
//           <p className="text-gray-600 text-sm">
//             ODR • TM • Registrations & Compliance
//           </p>
//           <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
//             Are you looking to apply for
//           </h1>
//           <h1 className="text-4xl md:text-5xl font-bold text-white bg-red-600 px-4 py-2 inline-block rounded-md shadow-lg">
//             IMPORT EXPORT CODE ?
//           </h1>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;



import React from "react";
import bgImage from "../../assets/import-export-code.webp"; // background image

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 brightness-110 contrast-110" // enhances image visibility
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* 🔆 Light overlay - just 5% white opacity */}
      <div className="absolute inset-0 bg-white/5"></div>

      {/* Content */}
      <div className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 py-16 md:py-24">
        {/* Left Section - Man Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/assets/hero-ceo.jpg" // image from public folder
            alt="Pointing man"
            className="max-w-md w-full object-contain drop-shadow-2xl"
          />
        </div>

        {/* Right Section - Text */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-5 text-gray-900 drop-shadow-[0_2px_2px_rgba(255,255,255,0.8)]">
          {/* Logo */}
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-green-700">Online</span>{" "}
            <span className="text-blue-900">Legal India</span>
          </h2>

          <p className="text-sm text-gray-700">
            ODR • TM • Registrations & Compliance
          </p>

          {/* Main Heading */}
          <h1 className="text-2xl md:text-3xl font-semibold">
            Are you looking to apply for
          </h1>

          {/* Highlight Section */}
          <h1 className="text-4xl md:text-5xl font-bold text-white bg-red-600 px-4 py-2 inline-block rounded-md shadow-lg">
            IMPORT EXPORT CODE ?
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
