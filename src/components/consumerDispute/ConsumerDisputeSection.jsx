// import React from "react";
// import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// const newsUpdates = [
//   {
//     title: "Mediate, Don’t Litigate:",
//     description:
//       "Prescribing mediation as a mandatory first step for resolution of every allowable dispute will go a long way in promoting mediation.",
//     author: "CJI DY Chandrachud",
//   },
//   {
//     title: "Promoting Mediation Culture:",
//     description:
//       "Mediation helps reduce court burdens and ensures faster resolutions for consumer disputes through digital platforms.",
//     author: "CJI Ramana",
//   },
//   {
//     title: "Digital Dispute Resolution Future:",
//     description:
//       "Online Dispute Resolution is the future of consumer protection and ensures accessibility and fairness to all parties involved.",
//     author: "Justice NV Ramana",
//   },
//   {
//     title: "Digital Dispute Resolution Future:",
//     description:
//       "Online Dispute Resolution is the future of consumer protection and ensures accessibility and fairness to all parties involved.",
//     author: "Justice NV Ramana",
//   },
//   {
//     title: "Digital Dispute Resolution Future:",
//     description:
//       "Online Dispute Resolution is the future of consumer protection and ensures accessibility and fairness to all parties involved.",
//     author: "Justice NV Ramana",
//   },
// ];

// const ConsumerDisputeSection = () => {
//   return (
//     <section className="w-full">
//       {/* Black CTA Banner */}
//       <div className="bg-black text-center text-white py-16 px-6">
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="text-2xl md:text-3xl font-semibold max-w-4xl mx-auto leading-relaxed"
//         >
//           Don’t let consumer disputes stay unresolved. Rely on our Online Dispute
//           Resolution platform to resolve disputes efficiently. Submit your dispute now.
//         </motion.h2>

//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           viewport={{ once: true }}
//           className="mt-8"
//         >
//           <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
//             Get Started
//           </button>
//         </motion.div>
//       </div>

//       {/* News Update Section */}
//       <div className="py-16 bg-white">
//         <div className="text-center mb-10">
//           <h3 className="text-3xl font-semibold text-gray-900">News Update</h3>
//           <div className="mt-2 w-24 h-1 bg-green-500 rounded-full mx-auto"></div>
//         </div>

//         <div className="max-w-6xl mx-auto px-6">
//           <Swiper
//             spaceBetween={30}
//             slidesPerView={1}
//             breakpoints={{
//               768: { slidesPerView: 2 },
//               1024: { slidesPerView: 3 },
//             }}
//             pagination={{ clickable: true }}
//             autoplay={{ delay: 4000, disableOnInteraction: false }}
//             modules={[Pagination, Autoplay]}
//           >
//             {newsUpdates.map((news, index) => (
//               <SwiperSlide key={index}>
//                 <motion.div
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                   className="bg-white border rounded-lg shadow-sm p-6 h-full hover:shadow-md transition-all duration-300"
//                 >
//                   <h4 className="font-semibold text-gray-900 mb-2">
//                     {news.title}
//                   </h4>
//                   <p className="text-gray-600 text-sm leading-relaxed mb-4">
//                     {news.description}
//                   </p>
//                   <p className="text-sm text-gray-800 font-medium">
//                     {news.author}
//                   </p>
//                 </motion.div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ConsumerDisputeSection;

import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const newsUpdates = [
  {
    title: "Mediate, Don’t Litigate:",
    description:
      "Prescribing mediation as a mandatory first step for resolution of every allowable dispute will go a long way in promoting mediation.",
    author: "CJI DY Chandrachud",
  },
  {
    title: "Promoting Mediation Culture:",
    description:
      "Mediation helps reduce court burdens and ensures faster resolutions for consumer disputes through digital platforms.",
    author: "CJI Ramana",
  },
  {
    title: "Digital Dispute Resolution Future:",
    description:
      "Online Dispute Resolution is the future of consumer protection and ensures accessibility and fairness to all parties involved.",
    author: "Justice NV Ramana",
  },
   {
    title: "Digital Dispute Resolution Future:",
    description:
      "Online Dispute Resolution is the future of consumer protection and ensures accessibility and fairness to all parties involved.",
    author: "Justice NV Ramana",
  },
   {
    title: "Digital Dispute Resolution Future:",
    description:
      "Online Dispute Resolution is the future of consumer protection and ensures accessibility and fairness to all parties involved.",
    author: "Justice NV Ramana",
  },
   {
    title: "Digital Dispute Resolution Future:",
    description:
      "Online Dispute Resolution is the future of consumer protection and ensures accessibility and fairness to all parties involved.",
    author: "Justice NV Ramana",
  },
];

const ConsumerDisputeSection = () => {
  return (
    <section className="w-full">
      {/* CTA Banner */}
      <div className="bg-black text-center text-white py-16 px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-semibold max-w-4xl mx-auto leading-relaxed"
        >
          Don’t let consumer disputes stay unresolved. Rely on our Online Dispute
          Resolution platform to resolve disputes efficiently. Submit your dispute now.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
            Get Started
          </button>
        </motion.div>
      </div>

      {/* News Update Section */}
      <div className="py-16 bg-white">
        <div className="text-center mb-10">
          <h3 className="text-3xl font-semibold text-gray-900">News Update</h3>
          <div className="mt-2 w-24 h-1 bg-green-500 rounded-full mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            modules={[Pagination, Autoplay]}
          >
            {newsUpdates.map((news, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white border rounded-lg shadow-sm p-6 h-full hover:shadow-md transition-all duration-300"
                >
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {news.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {news.description}
                  </p>
                  <p className="text-sm text-gray-800 font-medium">
                    {news.author}
                  </p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Arbitrators / Mediators Section */}
      <div className="bg-gray-100">
        {/* Title */}
        <div className="bg-[#1c1c1c] text-[#fbbf24] font-semibold py-3 px-6 text-lg">
          Our Team Of Arbitrators / Mediators Includes
        </div>

        {/* List */}
        <div className="bg-gradient-to-br from-gray-100 to-gray-200 px-10 py-6">
          <ul className="list-disc list-inside space-y-3 text-gray-800 font-medium">
            <li>Former Judge, Hon'ble High Court</li>
            <li>Former Registrar NCLT and DRT, Govt. of India</li>
            <li>IIAM Certified & Member of APCAM</li>
          </ul>
        </div>

        {/* Disclaimer */}
        <div className="bg-[#fbbf24] text-sm text-gray-900 py-4 px-8">
          <p className="font-semibold">Disclaimer:</p>
          <p>
            Our Mediators / Arbitrators Are Professionals Who Act Strictly In A Neutral,
            Private & Non-judicial Capacity.
          </p>
        </div>

        {/* Footer Bar */}
        <div className="bg-[#2c3338] text-center text-[#fbbf24] font-semibold py-4 text-lg">
          Online Dispute Resolution
        </div>
      </div>
    </section>
  );
};

export default ConsumerDisputeSection;
