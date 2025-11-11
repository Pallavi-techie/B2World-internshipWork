// import React from "react";
// import ServiceCard from "./ServiceCard";
// import Sidebar from "./Sidebar";
// import { motion } from "framer-motion";

// export default function ServicesSection() {
//   const services = [
//     { title: "Trademark Registration", description: "Get your Trademark registration from anywhere in India and protect your Brand Name/Logo/Slogan." },
//     { title: "Company Registration", description: "Includes all forms of company registration, compliances, PAN, TAN, GST, and address change." },
//     { title: "GST Services", description: "Outsource your GST compliance to Online Legal India." },
//     { title: "Import Export License", description: "Register your import export business under DGFT." },
//     { title: "FSSAI Registration", description: "Get FSSAI certificate & license number for your products." },
//     { title: "ISO Registration", description: "Enhance your business credibility with ISO certification." },
//     { title: "Online Dispute Resolution", description: "Resolve disputes online—fast, fair, and affordable." },
//     { title: "PF & ESIC Return Filing", description: "File PF & ESIC returns seamlessly with full compliance." },
//     { title: "Consumer Dispute", description: "Say goodbye to long legal battles—quick consumer redressal." },
//   ];

//   return (
//     <section className="py-16 bg-gray-50">
//       <motion.h2
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="text-center text-3xl font-bold text-gray-800 mb-3"
//       >
//         Our Services
//       </motion.h2>

//       <motion.div
//         initial={{ opacity: 0, scale: 0.95 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.6 }}
//         className="h-1 w-20 bg-green-500 mx-auto mb-10 rounded"
//       ></motion.div>

//       <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-4 gap-8">
//         {/* Left Services */}
//         <div className="lg:col-span-3">
//           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {services.map((service, index) => (
//               <ServiceCard key={index} {...service} />
//             ))}
//           </div>
//         </div>

//         {/* Right Sidebar */}
//         <Sidebar />
//       </div>
//     </section>
//   );
// }

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import Sidebar from "./Sidebar";

export default function ServicesSection() {
  const services = [
    {
      title: "Trademark Registration",
      description:
        "Get your Trademark registration from anywhere in India and protect your Brand Name/Logo/Slogan.",
      link: "/services/trademark-registration",
    },
    {
      title: "Company Registration",
      description:
        "Includes all forms of company registration, compliances, PAN, TAN, GST, and address change.",
      link: "/services/company-registration",
    },
    {
      title: "GST Services",
      description: "Outsource your GST compliance to Online Legal India.",
      link: "/services/gst-registration",
    },
    {
      title: "Import Export License",
      description: "Register your import export business under DGFT.",
      link: "/services/import-export-code",
    },
    {
      title: "FSSAI Registration",
      description:
        "Get FSSAI certificate & license number for your products.",
      link: "/services/fssai-license",
    },
    {
      title: "ISO Registration",
      description:
        "Enhance your business credibility with ISO certification.",
      link: "/services/iso",
    },
    {
      title: "Online Dispute Resolution",
      description: "Resolve disputes online—fast, fair, and affordable.",
      link: "/services/odr-services",
    },
    {
      title: "PF & ESIC Return Filing",
      description:
        "File PF & ESIC returns seamlessly with full compliance.",
      link: "/services/pf-esic-return-filing",
    },
    {
      title: "Consumer Dispute",
      description:
        "Say goodbye to long legal battles—quick consumer redressal.",
      link: "/services/consumer-dispute-resolution",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 scroll-smooth">
      {/* Section Header */}
      <div className="text-center mb-10 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-3"
        >
          Our <span className="text-green-600">Services</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="h-1 w-20 bg-green-500 mx-auto mb-4 rounded"
        ></motion.div>

        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          We provide comprehensive business registration, compliance, and legal
          support to empower your growth journey.
        </p>
      </div>

      {/* Services & Sidebar */}
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-4 gap-10">
        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:col-span-3"
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="hover:no-underline"
              >
                <ServiceCard {...service} />
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="hidden lg:block"
        >
          <Sidebar />
        </motion.div>
      </div>
    </section>
  );
}

