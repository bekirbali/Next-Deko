"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Urunler() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/products.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        // Optionally, set an error state here to display in the UI
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Ürünler
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center"
            >
              <div className="relative w-full h-112 hover:cursor-pointer">
                <Link href={`/urunler/${product.name.toLowerCase()}`}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="contain" // 'cover' or 'contain' depending on desired image display
                    className="p-4" // Added padding around the image
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
                <Link href={`/urunler/${product.name.toLowerCase()}`}>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:cursor-pointer hover:bg-blue-600 mt-4">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            Ürünler yükleniyor veya bulunamadı...
          </p>
        )}
      </div>
    </div>
  );
}
