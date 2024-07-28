import React from 'react';

const QuickLinks = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Quick Links
          </h2>
          <p className="mt-4 text-lg text-gray-500 font-serif">
            Find what you need quickly.
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 font-serif">
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-center">
            <a href="/" className="text-xl font-semibold text-indigo-600 hover:text-indigo-500">
              SWAYAM
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-center font-serif">
            <a href="/" className="text-xl font-semibold text-indigo-600 hover:text-indigo-500">
              MOOC
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-center font-serif">
            <a href="/" className="text-xl font-semibold text-indigo-600 hover:text-indigo-500">
              ABC ID
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
