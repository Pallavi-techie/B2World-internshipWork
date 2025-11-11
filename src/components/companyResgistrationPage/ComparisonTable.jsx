import React from "react";
import { motion } from "framer-motion";

const data = {
  headers: [
    "Private Limited Company",
    "One Person Company",
    "Limited Liability Partnership",
    "Partnership Firm",
    "Proprietorship Firm",
  ],
  rows: [
    {
      title: "Act",
      values: [
        "Companies Act, 2013",
        "Companies Act, 2013",
        "Limited Liability Partnership Act, 2008",
        "Indian Partnership Act, 1932",
        "No specified Act",
      ],
    },
    {
      title: "Registration Requirement",
      values: ["Mandatory", "Mandatory", "Mandatory", "Optional", "No"],
    },
    {
      title: "Number of members",
      values: ["2 – 200", "Only 1", "2 – Unlimited", "2 – 50", "Only 1"],
    },
    {
      title: "Number of Director/Partner",
      values: ["2 – 15", "Only 1", "2 – Unlimited", "2 – Unlimited", "Only 1"],
    },
    {
      title: "Separate Legal Entity",
      values: ["Yes", "Yes", "Yes", "No", "No"],
    },
    {
      title: "Liability Protection",
      values: ["Limited", "Limited", "Limited", "Unlimited", "Unlimited"],
    },
    {
      title: "Statutory Audit",
      values: ["Mandatory", "Mandatory", "Dependent", "Not mandatory", "Not mandatory"],
    },
    {
      title: "Ownership Transfer ability",
      values: ["Yes", "No", "Yes", "No", "No"],
    },
    {
      title: "Uninterrupted Existence",
      values: ["Yes", "Yes", "Yes", "No", "No"],
    },
    {
      title: "Foreign Participation",
      values: ["Allowed", "Not Allowed", "Allowed", "Not Allowed", "Not Allowed"],
    },
    {
      title: "Tax Rates",
      values: ["Moderate", "Moderate", "High", "High", "Low"],
    },
    {
      title: "Statutory Compliance",
      values: ["High", "Moderate", "Moderate", "Less", "Less"],
    },
  ],
};

const ComparisonTable = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-10 lg:px-20">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Comparison
        </h2>
        <div className="w-16 h-[3px] bg-green-500 mx-auto mt-2 rounded"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="overflow-x-auto"
      >
        <table className="w-full border border-gray-200 text-sm md:text-base text-center shadow-sm rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 font-semibold border"> </th>
              {data.headers.map((head, i) => (
                <th
                  key={i}
                  className={`py-3 px-4 font-semibold border ${
                    i === 0 ? "bg-gray-200" : ""
                  }`}
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.rows.map((row, i) => (
              <tr key={i} className="hover:bg-gray-50 transition">
                <td className="font-medium text-gray-700 py-3 px-4 border bg-gray-50 text-left">
                  {row.title}
                </td>
                {row.values.map((value, j) => (
                  <td
                    key={j}
                    className={`py-3 px-4 border ${
                      j === 0 ? "bg-gray-100 font-medium" : "text-gray-700"
                    }`}
                  >
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </section>
  );
};

export default ComparisonTable;
