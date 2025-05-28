"use client";

import { useState } from "react";
import Image from "next/image";

const images = ["/images/add1.jpg", "/images/add-2.jpg"];

export default function Add() {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <div className="relative w-full  mx-auto overflow-hidden rounded-lg p-3">
      <div
        className="flex gap-3 transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="min-w-full h-40 sm:h-60 md:h-70 lg:h-100 relative"
          >
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg w-full"
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
