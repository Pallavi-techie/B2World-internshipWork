import React from "react";
import { FaCheck } from "react-icons/fa";

export default function PackageDetailsSection() {
  const plans = [
    {
      title: "Plan 1",
      price: "₹2,499",
      employees: "10 Employees",
    },
    {
      title: "Plan 2",
      price: "₹3,980",
      employees: "20 Employees",
    },
    {
      title: "Plan 3",
      price: "₹4,999",
      employees: "30 Employees",
    },
    {
      title: "Plan 4",
      price: "₹5,699",
      employees: "40 Employees",
    },
    {
      title: "Plan 5",
      price: "₹6,799",
      employees: "50 Employees",
    },
  ];

  return (
    <section className="py-14 px-6 md:px-20 bg-white text-center">
      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-3">
        Package Details for{" "}
        <span className="text-orange-600">PF & ESI Returns</span>
      </h2>
      <div className="h-[3px] w-28 bg-green-500 mx-auto mb-10"></div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 justify-items-center">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`w-full max-w-[250px] bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 ${
              index === 4 ? "mt-6 sm:col-span-2 lg:col-span-1 lg:mt-0" : ""
            }`}
          >
            <div className="bg-green-600 text-white rounded-t-2xl py-4 font-semibold">
              {plan.title}
            </div>
            <div className="p-5">
              <h3 className="text-2xl font-bold text-green-600">
                {plan.price}{" "}
                <span className="text-sm text-gray-700 font-normal">
                  +18% GST
                </span>
              </h3>

              <ul className="text-left mt-4 space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <FaCheck className="text-green-600" /> {plan.employees}
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-green-600" /> Call, Chat, Email
                  Support
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-green-600" /> No hidden charges
                </li>
              </ul>

              <button className="mt-5 w-full bg-green-600 text-white py-2 rounded-full font-medium hover:bg-green-700 transition">
                Request a Call Back
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <p className="text-gray-700 text-sm mt-10">
        Contact us for any number of employees, special charges are available!
      </p>
    </section>
  );
}
