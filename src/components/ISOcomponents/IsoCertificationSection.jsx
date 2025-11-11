import React from "react";

const IsoCertificationSection = () => {
  return (
    <section className="w-full bg-white text-gray-900 px-6 md:px-20 py-12 leading-relaxed">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-medium">
          Welcome to{" "}
          <span className="text-[#F97316] font-semibold">Online Legal India</span>
        </h2>
        <h1 className="text-3xl md:text-4xl font-semibold mt-2">
          ISO Certification Services
        </h1>
      </div>

      {/* What is ISO */}
      <div className="space-y-6 max-w-4xl mx-auto">
        <div>
          <h3 className="text-lg font-bold">What is ISO?</h3>
          <p className="font-semibold mt-2">
            “When things don’t work as they should, it often means that standards are absent.”
          </p>
          <p className="mt-3">
            ISO or International Organization for Standardization (ISO) certification establishes
            reliability and credibility among consumers, clients, users, investors, and business
            partners. To compete with well-established organizations in the globalized economy,
            standardization in manufacturing, quality maintenance, safety, and security are crucial.
            ISO helps to speed up reaching your goal.
          </p>
          <p className="mt-3">
            ISO certification is done by IAF, and we process the data for you to ensure successful
            submission of forms. Get in touch with us to avoid any hazards.
          </p>
        </div>

        {/* Phases of ISO */}
        <div>
          <p className="font-semibold">The phases for certification after ISO submission:</p>
          <ul className="list-decimal list-inside mt-2 space-y-1">
            <li>Documentation</li>
            <li>Validation and Verification</li>
            <li>Draft Copy Issue</li>
            <li>Approval of Draft Copy by Clients</li>
            <li>Final Certificate Issued</li>
          </ul>
        </div>

        {/* Types of ISO */}
        <div>
          <h3 className="text-lg font-bold">Types of ISO Certification</h3>
          <p className="mt-2">
            ISO certification providers are of two types: IAF Accreditation Body and Non-IAF
            Compliance body.
          </p>
        </div>

        {/* IAF Accreditation Body */}
        <div>
          <h3 className="text-lg font-bold">IAF Accreditation Body:</h3>
          <p className="mt-2">
            IAF stands for The International Accreditation Forum — a worldwide renowned ISO
            accreditation body that assesses and provides conformity across various fields of
            management. It ensures processes, products, and services are validated and verified. IAF
            certification is a bit costlier and carries the mention “IAF Approved Certificate.”
          </p>
        </div>

        {/* Non-IAF Compliance body */}
        <div>
          <h3 className="text-lg font-bold">Non-IAF Compliance Body:</h3>
          <p className="mt-2">
            These accreditation bodies are not members of IAF but can issue ISO certificates. They
            are authentic and globally accepted. These certificates mention “ISO Certificate” but
            not “IAF.” Non-IAF certifications are less costly compared to IAF ISO certification.
          </p>
        </div>
      </div>

      {/* Contact Us Button */}
      <div className="text-center mt-12">
        <p className="text-xl font-medium mb-5">
          Call our experts to learn more
        </p>
        <a
          href="/contact"
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition duration-300"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default IsoCertificationSection;
