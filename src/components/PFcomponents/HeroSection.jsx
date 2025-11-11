import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function HeroSection() {
  return (
    <div className="bg-green-100 py-10 px-6 md:px-16 flex flex-col md:flex-row justify-between items-center">
      {/* Left Content */}
      <div className="md:w-1/2 space-y-5">
        <h1 className="text-3xl md:text-4xl font-bold leading-snug">
          Experience{" "}
          <span className="text-orange-500">PF & ESIC Return Filing</span>{" "}
          Online by Dedicated <span className="text-black">CA/CS</span>
        </h1>
        <p className="text-gray-700">
          Maintain PF & ESIC Return Filing, Payroll management & Tax compliances
          seamlessly by experienced CA/CS.
        </p>

        {/* Bullet Points */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-800">
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-green-600" />
            <span>10 Years+ experienced CA/CS</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-green-600" />
            <span>ISO 9001:2015 Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-green-600" />
            <span>1 Lakh+ Satisfied Clients</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-green-600" />
            <span>Challenging Low Cost Across India</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-green-600" />
            <span>Guaranteed Quality Services</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-green-600" />
            <span>No Hidden Charges</span>
          </div>
        </div>

        {/* Google Rating */}
        <div className="flex items-center gap-2 mt-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
            alt="Google logo"
            className="w-8 h-8"
          />
          <p className="text-gray-800">
            <span className="font-semibold">Rated 4.4/5</span> from <br />
            4,756 Reviews
          </p>
        </div>
      </div>

      {/* Right Form */}
      <div className="bg-white p-6 rounded-xl shadow-lg mt-10 md:mt-0 md:w-1/3">
        <h2 className="text-lg font-semibold text-center mb-4">
          We’re here to help
        </h2>
        <form className="space-y-3">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 outline-none"
          />
          <input
            type="tel"
            placeholder="Your Mobile Number"
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 outline-none"
          />
          <input
            type="email"
            placeholder="Your Email Address"
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 outline-none"
          />
          <select
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 outline-none"
          >
            <option value="">State</option>
            <option>Gujarat</option>
            <option>Maharashtra</option>
            <option>Delhi</option>
            <option>Rajasthan</option>
          </select>
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold rounded-full py-2 hover:bg-green-700 transition duration-200"
          >
            Proceed Now
          </button>
        </form>
      </div>
    </div>
  );
}
