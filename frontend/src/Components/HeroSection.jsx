import React, { useState, useEffect } from 'react';

const images = [
  'https://sandeshcollege.in/images/slider/c1.jpeg',
  'https://sandeshcollege.in/images/slider/c2.jpeg',
  'https://sandeshcollege.in/images/slider/c3.jpeg',
  'https://sandeshcollege.in/images/slider/c4.jpeg',
  'https://sandeshcollege.in/images/slider/c5.jpeg',
  'https://sandeshcollege.in/images/slider/c6.jpeg',
  'https://sandeshcollege.in/images/slider/c7.jpeg'
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="relative bg-gray-50 overflow-hidden">
      {/* Image Slider */}
      <div className="relative w-full max-w-5xl h-64 sm:h-96 mx-auto">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
