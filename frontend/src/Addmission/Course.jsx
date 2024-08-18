import React from 'react';

const Course = () => {
  return (
    <>
      <h3 className="text-3xl font-extrabold text-center text-gray-900 mb-12">
        Programs We Offer
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 font-serif px-4 mb-6">
        
        <div className="bg-gradient-to-r from-blue-50 to-white shadow-xl rounded-xl p-8 text-center transform transition-transform hover:scale-105">
          <i className="fas fa-laptop-code text-5xl text-blue-600 mb-6"></i>
          <h4 className="text-2xl font-semibold text-gray-800 mb-4">BSc IT</h4>
          <p className="text-gray-700">
            Dive deep into computer science and technology with a focus on programming, data structures, networking, and cybersecurity. This course prepares students for a dynamic career in IT.
          </p>
        </div>
        
        <div className="bg-gradient-to-r from-green-50 to-white shadow-xl rounded-xl p-8 text-center transform transition-transform hover:scale-105">
          <i className="fas fa-flask text-5xl text-green-600 mb-6"></i>
          <h4 className="text-2xl font-semibold text-gray-800 mb-4">BSc Plain</h4>
          <p className="text-gray-700">
            Explore the fundamentals of the natural sciences with courses in Physics, Chemistry, Mathematics, and Biology. This program offers a solid foundation for advanced studies and research.
          </p>
        </div>
        
        <div className="bg-gradient-to-r from-yellow-50 to-white shadow-xl rounded-xl p-8 text-center transform transition-transform hover:scale-105">
          <i className="fas fa-chart-line text-5xl text-yellow-600 mb-6"></i>
          <h4 className="text-2xl font-semibold text-gray-800 mb-4">BCom</h4>
          <p className="text-gray-700">
            Gain in-depth knowledge of commerce, trade, finance, and economics. This course is ideal for students aspiring to pursue careers in accounting, business, and financial management.
          </p>
        </div>
        
        <div className="bg-gradient-to-r from-red-50 to-white shadow-xl rounded-xl p-8 text-center transform transition-transform hover:scale-105">
          <i className="fas fa-university text-5xl text-red-600 mb-6"></i>
          <h4 className="text-2xl font-semibold text-gray-800 mb-4">BBI</h4>
          <p className="text-gray-700">
            Specialize in banking and insurance with a curriculum that covers risk management, financial services, and investment strategies. This course is tailored for future professionals in finance.
          </p>
        </div>
        
        <div className="bg-gradient-to-r from-teal-50 to-white shadow-xl rounded-xl p-8 text-center transform transition-transform hover:scale-105">
          <i className="fas fa-briefcase text-5xl text-teal-600 mb-6"></i>
          <h4 className="text-2xl font-semibold text-gray-800 mb-4">BBA</h4>
          <p className="text-gray-700">
            Prepare for a leadership role in business with a curriculum focused on management, entrepreneurship, and strategic planning. This course is designed for aspiring business professionals.
          </p>
        </div>
        
      </div>
    </>
  );
};

export default Course;
