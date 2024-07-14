import React from 'react';
import { BookOpenIcon, StarIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const AcademicHighlights = () => {
  return (
    <div className="py-16 bg-gray-50 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 shadow-lg p-4">
        <div className="relative">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center">
            Academic Highlights
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-500 text-center font-serif">
            Explore our featured programs and the remarkable achievements of our faculty.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">
              <div className="flex items-center">
                <BookOpenIcon className="h-12 w-12 text-blue-600" />
                <div className="ml-4 font-serif">
                  <h3 className="text-xl font-medium text-gray-900">Featured Programs</h3>
                  <p className="mt-2 text-base leading-6 text-gray-600">
                    Discover our renowned programs in engineering, business, and the arts. Our curriculum is designed to provide students with the skills and knowledge they need to succeed in their chosen fields.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">
              <div className="flex items-center">
                <StarIcon className="h-12 w-12 text-yellow-600" />
                <div className="ml-4 font-serif">
                  <h3 className="text-xl font-medium text-gray-900">Faculty Achievements</h3>
                  <p className="mt-2 text-base leading-6 text-gray-600">
                    Our faculty members are leaders in their fields, recognized for their groundbreaking research, publications, and contributions to academia. They are dedicated to mentoring the next generation of scholars and professionals.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Link
              to="/course"
              className="text-base font-medium text-indigo-600 hover:text-indigo-500"
            >
              Learn more about our academic offerings<span aria-hidden="true"> &rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicHighlights;
