// import React, { useState } from "react";
// import { FaChevronDown } from "react-icons/fa";
// import logo from "../../../assets/fastinfo-group.svg"; // Replace with your logo path

// export default function Navbar() {
//   const [aboutDropdown, setAboutDropdown] = useState(false);
//   const [brandsDropdown, setBrandsDropdown] = useState(false);

//   return (
//     <nav className="bg-white shadow-sm sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
//         {/* Logo */}
//         <div className="flex items-center space-x-2">
//           <img src={logo} alt="FastInfo" className="h-10 w-auto" />
//           <h1 className="text-2xl font-bold text-gray-800">
//             FAST<span className="text-sky-500">INFO</span>{" "}
//             <span className="text-[10px] font-semibold text-gray-500">GROUP</span>
//           </h1>
//         </div>

//         {/* Navbar Links */}
//         <ul className="flex items-center space-x-8 text-gray-700 font-medium relative">
//           <li className="hover:text-sky-500 cursor-pointer">Home</li>

//           {/* About Us Dropdown */}
//           <li
//             className="relative cursor-pointer hover:text-sky-500"
//             onMouseEnter={() => setAboutDropdown(true)}
//             onMouseLeave={() => setAboutDropdown(false)}
//           >
//             <div className="flex items-center space-x-1">
//               <span>About Us</span>
//               <FaChevronDown className="text-xs" />
//             </div>
//             {aboutDropdown && (
//               <ul className="absolute left-0 mt-3 w-56 bg-white border rounded-lg shadow-lg text-sm py-2">
//                 <li
//                   className="relative px-4 py-2 hover:bg-gray-100"
//                   onMouseEnter={() => setBrandsDropdown(true)}
//                   onMouseLeave={() => setBrandsDropdown(false)}
//                 >
//                   <div className="flex justify-between items-center">
//                     <span>Our Brands</span>
//                     <FaChevronDown className="text-xs text-gray-500" />
//                   </div>

//                   {/* Sub-dropdown */}
//                   {brandsDropdown && (
//                     <ul className="absolute left-full top-0 ml-2 w-56 bg-white border rounded-lg shadow-lg py-2">
//                       <li className="px-4 py-2 hover:bg-gray-100">Online Legal India</li>
//                       <li className="px-4 py-2 hover:bg-gray-100">Fastinfo Class</li>
//                       <li className="px-4 py-2 hover:bg-gray-100">Fastinfo Hub</li>
//                       <li className="px-4 py-2 hover:bg-gray-100">OnlyDesi</li>
//                       <li className="px-4 py-2 hover:bg-gray-100">Online Class India</li>
//                     </ul>
//                   )}
//                 </li>

//                 <li className="px-4 py-2 hover:bg-gray-100">Our Milestones</li>
//                 <li className="px-4 py-2 hover:bg-gray-100">Our Philosophy</li>
//                 <li className="px-4 py-2 hover:bg-gray-100">Blog</li>
//               </ul>
//             )}
//           </li>

//           <li className="hover:text-sky-500 cursor-pointer">Our Founder</li>
//           <li className="hover:text-sky-500 cursor-pointer">Media</li>
//           <li className="hover:text-sky-500 cursor-pointer border-b-2 border-sky-500 pb-1">
//             Career
//           </li>
//           <li className="hover:text-sky-500 cursor-pointer">Contact Us</li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../assets/fastinfo-group.svg"; // Replace with your logo path

export default function Navbar() {
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [brandsDropdown, setBrandsDropdown] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="FastInfo" className="h-10 w-auto" />
          <h1 className="text-2xl font-bold text-gray-800">
            FAST<span className="text-sky-500">INFO</span>{" "}
            <span className="text-[10px] font-semibold text-gray-500">GROUP</span>
          </h1>
        </div>

        {/* Navbar Links */}
        <ul className="flex items-center space-x-8 text-gray-700 font-medium relative">
          <li className="hover:text-sky-500 cursor-pointer">
            <Link to="CareerHome">Home</Link>
          </li>

          {/* About Us Dropdown */}
          {/* <li
            className="relative cursor-pointer hover:text-sky-500"
            onMouseEnter={() => setAboutDropdown(true)}
            onMouseLeave={() => setAboutDropdown(false)}
          >
            <div className="flex items-center space-x-1">
              <span>About Us</span>
              <FaChevronDown className="text-xs" />
            </div>
            {aboutDropdown && (
              <ul className="absolute left-0 mt-3 w-56 bg-white border rounded-lg shadow-lg text-sm py-2">
                <li
                  className="relative px-4 py-2 hover:bg-gray-100"
                  onMouseEnter={() => setBrandsDropdown(true)}
                  onMouseLeave={() => setBrandsDropdown(false)}
                >
                  <div className="flex justify-between items-center">
                    <span>Our Brands</span>
                    <FaChevronDown className="text-xs text-gray-500" />
                  </div>

                 
                  {brandsDropdown && (
                    <ul className="absolute left-full top-0 ml-2 w-56 bg-white border rounded-lg shadow-lg py-2">
                      <li className="px-4 py-2 hover:bg-gray-100">Online Legal India</li>
                      <li className="px-4 py-2 hover:bg-gray-100">Fastinfo Class</li>
                      <li className="px-4 py-2 hover:bg-gray-100">Fastinfo Hub</li>
                      <li className="px-4 py-2 hover:bg-gray-100">OnlyDesi</li>
                      <li className="px-4 py-2 hover:bg-gray-100">Online Class India</li>
                    </ul>
                  )}
                </li>

                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="/blog">Blog</Link>
                </li>
              </ul>
            )}
          </li> */}

          <li className="hover:text-sky-500 cursor-pointer">
            <Link to="ourfounder">Our Founder</Link>
          </li>

          <li className="hover:text-sky-500 cursor-pointer">
            <Link to="media">Media</Link>
          </li>

          <li className="hover:text-sky-500 cursor-pointer border-b-2 border-sky-500 pb-1">
            <Link to="work">Career</Link>
          </li>

          <li className="hover:text-sky-500 cursor-pointer">
            <Link to="ContactUs">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
