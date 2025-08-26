"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductsSlider = ({ products }) => {
  const settings = {
    dots: true,
    infinite: products.length > 2,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderStyle = `
    .slick-dots {
      bottom: -30px !important;
    }
    .slick-dots li button:before {
      font-size: 10px !important;
      color: #9ca3af !important; /* gray-400 */
    }
    .slick-dots li.slick-active button:before {
      color: #f59e0b !important; /* yellow-500 */
    }
    .slick-slide > div {
        margin: 0 15px; /* Add some horizontal spacing between slides */
        height: 100%;
    }
    .slick-list {
        margin: 0 -15px; /* Compensate for slide margin */
    }
    .slick-track {
      display: flex !important;
      align-items: stretch;
    }
    .slick-slide {
      height: inherit !important;
    }
  `;

  const PrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 transform -translate-x-[80px] -translate-y-1/2 z-30 bg-[#555353] hover:bg-[#747474] text-white p-3 rounded-full transition-colors duration-300 group"
      aria-label="Previous slide"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  );

  const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 transform translate-x-[80px] -translate-y-1/2 z-30 bg-[#555353] hover:bg-[#747474] text-white p-3 rounded-full transition-colors duration-300 group"
      aria-label="Next slide"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  );

  // Update settings to use custom arrows
  settings.prevArrow = <PrevArrow />;
  settings.nextArrow = <NextArrow />;

  if (!products || products.length === 0) {
    return <p>No products available at the moment.</p>;
  }

  return (
    <div className="products-slider-container">
      <style jsx global>
        {sliderStyle}
      </style>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id}>
            <div className="flex flex-col md:flex-row bg-slate-100 rounded-lg shadow-lg overflow-hidden h-full">
              <div className="relative w-full h-80 md:w-1/2 ">
                {product.main_image ? (
                  <Image
                    src={product.main_image}
                    alt={product.main_title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={90}
                  />
                ) : null}
              </div>
              <div className="p-6 md:w-1/2 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {product.main_title}
                </h3>
                <div
                  className="text-gray-600 mb-4 rich-text-content truncate-description"
                  dangerouslySetInnerHTML={{ __html: product.main_context }}
                />
                <Link
                  href={`/products/${product.slug}`}
                  className="inline-flex items-center text-yellow-500 hover:text-yellow-600 font-semibold group mt-auto"
                >
                  Details
                  <span className="ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-1">
                    &rarr;
                  </span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductsSlider;
