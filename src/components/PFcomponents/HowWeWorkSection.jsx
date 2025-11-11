import React from "react";

export default function HowWeWorkSection() {
  const steps = [
    {
      number: "1",
      text: "Fill the Form & Make the Payment",
    },
    {
      number: "2",
      text: "Expert Will Call You & Receive All the Necessary Documents.",
    },
    {
      number: "3",
      text: "Filling Correct Information by CA/CS",
    },
    {
      number: "4",
      text: "Generating Challan/Currency",
    },
    {
      number: "5",
      text: "Chartered Accountant’s Certificate Uploading",
    },
    {
      number: "6",
      text: "Successfully ESI Return Submission Done!",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-16 text-center bg-white">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-2">How We Work?</h2>
      <div className="h-[3px] w-24 bg-green-500 mx-auto mb-10"></div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-all duration-300"
          >
            <h3 className="text-3xl font-bold text-black mb-2">
              {step.number}
            </h3>
            <p className="text-gray-700 text-sm md:text-base font-medium leading-snug">
              {step.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
