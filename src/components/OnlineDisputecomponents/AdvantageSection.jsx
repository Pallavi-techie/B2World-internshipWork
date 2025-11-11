import React from "react";
import { motion } from "framer-motion";
import {
  Clock,
  IndianRupee,
  Globe,
  Lock,
  UserCheck,
  CheckSquare,
} from "lucide-react";

const advantages = [
  {
    icon: <Clock className="w-10 h-10 text-[#FF6600]" />,
    title: "Save Time",
    description: "Skip the long waits and court appearances. Get results quickly.",
  },
  {
    icon: <IndianRupee className="w-10 h-10 text-[#FF6600]" />,
    title: "Cost-Effective",
    description:
      "Legal battles are expensive. We offer affordable ODR plans for individuals and businesses.",
  },
  {
    icon: <Globe className="w-10 h-10 text-[#FF6600]" />,
    title: "Accessible Anywhere",
    description:
      "Resolve disputes from the comfort of your home, office, or on the go.",
  },
  {
    icon: <Lock className="w-10 h-10 text-[#FF6600]" />,
    title: "Confidential & Secure",
    description:
      "Your privacy is our priority. We use encrypted, secure platforms to keep your case safe.",
  },
  {
    icon: <UserCheck className="w-10 h-10 text-[#FF6600]" />,
    title: "Fair & Impartial",
    description:
      "Neutral mediators and arbitrators work to find balanced, sound outcomes.",
  },
];

const AdvantageSection = () => {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-20 flex flex-col md:flex-row gap-10 justify-between items-start">
      {/* Left Side - Advantages */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-3/5"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left mb-10">
          Advantage of Online Dispute Resolution
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item, index) => (
            <div
              key={index}
              className="bg-[#EAF3FF] rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Right Side - Form */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-2/5 bg-white rounded-2xl shadow-lg p-8 border"
      >
        <h3 className="text-xl font-semibold mb-6 text-center">
          File Online Dispute Resolution (ODR)
        </h3>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Full Name"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#FF6600] outline-none"
          />
          <input
            type="email"
            placeholder="Your Email Address"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#FF6600] outline-none"
          />
          <input
            type="text"
            placeholder="Your Mobile Number"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#FF6600] outline-none"
          />
          <select
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#FF6600] outline-none"
          >
            <option value="">State</option>
            <option>Gujarat</option>
            <option>Maharashtra</option>
            <option>Delhi</option>
            <option>Uttar Pradesh</option>
            <option>Tamil Nadu</option>
          </select>

          {/* Captcha Section */}
          <div className="flex flex-col sm:flex-row gap-3 items-center">
            <div className="bg-[#1C3F73] text-white font-bold px-6 py-3 rounded-md tracking-widest select-none">
              9 4 5 5
            </div>
            <input
              type="text"
              placeholder="Enter the captcha"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#FF6600] outline-none"
            />
          </div>

          {/* Terms Checkbox */}
          <label className="flex items-start text-sm text-gray-600 gap-2 mt-2">
            <input type="checkbox" className="mt-1 accent-[#FF6600]" />
            <span>
              I have read & agreed to the company's{" "}
              <a href="#" className="text-[#FF6600] underline">
                Terms and Conditions
              </a>
              , disclaimer and refund policy, and also ready to accept calls,
              SMS, emails, etc.
            </span>
          </label>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-[#FF6600] text-white font-semibold text-lg py-3 rounded-full hover:bg-[#e05500] transition-all duration-300"
          >
            Request for Callback
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default AdvantageSection;
