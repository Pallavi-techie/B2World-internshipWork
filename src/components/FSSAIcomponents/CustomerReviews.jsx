import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Star } from "lucide-react";
import googleLogo from "../../assets/google-logo.webp"; // Add Google logo in your assets folder

const reviews = [
  {
    name: "Sooraj Panickar",
    title: "Great experience and highly talented…",
    review:
      "I was completely new to the FSSAI registration process, but Prianka das from Online Legal India made it simple and stress-free. She explained everything clearly and submitted my application quickly. Very satisfied with their professionalism.",
  },
  {
    name: "Shams Tabrez",
    title: "Excellent service",
    review:
      "I was worried about how to get my FSSAI registration done, but Online Legal India made the entire process hassle-free. The team was responsive and guided me step-by-step. I received my registration certificate much earlier than expected. Highly recommended!",
  },
  {
    name: "Nisha Patel",
    title: "Very supportive team!",
    review:
      "The Online Legal India team helped me get my business license smoothly. Excellent communication and support throughout the process. Highly trustworthy!",
  },
];

const CustomerReviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="bg-white py-16 px-4">
      <div className="text-center mb-10">
        <img
          src={googleLogo}
          alt="Google Reviews"
          className="w-32 mx-auto mb-4"
        />
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Customer Reviews
        </h2>
      </div>

      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className="p-4">
              <div className="bg-[#f6f6f6] rounded-lg shadow-md p-6 h-full">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                  ))}
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">
                  {review.title}
                </h3>
                <p className="text-gray-700 text-sm mb-4">{review.review}</p>
                <p className="text-sm font-semibold text-gray-900">
                  Customer Name
                </p>
                <p className="text-sm text-gray-600">{review.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CustomerReviews;
