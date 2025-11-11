import React from "react";

const licenses = [
  {
    name: "Nikhil Rao Pinna",
    iecNo: "AWTPP5XXXX",
    date: "18/10/2021",
    place: "Hyderabad",
  },
  {
    name: "Sri Vari Traders",
    iecNo: "AEGPV1XXXX",
    date: "23/10/2021",
    place: "Tamil Nadu",
  },
  {
    name: "A S R Plastic",
    iecNo: "NEKPS8XXXX",
    date: "18/10/2021",
    place: "Karnataka",
  },
  {
    name: "M Lamneilhing Haokip",
    iecNo: "AXUPH5XXXX",
    date: "18/10/2021",
    place: "Meghalaya",
  },
];

const IecLicenseSection = () => {
  return (
    <section className="w-full flex flex-col items-center py-12 px-4 bg-white">
      {/* Top Recognition & Partner Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
        <div className="bg-gradient-to-r from-orange-200 to-green-200 rounded-lg shadow-md px-6 py-4 text-center">
          <p className="text-sm font-semibold text-gray-700">GOVT. RECOGNITION</p>
          <h2 className="text-2xl font-bold text-orange-600 mt-1">#startupindia</h2>
          <p className="text-gray-600 font-medium">DIPP72745</p>
        </div>

        <div className="bg-gradient-to-r from-orange-200 to-green-200 rounded-lg shadow-md px-6 py-4 text-center">
          <p className="text-sm font-semibold text-gray-700">AUTHORIZED PARTNER</p>
          <div className="flex justify-center items-center mt-1">
            <span className="text-2xl font-bold text-purple-700">e</span>
            <span className="text-lg text-gray-700 ml-1">mudhra</span>
          </div>
          <p className="text-gray-600 text-sm">Trust Delivered</p>
        </div>
      </div>

      {/* Section Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-2">
        Online Legal India's Customers Recently Issued IEC Licenses By DGFT
      </h2>
      <div className="w-24 h-1 bg-green-500 rounded-full mb-8"></div>

      {/* License Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {licenses.map((license, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-br from-orange-400 to-red-400 text-white p-6 rounded-xl shadow-lg hover:scale-105 transform transition duration-300"
          >
            <div className="absolute top-0 right-0 -mt-3 -mr-3 bg-yellow-400 text-blue-700 font-bold text-xs px-2 py-1 rounded-full shadow">
              ⭐
            </div>
            <h3 className="font-bold text-lg mb-3">{license.name}</h3>
            <p className="text-sm">
              <span className="font-semibold">IEC No:</span> {license.iecNo}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Date of Issue:</span> {license.date}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Place:</span> {license.place}
            </p>
          </div>
        ))}
      </div>

      {/* Help Button */}
      <div className="mt-10">
        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-md shadow-md transition duration-300">
          Need help with IEC License
        </button>
      </div>
    </section>
  );
};

export default IecLicenseSection;
