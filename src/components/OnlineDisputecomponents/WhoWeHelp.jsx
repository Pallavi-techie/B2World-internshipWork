import React from "react";
import { User, Store, Landmark } from "lucide-react"; // lucide-react icons

const data = [
  {
    icon: <User size={48} className="text-orange-500 mx-auto mb-4" />,
    title: "Individuals",
    description:
      "Whether it's a personal dispute or a service issue, we help people find fair, fast, and affordable resolutions.",
    points: [
      "Consumer Related Disputes",
      "Landlord-Tenant Dispute",
      "Neighbor or Community Disputes",
      "Online Purchase Issues",
      "Freelance or Gig Work Disagreements",
    ],
  },
  {
    icon: <Store size={48} className="text-orange-500 mx-auto mb-4" />,
    title: "Businesses",
    description:
      "Streamline your Dispute Resolution with a digital-first approach that saves time and protects relationships.",
    points: [
      "Contractual Disputes",
      "B2B Service or Payment Issues",
      "Client or Vendor Conflicts",
      "Employment & HR Disputes",
      "Partnership Disagreements",
    ],
  },
  {
    icon: <Landmark size={48} className="text-orange-500 mx-auto mb-4" />,
    title: "Government Bodies",
    description:
      "ODR platforms reduce court backlogs and create efficient resolution channels for civil matters.",
    points: [
      "Referred Disputes",
      "Small Claims Mediation",
      "Consumer Protection Cases",
      "Regulatory Complaint Handling",
    ],
  },
];

const WhoWeHelp = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#031B4E] mb-12">
        Who We Help
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl p-8 text-center border border-gray-100"
          >
            {item.icon}
            <h3 className="text-xl font-semibold text-[#031B4E] mb-3">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4">{item.description}</p>
            <ul className="text-left list-disc list-inside space-y-2 text-gray-700 text-sm">
              {item.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhoWeHelp;
