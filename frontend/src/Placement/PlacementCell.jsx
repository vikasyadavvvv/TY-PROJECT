// src/components/PlacementCell.js
import React from 'react';
import { FaBuilding, FaUsers, FaPhone, FaEnvelope } from 'react-icons/fa';

const PlacementCell = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Placement Cell</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FaBuilding className="mr-2 text-blue-500" /> Introduction
        </h2>
        <p>
          Our Placement Cell is dedicated to providing comprehensive support to students in their career pursuits. We assist students in securing job placements and internships with top companies.
        </p>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FaUsers className="mr-2 text-green-500" /> Activities
        </h2>
        <ul className="list-disc list-inside">
          <li>Workshops and Seminars</li>
          <li>Mock Interviews</li>
          <li>Resume Building Sessions</li>
          <li>Industry Connect Programs</li>
        </ul>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FaBuilding className="mr-2 text-purple-500" /> Recruiters
        </h2>
        <p>Our top recruiters include:</p>
        <ul className="list-disc list-inside">
          <li>Company A</li>
          <li>Company B</li>
          <li>Company C</li>
        </ul>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FaPhone className="mr-2 text-red-500" /> Contact Information
        </h2>
        <p className="flex items-center">
          <FaPhone className="mr-2 text-red-500" /> +91 12345 67890
        </p>
        <p className="flex items-center">
          <FaEnvelope className="mr-2 text-yellow-500" /> placement@college.edu
        </p>
      </section>
    </div>
  );
};

export default PlacementCell;
