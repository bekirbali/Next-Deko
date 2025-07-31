"use client"; // Add this at the top for useState

import Image from "next/image";
import {
  FaChevronRight,
  FaRegBuilding,
  FaDownload,
  FaFilePdf,
  FaFileImage,
} from "react-icons/fa";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

// Placeholder data for sidebar navigation
const sidebarNavItems = [
  { name: "CAD Drawings", href: "#" },
  { name: "Product Catalog", href: "#" },
  { name: "Certificate", href: "#" }, // current: true will be handled by state
  { name: "User Manual", href: "#" },
];

// Updated certificates data
const certificates = [
  {
    name: "ISO 14001 Certificate",
    type: "Certificate",
    fileName: "ISO140001certificate.jpg",
    path: "/assets/images/support/ISO140001certificate.jpg",
  },
  {
    name: "ISO 9001 Certificate",
    type: "Certificate",
    fileName: "ISO9001certificate.png",
    path: "/assets/images/support/ISO9001certificate.png",
  },
  {
    name: "ISO 45001 Certificate",
    type: "Certificate",
    fileName: "ISO45001certificate.jpg",
    path: "/assets/images/support/ISO45001certificate.jpg",
  },
  {
    name: "TUV Certificate",
    type: "Certificate",
    fileName: "TUVcertificate.png",
    path: "/assets/images/support/TUVcertificate.png",
  },
];

// Data for Product Catalogs
const productCatalogs = [
  {
    name: "Deko Product Catalog",
    type: "PDF Document",
    fileName: "productCatalog.pdf",
    path: "/assets/images/support/productCatalog.pdf",
  },
];

// Data for CAD Drawings
const cadDrawings = [
  {
    name: "RCCB Drawing",
    type: "PNG Image",
    fileName: "RCCBdrawing.png",
    path: "/assets/images/support/RCCBdrawing.png",
  },
  {
    name: "MCB Drawing",
    type: "PNG Image",
    fileName: "MCBdrawing.png",
    path: "/assets/images/support/MCBdrawing.png",
  },
];

function SupportContent() {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");
  const [activeTab, setActiveTab] = useState("CAD Drawings"); // Changed initial state

  useEffect(() => {
    if (tab && sidebarNavItems.some((item) => item.name === tab)) {
      setActiveTab(tab);
    }
  }, [tab]);

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4">
        <nav className="space-y-1">
          {sidebarNavItems.map((item) => (
            <button // Change <a> to <button> for better accessibility with onClick
              key={item.name}
              onClick={() => setActiveTab(item.name)} // Set active tab on click
              className={`group flex items-center justify-between w-full px-4 py-3 text-lg font-semibold rounded-md transition-colors duration-150 ease-in-out text-left ${
                activeTab === item.name
                  ? "bg-blue-700 text-white"
                  : "text-gray-800 hover:bg-gray-200 hover:text-gray-900 border border-transparent hover:border-gray-300"
              }`}
            >
              <span>{item.name}</span>
              <FaChevronRight
                className={`h-5 w-5 ${
                  activeTab === item.name
                    ? "text-white"
                    : "text-gray-400 group-hover:text-gray-500"
                }`}
              />
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        <div className="relative w-full h-64 md:h-96 mb-8">
          <Image
            src="/assets/images/support/supportMain.jpg" // Assuming the image is in the public folder
            alt="Support Main Image"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 66vw"
            className="rounded-lg object-cover"
          />
          <div className="absolute inset-0 bg-blue-500 opacity-10 rounded-lg"></div>
        </div>

        {activeTab === "Certificate" && (
          <>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Certificates
            </h2>
            <div className="space-y-4">
              {certificates.map((cert, index) => (
                <a // Changed div to a for download
                  key={index}
                  href={cert.path} // Set href to the file path
                  download={cert.fileName} // Add download attribute
                  className="bg-white p-4 rounded-lg shadow-md border border-gray-200 flex items-center justify-between hover:shadow-lg transition-shadow duration-150 ease-in-out group"
                >
                  <div className="flex items-center">
                    <FaRegBuilding className="h-8 w-8 text-yellow-500 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        {cert.name}
                      </h3>
                      <p className="text-sm text-gray-500">{cert.type}</p>
                    </div>
                  </div>
                  <FaDownload className="h-6 w-6 text-gray-400 group-hover:text-blue-600 transition-colors duration-150 ease-in-out" />
                </a>
              ))}
            </div>
          </>
        )}

        {activeTab === "CAD Drawings" && (
          <>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              CAD Drawings
            </h2>
            <div className="space-y-4">
              {cadDrawings.map((drawing, index) => (
                <a
                  key={index}
                  href={drawing.path}
                  download={drawing.fileName}
                  className="bg-white p-4 rounded-lg shadow-md border border-gray-200 flex items-center justify-between hover:shadow-lg transition-shadow duration-150 ease-in-out group"
                >
                  <div className="flex items-center">
                    <FaFileImage className="h-8 w-8 text-blue-500 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        {drawing.name}
                      </h3>
                      <p className="text-sm text-gray-500">{drawing.type}</p>
                    </div>
                  </div>
                  <FaDownload className="h-6 w-6 text-gray-400 group-hover:text-blue-600 transition-colors duration-150 ease-in-out" />
                </a>
              ))}
            </div>
          </>
        )}

        {activeTab === "Product Catalog" && (
          <>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Product Catalog
            </h2>
            <div className="space-y-4">
              {productCatalogs.map((catalog, index) => (
                <a
                  key={index}
                  href={catalog.path}
                  download={catalog.fileName}
                  className="bg-white p-4 rounded-lg shadow-md border border-gray-200 flex items-center justify-between hover:shadow-lg transition-shadow duration-150 ease-in-out group"
                >
                  <div className="flex items-center">
                    <FaFilePdf className="h-8 w-8 text-red-500 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        {catalog.name}
                      </h3>
                      <p className="text-sm text-gray-500">{catalog.type}</p>
                    </div>
                  </div>
                  <FaDownload className="h-6 w-6 text-gray-400 group-hover:text-blue-600 transition-colors duration-150 ease-in-out" />
                </a>
              ))}
            </div>
          </>
        )}

        {activeTab === "User Manual" && (
          <>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              User Manuals
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-blue-700 mb-1">
                RCCB User guide
              </h3>
              <p className="text-md text-gray-500">User guide</p>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default function Destek() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SupportContent />
    </Suspense>
  );
}
