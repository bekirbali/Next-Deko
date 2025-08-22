"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { productsAPI, formatters } from "../lib/api";

export default function Navbar() {
  const [products, setProducts] = useState([]);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productsAPI.getAll();
        setProducts(formatters.extractResults(data));
        console.log(formatters.extractResults(data));
      } catch (error) {
        console.error("Error fetching products from backend:", error);
        setProducts([]); // Fallback to empty array on error
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`text-white shadow-lg navbar-inter sticky top-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-[#0A2562]/90" : "bg-[#0A2562]"
      }`}
    >
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
                Home
              </Link>

              <Link
                href="/corporate"
                className="hover:bg-blue-700 px-3 py-2 rounded-md font-medium transition-colors"
              >
                Corporate
              </Link>

              {/* Products Dropdown */}
              <div
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href="/products"
                  className="hover:bg-blue-700 px-3 py-2 rounded-md font-medium transition-colors flex items-center"
                >
                  Products
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
                    <div
                      className="bg-white/95 backdrop-blur-sm text-gray-900 rounded-lg shadow-2xl border border-gray-100 transform transition-all duration-300 ease-out origin-top"
                      style={{
                        animation: "slideInFromBottom 0.3s ease-out forwards",
                      }}
                    >
                      <div className="py-1">
                        {products.map((product, index) => (
                          <Link
                            key={product.id}
                            href={`/products/${product.slug}`}
                            className="block px-4 py-3 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 ease-in-out transform hover:shadow-sm dropdown-item-animate border-l-2 border-transparent hover:border-blue-500"
                            style={{
                              animationDelay: `${index * 0.08}s`,
                            }}
                          >
                            {product.main_title.toUpperCase()}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/news-blog"
                className="hover:bg-blue-700 px-3 py-2 rounded-md font-medium transition-colors"
              >
                News & Blog
              </Link>

              <Link
                href="/support"
                className="hover:bg-blue-700 px-3 py-2 rounded-md font-medium transition-colors"
              >
                Support
              </Link>

              <Link
                href="/contact"
                className="hover:bg-blue-700 px-3 py-2 rounded-md font-medium transition-colors"
              >
                Contact
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
                Home
              </Link>
              <Link
                href="/corporate"
                className="block hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium"
                onClick={closeMobileMenu}
              >
                Corporate
              </Link>

              {/* Mobile Products Dropdown Toggle */}
              <div
                className="block hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium cursor-pointer"
                onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
              >
                <div className="flex justify-between items-center">
                  <span>Products</span>
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
                  {products.map((product) => (
                    <Link
                      key={product.id}
                      href={`/products/${product.main_title}`}
                      className="block hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium pl-6"
                      onClick={closeMobileMenu}
                    >
                      {product.main_title.toUpperCase()}
                    </Link>
                  ))}
                </div>
              )}

              <Link
                href="/news-blog"
                className="block hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium"
                onClick={closeMobileMenu}
              >
                News & Blog
              </Link>
              <Link
                href="/support"
                className="block hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium"
                onClick={closeMobileMenu}
              >
                Support
              </Link>
              <Link
                href="/contact"
                className="block hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
