"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function HaberBlog() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      // --- VERCEL DEPLOYMENT NOTE ---
      // The code is currently set up to fetch from your local backend.
      // Before deploying to Vercel, comment out the "LOCAL DEVELOPMENT" block
      // and uncomment the "VERCEL DEPLOYMENT" block below.

      // --- LOCAL DEVELOPMENT (with backend) ---
      // VERCEL DEPLOYMENT: COMMENT OUT THE BLOCK BELOW
      try {
        const backendResponse = await fetch("http://localhost:8000/api/news/");
        const data = await backendResponse.json();
        setNews(data.results || []);
      } catch (error) {
        console.error("Error fetching news from backend:", error);
        setNews([]); // Fallback to empty array on error
      }
      // VERCEL DEPLOYMENT: END OF BLOCK TO COMMENT OUT

      /*
      // --- VERCEL DEPLOYMENT (static JSON) ---
      // VERCEL DEPLOYMENT: UNCOMMENT THE BLOCK BELOW
      try {
        const response = await fetch("/products.json");
        const data = await response.json();
        setNews(data.news || []);
      } catch (error) {
        console.error("Error fetching news from json:", error);
        setNews([]);
      }
      */
    };

    fetchNews();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-800">
        Haber & Blog
      </h1>
      <div className="mt-8 text-center">
        <p className="text-lg text-gray-600">
          Deko Elektrik haberleri, blog yazıları ve sektör güncellemeleri.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {news.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow p-6 flex flex-col justify-between items-center h-full min-h-[420px]"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover rounded mb-4"
              style={{ minHeight: "192px" }}
            />
            <div className="flex-1 flex flex-col justify-between w-full">
              <h2 className="text-xl font-semibold mb-2 text-gray-800 text-center">
                {item.title}
              </h2>
              <p
                className="text-gray-600 text-center mb-4"
                style={{ minHeight: "48px" }}
              >
                {item.context}
              </p>
            </div>
            <Link
              href={`/haber-blog/${item.id}`}
              className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
