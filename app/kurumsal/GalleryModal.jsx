"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

export default function GalleryModal({
  isOpen,
  onClose,
  images,
  initialIndex,
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex || 0);

  // Update current index when initialIndex or isOpen changes
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex || 0);
    }
  }, [isOpen, initialIndex]);

  const navigateNext = useCallback(() => {
    if (!images || images.length === 0) return;
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images?.length]);

  const navigatePrev = useCallback(() => {
    if (!images || images.length === 0) return;
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  }, [images?.length]);

  // Keyboard navigation and body scroll lock
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        navigatePrev();
      } else if (e.key === "ArrowRight") {
        navigateNext();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose, navigatePrev, navigateNext]);

  if (!isOpen || !images || images.length === 0) return null;

  const currentImage = images[currentIndex];
  if (!currentImage) return null; // Should not happen if images array is valid

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-[1px] p-4"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
      onClick={(e) => {
        // If the click target is this div itself (the backdrop), then close.
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      {/* Close button */}
      <button
        onClick={onClose} // This button's specific action
        className="absolute top-4 right-4 z-[60] text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all duration-200 shadow-lg"
        aria-label="Close modal"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Navigation buttons */}
      <button
        onClick={navigatePrev} // This button's specific action
        className="absolute left-4 top-1/2 -translate-y-1/2 z-[60] text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all duration-200 shadow-lg"
        aria-label="Previous image"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={navigateNext} // This button's specific action
        className="absolute right-4 top-1/2 -translate-y-1/2 z-[60] text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all duration-200 shadow-lg"
        aria-label="Next image"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Image container - clicks inside here should NOT close the modal */}
      <div
        className="relative w-full max-w-5xl h-[80vh] max-h-[80vh] rounded-lg overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()} // Prevent clicks from bubbling to the backdrop
      >
        <Image
          src={currentImage.src}
          alt={currentImage.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 80vw"
          priority
        />
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-60 text-white px-4 py-2 rounded-full text-sm shadow-lg">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}
