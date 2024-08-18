import React from 'react';
import { FaBuilding, FaUsers, FaPhone, FaEnvelope } from 'react-icons/fa';

const PlacementCell = () => {
  return (
    <div className="bg-white py-12 px-8 lg:px-20 shadow-md rounded-md">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-10">
        Placement Cell
      </h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 flex items-center text-gray-800 border-b-2 pb-2 border-blue-300">
          <FaBuilding className="mr-3 text-blue-400" /> Introduction
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Our Placement Cell provides tailored support to students, helping them transition from academic life to professional careers. We work closely with industry leaders to offer placements and internships that align with students' career aspirations.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 flex items-center text-gray-800 border-b-2 pb-2 border-green-300">
          <FaUsers className="mr-3 text-green-400" /> Activities
        </h2>
        <ul className="list-none space-y-3 pl-4 text-lg text-gray-600">
          <li className="flex items-start">
            <span className="mr-2 text-green-500">&#x2022;</span>
            Engaging Workshops and Industry Seminars
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-green-500">&#x2022;</span>
            Mock Interviews for Real-World Preparation
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-green-500">&#x2022;</span>
            Professional Resume and Cover Letter Building
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-green-500">&#x2022;</span>
            Networking Events with Leading Corporations
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 flex items-center text-gray-800 border-b-2 pb-2 border-purple-300">
          <FaBuilding className="mr-3 text-purple-400" /> Recruiters
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-4">
          We are proud to collaborate with some of the most respected companies in the industry, ensuring our students have access to the best opportunities. Our top recruiters include:
        </p>
        <ul className="list-none space-y-3 pl-4 text-lg text-gray-600">
          <li className="flex items-start">
            <span className="mr-2 text-purple-500">&#x2022;</span>
            Infosys – Global leader in technology services
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-purple-500">&#x2022;</span>
            TCS – Tata Consultancy Services, a top IT service provider
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-purple-500">&#x2022;</span>
            Oracle – Renowned multinational computer technology corporation
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4 flex items-center text-gray-800 border-b-2 pb-2 border-red-300">
          <FaPhone className="mr-3 text-red-400" /> Contact Information
        </h2>
        <p className="text-lg text-gray-600 flex items-center mb-3">
          <FaPhone className="mr-3 text-red-400" /> +91 12345 67890
        </p>
        <p className="text-lg text-gray-600 flex items-center">
          <FaEnvelope className="mr-3 text-yellow-400" /> placement@college.edu
        </p>
      </section>
    </div>
  );
};

export default PlacementCell;
