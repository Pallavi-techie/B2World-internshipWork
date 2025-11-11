import React from "react";

const steps = [
  "Fill the Form & Make the Payment",
  "Get a call from IEC expert",
  "Upload All the Necessary Documents",
  "Dedicated IEC Expert will Apply for IEC License on Govt Portal",
  "Congratulations! Your Import Export Code will be Sent to You"
];

const HowWeWork = () => {
  return (
    <div className="text-center">
      <h3 className="text-2xl font-bold mb-4">How we work?</h3>
      <div className="flex flex-wrap justify-center gap-6">
        {steps.map((s, i) => (
          <div key={i} className="w-48 h-48 bg-green-700 text-white rounded-lg flex items-center justify-center p-4 text-sm shadow-card">
            <div>
              <div className="text-4xl opacity-10 font-bold absolute transform -translate-y-6">{i+1}</div>
              <p>{s}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <button className="bg-green-500 text-white px-6 py-2 rounded">Apply IEC License</button>
      </div>
    </div>
  );
};

export default HowWeWork;
