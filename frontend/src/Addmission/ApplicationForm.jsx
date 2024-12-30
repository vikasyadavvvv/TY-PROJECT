import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faFileAlt } from '@fortawesome/free-solid-svg-icons';

const AdmissionEnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
    mobileNumber: '',
    email: ''
  });
  const [files, setFiles] = useState({
    photo: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFiles(prevFiles => ({
      ...prevFiles,
      [name]: files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    console.log(files);
  };

  return (
    <div className="container mx-auto w-4/4 my-8 p-4 flex justify-center">
      <div className="max-w-lg w-4/5 bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-800">Admission Enquiry Form</h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="relative">
            <FontAwesomeIcon icon={faUser} className="absolute text-gray-500 left-3 top-3" />
            <input 
              name="name" 
              className="pl-10 pr-4 py-3 rounded-lg w-full border border-gray-300 focus:border-blue-500 focus:ring-blue-500 focus:outline-none" 
              type="text" 
              placeholder="Name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="relative">
            <FontAwesomeIcon icon={faEnvelope} className="absolute text-gray-500 left-3 top-3" />
            <input 
              name="email" 
              className="pl-10 pr-4 py-3 rounded-lg w-full border border-gray-300 focus:border-blue-500 focus:ring-blue-500 focus:outline-none" 
              type="email" 
              placeholder="Email ID" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="relative">
            <FontAwesomeIcon icon={faPhone} className="absolute text-gray-500 left-3 top-3" />
            <input 
              name="mobileNumber" 
              className="pl-10 pr-4 py-3 rounded-lg w-full border border-gray-300 focus:border-blue-500 focus:ring-blue-500 focus:outline-none" 
              type="tel" 
              placeholder="Mobile Number" 
              value={formData.mobileNumber} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="relative">
            <FontAwesomeIcon icon={faFileAlt} className="absolute text-gray-500 left-3 top-3" />
            <textarea 
              name="message" 
              className="pl-10 pr-4 py-3 rounded-lg w-full border border-gray-300 focus:border-blue-500 focus:ring-blue-500 focus:outline-none" 
              placeholder="Message" 
              value={formData.message} 
              onChange={handleChange} 
              rows="4"
              required 
            />
          </div>
          <div className="text-center">
            <button 
              className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 focus:outline-none transition duration-150 ease-in-out" 
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdmissionEnquiryForm;

