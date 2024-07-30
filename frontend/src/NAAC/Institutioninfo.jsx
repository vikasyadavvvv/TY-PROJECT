// ./src/components/InstitutionInfo.jsx
import React from 'react';
import { FaSchool, FaChalkboardTeacher, FaBook, FaAward } from 'react-icons/fa';

const InstitutionInfo = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-8">
        <div className="text-center mb-10">
          <FaSchool className="text-indigo-600 text-6xl mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Institution Information for Quality Assessment</h1>
          <p className="text-gray-700 text-lg">Detailed information about our institution's commitment to quality education and assessment.</p>
        </div>
        <div className="text-gray-700 space-y-8">
          <div className="flex items-center">
            <FaChalkboardTeacher className="text-blue-500 text-4xl mr-4" />
            <div>
              <h2 className="text-2xl font-semibold">Faculty Information</h2>
              <p className="text-lg mt-2">Our institution boasts a highly qualified and experienced faculty dedicated to providing quality education and fostering a supportive learning environment.</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaBook className="text-green-500 text-4xl mr-4" />
            <div>
              <h2 className="text-2xl font-semibold">Curriculum Details</h2>
              <p className="text-lg mt-2">We offer a diverse range of courses that are regularly updated to meet the current educational standards and industry requirements.</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaAward className="text-yellow-500 text-4xl mr-4" />
            <div>
              <h2 className="text-2xl font-semibold">Achievements and Recognitions</h2>
              <p className="text-lg mt-2">Our institution has received numerous awards and recognitions for excellence in education, research, and community service.</p>
            </div>
          </div>
          {/* Add more sections as needed */}
        </div>
      </div>
    </div>
  );
};

export default InstitutionInfo;
