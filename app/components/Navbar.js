"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";

export default function Navbar() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsProductsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsProductsOpen(false);
    }, 200); // Increased delay to 200ms
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-[#0A2562] text-white shadow-lg navbar-lato">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/images/logos/Logo.png"
                alt="Deko Elektrik Logo"
                width={180}
                height={60}
                className="h-18 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className="hover:bg-blue-700 px-3 py-2 rounded-md font-medium transition-colors"
              >
                Anasayfa
              </Link>

              <Link
                href="/kurumsal"
                className="hover:bg-blue-700 px-3 py-2 rounded-md font-medium transition-colors"
              >
                Kurumsal
              </Link>

              {/* Products Dropdown */}
              <div
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href="/urunler"
                  className="hover:bg-blue-700 px-3 py-2 rounded-md font-medium transition-colors flex items-center"
                >
                  Ürünler
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </Link>

                {/* Invisible bridge to connect button and dropdown */}
                {isProductsOpen && (
                  <div className="absolute left-0 top-full w-48 h-1 bg-transparent"></div>
                )}

                {isProductsOpen && (
                  <div className="absolute left-0 top-full pt-1 w-48 z-10">
                    <div className="bg-white text-gray-900 rounded-md shadow-lg">
                      <div className="py-1">
                        <Link
                          href="/urunler/mcb"
                          className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                        >
                          MCB
                        </Link>
                        <Link
                          href="/urunler/rccb"
                          className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                        >
                          RCCB
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/haber-blog"
                className="hover:bg-blue-700 px-3 py-2 rounded-md font-medium transition-colors"
              >
                Haber & Blog
              </Link>

              <Link
                href="/destek"
                className="hover:bg-blue-700 px-3 py-2 rounded-md font-medium transition-colors"
              >
                Destek
              </Link>

              <Link
                href="/iletisim"
                className="hover:bg-blue-700 px-3 py-2 rounded-md font-medium transition-colors"
              >
                İletişim
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden">
          {isMobileMenuOpen && (
            <div className="fixed top-[5rem] left-0 right-0 z-40 bg-[#0A2562]/90 overflow-y-auto px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/"
                className="block hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium"
                onClick={closeMobileMenu}
              >
                Anasayfa
              </Link>
              <Link
                href="/kurumsal"
                className="block hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium"
                onClick={closeMobileMenu}
              >
                Kurumsal
              </Link>

              {/* Mobile Products Dropdown Toggle */}
              <div
                className="block hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium cursor-pointer"
                onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
              >
                <div className="flex justify-between items-center">
                  <span>Ürünler</span>
                  <svg
                    className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${
                      isMobileProductsOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              {/* Mobile Products Sub-menu */}
              {isMobileProductsOpen && (
                <div className="pl-3">
                  <Link
                    href="/urunler/mcb"
                    className="block hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium pl-6"
                    onClick={closeMobileMenu}
                  >
                    MCB
                  </Link>
                  <Link
                    href="/urunler/rccb"
                    className="block hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium pl-6"
                    onClick={closeMobileMenu}
                  >
                    RCCB
                  </Link>
                </div>
              )}

              <Link
                href="/haber-blog"
                className="block hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium"
                onClick={closeMobileMenu}
              >
                Haber & Blog
              </Link>
              <Link
                href="/destek"
                className="block hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium"
                onClick={closeMobileMenu}
              >
                Destek
              </Link>
              <Link
                href="/iletisim"
                className="block hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium"
                onClick={closeMobileMenu}
              >
                İletişim
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
