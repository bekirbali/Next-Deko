"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSlider = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    pauseOnFocus: true,
    fade: true,
    cssEase: "linear",
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  // Custom arrow components
  const PrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-300 group"
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
      className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-300 group"
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

  // Slide data with more variety
  const slides = [
    {
      id: 1,
      image: "/assets/images/slider/slide1.jpg",
      title: "Kaliteli Elektrik Malzemeleri",
      subtitle: "LV Çözümlerinde Türkiye'nin Yükselen Yıldızı",
      buttonText: "Ürünleri İncele",
      bgGradient: "from-blue-500 to-blue-800",
    },
    {
      id: 2,
      image: "/assets/images/slider/slide2.jpg",
      title: "Profesyonel Çözümler",
      subtitle: "Anahtar Teslim MCB&RCCB",
      subtitle2: "Üretim Hattı Çözümleri",
      buttonText: "Hizmetlerimiz",
      bgGradient: "from-green-500 to-green-800",
    },
    {
      id: 3,
      image: "/assets/images/slider/slide3.jpg",
      title: "Güvenliğiniz Önceliğimiz",
      subtitle: "Hayatınızı Korumaktan Daha Fazlasını Yapıyoruz.",
      buttonText: "Hakkımızda",
      bgGradient: "from-purple-500 to-purple-800",
    },
    {
      id: 4,
      image: "/assets/images/slider/slide4.jpg",
      title: "Orijinal Ürünler",
      subtitle: "Orijinal Ürün Üreticinize Hoşgeldiniz!",
      buttonText: "Teknolojilerimiz",
      bgGradient: "from-orange-500 to-red-800",
    },
    {
      id: 5,
      image: "/assets/images/slider/slide5.jpg",
      title: "Ekip Çalışması",
      subtitle:
        "İş dünyasında harika şeyler asla bir kişi tarafından yapılmamıştır. Bunlar her zaman bir ekip tarafından yapılmıştır.",
      subtitle2: `"Steve Jobs"`,
      buttonText: "Güvenlik",
      bgGradient: "from-gray-500 to-gray-800",
    },
    {
      id: 6,
      image: "/assets/images/slider/slide6.jpg",
      title: "25 Yıllık Tecrübe",
      subtitle: "Deneyimimize Güvenin",
      buttonText: "Teslimat Bilgisi",
      bgGradient: "from-cyan-500 to-blue-800",
    },
    {
      id: 7,
      image: "/assets/images/slider/slide7.jpg",
      title: "Teknolojilerimiz",
      subtitle: "Son Test ve Üretim Teknolojisi",
      buttonText: "Destek Al",
      bgGradient: "from-indigo-500 to-purple-800",
    },
  ];

  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden bg-gray-900">
      <style jsx global>{`
        .slick-dots {
          bottom: 24px !important;
          z-index: 30;
        }
        .slick-dots li button:before {
          color: rgba(255, 255, 255, 0.5) !important;
          font-size: 12px !important;
        }
        .slick-dots li.slick-active button:before {
          color: white !important;
        }
        .slick-arrow {
          z-index: 30;
        }
        .slick-prev:before,
        .slick-next:before {
          display: none;
        }
      `}</style>

      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="relative h-[500px] md:h-[600px] lg:h-[700px]"
          >
            {/* Actual Image */}
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0} // Priority loading for first image
                sizes="100vw"
                quality={85}
              />
            </div>

            {/* Gradient overlay for better text readability */}
            <div
              className={`absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10`}
            ></div>

            {/* Content */}
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-2xl text-white">
                  <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 leading-tight animate-fadeInUp">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl lg:text-2xl mb-8 opacity-90 animate-fadeInUp animation-delay-200">
                    {slide.subtitle}
                  </p>
                  <p className="text-lg md:text-xl lg:text-2xl mb-8 opacity-90 animate-fadeInUp animation-delay-200">
                    {slide?.subtitle2}
                  </p>
                  {/* <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 text-lg hover:scale-105 animate-fadeInUp animation-delay-400">
                    {slide.buttonText}
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
