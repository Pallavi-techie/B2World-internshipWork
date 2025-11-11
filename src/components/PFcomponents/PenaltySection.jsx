import React from "react";

export default function PenaltySection() {
  return (
    <section className="py-14 px-6 md:px-20 bg-white text-center">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
        Penalties if not filed in time
      </h2>
      <div className="h-[3px] w-32 bg-green-500 mx-auto mb-6"></div>

      {/* Subtext */}
      <p className="text-gray-700 mb-2">
        The employers will face a penalty for not filing PF on time.
      </p>
      <p className="font-semibold text-gray-900 mb-8">
        The details are as follows
      </p>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-[400px] mx-auto border border-gray-300 text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-6 border-b font-semibold text-gray-900">
                Delays
              </th>
              <th className="py-3 px-6 border-b font-semibold text-gray-900">
                Penalty
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-6 border-b text-gray-800">0-2 Months</td>
              <td className="py-3 px-6 border-b text-gray-800">5% per annum</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-6 border-b text-gray-800">2-4 Months</td>
              <td className="py-3 px-6 border-b text-gray-800">10% per annum</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-6 border-b text-gray-800">4-6 Months</td>
              <td className="py-3 px-6 border-b text-gray-800">15% per annum</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-6 border-b text-gray-800">6+ Months</td>
              <td className="py-3 px-6 border-b text-gray-800">
                25% per annum (subject to 100% maximum)
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
