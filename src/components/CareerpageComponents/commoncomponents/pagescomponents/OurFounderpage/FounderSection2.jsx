import React from "react";
import founder2 from "../../../../../assets/founder2.webp"; // replace with image 3

const FounderSection2 = () => {
  return (
    <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-8 items-center">
      <div className="flex justify-center order-1 md:order-1">
        <img src={founder2} alt="Rajesh Kewat" className="rounded-2xl shadow-lg w-[320px]" />
      </div>
      <div className="order-2 md:order-2">
        <p className="text-gray-700 leading-relaxed mb-4">
          As a Smart Class Coordinator at Educomp Solutions, Rajesh Kewat improved his financial
          stability and professional growth. His efforts in the education sector inspired thousands
          of students.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Despite challenges in 2017, his resilience helped him rebuild his life, proving that
          perseverance can overcome any obstacle.
        </p>
      </div>
    </section>
  );
};

export default FounderSection2;
