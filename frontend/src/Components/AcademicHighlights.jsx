import React from 'react';
import { BookOpenIcon, StarIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const AcademicHighlights = () => {
  return (
    <div className="py-16 bg-gray-50 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center">
            Academic Highlights
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-500 text-center font-serif">
            Our institution stands out for its exceptional programs and distinguished faculty. We take pride in offering a range of programs designed to foster expertise and innovation in various fields.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">
              <div className="flex items-start">
                <BookOpenIcon className="h-12 w-12 text-blue-600" />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">Featured Programs</h3>
                  <p className="mt-2 text-base leading-6 text-gray-600">
                    Our <span className="font-medium text-blue-600">Featured Programs</span> include cutting-edge curricula in engineering, business, and the arts. These programs are meticulously crafted to equip students with critical skills and in-depth knowledge, paving the way for their success in a competitive world.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">
              <div className="flex items-start">
                <StarIcon className="h-12 w-12 text-yellow-600" />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">Faculty Achievements</h3>
                  <p className="mt-2 text-base leading-6 text-gray-600">
                    Our <span className="font-medium text-yellow-600">Faculty Achievements</span> reflect our commitment to academic excellence. Our faculty are recognized leaders in their fields, with notable achievements in research, publications, and contributions to their disciplines. They are dedicated mentors, shaping the next generation of scholars and professionals.
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
              Discover more about our academic offerings<span aria-hidden="true"> &rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicHighlights;
