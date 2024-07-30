// ./src/components/NAACSSR.jsx
import React from 'react';
import { FaBook, FaCheck, FaChalkboardTeacher, FaUsers } from 'react-icons/fa';

const NAACSSR = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg p-8">
        <div className="text-center">
          <FaBook className="text-indigo-600 text-6xl mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 mb-6">NAAC Self Study Report</h1>
          <p className="text-lg text-gray-600">
            An in-depth analysis and documentation of our institution's performance and quality benchmarks.
          </p>
        </div>
        <div className="mt-8">
          <div className="mb-6">
            <FaCheck className="text-green-500 text-2xl inline-block mr-2" />
            <span className="text-2xl font-semibold">Executive Summary</span>
            <p className="ml-10 mt-2 text-lg">
              A comprehensive overview of our institution’s mission, vision, and core values.
            </p>
          </div>
          <div className="mb-6">
            <FaChalkboardTeacher className="text-blue-500 text-2xl inline-block mr-2" />
            <span className="text-2xl font-semibold">Academic Programs</span>
            <p className="ml-10 mt-2 text-lg">
              Details on the academic programs offered, including curriculum structure, teaching methodologies, and evaluation processes.
            </p>
          </div>
          <div className="mb-6">
            <FaUsers className="text-purple-500 text-2xl inline-block mr-2" />
            <span className="text-2xl font-semibold">Faculty and Staff</span>
            <p className="ml-10 mt-2 text-lg">
              Information on faculty qualifications, recruitment, and professional development initiatives.
            </p>
          </div>
          {/* Additional sections like Infrastructure, Student Support, Research, etc. */}
        </div>
      </div>
    </div>
  );
};

export default NAACSSR;
