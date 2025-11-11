import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const steps = [
  { number: 1, color: "border-red-400 text-red-500", title: "IP India Public Search" },
  { number: 2, color: "border-yellow-400 text-yellow-500", title: "Trademark Filing" },
  { number: 3, color: "border-blue-400 text-blue-500", title: "Sent to Vienna Code" },
  { number: 4, color: "border-teal-400 text-teal-500", title: "Formality Check Pass" },
  { number: 5, color: "border-purple-400 text-purple-500", title: "Marked for Exam" },
];

const TrademarkFlowchart = () => {
  return (
    <section className="py-16 px-4 md:px-16 bg-white text-gray-800">
      {/* Title */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Trademark Registration Process
        </h2>
        <p className="text-gray-500 text-base mt-2">
          How TM Expert Will Process Your Trademark Registration
        </p>
      </div>

      {/* Top Steps */}
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 mb-12 relative">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center relative">
            <div
              className={`w-12 h-12 flex items-center justify-center border-2 ${step.color} font-semibold rounded-full bg-white`}
            >
              {step.number}
            </div>
            <p className="mt-3 text-sm md:text-base font-medium w-32 text-gray-700">
              {step.title}
            </p>
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-6 right-[-60px] w-12 border-t-2 border-dashed border-gray-300"></div>
            )}
          </div>
        ))}
      </div>

      {/* Flow Lines and Branching */}
      <div className="mt-12 flex flex-col items-center">
        {/* Accepted / Objected Split */}
        <div className="flex flex-col items-center mb-6">
          <div className="h-8 border-l-2 border-dashed border-gray-400"></div>
          <div className="flex items-center justify-center gap-6">
            <div className="w-32 h-[1px] border-t-2 border-dashed border-gray-400"></div>
            <span className="text-gray-500 text-sm">OR</span>
            <div className="w-32 h-[1px] border-t-2 border-dashed border-gray-400"></div>
          </div>
        </div>

        {/* Two Columns: Accepted | Objected */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-32 mt-8 w-full max-w-5xl">
          {/* Accepted Path */}
          <div className="flex flex-col items-start text-left">
            <div className="flex items-center gap-2 text-green-600 font-semibold mb-2">
              <FaCheckCircle /> Accepted
            </div>
            <div className="ml-4 border-l-2 border-dashed border-gray-300 pl-4 space-y-3 text-gray-700">
              <p>Accepted and Advertise</p>
              <p>Journal Copy Issued (3–4 months)</p>
              <p>Registered</p>
              <p className="text-green-600 font-semibold">
                🎉 Congratulations! Your Trademark is Registered
              </p>
            </div>
          </div>

          {/* Objected Path */}
          <div className="flex flex-col items-start text-left">
            <div className="flex items-center gap-2 text-red-500 font-semibold mb-2">
              <FaTimesCircle /> Objected
            </div>
            <div className="ml-4 border-l-2 border-dashed border-gray-300 pl-4 space-y-3 text-gray-700">
              <p>Under Section 9 (1) (a)</p>
              <p>Section 9 (1) (b)</p>
              <p>Section 11 (1) (a)</p>
              <p className="font-medium">Objection Reply Filing</p>

              {/* Inner Split */}
              <div className="flex flex-col items-center mt-4">
                <div className="h-6 border-l-2 border-dashed border-gray-300"></div>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-24 h-[1px] border-t-2 border-dashed border-gray-300"></div>
                  <span className="text-gray-500 text-sm">OR</span>
                  <div className="w-24 h-[1px] border-t-2 border-dashed border-gray-300"></div>
                </div>
              </div>

              {/* Inner Options: Hearing | Accepted */}
              <div className="grid grid-cols-2 gap-6 mt-4">
                {/* Hearing */}
                <div className="border-l-2 border-dashed border-gray-300 pl-4">
                  <p>Hearing</p>
                  <ul className="list-disc pl-5 text-gray-600">
                    <li>Refused or Accepted</li>
                  </ul>
                </div>

                {/* Accepted */}
                <div className="border-l-2 border-dashed border-gray-300 pl-4">
                  <p>Journal Copy Issued (3–4 months)</p>
                  <p>Registered</p>
                  <p className="text-green-600 font-semibold">
                    🎉 Congratulations! Your Trademark is Registered
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrademarkFlowchart;

