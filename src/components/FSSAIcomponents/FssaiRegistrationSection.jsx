import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import certificateImage from "../../assets/fssai-certificate.webp"; // place image in src/assets

const FssaiRegistrationSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    "What is FoSCoS / FSSAI Food License?",
    "What is the difference between FSSAI/FoSCoS/Food License?",
    "What are the different types of License?",
    "Food Business License Certificate Sample",
  ];

  return (
    <section className="w-full bg-white py-10 px-4 md:px-16">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Our Expert consultation will help you to get the food licence from the Government
        </h2>
        <p className="text-sm md:text-base mt-2">
          <span className="font-semibold text-red-600">
            FSSAI News Update:
          </span>{" "}
          Food Businesses Can Now Be Fined Rs. 5 Lakh & 6 Months Jail for Not Having Food License.{" "}
          <span className="text-gray-700">
            FoSCoS registration or license is required for all entities involved in the manufacture,
            distribution and transportation of food products. ✓Support all states ✓3 Types of
            License: Local, State & Central ✓Application in Same (Priority)
            ✓10yrs Experienced FoSCoS Expert ✓Lowest Fees than Other Portals
          </span>
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left Form */}
        <div className="bg-white p-6 rounded-xl shadow-lg border">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">
            Need FSSAI/ FoSCoS Food License Registration?
          </h3>
          <p className="text-gray-600 mb-4">Apply Now</p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
            <input
              type="tel"
              placeholder="Mobile (Without 0 or +91)"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
            <select className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 focus:outline-none">
              <option value="">Select State</option>
              <option value="gujarat">Gujarat</option>
              <option value="maharashtra">Maharashtra</option>
              <option value="delhi">Delhi</option>
              <option value="tamilnadu">Tamil Nadu</option>
              <option value="westbengal">West Bengal</option>
            </select>

            <label className="flex items-start space-x-2 text-sm text-gray-600">
              <input type="checkbox" className="mt-1" />
              <span>
                I have read & agreed to the company’s Terms and Conditions, disclaimer and refund
                policy, and also ready to accept calls, SMS, emails, etc.
              </span>
            </label>

            <button
              type="submit"
              className="w-full bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-700 transition-all"
            >
              Next
            </button>
          </form>
        </div>

        {/* Right Side */}
        <div className="flex flex-col space-y-4">
          {/* Accordions */}
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-green-500 text-white rounded-md">
                <button
                  className="w-full flex justify-between items-center p-3 font-medium"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  {faq}
                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="bg-white text-gray-700 p-3 rounded-b-md"
                  >
                    <p>
                      {faq === "Food Business License Certificate Sample"
                        ? "Below is a sample of a valid FSSAI registration certificate issued by the Government of India."
                        : "Detailed information about this topic will be displayed here."}
                    </p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Certificate Image */}
          <img
            src={certificateImage}
            alt="FSSAI Certificate Sample"
            className="rounded-lg shadow-md border border-gray-200"
          />
        </div>
      </div>
    </section>
  );
};

export default FssaiRegistrationSection;
