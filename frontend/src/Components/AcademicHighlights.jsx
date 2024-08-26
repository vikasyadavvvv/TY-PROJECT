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
            Our institution stands out for its exceptional programs and distinguished faculty. We take pride in offering a range of degree programs designed to foster expertise and innovation in various fields.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">
              <div className="flex items-start">
                <BookOpenIcon className="h-12 w-12 text-blue-600" />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">Degree Programs</h3>
                  <p className="mt-2 text-base leading-6 text-gray-600">
                    Our college offers a diverse range of <span className="font-medium text-blue-600">degree programs</span> to cater to various academic interests and career goals. Some of our prominent programs include:
                  </p>
                  <ul className="mt-2 list-disc list-inside text-gray-600">
                    <li>Bachelor of Science in Engineering</li>
                    <li>Bachelor of Business Administration</li>
                    <li>Bachelor of Arts in Social Sciences</li>
                    <li>Bachelor of Commerce</li>
                    <li>Bachelor of Science in Information Technology</li>
                  </ul>
                  <p className="mt-4 text-base leading-6 text-gray-600">
                    Each program is crafted to provide students with comprehensive knowledge and practical skills, preparing them for success in their chosen fields.
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
                    Our <span className="font-medium text-yellow-600">faculty members</span> are leaders in their fields, recognized for their groundbreaking research, publications, and contributions to academia. They are dedicated to mentoring the next generation of scholars and professionals.
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
