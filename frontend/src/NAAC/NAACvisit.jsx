// ./src/components/NAACVisit.jsx
import React from 'react';
import { FaCalendarAlt, FaUsers, FaMapMarkerAlt, FaClipboardCheck } from 'react-icons/fa';

const NAACVisit = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg p-8">
        <div className="text-center">
          <FaClipboardCheck className="text-indigo-600 text-6xl mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 mb-6">NAAC Visit Overview</h1>
          <p className="text-lg text-gray-600">
            Key details about the upcoming NAAC visit to our institution.
          </p>
        </div>
        <div className="mt-8 space-y-8">
          <div className="flex items-start">
            <FaCalendarAlt className="text-blue-500 text-2xl inline-block mr-4" />
            <div>
              <h2 className="text-2xl font-semibold">Visit Schedule</h2>
              <p className="text-lg text-gray-700">
                The NAAC peer team will visit our campus from <strong>1st August 2024</strong> to <strong>3rd August 2024</strong>.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <FaUsers className="text-green-500 text-2xl inline-block mr-4" />
            <div>
              <h2 className="text-2xl font-semibold">Team Members</h2>
              <p className="text-lg text-gray-700">
                The NAAC team consists of eminent academicians and experts in the field of higher education.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <FaMapMarkerAlt className="text-red-500 text-2xl inline-block mr-4" />
            <div>
              <h2 className="text-2xl font-semibold">Venue and Logistics</h2>
              <p className="text-lg text-gray-700">
                The assessment will take place at the main campus, with detailed directions and accommodations provided for the team.
              </p>
            </div>
          </div>
          {/* Additional sections like preparations, key focus areas, etc. */}
        </div>
      </div>
    </div>
  );
};

export default NAACVisit;
