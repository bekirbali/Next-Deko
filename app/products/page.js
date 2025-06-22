"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Urunler() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      // --- VERCEL DEPLOYMENT NOTE ---
      // The code is currently set up to fetch from your local backend.
      // Before deploying to Vercel, comment out the "LOCAL DEVELOPMENT" block
      // and uncomment the "VERCEL DEPLOYMENT" block below.

      // --- LOCAL DEVELOPMENT (with backend) ---
      // VERCEL DEPLOYMENT: COMMENT OUT THE BLOCK BELOW
      try {
        const backendResponse = await fetch(
          "http://localhost:8000/api/products/"
        );
        const data = await backendResponse.json();
        setProducts(data.results || []);
      } catch (error) {
        console.error("Error fetching products from backend:", error);
        setProducts([]); // Fallback to empty array on error
      }
      // VERCEL DEPLOYMENT: END OF BLOCK TO COMMENT OUT

      /*
      // --- VERCEL DEPLOYMENT (static JSON) ---
      // VERCEL DEPLOYMENT: UNCOMMENT THE BLOCK BELOW
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
          products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center"
            >
              <div className="relative w-full h-112 hover:cursor-pointer">
                <Link href={`/products/${product.name.toLowerCase()}`}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="contain"
                    className="p-4"
                  />
                </Link>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  {product.description}
                </p>
                <Link href={`/products/${product.name.toLowerCase()}`}>
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
