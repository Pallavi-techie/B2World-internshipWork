import React from "react";
import { FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";

const jobs = [
  { title: "Customer Care Executive" },
  { title: "Spoken English Trainer" },
  { title: "Team Leader (Outbound Sales)" },
  { title: "Quality Analysis" },
  { title: "Digital Marketing", post: "Digital Marketing Manager" },
  { title: "Sales", post: "Sales Trainer" },
  { title: "Operations", post: "Team Leader Support" },
  { title: "IT", post: "IT Team Leader" },
  { title: "Management", post: "PA" },
  { title: "Operations & Sales", post: "Senior Manager" },
  { title: "Management", post: "Growth Manager" },
];

export default function JobApply() {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center py-10 px-4">
      <div className="bg-white shadow-lg rounded-3xl flex flex-col md:flex-row w-full max-w-7xl overflow-hidden">
        {/* Left Filter Panel */}
        <div className="md:w-1/4 p-6 border-r border-gray-200">
          <h2 className="text-lg font-bold text-gray-800 mb-4 border-b-4 border-teal-500 inline-block">
            Filter Your Search
          </h2>

          <div className="mt-6 space-y-4">
            <h3 className="flex items-center gap-2 text-gray-700 font-semibold text-lg">
              <FaMapMarkerAlt className="text-teal-500" /> Location
            </h3>
            <p className="text-gray-600 ml-7">Kolkata</p>
          </div>
        </div>

        {/* Right Job Listing Section */}
        <div className="md:w-3/4 p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Join us
          </h2>
          <p className="text-gray-600 mb-6 text-lg">Current Openings</p>

          {/* Job Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 relative overflow-hidden group hover:shadow-lg transition-shadow"
              >
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-gray-200 rounded-tl-full opacity-70"></div>

                <h3 className="text-lg font-semibold text-teal-700 mb-2">
                  {job.title}
                </h3>

                {job.post && (
                  <p className="text-gray-700 mb-4 text-sm flex items-center gap-2">
                    <FaBriefcase className="text-teal-600" /> Post –{" "}
                    <span className="font-medium">{job.post}</span>
                  </p>
                )}

                <p className="text-sm text-gray-500 mb-3">
                  Kolkata, West Bengal, <span className="text-teal-500">India</span>
                </p>

                <button className="bg-teal-600 text-white font-medium px-6 py-2 rounded-full shadow-md hover:bg-teal-700 transition">
                  Apply
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
