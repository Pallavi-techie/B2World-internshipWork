import React from "react";

const ImportanceOfTrademarkSection = () => {
  const cards = [
    {
      title: "Exceptional Rights",
      desc: "The registered trademark owner has complete control over its usage concerning the items that fall under the classes submitted. Furthermore, the proprietor can sue anyone who uses the trademark name without authorization and can get suitable orders from the court.",
    },
    {
      title: "Increases Trust and Loyalty",
      desc: "Trademarks signify a product’s quality. A customer retains and trusts a brand that has a good reputation. Consistent recognition enhances customer loyalty and ensures they choose your trademarked brand over others.",
    },
    {
      title: "Product Differentiation",
      desc: "Customers can quickly locate your brand. If you register your mark, it helps distinguish your goods or services from those of competitors who are offering similar items. It helps customers relate to your organization’s values, quality, and uniqueness.",
    },
    {
      title: "Gives a Sense of Identity to a Product’s Quality",
      desc: "Trademark registration provides your product with a reputation and standard. It helps the customer identify your products easily and builds trust. Moreover, the quality of the product is easily verified and maintained.",
    },
    {
      title: "Creating Assets",
      desc: "Trademark registration creates an intangible asset. A registered trademark can be sold, franchised, or assigned. Entrepreneurs and companies can benefit financially from the rights associated with such assets.",
    },
    {
      title: "Use of the ® Symbol",
      desc: "When you obtain trademark registration, you may use the ® symbol, showing that your mark is registered and protected. Unauthorized use of the mark can be challenged under infringement laws.",
    },
    {
      title: "Protect Against Infringement",
      desc: "Once a trademark is registered, it provides legal protection against infringement. The owner can sue anyone who uses the mark without authorization or deceptively uses a similar mark.",
    },
    {
      title: "Ten Years of Low-Cost Protection",
      desc: "Trademark registration is inexpensive and has long-term benefits. Once registered, it is valid for ten years and can be renewed every ten years by paying a small renewal fee.",
    },
    {
      title: "Global Trademark Registration",
      desc: "Trademarks registered in India are also used as a basis for registering in other countries, allowing global brand recognition. This helps build international trust and lays the foundation for global expansion.",
    },
    {
      title: "Recruit Human Resources",
      desc: "Popular brands inspire young professionals to associate with them. A strong trademark helps attract better talent, adds credibility, and improves company reputation and professionalism.",
    },
  ];

  return (
    <section className="px-6 md:px-20 py-12 bg-white text-gray-800">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-black">
          Importance of Trademark Registration in India
        </h2>
        <p className="text-sm md:text-base text-gray-600 mt-2">
          The importance of trademark registration in India is as follows:
        </p>
      </div>

      {/* Cards Grid - 5 per row on large screen */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-xl p-6 text-center"
          >
            <h3 className="text-[#053B50] font-semibold text-lg mb-3">
              {card.title}
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImportanceOfTrademarkSection;

