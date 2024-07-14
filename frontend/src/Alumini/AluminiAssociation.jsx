// src/components/AlumniAssociation.js
import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const keyMembers = [
  {
    name: 'John Doe',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    position: 'President',
  },
  {
    name: 'Jane Smith',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    position: 'Vice President',
  },
  {
    name: 'Michael Johnson',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
    position: 'Secretary',
  },
  // Add more key members as needed
];

const AlumniAssociation = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Alumni Association</h1>
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700 mb-4">
          The Alumni Association aims to connect alumni, support current students, and foster a
          sense of community among graduates. We organize events, provide networking opportunities,
          and facilitate mentorship programs to help our alumni stay connected and thrive in their
          careers.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Activities and Events</h2>
        <p className="text-gray-700 mb-4">
          Our activities include annual reunions, career workshops, networking events, and community
          service projects. Join us to reconnect with old friends, make new connections, and give
          back to the community.
        </p>
      </div>
      <h2 className="text-3xl font-semibold text-center mb-8">Key Members</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {keyMembers.map((member, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center">
            <img
              className="w-24 h-24 rounded-full mx-auto mb-4"
              src={member.image}
              alt={member.name}
            />
            <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
            <p className="text-gray-600 mb-2">{member.position}</p>
          </div>
        ))}
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="text-gray-700 mb-4">
          <FaMapMarkerAlt className="inline-block text-blue-500 mr-2" />
          123 Alumni Ave, City, Country
        </p>
        <p className="text-gray-700 mb-4">
          <FaPhone className="inline-block text-green-500 mr-2" />
          (123) 456-7890
        </p>
        <p className="text-gray-700">
          <FaEnvelope className="inline-block text-red-500 mr-2" />
          alumni@college.edu
        </p>
      </div>
    </div>
  );
};

export default AlumniAssociation;
