// import React from "react";
// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
// import { Helmet } from "react-helmet";

// const ContactUs = () => {
//   return (
//     <div className="bg-gray-50 min-h-screen font-sans">
//       <Helmet>
//         <title>Contact Us | Online Legal India</title>
//       </Helmet>

//       {/* Header Section */}
//       <section className="bg-gray-900 text-white py-20 relative">
//         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center opacity-40"></div>
//         <div className="relative z-10 container mx-auto text-center">
//           <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
//           <p className="text-lg text-gray-200">We’re here to help you anytime</p>
//         </div>
//       </section>

//       {/* Contact Info */}
//       <section className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-8">
//         {/* Registered Office */}
//         <div className="bg-white shadow-lg p-8 rounded-lg border-t-4 border-orange-500">
//           <h2 className="text-xl font-semibold text-orange-600 mb-4">
//             Registered Office
//           </h2>
//           <div className="space-y-4 text-gray-700">
//             <p className="flex items-start">
//               <FaMapMarkerAlt className="text-orange-500 mt-1 mr-2" />
//               8th Floor, Kariwala Towers, J1-5, EP Block, Salt Lake Sec-V,
//               Kolkata-700091, West Bengal, India
//             </p>
//             <p className="flex items-center">
//               <FaPhoneAlt className="text-orange-500 mr-2" /> 08069029400
//             </p>
//             <p className="flex items-center">
//               <FaEnvelope className="text-orange-500 mr-2" />
//               <a href="mailto:info@onlinelegalindia.com" className="hover:underline">
//                 info@onlinelegalindia.com
//               </a>
//             </p>
//           </div>
//         </div>

//         {/* Contact Center */}
//         <div className="bg-white shadow-lg p-8 rounded-lg border-t-4 border-orange-500">
//           <h2 className="text-xl font-semibold text-orange-600 mb-4">
//             Contact Center
//           </h2>
//           <div className="space-y-4 text-gray-700">
//             <p className="flex items-start">
//               <FaMapMarkerAlt className="text-orange-500 mt-1 mr-2" />
//               Unit No A-09, Ground Floor, Tower A, Bhutani Cyber Park, Sec-62,
//               Noida, Gautam Buddha Nagar, Noida, Uttar Pradesh, India, 201301
//             </p>
//             <p className="flex items-center">
//               <FaPhoneAlt className="text-orange-500 mr-2" /> 08069029400
//             </p>
//             <p className="flex items-center">
//               <FaEnvelope className="text-orange-500 mr-2" />
//               <a href="mailto:info@onlinelegalindia.com" className="hover:underline">
//                 info@onlinelegalindia.com
//               </a>
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Corporate Contact Section */}
//       <section className="bg-gray-100 py-10">
//         <div className="container mx-auto text-center max-w-2xl">
//           <h3 className="font-semibold text-lg mb-2">
//             For Corporate Tie-ups, Media & Government
//           </h3>
//           <p className="text-gray-700 mb-4">
//             Please note that we will not respond to any emails sent to this
//             address other than those from the above-mentioned parties.
//           </p>
//           <a
//             href="mailto:cmg@onlinelegalindia.com"
//             className="text-orange-600 font-medium hover:underline"
//           >
//             cmg@onlinelegalindia.com
//           </a>
//         </div>
//       </section>

//       {/* Map Section */}
//       <section className="w-full h-[400px] mt-10">
//         <iframe
//           title="Online Legal India Location"
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.421721601276!2d88.42624987501934!3d22.585935379487302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275797c0ea7df%3A0x14635abf3fdf65c!2sOnline%20Legal%20India!5e0!3m2!1sen!2sin!4v1707580000000!5m2!1sen!2sin"
//           className="w-full h-full border-0"
//           allowFullScreen=""
//           loading="lazy"
//         ></iframe>
//       </section>

//       {/* Footer */}
//       <footer className="text-center py-8 bg-gray-900 text-gray-300 mt-10">
//         <p>© {new Date().getFullYear()} Online Legal India. All Rights Reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default ContactUs;


import React from "react";
import { Helmet } from "react-helmet";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHeadphones,
  FaStar,
  FaCommentDots,
} from "react-icons/fa";
import { motion } from "framer-motion";
import HeaderNavbar from "../components/pagesCommonComponents/HeaderNavbar";
import Footer from "../components/pagesCommonComponents/Footer";

const ContactUs = () => {
  return (
    <>
      <HeaderNavbar />
      <div className="bg-[#f9fafb] font-sans overflow-hidden">
        <Helmet>
          <title>Contact Us | Online Legal India</title>
        </Helmet>

        {/* Hero Section */}
        <section className="relative bg-gray-900 text-white py-24">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center opacity-40"></div>
          <div className="relative z-10 container mx-auto text-center px-4">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-3 tracking-wide"
            >
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-gray-200"
            >
              We’re here to help you anytime
            </motion.p>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="container mx-auto px-6 md:px-12 py-20 grid md:grid-cols-2 gap-10">
          {/* Registered Office */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-white shadow-lg hover:shadow-2xl rounded-2xl p-10 border-t-4 border-orange-500 transition-all duration-300"
          >
            <h2 className="text-2xl font-semibold text-orange-600 mb-6">
              Registered Office
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p className="flex items-start">
                <FaMapMarkerAlt className="text-orange-500 mt-1 mr-3" />
                8th Floor, Kariwala Towers, J1-5, EP Block, Salt Lake Sec-V,
                Kolkata-700091, West Bengal, India
              </p>
              <p className="flex items-center">
                <FaPhoneAlt className="text-orange-500 mr-3" /> 08069029400
              </p>
              <p className="flex items-center">
                <FaEnvelope className="text-orange-500 mr-3" />
                <a
                  href="mailto:info@onlinelegalindia.com"
                  className="hover:text-orange-600 transition-colors"
                >
                  info@onlinelegalindia.com
                </a>
              </p>
            </div>
          </motion.div>

          {/* Contact Center */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-white shadow-lg hover:shadow-2xl rounded-2xl p-10 border-t-4 border-orange-500 transition-all duration-300"
          >
            <h2 className="text-2xl font-semibold text-orange-600 mb-6">
              Contact Center
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p className="flex items-start">
                <FaMapMarkerAlt className="text-orange-500 mt-1 mr-3" />
                Unit No A-09, Ground Floor, Tower A, Bhutani Cyber Park, Sec-62,
                Noida, Gautam Buddha Nagar, Uttar Pradesh, 201301
              </p>
              <p className="flex items-center">
                <FaPhoneAlt className="text-orange-500 mr-3" /> 08069029400
              </p>
              <p className="flex items-center">
                <FaEnvelope className="text-orange-500 mr-3" />
                <a
                  href="mailto:info@onlinelegalindia.com"
                  className="hover:text-orange-600 transition-colors"
                >
                  info@onlinelegalindia.com
                </a>
              </p>
            </div>
          </motion.div>
        </section>

        {/* Corporate Tie-Up Section */}
        <section className="bg-gradient-to-b from-gray-100 to-gray-200 py-14">
          <div className="container mx-auto text-center max-w-2xl">
            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-800">
              For Corporate Tie-ups, Media & Government
            </h3>
            <p className="text-gray-600 mb-5">
              Please note that we will not respond to any emails sent to this
              address other than those from the above-mentioned parties.
            </p>
            <a
              href="mailto:cmg@onlinelegalindia.com"
              className="text-orange-600 font-medium hover:underline text-lg"
            >
              cmg@onlinelegalindia.com
            </a>
          </div>
        </section>

        {/* Google Map */}
        <div className="w-full h-[400px] mt-10 shadow-inner">
          <iframe
            title="Online Legal India Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.421721601276!2d88.42624987501934!3d22.585935379487302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275797c0ea7df%3A0x14635abf3fdf65c!2sOnline%20Legal%20India!5e0!3m2!1sen!2sin!4v1707580000000!5m2!1sen!2sin"
            className="w-full h-full border-0 rounded-none"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Bottom Action Icons */}
        <section className="bg-gray-50 py-12 border-t border-gray-200">
          <div className="flex flex-wrap justify-center items-center gap-12 text-center">
            {[
              {
                icon: <FaPhoneAlt className="text-yellow-500 text-3xl mb-2" />,
                label: "Call Back Request",
              },
              {
                icon: <FaHeadphones className="text-blue-500 text-3xl mb-2" />,
                label: "Complaint",
              },
              {
                icon: <FaStar className="text-green-600 text-3xl mb-2" />,
                label: "Feedback",
              },
              {
                icon: <FaCommentDots className="text-teal-600 text-3xl mb-2" />,
                label: "Suggestion",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                className="cursor-pointer"
              >
                {item.icon}
                <span className="font-medium text-gray-800">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ContactUs;

