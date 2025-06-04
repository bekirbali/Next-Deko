"use client";
import HeroSlider from "./components/Slider";
import Image from "next/image";
import NewsSlider from "./components/NewsSlider";
import ExperienceSection from "./components/ExperienceSection";
import { useEffect, useState } from "react";

export default function Home() {
  // Placeholder news data
  const newsData = [
    {
      id: 1,
      imageSrc: "/assets/images/speciality.jpg", // Placeholder image
      altText: "News 1 Placeholder",
      title: "Exciting Product Launch Announced",
      date: "October 26, 2023",
      description:
        "We are thrilled to announce the upcoming launch of our new innovative product line, set to revolutionize the industry...",
      link: "#",
    },
    {
      id: 2,
      imageSrc: "/assets/images/production.jpg", // Placeholder image
      altText: "News 2 Placeholder",
      title: "DEKO Elektrik Expands to New Markets",
      date: "October 20, 2023",
      description:
        "As part of our growth strategy, DEKO Elektrik is proud to announce its expansion into new international markets...",
      link: "#",
    },
    // Add more news items here if needed
  ];

  return (
    <div>
      {/* Slider at the top */}
      <HeroSlider />

      {/* Specialty Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Image Side */}
            <div className="relative">
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/assets/images/speciality.jpg"
                  alt="Deko Elektrik Uzmanlık Alanları"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={90}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>

            {/* Content Side */}
            <div className="space-y-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Professional approach with our 27 years of expertise!
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Professional approach with our 27 years of expertise! Deko,
                  Turkey's domestically owned automatic fuse and residual
                  current circuit breakers manufacturer, combines today's
                  technology and innovations with its expertise; offers its
                  customers high performance.
                </p>
              </div>

              {/* Specialty Items */}
              <div className="space-y-4">
                <div className="flex items-start space-x-4"></div>

                <div className="flex items-start space-x-4"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Video Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Company Introduction Video
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the journey of DEKO Elektrik, the rising star of Turkey's
              LV industry
            </p>
          </div> */}

          <div className="max-w-5xl mx-auto">
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" /* 16:9 aspect ratio */ }}
            >
              <iframe
                className="absolute inset-0 w-full h-full rounded-lg shadow-xl"
                src="https://www.youtube.com/embed/N7ySbuZW5uk"
                title="DEKO Electrics - The Rising Star of Turkey in LV Industry"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Center Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Solutions
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Üretim Hizmetleri */}
            <div className="text-center border border-gray-200 shadow-md p-6 rounded-lg">
              <div className="relative h-[250px] mb-6 rounded-lg overflow-hidden shadow-lg group">
                <Image
                  src="/assets/images/production.jpg"
                  alt="Üretim Hizmetleri"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={90}
                />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
                OEM Production
              </h3>
            </div>

            {/* Montaj Hizmetleri */}
            <div className="text-center border border-gray-200 shadow-md p-6 rounded-lg">
              <div className="relative h-[250px] mb-6 rounded-lg overflow-hidden shadow-lg group">
                <Image
                  src="/assets/images/assembly.jpg"
                  alt="Montaj Hizmetleri"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={90}
                />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
                Turnkey Manufacturing Lines
              </h3>
            </div>

            {/* Test Sistemleri Hizmetleri */}
            <div className="text-center border border-gray-200 shadow-md p-6 rounded-lg">
              <div className="relative h-[250px] mb-6 rounded-lg overflow-hidden shadow-lg group">
                <Image
                  src="/assets/images/testsystem.jpg"
                  alt="Test Sistemleri Hizmetleri"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={90}
                />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
                Assembly and Testing System
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Company Dynamics Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/images/dynamics/dynamicsBgImage.jpg"
            alt="DEKO Elektrik Company Dynamics"
            fill
            className="object-cover"
            quality={90}
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-6xl font-bold text-white mb-4">
              Our <span className="text-yellow-400">Dynamics</span>
            </h2>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              We build our dynamics on solid basis. With our belief in the power
              of expertise, innovativeness and quality, we aim to be the pioneer
              of domestic companies in the international arena.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {/* Flexibility */}
            <div className="text-center group">
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl group-hover:bg-white/20 transition-all duration-300">
                <Image
                  src="/assets/images/dynamics/1.svg"
                  alt="Flexibility"
                  width={80}
                  height={80}
                  className="w-full h-full filter brightness-0 invert"
                />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white">
                Flexibility
              </h3>
            </div>

            {/* Innovation */}
            <div className="text-center group">
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl group-hover:bg-white/20 transition-all duration-300">
                <Image
                  src="/assets/images/dynamics/2.svg"
                  alt="Innovation"
                  width={80}
                  height={80}
                  className="w-full h-full filter brightness-0 invert"
                />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white">
                Innovation
              </h3>
            </div>

            {/* Ar-Ge */}
            <div className="text-center group">
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl group-hover:bg-white/20 transition-all duration-300">
                <Image
                  src="/assets/images/dynamics/3.svg"
                  alt="R&D"
                  width={80}
                  height={80}
                  className="w-full h-full filter brightness-0 invert"
                />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white">
                R&D
              </h3>
            </div>

            {/* Quality */}
            <div className="text-center group">
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl group-hover:bg-white/20 transition-all duration-300">
                <Image
                  src="/assets/images/dynamics/4.svg"
                  alt="Quality"
                  width={80}
                  height={80}
                  className="w-full h-full filter brightness-0 invert"
                />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white">
                Quality
              </h3>
            </div>

            {/* Sustainability */}
            <div className="text-center group">
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl group-hover:bg-white/20 transition-all duration-300">
                <Image
                  src="/assets/images/dynamics/5.svg"
                  alt="Sustainability"
                  width={80}
                  height={80}
                  className="w-full h-full filter brightness-0 invert"
                />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white">
                Sustainability
              </h3>
            </div>

            {/* Customer Delight */}
            <div className="text-center group">
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl group-hover:bg-white/20 transition-all duration-300">
                <Image
                  src="/assets/images/dynamics/6.svg"
                  alt="Customer Delight"
                  width={80}
                  height={80}
                  className="w-full h-full filter brightness-0 invert"
                />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white">
                Customer Delight
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-gray-200">
          <Image
            src="/assets/images/lineartBg.png"
            alt="News Background"
            fill
            className="object-cover opacity-100 filter"
            quality={80}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-6xl font-bold text-gray-800 mb-4">
              Latest <span className="text-yellow-500">News</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest happenings and announcements from
              DEKO Elektrik.
            </p>
          </div>

          {/* News Slider */}
          <div className="max-w-5xl mx-auto">
            <NewsSlider newsItems={newsData} />
          </div>
          {/* End of News Slider */}
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <ExperienceSection />

      {/* Products Section */}
      <ProductsSection />
    </div>
  );
}

// New ProductsSection component
function ProductsSection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our range of high-quality electrical products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col md:flex-row bg-slate-100 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative w-full h-80 md:w-1/2 md:h-96">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={90}
                />
              </div>
              <div className="p-6 md:w-1/2 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <a
                  href="#" // Replace with actual product detail link
                  className="inline-flex items-center text-yellow-500 hover:text-yellow-600 font-semibold group"
                >
                  Detail
                  <span className="ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-1">
                    &rarr;
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
