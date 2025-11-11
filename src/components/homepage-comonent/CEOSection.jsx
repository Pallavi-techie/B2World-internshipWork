// import React from 'react';
// import zeenews from '../../assets/zeenews.webp';
// import Ted from '../../assets/Ted-x.webp';
// import footer from '../../assets/footer-forbes-logo.webp';
// import Asia from '../../assets/Asia_One.webp';
// import miday from '../../assets/midday9999.webp';
// import oxford from '../../assets/oxford.webp';
// import pearson from '../../assets/Pearson_logo.webp';
// import edu from '../../assets/educomp_logo_1.webp';


// const mediaMentions = [
//   {
//     logo: zeenews,
//     text: "Meet Rajesh Kewat, The Small Town Entrepreneur Behind Online Legal India's Success",
//   },
//   {
//     logo: Ted,
//     text: "From Rs. 2000 Salary to Multi-Crore Turnover Company | Rajesh Kewat | TEDxPradhikaran.",
//   },
//   {
//     logo: footer,
//     text: "Mr. Rajesh Kewat getting featured in the special edition of Forbes India Magazine - Showstoppers 2022-23",
//   },
//   {
//     logo: Asia,
//     text: "Rajesh Kewat, the MD of Fastinfo Legal Services Pvt Ltd, owns a movie-like story...",
//   },
//   {
//     logo: miday,
//     text: "Rajesh Kewat Conferred with Businessman of the Year Award at Brands Impact NFA 2022.",
//   },
//   {
//     logo: '',
//     text: (
//       <>
//         <strong>Past Experiences</strong><br />
//         <div className="flex gap-4 mt-2 justify-center md:justify-start">
//           <img src={oxford} alt="Oxford" className="h-6" />
//           <img src={pearson} alt="Pearson" className="h-6" />
//           <img src={edu} alt="Educomp" className="h-6" />
//         </div>
//       </>
//     ),
//   },
// ];

// const CEOSection = () => {
//   return (
//     <section className="bg-gray-100 py-12 px-4 md:px-16 text-center">
//       <div className="max-w-6xl mx-auto">
//         {/* Bio */}
//         <div className="mb-8">
//           <h2 className="text-xl font-bold">Rajesh Kewat</h2>
//           <p className="max-w-xl mx-auto text-sm mt-2">
//             The Founder & CEO of Online Legal India, Mr. Rajesh Kewat actually had the courage to sacrifice his well-paid job at Oxford and turn his startup dream into a multi-crore turnover company.
//           </p>
//         </div>

//         {/* Media Mentions */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
//           {mediaMentions.map((item, idx) => (
//             <div
//               key={idx}
//               className="bg-white p-4 rounded-lg shadow hover:shadow-md transition"
//             >
//               {item.logo && (
//                 <img
//                   src={item.logo}
//                   alt="Media Logo"
//                   className="h-6 mb-3"
//                 />
//               )}
//               <p className="text-sm">{item.text}</p>
//             </div>
//           ))}
//         </div>

//         {/* CEO Quote */}
//         <div className="bg-white mt-12 px-6 py-6 rounded-md shadow-md max-w-3xl mx-auto text-center">
//           <h3 className="text-md font-bold mb-2">From CEO's Desk</h3>
//           <p className="text-sm italic text-gray-700">
//             "You don’t need MONEY to build your business empire, what you need is big dreams & a SHARP MIND! If you got it, try it."
//           </p>
//           <p className="mt-4 text-right font-medium">- Rajesh Kewat</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CEOSection;

import React from 'react';
import zeenews from '../../assets/zeenews.webp';
import Ted from '../../assets/Ted-x.webp';
import footer from '../../assets/footer-forbes-logo.webp';
import Asia from '../../assets/Asia_One.webp';
import miday from '../../assets/midday9999.webp';
import oxford from '../../assets/oxford.webp';
import pearson from '../../assets/Pearson_logo.webp';
import edu from '../../assets/educomp_logo_1.webp';

const mediaMentions = [
  {
    logo: zeenews,
    text: "Meet Rajesh Kewat, The Small Town Entrepreneur Behind Online Legal India's Success",
  },
  {
    logo: Ted,
    text: "From Rs. 2000 Salary to Multi-Crore Turnover Company | Rajesh Kewat | TEDxPradhikaran.",
  },
  {
    logo: footer,
    text: "Mr. Rajesh Kewat featured in Forbes India Magazine – Showstoppers 2022-23",
  },
  {
    logo: Asia,
    text: "Rajesh Kewat, the MD of Fastinfo Legal Services Pvt Ltd, owns a movie-like story...",
  },
  {
    logo: miday,
    text: "Conferred with Businessman of the Year Award at Brands Impact NFA 2022.",
  },
  {
    logo: '',
    text: (
      <>
        <strong className="text-gray-800">Past Experiences</strong>
        <div className="flex flex-wrap gap-6 mt-3 justify-center md:justify-start">
          <img src={oxford} alt="Oxford" className="h-8 object-contain" />
          <img src={pearson} alt="Pearson" className="h-8 object-contain" />
          <img src={edu} alt="Educomp" className="h-8 object-contain" />
        </div>
      </>
    ),
  },
];

const CEOSection = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* CEO Intro */}
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-[#053B50]">Rajesh Kewat</h2>
          <p className="max-w-2xl mx-auto text-gray-700 mt-3 text-base leading-relaxed">
            Founder & CEO of <span className="font-semibold text-[#176B87]">Online Legal India</span>. 
            Mr. Kewat left his well-paid job at Oxford to chase his entrepreneurial dream, 
            building a multi-crore turnover company through vision, grit, and innovation.
          </p>
        </div>

        {/* Media Mentions */}
        <h3 className="text-center text-xl font-semibold mb-8 text-gray-800">Media Mentions & Recognition</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {mediaMentions.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between"
            >
              {item.logo && (
                <div className="flex justify-center mb-4">
                  <img src={item.logo} alt="Media Logo" className="h-8 object-contain" />
                </div>
              )}
              <p className="text-sm text-gray-700 text-center md:text-left">{item.text}</p>
            </div>
          ))}
        </div>

        {/* CEO Quote */}
        <div className="bg-white mt-16 px-8 py-10 rounded-2xl shadow-lg border border-gray-100 max-w-3xl mx-auto text-center relative">
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#176B87] text-white rounded-full w-10 h-10 flex items-center justify-center text-xl font-serif">
            “
          </div>
          <h3 className="text-lg font-semibold mb-3 text-[#053B50]">From the CEO’s Desk</h3>
          <p className="text-gray-700 italic leading-relaxed">
            “You don’t need <span className="font-semibold text-[#176B87]">money</span> to build your business empire; 
            what you need are <span className="font-semibold text-[#176B87]">big dreams</span> & a 
            <span className="font-semibold text-[#176B87]"> sharp mind</span>! If you got it, try it.”
          </p>
          <p className="mt-6 text-right font-medium text-gray-800">– Rajesh Kewat</p>
        </div>
      </div>
    </section>
  );
};

export default CEOSection;
