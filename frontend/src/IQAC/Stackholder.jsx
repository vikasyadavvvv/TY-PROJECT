// src/StakeholderFeedbackPage.js
import React from 'react';
import { FaUserGraduate, FaChalkboardTeacher, FaBriefcase, FaUserFriends } from 'react-icons/fa';

const feedbackCategories = [
  {
    id: 1,
    stakeholder: 'Students',
    icon: <FaUserGraduate className="text-blue-500" />,
    description: 'Feedback on curriculum, teaching methods, and campus facilities.',
  },
  {
    id: 2,
    stakeholder: 'Faculty',
    icon: <FaChalkboardTeacher className="text-green-500" />,
    description: 'Input on institutional support, research opportunities, and faculty development.',
  },
  {
    id: 3,
    stakeholder: 'Alumni',
    icon: <FaUserFriends className="text-yellow-500" />,
    description: 'Insights on program effectiveness, career impact, and alumni engagement.',
  },
  {
    id: 4,
    stakeholder: 'Employers',
    icon: <FaBriefcase className="text-red-500" />,
    description: 'Opinions on graduate preparedness, skills gap, and collaboration opportunities.',
  },
];

const StakeholderFeedbackPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center">Stakeholder Feedback</h1>
      <div className="space-y-6">
        {feedbackCategories.map(category => (
          <div key={category.id} className="p-6 bg-white border rounded-lg shadow-md flex items-start space-x-4">
            <div className="text-3xl">{category.icon}</div>
            <div>
              <h2 className="text-2xl font-semibold">{category.stakeholder}</h2>
              <p className="text-gray-700">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StakeholderFeedbackPage;
