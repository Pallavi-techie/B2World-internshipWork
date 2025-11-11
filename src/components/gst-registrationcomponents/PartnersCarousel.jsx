import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const logos = [
  // "/assets/godaddy.png",
  // "/assets/onlinerti.png",
  "/assets/zeenews.webp",
  // "/assets/republic.png",
  "/assets/google.webp",
  "/assets/paytm.webp",
];

const PartnersCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section className="bg-gray-50 py-10">
      <div className="text-center mb-8">
        <h3 className="text-sm font-semibold text-gray-700">
          WE ARE <span className="text-black font-bold">ASSOCIATED WITH:</span>
        </h3>
      </div>

      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          {logos.map((logo, i) => (
            <div key={i} className="flex justify-center items-center">
              <img
                src={logo}
                alt={`partner-${i}`}
                className="h-16 mx-auto object-contain"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default PartnersCarousel;
