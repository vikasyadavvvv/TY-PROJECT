import React from 'react';

const AdmissionProcess = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Admission Process</h2>
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <div className="text-center mb-4">
            <i className="fas fa-graduation-cap text-5xl text-blue-500"></i>
          </div>
          <p className="text-gray-700 mb-6 text-center">
            Follow these steps to apply for our undergraduate programs (BSc IT, BSc Plain, BCom, BBI, BMS, BBA).
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <i className="fas fa-file-alt text-3xl text-green-500 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Step 1: Fill Application Form</h3>
              <p className="text-gray-700">
                Complete the online application form available on our website.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <i className="fas fa-clipboard-check text-3xl text-blue-500 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Step 2: Submit Documents</h3>
              <p className="text-gray-700">
                Upload scanned copies of required documents, including academic transcripts and ID proof.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <i className="fas fa-clipboard-list text-3xl text-purple-500 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Step 3: Merit List</h3>
              <p className="text-gray-700">
                Check the merit list on our website to see if you have been selected.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <i className="fas fa-dollar-sign text-3xl text-yellow-500 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Step 4: Pay Application Fee</h3>
              <p className="text-gray-700">
                Pay the non-refundable application fee online through our secure payment gateway.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <i className="fas fa-user-check text-3xl text-teal-500 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Step 5: Admission Confirmation</h3>
              <p className="text-gray-700">
                Confirm your admission by paying the first semester fees online.
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
  );
};

export default AdmissionProcess;
