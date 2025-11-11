import React from "react";

const Media = () => {
  const mediaData = [
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/49/TED_logo.svg",
      title: "From Rs. 2000 Salary",
      description:
        "to Multi-Crore Turnover Company | Rajesh Kewat | TEDxPrabhatkiran.",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Zee_News_logo.svg",
      title: "Meet Rajesh Kewat,",
      description:
        "The Small Town Entrepreneur Behind Online Legal India and Fastinfo class’s Success.",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/36/Forbes_logo.svg",
      title: "Showstoppers 2022-23 edition",
      description:
        "Mr. Rajesh Kewat getting featured in the special edition of Forbes India Magazine – Showstoppers 2022-23.",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Mid-Day_logo.svg",
      title: "Businessman of the Year Award 2022",
      description:
        "Rajesh Kewat Conferred with Businessman of the Year Award at Brands Impact NFA 2022.",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7d/AsiaOne_logo.svg",
      title: "Rajesh Kewat, the MD",
      description:
        "of Fastinfo Legal Services Pvt Ltd, owns a movie-like story: a man who lost everything for his love & attained great success.",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Zee_News_logo.svg",
      title: "Believe it or Not: Rs 299",
      description:
        "Made Thousands of Careers by Learning Online from Fastinfo Class™",
    },
  ];

  return (
    <div className="bg-white">
      {/* ===== HERO SECTION ===== */}
      <section
        className="relative h-[400px] flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/medium-shot-businessman-reading-newspaper_23-2149352933.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-teal-800/70"></div>
        <h1 className="relative text-4xl md:text-5xl font-bold">Media</h1>
      </section>

      {/* ===== MEDIA GRID SECTION ===== */}
      <section className="max-w-6xl mx-auto py-16 px-6 md:px-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {mediaData.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 shadow-md rounded-2xl text-center p-6 flex flex-col justify-between hover:shadow-xl transition"
          >
            <div className="flex justify-center items-center mb-4">
              <img
                src={item.logo}
                alt="Media Logo"
                className="h-10 object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 mb-6">{item.description}</p>
            <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-full py-2 px-6 transition">
              Learn more
            </button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Media;
