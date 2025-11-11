import React from "react";
import startupLogo from "../../assets/startup-india.png"; // add your local image
import emudhraLogo from "../../assets/emudhra.png"; // add your local image

const OverviewSection = () => {
  return (
    <section className="py-16 px-6 md:px-16 bg-white text-gray-800">
      {/* Top Stats Card */}
      <div className="flex flex-col md:flex-row items-center justify-center bg-gray-100 rounded-2xl shadow-sm overflow-hidden mb-12">
        {/* Left Box */}
        <div className="bg-[#29415A] text-white text-center w-full md:w-1/3 py-8">
          <h2 className="text-4xl md:text-5xl font-bold">13427</h2>
          <p className="text-lg mt-2">Consultations Availed!</p>
        </div>

        {/* Middle + Right Boxes */}
        <div className="flex flex-col sm:flex-row justify-between w-full md:w-2/3 bg-gray-50 px-8 py-6 text-center md:text-left gap-8">
          <div className="flex flex-col justify-center items-center md:items-start">
            <p className="font-semibold text-sm text-gray-600 mb-1">GOVT. RECOGNITION</p>
            <img src={startupLogo} alt="Startup India" className="h-8 object-contain" />
            <p className="text-xs text-gray-500 mt-1">DIPP72745</p>
          </div>

          <div className="flex flex-col justify-center items-center md:items-start">
            <p className="font-semibold text-sm text-gray-600 mb-1">AUTHORIZED PARTNER</p>
            <img src={emudhraLogo} alt="eMudhra" className="h-10 object-contain" />
            <p className="text-xs text-gray-500 mt-1">Trust Delivered</p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Overview of Online Company Registration in India
        </h2>
        <div className="h-[3px] w-24 bg-green-500 mx-auto mb-6 rounded-full"></div>

        <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify">
          Company registration is an important process for a proprietor to build a business.
          There are different types of Companies in India, so businessmen need to select the right
          type of company for their business. Companies in India are controlled under the Ministry
          of Corporate Affairs. Registering a company is effortless through Online Legal India,
          as it is processed completely online. At least two members are needed to proceed as
          directors and shareholders. To register a company one needs the Director’s PAN card,
          address proof, and the bank account details with address proof of the registered office.
        </p>
      </div>

      {/* Company Incorporation */}
      <div className="max-w-5xl mx-auto">
        <h3 className="text-xl md:text-2xl font-semibold mb-4">
          Company Incorporation
        </h3>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
          Company incorporation is the lawful process to set up a legal organization or company.
          A corporation is an emerging lawful entity that is resulted from the detachment of the
          company’s assets and earnings from its owners and investors.
        </p>

        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          We provide quick and inexpensive company registration through a 100% online procedure.
          Our services are trustworthy as thousands of companies in India have been registered
          through us.
        </p>
      </div>
    </section>
  );
};

export default OverviewSection;



