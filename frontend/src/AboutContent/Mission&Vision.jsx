import React from 'react';

const MissionAndVision = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Mission & Vision</h2>
        <div className="grid md:grid-cols-2 gap-8 font-serif">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="mb-4 flex items-start">
              <i className="fas fa-bullseye text-2xl text-blue-500 mr-3"></i>
              <h3 className="text-2xl font-semibold text-gray-800">Mission</h3>
            </div>
            <p className="text-gray-700">
              Our mission is to provide a transformative education that fosters intellectual growth, creativity, and a passion for learning. We are committed to nurturing responsible global citizens who are equipped with the knowledge and skills to contribute meaningfully to society.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <i className="fas fa-check-circle text-green-500 mr-2"></i>
                <span>Deliver high-quality education across various disciplines.</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle text-green-500 mr-2"></i>
                <span>Foster a culture of research and innovation.</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle text-green-500 mr-2"></i>
                <span>Encourage holistic development through extracurricular activities.</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle text-green-500 mr-2"></i>
                <span>Promote inclusivity and diversity on campus.</span>
              </li>
            </ul>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="mb-4 flex items-start">
              <i className="fas fa-eye text-2xl text-purple-500 mr-3"></i>
              <h3 className="text-2xl font-semibold text-gray-800">Vision</h3>
            </div>
            <p className="text-gray-700">
              Our vision is to be a leading educational institution recognized for excellence in teaching, research, and community engagement. We aspire to create a dynamic and inclusive learning environment that prepares students for the challenges of the 21st century.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <i className="fas fa-star text-yellow-500 mr-2"></i>
                <span>Achieve academic excellence and global recognition.</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-star text-yellow-500 mr-2"></i>
                <span>Innovate and lead in research and development.</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-star text-yellow-500 mr-2"></i>
                <span>Engage with communities to make a positive impact.</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-star text-yellow-500 mr-2"></i>
                <span>Foster global citizenship and leadership qualities.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionAndVision;
