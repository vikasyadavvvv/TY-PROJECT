// src/DepartmentPage.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faFlask, faChartLine, faBriefcase, faBalanceScale, faBusinessTime } from '@fortawesome/free-solid-svg-icons';

const departments = [
  { name: 'Computer Science', icon: faLaptopCode, description: 'Learn about software development, algorithms, and data structures.' },
  { name: 'Chemistry', icon: faFlask, description: 'Explore the world of chemicals, reactions, and laboratory techniques.' },
  { name: 'Business Administration', icon: faChartLine, description: 'Understand the fundamentals of business, management, and economics.' },
  { name: 'Commerce', icon: faBriefcase, description: 'Dive into accounting, finance, and trade.' },
  { name: 'Law', icon: faBalanceScale, description: 'Study legal systems, case law, and legal practices.' },
  { name: 'Management Studies', icon: faBusinessTime, description: 'Learn about strategic management, leadership, and organizational behavior.' },
];

const DepartmentPage = () => {
  return (
    <div className="container mx-auto my-8 p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Departments</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {departments.map((department, index) => (
          <div key={index} className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
            <FontAwesomeIcon icon={department.icon} className="text-blue-500 text-3xl" />
            <div>
              <h2 className="text-xl font-bold">{department.name}</h2>
              <p className="text-gray-500">{department.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentPage;
