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
            {product.main_title.toUpperCase()}
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

        {/* Documents Section */}
        {product.documents && product.documents.length > 0 && (
          <div className="max-w-7xl mx-auto p-6 mb-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-center">
                Documents & Resources
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.documents.map((document, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-3">
                      {/* PDF Icon */}
                      <div className="flex-shrink-0">
                        <svg
                          className="w-8 h-8 text-red-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>

                      {/* Document Info */}
                      <div className="flex-grow">
                        <h3 className="font-semibold text-gray-900">
                          {document.title || "Document"}
                        </h3>
                        {document.description && (
                          <p className="text-sm text-gray-600 mt-1">
                            {document.description}
                          </p>
                        )}
                      </div>

                      {/* Download Button */}
                      <div className="flex-shrink-0">
                        <a
                          href={document.document}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
                        >
                          <svg
                            className="w-4 h-4 mr-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                          Download
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

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
