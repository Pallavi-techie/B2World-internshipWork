// import React from "react";
// import { Carousel, Container, Row, Col, Image } from "react-bootstrap";
// import google from "../../assets/google.webp";
// import paytm from "../../assets/paytm.webp";

// function Herosection() {
//   const logos = ["logo1.png", "logo2.png", "logo3.png", "logo4.png"];

//   return (
//     <div>
//       {/* Hero (simplified) */}
//       <div className="bg-gradient-to-r from-[#0f1724]/80 to-[#0f1724]/60 text-white">
//         <div className="max-w-6xl mx-auto px-4 py-16 lg:py-28 flex flex-col lg:flex-row items-center gap-8">
//           <div className="flex-1">
//             <h1 className="text-3xl lg:text-5xl font-extrabold leading-tight">
//               Registration to Compliance — We've Got You Covered!
//             </h1>
//             <p className="mt-4 text-gray-200 max-w-xl">
//               Trademark, Company Registration, ISO Certification, Licenses, Tax & Compliance and Consumer Dispute — end-to-end legal services for startups and businesses.
//             </p>

//             <div className="mt-6 flex gap-3 flex-wrap">
//               <a href="#" className="px-4 py-2 bg-white text-[#0f1724] rounded shadow-sm">
//                 Our Services
//               </a>
//               <a href="#" className="px-4 py-2 border rounded text-white">
//                 Learn More
//               </a>
//             </div>

//             {/* Small trust card */}
//             <div className="mt-6 inline-flex items-center gap-3 bg-white/10 p-3 rounded">
//               <div className="text-sm">Google Rating</div>
//               <div className="text-yellow-300 font-semibold">4.4 ★</div>
//             </div>
//           </div>

//           <div className="flex-1">
//             <img
//               src="/assets/hero-ceo.jpg"
//               alt="CEO"
//               className="w-full max-w-sm mx-auto rounded-md shadow-lg"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Carousel section */}
//       <div className="mt-10">
//         <Carousel>
          
//           <Carousel.Item>
//             <img className="d-block w-56 h-auto object-contain " src={paytm} alt="Slide 1" />
//             <Carousel.Caption className="font-bold text-center">
//               <h4>We are associated with</h4>
            
            
//             </Carousel.Caption>
//           </Carousel.Item>
//           <Carousel.Item>
//             <img className="d-block w-56 h-auto object-contain" src={google} alt="Slide 2" />
//           </Carousel.Item>
//         </Carousel>

//         <Container className="mt-3">
//           <Row>
//             {logos.map((logo, idx) => (
//               <Col key={idx} md={3} className="text-center">
//                 <Image src={logo} fluid />
//               </Col>
//             ))}
//           </Row>
//         </Container>
//       </div>
//     </div>
//   );
// }

// export default Herosection;
import React from "react";
import Slider from "react-slick";
import google from "../../assets/google.webp";
import paytm from "../../assets/paytm.webp";
import heroCeo from "../../assets/hero-ceo.jpg"; // make sure this exists
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HeroSection() {
  const partnerLogos = [
    { src: google, alt: "Google Partner" },
    { src: paytm, alt: "Paytm Partner" },
    { src: google, alt: "Google Partner" },
    { src: paytm, alt: "Paytm Partner" },
  ];

  // ⚙️ Slick carousel settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="bg-[#0f1724] text-white">
      {/* 🌟 Hero Section */}
      <div className="bg-gradient-to-r from-[#0f1724]/90 to-[#1e293b]/70">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-28 flex flex-col lg:flex-row items-center gap-10">
          {/* Left Content */}
          <div className="flex-1 space-y-6">
            <h1 className="text-3xl lg:text-5xl font-extrabold leading-tight">
              Registration to Compliance —{" "}
              <span className="text-yellow-400">We've Got You Covered!</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-xl">
              Trademark, Company Registration, ISO Certification, Licenses,
              Tax & Compliance and Consumer Dispute — end-to-end legal services
              for startups and businesses.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a
                href="#"
                className="px-5 py-2 bg-yellow-400 text-black font-semibold rounded-md shadow hover:bg-yellow-300 transition"
              >
                Our Services
              </a>
              <a
                href="#"
                className="px-5 py-2 border border-gray-400 rounded-md text-white hover:bg-white hover:text-[#0f1724] transition"
              >
                Learn More
              </a>
            </div>

            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg w-fit mt-4">
              <span className="text-sm text-gray-200">Google Rating</span>
              <span className="text-yellow-300 font-bold text-lg">4.4 ★</span>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1">
            <img
              src={heroCeo}
              alt="CEO"
              className="w-full max-w-md mx-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* 🌀 Associated Partners Carousel */}
      <div className="bg-gray-100 py-12 text-center">
        <h3 className="text-gray-800 text-xl font-bold uppercase tracking-wide mb-8">
          We are Associated With:
        </h3>

        <div className="max-w-4xl mx-auto">
          <Slider {...settings}>
            {partnerLogos.map((logo, index) => (
              <div key={index} className="px-4">
                <div className="bg-white rounded shadow-sm p-4 flex justify-center items-center h-28">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="w-40 h-auto object-contain"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

