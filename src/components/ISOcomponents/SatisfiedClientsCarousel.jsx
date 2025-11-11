import React from "react";
import Slider from "react-slick";

import vivact from "../../assets/vivact.webp";
import loavin from "../../assets/loavin.webp";
import varphu from "../../assets/varphu.webp";
import diamond from "../../assets/diamond.webp";
import oxigreen from "../../assets/oxigreen.webp";
import smicky from "../../assets/smicky.webp";
import saranya from "../../assets/saranya.webp";
import maharajchai from "../../assets/maharajchai.webp";

const clients = [
  { id: 1, img: vivact },
  { id: 2, img: loavin },
  { id: 3, img: varphu },
  { id: 4, img: diamond },
  { id: 5, img: oxigreen },
  { id: 6, img: smicky },
  { id: 7, img: saranya },
  { id: 8, img: maharajchai },
];

const SatisfiedClientsCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1800,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <section className="bg-gradient-to-r from-green-600 to-green-400 py-10 rounded-t-[60px]">
      <h2 className="text-center text-white text-2xl md:text-3xl font-semibold mb-6">
        Satisfied Clients
      </h2>

      <div className="max-w-6xl mx-auto px-6">
        <Slider {...settings}>
          {clients.map((client) => (
            <div key={client.id} className="flex justify-center items-center">
              <div className="bg-white rounded-xl shadow-md w-28 h-28 md:w-32 md:h-32 flex justify-center items-center mx-auto transition-transform duration-300 hover:scale-105">
                <img
                  src={client.img}
                  alt="client logo"
                  className="object-contain w-20 h-20 md:w-24 md:h-24"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default SatisfiedClientsCarousel;
