import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "GST Registration",
    desc: "Become a Govt. registered taxpayer in India. GST experts of Online Legal India will help you in every single step to get GST number.",
    img: "/assets/gst1.jpg",
  },
  {
    title: "GST Return Filing",
    desc: "Simplify compliance with GST expert assistance online. Purchase plan and let us handle GST Returns for you.",
    img: "/assets/gst2.jpg",
  },
  {
    title: "GST Surrender/Cancel",
    desc: "Your GST registration can be cancelled anytime. Cancel easily through Online Legal India.",
    img: "/assets/gst3.jpg",
  },
  {
    title: "GST Modification Update",
    desc: "We help you fulfil all formalities regarding GST modification and amendment of registration.",
    img: "/assets/gst4.jpg",
  },
  {
    title: "GST NIL Return Filing",
    desc: "Let our taxation experts evaluate, manage and file your GST Nil returns easily.",
    img: "/assets/gst5.jpg",
  },
  {
    title: "GSTR-9 Annual Filing",
    desc: "Our experts ensure timely and accurate GSTR-9 filings with professional guidance.",
    img: "/assets/gst6.jpg",
  },
  {
    title: "GST LUT Filing",
    desc: "Launch your export business easily with our LUT filing assistance.",
    img: "/assets/gst8.jpg",
  },
  {
    title: "GST E-WayBills",
    desc: "Trusted by thousands for GST E-Way Bill assistance across India.",
    img: "/assets/gst9.jpg",
  },
];

const GstServices = () => {
  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">GST Services</h2>
        <div className="mt-2 w-24 h-1 bg-green-500 mx-auto rounded"></div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {services.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="bg-white shadow-md rounded-lg overflow-hidden border hover:shadow-lg transition"
          >
            <img src={s.img} alt={s.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{s.desc}</p>
              <a
                href="#"
                className="text-green-600 font-medium hover:underline flex items-center gap-1"
              >
                Click Here →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GstServices;
