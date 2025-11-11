import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Star } from "lucide-react";

// --- Brand Logos (replace with your actual image paths) ---
import fahm from "../../assets/fahm.webp";
import diamond from "../../assets/diamond.webp";
import nitro from "../../assets/nitro.webp";
import muscovy from "../../assets/muscovy.webp";
import mapkin from "../../assets/mapkin.webp";
import veshn from "../../assets/veshn.webp";
import ghavani from "../../assets/bhavani.webp";
import fancy from "../../assets/fancy.webp";

export default function CustomerReviews() {
  const reviews = [
    {
      name: "Nitash Kumar Thakur",
      text: "I’m so glad I chose Online Legal India to register my brand’s trademark. Their online process saved me time and effort, and their pricing was very reasonable. The expert assigned to me was knowledgeable and very helpful throughout the process. Definitely a hassle-free experience!",
    },
    {
      name: "Aayushi Guneshth",
      text: "As someone new to the world of trademarks, I had no idea where to begin. Online Legal India not only guided me through the documentation and process but also ensured my application was filed correctly and on time. They really made things easy for me. Thank you for your fantastic service!",
    },
     {
      name: "Aayushi Guneshth",
      text: "As someone new to the world of trademarks, I had no idea where to begin. Online Legal India not only guided me through the documentation and process but also ensured my application was filed correctly and on time. They really made things easy for me. Thank you for your fantastic service!",
    },
     {
      name: "Aayushi Guneshth",
      text: "As someone new to the world of trademarks, I had no idea where to begin. Online Legal India not only guided me through the documentation and process but also ensured my application was filed correctly and on time. They really made things easy for me. Thank you for your fantastic service!",
    }
  ];

  const logos = [fahm, diamond, nitro, muscovy, mapkin, fancy, ghavani, veshn];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 700,
    autoplaySpeed: 4000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [{ breakpoint: 768, settings: { slidesToShow: 1 } }],
  };

  return (
    <section className="bg-white py-16 px-4 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Google Logo and Heading */}
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
          alt="Google"
          className="mx-auto w-32 mb-2"
        />
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-semibold text-gray-800 mb-10"
        >
          Customer Reviews
        </motion.h2>

        {/* Reviews Carousel */}
        <Slider {...settings} className="mb-16">
          {reviews.map((r, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="px-4"
            >
              <div className="bg-gray-50 border border-gray-200 rounded-xl shadow-sm text-left p-6 md:p-8 min-h-[240px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-yellow-500 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} fill="#facc15" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-5">
                    {r.text}
                  </p>
                </div>
                <div>
                  <p className="text-gray-900 font-semibold text-sm">
                    Customer Name
                  </p>
                  <p className="text-blue-700 text-sm font-medium">{r.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>

        {/* Brand Logos + Success Box */}
        <div className="grid md:grid-cols-2 items-center gap-8 md:gap-16">
          {/* Logos grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 justify-items-center">
            {logos.map((logo, i) => (
              <motion.img
                key={i}
                src={logo}
                alt={`Brand ${i + 1}`}
                className="h-16 w-auto object-contain hover:scale-110 transition-transform duration-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.05 }}
              />
            ))}
          </div>

          {/* Success Message */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 md:gap-6"
          >
            <div className="hidden md:block w-1 h-20 bg-red-500"></div>
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3 leading-snug">
                Successfully applied <br /> 10000+ Brands & Logos
              </h3>
              <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-md shadow-md transition-all">
                Get Started
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

