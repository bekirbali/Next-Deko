import Image from "next/image";
import ValuesSlider from "./ValuesSlider";
import Gallery from "./Gallery";

export default function Kurumsal() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-80 flex items-center justify-center overflow-hidden">
        <Image
          src="/assets/images/kurumsalHero.jpg"
          alt="Deko Elektrik Kurumsal"
          fill
          className="object-cover brightness-60"
          priority
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Kurumsal</h1>
        </div>
      </div>

      {/* Hakkımızda Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center gap-20">
            {/* Image */}
            <div className="flex-shrink-0">
              <Image
                src="/assets/images/kurumsalDeko.jpg"
                alt="Deko Elektrik Fabrika"
                width={420}
                height={300}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>

            {/* Content */}
            <div className="ml-8 max-w-2xl">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Hakkımızda
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Türkiye'nin yerli sermayeli otomatik sigorta ve kaçak akım
                  koruma şalterleri üreticisi olan Deko, 27 yıllık deneyime
                  sahip uzman bir ekip tarafından İstanbul'da kurulmuştur. Alçak
                  gerilim koruma ekipmanlarına yönelik, anahtar teslim manuel
                  veya otomatik üretim hizmetleri veren Deko, montaj ve test
                  sistemlerinin kurulması aşamalarında da müşterilerine etkin
                  hizmetler vermektedir. Deko, müşterilerinin istek ve
                  ihtiyaçlarına yönelik CKD parça tedariği ve OEM üretim
                  yaparken; köklü sektörel deneyimlerini, yeni nesil
                  teknolojinin ihtiyaçlarına uyumlu biçimde karşılık
                  vermektedir.
                </p>
                <p>
                  Deko, Türkiye'den dünyanın her noktasına verdiği kesintisiz
                  üretim hizmetleri ile uzmanlığını geleceğe taşımayı
                  amaçlayarak, müşterileri ile çözüm ortaklığı kurma ilkesini
                  benimsemektedir. Uzmanlığa, yeniliğe ve kalitenin gücüne olan
                  inancı ile değer yaratan Deko, hızlı teslim süreleri ve
                  ekonomik çözümleri ile sektöründe farklılığı ve tam müşteri
                  memnuniyetini hedeflemektedir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="container mx-auto px-4 py-16 bg-gray-100">
        <div className="flex justify-center gap-4">
          {/* Mission */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden w-[600px]">
            <div className="flex">
              <div className="w-[250px]">
                <Image
                  src="/assets/images/dekoMisyon.jpg"
                  alt="Deko Elektrik Uzmanlık"
                  width={250}
                  height={187}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="w-[350px] p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  Mission
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our mission is to provide reliable products and solutions with
                  high cost/benefit ratio for our customers by increasing
                  technology and product quality day by day.
                </p>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden w-[600px]">
            <div className="flex">
              <div className="w-[250px]">
                <Image
                  src="/assets/images/dekoVizyon.jpg"
                  alt="Deko Elektrik Ekip"
                  width={250}
                  height={187}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="w-[350px] p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  Vision
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our vision is to lead the industry globally as a domestic
                  company that is loved and trusted by all our stakeholders and
                  can respond to their transformation needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

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

      {/* Values Slider Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Değerlerimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Deko Elektrik olarak değerlerimiz, her adımımızda bize rehberlik
              eden temel prensiplerdir.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <ValuesSlider />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Gallery
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our facilities, team, and operations through our gallery.
            </p>
          </div>

          <Gallery />
        </div>
      </section>
    </div>
  );
}
