import React from 'react';

const EligibilityCriteria = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Eligibility Criteria</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 font-serif">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <i className="fas fa-laptop-code text-4xl text-blue-500 mb-4"></i>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">BSc IT</h3>
            <p className="text-gray-700 font-bold">
              - Minimum 50% marks in 10+2 with Mathematics and Physics as core subjects.<br />
              - No entrance exam required.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <i className="fas fa-flask text-4xl text-green-500 mb-4"></i>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">BSc Plain</h3>
            <p className="text-gray-700 font-bold">
              - Minimum 50% marks in 10+2 with Physics, Chemistry, and Mathematics/Biology.<br />
              - No entrance exam required.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <i className="fas fa-chart-line text-4xl text-yellow-500 mb-4"></i>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">BCom</h3>
            <p className="text-gray-700 font-bold">
              - Minimum 50% marks in 10+2 with Commerce/Mathematics as a subject.<br />
              - No entrance exam required.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <i className="fas fa-university text-4xl text-red-500 mb-4"></i>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">BBI</h3>
            <p className="text-gray-700 font-bold">
              - Minimum 50% marks in 10+2 with any stream.<br />
              - No entrance exam required.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <i className="fas fa-business-time text-4xl text-purple-500 mb-4"></i>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">BMS</h3>
            <p className="text-gray-700 font-bold">
              - Minimum 50% marks in 10+2 with any stream.<br />
              - No entrance exam required.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <i className="fas fa-briefcase text-4xl text-teal-500 mb-4"></i>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">BBA</h3>
            <p className="text-gray-700 font-bold">
              - Minimum 50% marks in 10+2 with any stream.<br />
              - No entrance exam required.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EligibilityCriteria;
