// src/components/NotableAlumni.js
import React from 'react';
import { FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';

const notableAlumni = [
  {
    name: 'Elon Musk',
    image: 'https://randomuser.me/api/portraits/men/10.jpg',
    position: 'CEO of SpaceX',
    linkedin: '#',
    facebook: '#',
    twitter: '#',
  },
  {
    name: 'Sundar Pichai',
    image: 'https://randomuser.me/api/portraits/men/11.jpg',
    position: 'CEO of Google',
    linkedin: '#',
    facebook: '#',
    twitter: '#',
  },
  {
    name: 'Sheryl Sandberg',
    image: 'https://randomuser.me/api/portraits/women/10.jpg',
    position: 'COO of Facebook',
    linkedin: '#',
    facebook: '#',
    twitter: '#',
  },
  // Add more notable alumni as needed
];

const NotableAlumni = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Notable Alumni</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {notableAlumni.map((alumnus, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center">
            <img
              className="w-24 h-24 rounded-full mx-auto mb-4"
              src={alumnus.image}
              alt={alumnus.name}
            />
            <h2 className="text-xl font-semibold mb-2">{alumnus.name}</h2>
            <p className="text-gray-600 mb-4">{alumnus.position}</p>
            <div className="flex justify-center space-x-4">
              <a href={alumnus.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-blue-700 text-2xl hover:text-blue-900" />
              </a>
              <a href={alumnus.facebook} target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-blue-600 text-2xl hover:text-blue-800" />
              </a>
              <a href={alumnus.twitter} target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-blue-400 text-2xl hover:text-blue-600" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotableAlumni;
