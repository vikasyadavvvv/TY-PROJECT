// src/components/Recruiters.js
import React from 'react';
import { FaBuilding, FaHandshake, FaIndustry, FaBriefcase } from 'react-icons/fa';

const recruiters = [
  { name: 'Company A', industry: 'Tech', icon: <FaBuilding className="text-blue-500 text-4xl" /> },
  { name: 'Company B', industry: 'Finance', icon: <FaHandshake className="text-green-500 text-4xl" /> },
  { name: 'Company C', industry: 'Manufacturing', icon: <FaIndustry className="text-purple-500 text-4xl" /> },
  { name: 'Company D', industry: 'Consulting', icon: <FaBriefcase className="text-yellow-500 text-4xl" /> },
];

const Recruiters = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Top Recruiters</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recruiters.map((recruiter, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
            <div className="mb-4">
              {recruiter.icon}
            </div>
            <h2 className="text-2xl font-semibold mb-2">{recruiter.name}</h2>
            <p className="text-gray-600">{recruiter.industry}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recruiters;
