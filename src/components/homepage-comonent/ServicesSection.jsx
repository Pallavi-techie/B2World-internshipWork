// import { Container, Row, Col } from 'react-bootstrap';
// import ServiceCard from './ServiceCard';
// import Trademark from '../../assets/trademark-registration.webp'
// import GST from '../../assets/GST-registration.webp';
// import company from '../../assets/company-registration.webp';
// import Import from '../../assets/import-export-code.webp';
// import consumer from '../../assets/consumer-complaint-odr.webp';
// import fssai from '../../assets/about-us.webp';
// import odr from '../../assets/odr.webp';

// function ServicesSection() {
//   const services = [
//     { image: Trademark , title: 'Trademark Registration Online', description: 'Register your trademark (brand name, logo, slogan, icon, etc.) from anywhere in India through our online registration services', link: 'https://www.onlinelegalindia.com/services/trademark-registration/' },
//     { image: GST, title: 'Service 2', description: 'Desc 2', link: '/service2' },
//     { image: company, title: 'Service 3', description: 'Desc 3', link: '/service3' },
//     { image: Import, title: 'Service 4', description: 'Desc 4', link: '/service4' },
//     { image: consumer, title: 'Service 5', description: 'Desc 5', link: '/service5' },
//     { image: fssai, title: 'Service 6', description: 'Desc 6', link: '/service6' },
//     { image: odr, title: 'Service 7', description: 'Desc 7', link: '/service7' },
//     { image: 'service8.jpg', title: 'Service 8', description: 'Desc 8', link: '/service8' },
//   ];

//   return (
//     <Container className="mt-5 ">
//       <h2 className="mb-4 text-center ">Our Services</h2>
//       <Row>
//         {services.map((service, idx) => (
//           <Col md={3} key={idx}>
//             <ServiceCard {...service} />
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// }

// export default ServicesSection;
// src/components/homepage-component/ServicesSection.jsx

// src/components/homepage-component/ServicesSection.jsx
// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import ServiceCard from "./ServiceCard";
// import Trademark from "../../assets/trademark-registration.webp";
// import GST from "../../assets/GST-registration.webp";
// import company from "../../assets/company-registration.webp";
// import ImportCode from "../../assets/import-export-code.webp";
// import consumer from "../../assets/consumer-complaint-odr.webp";
// import fssai from "../../assets/about-us.webp";
// import Iso from "../../assets/oli-fic-iso-certified.webp";
// import odr from "../../assets/odr.webp";

// function ServicesSection() {
//   const services = [
//     {
//       image: Trademark,
//       title: "Trademark Registration Online",
//       description:
//         "Register your trademark (brand name, logo, slogan, icon, etc.) from anywhere in India through our online registration services.",
//       link: "/services/trademark-registration",
//     },
//     {
//       image: Iso,
//       title: "ISO Registration",
//       description:
//         "Get your ISO Certification from anywhere in India and enhance your business credibility with globally recognized standards.",
//       link: "/services/iso",
//     },
//     {
//       image: GST,
//       title: "GST Registration & Compliance",
//       description:
//         "Ensure flawless GST compliance for your business. Register GST with us and experience the difference.",
//       link: "/services/gst-registration",
//     },
//     {
//       image: company,
//       title: "Company Registration",
//       description:
//         "We have professionals to file everything online on the ROC portal and relieve you of any burden. Click to learn more.",
//       link: "/services/company-registration",
//     },
//     {
//       image: ImportCode,
//       title: "Import-Export Code (IEC)",
//       description:
//         "Get an IEC code from the Directorate General of Foreign Trade, Ministry of Commerce and Industry, Govt. of India, through us.",
//       link: "/services/import-export-code",
//     },
//     {
//       image: consumer,
//       title: "Consumer Dispute Resolution",
//       description:
//         "Say goodbye to long legal battles—Online Legal India brings you quick and smart consumer dispute resolution, online.",
//       link: "/services/consumer-dispute-resolution",
//     },
//     {
//       image: fssai,
//       title: "FSSAI Food License",
//       description:
//         "Register FSSAI with us for certificates and licenses to run your food business flawlessly with perfect compliance.",
//       link: "/services/fssai-license",
//     },
//     {
//       image: odr,
//       title: "Online Dispute Resolution",
//       description:
//         "Say goodbye to courtroom stress—settle disputes digitally with our trusted ODR services, anytime, anywhere!",
//       link: "/services/odr-services",
//     },
//   ];

//   return (
//     <section className="py-16 bg-gray-50">
//       <Container>
//         <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
//           Our <span className="text-blue-600">Services</span>
//         </h2>
//         <Row className="g-4">
//           {services.map((service, idx) => (
//             <Col md={3} sm={6} xs={12} key={idx}>
//               <Link to={service.link} style={{ textDecoration: "none" }}>
//                 <ServiceCard
//                   image={service.image}
//                   title={service.title}
//                   description={service.description}
//                 />
//               </Link>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </section>
//   );
// }

// export default ServicesSection;


import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import Trademark from "../../assets/trademark-registration.webp";
import GST from "../../assets/GST-registration.webp";
import company from "../../assets/company-registration.webp";
import ImportCode from "../../assets/import-export-code.webp";
import consumer from "../../assets/consumer-complaint-odr.webp";
import fssai from "../../assets/fssai-registration.webp";
import Iso from "../../assets/oli-fic-iso-certified.webp";
import odr from "../../assets/odr.webp";

function ServicesSection() {
  const services = [
    {
      image: Trademark,
      title: "Trademark Registration Online",
      description:
        "Register your trademark (brand name, logo, slogan, icon, etc.) from anywhere in India through our online registration services.",
      link: "/services/trademark-registration",
    },
    {
      image: Iso,
      title: "ISO Registration",
      description:
        "Get your ISO Certification from anywhere in India and enhance your business credibility with globally recognized standards.",
      link: "/services/iso",
    },
    {
      image: GST,
      title: "GST Registration & Compliance",
      description:
        "Ensure flawless GST compliance for your business. Register GST with us and experience the difference.",
      link: "/services/gst-registration",
    },
    {
      image: company,
      title: "Company Registration",
      description:
        "We have professionals to file everything online on the ROC portal and relieve you of any burden. Click to learn more.",
      link: "/services/company-registration",
    },
    {
      image: ImportCode,
      title: "Import-Export Code (IEC)",
      description:
        "Get an IEC code from the Directorate General of Foreign Trade, Ministry of Commerce and Industry, Govt. of India, through us.",
      link: "/services/import-export-code",
    },
    {
      image: consumer,
      title: "Consumer Dispute Resolution",
      description:
        "Say goodbye to long legal battles—Online Legal India brings you quick and smart consumer dispute resolution, online.",
      link: "/services/consumer-dispute-resolution",
    },
    {
      image: fssai,
      title: "FSSAI Food License",
      description:
        "Register FSSAI with us for certificates and licenses to run your food business flawlessly with perfect compliance.",
      link: "/services/fssai-license",
    },
    {
      image: odr,
      title: "Online Dispute Resolution",
      description:
        "Say goodbye to courtroom stress—settle disputes digitally with our trusted ODR services, anytime, anywhere!",
      link: "/services/odr-services",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Our <span className="text-blue-600">Services</span>
        </h2>
        <Row className="g-4 justify-center">
          {services.map((service, idx) => (
            <Col md={3} sm={6} xs={12} key={idx}>
              <Link to={service.link} style={{ textDecoration: "none" }}>
                <ServiceCard
                  image={service.image}
                  title={service.title}
                  description={service.description}
                />
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default ServicesSection;
