// import React from "react";

// const PartnersRecognitionSection = () => {
//   const associated = [
//     { name: "Tata", logo: "/assets/tata.png" },
//     { name: "Paytm", logo: "/assets/paytm.png" },
//     { name: "ICICI Bank", logo: "/assets/icici.png" },
//   ];

//   const appreciated = [
//     { name: "Zee News", logo: "/assets/zeenews.png" },
//     { name: "TEDx", logo: "/assets/tedx.png" },
//     { name: "Asia One", logo: "/assets/asiaone.png" },
//   ];

//   const certified = [
//     { name: "ISO Certified", logo: "/assets/iso.png" },
//   ];

//   const renderLogos = (logos) => (
//     <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-6">
//       {logos.map((item, index) => (
//         <div
//           key={index}
//           className="bg-white border rounded-xl shadow-sm hover:shadow-md transition-all duration-300 w-40 h-24 flex justify-center items-center p-4"
//         >
//           <img
//             src={item.logo}
//             alt={item.name}
//             className="max-h-16 object-contain"
//           />
//         </div>
//       ))}
//     </div>
//   );

//   return (
//     <section className="bg-gray-50 py-12 text-center">
//       {/* Associated Section */}
//       <div>
//         <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
//           Associated with
//         </h2>
//         <div className="w-16 h-1 bg-green-500 mx-auto mt-2 rounded-full" />
//         {renderLogos(associated)}
//       </div>

//       {/* Appreciated Section */}
//       <div className="mt-16">
//         <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
//           Appreciated / Awarded by
//         </h2>
//         <div className="w-16 h-1 bg-green-500 mx-auto mt-2 rounded-full" />
//         {renderLogos(appreciated)}
//       </div>

//       {/* Certified Section */}
//       <div className="mt-16">
//         <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
//           Certified / Recognized by
//         </h2>
//         <div className="w-16 h-1 bg-green-500 mx-auto mt-2 rounded-full" />
//         {renderLogos(certified)}
//       </div>
//     </section>
//   );
// };

// export default PartnersRecognitionSection;

import React from "react";

// Importing all logos from your assets folder
import tata from "../../assets/associated-tata.webp";
import paytm from "../../assets/paytm.webp";
import icici from "../../assets/associated-icici.webp";
import zeenews from "../../assets/zeenews.webp";
import tedx from "../../assets/Ted-x.webp";
import asiaone from "../../assets/associated-asia-one.webp";
import iso from "../../assets/oli-fic-iso-certified.webp";

const PartnersRecognitionSection = () => {
  const associated = [
    { name: "Tata", logo: tata },
    { name: "Paytm", logo: paytm },
    { name: "ICICI Bank", logo: icici },
  ];

  const appreciated = [
    { name: "Zee News", logo: zeenews },
    { name: "TEDx", logo: tedx },
    { name: "Asia One", logo: asiaone },
  ];

  const certified = [
    { name: "ISO Certified", logo: iso },
  ];

  const renderLogos = (logos) => (
    <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-6">
      {logos.map((item, index) => (
        <div
          key={index}
          className="bg-white border rounded-xl shadow-sm hover:shadow-md transition-all duration-300 w-40 h-24 flex justify-center items-center p-4"
        >
          <img
            src={item.logo}
            alt={item.name}
            className="max-h-16 object-contain"
          />
        </div>
      ))}
    </div>
  );

  return (
    <section className="bg-gray-50 py-12 text-center">
      {/* Associated Section */}
      <div>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
          Associated with
        </h2>
        <div className="w-16 h-1 bg-green-500 mx-auto mt-2 rounded-full" />
        {renderLogos(associated)}
      </div>

      {/* Appreciated Section */}
      <div className="mt-16">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
          Appreciated / Awarded by
        </h2>
        <div className="w-16 h-1 bg-green-500 mx-auto mt-2 rounded-full" />
        {renderLogos(appreciated)}
      </div>

      {/* Certified Section */}
      <div className="mt-16">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
          Certified / Recognized by
        </h2>
        <div className="w-16 h-1 bg-green-500 mx-auto mt-2 rounded-full" />
        {renderLogos(certified)}
      </div>
    </section>
  );
};

export default PartnersRecognitionSection;
