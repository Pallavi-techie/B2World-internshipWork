import React from "react";

export default function TrademarkInfoSection() {
  return (
    <section className="bg-white py-12 px-6 md:px-16 text-[#0B0B0B] leading-relaxed">
      {/* Background of Trademark Registry */}
      <div className="max-w-5xl mx-auto mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4">
          Background of Trademark Registry
        </h2>
        <p className="text-gray-700 mb-4 text-justify">
          The trademark registry was founded in 1940, followed by the Trademark
          Act in 1999. Currently, the trademark registry serves as the Act’s
          operational or functional body. It can also be stated to be
          functioning concurrently. As a functioning entity, the trademark
          registry administers all of the laws and regulations of the Indian
          Trademark Act.
        </p>
        <p className="text-gray-700 text-justify">
          The trademark registry’s headquarters are in Mumbai, with branch
          offices in Delhi, Ahmedabad, Chennai, and Kolkata. When registering a
          trademark, it is first registered under the Trademark Act of 1999, and
          then it is registered with the trademark registrar. Before
          registering a trade mark, the registrar will verify to see if it fits
          all of the Act’s requirements.
        </p>
      </div>

      {/* What are the Trademark Classes */}
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4">
          What are the <span className="text-green-600">Trademark</span> Classes?
        </h2>
        <p className="text-gray-700 mb-4 text-justify">
          There are 45 trademark classes, and all goods and services are
          classified according to these classes. You must exercise extreme
          caution while selecting the classes since they will affect the
          validity of your trademark for your company’s products/services. If
          your company sells various goods and services that fall into several
          classes, you must guarantee that you may file for a trademark under
          all of the appropriate classes.
        </p>

        <p className="text-gray-700 mb-4 font-medium">
          In India, some of the most common trademark classes are:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <span className="font-semibold">Class 9</span> consists of mobile
            software (App) and electronics.
          </li>
          <li>
            <span className="font-semibold">Readymade Clothing</span> is
            included in Class 25.
          </li>
          <li>
            <span className="font-semibold">Class 35</span> involves business
            management and advertising, online retailing or wholesaling,
            e-commerce.
          </li>
          <li>
            Education and entertainment are included in{" "}
            <span className="font-semibold">Class 41</span>.
          </li>
        </ul>
      </div>
    </section>
  );
}
