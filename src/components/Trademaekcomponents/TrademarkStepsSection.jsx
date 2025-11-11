import React from "react";

export default function TrademarkStepsSection() {
  return (
    <section className="bg-white py-12 px-6 md:px-16 text-[#0B0B0B] leading-relaxed">
      {/* Heading */}
      <div className="max-w-5xl mx-auto mb-12 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">
          Steps Involved in <span className="text-green-600">The Plan of Trademark Registration</span>
        </h2>
        <p className="text-gray-700 italic">
          There are some steps involved in the plan of trademark registration–
        </p>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto space-y-8 text-gray-700">
        <div>
          <h3 className="font-semibold text-lg mb-2 text-[#053B50]">Exceptional Rights</h3>
          <p className="text-justify">
            The registered trademark owner has complete control over it. The owner may use the same trademark for all other items that fall within the designated class(es) in which it is registered. Furthermore, the proprietor owns the trademark and can prohibit others from using it in the class(es) in which it is registered. It also gives the ability to sue for any unauthorized violation.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2 text-[#053B50]">Increases Trust and Loyalty</h3>
          <p className="text-justify">
            Trademarks signify a product’s or service’s reputation and quality. Registering a trademark increases client confidence and recognition in the market. Furthermore, it contributes to the establishment of loyal and long-term customers who will continuously choose your trademarked brand over others.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2 text-[#053B50]">Determination of Trademark</h3>
          <p className="text-justify">
            Remember it’s essential to build and mark to represent your organization. Another critical aspect is determining which class you belong to. There are now 45 classifications and sectors for which a trademark can be registered. Classifications 1–34 are for products, whereas classes 35–45 are for services.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2 text-[#053B50]">Search for the Mark</h3>
          <p className="text-justify">
            Once you’ve decided on a mark, you should run a search to see if it’s comparable to an already registered mark. You may do this yourself by visiting the Controller General of Patents, Designs, and Trademarks. A public search option is available on the website. After selecting this option, you must select your class and search to obtain data online.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2 text-[#053B50]">Application Submission</h3>
          <p className="text-justify mb-2">
            You can file a single application for several classes, series, or collective trademarks. Form TM-A must be completed for this. This form allows you to register your trademark in more than one class. This form has two distinct cost brackets:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <span className="font-medium">₹8,000</span> rupees or ₹9,000 rupees if you are not a start-up, small business, or individual, you will fall into this category. You must pay Rs. 9,000 if you register the form traditionally, or Rs. 10,000 if you file the form in person with the Office of Trademarks.
            </li>
            <li>
              <span className="font-medium">₹4,500</span> or ₹5,000 rupees for those category individuals (startups, MSMEs, and new businesses). The fee for e-filing the form is Rs. 4,500, or Rs. 5,000 if filed in person.
            </li>
          </ul>
          <p className="text-justify mt-2">
            Make out duplicates of all images when filing the form so that this may result in delays or even rejection of the application. You must fill out all the requirements and provide an image of the trademark, with 8 by 8 cm dimensions. You may be required to submit five copies of the same document. When filing, a soft copy of the application must also be uploaded.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2 text-[#053B50]">Vienna Codification Procedure</h3>
          <p className="text-justify">
            The Vienna Classification, often known as the Vienna Codification, is an international classification of trademark sign components created by the Vienna Agreement (1973). Following the Trademark registration application filing, The Trademark Registrar will file the Vienna classification from the Trademark established on the mark’s figurative components. Accordingly, the trademark application status is normally indicated as “Sent to Vienna Codification” while this work is being done.
          </p>
        </div>
      </div>
    </section>
  );
}
