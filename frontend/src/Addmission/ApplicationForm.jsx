// src/ApplicationForm.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faHome, faIdCard, faFileAlt, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const ApplicationForm = () => {
  return (
    <div className="container mx-auto my-8 p-4 flex justify-center">
      <div className="max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">Application Form</h1>
        <form className="space-y-4">
          <div className="flex items-center border-b border-gray-300 py-2">
            <FontAwesomeIcon icon={faUser} className="text-gray-500 mr-3" />
            <input className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Full Name" />
          </div>
          <div className="flex items-center border-b border-gray-300 py-2">
            <FontAwesomeIcon icon={faEnvelope} className="text-gray-500 mr-3" />
            <input className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none" type="email" placeholder="Email" />
          </div>
          <div className="flex items-center border-b border-gray-300 py-2">
            <FontAwesomeIcon icon={faPhone} className="text-gray-500 mr-3" />
            <input className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none" type="tel" placeholder="Phone Number" />
          </div>
          <div className="flex items-center border-b border-gray-300 py-2">
            <FontAwesomeIcon icon={faHome} className="text-gray-500 mr-3" />
            <input className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Address" />
          </div>
          <div className="flex items-center border-b border-gray-300 py-2">
            <FontAwesomeIcon icon={faIdCard} className="text-gray-500 mr-3" />
            <input className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Aadhar Card Number" />
          </div>
          <div className="flex items-center border-b border-gray-300 py-2">
            <FontAwesomeIcon icon={faGraduationCap} className="text-gray-500 mr-3" />
            <select className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none">
              <option>Select Course</option>
              <option>B.Sc IT</option>
              <option>B.Sc Plain</option>
              <option>B.Com</option>
              <option>BBA</option>
              <option>BBI</option>
              <option>BMS</option>
            </select>
          </div>
          <div className="flex items-center border-b border-gray-300 py-2">
            <FontAwesomeIcon icon={faFileAlt} className="text-gray-500 mr-3" /> 10 <sup>th</sup>  Mrksheet
            <input className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none" type="file" placeholder="Upload 10th Marksheet" />
          </div>
          <div className="flex items-center border-b border-gray-300 py-2">
            <FontAwesomeIcon icon={faFileAlt} className="text-gray-500 mr-3" /> 12 <sup>th</sup>  Marksheet
            <input className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none" type="file" placeholder="Upload 12th Marksheet" />
          </div>
          <div className="flex items-center border-b border-gray-300 py-2">
            <FontAwesomeIcon icon={faFileAlt} className="text-gray-500 mr-3" /> Leaving Certificte
            <input className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none" type="file" placeholder="Upload Leaving Certificate (LC)" />
          </div>
          <div className="text-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;
