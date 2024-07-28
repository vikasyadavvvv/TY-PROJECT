// src/AAAReportPage.js
import React from 'react';
import { FaBook, FaChalkboardTeacher, FaCog, FaUserShield } from 'react-icons/fa';

const auditSections = [
  {
    id: 1,
    title: 'Curriculum Design',
    description: 'Evaluation of curriculum relevance and innovation.',
    icon: <FaBook className="text-blue-500" />,
  },
  {
    id: 2,
    title: 'Teaching-Learning Process',
    description: 'Assessment of teaching methodologies and learning outcomes.',
    icon: <FaChalkboardTeacher className="text-green-500" />,
  },
  {
    id: 3,
    title: 'Administrative Governance',
    description: 'Review of administrative efficiency and governance structures.',
    icon: <FaCog className="text-yellow-500" />,
  },
  {
    id: 4,
    title: 'Research and Development',
    description: 'Examination of research output and innovation.',
    icon: <FaUserShield className="text-red-500" />,
  },
];

const AAAReportPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center">Academic and Administrative Audit Report</h1>
      <div className="space-y-6">
        {auditSections.map(section => (
          <div key={section.id} className="p-6 bg-white border rounded-lg shadow-md flex items-start space-x-4">
            <div className="text-3xl">{section.icon}</div>
            <div>
              <h2 className="text-2xl font-semibold">{section.title}</h2>
              <p className="text-gray-700">{section.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AAAReportPage;
