import React from "react";

const brands = [
  {
    title: "Online Legal India",
    desc: "Trusted platform for assisting with GST, FSSAI, Trademark, and Company registration services.",
    img: "/assets/legal.webp",
  },
  {
    title: "FastInfo Class",
    desc: "An EdTech platform for LIVE one-to-one interactive lessons between instructor and student.",
    img: "/assets/class.webp",
  },
  {
    title: "FastInfo Hub",
    desc: "Online digital marketing and IT services platform with affordable SEO, PPC, and web development.",
    img: "/assets/hub.webp",
  },
];

const PopularBrands = () => (
  <section className="py-16 bg-gray-50 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-10">
      Our <span className="text-teal-600">Popular Brands</span>
    </h2>
    <div className="grid md:grid-cols-3 gap-8 px-6 md:px-16">
      {brands.map((brand, i) => (
        <div
          key={i}
          className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-all"
        >
          <img src={brand.img} alt={brand.title} className="w-full h-56 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{brand.title}</h3>
            <p className="text-gray-600 mb-4">{brand.desc}</p>
            <button className="px-5 py-2 bg-teal-500 text-white rounded-full hover:bg-teal-600">
              Read More
            </button>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default PopularBrands;
