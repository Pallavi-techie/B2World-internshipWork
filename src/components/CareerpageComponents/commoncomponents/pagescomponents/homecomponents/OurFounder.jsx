import React from "react";
import { motion } from "framer-motion";

const OurFounder = () => {
  return (
    <section className="py-16 px-6 md:px-16 bg-white">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-teal-600 text-lg font-semibold">Who we are</h2>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Meet <span className="text-teal-600">Our Founder</span>
          </h1>
          <p className="font-semibold mb-4 text-gray-700">
            Get an insight into the inspiring journey of Mr. Rajesh Kewat, the MD and Founder of FastInfo Group who believes that success can be achieved through more of positive motivation than resources.
          </p>
          <p className="text-gray-600 mb-6">
            Mr. Rajesh Kewat considers “Confidence” and “Will Power” the key to overcoming any challenge...
          </p>
          <button className="px-6 py-2 bg-teal-500 text-white font-semibold rounded-full shadow hover:bg-teal-600">
            Read More
          </button>
        </div>
        <motion.img
          src="/assets/founder1.webp"
          alt="Founder"
          className="rounded-2xl shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </section>
  );
};

export default OurFounder;
