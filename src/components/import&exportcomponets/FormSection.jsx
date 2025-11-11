// import React from "react";

// const FormSection = () => {
//   return (
//     <div className="bg-white p-6 rounded shadow-card border">
//       <h3 className="text-lg font-semibold mb-4">Apply for Import Export License (IEC) Registration</h3>

//       <form className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium mb-1">Name *</label>
//           <input className="w-full border px-3 py-2 rounded" placeholder="Your Name" />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1">Email Address *</label>
//           <input className="w-full border px-3 py-2 rounded" placeholder="Your Email Address" />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1">Mobile Number *</label>
//           <input className="w-full border px-3 py-2 rounded" placeholder="Your Phone Number (Without 0 or +91)" />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1">Select State *</label>
//           <select className="w-full border px-3 py-2 rounded">
//             <option>State</option>
//             <option>Gujarat</option>
//             <option>Maharashtra</option>
//             <option>Tamil Nadu</option>
//           </select>
//         </div>

//         <div className="flex items-center space-x-3">
//           <input type="checkbox" id="agree" />
//           <label htmlFor="agree" className="text-sm text-gray-600">
//             I have read & agreed to the company's Terms and Conditions, disclaimer and refund policy, and also ready to accept calls, SMS, emails, etc.
//           </label>
//         </div>

//         <button className="w-full bg-green-500 text-white py-3 rounded font-semibold mt-2">Get Started</button>
//       </form>
//     </div>
//   );
// };

// export default FormSection;

import React from "react";

const FormSection = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-10">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Apply for Import Export Code (IEC) Online with the help of{" "}
          <span className="text-green-600">Online Legal India.</span>
        </h2>
        <p className="text-gray-600 mt-3 max-w-3xl mx-auto">
          Register your import export business under Directorate General of
          Foreign Trade, Ministry of Commerce and Industry, Govt. of India. IEC
          expert of Online Legal India will file with the DGFT office on your
          behalf.
        </p>
      </div>

      {/* Two-Column Layout */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-start">
        {/* Left: Form */}
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">
            Apply for Import Export License (IEC) Registration
          </h3>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-green-500 outline-none"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-green-500 outline-none"
                placeholder="Your Email Address"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-green-500 outline-none"
                placeholder="Your Phone Number (Without 0 or +91)"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Select State <span className="text-red-500">*</span>
              </label>
              <select className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-green-500 outline-none">
                <option>State</option>
                <option>Gujarat</option>
                <option>Maharashtra</option>
                <option>Tamil Nadu</option>
                <option>Karnataka</option>
              </select>
            </div>

            <div className="flex items-start gap-2 text-sm text-gray-600">
              <input type="checkbox" id="agree" className="mt-1" />
              <label htmlFor="agree" className="cursor-pointer">
                I have read & agreed to the company's{" "}
                <span className="text-green-600 underline">
                  Terms and Conditions
                </span>
                , disclaimer and refund policy, and also ready to accept calls,
                SMS, emails, etc.
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded font-semibold transition"
            >
              Get Started
            </button>
          </form>
        </div>

        {/* Right: Information Section */}
        <div className="space-y-5">
          <div className="bg-green-100 border-l-4 border-green-600 p-4 rounded">
            <h4 className="font-semibold text-green-700 mb-2">
              What is Import Export Code (IEC)?
            </h4>
            <p className="text-gray-700 text-sm">
              An Importer Exporter Code (IEC) is a key business identification
              number which is mandatory for export from India or Import to
              India. No export or import shall be made by any person without
              obtaining an IEC.
            </p>
          </div>

          {[
            "When is IEC code required?",
            "Fee",
            "Who can apply for IEC Code?",
            "IEC Certificate Sample",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-green-600 text-white py-3 px-5 rounded cursor-pointer hover:bg-green-700 transition"
            >
              {item}
            </div>
          ))}

          {/* Bottom Logos */}
          <div className="flex justify-center gap-8 pt-5 border-t mt-6">
            <p className="text-sm text-gray-500">GOOGLE PARTNER</p>
            <p className="text-sm text-gray-500">ISO 9001:2015 CERTIFIED</p>
            <p className="text-sm text-gray-500">MSME REGISTERED</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
