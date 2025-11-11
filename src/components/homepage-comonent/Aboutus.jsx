import React from "react";
import aboutImg from "../../assets/about-us.webp";

const Aboutus = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-5 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            About Us
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Online Legal India is a subsidiary of FastInfo Legal Services Pvt. Ltd.,
            registered under the Companies Act, 2013.
          </p>
          <p className="text-gray-600 leading-relaxed">
            With the facility of a proficient team of professionals, we provide a
            wide variety of services. We provide top-notch solutions for
            individuals, business owners, company proprietors, corporate bodies,
            and others for their registration and related issues they face in
            their everyday lives.
          </p>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={aboutImg}
            alt="About illustration"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
