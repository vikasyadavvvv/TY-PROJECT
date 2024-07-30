import React from 'react';

const MissionAndVision = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Mission & Vision</h2>
        <div className="grid md:grid-cols-2 gap-8 font-serif">

          {/* Vision Section */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="mb-4 flex items-center">
              <i className="fas fa-eye text-2xl text-purple-500 mr-3"></i>
              <h3 className="text-2xl font-semibold text-gray-800">Our Vision</h3>
            </div>
            <p className="text-gray-700">
              To contribute to society through the pursuit of education.
            </p>
          </div>

          {/* Mission Section */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="mb-4 flex items-center">
              <i className="fas fa-bullseye text-2xl text-blue-500 mr-3"></i>
              <h3 className="text-2xl font-semibold text-gray-800">Our Mission</h3>
            </div>
            <p className="text-gray-700">
              To impart qualitative and valuable services in the field of education to all those who need it most. To aim at overall personality development of the students through curricular, co-curricular, extra-curricular, and social activities.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-1 gap-8 font-serif mt-8">
          {/* Objectives Section */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="mb-4 flex items-center">
              <i className="fas fa-bullseye text-2xl text-green-500 mr-3"></i>
              <h3 className="text-2xl font-semibold text-gray-800">Our Objectives</h3>
            </div>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <i className="fas fa-check-circle text-green-500 mr-2"></i>
                <span>To provide education for the poor and deprived class students.</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle text-green-500 mr-2"></i>
                <span>To provide opportunities for the development of skills, capabilities, and talents.</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle text-green-500 mr-2"></i>
                <span>To promote Regularity, Punctuality, and Discipline among students.</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle text-green-500 mr-2"></i>
                <span>To foster a supportive and inclusive educational environment.</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle text-green-500 mr-2"></i>
                <span>To encourage community engagement and social responsibility.</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MissionAndVision;
