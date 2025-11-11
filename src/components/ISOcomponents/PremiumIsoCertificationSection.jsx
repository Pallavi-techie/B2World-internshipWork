import React from "react";
import qciLogo from "../../assets/qci-logo.webp"; 

const PremiumIsoCertificationSection = () => {
  return (
    <section className="bg-[#ccf8cc] w-full py-12 px-6 md:px-16 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
      {/* Left Side - Logo */}
      <div className="flex justify-center md:justify-end w-full md:w-1/2">
        <img
          src={qciLogo}
          alt="Quality Council of India Logo"
          className="max-w-xs md:max-w-sm object-contain"
        />
      </div>

      {/* Right Side - Content */}
      <div className="text-gray-800 w-full md:w-1/2">
        <h2 className="text-lg md:text-xl font-semibold mb-2">
          Need More Premium ISO Certification?
        </h2>
        <h3 className="text-[#F97316] font-semibold mb-4">Here is How!</h3>

        <h4 className="text-lg font-semibold mb-2">
          Get NABCB Accredited Certificate
        </h4>
        <p className="mb-4">
          NABCB stands for National Accreditation Board for Certification Bodies.
          They provide premium certification for your requirements. It is a
          constituent board of the Quality Council of India. We issue NABCB
          Accredited Certificates at the most reasonable cost.
        </p>
        <p className="mb-4">
          It is a premium certification body that has wide inspection,
          assessment, validation, verification, and certification services in
          accordance with International Standards and Guidelines. NABCB is a
          member of the International Laboratory Accreditation Cooperation
          (ILAC), International Accreditation Forum (IAF), Asia Pacific
          Accreditation Cooperation (APAC), and signatory to their MLAs/MRAs
          (Multilateral Recognition Arrangement / Mutual Recognition Agreement
          or Arrangement).
        </p>
        <p className="mb-4">
          It is a premium certification body that has wide inspection,
          assessment, validation, verification, and certification services in
          accordance with International Standards and Guidelines. NABCB is a
          member of the International Laboratory Accreditation Cooperation
          (ILAC), International Accreditation Forum (IAF), Asia Pacific
          Accreditation Cooperation (APAC), and signatory to their MLAs/MRAs
          (Multilateral Recognition Arrangement / Mutual Recognition Agreement
          or Arrangement).
        </p>

        <p className="font-semibold text-lg mt-6 mb-4">
          What are you waiting for, then?
        </p>

        <a
          href="/contact"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium px-8 py-3 rounded-full transition duration-300"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default PremiumIsoCertificationSection;
