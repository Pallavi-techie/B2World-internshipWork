import React from 'react';
import businessman from '../../assets/businessman-of-the-year.webp';
import IIT from "../../assets/IIT.webp";
import TEDx from "../../assets/TEDx.webp"

const events = [
  {
    title: "Businessman of the Year",
    image: businessman, 
  },
  {
    title: "TEDx",
    image: TEDx,
  },
  {
    title: "IIT Kharagpur",
    image: IIT,
  },
];

const EventsGallery = () => {
  return (
    <section className="py-10 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6">
        Events Gallery
        <div className="h-1 w-16 bg-green-500 mx-auto mt-2 rounded"></div>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-16">
        {events.map((event, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={event.image}
              alt={event.title}
              className="rounded-md shadow-lg object-cover w-full h-90"
            />
            <h3 className="mt-4 text-xl font-semibold">{event.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventsGallery;
