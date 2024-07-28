import React from 'react';
import { FaUniversity, FaChalkboardTeacher, FaTasks, FaChartLine } from 'react-icons/fa';

const AboutIQAC = () => {
  return (
    <div className="bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-center text-indigo-600 mb-4">About IQAC</h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            The Internal Quality Assurance Cell (IQAC) is a significant administrative body in our college, committed to quality enhancement and sustenance. It aims to develop a system for conscious, consistent, and catalytic improvement in the overall performance of our institution.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-center">
              <FaUniversity className="text-indigo-500 text-4xl mr-4" />
              <div>
                <h2 className="text-xl font-semibold text-gray-800">Quality Initiatives</h2>
                <p className="text-gray-600">
                  Promotes innovative practices to continually improve the effectiveness of the teaching-learning experiences.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <FaChalkboardTeacher className="text-indigo-500 text-4xl mr-4" />
              <div>
                <h2 className="text-xl font-semibold text-gray-800">Faculty Development</h2>
                <p className="text-gray-600">
                  Conducts workshops and seminars to enhance the skills and competencies of the faculty members.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <FaTasks className="text-indigo-500 text-4xl mr-4" />
              <div>
                <h2 className="text-xl font-semibold text-gray-800">Assessment & Accreditation</h2>
                <p className="text-gray-600">
                  Coordinates the accreditation processes to ensure our programs meet high standards of quality and excellence.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <FaChartLine className="text-indigo-500 text-4xl mr-4" />
              <div>
                <h2 className="text-xl font-semibold text-gray-800">Continuous Improvement</h2>
                <p className="text-gray-600">
                  Fosters a culture of continuous improvement by encouraging regular feedback and assessments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutIQAC;
