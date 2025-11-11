import React from "react";
import founder1 from "../../../../../assets/founder1.webp"; // replace with image 2

const FounderSection1 = () => {
  return (
    <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="text-2xl font-semibold mb-4">Founder & CEO</h2>
        <h3 className="text-3xl font-bold text-teal-600 mb-6">Rajesh Kewat</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Rajesh Kewat, currently the CEO, has proven that “Success needs more of positive
          motivation than resources.” Born in Dinhata, Cooch Behar, he rose from a humble background
          to become the CEO of FastInfo Group.
        </p>
        <p className="text-gray-700 leading-relaxed">
          His journey started in 2008 at Lalani Computer Academy with a small salary, and his
          dedication led him to work with companies like Brainware, First Source, and Educomp.
        </p>
      </div>
      <div className="flex justify-center">
        <img src={founder1} alt="Rajesh Kewat" className="rounded-2xl shadow-lg w-[320px]" />
      </div>
    </section>
  );
};

export default FounderSection1;
