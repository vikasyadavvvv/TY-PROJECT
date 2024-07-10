import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative bg-white shadow-lg p-4 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center min-h-96">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold  text-black sm:text-4xl md:text-6xl">
              Welcome to Sandesh College of Arts,Commerce and Science
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

