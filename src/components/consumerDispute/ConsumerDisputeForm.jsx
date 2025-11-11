import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Plus, Minus } from "lucide-react";

const ConsumerDisputeForm = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
          Say goodbye to long legal battles—
          <span className="text-green-600">Online Legal India</span> brings you quick
          and smart consumer dispute resolution, online.
        </h2>
        <p className="text-gray-600 italic">
          With the help of Online Legal India
        </p>
        <p className="text-gray-500 mt-2">
          If a company fails to provide a satisfactory product or service,
          customers have the right to raise consumer disputes and seek
          resolution through Online Dispute Resolution (ODR) mechanisms.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Left - Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-6 rounded-2xl shadow-md border"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            File Consumer Dispute Online (ODR)
          </h3>
          <p className="text-sm text-gray-500 mb-4">Submit Your Dispute Here</p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
            />
            <input
              type="tel"
              placeholder="Your Phone Number (Without 0 or +91)"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
            />
            <select className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none text-gray-600">
              <option>State</option>
              <option>Gujarat</option>
              <option>Maharashtra</option>
              <option>Delhi</option>
              <option>Tamil Nadu</option>
            </select>

            <input
              type="text"
              placeholder="Loss/Dispute Amount"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
            />

            <div className="flex items-start gap-2 text-sm">
              <input type="checkbox" className="mt-1" />
              <p className="text-gray-600">
                I have read and understood the company's Terms and Conditions,
                Refund Policy, and ODR process. I consent to receiving
                communication via calls, SMS, and email.
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition"
            >
              Apply
            </button>
          </form>
        </motion.div>

        {/* Right - Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Accordion */}
          <div className="border rounded-xl overflow-hidden shadow-sm">
            <button
              onClick={() => setExpanded(!expanded)}
              className="w-full flex justify-between items-center bg-green-100 px-4 py-3 font-semibold text-gray-800"
            >
              [Updated] Consumer Protection Act, 2019
              {expanded ? <Minus size={18} /> : <Plus size={18} />}
            </button>

            {expanded && (
              <div className="bg-white px-4 py-4 border-t text-gray-700 space-y-4">
                <h4 className="text-green-700 font-semibold">
                  Compensation & Penalties As Per Bill, 2019
                </h4>
                <ul className="list-disc ml-6 space-y-2 text-sm">
                  <li>
                    <strong>Penalties for misleading advertisement:</strong> The
                    CCPA can impose a penalty up to ₹10 lakhs and two-year
                    imprisonment for misleading or false advertisement.
                  </li>
                  <li>
                    <strong>Right to file a complaint from anywhere:</strong>{" "}
                    Consumers can now file a complaint from home, office, or
                    anywhere else.
                  </li>
                  <li>
                    <strong>Right to seek compensation under product
                    liability:</strong> Consumers can claim compensation against
                    the manufacturer or service provider if a defective product
                    causes loss.
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Govt Recognition */}
          <div className="bg-gradient-to-r from-orange-100 to-orange-200 border rounded-xl p-6 text-center shadow-sm">
            <h4 className="font-semibold text-gray-800 mb-1">
              GOVT. RECOGNITION
            </h4>
            <p className="text-orange-700 font-bold text-lg">
              #startupindia
            </p>
            <p className="text-sm text-gray-600 font-medium">DIPP72745</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ConsumerDisputeForm;
