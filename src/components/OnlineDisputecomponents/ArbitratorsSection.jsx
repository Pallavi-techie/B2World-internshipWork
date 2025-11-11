import React from "react";

const ArbitratorsSection = () => {
  return (
    <section className="px-6 md:px-16 lg:px-32 py-12">
      {/* Container */}
      <div className="shadow-md rounded-md overflow-hidden">
        {/* Top Title Bar */}
        <div className="bg-[#1f1f1f] text-[#f9b507] font-bold text-lg md:text-xl px-6 py-3">
          Our Team Of Arbitrators / Mediators Includes
        </div>

        {/* Content Section */}
        <div className="relative bg-gray-100 px-6 py-6">
          {/* Diagonal black shape (for the angled background at bottom-right) */}
          <div className="absolute right-0 bottom-0 w-1/3 h-1/2 bg-[#2a2a2a] clip-diagonal"></div>

          <ul className="relative z-10 space-y-4 text-gray-800 font-medium list-disc list-inside">
            <li>Former Judge, Hon'ble High Court</li>
            <li>Former Registrar NCLT and DRT, Govt. of India</li>
            <li>IIAM Certified & Member of APCAM</li>
          </ul>
        </div>

        {/* Disclaimer Section */}
        <div className="bg-[#f9b507] text-gray-900 px-6 py-4">
          <p className="font-bold">Disclaimer:</p>
          <p className="text-sm md:text-base">
            Our Mediators / Arbitrators Are Professionals Who Act Strictly In A
            Neutral, Private & Non-judicial Capacity.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="bg-[#2a3338] text-center text-[#f9b507] font-semibold text-lg md:text-xl py-4">
          Online Dispute Resolution
        </div>
      </div>

      {/* Custom CSS for diagonal cut */}
      <style>{`
        .clip-diagonal {
          clip-path: polygon(100% 0, 100% 100%, 0 100%);
        }
      `}</style>
    </section>
  );
};

export default ArbitratorsSection;
