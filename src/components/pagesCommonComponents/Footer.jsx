import React from "react";
import fastinfo from '../../assets/fastinfo-group.svg';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaGooglePlay,
  FaApple
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#dce6f0] pt-10 border-t">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Business Registration</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Private Limited Company</li>
            <li>Limited Liability Partnership</li>
            <li>One Person Company</li>
            <li>Public limited Company</li>
            <li>Section 8 Company</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Licenses</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>FSSAI [Food License]</li>
            <li>FSSAI Renewal</li>
            <li>IEC [Import/Export Code]</li>
            <li>IEC Certificate Modification</li>
            <li>BIS Certificate</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Registration</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>TM Registration</li>
            <li>TM Objection</li>
            <li>TM Renewal</li>
            <li>Copyright Registration</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">GST / Accounting & Tax</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>GST Registration</li>
            <li>GST Filing</li>
            <li>GST Modification</li>
            <li>GST Cancellation</li>
            <li>PF-ESIC Registration</li>
            <li>PF-ESIC Return Filing</li>
            <li>Online Bookkeeping</li>
          </ul>
        </div>
      </div>

      {/* Logo & Disclaimer */}
      <div className="max-w-7xl mx-auto px-6 mt-8">
        <div className="flex flex-col items-center md:items-start">
          <img
            src={fastinfo}
            alt="Logo"
            className="h-10 mb-2"
          />
          <p className="text-xs text-gray-600 text-center md:text-left max-w-3xl mb-4">
            Online Legal India is a part of FastInfo Legal Services Pvt Ltd. Which is registered under the Companies Act, 2013.
          </p>
        </div>

        <div className="text-xs text-gray-500 leading-relaxed max-w-4xl mb-6">
          This website is privately operated and not affiliated with any government entity. We do not represent or are affiliated with, endorsed by, or in any way connected to any government body or department. The form provided is not for official registration purposes; rather, it's designed to gather information from our clients to help us better understand their business or needs. By continuing to use this website, you acknowledge that we are a private company. We offer assistance based on customer requests, and the fees collected on this website are charged as a platform fee. We reserve the right to outsource matters as deemed necessary. We are in the process of giving our brand a new name. Stay tuned for updates. This platform does not offer legal services, nor does it provide legal advice or representation. Do you require legal assistance? We strongly recommend consulting with a qualified lawyer or law firm.
        </div>
      </div>

      {/* Socials & App Buttons */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center border-t border-gray-300 py-5">
        <div className="flex space-x-4 text-gray-700 text-lg mb-4 md:mb-0">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaYoutube /></a>
        </div>

        <div className="flex space-x-3">
          <button className="flex items-center gap-2 border px-3 py-2 rounded-lg bg-black text-white hover:opacity-80">
            <FaGooglePlay className="text-2xl" />
            <div className="text-left text-xs">
              <div>GET IT ON</div>
              <div className="text-sm font-semibold">Google Play</div>
            </div>
          </button>
          <button className="flex items-center gap-2 border px-3 py-2 rounded-lg bg-black text-white hover:opacity-80">
            <FaApple className="text-2xl" />
            <div className="text-left text-xs">
              <div>Download on the</div>
              <div className="text-sm font-semibold">App Store</div>
            </div>
          </button>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="bg-[#1d5581] text-white text-xs py-3">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <div>© 2019 - 2025 Online Legal India.</div>
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">Refund Policy</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms and Conditions</a>
          </div>
          <div>Recognised by DPIIT, Government of India</div>
        </div>
      </div>
    </footer>
  );
}
