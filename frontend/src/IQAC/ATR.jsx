// src/ATRPage.js
import React from 'react';
import { FaCheckCircle, FaTimesCircle, FaHourglassHalf } from 'react-icons/fa';

const actions = [
  {
    id: 1,
    title: 'Update Curriculum',
    description: 'Revise the syllabus for the upcoming academic year.',
    status: 'Completed',
  },
  {
    id: 2,
    title: 'Infrastructure Improvement',
    description: 'Upgrade computer labs and library facilities.',
    status: 'In Progress',
  },
  {
    id: 3,
    title: 'Faculty Development Program',
    description: 'Organize workshops for faculty on modern teaching techniques.',
    status: 'Pending',
  },
];

const ATRPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Action Taken Report</h1>
      <div className="space-y-4">
        {actions.map(action => (
          <div key={action.id} className="p-4 border rounded-lg shadow-sm flex items-center">
            <div className="text-2xl mr-4">
              {action.status === 'Completed' && <FaCheckCircle className="text-green-500" />}
              {action.status === 'In Progress' && <FaHourglassHalf className="text-yellow-500" />}
              {action.status === 'Pending' && <FaTimesCircle className="text-red-500" />}
            </div>
            <div>
              <h2 className="text-xl font-semibold">{action.title}</h2>
              <p className="text-gray-600">{action.description}</p>
              <p className="text-sm font-medium text-blue-500">{action.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ATRPage;
