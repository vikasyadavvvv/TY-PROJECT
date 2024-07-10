// src/FacultyPage.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faBuilding } from '@fortawesome/free-solid-svg-icons';

const facultyMembers = [
  {
    name: 'Dr. John Doe',
    photo: 'https://via.placeholder.com/150',
    designation: 'Professor & Head of Department',
    department: 'Computer Science',
    email: 'johndoe@example.com',
    phone: '123-456-7890'
  },
  {
    name: 'Dr. Alice Johnson',
    photo: 'https://via.placeholder.com/150',
    designation: 'Professor',
    department: 'Computer Science',
    email: 'alicejohnson@example.com',
    phone: '234-567-8901'
  },
  {
    name: 'Dr. Jane Smith',
    photo: 'https://via.placeholder.com/150',
    designation: 'Associate Professor & Head of Department',
    department: 'Chemistry',
    email: 'janesmith@example.com',
    phone: '098-765-4321'
  },
  {
    name: 'Dr. Mark Brown',
    photo: 'https://via.placeholder.com/150',
    designation: 'Assistant Professor',
    department: 'Chemistry',
    email: 'markbrown@example.com',
    phone: '345-678-9012'
  },
  {
    name: 'Dr. Robert Brown',
    photo: 'https://via.placeholder.com/150',
    designation: 'Assistant Professor & Head of Department',
    department: 'Business Administration',
    email: 'robertbrown@example.com',
    phone: '456-789-0123'
  },
  {
    name: 'Dr. Emily Davis',
    photo: 'https://via.placeholder.com/150',
    designation: 'Lecturer',
    department: 'Business Administration',
    email: 'emilydavis@example.com',
    phone: '567-890-1234'
  },
  // Add more faculty members as needed
];

const FacultyPage = () => {
  return (
    <div className="container mx-auto my-8 p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Faculty Members</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {facultyMembers.map((faculty, index) => (
          <div
            key={index}
            className={`p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex flex-col items-center space-y-4 ${
              faculty.designation.includes('Head of Department') ? 'border-2 border-blue-500' : ''
            }`}
          >
            <img src={faculty.photo} alt={faculty.name} className="w-24 h-24 rounded-full object-cover" />
            <div className="text-center">
              <h2 className="text-xl font-bold">{faculty.name}</h2>
              <p className="text-gray-500">{faculty.designation}</p>
              <p className="text-gray-500">{faculty.department}</p>
            </div>
            <div className="flex space-x-4">
              <a href={`mailto:${faculty.email}`} className="text-blue-500">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a href={`tel:${faculty.phone}`} className="text-blue-500">
                <FontAwesomeIcon icon={faPhone} />
              </a>
              <FontAwesomeIcon icon={faBuilding} className="text-gray-500" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacultyPage;
