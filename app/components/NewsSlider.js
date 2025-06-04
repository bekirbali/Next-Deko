"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewsSlider = ({ newsItems }) => {
  const settings = {
    dots: true,
    infinite: newsItems.length > 1, // Loop only if more than 1 item
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // Medium devices (tablets, less than 1024px)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Small devices (landscape phones, less than 768px)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Custom styling for dots if needed, similar to HeroSlider
  const sliderStyle = `
    .slick-dots {
      bottom: -30px !important; /* Adjust if necessary */
    }
    .slick-dots li button:before {
      font-size: 10px !important;
      color: #9ca3af !important; /* gray-400 */
    }
    .slick-dots li.slick-active button:before {
      color: #f59e0b !important; /* yellow-500 */
    }
    .slick-slide > div {
        margin: 0 10px; /* Add some horizontal spacing between slides */
    }
    .slick-list {
        margin: 0 -10px; /* Compensate for slide margin */
    }
  `;

  if (!newsItems || newsItems.length === 0) {
    return <p>No news available at the moment.</p>;
  }

  return (
    <div className="news-slider-container py-4">
      <style jsx global>
        {sliderStyle}
      </style>
      <Slider {...settings}>
        {newsItems.map((item, index) => (
          <div key={index} className="px-2 h-full">
            {" "}
            {/* Added h-full for consistent height */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
              {" "}
              {/* Added flex flex-col h-full */}
              <div className="relative h-56 mb-4 rounded-md overflow-hidden">
                <Image
                  src={item.imageSrc}
                  alt={item.altText}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-1 text-sm">{item.date}</p>
              <p className="text-gray-700 leading-relaxed mb-4 flex-grow">
                {" "}
                {/* Added flex-grow */}
                {item.description}
              </p>
              <a
                href={item.link}
                className="text-yellow-500 hover:text-yellow-600 font-semibold mt-auto inline-block" /* Added mt-auto */
              >
                Read More &rarr;
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewsSlider;
