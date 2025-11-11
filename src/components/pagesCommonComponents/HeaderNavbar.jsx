import React, { useState, useEffect, useRef } from "react";
import Logo from "../../assets/logo.svg";
import { EllipsisVertical, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeaderNavbar() {
  const [openMobile, setOpenMobile] = useState(false);
  const [hideTop, setHideTop] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [menuState, setMenuState] = useState(1); // toggles between Option 1 and Option 2
  const topRef = useRef(null);
  const navRef = useRef(null);

  // Menu lists
  const navLinks = [
    { name: "Trademark" },
    { name: "Company Registration" },
    { name: "ISO", path: "/iso" },
    { name: "Licenses" },
    { name: "Tax & Compliance" },
    { name: "Consumer Dispute", path: "/consumer-dispute" },
    { name: "All Services", path: "/services" },
  ];

  const secondMenu = [
    { name: "Home", path: "/" },
    { name: "Career", path: "/career" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blog" },
  ];

  // Hide top bar on scroll
  useEffect(() => {
    const onScroll = () => setHideTop(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Toggle between Option 1 & Option 2 menus
  const toggleMenuState = () => {
    setMenuState((prev) => (prev === 1 ? 2 : 1));
  };

  // Toggle dropdown (Trademark, Company, etc.)
  const handleDropdown = (name) => {
    setDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <>
      {/* Top contact bar */}
      <div
        ref={topRef}
        className={`fixed inset-x-0 z-[60] bg-[#0f1724] text-white text-[13px] transition-transform duration-300 ${
          hideTop ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span>📞</span>
              <span>08069029400</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✉️</span>
              <span>info@onlinelegalindia.com</span>
            </div>
          </div>
          <div className="text-xs">
            <a href="/login" className="hover:underline text-blue-400">
              Already registered? Login now
            </a>
          </div>
        </div>
      </div>

      {/* Yellow navbar */}
      <div
        ref={navRef}
        className={`fixed z-[50] w-full bg-[#fde68a] shadow-md transition-all duration-300 ${
          hideTop ? "top-0" : "top-[36px]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-3 flex items-center justify-between relative">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img
              src={Logo}
              alt="Online Legal India"
              className="w-52 h-auto object-contain"
            />
          </a>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-3 lg:gap-6">
            {(menuState === 1 ? navLinks : secondMenu).map((link, idx) =>
              link.path ? (
                link.name === "Career" ? (
                  // ✅ Career opens in a new tab
                  <a
                    key={link.name}
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[15px] font-medium text-gray-800 hover:text-[#f59e0b] transition-colors"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-[15px] font-medium text-gray-800 hover:text-[#f59e0b] transition-colors"
                  >
                    {link.name}
                  </Link>
                )
              ) : (
                <div key={link.name} className="relative">
                  <button
                    onClick={() => handleDropdown(link.name)}
                    className="text-[15px] font-medium text-gray-800 hover:text-[#f59e0b] transition-colors flex items-center gap-1"
                  >
                    {link.name}
                    <ChevronDown size={14} />
                  </button>

                  {dropdown === link.name && (
                    <div
                      className="absolute left-0 top-full mt-2 w-[650px] bg-gradient-to-br from-yellow-50 to-white shadow-2xl rounded-2xl p-6 border border-gray-100 z-[100] animate-fade-in"
                      onMouseLeave={() => setDropdown(null)}
                    >
                      {/* Trademark Dropdown */}
                      {link.name === "Trademark" && (
                        <div className="grid grid-cols-2 gap-10">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3 text-lg border-b border-yellow-200 pb-1">
                              Trademark
                            </h4>
                            <ul className="space-y-2 text-gray-700 text-sm">
                              <li>
                                <Link
                                  to="/trademark-registration"
                                  className="block text-gray-700 hover:text-[#f59e0b] transition duration-200 no-underline"
                                >
                                  Trademark Registration
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/trademark-renewal"
                                  className="hover:text-[#f59e0b] transition"
                                >
                                  Trademark Renewal
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/trademark-objection"
                                  className="hover:text-[#f59e0b] transition"
                                >
                                  Trademark Objection
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/trademark-opposition"
                                  className="hover:text-[#f59e0b] transition"
                                >
                                  Trademark Opposition
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/trademark-assignment"
                                  className="hover:text-[#f59e0b] transition"
                                >
                                  Trademark Assignment
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/series-trademark"
                                  className="hover:text-[#f59e0b] transition"
                                >
                                  Series Trademark
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3 text-lg border-b border-yellow-200 pb-1">
                              Copyright & Patent
                            </h4>
                            <ul className="space-y-2 text-gray-700 text-sm">
                              <li>
                                <Link
                                  to="/copyright-registration"
                                  className="hover:text-[#f59e0b] transition"
                                >
                                  Copyright Registration
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/patent-registration"
                                  className="hover:text-[#f59e0b] transition"
                                >
                                  Patent Registration
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}

                      {/* Company Registration Dropdown */}
                      {link.name === "Company Registration" && (
                        <div className="grid grid-cols-3 gap-8">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3 text-lg border-b border-yellow-200 pb-1">
                              Incorporation
                            </h4>
                            <ul className="space-y-2 text-gray-700 text-sm">
                              <li>
                                <Link
                                  to="/private-limited-company"
                                  className="hover:text-[#f59e0b]"
                                >
                                  Private Limited Company
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/llp-registration"
                                  className="hover:text-[#f59e0b]"
                                >
                                  LLP Registration
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/opc-registration"
                                  className="hover:text-[#f59e0b]"
                                >
                                  One Person Company
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/section-8-company"
                                  className="hover:text-[#f59e0b]"
                                >
                                  Section 8 Company
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/nidhi-company-registration"
                                  className="hover:text-[#f59e0b]"
                                >
                                  Nidhi Company Registration
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3 text-lg border-b border-yellow-200 pb-1">
                              Compliance
                            </h4>
                            <ul className="space-y-2 text-gray-700 text-sm">
                              <li>
                                <Link
                                  to="/director-din-kyc-update"
                                  className="hover:text-[#f59e0b]"
                                >
                                  Director DIN KYC Update
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/appointment-of-director"
                                  className="hover:text-[#f59e0b]"
                                >
                                  Appointment of Director
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/change-company-name"
                                  className="hover:text-[#f59e0b]"
                                >
                                  Change Company Name
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/annual-compliance"
                                  className="hover:text-[#f59e0b]"
                                >
                                  Annual Compliance
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/moa-aoa-amendment"
                                  className="hover:text-[#f59e0b]"
                                >
                                  MOA/AOA Amendment
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3 text-lg border-b border-yellow-200 pb-1">
                              Conversions
                            </h4>
                            <ul className="space-y-2 text-gray-700 text-sm">
                              <li>
                                <Link
                                  to="/opc-to-pvt-conversion"
                                  className="hover:text-[#f59e0b]"
                                >
                                  OPC → Pvt Ltd
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/llp-to-pvt-conversion"
                                  className="hover:text-[#f59e0b]"
                                >
                                  LLP → Pvt Ltd
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/pvt-to-public-conversion"
                                  className="hover:text-[#f59e0b]"
                                >
                                  Pvt → Public Ltd
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}

                      {/* Licenses Dropdown */}
                      {link.name === "Licenses" && (
                        <div className="grid grid-cols-2 gap-8">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3 text-lg border-b border-yellow-200 pb-1">
                              Food & Trade Licenses
                            </h4>
                            <ul className="space-y-2 text-gray-700 text-sm">
                              <li>
                                <Link
                                  to="services/fssai-license"
                                  className="hover:text-[#f59e0b]"
                                >
                                  FSSAI Registration
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/fssai-renewal"
                                  className="hover:text-[#f59e0b]"
                                >
                                  FSSAI Renewal
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/fssai-modification"
                                  className="hover:text-[#f59e0b]"
                                >
                                  FSSAI Modification
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/fssai-annual-return-filing"
                                  className="hover:text-[#f59e0b]"
                                >
                                  FSSAI Annual Return Filing
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3 text-lg border-b border-yellow-200 pb-1">
                              Import & BIS Approvals
                            </h4>
                            <ul className="space-y-2 text-gray-700 text-sm">
                              <li>
                                <Link
                                  to="/import-export-code"
                                  className="hover:text-[#f59e0b]"
                                >
                                  Import Export Code (IEC)
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/bis-certificate"
                                  className="hover:text-[#f59e0b]"
                                >
                                  BIS Certificate
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}

                      {/* Tax & Compliance Dropdown */}
                      {link.name === "Tax & Compliance" && (
                        <div className="grid grid-cols-3 gap-8">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3 text-lg border-b border-yellow-200 pb-1">
                              GST Services
                            </h4>
                            <ul className="space-y-2 text-gray-700 text-sm">
                              <li>
                                <Link
                                  to="/gst-registration"
                                  className="hover:text-[#f59e0b]"
                                >
                                  GST Registration
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/gst-return-filing"
                                  className="hover:text-[#f59e0b]"
                                >
                                  GST Return Filing
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/gst-modification"
                                  className="hover:text-[#f59e0b]"
                                >
                                  GST Modification
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/gstr9-annual-filing"
                                  className="hover:text-[#f59e0b]"
                                >
                                  GSTR-9 Annual Filing
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3 text-lg border-b border-yellow-200 pb-1">
                              Business Compliance
                            </h4>
                            <ul className="space-y-2 text-gray-700 text-sm">
                              <li>
                                <Link
                                  to="/annual-compliance-filing"
                                  className="hover:text-[#f59e0b]"
                                >
                                  Annual Filing & Compliance
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/tax-planning"
                                  className="hover:text-[#f59e0b]"
                                >
                                  Tax Planning & Consultancy
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/project-report"
                                  className="hover:text-[#f59e0b]"
                                >
                                  Project Report
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/12a-80g-csr"
                                  className="hover:text-[#f59e0b]"
                                >
                                  12A / 80G / CSR Registration
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3 text-lg border-b border-yellow-200 pb-1">
                              Payroll Compliance
                            </h4>
                            <ul className="space-y-2 text-gray-700 text-sm">
                              <li>
                                <Link
                                  to="/pf-esic-registration"
                                  className="hover:text-[#f59e0b]"
                                >
                                  PF/ESIC Registration
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/pf-esic-return-filing"
                                  className="hover:text-[#f59e0b]"
                                >
                                  PF/ESIC Return Filing
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )
            )}
          </nav>

          {/* Right side controls */}
          <div className="flex items-center gap-3 relative">
            {/* Three-dot button toggles Option 1 ↔ Option 2 */}
            <button
              onClick={toggleMenuState}
              className="hidden md:inline-flex p-2 rounded-full hover:bg-yellow-300 transition-colors"
              aria-label="Swap menu"
            >
              <EllipsisVertical />
            </button>

            {/* Mobile hamburger */}
            <div className="md:hidden">
              <button
                aria-label="Toggle menu"
                onClick={() => setOpenMobile((s) => !s)}
                className="p-2 rounded-md border"
              >
                {openMobile ? (
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-[90px] md:h-[100px]" />

      {/* Mobile panel */}
      {openMobile && (
        <div className="md:hidden border-t bg-[#fde68a]/95 fixed w-full z-40 top-[90px]">
          <div className="px-6 py-3 space-y-2">
            {(menuState === 1 ? navLinks : secondMenu).map((link) =>
              link.path ? (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setOpenMobile(false)}
                  className="block text-gray-800 py-2 hover:text-[#f59e0b]"
                >
                  {link.name}
                </Link>
              ) : (
                <button
                  key={link.name}
                  onClick={() => {
                    setDropdown(link.name);
                    setOpenMobile(false);
                  }}
                  className="w-full text-left text-gray-800 py-2 hover:text-[#f59e0b]"
                >
                  {link.name}
                </button>
              )
            )}
            <div className="flex gap-2 mt-3">
              <button className="flex-1 py-2 border rounded hover:bg-gray-100">
                Call us
              </button>
              <a
                className="flex-1 py-2 text-center bg-[#f59e0b] text-white rounded"
                href="#"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
