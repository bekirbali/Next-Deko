"use client";

import { useState } from "react";
import Image from "next/image";
import GalleryModal from "./GalleryModal";

export default function Gallery() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const galleryImages = [
    {
      src: "/assets/images/gallery/gallery1.jpg",
      alt: "Deko Elektrik Production Line",
    },
    {
      src: "/assets/images/gallery/gallery2.jpg",
      alt: "Deko Elektrik Team Meeting",
    },
    {
      src: "/assets/images/gallery/gallery3.jpg",
      alt: "Deko Elektrik Manufacturing Equipment",
    },
    {
      src: "/assets/images/gallery/gallery4.jpg",
      alt: "Deko Elektrik Quality Control",
    },
    {
      src: "/assets/images/gallery/gallery5.jpg",
      alt: "Deko Elektrik Warehouse",
    },
    {
      src: "/assets/images/gallery/gallery6.jpg",
      alt: "Deko Elektrik Team",
    },
  ];

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
            onClick={() => openModal(index)}
          >
            <div className="relative h-80 w-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      <GalleryModal
        isOpen={modalOpen}
        onClose={closeModal}
        images={galleryImages}
        initialIndex={selectedImageIndex}
      />
    </>
  );
}
