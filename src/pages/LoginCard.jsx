// import { FaGoogle, FaPhoneAlt } from "react-icons/fa";

// export default function LoginCard() {
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-orange-50 to-purple-100">
//       <div className="bg-white shadow-xl rounded-lg p-8 w-[400px] text-center">
//         {/* Logo and Header */}
//         <h1 className="text-2xl font-bold text-gray-800 mb-1">
//           <span className="text-orange-500">O</span>nline Legal India
//         </h1>
//         <p className="text-sm text-gray-600 mb-6">
//           ODR • TM • Registrations & Compliance
//         </p>

//         {/* User Login */}
//         <h2 className="text-lg font-semibold mb-4">User Login</h2>

//         {/* Input Field */}
//         <input
//           type="text"
//           placeholder="OLI ID here"
//           className="border-b-2 border-blue-600 w-full text-center outline-none py-2 mb-6 text-gray-700"
//         />

//         {/* Login Button */}
//         <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-full w-full font-medium mb-4">
//           Login
//         </button>

//         {/* OR Section */}
//         <p className="text-gray-600 mb-4 font-medium">Or</p>

//         {/* Google Login */}
//         <button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2 px-6 py-2 rounded-full w-full font-medium mb-8">
//           <FaGoogle className="text-yellow-300" />
//           Google Login
//         </button>

//         {/* Contact Section */}
//         <div className="text-center mt-4">
//           <p className="text-gray-700 font-semibold mb-3">Contact Us</p>
//           <a
//             href="#"
//             className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-2 rounded-full mb-3 inline-block"
//           >
//             Visit Our Main Website
//           </a>
//           <div className="flex justify-center items-center gap-2 mt-3 text-gray-800 font-semibold">
//             <FaPhoneAlt className="text-black" />
//             08069029400
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// --------------
// import { FaGoogle, FaPhoneAlt } from "react-icons/fa";

// export default function LoginCard() {
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-[#fdeedd] to-[#ebe5ff]">
//       <div className="bg-white shadow-lg rounded-lg p-8 w-[420px] text-center">
//         {/* Logo & Title */}
//         <div className="flex flex-col items-center mb-2">
//           <div className="flex items-center justify-center space-x-1 mb-1">
//             <span className="text-3xl font-extrabold text-[#ff6600]">O</span>
//             <span className="text-2xl font-bold text-[#253858]">
//               nline Legal India
//             </span>
//           </div>
//           <p className="text-sm text-[#253858] font-medium tracking-wide">
//             ODR • TM • Registrations & Compliance
//           </p>
//         </div>

//         {/* User Login */}
//         <h2 className="text-lg font-bold text-[#253858] mt-6 mb-6">
//           User Login
//         </h2>

//         {/* Input Field */}
//         <input
//           type="text"
//           placeholder="OLI ID here"
//           className="border-b-2 border-[#2238c0] w-full text-center outline-none py-2 mb-8 text-gray-700 placeholder-gray-400"
//         />

//         {/* Login Button */}
//         <button className="bg-[#2238c0] hover:bg-[#1d2ea8] text-white px-8 py-2 rounded-full w-[130px] font-medium mb-6 transition-all duration-200">
//           Login
//         </button>

//         {/* OR Section */}
//         <p className="text-[#253858] text-lg font-semibold mb-5">Or</p>

//         {/* Google Login */}
//         <button className="bg-[#2238c0] hover:bg-[#1d2ea8] text-white flex items-center justify-center gap-2 px-6 py-2 rounded-full w-[200px] mx-auto font-medium mb-8 transition-all duration-200">
//           <FaGoogle className="text-[#f4b400] text-lg" />
//           Google Login
//         </button>

//         {/* Contact Section */}
//         <div className="text-center mt-6">
//           <p className="text-[#253858] font-semibold text-lg mb-4">
//             Contact Us
//           </p>
//           <a
//             href="#"
//             className="bg-[#e64a19] hover:bg-[#d84315] text-white font-semibold px-6 py-3 rounded-full mb-4 inline-block transition-all duration-200"
//           >
//             Visit Our Main Website
//           </a>
//           <div className="flex justify-center items-center gap-2 mt-4 text-[#000] font-semibold text-lg">
//             <FaPhoneAlt className="text-black text-xl" />
//             08069029400
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import { FaGoogle, FaPhoneAlt } from "react-icons/fa";

export default function LoginCard() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-[#fdeedd] to-[#ebe5ff] font-sans">
      {/* Main Card */}
      <div className="bg-white shadow-lg rounded-lg px-10 py-8 w-[420px] text-center">
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-3">
          <div className="flex items-center space-x-1 mb-1">
            <span className="text-3xl font-extrabold text-[#ff6600]">O</span>
            <span className="text-[1.6rem] font-bold text-[#253858]">
              nline Legal India
            </span>
          </div>
          <p className="text-sm text-[#253858] tracking-wide font-medium">
            ODR • TM • Registrations & Compliance
          </p>
        </div>

        {/* User Login Title */}
        <h2 className="text-[1.2rem] font-bold text-[#253858] mt-6 mb-5">
          User Login
        </h2>

        {/* Input Field */}
        <input
          type="text"
          placeholder="OLI ID here"
          className="border-b-2 border-[#2238c0] w-full text-center outline-none py-2 mb-8 text-gray-700 placeholder-gray-400"
        />

        {/* Login Button */}
        <button className="bg-[#2238c0] hover:bg-[#1a2ea8] text-white px-8 py-2 rounded-full w-[120px] font-medium mb-5 transition-all duration-200">
          Login
        </button>

        {/* OR */}
        <p className="text-[#253858] text-[1rem] font-semibold mb-5">Or</p>

        {/* Google Login */}
        <button className="bg-[#2238c0] hover:bg-[#1a2ea8] text-white flex items-center justify-center gap-2 px-6 py-2 rounded-full w-[190px] mx-auto font-medium transition-all duration-200">
          <FaGoogle className="text-[#f4b400] text-lg" />
          Google Login
        </button>
      </div>

      {/* Contact Section Outside the Card */}
      <div className="text-center mt-8">
        <p className="text-[#253858] font-bold text-lg mb-4">Contact Us</p>
        <a
          href="#"
          className="bg-[#e64a19] hover:bg-[#d84315] text-white font-semibold px-8 py-3 rounded-full inline-block mb-4 transition-all duration-200"
        >
          Visit Our Main Website
        </a>
        <div className="flex justify-center items-center gap-2 mt-2 text-black font-semibold text-lg">
          <FaPhoneAlt className="text-black text-xl" />
          08069029400
        </div>
      </div>
    </div>
  );
}
