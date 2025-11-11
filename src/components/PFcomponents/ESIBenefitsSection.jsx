import React from "react";

export default function ESIBenefitsSection() {
  return (
    <section className="py-14 px-6 md:px-20 bg-white text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-3">
        Benefits of{" "}
        <span className="text-orange-600">ESI Return Filing</span>
      </h2>
      <div className="h-[3px] w-28 bg-green-500 mx-auto mb-6"></div>

      {/* Sub-description */}
      <p className="text-gray-800 mb-10 max-w-3xl mx-auto">
        ESI return filing has a lot of benefits. Here are some of them.
      </p>

      {/* Benefit Points */}
      <div className="text-left max-w-4xl mx-auto space-y-6">
        <div>
          <h3 className="font-semibold text-gray-900 mb-1">
            Compliance with the law:
          </h3>
          <p className="text-gray-700">
            It complies with the ESI Act, and helps avoid fines or charges for
            not following the rules.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 mb-1">
            Employee Welfare:
          </h3>
          <p className="text-gray-700">
            It ensures financial help as well as medical support when they are
            sick, pregnant, or for similar other purposes. This contribution
            makes them feel secure.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 mb-1">
            Medical Support:
          </h3>
          <p className="text-gray-700">
            Employees get free medical treatment for their family members.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 mb-1">
            Clear data for the company:
          </h3>
          <p className="text-gray-700">
            Regular ESIC contribution helps maintain clear records of the
            company towards employee insurance. This helps companies when they
            are required to submit audit reports.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 mb-1">
            Monetary support when jobless:
          </h3>
          <p className="text-gray-700">
            If any employee becomes jobless, this contribution supports them.
            They can withdraw fully or partially from this account to get
            financial support.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 mb-1">
            Trust building towards the company:
          </h3>
          <p className="text-gray-700">
            Regular return filing builds confidence in the minds of employees
            that the company is great in providing ESI benefits. This makes them
            happier and more loyal to the company.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 mb-1">
            Good and clear business practice:
          </h3>
          <p className="text-gray-700">
            When you have to run a business for a longer period, clear data of
            ESI submission helps a lot. It is a great business practice.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 mb-1">
            Supports in tough situations:
          </h3>
          <p className="text-gray-700">
            If the employee cannot work because of injury during work, becomes
            disabled for any reason, or passes away, the employee or his family
            gets financial support.
          </p>
        </div>
      </div>

      {/* Closing Paragraph */}
      <p className="text-gray-800 mt-10 max-w-4xl mx-auto">
        Hence, ESI filing is a great business practice that helps employees a
        lot.
      </p>
      <p className="text-gray-800 mt-2 max-w-4xl mx-auto">
        Would you like to get support for ESI return filing? The CA/CS of our
        company will do the needful flawlessly.
      </p>
    </section>
  );
}
