import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0A2562] text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Social Media Section */}
          <div className="space-y-6">
            <div>
              <Link href="/" className="block">
                <Image
                  src="/assets/images/logos/Logo.png"
                  alt="Deko Elektrik Logo"
                  width={150}
                  height={50}
                  className="h-auto w-auto mx-auto"
                />
              </Link>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4 justify-center">
              {/* X (Twitter) */}
              <Link
                href="#"
                className="w-10 h-10 border border-gray-400 rounded flex items-center justify-center hover:bg-white hover:text-blue-900 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>

              {/* Instagram */}
              <Link
                href="#"
                className="w-10 h-10 border border-gray-400 rounded flex items-center justify-center hover:bg-white hover:text-blue-900 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>

              {/* LinkedIn */}
              <Link
                href="#"
                className="w-10 h-10 border border-gray-400 rounded flex items-center justify-center hover:bg-white hover:text-blue-900 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>

              {/* YouTube */}
              <Link
                href="#"
                className="w-10 h-10 border border-gray-400 rounded flex items-center justify-center hover:bg-white hover:text-blue-900 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Navigation Section */}
          <div className="space-y-4">
            {/* Main Navigation Items */}
            <div className="space-y-3">
              <Link
                href="/kurumsal"
                className="block text-gray-300 hover:text-white text-lg transition-colors"
              >
                Kurumsal
              </Link>
              <Link
                href="/destek"
                className="block text-gray-300 hover:text-white text-lg transition-colors"
              >
                Destek
              </Link>
              <Link
                href="/haber-blog"
                className="block text-gray-300 hover:text-white text-lg transition-colors"
              >
                Haberler & Blog
              </Link>

              {/* Products with sub-items */}
              <div>
                <Link
                  href="/urunler"
                  className="block text-gray-300 hover:text-white text-lg transition-colors mb-2"
                >
                  Ürünler
                </Link>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-center">
                    <span className="text-yellow-400 mr-2">➤</span>
                    <Link
                      href="/urunler/mcb"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      MCB
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-400 mr-2">➤</span>
                    <Link
                      href="/urunler/rccb"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      RCCB
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">İletişim</h3>
              <div className="space-y-3 text-gray-300">
                <p className="leading-relaxed">
                  Aydınlı SB Mahallesi, İstanbul Endüstri Ve
                  <br />
                  Ticaret Serbest Bölgesi, Orjin Cad. No: 2/
                  <br />
                  Tuzla/İSTANBUL
                </p>
                <p className="text-gray-300">+90 216 208 92 03</p>
                <p>
                  <Link
                    href="mailto:deko@dekoelektrik.com.tr"
                    className="hover:text-white transition-colors"
                  >
                    deko@dekoelektrik.com.tr
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Location Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Lokasyon</h3>
            <div className="w-full h-48 bg-gray-700 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12067.60978970832!2d29.379224!3d40.874015!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cad8e4ce9f4c07%3A0x8857fd8d77c57f75!2sDeko%20Elektrik!5e0!3m2!1str!2str!4v1748638437910!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-blue-700 py-4">
        <div className="container mx-auto px-6">
          <p className="text-center text-gray-400 text-sm">
            Copyright © 2025 Deko Elektrik - Created by{" "}
            <span className="text-white font-semibold">Bekir BALI</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
