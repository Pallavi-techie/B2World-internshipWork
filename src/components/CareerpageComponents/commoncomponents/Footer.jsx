import React from "react";
import { FaFacebookF, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import logo from "../../../assets/fastinfo-group.svg"; // adjust path if needed

export default function Footer() {
  return (
    <footer className="bg-[#2b9797] text-white">
      {/* Top Section */}
      <div className="container mx-auto px-6 py-10 text-center md:text-left">
        {/* Logo and Tagline */}
        <div className="flex flex-col items-center md:items-start">
          <img src={logo} alt="FastInfo Logo" className="h-14 mb-3" />
          <p className="text-lg font-medium">
            FastInfo is the India’s next level online platform who is providing
            all type of online services into a single platform
          </p>
        </div>

        {/* Links Section */}
        <div className="grid md:grid-cols-3 gap-10 mt-10 text-left">
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick link:</h3>
            <ul className="space-y-2 text-base">
              <li><a href="#" className="hover:text-sky-300">Our Founder</a></li>
              <li><a href="#" className="hover:text-sky-300">Invest</a></li>
              <li><a href="#" className="hover:text-sky-300">Media</a></li>
              <li><a href="/career" className="hover:text-sky-300">Career</a></li>
              <li><a href="/blog" className="hover:text-sky-300">Blog</a></li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Useful Links:</h3>
            <ul className="space-y-2 text-base">
              <li><a href="#" className="hover:text-sky-300">Online Legal India</a></li>
              <li><a href="#" className="hover:text-sky-300">FastInfo Class</a></li>
              <li><a href="#" className="hover:text-sky-300">Fastinfo Hub</a></li>
              <li><a href="#" className="hover:text-sky-300">OnlyDesi</a></li>
              <li><a href="#" className="hover:text-sky-300">Online Class India</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact us:</h3>
            <div className="flex items-center space-x-3 mb-4">
              <FaEnvelope className="text-xl" />
              <a
                href="mailto:info@fastinfo.com"
                className="hover:text-sky-300 text-base"
              >
                info@fastinfo.com
              </a>
            </div>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-white text-[#2a8484] p-2 rounded-full hover:bg-sky-300 transition-all"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="bg-white text-[#2a8484] p-2 rounded-full hover:bg-sky-300 transition-all"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#f8f8f8] text-gray-800 py-3">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-center md:text-left text-gray-800 font-medium">
            Copyright ©2019–2023{" "}
            <span className="text-[#2a8484] font-semibold">FASTINFO</span> All
            Rights Reserved
          </p>
          <div className="flex space-x-6 mt-2 md:mt-0">
            <a href="#" className="hover:text-[#2a8484] font-medium">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#2a8484] font-medium">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
