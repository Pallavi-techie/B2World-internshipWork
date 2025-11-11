import React from "react";
import { CheckCircle } from "lucide-react";
import bgImage from "../../assets/fssai-benefits-bg.jpeg"; // place your background image in src/assets folder

const leftBenefits = [
  {
    title: "TRUST OF THE CUSTOMERS",
    desc: "An authentic communication is necessary to gain the customer's trust. It will ensure better service and also keep the customers from unhealthy and adulterated food supply.",
  },
  {
    title: "LEGAL ADVANTAGES",
    desc: "FSSAI Certification will enhance the chance of legal enforcement and control over the department at a certain point and will encourage the establishment of several things to a particular area.",
  },
  {
    title: "GOVERNMENT FUNDING AND LOANS",
    desc: "The FSSAI registration will offer the privileges of Government Funding and Loans that can be easily accessible for the business operators.",
  },
  {
    title: "USE OF FSSAI LOGO",
    desc: "The use of FSSAI logo on your product will normally create goodwill trust worthiness amongst the consumers.",
  },
  {
    title: "BRAND VALUE",
    desc: "A company will automatically acquire Brand Value once it is FSSAI registered.",
  },
];

const rightBenefits = [
  {
    title: "EXPANSION OF BUSINESS",
    desc: "The FSSAI license will provide a wider scope and privilege of expansion at any geographic location.",
  },
  {
    title: "RECOGNITION OF GOVERNMENT",
    desc: "Government of India recognizes the FSSAI Registration resulting in to customer trust and huge base of consumers.",
  },
  {
    title: "PERMIT OF FOOD BUSINESS",
    desc: "FSSAI License speaks about the safety of the customers concerning to food business.",
  },
  {
    title: "BENEFITS FROM GOVERNMENT ACTIONS ON NON-COMPLIANCE",
    desc: "Government will take action and bestow the help on the company in case of any non-compliance issue in the future.",
  },
  {
    title: "BOOST UP YOUR BUSINESS",
    desc: "If a business is FSSAI registered, it will create handsome client base and boost up the business at a larger scale.",
  },
];

const FssaiBenefitsSection = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat text-white py-16 px-4 md:px-20"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Benefits of FSSAI FoSCoS Certificate
          </h2>
          <div className="w-16 h-1 bg-green-500 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            {leftBenefits.map((item, idx) => (
              <div key={idx} className="flex items-start space-x-3">
                <CheckCircle className="text-green-500 w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white text-lg">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {rightBenefits.map((item, idx) => (
              <div key={idx} className="flex items-start space-x-3">
                <CheckCircle className="text-green-500 w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white text-lg">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FssaiBenefitsSection;
