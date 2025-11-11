import React from "react";

export default function BenefitsSection() {
  return (
    <section className="py-14 px-6 md:px-20 bg-white text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
        Benefits of{" "}
        <span className="text-orange-500 relative inline-block">
          PF Return Filing
          <span className="block h-[3px] w-full bg-green-500 mt-1"></span>
        </span>{" "}
        on Time
      </h2>

      {/* Subheading */}
      <p className="text-gray-700 mb-10 max-w-3xl mx-auto">
        Filing PF returns regularly has a lot of benefits for both employers and
        employees. Some of them are:
      </p>

      {/* Benefits List */}
      <div className="text-left max-w-4xl mx-auto space-y-6">
        <div>
          <h3 className="font-bold text-lg text-gray-900">
            Compliance with the law
          </h3>
          <p className="text-gray-700">
            PF return filing is mandatory for companies meeting the terms and
            conditions of The Employees’ Provident Funds and Miscellaneous
            Provisions Act, 1952. All companies or entities should follow it to
            avoid penalties.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-lg text-gray-900">
            Employee Security
          </h3>
          <p className="text-gray-700">
            PF contribution by the employer helps employee social security. It
            helps them when they are in need or after retirement.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-lg text-gray-900">Tax Benefits</h3>
          <p className="text-gray-700">
            PF contributions help employers claim tax exemptions as the
            contributions are tax-deductible. Hence, it can help claim tax
            benefits.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-lg text-gray-900">
            Organized record maintenance
          </h3>
          <p className="text-gray-700">
            Regular PF contribution helps employers maintain the records of the
            regular contributions for the employees. Irregular and untimely
            payment of EPF for the employees will be hazardous for payroll
            management and clear data maintenance. Otherwise, a company will
            fall in a penalty.
          </p>
        </div>
      </div>

      {/* ESI Return Filing Section */}
      <div className="mt-14">
        <h3 className="text-2xl font-bold text-orange-600 mb-6">
          ESI Return Filing
        </h3>

        <div className="text-gray-800 leading-relaxed max-w-5xl mx-auto space-y-6 text-left">
          <p>
            As ESI registration is mandatory for business entities or companies,
            ESI Return filing is mandatory for them. Employees’ State Insurance
            scheme helps employees with some social security as well as health
            benefits. To comply with the rule related to the ESI Act, ESI return
            filing is mandatory for all business entities or companies. ESI
            returns are the documentary contribution of the company towards
            their employees, which increases the workforce. The entire process
            might be complicated, time-consuming, and require expert assistance.
            Online Legal India has expert CA/CS to provide seamless services.
          </p>

          <p>
            By making the process smooth and flawless, you can meet the ESI
            return compliance before the time that saves penalties. So, what are
            you waiting for? <br />
            <span className="font-semibold">Contact us now.</span>
          </p>
        </div>

        {/* Button */}
        <div className="mt-8 text-center">
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-2 rounded-full transition duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
