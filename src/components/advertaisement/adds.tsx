"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "/images/advertaisment-image.jpg",
  "/images/advertaisment-image-2.jpg",
];

export default function Add() {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

 
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval); 
  }, [current]);

  return (
    <div className="relative w-full mx-auto overflow-hidden rounded-lg p-2">
      <div
        className="flex gap-3 transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="min-w-full h-40 sm:h-60 md:h-70 lg:h-85 relative"
          >
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              width={1000}
              height={1000}
              className="rounded-lg w-full h-40 sm:h-50 md:h-60 lg:h-85 object-fill"
            />
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800/50 hover:bg-gray-800 text-white p-2 rounded-full"
        aria-label="Previous Slide"
      >
        &#10094;
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800/50 hover:bg-gray-800 text-white p-2 rounded-full"
        aria-label="Next Slide"
      >
        &#10095;
      </button>
    </div>
  );
}
