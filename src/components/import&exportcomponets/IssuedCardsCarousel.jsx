import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const cards = [
  { name: "Nikhil Rao Pinna", iec: "AWTPP5XXXX", date: "18/10/2021", place: "Hyderabad" },
  { name: "Sri Vari Traders", iec: "AEGPV1XXXX", date: "23/10/2021", place: "Tamil Nadu" },
  { name: "A S R Plastic", iec: "NEKPS8XXXX", date: "18/10/2021", place: "Karnataka" },
  { name: "M Lamneilhing Haokip", iec: "AXUPH5XXXX", date: "18/10/2021", place: "Meghalaya" }
];

const IssuedCardsCarousel = () => {
  return (
    <div className="mt-8">
      <h4 className="text-lg font-semibold mb-4">Customers Recently Issued IEC Licenses</h4>
      <Swiper spaceBetween={16} slidesPerView={1.2} breakpoints={{ 768: { slidesPerView: 3 } }}>
        {cards.map((c, i) => (
          <SwiperSlide key={i}>
            <div className="bg-gradient-to-br from-[#f06d45] to-[#d34756] rounded-lg p-6 text-white shadow-card">
              <h5 className="font-bold mb-4">{c.name}</h5>
              <div className="text-sm">
                <div><span className="font-semibold">IEC No.</span> <span className="float-right">{c.iec}</span></div>
                <div className="mt-2"><span className="font-semibold">Date of Issue</span> <span className="float-right">{c.date}</span></div>
                <div className="mt-2"><span className="font-semibold">Place</span> <span className="float-right">{c.place}</span></div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default IssuedCardsCarousel;
