import React from "react";
import founder4 from "../../../../../assets/founder4.webp"; // replace with image 5

const FounderSection4 = () => {
  return (
    <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-8 items-center">
      <div className="flex justify-center order-1 md:order-1">
        <img src={founder4} alt="Rajesh Kewat" className="rounded-2xl shadow-lg w-[320px]" />
      </div>
      <div className="order-2 md:order-2">
        <p className="text-gray-700 leading-relaxed mb-4">
          As a visionary entrepreneur, Mr. Kewat launched “Innovative Bharat” in 2020, enabling
          businesses with digital transformation services.
        </p>
        <p className="text-gray-700 leading-relaxed">
          From being a one-man business to leading over 500 employees, his story proves that
          determination and vision can turn dreams into reality.
        </p>
      </div>
    </section>
  );
};

export default FounderSection4;
