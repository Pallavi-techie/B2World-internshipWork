import React from "react";

export default function PFReturnFilingSection() {
  return (
    <section className="py-14 px-6 md:px-20 bg-white text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Proficient CA/CS for{" "}
        <span className="text-orange-500 relative inline-block">
          PF & ESIC Return Filing
          <span className="block h-[3px] w-full bg-green-500 mt-1"></span>
        </span>{" "}
        Online
      </h2>

      {/* Subheading */}
      <h3 className="text-xl font-semibold text-orange-600 mb-6">
        PF Return Filing
      </h3>

      {/* Paragraphs */}
      <div className="text-gray-800 leading-relaxed max-w-5xl mx-auto space-y-6">
        <p>
          All employees with PF registration are responsible for PF returns at
          regular intervals. According to government regulations, the 25th of
          each month is the last due date for employers to contribute to PF for
          employees. Today, employers can easily file their monthly PF through a
          unified portal (EPFO). If you want to avoid complications and errors
          related to PF return filing, you can contact Online Legal India. A
          dedicated CA/CS will help you file the PF return on time flawlessly.
        </p>

        <p>
          Employers are required to submit various data about the employers,
          employees, PF account number of the employees, amount contributed from
          both ends (employers and employees), details of employers covered
          under the EPF scheme, and other relevant information. Online Legal
          India will take on the entire burden related to EPF return filling.
          Contact us now.
        </p>
      </div>

      {/* Button */}
      <div className="mt-8">
        <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-2 rounded-full transition duration-300">
          Contact Us
        </button>
      </div>
    </section>
  );
}
