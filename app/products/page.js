"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { productsAPI, formatters } from "../lib/api";

export default function Urunler() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      // --- VERCEL DEPLOYMENT NOTE ---
      // The code is currently set up to fetch from your local backend.
      // Before deploying to Vercel, comment out the "LOCAL DEVELOPMENT" block
      // and uncomment the "VERCEL DEPLOYMENT" block below.

      // --- LOCAL DEVELOPMENT (with backend) ---
      try {
        const data = await productsAPI.getAll();
        setProducts(formatters.extractResults(data));
      } catch (error) {
        console.error("Error fetching products from backend:", error);
        setProducts([]); // Fallback to empty array on error
      }
      // VERCEL DEPLOYMENT: END OF BLOCK TO COMMENT OUT

      // --- VERCEL DEPLOYMENT (static JSON) ---
      // VERCEL DEPLOYMENT: UNCOMMENT THE BLOCK BELOW
      /*
      try {
        const response = await fetch("/products.json");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products from json:", error);
        setProducts([]);
      }
      */
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {products && products.length > 0 ? (
          products.map((product, index) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center"
            >
              <Link
                href={`/products/${product.slug}`}
                className="relative block w-full h-112 hover:cursor-pointer"
              >
                {product.main_image ? (
                  <Image
                    src={product.main_image}
                    alt={product.main_title}
                    fill
                    sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                    priority={index < 3}
                    className="object-cover"
                  />
                ) : null}
              </Link>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-[gray-800]">
                  {product.main_title}
                </h3>
                <h4 className="text-lg text-gray-800">
                  {product?.sub_title || product?.main_title}
                </h4>
                <Link href={`/products/${product.slug}`}>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:cursor-pointer hover:bg-blue-600 mt-4">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            Products are loading or could not be found
          </p>
        )}
      </div>
    </div>
  );
}
