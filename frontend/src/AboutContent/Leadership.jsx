import React from 'react';

const Leadership = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Leadership</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 font-serif">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <i className="fas fa-user-tie text-4xl text-blue-500 mb-4"></i>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Principal</h3>
            <p className="text-gray-700">
              Our principal, Dr. [Name], has been a guiding force in our journey towards academic excellence. With a rich background in education and research, Dr. [Name] brings a wealth of knowledge and a visionary approach to our institution.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <i className="fas fa-chalkboard-teacher text-4xl text-green-500 mb-4"></i>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Dean of Academics</h3>
            <p className="text-gray-700">
              Prof. [Name], our Dean of Academics, ensures that our academic programs are of the highest quality. With a focus on innovation and excellence, Prof. [Name] leads our faculty to deliver exceptional education.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <i className="fas fa-users-cog text-4xl text-yellow-500 mb-4"></i>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Head of Administration</h3>
            <p className="text-gray-700">
              Mr. [Name], our Head of Administration, is responsible for the smooth functioning of the college operations. His expertise in management and dedication to excellence ensures a conducive environment for learning and growth.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <i className="fas fa-hands-helping text-4xl text-purple-500 mb-4"></i>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Head of Student Affairs</h3>
            <p className="text-gray-700">
              Ms. [Name], our Head of Student Affairs, is dedicated to supporting our students' well-being and development. She leads initiatives that enhance the student experience, ensuring they have the resources they need to succeed.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <i className="fas fa-cogs text-4xl text-red-500 mb-4"></i>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Head of Research</h3>
            <p className="text-gray-700">
              Dr. [Name], our Head of Research, drives our commitment to innovation and discovery. With extensive research experience, Dr. [Name] fosters a culture of inquiry and excellence among our students and faculty.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <i className="fas fa-globe text-4xl text-teal-500 mb-4"></i>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Head of International Relations</h3>
            <p className="text-gray-700">
              Mr. [Name], our Head of International Relations, works to establish and maintain global partnerships. His efforts ensure that our college remains connected to the global academic community, providing opportunities for collaboration and exchange.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
