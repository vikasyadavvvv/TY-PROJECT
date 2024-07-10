import React from 'react';
import { FaBook, FaFilePdf, FaFileAlt } from 'react-icons/fa';

const Publications = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Publications</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Recent Publications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex items-center p-4 border rounded-lg shadow-md">
            <FaBook className="text-4xl text-blue-500 mr-4" />
            <div>
              <h3 className="text-xl font-bold">Exploring Biotechnology</h3>
              <p>Dr. A. B. Smith - 2024</p>
            </div>
          </div>
          <div className="flex items-center p-4 border rounded-lg shadow-md">
            <FaBook className="text-4xl text-green-500 mr-4" />
            <div>
              <h3 className="text-xl font-bold">Nanotechnology Advances</h3>
              <p>Dr. C. D. Johnson - 2024</p>
            </div>
          </div>
          <div className="flex items-center p-4 border rounded-lg shadow-md">
            <FaBook className="text-4xl text-red-500 mr-4" />
            <div>
              <h3 className="text-xl font-bold">Environmental Solutions</h3>
              <p>Dr. E. F. Brown - 2024</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Featured Publications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex items-center p-4 border rounded-lg shadow-md">
            <FaFilePdf className="text-4xl text-purple-500 mr-4" />
            <div>
              <h3 className="text-xl font-bold">Innovations in Biology</h3>
              <p>Download PDF</p>
            </div>
          </div>
          <div className="flex items-center p-4 border rounded-lg shadow-md">
            <FaFilePdf className="text-4xl text-purple-500 mr-4" />
            <div>
              <h3 className="text-xl font-bold">Nanotech Research</h3>
              <p>Download PDF</p>
            </div>
          </div>
          <div className="flex items-center p-4 border rounded-lg shadow-md">
            <FaFilePdf className="text-4xl text-purple-500 mr-4" />
            <div>
              <h3 className="text-xl font-bold">Environmental Studies</h3>
              <p>Download PDF</p>
            </div>
          </div>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4">Downloadable Documents</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex items-center p-4 border rounded-lg shadow-md">
            <FaFileAlt className="text-4xl text-yellow-500 mr-4" />
            <div>
              <h3 className="text-xl font-bold">Research Guidelines</h3>
              <p>Download DOC</p>
            </div>
          </div>
          <div className="flex items-center p-4 border rounded-lg shadow-md">
            <FaFileAlt className="text-4xl text-yellow-500 mr-4" />
            <div>
              <h3 className="text-xl font-bold">Publication Policy</h3>
              <p>Download DOC</p>
            </div>
          </div>
          <div className="flex items-center p-4 border rounded-lg shadow-md">
            <FaFileAlt className="text-4xl text-yellow-500 mr-4" />
            <div>
              <h3 className="text-xl font-bold">Submission Forms</h3>
              <p>Download DOC</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Publications;
