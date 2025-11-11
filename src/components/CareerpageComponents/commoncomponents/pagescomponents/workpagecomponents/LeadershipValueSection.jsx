import React from "react";
import leaderImg from "../../../../../assets/leadership.webp"; 

const LeadershipValueSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Text Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 leading-snug">
            We <span className="text-teal-600 font-semibold">build leaders.</span><br />
            We <span className="text-teal-600 font-semibold">create value.</span>
          </h2>

          <p className="mt-6 font-semibold text-gray-800">
            Our vision highlights our commitment to developing world-class talent while
            also allowing employees to grow as leaders and contribute to a broader cause.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            The attraction and retention of high-quality employees have been made
            possible by this distinctive brand proposition, which is underpinned by
            active management participation in decision-making. This wealth of talent,
            together with its strong alignment with our strategy, has helped FastInfo
            Group cement its position as one of India's most valued start-up companies.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="relative">
          <img
            src={leaderImg}
            alt="Leadership"
            className="rounded-xl shadow-lg w-65 object-cover"
          />
          <div className="absolute -top-5 -right-5 bg-teal-500 text-white font-semibold py-4 px-6 rounded-lg shadow-md">
            <p className="text-3xl font-bold leading-tight">600+</p>
            <p className="text-sm font-normal">Job Opportunity</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipValueSection;
