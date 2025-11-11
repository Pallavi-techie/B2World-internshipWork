import React from "react";
import esiIllustration from "../../assets/standing-guy.png"; // 🖼️ Replace with your image path

export default function ESIReturnFilingSection() {
  return (
    <section className="py-14 px-6 md:px-20 bg-white text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-3">
        ESI Return Filing{" "}
        <span className="text-black">Deadlines</span>
      </h2>
      <div className="h-[3px] w-28 bg-green-500 mx-auto mb-6"></div>

      {/* Description */}
      <p className="text-gray-800 max-w-5xl mx-auto leading-relaxed mb-6">
        According to the ESI Act, employers must file ESI returns for six months
        or each month. The company must contribute it on or before the 15th of
        each month. If you want to pay half-yearly, the due date for the period
        of 1st April to 30th September is fixed for 12th November or before, and
        the period of 1st October to 31st March, the due date is 12th May every
        year. Don’t take a burden for it. Our professional CA/CS will file
        everything flawlessly before the time for your company or business
        entity.
      </p>
      <p className="text-gray-900 font-semibold mb-10">Contact us now.</p>

      {/* Penalties Table */}
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Penalties for late ESI filing
      </h3>
      <div className="overflow-x-auto mb-12">
        <table className="min-w-[400px] mx-auto border border-gray-300 text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-6 border-b font-semibold text-gray-900">
                Duration
              </th>
              <th className="py-3 px-6 border-b font-semibold text-gray-900">
                Penalty
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-6 border-b text-gray-800">
                Less than 2 Months
              </td>
              <td className="py-3 px-6 border-b text-gray-800">5%</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-6 border-b text-gray-800">2-4 Months</td>
              <td className="py-3 px-6 border-b text-gray-800">10%</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-6 border-b text-gray-800">4-6 Months</td>
              <td className="py-3 px-6 border-b text-gray-800">15%</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-6 border-b text-gray-800">
                6 Months and above
              </td>
              <td className="py-3 px-6 border-b text-gray-800">25%</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Essential Documents */}
      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
        Essential Documents for Filing{" "}
        <span className="text-orange-600">ESI Returns</span>
      </h3>
      <div className="h-[3px] w-36 bg-green-500 mx-auto mb-6"></div>
      <p className="text-gray-700 mb-10 max-w-3xl mx-auto">
        To ensure a smooth and flawless process to file ESI returns, all
        business entities must submit the following documents:
      </p>

      {/* Document List + Illustration */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl mx-auto">
        <ul className="text-left space-y-3 text-gray-800 list-decimal list-inside flex-1">
          <li>Attendance register</li>
          <li>Register of wages</li>
          <li>Accident Records</li>
          <li>Abstention verification Report</li>
          <li>Inspection book</li>
        </ul>

        <img
          src={esiIllustration}
          alt="ESI Illustration"
          className="w-52 md:w-64 mx-auto"
        />

        <ul className="text-left space-y-3 text-gray-800 list-decimal list-inside flex-1">
          <li>Cancelled cheque of the Company</li>
          <li>PAN Card of the organization</li>
          <li>Form 6 filling out and submission</li>
          <li>Monthly challans and returns for ESI</li>
        </ul>
      </div>
    </section>
  );
}
