import HeroSlider from "./components/Slider";
import Image from "next/image";

export default function Home() {
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
                  27 Yıllık Uzmanlığımız ile Güvenilir Koruma
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Türkiye'nin yerli sermayeli otomatik sigorta ve kaçak akım
                  koruma şalterleri üreticisi olan Deko, günümüz teknolojisini
                  ve yenilikleri uzmanlığı ile birleştirerek; müşterilerine
                  yüksek performanslı, kaliteli ürünler ve ekonomik çözümler
                  sunmaktadır.
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
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Kurumsal Tanıtım Videosu
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              DEKO Elektrik'in Türkiye'nin LV endüstrisindeki yükselen yıldızı
              olma yolculuğunu keşfedin
            </p>
          </div>

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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Çözüm Merkezi
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Üretim Hizmetleri */}
            <div className="text-center">
              <div className="relative h-[250px] mb-6 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/assets/images/production.jpg"
                  alt="Üretim Hizmetleri"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={90}
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                Üretim Hizmetleri
              </h3>
            </div>

            {/* Montaj Hizmetleri */}
            <div className="text-center">
              <div className="relative h-[250px] mb-6 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/assets/images/assembly.jpg"
                  alt="Montaj Hizmetleri"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={90}
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                Montaj Hizmetleri
              </h3>
            </div>

            {/* Test Sistemleri Hizmetleri */}
            <div className="text-center">
              <div className="relative h-[250px] mb-6 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/assets/images/testsystem.jpg"
                  alt="Test Sistemleri Hizmetleri"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={90}
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                Test Sistemleri Hizmetleri
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              DEKO'nun <span className="text-yellow-400">Dinamikleri</span>
            </h2>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              Dinamiklerimizi sağlam temellerle oluşturuyoruz. Uzmanlığın,
              yeniliğin ve kalitenin gücüne olan inancımız ile uluslararası
              alanda, sektördeki yerli firmaların öncüsü olmayı hedefliyoruz.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {/* Yerli ve Milli Sermaye */}
            <div className="text-center group">
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl group-hover:bg-white/20 transition-all duration-300">
                <Image
                  src="/assets/images/dynamics/1.svg"
                  alt="Yerli ve Milli Sermaye"
                  width={80}
                  height={80}
                  className="w-full h-full filter brightness-0 invert"
                />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white">
                Yerli ve Milli Sermaye
              </h3>
            </div>

            {/* İnovasyon */}
            <div className="text-center group">
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl group-hover:bg-white/20 transition-all duration-300">
                <Image
                  src="/assets/images/dynamics/2.svg"
                  alt="İnovasyon"
                  width={80}
                  height={80}
                  className="w-full h-full filter brightness-0 invert"
                />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white">
                İnovasyon
              </h3>
            </div>

            {/* Ar-Ge */}
            <div className="text-center group">
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl group-hover:bg-white/20 transition-all duration-300">
                <Image
                  src="/assets/images/dynamics/3.svg"
                  alt="Ar-Ge"
                  width={80}
                  height={80}
                  className="w-full h-full filter brightness-0 invert"
                />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white">
                Ar-Ge
              </h3>
            </div>

            {/* Kalite */}
            <div className="text-center group">
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl group-hover:bg-white/20 transition-all duration-300">
                <Image
                  src="/assets/images/dynamics/4.svg"
                  alt="Kalite"
                  width={80}
                  height={80}
                  className="w-full h-full filter brightness-0 invert"
                />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white">
                Kalite
              </h3>
            </div>

            {/* Sürdürülebilirlik */}
            <div className="text-center group">
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl group-hover:bg-white/20 transition-all duration-300">
                <Image
                  src="/assets/images/dynamics/5.svg"
                  alt="Sürdürülebilirlik"
                  width={80}
                  height={80}
                  className="w-full h-full filter brightness-0 invert"
                />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white">
                Sürdürülebilirlik
              </h3>
            </div>

            {/* Müşteri Memnuniyeti */}
            <div className="text-center group">
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl group-hover:bg-white/20 transition-all duration-300">
                <Image
                  src="/assets/images/dynamics/6.svg"
                  alt="Müşteri Memnuniyeti"
                  width={80}
                  height={80}
                  className="w-full h-full filter brightness-0 invert"
                />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white">
                Müşteri Memnuniyeti
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
