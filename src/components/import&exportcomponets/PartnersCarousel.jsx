import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";


const logos = [
  "/assets/tata.png",
  "/assets/paytm.png",
  "/assets/icici.png"
];

const PartnersCarousel = () => {
  return (
    <div className="mt-6">
      <h4 className="text-lg font-semibold mb-4">Associated with</h4>
      <Swiper
        spaceBetween={24}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 3 }
        }}
      >
        {logos.map((l, i) => (
          <SwiperSlide key={i} className="flex justify-center">
            <div className="bg-white px-6 py-4 shadow-card rounded-md">
              <img src={l} alt={`partner-${i}`} className="h-12 object-contain" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PartnersCarousel;
