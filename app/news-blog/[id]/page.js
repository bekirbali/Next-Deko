import React from "react";
import Image from "next/image";
import Link from "next/link";
import { newsAPI, formatters } from "../../lib/api";

async function getNews(id) {
  try {
    return await newsAPI.getById(id);
  } catch (error) {
    throw new Error("Haber bulunamadı");
  }
}

async function fetchNews() {
  try {
    const data = await newsAPI.getAll();
    return formatters.extractResults(data);
  } catch (error) {
    console.error("Error fetching news from backend:", error);
    return [];
  }
}

export default async function NewsDetailPage({ params }) {
  const resolvedParams = await params;
  const news = await getNews(resolvedParams.id);
  const allNews = await fetchNews();
  const lastTwoNews = allNews.slice(0, 2);
  const tags = [
    { name: "User Manual", link: "/support?tab=User Manual" },
    { name: "Certificate", link: "/support?tab=Certificate" },
    { name: "Catalog", link: "/support?tab=Product Catalog" },
    { name: "CAD Drawing", link: "/support?tab=CAD Drawings" },
    { name: "RCCB", link: "/products/rccb" },
    { name: "MCB", link: "/products/mcb" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[300px] flex items-center justify-center overflow-hidden">
        <Image
          src="/assets/images/main_news.jpg"
          alt="Security Automation Banner"
          fill
          sizes="100vw"
          priority
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 z-0"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        ></div>
        <div className="z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">News</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left side - News Content */}
          <div className="lg:col-span-2">
            {news.main_image && (
              <div className="relative w-full mb-4">
                <Image
                  src={news.main_image}
                  alt={news.main_title}
                  width={800}
                  height={600}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
                  className="rounded-lg object-contain w-full h-auto"
                />
              </div>
            )}

            <div className="prose max-w-full mb-8">
              <h1 className="text-4xl font-bold mb-2">{news.main_title}</h1>
              <h2 className="text-2xl text-gray-600 mb-4">{news.sub_title}</h2>
              <div
                className="rich-text-content"
                dangerouslySetInnerHTML={{ __html: news.main_context }}
              />
            </div>

            {news.details && news.details.length > 0 && (
              <div className="mb-8">
                <h3 className="text-3xl font-bold mb-4">Detaylar</h3>
                {news.details.map((detail, index) => (
                  <div key={index} className="mb-4">
                    <h4 className="text-2xl font-semibold">{detail.title}</h4>
                    <div
                      className="rich-text-content"
                      dangerouslySetInnerHTML={{ __html: detail.context }}
                    />
                  </div>
                ))}
              </div>
            )}

            {news.additional_images && news.additional_images.length > 0 && (
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {news.additional_images.map((image, index) => (
                    <div key={index} className="flex flex-col">
                      <div className="relative w-full h-64">
                        <Image
                          src={image.image}
                          alt={`${news.main_title} ek görsel ${index + 1}`}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                          className="rounded-lg object-cover"
                        />
                      </div>
                      {image.title && (
                        <div className="mt-2">
                          <h4 className="text-gray-700 text-sm font-medium">
                            {image.title}
                          </h4>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <p className="text-sm text-gray-500 mt-8">
              <b>Oluşturulma:</b> {new Date(news.created_at).toLocaleString()}
            </p>
            <p className="text-sm text-gray-500">
              <b>Son Güncelleme:</b>{" "}
              {new Date(news.updated_at).toLocaleString()}
            </p>
          </div>

          {/* Right side - Sidebar */}
          <div className="lg:col-span-1">
            {/* Last News */}
            <div className="bg-gray-200 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Last News
              </h2>
              <div>
                {lastTwoNews.map((item) => (
                  <Link
                    key={item.id}
                    href={`/news-blog/${item.id}`}
                    className="flex items-start mb-4 last:mb-0 p-2 rounded-md hover:bg-gray-200 transition-colors"
                  >
                    <img
                      src={item.main_image}
                      alt={item.main_title}
                      className="w-16 h-16 object-cover rounded-md mr-4"
                    />
                    <div>
                      <p className="text-sm text-gray-500">
                        {new Date(item.created_at).toLocaleDateString("tr-TR", {
                          day: "2-digit",
                          month: "long",
                          year: "numeric",
                        })}
                      </p>
                      <h3 className="font-semibold text-gray-800">
                        {item.main_title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="mt-8 bg-gray-200 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Link
                    key={tag.name}
                    href={tag.link}
                    className="bg-white border border-gray-300 text-gray-700 px-3 py-1.5 rounded-md text-sm hover:bg-gray-200 hover:border-gray-400 transition-colors"
                  >
                    {tag.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
