// src/FeesStructure.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faRupeeSign, faBook, faMedal, faDollarSign } from '@fortawesome/free-solid-svg-icons';

const FeesStructure = () => {
  const courses = [
    { name: 'B.Sc IT', fee: '₹ 30,000' },
    { name: 'B.Sc Plain', fee: '₹ 20,000' },
    { name: 'B.Com', fee: '₹ 10,000' },
    { name: 'BBA', fee: '₹ 15,000' },
    { name: 'BBI', fee: '₹ 15,000' },
  
  ];

  const additionalFees = [
    { name: 'Library Fee', fee: '₹ 2000' },
    { name: 'Laboratory Fee', fee: '₹ 5000' },
    { name: 'Sports Fee', fee: '₹ 3000' },
    { name: 'Development Fee', fee: '₹ 2000' },
  ];

  const scholarships = [
    { name: 'Merit-based Scholarships', detail: 'Up to 50% off' },
    { name: 'Need-based Financial Aid', detail: 'Up to 30% off' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
      <h1 className="text-3xl font-bold mb-6 text-center ">Fees Structure</h1>
      
      {/* Courses and Fees */}
      <div className="mb-6 ">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FontAwesomeIcon icon={faGraduationCap} className="mr-2" />
          Courses and Annual Fees
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {courses.map((course, index) => (
            <div key={index} className="p-4 border rounded-lg shadow-sm bg-gray-50">
              <h3 className="text-xl font-medium mb-2">{course.name}</h3>
              <p className="text-lg font-bold text-green-600 flex items-center">
                <FontAwesomeIcon icon={faRupeeSign} className="mr-2" />
                {course.fee}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Fees */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FontAwesomeIcon icon={faBook} className="mr-2" />
          Additional Fees
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {additionalFees.map((fee, index) => (
            <div key={index} className="p-4 border rounded-lg shadow-sm bg-gray-50">
              <h3 className="text-xl font-medium mb-2">{fee.name}</h3>
              <p className="text-lg font-bold text-green-600 flex items-center">
                <FontAwesomeIcon icon={faRupeeSign} className="mr-2" />
                {fee.fee}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Discounts and Scholarships */}
      <div>
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FontAwesomeIcon icon={faMedal} className="mr-2" />
          Discounts and Scholarships
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {scholarships.map((scholarship, index) => (
            <div key={index} className="p-4 border rounded-lg shadow-sm bg-gray-50">
              <h3 className="text-xl font-medium mb-2">{scholarship.name}</h3>
              <p className="text-lg font-bold text-green-600 flex items-center">
                <FontAwesomeIcon icon={faDollarSign} className="mr-2" />
                {scholarship.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeesStructure;
