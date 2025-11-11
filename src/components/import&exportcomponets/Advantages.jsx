// import React from "react";
// import ben1 from "../../assets/ben1.webp";
// import ben2 from "../../assets/ben2.webp";
// import ben4 from "../../assets/ben4.webp";
// import ben5 from "../../assets/ben5.webp";
// import ben6 from "../../assets/ben6.webp";
// import img41 from "../../assets/41.webp";

// const items = [
//   {
//     icon: ben1,
//     title: "International Market Reach",
//     text: "Import Export Code helps you in order to take your business to the international market. Not only that, it will increase your revenue as well as growth.",
//   },
//   {
//     icon: ben2,
//     title: "Niryat Bandhu Scheme",
//     text: "The Niryat Bandhu scheme of DGFT Main Objective is to help Entrepreneurs, Exporters, Importers, and students of this subject to learn and provide certification in Export & Import Management.",
//   },
//   {
//     icon: ben4,
//     title: "Reduces the Risk of Illegal Transportation",
//     text: "IEC helps you to get rid of any illegal transportation or fraudulent imports and exports. IEC registration is a centralized registration which helps the officials to supervise and manage transactions in a better manner that are undertaken as part of cross-border business.",
//   },
//   {
//     icon: ben5,
//     title: "Easy Avail Benefit of Govt. Schemes",
//     text: "IEC Code offers great benefits for Import Export businesses. An IEC registered business entity would be qualified to avail benefits or subsidies declared by Customs, Export Promotion Council, and other authorities. Exporters are not required to pay taxes under GST and can claim refunds of the paid tax amount.",
//   },
//   {
//     icon: ben6,
//     title: "Other Benefits",
//     text: "Companies that register for the Import Export Code could make the most of several other benefits offered by customs, the Export Promotion Council, and the Director General of Foreign Trade.",
//   },
// ];

// const Advantages = () => {
//   return (
//     <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
//       {/* Left Section */}
//       <div className="col-span-1 text-center lg:text-left">
//         <h3 className="text-3xl font-bold mb-6 leading-snug">
//           Advantages of IEC for <br /> Import Export Businesses
//         </h3>
//         <img
//           src={img41}
//           alt="Advantages illustration"
//           className="w-full max-w-sm mx-auto lg:mx-0"
//         />
//       </div>

//       {/* Right Section */}
//       <div className="col-span-2 space-y-6">
//         {items.map((item, index) => (
//           <div
//             key={index}
//             className="flex gap-5 items-start p-4 rounded-xl hover:bg-gray-50 transition"
//           >
//             <div className="w-16 h-16 bg-gray-100 flex items-center justify-center rounded-md shadow-sm border border-gray-200">
//               <img
//                 src={item.icon}
//                 alt={item.title}
//                 className="w-14 h-14 object-contain rounded-lg border border-gray-200 bg-white shadow-sm"
//               />
//             </div>
//             <div>
//               <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
//               <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Advantages;

import React from "react";
import ben1 from "../../assets/ben1.webp";
import ben2 from "../../assets/ben2.webp";
import ben4 from "../../assets/ben4.webp";
import ben5 from "../../assets/ben5.webp";
import ben6 from "../../assets/ben6.webp";
import img41 from "../../assets/41.webp";

const items = [
  {
    icon: ben1,
    title: "International Market Reach",
    text: "Import Export Code helps you in order to take your business to the international market. Not only that, it will increase your revenue as well as growth.",
  },
  {
    icon: ben2,
    title: "Niryat Bandhu Scheme",
    text: "The Niryat Bandhu scheme of DGFT Main Objective is to help Entrepreneurs, Exporters, Importers, and students of this subject to learn and provide certification in Export & Import Management.",
  },
  {
    icon: ben4,
    title: "Reduces the Risk of Illegal Transportation",
    text: "IEC helps you to get rid of any illegal transportation or fraudulent imports and exports. IEC registration is a centralized registration which helps the officials to supervise and manage transactions in a better manner that are undertaken as part of cross-border business.",
  },
  {
    icon: ben5,
    title: "Easy Avail Benefit of Govt. Schemes",
    text: "IEC Code offers great benefits for Import Export businesses. An IEC registered business entity would be qualified to avail benefits or subsidies declared by Customs, Export Promotion Council, and other authorities. Exporters are not required to pay taxes under GST and can claim refunds of the paid tax amount.",
  },
  {
    icon: ben6,
    title: "Other Benefits",
    text: "Companies that register for the Import Export Code could make the most of several other benefits offered by customs, the Export Promotion Council, and the Director General of Foreign Trade.",
  },
];

const Advantages = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
      {/* Left Section */}
      <div className="col-span-1 text-center lg:text-left">
        <h3 className="text-3xl font-bold mb-6 leading-snug text-gray-900">
          Advantages of IEC for <br /> Import Export Businesses
        </h3>
        <img
          src={img41}
          alt="Advantages illustration"
          className="w-full max-w-sm mx-auto lg:mx-0"
        />
      </div>

      {/* Right Section */}
      <div className="col-span-2 space-y-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex gap-6 items-center p-2 rounded-md hover:bg-gray-50 transition"
          >
            {/* Icon */}
            <div className="w-16 h-16 flex items-center justify-center rounded-md overflow-hidden border border-gray-300 bg-white shadow-sm">
              <img
                src={item.icon}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text */}
            <div>
              <h4 className="font-semibold text-lg text-gray-900 mb-1">
                {item.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advantages;

