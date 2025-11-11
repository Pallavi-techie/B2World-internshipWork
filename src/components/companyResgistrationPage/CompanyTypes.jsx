import React from "react";
import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

const companies = [
  {
    id: 1,
    title: "Private Limited Company (Pvt. Ltd)",
    description:
      "Private company registration refers to the process of registering a company Under Sec 25, subsection 1(a) of the company registration Act 1956. In this process, there must be at least two members who will be registering the company, they may be the owner or the representative on behalf of the company.",
    image: "/assets/private-limited.jpg",
  },
  {
    id: 2,
    title: "Limited Liability Partnership (LLP)",
    description:
      "Limited Liability Partnership registration refers to the registration of a partnership firm under the Limited Liability Partnership Act 2008. The major point in LLP is every partner have limited liability but not several.",
    image: "/assets/llp.jpg",
  },
  {
    id: 3,
    title: "One Person Company (OPC)",
    description:
      "In this the ownership of the company is only limited to one person. One person Company registration also comes under the Companies Act 1956.",
    image: "/assets/opc.jpg",
  },
  {
    id: 4,
    title: "Section 8 - NGO Registration",
    description:
      "NGO-A NGO is registered under Societies Registration Act, 1860 or the Indian Trusts Act, 1882. One of the key factors here is the NGO has to have a proposed office address.",
    image: "/assets/ngo.jpg",
  },
  {
    id: 5,
    title: "Public Limited Company",
    description:
      "Public company registration refers to the process of registering a company Under Sec 25, subsection 1(a) of the company registration Act 1956. In this process, there must be at least Seven stakeholders.",
    image: "/assets/public-limited.jpg",
  },
  {
    id: 6,
    title: "Business Registration License",
    description:
      "Government agencies provide business licence registrations that allow a business entity to operate within the government’s jurisdiction. Many factors influence license authorizations including business ownership and employee count.",
    image: "/assets/business-license.webp",
  },
];

const CompanyTypes = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Types of Company Registrations
        </h2>
        <div className="w-16 h-[3px] bg-green-500 mx-auto mt-2 rounded"></div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {companies.map((item, index) => (
          <motion.div
            key={item.id}
            className="bg-white border rounded-xl overflow-hidden shadow hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <Building2 className="text-green-600 w-5 h-5" />
                <h3 className="font-semibold text-gray-800 text-lg">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                {item.description}
              </p>
              <button className="bg-green-600 text-white text-sm font-medium px-5 py-2 rounded hover:bg-green-700 transition">
                VIEW DETAILS
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CompanyTypes;
