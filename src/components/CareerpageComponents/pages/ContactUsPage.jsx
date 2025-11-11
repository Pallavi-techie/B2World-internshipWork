import React from "react";
import { FaPhoneAlt, FaGlobe, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUsPage = () => {
  return (
    <div className="bg-white">
      {/* ===== HERO SECTION ===== */}
      <section
        className="relative h-[400px] flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/contact-us-concept-background-blue_23-2147710603.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-teal-800/70"></div>
        <h1 className="relative text-4xl md:text-5xl font-bold">Contact Us</h1>
      </section>

      {/* ===== CONTACT DETAILS SECTION ===== */}
      <section className="max-w-7xl mx-auto py-16 px-6 md:px-10 grid md:grid-cols-2 gap-10">
        {/* LEFT SIDE: Get In Touch */}
        <div className="bg-teal-600 text-white p-8 rounded-2xl shadow-lg flex flex-col gap-6 justify-center">
          <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>

          <div className="flex items-center gap-4">
            <div className="bg-white text-teal-600 p-3 rounded-full">
              <FaPhoneAlt />
            </div>
            <p className="font-medium text-lg">033 4006 9060</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-white text-teal-600 p-3 rounded-full">
              <FaGlobe />
            </div>
            <p className="font-medium text-lg">www.fastinfo.com</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-white text-teal-600 p-3 rounded-full">
              <FaEnvelope />
            </div>
            <p className="font-medium text-lg">info@fastinfo.com</p>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-white text-teal-600 p-3 rounded-full">
              <FaMapMarkerAlt />
            </div>
            <p className="font-medium text-lg">
              8th Floor, Kariwala Towers, J1–5, EP Block, Salt Lake Sec–V,
              Kolkata–700091, West Bengal, India
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: Office Cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {/* Kolkata Office */}
          <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition">
            <img
              src="https://images.unsplash.com/photo-1590608897129-79da98d15969?auto=format&fit=crop&w=600&q=60"
              alt="Kolkata Office"
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">Kolkata Office</h3>
              <p className="text-gray-600 text-sm">
                8th Floor, Kariwala Towers, J1–5, EP Block, Salt Lake Sec–V,
                Kolkata–700091, West Bengal, India
              </p>
            </div>
          </div>

          {/* Noida Contact Center */}
          <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition">
            <img
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=600&q=60"
              alt="Noida Contact Center"
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">
                Noida Contact Center
              </h3>
              <p className="text-gray-600 text-sm">
                Unit No–14, Ground Floor, Tower–A, Logix Cyber Park, Sec–62,
                Noida, Gautam Budh Nagar, Uttar Pradesh–201301
              </p>
            </div>
          </div>

          {/* Bangalore Contact Center */}
          <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition sm:col-span-2">
            <img
              src="https://images.unsplash.com/photo-1507209696998-3c532be9b2b1?auto=format&fit=crop&w=800&q=60"
              alt="Bangalore Contact Center"
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">
                Bangalore Contact Center
              </h3>
              <p className="text-gray-600 text-sm">
                HUSTLE SPACE CO–WORK, No.1 Ayana Tree, Dasarahalli Main Road,
                Bengaluru – 560024
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;
