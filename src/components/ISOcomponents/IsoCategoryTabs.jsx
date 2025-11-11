import React, { useState } from "react";

const isoCategories = [
  {
    id: 1,
    title: "Quality",
    items: [
      "ISO 9001:2015 - Quality Management Systems",
      "ISO 10004:2018 - Customer Satisfaction",
    ],
  },
  {
    id: 2,
    title: "Industry",
    items: [
      "ISO 14001:2015 - Environmental Management",
      "ISO 50001:2018 - Energy Management",
    ],
  },
  {
    id: 3,
    title: "Environment and Energy",
    items: [
      "ISO 14064-1:2018 - Greenhouse Gas Inventory",
      "ISO 50003:2021 - Energy Audit Systems",
    ],
  },
  {
    id: 4,
    title: "Services",
    items: [
      "ISO 41001:2018 - Facility Management",
      "ISO 20000-1:2018 - Service Management",
    ],
  },
  {
    id: 5,
    title: "General management",
    items: [
      "ISO 55001:2014 - Asset Management",
      "ISO 22301:2019 - Business Continuity",
    ],
  },
  {
    id: 6,
    title: "Safety and Security",
    items: [
      "ISO 45001:2018 - Occupational Health and Safety",
      "ISO 28000:2022 - Supply Chain Security",
    ],
  },
  {
    id: 7,
    title: "Information technology",
    items: [
      "ISO 20000-1 Service Management Part 1",
      "ISO 20000-2 Service Management Part 2",
      "ISO 20000-1 Enhancement to ISO 27001 for privacy management",
      "ISO 27003:2017 Security techniques",
      "ISO DIS 19770-1 IT asset management",
      "ISO 90003:2014 Software engineering",
      "ISO 27013:2015 Integrated implementation guidance for ISO 27001 & ISO 20000-1",
      "ISO 27010:2015 Information security management for inter-sector communications",
    ],
  },
];

const MoreIsoServicesSection = () => {
  const [activeTab, setActiveTab] = useState(7); // Default tab

  const activeCategory = isoCategories.find((cat) => cat.id === activeTab);

  return (
    <section className="w-full flex flex-col items-center py-10 bg-white">
      {/* Header */}
      <div className="w-full text-center bg-green-200 py-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Not matched? Learn more ISO services:
        </h2>
        <p className="text-xl mt-2 font-medium">
          ISO standards also include the following:
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 py-6 border-b">
        {isoCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveTab(category.id)}
            className={`px-4 py-2 rounded-md text-sm md:text-base font-medium transition-all duration-200 ${
              activeTab === category.id
                ? "bg-green-200 border-b-4 border-orange-400 text-green-700"
                : "hover:bg-gray-100 text-gray-700"
            }`}
          >
            {category.id}. {category.title}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="max-w-4xl w-full px-6 mt-6 text-gray-800">
        <h3 className="font-bold text-lg mb-4">
          {activeCategory.title}
        </h3>
        <ul className="list-disc ml-6 space-y-2">
          {activeCategory.items.map((item, index) => (
            <li key={index} className="text-base leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Button */}
      <div className="mt-10">
        <button className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition-all">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default MoreIsoServicesSection;

