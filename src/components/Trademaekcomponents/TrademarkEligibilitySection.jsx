import React from "react";

const TrademarkEligibilitySection = () => {
  return (
    <section className="px-6 md:px-20 py-12 text-gray-800">
      {/* Title Section */}
      <div className="text-center mb-10">
        <h2 className="text-xl md:text-2xl font-semibold text-black">
          Register Your Trademark & Protect Your Brand Name From Intruders with Online Legal India
        </h2>
        <p className="mt-4 text-sm md:text-base leading-relaxed text-gray-700 max-w-4xl mx-auto">
          A trademark is any mark, logo, name, symbol, letter, figure, or word used by any individual or firm 
          to uniquely identify its goods or services from those made or sold by others. 
          As a result, clients must be able to differentiate one’s goods or services from those of others. 
          The requirements of the Trade Marks Act 1999 regulate trademark registration. 
          Trademark registration is vital because the government legally authorizes its grant to the owner, 
          giving exclusive rights in the brand, sale, manufacture, and use of products and services.
        </p>
      </div>

      {/* Eligibility Criteria */}
      <div className="text-center mb-10">
        <h3 className="text-lg md:text-xl font-semibold text-[#053B50] mb-4">
          What are the Eligibility Criteria for Trademark Registration
        </h3>
        <p className="text-sm md:text-base leading-relaxed text-gray-700 max-w-4xl mx-auto">
          In India, anybody who claims to be the trademark owner — whether an individual, proprietor, corporation, 
          or other legal organization — can apply for a trademark. The trademark application can be filed in India, 
          and the “TM” sign can be used within a few days post-application filing/online registration. 
          The Trade Marks Registry takes a minimum of 6-8 months to register if there’s no objection raised by the Registry; 
          in case of an objection, it might take up to 18 months. After the trademark is registered and the 
          registration certificate is issued, the registered symbol ® can be used. Once a trademark registration is done, 
          it will be valid for ten years from the registration date and has to be renewed at the due time.
        </p>
      </div>

      {/* Who Can Opt Section */}
      <div className="text-center mb-6">
        <h3 className="text-lg md:text-xl font-semibold text-[#053B50]">
          Who Can Opt for Trademark Registration
        </h3>
      </div>

      {/* Grid Section */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 max-w-6xl mx-auto text-left">
        {[
          {
            num: "01",
            title: "Any Individual Person",
            desc: "An individual person who is not currently in business can also file a trademark application and receive trademark registration for the brand name they plan to use in the future.",
          },
          {
            num: "02",
            title: "Shared Ownership",
            desc: "A firm’s joint proprietors can apply for a trademark together, and both of their names may be listed in the application form.",
          },
          {
            num: "03",
            title: "Partnership Firm",
            desc: "When registering a trademark, a partnership business with a maximum of 10 members must include all partners’ names in the application. In addition, if a minor partner is present, the name of the minor’s guardian must be stated.",
          },
          {
            num: "04",
            title: "LLP (Limited Liability Partnership)",
            desc: "The application for the Limited Liability Partnership should be in the name of the LLP. It is a legal entity in which partners can’t claim ownership individually. Because the trademark belongs to the LLP, the partners cannot be applicants. The application must contain all the partners’ names.",
          },
          {
            num: "05",
            title: "Indian Corporation",
            desc: "Any Indian firm, whether private limited, public limited, or any other type, must file a trademark application in its name. Because every incorporated organization has a separate legal identity, the director of the firm should be listed as a trademark applicant.",
          },
          {
            num: "06",
            title: "Foreign Corporation",
            desc: "For a foreign-incorporated firm to file a trademark in India, it must do so in the nation where the company is registered. The application must be filed under the corporate name as it is registered in the foreign nation. The registration shall be conducted by the government, and the office should be listed in India’s address when they are running their business in India.",
          },
          {
            num: "07",
            title: "Society or Trust",
            desc: "When filing a trademark application on behalf of a trust or society, the managing trustee, chairman, or secretary of the trust or society must be mentioned.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <h4 className="text-[#053B50] text-2xl font-bold mb-2">
              {item.num}
            </h4>
            <h5 className="font-semibold text-black text-lg mb-2">
              {item.title}
            </h5>
            <p className="text-gray-700 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrademarkEligibilitySection;
