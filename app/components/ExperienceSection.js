"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState("Mission"); // State for active tab
  const [fixedHeight, setFixedHeight] = useState("180px"); // State for fixed height, changed to 400px
  const contentContainerRef = useRef(null); // Ref for the content container

  const tabContent = {
    Mission:
      "Our mission is to provide reliable products and solutions with high cost/benefit ratio for our customers by increasing technology and product quality day by day.",
    Vision:
      "Our vision is to lead the industry globally as a domestic company that is loved and trusted by all our stakeholders and can respond to their transformation needs.",
    Values: `Integrity and Transparency
Team Spirit
Customer Delight
Innovation
Productivity
Respect
Employee Well - Being
Continuous Improvement
Quality
Sustainability
R&D`,
  };

  // useEffect(() => {
  //   // Set the fixed height based on the Vision tab's content on mount
  //   if (contentContainerRef.current && activeTab === "Vision") {
  //     setFixedHeight(`${contentContainerRef.current.scrollHeight}px`);
  //   }
  // }, []); // Run once on mount, activeTab is already Vision by default

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content Side */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              Your Future Is Safe{" "}
              <span className="text-yellow-500">With Our Experience</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We embrace the differentness in the sector and full customer
              delight with our expert staff, product and system quality, fast
              delivery times and economical solutions.
            </p>

            {/* Tabs */}
            <div>
              <div className="flex border-b border-gray-300">
                {Object.keys(tabContent).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-3 px-6 text-lg font-semibold transition-colors duration-300 focus:outline-none
                      ${
                        activeTab === tab
                          ? "border-b-2 border-yellow-500 text-yellow-600"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div
                ref={contentContainerRef}
                className="mt-6"
                style={{ height: fixedHeight, overflow: "auto" }}
              >
                {activeTab === "Values" ? (
                  tabContent.Values.split("\n").map((value, index) => (
                    <p key={index} className="text-gray-600 leading-relaxed">
                      {value}
                    </p>
                  ))
                ) : (
                  <p className="text-gray-600 leading-relaxed">
                    {tabContent[activeTab]}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Right Image Side */}
          <div className="relative h-[350px] md:h-[450px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/assets/images/experience.jpg" // Placeholder - replace with actual image
              alt="Our Experience"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={90}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
