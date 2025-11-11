import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";

const isoPackagesData = [
  {
    title: "ISO (Q.M.S) 9001:2015",
    iafPrice: "₹10,000 (IAF)",
    nonIafPrice: "₹6,000 (Non-IAF)",
    gst: "(18% GST Excluded)",
  },
  {
    title: "ISO 14001:2015 E.M.S",
    iafPrice: "₹14,000 (IAF)",
    nonIafPrice: "₹9,500 (Non-IAF)",
    gst: "(18% GST Excluded)",
  },
  {
    title: "ISO 45001:2018 OH&S M.S",
    iafPrice: "₹12,000 (IAF)",
    nonIafPrice: "₹9,500 (Non-IAF)",
    gst: "(18% GST Excluded)",
  },
  {
    title: "ISO 22000:2018 F.S.M.S",
    iafPrice: "₹12,000 (IAF)",
    nonIafPrice: "₹9,500 (Non-IAF)",
    gst: "(18% GST Excluded)",
  },
  {
    title: "ISO 29993:2017",
    iafPrice: "₹14,000",
    gst: "(18% GST Excluded)",
  },
  {
    title: "ISO 21001:2018",
    iafPrice: "₹14,000",
    gst: "(18% GST Excluded)",
  },
  {
    title: "ISO 27001:2022",
    iafPrice: "₹17,000",
    gst: "(18% GST Excluded)",
  },
  {
    title: "ISO 7101:2023",
    iafPrice: "₹15,000",
    gst: "(18% GST Excluded)",
  },
  {
    title: "CMMI",
    iafPrice: "₹16,500",
    gst: "(18% GST Excluded)",
  },
  {
    title: "WHO - GMP Certification Services",
    iafPrice: "₹14,500",
    gst: "(18% GST Excluded)",
  },
  {
    title: "CE Marking Certification",
    iafPrice: "₹14,000",
    gst: "(18% GST Excluded)",
  },
  {
    title: "SA 8000",
    iafPrice: "₹17,000",
    gst: "(18% GST Excluded)",
  },
  {
    title: "All category ISO Modification and Surveillance Audit",
    iafPrice: "₹Depending on certificate",
  },
];

const IsoPackagesSection = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedPackages = showAll ? isoPackagesData : isoPackagesData.slice(0, 8);

  return (
    <section className="py-14 px-6 md:px-12 lg:px-20 text-center bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
        Package Details for <span className="text-orange-600">ISO Certification</span>
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <AnimatePresence>
          {displayedPackages.map((pkg, index) => (
            <motion.div
              key={pkg.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white shadow-md rounded-xl border border-gray-200 overflow-hidden"
            >
              <div className="bg-green-600 text-white py-4 px-4">
                <h3 className="text-lg font-semibold">{pkg.title}</h3>
                <p className="text-xl font-bold">{pkg.iafPrice}</p>
                {pkg.nonIafPrice && <p className="text-md font-medium">{pkg.nonIafPrice}</p>}
                {pkg.gst && <p className="text-xs mt-1">{pkg.gst}</p>}
              </div>

              <div className="p-5 text-left">
                <ul className="space-y-1 mb-4 text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-500" /> Call, Chat, Email Support
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-500" /> No hidden charges
                  </li>
                </ul>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium rounded-full py-2 transition">
                  Get Started Now
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <button
        onClick={() => setShowAll(!showAll)}
        className="mt-8 text-gray-700 hover:text-green-600 text-sm font-medium transition"
      >
        {showAll ? "Show Less other services prices ▲" : "Show More other services prices ▼"}
      </button>
    </section>
  );
};

export default IsoPackagesSection;
