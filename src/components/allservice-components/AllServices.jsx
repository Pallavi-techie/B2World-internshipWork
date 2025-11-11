import React from 'react';
import ServiceCard from '../components/ServiceCard';

import trademarkImg from '../assets/trademark-registration.webp';
import paytmImg from '../assets/paytm.webp';

const AllServices = () => {
  const services = [
    {
      title: 'Trademark Registration',
      image: trademarkImg,
      link: '/services/trademark-registration',
    },
    {
      title: 'Paytm Payment Gateway Setup',
      image: paytmImg,
      link: '/services/paytm-setup',
    },
    // Add more services
  ];

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            image={service.image}
            link={service.link}
          />
        ))}
      </div>
    </div>
  );
};

export default AllServices;
