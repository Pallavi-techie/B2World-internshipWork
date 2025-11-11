import React from "react";
import { motion } from "framer-motion";

const pricingPlans = [
  {
    title: "Basic",
    price: "₹ 1999",
    features: [
      "Trademark Application Filing",
      "Free Class Search",
      "Free TM Consultation by expert",
      "Drafting & Filing by TM Expert",
      "Use TM mark next to your brand",
      "EMI facility",
      "Call, Chat, Email Support",
      "No hidden charges",
    ],
  },
  {
    title: "Standard",
    price: "₹ 4999",
    features: [
      "Trademark Application Filing",
      "Creative Logo Design by dedicated Logo Designer",
      "Free Class Search",
      "Free TM Consultation by expert",
      "Drafting & Filing by TM Expert",
      "Use TM mark next to your brand",
      "EMI facility",
      "Call, Chat, Email Support",
      "No hidden charges",
    ],
  },
  {
    title: "Premium",
    price: "₹ 11999",
    recommended: true,
    features: [
      "Trademark Application Filing",
      "Expertise TM Search Report",
      "Free Class Search",
      "Free Consultation till you get TM Mark",
      "Use TM mark next to your brand",
      "Trademark Hearing",
      "Trademark Objection Reply",
      "EMI facility",
      "Call, Chat, Email Support",
      "No hidden charges",
    ],
  },
  {
    title: "All In One",
    price: "₹ 14999",
    features: [
      "Trademark Application Filing",
      "Creative Logo Design by dedicated Logo Designer",
      "Logo design changes till client’s satisfaction",
      "Expertise TM Search Report",
      "Free Class Search",
      "Free Consultation till you get TM Mark",
      "Drafting & Filing by TM Expert",
      "Trademark Objection Reply",
      "EMI facility",
      "Call, Chat, Email Support",
      "No hidden charges",
    ],
  },
  {
    title: "Trademark Registration & Objection",
    price: "₹ 3999",
    features: [
      "Trademark Application Filing",
      "Expertise TM Search Report",
      "Free Class Search",
      "Free Consultation till you get TM Mark",
      "Drafting & Filing by TM Expert",
      "Use TM mark next to your brand",
      "Trademark Objection Reply",
    ],
  },
  {
    title: "TMR & ISO Certificate",
    price: "₹ 5999",
    features: [
      "Trademark Application Filing",
      "ISO Application",
      "Free Class Search",
      "Free TM Consultation by expert",
      "Drafting & Filing by TM Expert",
      "Use TM mark next to your brand",
      "EMI facility",
      "Call, Chat, Email Support",
      "No hidden charges",
    ],
  },
];

export default function PricingPlans() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-16 md:py-24"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1500&q=80')",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
          Professional Fees
        </h2>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-4">
          {pricingPlans.slice(0, 3).map((plan, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl shadow-md p-6 border-t-8 border-green-500 text-gray-800 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2 text-center">
                  {plan.title}
                </h3>
                <h4 className="text-2xl font-bold text-green-600 text-center mb-4">
                  {plan.price}
                </h4>
                {plan.recommended && (
                  <div className="bg-yellow-400 text-sm text-gray-800 px-3 py-1 rounded-full w-fit mx-auto mb-4 font-semibold">
                    Recommended
                  </div>
                )}
                <ul className="text-left space-y-2 text-sm">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-500 mr-2">✔</span> {f}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="mt-6 bg-green-500 hover:bg-green-600 text-white font-medium py-2 rounded-md shadow-md transition">
                Contact Now
              </button>
            </motion.div>
          ))}
        </div>

        {/* Second row of pricing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.slice(3).map((plan, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl shadow-md p-6 border-t-8 border-green-500 text-gray-800 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2 text-center">
                  {plan.title}
                </h3>
                <h4 className="text-2xl font-bold text-green-600 text-center mb-4">
                  {plan.price}
                </h4>
                <ul className="text-left space-y-2 text-sm">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-500 mr-2">✔</span> {f}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="mt-6 bg-green-500 hover:bg-green-600 text-white font-medium py-2 rounded-md shadow-md transition">
                Contact Now
              </button>
            </motion.div>
          ))}
        </div>

        <p className="text-gray-200 text-xs mt-8">* Excluding Govt. fees</p>
      </div>
    </section>
  );
}
