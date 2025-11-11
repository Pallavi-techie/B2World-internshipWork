import React from "react";

const services = [
  {
    title: "Trademark Registration",
    image: "/images/trademark.jpg",
  },
  {
    title: "Import Export Code",
    image: "/images/importexport.jpg",
  },
  {
    title: "FSSAI License",
    image: "/images/fssai.jpg",
  },
  {
    title: "GST Registration Services",
    image: "/images/gst.jpg",
  },
  {
    title: "Company Registration Services",
    image: "/images/company.jpg",
  },
];

export default function PopularServices() {
  return (
    <section className="py-12 bg-white text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-10 relative inline-block">
        Popular Services
        <span className="block w-16 h-[3px] bg-green-600 mx-auto mt-2 rounded"></span>
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center shadow-md hover:shadow-lg transition duration-300 rounded-lg overflow-hidden bg-white"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <p className="mt-3 text-sm font-medium text-gray-700 mb-4">
              {service.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
