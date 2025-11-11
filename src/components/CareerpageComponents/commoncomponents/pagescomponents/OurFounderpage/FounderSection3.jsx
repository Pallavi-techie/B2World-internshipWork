import React from "react";
import founder3 from "../../../../../assets/founder3.webp"; // replace with image 4

const FounderSection3 = () => {
  return (
    <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-8 items-center">
      <div>
        <p className="text-gray-700 leading-relaxed mb-4">
          In 2018, Rajesh Kewat launched the online platform True Consultant, followed by
          FastInfo Legal Services Pvt. Ltd. in 2019. His ventures focused on providing justice and
          legal help to the masses.
        </p>
        <p className="text-gray-700 leading-relaxed">
          FastInfo Class was founded in 2020 to deliver quality education online, benefiting
          both rural and urban students across India.
        </p>
      </div>
      <div className="flex justify-center">
        <img src={founder3} alt="Rajesh Kewat" className="rounded-2xl shadow-lg w-[320px]" />
      </div>
    </section>
  );
};

export default FounderSection3;
