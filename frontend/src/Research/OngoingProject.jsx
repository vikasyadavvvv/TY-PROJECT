import React from 'react';
import { FaUsers, FaCalendarAlt, FaTasks } from 'react-icons/fa';

const OngoingProjects = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Ongoing Projects</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Project Overviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex flex-col items-center p-4 border rounded-lg shadow-md">
            <FaTasks className="text-4xl text-blue-500 mb-4" />
            <div>
              <h3 className="text-xl font-bold">Biotechnology Research</h3>
              <p>Investigating new methods in genetic engineering and their applications in medicine.</p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4 border rounded-lg shadow-md">
            <FaTasks className="text-4xl text-green-500 mb-4" />
            <div>
              <h3 className="text-xl font-bold">Nanotechnology Innovation</h3>
              <p>Developing nanoscale devices for use in electronics and materials science.</p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4 border rounded-lg shadow-md">
            <FaTasks className="text-4xl text-red-500 mb-4" />
            <div>
              <h3 className="text-xl font-bold">Environmental Solutions</h3>
              <p>Creating sustainable solutions to address environmental challenges.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Project Teams</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex items-center p-4 border rounded-lg shadow-md">
            <FaUsers className="text-4xl text-purple-500 mr-4" />
            <div>
              <h3 className="text-xl font-bold">Biotechnology Team</h3>
              <p>Led by Dr. A. B. Smith, this team includes experts in genetic engineering and molecular biology.</p>
            </div>
          </div>
          <div className="flex items-center p-4 border rounded-lg shadow-md">
            <FaUsers className="text-4xl text-purple-500 mr-4" />
            <div>
              <h3 className="text-xl font-bold">Nanotechnology Team</h3>
              <p>Led by Dr. C. D. Johnson, focusing on nanodevice development and applications.</p>
            </div>
          </div>
          <div className="flex items-center p-4 border rounded-lg shadow-md">
            <FaUsers className="text-4xl text-purple-500 mr-4" />
            <div>
              <h3 className="text-xl font-bold">Environmental Science Team</h3>
              <p>Led by Dr. E. F. Brown, addressing environmental issues through innovative research.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4">Project Timelines</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex items-center p-4 border rounded-lg shadow-md">
            <FaCalendarAlt className="text-4xl text-yellow-500 mr-4" />
            <div>
              <h3 className="text-xl font-bold">Biotechnology Project</h3>
              <p>Start Date: January 2023</p>
              <p>Expected Completion: December 2024</p>
            </div>
          </div>
          <div className="flex items-center p-4 border rounded-lg shadow-md">
            <FaCalendarAlt className="text-4xl text-yellow-500 mr-4" />
            <div>
              <h3 className="text-xl font-bold">Nanotechnology Project</h3>
              <p>Start Date: March 2023</p>
              <p>Expected Completion: March 2025</p>
            </div>
          </div>
          <div className="flex items-center p-4 border rounded-lg shadow-md">
            <FaCalendarAlt className="text-4xl text-yellow-500 mr-4" />
            <div>
              <h3 className="text-xl font-bold">Environmental Project</h3>
              <p>Start Date: June 2023</p>
              <p>Expected Completion: June 2025</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OngoingProjects;
