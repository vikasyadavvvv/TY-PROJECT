// ./src/components/NAACAccreditation.jsx
import React from 'react';
import { FaUniversity, FaCheckCircle, FaInfoCircle } from 'react-icons/fa';

const NAACAccreditation = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-8">
        <div className="text-center">
          <FaUniversity className="text-indigo-600 text-6xl mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-800 mb-6">NAAC Accreditation</h1>
        </div>
        <div className="text-gray-700">
          <div className="mb-4">
            <FaCheckCircle className="text-green-500 text-2xl inline-block mr-2" />
            <span className="text-xl font-semibold">Accreditation Status:</span>
            <p className="ml-10 text-lg">Our college is accredited by NAAC with an 'B+' grade.</p>
          </div>
          <div className="mb-4">
            <FaInfoCircle className="text-blue-500 text-2xl inline-block mr-2" />
            <span className="text-xl font-semibold">College Details:</span>
            <p className="ml-10 text-lg">
            This Institute was founded on 2nd October 1979, on the occasion of the Birth Anniversary of Mahatma Gandhi, the Father of the Nation, and the Birth Anniversary of Late Shri. Lal Bahadur Shastri, the former Prime Minister of India. Since then, the Institute has grown immensely in size and academic status.

</p>
          </div>
          {/* Add more sections as needed */}
        </div>
      </div>
    </div>
  );
};

export default NAACAccreditation;
