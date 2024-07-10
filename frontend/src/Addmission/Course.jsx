const Course = () => {
    return ( 
        <>
         <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Programs We Offer</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 font-serif">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <i className="fas fa-laptop-code text-4xl text-blue-500 mb-4"></i>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">BSc IT</h4>
            <p className="text-gray-700">
              Bachelor of Science in Information Technology focuses on computer science and technology.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <i className="fas fa-flask text-4xl text-green-500 mb-4"></i>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">BSc Plain</h4>
            <p className="text-gray-700">
              Bachelor of Science in Pure Sciences includes Physics, Chemistry, Mathematics, and Biology.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <i className="fas fa-chart-line text-4xl text-yellow-500 mb-4"></i>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">BCom</h4>
            <p className="text-gray-700">
              Bachelor of Commerce provides in-depth knowledge of commerce and trade practices.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <i className="fas fa-university text-4xl text-red-500 mb-4"></i>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">BBI</h4>
            <p className="text-gray-700">
              Bachelor of Banking and Insurance covers banking, insurance, and finance subjects.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <i className="fas fa-business-time text-4xl text-purple-500 mb-4"></i>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">BMS</h4>
            <p className="text-gray-700">
              Bachelor of Management Studies focuses on management practices and business strategies.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <i className="fas fa-briefcase text-4xl text-teal-500 mb-4"></i>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">BBA</h4>
            <p className="text-gray-700">
              Bachelor of Business Administration prepares students for careers in business management.
            </p>
          </div>
          </div>

        </>
     );
    }
 
export default Course;