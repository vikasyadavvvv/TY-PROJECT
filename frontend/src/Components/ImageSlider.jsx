// src/components/ImageSlider.js
import React, { useState } from 'react';

const images = [
  'https://sandeshcollege.in/images/slider/c1.jpeg', 
  'https://sandeshcollege.in/images/slider/c2.jpeg',
  'https://sandeshcollege.in/images/slider/c4.jpeg',
  'https://sandeshcollege.in/images/slider/c5.jpeg',
  'https://sandeshcollege.in/images/slider/c3.jpeg'
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <>
    <div className="relative w-full h-full max-w-5xl mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="w-full flex-shrink-0"
          />
        ))}
      </div>
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2"
      >
        &#9664;
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2"
      >
        &#9654;
      </button>
    </div>

    </>

  );
};

export default ImageSlider;
