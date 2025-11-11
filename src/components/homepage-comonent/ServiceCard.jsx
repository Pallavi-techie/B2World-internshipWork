// import { Card, Button } from 'react-bootstrap';

// function ServiceCard({ image, title, description, link }) {
//   return (
//     <Card className="h-100 mb-3">
//       <Card.Img variant="top" src={image} />
//       <Card.Body>
//         <Card.Title className='font-bold text-center ' >{title}</Card.Title>
//         <Card.Text>{description}</Card.Text>
//         <Button variant="primary" href={link}>Learn More</Button>
//       </Card.Body>
//     </Card>
//   );
// }

// src/components/homepage-component/ServiceCard.jsx
// import React from "react";
// import { Card } from "react-bootstrap";

// function ServiceCard({ image, title, description }) {
//   return (
//     <Card className="h-100 mb-3">
//       <Card.Img variant="top" src={image} />
//       <Card.Body>
//         <Card.Title className="font-bold text-center">{title}</Card.Title>
//         <Card.Text>{description}</Card.Text>
//       </Card.Body>
//     </Card>
//   );
// }

// export default ServiceCard;

import React from "react";
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";

function ServiceCard({ image, title, description }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true }}
      className="cursor-pointer"
    >
      <Card className="border-0 shadow-md hover:shadow-2xl rounded-2xl overflow-hidden transition-all duration-300 bg-white h-full">
        {/* Image Section */}
        <div className="relative overflow-hidden">
          <Card.Img
            variant="top"
            src={image}
            alt={title}
            className="h-52 w-full object-cover transform hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Content Section */}
        <Card.Body className="p-5 flex flex-col justify-between">
          <Card.Title className="text-lg font-semibold text-center text-gray-900 mb-3">
            {title}
          </Card.Title>
          <Card.Text className="text-gray-600 text-sm text-center leading-relaxed">
            {description.length > 120
              ? description.slice(0, 120) + "..."
              : description}
          </Card.Text>
          <div className="text-center mt-4">
            <span className="inline-block text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300">
              Learn More →
            </span>
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
}

export default ServiceCard;
