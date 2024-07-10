import React from 'react';
import { AcademicCapIcon, GlobeAltIcon, UsersIcon } from '@heroicons/react/24/outline';
import MissionAndVision from '../AboutContent/Mission&Vision';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <div className="py-16 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 shadow-lg p-4">
        <div className="relative lg:flex lg:items-center">
          <div className="lg:w-full">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center">
              About Us
            </h2>
            <p className="mt-4 text-lg leading-6 text-gray-500 text-center font-serif">
              Our College is dedicated to providing a world-class education and fostering an environment of excellence, innovation, and integrity. Our mission is to empower students to achieve their fullest potential and prepare them for successful careers and meaningful lives.
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 font-serif">
              <div className="text-center">
                <AcademicCapIcon className="mx-auto h-12 w-12 text-indigo-600" />
                <h3 className="mt-4 text-xl leading-6 font-medium text-gray-900">Quality Education</h3>
                <p className="mt-2 text-base leading-6 text-gray-500">
                  Our programs are designed to provide the highest quality education.
                </p>
              </div>
              <div className="text-center">
                <GlobeAltIcon className="mx-auto h-12 w-12 text-indigo-600" />
                <h3 className="mt-4 text-xl leading-6 font-medium text-gray-900">Global Reach</h3>
                <p className="mt-2 text-base leading-6 text-gray-500">
                  We have a diverse student body from all over the world.
                </p>
              </div>
              <div className="text-center">
                <UsersIcon className="mx-auto h-12 w-12 text-indigo-600" />
                <h3 className="mt-4 text-xl leading-6 font-medium text-gray-900">Community Focused</h3>
                <p className="mt-2 text-base leading-6 text-gray-500">
                  Our community is dedicated to mutual growth and support.
                </p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <div
              
                className="text-base font-medium text-indigo-600 hover:text-indigo-500"
              >
             <Link to="/mission&vission" element={<MissionAndVision/>}>  Learn more about our history and mission<span aria-hidden="true"> &rarr;</span> </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
