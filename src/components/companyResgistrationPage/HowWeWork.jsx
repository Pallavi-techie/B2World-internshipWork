import React from "react";

const steps = [
  {
    number: "1",
    text: "Fill our Registration Form & Make the Payment",
  },
  {
    number: "2",
    text: "We will search the class of your brand by trademark expert",
  },
  {
    number: "3",
    text: "We will draft the authorization letter (Form-48)",
  },
  {
    number: "4",
    text: "Upload the Required Documents",
  },
  {
    number: "5",
    text: "Our expert will file the TM Application",
  },
  {
    number: "6",
    text: "Congratulations! You can now use TM next to your Brand 🔥",
  },
];

const HowWeWork = () => {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">How We Work?</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-green-700 text-white p-6 rounded-xl w-40 md:w-44 lg:w-48 h-48 flex flex-col items-center justify-center shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <p className="text-sm md:text-base font-medium leading-relaxed mb-2">
                {step.text}
              </p>
              <span className="absolute bottom-4 right-4 text-[80px] text-green-800/40 font-extrabold -z-0 select-none">
                {step.number}
              </span>
              <span className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-xl">
                →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
