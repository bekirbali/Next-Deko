"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ValuesSlider() {
  const [mounted, setMounted] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding: "0px",
    beforeChange: (_, next) => setActiveSlide(next),
    afterChange: (current) => setActiveSlide(current),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const totalSlides = 11;

  const goToSlide = (index) => {
    setActiveSlide(index);
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  if (!mounted) {
    return <div className="h-96"></div>;
  }

  return (
    <div className="values-slider-container">
      <style jsx global>{`
        .values-slider .slick-track {
          display: flex !important;
        }
        .values-slider .slick-slide {
          height: inherit !important;
          display: flex !important;
        }
        .values-slider .slick-slide > div {
          display: flex !important;
          flex: 1 !important;
          height: 100% !important;
        }
        .icon-circle {
          background: radial-gradient(circle, #e9c46a 0%, #d4a017 100%);
          border: 2px solid #e9c46a;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .icon-image {
          filter: brightness(0) invert(1)
            drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.3)) contrast(1.2);
          transform: scale(1.3);
          opacity: 1;
          -webkit-filter: brightness(0) invert(1)
            drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.3)) contrast(1.2);
        }
        .custom-nav {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 24px;
        }
        .nav-dash {
          width: 24px;
          height: 4px;
          background-color: #e2e2e2;
          border-radius: 2px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .nav-dash.active {
          background-color: #d4a017;
          width: 32px;
        }
      `}</style>
      <Slider ref={sliderRef} {...settings} className="values-slider">
        {/* Sürdürülebilirlik */}
        <div className="px-3 py-5 h-full">
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center h-[380px]">
            <div className="w-24 h-24 icon-circle rounded-full flex items-center justify-center mb-5">
              <Image
                src="/assets/images/values/surdurulebilirlik.svg"
                alt="Sürdürülebilirlik"
                width={48}
                height={48}
                className="icon-image"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Sustainability
            </h3>
            <p className="text-gray-600">
              We make sustainability essential in order to serve our customers
              with immediately, effective and permanent solutions. We take firm
              steps by establishing future-oriented relations with all our
              stakeholders.
            </p>
          </div>
        </div>

        {/* Kalite */}
        <div className="px-3 py-5 h-full">
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center h-[380px]">
            <div className="w-24 h-24 icon-circle rounded-full flex items-center justify-center mb-5">
              <Image
                src="/assets/images/values/kalite.svg"
                alt="Kalite"
                width={48}
                height={48}
                className="icon-image"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Quality</h3>
            <p className="text-gray-600">
              With the awareness that the element that will carry Deko forward
              is quality, we fully implement and certify the quality standards
              in our production and services.
            </p>
          </div>
        </div>

        {/* Sürekli Gelişim */}
        <div className="px-3 py-5 h-full">
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center h-[380px]">
            <div className="w-24 h-24 icon-circle rounded-full flex items-center justify-center mb-5">
              <Image
                src="/assets/images/values/surekli-gelisim.svg"
                alt="Sürekli Gelişim"
                width={48}
                height={48}
                className="icon-image"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Continuous Improvement
            </h3>
            <p className="text-gray-600">
              In order to adapt to the changing and transforming technology, we
              attach great importance to research and development by supporting
              the training of our employees.
            </p>
          </div>
        </div>

        {/* Çalışanlarımızın Mutluluğu */}
        <div className="px-3 py-5 h-full">
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center h-[380px]">
            <div className="w-24 h-24 icon-circle rounded-full flex items-center justify-center mb-5">
              <Image
                src="/assets/images/values/mutlu-calisan.svg"
                alt="Çalışanlarımızın Mutluluğu"
                width={48}
                height={48}
                className="icon-image"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Employee Well - Being
            </h3>
            <p className="text-gray-600">
              Our company derives all its strength and success from the
              happiness of its employees. We provide a working environment where
              our employees can express their concerns, express their opinions
              and participate in our decision-making processes.
            </p>
          </div>
        </div>

        {/* Saygı */}
        <div className="px-3 py-5 h-full">
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center h-[380px]">
            <div className="w-24 h-24 icon-circle rounded-full flex items-center justify-center mb-5">
              <Image
                src="/assets/images/values/saygi.svg"
                alt="Saygı"
                width={48}
                height={48}
                className="icon-image"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Respect</h3>
            <p className="text-gray-600">
              We believe that our goodwill and respect for each other are the
              only permanent truths in our business. We make an effort to share
              this reality with all our stakeholders.
            </p>
          </div>
        </div>

        {/* Verimlilik */}
        <div className="px-3 py-5 h-full">
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center h-[380px]">
            <div className="w-24 h-24 icon-circle rounded-full flex items-center justify-center mb-5">
              <Image
                src="/assets/images/values/verimlilik.svg"
                alt="Verimlilik"
                width={48}
                height={48}
                className="icon-image"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Productivity
            </h3>
            <p className="text-gray-600">
              In all processes, we prioritize efficiency by optimizing the use
              of all kinds of resources and adopt a sustainable development.
            </p>
          </div>
        </div>

        {/* İnovasyon */}
        <div className="px-3 py-5 h-full">
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center h-[380px]">
            <div className="w-24 h-24 icon-circle rounded-full flex items-center justify-center mb-5">
              <Image
                src="/assets/images/values/inovasyon.svg"
                alt="İnovasyon"
                width={48}
                height={48}
                className="icon-image"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Innovation</h3>
            <p className="text-gray-600">
              We embrace change and transformation one step ahead, together with
              our expert employees.
            </p>
          </div>
        </div>

        {/* Müşteri Memnuniyeti */}
        <div className="px-3 py-5 h-full">
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center h-[380px]">
            <div className="w-24 h-24 icon-circle rounded-full flex items-center justify-center mb-5">
              <Image
                src="/assets/images/values/Musteri-memnuniyeti.svg"
                alt="Müşteri Memnuniyeti"
                width={48}
                height={48}
                className="icon-image"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Customer Delight
            </h3>
            <p className="text-gray-600">
              Taking our motivation from the satisfaction of our customers, we
              accompany our customers in all their processes. We provide
              effective solutions for the expectations and demands of our
              customers.
            </p>
          </div>
        </div>

        {/* Takım Ruhu */}
        <div className="px-3 py-5 h-full">
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center h-[380px]">
            <div className="w-24 h-24 icon-circle rounded-full flex items-center justify-center mb-5">
              <Image
                src="/assets/images/values/takim-ruhu.svg"
                alt="Takım Ruhu"
                width={48}
                height={48}
                className="icon-image"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Team Spirit
            </h3>
            <p className="text-gray-600">
              Together with our employees, who are part of the Deko family, we
              always stay true to the team spirit and focus on success.
            </p>
          </div>
        </div>

        {/* Dürüstlük ve Şeffaflık */}
        <div className="px-3 py-5 h-full">
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center h-[380px]">
            <div className="w-24 h-24 icon-circle rounded-full flex items-center justify-center mb-5">
              <Image
                src="/assets/images/values/durustluk.svg"
                alt="Dürüstlük ve Şeffaflık"
                width={48}
                height={48}
                className="icon-image"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Integrity and Transparency
            </h3>
            <p className="text-gray-600">
              In our commercial and social relations, we maintain our honesty by
              keeping our personal interests in the background. We act with
              transparency in all processes with our customers and earn their
              friendship.
            </p>
          </div>
        </div>

        {/* Ar-Ge */}
        <div className="px-3 py-5 h-full">
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center h-[380px]">
            <div className="w-24 h-24 icon-circle rounded-full flex items-center justify-center mb-5">
              <Image
                src="/assets/images/values/ar-ge.svg"
                alt="Ar-Ge"
                width={48}
                height={48}
                className="icon-image"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">R&D</h3>
            <p className="text-gray-600">
              We take pains with continuous development based on change and
              transformation. We work on research and development by supporting
              the training of all employees within Deko.
            </p>
          </div>
        </div>
      </Slider>

      <div className="custom-nav">
        {[...Array(totalSlides)].map((_, index) => (
          <div
            key={index}
            className={`nav-dash ${activeSlide === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
            role="button"
            tabIndex={0}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
