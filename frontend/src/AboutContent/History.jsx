

import React from 'react';

const History = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">History of the College</h2>
        <div className="bg-white shadow-lg rounded-lg p-6 font-serif">
          <div className="mb-4 flex items-start">
            <i className="fas fa-university text-2xl text-blue-500 mr-3"></i>
            <p className="text-gray-700">
              Established in [Year], our college began with a vision of quality education for all. Today, we are a leading institution known for academic excellence and vibrant campus life.
            </p>
          </div>
          <div className="mb-4 flex items-start">
            <i className="fas fa-users text-2xl text-green-500 mr-3"></i>
            <p className="text-gray-700">
              Our founders aimed to create a nurturing environment for intellectual growth and creativity. We offer a range of undergraduate and postgraduate programs.
            </p>
          </div>
          <div className="mb-4 flex items-start">
            <i className="fas fa-lightbulb text-2xl text-yellow-500 mr-3"></i>
            <p className="text-gray-700">
              Committed to integrity, innovation, and inclusivity, our alumni achieve success across various fields, maintaining our proud legacy.
            </p>
          </div>
          <div className="mb-4 flex items-start">
            <i className="fas fa-book text-2xl text-red-500 mr-3"></i>
            <p className="text-gray-700">
              Initially focused on arts and sciences, we now offer diverse courses in technology, management, and other professional fields.
            </p>
          </div>
          <div className="mb-4 flex items-start">
            <i className="fas fa-building text-2xl text-purple-500 mr-3"></i>
            <p className="text-gray-700">
              Our campus boasts state-of-the-art facilities, including a top-tier library, laboratories, and sports amenities, ensuring a comprehensive educational experience.
            </p>
          </div>
          <div className="mb-4 flex items-start">
            <i className="fas fa-theater-masks text-2xl text-indigo-500 mr-3"></i>
            <p className="text-gray-700">
              We promote holistic development through cultural fests, sports tournaments, and academic conferences, reflecting our commitment to a vibrant campus life.
            </p>
          </div>
          <div className="mb-4 flex items-start">
            <i className="fas fa-globe text-2xl text-teal-500 mr-3"></i>
            <p className="text-gray-700">
              Our diverse community enriches the learning experience. We strive to create an inclusive environment where every student feels valued and supported.
            </p>
          </div>
          <div className="flex items-start">
            <i className="fas fa-road text-2xl text-gray-500 mr-3"></i>
            <p className="text-gray-700">
              As we look to the future, we remain committed to excellence in education, research, and community engagement, preparing students to make a positive impact globally.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
