import React from "react";
import BusinessPerson from "../../assets/BusinessPerson.webp";

const IsoCertificationHeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row w-full min-h-screen">
      {/* LEFT SIDE - Image */}
      <div className="w-full md:w-1/2 h-[80vh] md:h-auto flex items-center justify-center bg-white">
        <img
          src={BusinessPerson}
          alt="Business Person"
          className="w-full h-full object-cover"
        />
      </div>

      {/* RIGHT SIDE - Form */}
      <div className="w-full md:w-1/2 bg-[#1E1E1E] flex items-center justify-center py-12 px-6 md:px-10">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 md:p-10">
          <h2 className="text-center text-2xl font-bold text-gray-900">
            Want Company’s ISO Certification?
          </h2>
          <p className="text-center text-gray-600 text-sm mt-1 mb-6">
            Fill up the below mentioned form
          </p>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Full Name"
              className="w-full border border-gray-300 rounded-full px-4 py-2 focus:ring-2 focus:ring-[#0055A5] outline-none"
            />
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full border border-gray-300 rounded-full px-4 py-2 focus:ring-2 focus:ring-[#0055A5] outline-none"
            />
            <input
              type="tel"
              placeholder="Your Mobile Number"
              className="w-full border border-gray-300 rounded-full px-4 py-2 focus:ring-2 focus:ring-[#0055A5] outline-none"
            />
            <select className="w-full border border-gray-300 rounded-full px-4 py-2 text-gray-600 focus:ring-2 focus:ring-[#0055A5] outline-none">
              <option value="">State</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Delhi">Delhi</option>
            </select>

            {/* CAPTCHA SECTION */}
            <div className="flex items-center gap-3">
              <img
                src="https://dummyimage.com/130x40/003366/ffffff&text=8+8+7+6"
                alt="captcha"
                className="rounded-md"
              />
              <button
                type="button"
                className="text-gray-600 text-xl font-bold hover:text-[#0055A5]"
              >
                ↻
              </button>
              <input
                type="text"
                placeholder="Enter the captcha here.."
                className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#0055A5] outline-none"
              />
            </div>

            {/* Terms */}
            <label className="flex items-start gap-2 text-xs text-gray-600 mt-2">
              <input type="checkbox" className="mt-1 accent-[#0055A5]" />
              <span>
                I have read & agreed to the company’s Terms and Conditions,
                disclaimer and refund policy, and I’m ready to accept calls,
                SMS, emails, etc.
              </span>
            </label>

            <button
              type="submit"
              className="w-full bg-[#00B140] hover:bg-[#009A36] text-white font-semibold rounded-full py-3 mt-4 transition-all"
            >
              Next
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default IsoCertificationHeroSection;


