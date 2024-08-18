import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
    <div className="relative bg-white shadow-lg overflow-hidden">
      {/* Image Slider with Decorative Edges */}
      <div className="relative w-3/4 md:w-2/3 lg:w-1/2 h-64 sm:h-96 mx-auto border-4 border-indigo-500 rounded-2xl shadow-2xl">
        <div className="absolute inset-0 border-4 border-dashed border-indigo-300 rounded-2xl"></div>
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
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        ))}
      </div>

      {/* Welcome Message */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-center min-h-96">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-black sm:text-4xl md:text-6xl">
              Welcome to Sandesh College of Arts, Commerce, and Science
            </h1>
            <p className="mt-4 text-lg font-serif leading-6 text-black">
              Empowering students for a brighter future.
            </p>
            <div className="mt-10">
              <Link
                to="/applyform"
                className="inline-block px-8 py-3 font-serif border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Apply Now
              </Link>
              <a
                href="/visit"
                className="ml-4 inline-block px-8 py-3 font-serif border border-transparent text-base font-medium rounded-md text-indigo-600 bg-gray-300 hover:bg-gray-50"
              >
                Visit Campus
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
