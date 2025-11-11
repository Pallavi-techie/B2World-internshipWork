import React from "react";

const KindsOfTrademarkSection = () => {
  const kinds = [
    {
      num: "01",
      title: "Service Mark",
      desc: "A service mark is comparable to a product mark, representing a service rather than a product. The primary function of a service mark is to differentiate its proprietors from the owners of other benefits. Accordingly, trademark applications submitted under trademark classes 35-45 may be classified as service marks since they represent a service.",
    },
    {
      num: "02",
      title: "Marks in the Series",
      desc: "These are the marks that have been registered for usage before or after a chain of items that share a similar suffix, prefix, or symbol.",
    },
    {
      num: "03",
      title: "Mark of Sound",
      desc: "A sound mark is a sound that may be connected to a product or service that originates from a certain provider. Sound logos, often known as audio mnemonics, appear at the beginning and end of ads.",
    },
  ];

  return (
    <section className="px-6 md:px-20 py-12 text-gray-800 bg-white">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-xl md:text-2xl font-semibold text-black">
          Kinds of Trademark Registration in India
        </h2>
        <p className="text-sm md:text-base text-gray-700 mt-2">
          The following are the kinds of trademark registration available in India.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 max-w-6xl mx-auto">
        {kinds.map((item, index) => (
          <div
            key={index}
            className="relative bg-[#E6F0F6] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center p-6"
          >
            {/* Hexagon number badge */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2">
              <div className="w-14 h-14 bg-[#053B50] clip-hexagon flex items-center justify-center">
                <span className="text-white text-lg font-semibold">{item.num}</span>
              </div>
            </div>

            {/* Card content */}
            <div className="mt-10">
              <h3 className="font-bold text-lg text-[#053B50] uppercase mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KindsOfTrademarkSection;
