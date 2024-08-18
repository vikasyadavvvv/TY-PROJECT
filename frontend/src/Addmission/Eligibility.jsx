import React from 'react';

const EligibilityCriteria = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
          Eligibility Criteria for Undergraduate Courses
        </h2>
        <div className="space-y-12 text-lg leading-relaxed font-serif text-gray-800">
          
          <div className="bg-white shadow-md rounded-lg p-8 flex items-start">
            <i className="fas fa-laptop-code text-4xl text-blue-700 mr-6"></i>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-blue-700">BSc IT</h3>
              <p className="text-gray-700">
                Ideal for students passionate about technology, programming, and software development. Applicants must have secured a minimum of <span className="font-mono">50% marks</span> in their 10+2 examinations, with <span className="font-semibold">Mathematics</span> and <span className="font-semibold">Physics</span> as core subjects. <span className="font-semibold">No entrance exam</span> is required, but a strong foundation in math and logic will be beneficial.
              </p>
            </div>
          </div>
          
          <div className="bg-white shadow-md rounded-lg p-8 flex items-start">
            <i className="fas fa-flask text-4xl text-green-700 mr-6"></i>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-green-700">BSc Plain</h3>
              <p className="text-gray-700">
                Perfect for those looking to explore various scientific disciplines. Candidates should have a minimum of <span className="font-mono">50% marks</span> in their 10+2 exams, with <span className="font-semibold">Physics</span>, <span class="font-semibold">Chemistry</span>, and <span className="font-semibold">Mathematics/Biology</span>. <span className="font-semibold">No entrance exam</span> is required, making it accessible for students with a keen interest in science.
              </p>
            </div>
          </div>
          
          <div className="bg-white shadow-md rounded-lg p-8 flex items-start">
            <i className="fas fa-chart-line text-4xl text-yellow-600 mr-6"></i>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-600">BCom</h3>
              <p className="text-gray-700">
                Tailored for students with a knack for commerce, finance, and accounting. Applicants must have scored at least <span className="font-mono">50% marks</span> in their 10+2 with <span className="font-semibold">Commerce</span> or <span className="font-semibold">Mathematics</span> as a subject. <span className="font-semibold">No entrance exam</span> is required, but a good grasp of economics and business studies will give students an edge.
              </p>
            </div>
          </div>
          
          <div className="bg-white shadow-md rounded-lg p-8 flex items-start">
            <i className="fas fa-university text-4xl text-red-600 mr-6"></i>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-red-600">BBI</h3>
              <p className="text-gray-700">
                Ideal for those interested in banking, insurance, and financial services. Candidates should have a minimum of <span className="font-mono">50% marks</span> in their 10+2 exams with any stream. <span className="font-semibold">No entrance exam</span> is required, but an interest in financial markets and institutions will be advantageous.
              </p>
            </div>
          </div>
          
          <div className="bg-white shadow-md rounded-lg p-8 flex items-start">
            <i className="fas fa-briefcase text-4xl text-purple-700 mr-6"></i>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-purple-700">BBA</h3>
              <p className="text-gray-700">
                Designed for future business leaders and entrepreneurs. Applicants need a minimum of <span className="font-mono">50% marks</span> in their 10+2 with any stream. <span className="font-semibold">No entrance exam</span> is required, but leadership qualities, communication skills, and an entrepreneurial spirit will be nurtured throughout the course.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EligibilityCriteria;

