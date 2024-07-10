import React from 'react';
import { FaFlask, FaUserTie, FaMicroscope, FaAward } from 'react-icons/fa';

const ResearchCentre = () => {
  return (
    <div className="p-8 font-serif">
      <h1 className="text-3xl font-bold mb-4 text-center">Research Centre</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
        <p className="text-lg">
          Our Research Centre is dedicated to advancing knowledge through innovative research and development. We focus on interdisciplinary collaboration and cutting-edge technology to address complex challenges.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Research Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center p-4 border rounded-lg shadow-md">
            <FaFlask className="text-4xl text-blue-500 mr-4" />
            <div>
              <h3 className="text-xl font-bold">Biotechnology</h3>
              <p>Exploring the potential of biological systems to create new technologies.</p>
            </div>
          </div>
          <div className="flex items-center p-4 border rounded-lg shadow-md">
            <FaMicroscope className="text-4xl text-green-500 mr-4" />
            <div>
              <h3 className="text-xl font-bold">Nanotechnology</h3>
              <p>Investigating nanoscale materials and their applications.</p>
            </div>
          </div>
          <div className="flex items-center p-4 border rounded-lg shadow-md">
            <FaFlask className="text-4xl text-red-500 mr-4" />
            <div>
              <h3 className="text-xl font-bold">Environmental Science</h3>
              <p>Addressing environmental issues through innovative research.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Faculty</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center p-4 border rounded-lg shadow-md">
            <FaUserTie className="text-4xl text-purple-500 mr-4" />
            <div>
              <h3 className="text-xl font-bold">Dr. A. B. Smith</h3>
              <p>Head of Research, Expert in Biotechnology</p>
            </div>
          </div>
          <div className="flex items-center p-4 border rounded-lg shadow-md">
            <FaUserTie className="text-4xl text-purple-500 mr-4" />
            <div>
              <h3 className="text-xl font-bold">Dr. C. D. Johnson</h3>
              <p>Senior Researcher, Specialist in Nanotechnology</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Facilities</h2>
        <p className="text-lg">
          Our centre is equipped with state-of-the-art laboratories, advanced analytical instruments, and computational resources to support a wide range of research activities.
        </p>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4">Achievements</h2>
        <div className="flex items-center p-4 border rounded-lg shadow-md">
          <FaAward className="text-4xl text-yellow-500 mr-4" />
          <div>
            <h3 className="text-xl font-bold">Award-Winning Research</h3>
            <p>Our team has received numerous awards for groundbreaking research in various fields.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResearchCentre;
