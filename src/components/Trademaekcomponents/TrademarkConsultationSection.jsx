import React, { useState } from "react";
import { motion } from "framer-motion";

const TrademarkConsultationSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    agree: false,
  });

  const [open, setOpen] = useState(null); // For accordion toggle

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  const toggleAccordion = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <section className="py-16 bg-white text-gray-800 px-4 md:px-16">
      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
          Our Expert Consultation Will Help You Get The Trademark Registration
          Online Seamlessly From The Government.
        </h2>
        <p className="text-gray-600 text-base">
          Trademark Registration gives the owner an exclusive right to protect
          the Logo, Symbol, and Words as the identity of the Brand. Protect your
          brand with our trademark registration services.
        </p>
      </div>

      {/* Two Column Grid */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-xl rounded-xl p-6 md:p-8"
        >
          <h3 className="text-lg font-semibold mb-2">
            Need Consultation on Trademark Registration?
          </h3>
          <p className="text-gray-600 mb-4">
            Fill up the form to get the consultation
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="text"
              name="phone"
              placeholder="Your Phone Number (Without 0 or +91)"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">Select State</option>
              <option>Gujarat</option>
              <option>Maharashtra</option>
              <option>Rajasthan</option>
              <option>Delhi</option>
              <option>Tamil Nadu</option>
            </select>

            <label className="flex items-start space-x-2 text-sm text-gray-600">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                required
                className="mt-1 accent-green-600"
              />
              <span>
                I have read & agreed to the company’s Terms and Conditions,
                disclaimer and refund policy, and also ready to accept calls,
                SMS, emails, etc.
              </span>
            </label>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-all duration-200"
            >
              Get Started
            </button>
          </form>
        </motion.div>

        {/* Right Info + Accordion Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6"
        >
          {/* Accordion 1 */}
          <div>
            <button
              onClick={() => toggleAccordion(1)}
              className="w-full bg-green-500 text-white text-left px-4 py-3 font-medium rounded-t-lg focus:outline-none"
            >
              Trademark Symbols +
            </button>
            {open === 1 && (
              <div className="bg-white shadow-md rounded-b-lg p-4 flex flex-wrap justify-center gap-4">
                {[
                  { label: "TM", title: "TRADEMARK" },
                  { label: "SM", title: "SERVICE MARK" },
                  { label: "R", title: "REGISTER MARK" },
                  { label: "C", title: "COPYRIGHT" },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <div className="w-16 h-16 flex items-center justify-center text-2xl font-bold rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-white mx-auto mb-2">
                      {item.label}
                    </div>
                    <p className="text-gray-700 text-sm font-semibold">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Accordion 2 */}
          <div>
            <button
              onClick={() => toggleAccordion(2)}
              className="w-full bg-green-500 text-white text-left px-4 py-3 font-medium rounded-t-lg focus:outline-none"
            >
              What is the difference between ™ and ® ?
            </button>
            {open === 2 && (
              <div className="bg-white shadow-md rounded-b-lg p-4 text-gray-700">
                ™ represents a pending trademark application, while ® indicates
                a registered trademark.
              </div>
            )}
          </div>

          {/* Accordion 3 */}
          <div>
            <button
              onClick={() => toggleAccordion(3)}
              className="w-full bg-green-500 text-white text-left px-4 py-3 font-medium rounded-t-lg focus:outline-none"
            >
              Who Can Obtain a Trademark
            </button>
            {open === 3 && (
              <div className="bg-white shadow-md rounded-b-lg p-4 text-gray-700">
                Any individual, company, or organization that owns a brand name,
                logo, or unique identifier can obtain a trademark.
              </div>
            )}
          </div>

          {/* Button */}
          <button className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 rounded-lg transition-all duration-200">
            Find Your Trademark Class
          </button>

          {/* Offer Text */}
          <div className="text-sm text-gray-600 mt-6">
            <p className="font-semibold mb-2">
              Avail 50% Discount on Trademark Registration
            </p>
            <p>
              For trademark registration, you need to pay Rs. 9000/- as
              Government fees. But if you own a MSME/SSI/Udyog Aadhar
              certificate, this Government fee is reduced to 50%.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrademarkConsultationSection;

