import React from 'react';

const Achievements = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Achievements</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 font-serif">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <i className="fas fa-trophy text-4xl text-yellow-500 mb-4"></i>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Academic Excellence</h3>
            <p className="text-gray-700">
              Our college has consistently ranked among the top institutions for academic performance, with numerous students securing university gold medals and top ranks.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <i className="fas fa-flask text-4xl text-blue-500 mb-4"></i>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Research and Innovation</h3>
            <p className="text-gray-700">
              We have received multiple grants and awards for pioneering research projects. Our faculty and students regularly publish papers in reputed journals.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <i className="fas fa-running text-4xl text-green-500 mb-4"></i>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Sports Achievements</h3>
            <p className="text-gray-700">
              Our athletes have excelled in various state and national level competitions, bringing home numerous trophies and accolades in sports like cricket, football, and athletics.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <i className="fas fa-palette text-4xl text-red-500 mb-4"></i>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Cultural Festivities</h3>
            <p className="text-gray-700">
              Our annual cultural fest is one of the most anticipated events in the region, showcasing the artistic talents of our students and featuring renowned performers.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <i className="fas fa-briefcase text-4xl text-purple-500 mb-4"></i>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Placement Records</h3>
            <p className="text-gray-700">
              Our graduates have been successfully placed in top multinational companies, with impressive packages and career growth opportunities.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <i className="fas fa-globe text-4xl text-teal-500 mb-4"></i>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Global Collaborations</h3>
            <p className="text-gray-700">
              We have established partnerships with leading universities worldwide, facilitating student exchange programs and collaborative research.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
