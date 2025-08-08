import React from "react";
import Image from "next/image";
import { productsAPI } from "../../lib/api";

async function getProduct(slug) {
  try {
    return await productsAPI.getBySlug(slug);
  } catch (error) {
    throw new Error("Ürün bulunamadı");
  }
}

export default async function ProductDetailPage({ params }) {
  const { name: slug } = await params; // name parametresi aslında slug
  const product = await getProduct(slug);

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className="relative h-[300px] flex items-center justify-center overflow-hidden">
        <Image
          src="/assets/images/products/urunler.jpg"
          alt="Security Automation Banner"
          fill
          priority
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 z-0"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        ></div>
        <div className="z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Products
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-8">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Left Side - Image */}
          <div className="md:w-1/2">
            {product.main_image && (
              <Image
                src={product.main_image}
                alt={product.main_title}
                width={600}
                height={600}
                className="rounded-lg shadow-lg object-contain"
              />
            )}
          </div>

          {/* Right Side - Details */}
          <div className="md:w-1/2">
            <div
              className="mb-6 rich-text-content"
              dangerouslySetInnerHTML={{ __html: product.main_context }}
            />

            {product.details && product.details.length > 0 && (
              <div>
                {product.details.map((detail, index) => (
                  <div key={index} className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">
                      {detail.title}
                    </h3>
                    <div
                      className="rich-text-content"
                      dangerouslySetInnerHTML={{ __html: detail.context }}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Additional Images Section */}
        {product.additional_images && product.additional_images.length > 0 && (
          <div className="max-w-7xl mx-auto p-6">
            <div className="max-w-3xl mx-auto flex flex-col justify-center gap-4">
              <h1 className="text-2xl font-bold mb-4 text-center mx-auto">
                {product.main_title.toUpperCase()}
              </h1>
              <h2 className="text-xl font-bold mb-8">Technical Data</h2>
            </div>
            <div className="max-w-3xl mx-auto flex flex-col justify-center items-center gap-8">
              {product.additional_images.map((image, index) => (
                <div key={index} className="w-full flex flex-col items-center">
                  <Image
                    src={image.image}
                    alt={`${product.main_title} additional image ${index + 1}`}
                    width={800}
                    height={800}
                    className="object-contain rounded shadow-lg"
                  />
                  {image.description && (
                    <div className="mt-4 w-full text-left">
                      <p className="text-gray-700 text-sm">
                        {image.description}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
