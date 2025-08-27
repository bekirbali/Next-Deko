import Link from "next/link";
import { newsAPI, formatters } from "../lib/api";

async function fetchNews() {
  try {
    // Use cache with revalidate for static generation
    const data = await newsAPI.getAll("force-cache");
    return formatters.extractResults(data);
  } catch (error) {
    console.error("Error fetching news from backend:", error);
    return [];
  }
}

// Enable ISR (Incremental Static Regeneration)
export const revalidate = 3600; // Revalidate every hour

export default async function HaberBlog() {
  const news = await fetchNews();
  const lastTwoNews = news.slice(0, 2);
  const tags = [
    { name: "User Manual", link: "/support?tab=User Manual" },
    { name: "Certificate", link: "/support?tab=Certificate" },
    { name: "Catalog", link: "/support?tab=Product Catalog" },
    { name: "CAD Drawing", link: "/support?tab=CAD Drawings" },
    { name: "RCCB", link: "/products/rccb" },
    { name: "MCB", link: "/products/mcb" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
        News & Blog
      </h1>
      <div className="text-center mb-10">
        <p className="text-lg text-gray-600">
          Deko Electric news, blog articles and industry updates.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left side - News Grid */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {news.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow p-6 flex flex-col justify-between items-center h-full min-h-[420px]"
              >
                <img
                  src={item.main_image}
                  alt={item.main_title}
                  className="w-full h-48 object-cover rounded mb-4"
                />
                <div className="flex-1 flex flex-col justify-between w-full">
                  <h2 className="text-xl font-semibold mb-2 text-gray-800 text-center">
                    {item.main_title}
                  </h2>
                  <div
                    className="text-gray-600 text-center mb-4 truncate-news"
                    dangerouslySetInnerHTML={{ __html: item.main_context }}
                  />
                </div>
                <Link
                  href={`/news-blog/${item.id}`}
                  className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Sidebar */}
        <div className="lg:col-span-1">
          {/* Last News */}
          <div className="bg-gray-200 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Last News</h2>
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
                      {new Date(item.created_at).toLocaleDateString("en-US", {
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
  );
}
