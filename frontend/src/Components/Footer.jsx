import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Feedback submitted!');
  };

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-serif">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li><a href="/admissions" className="block py-1 hover:text-gray-300">SWAYAM</a></li>
              <li><a href="/courses" className="block py-1 hover:text-gray-300">MOOC</a></li>
              <li><a href="/facilities" className="block py-1 hover:text-gray-300">ABC ID</a></li>
            </ul>
          </div>
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="text-white" />
              <a href="https://www.google.co.in/maps/place/Sandesh+College+of+Arts+Commerce+%26+Science/@19.1161459,72.9310825,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c797781ba093:0x3402b356cc8e61a5!8m2!3d19.1161459!4d72.9336574!16s%2Fg%2F1tppqf8m?entry=ttu">
              <span className="ml-2 hover:text-white">Tagore Nagar, Vikhroli (East), Mumbai <span className='font-mono'>400 083</span></span> </a>
            </div>
            <div className="flex items-center">
              <FaPhoneAlt className="text-white" />
              <span className="ml-2 hover:text-white font-mono">2574 4906 2573 1633</span>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Feedback</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div className="mb-4">
                <label htmlFor="feedback" className="block text-sm font-medium text-gray-300">Feedback</label>
                <textarea id="feedback" name="feedback" rows="3" className="mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
              </div>
              <div className="text-right">
                <button type="submit" className="bg-indigo-600 text-white py-2 px-4 rounded-md inline-block hover:bg-indigo-700">Submit</button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-sm text-slate-200">
          <div className="flex items-center justify-center text-center">
            <p>&copy; {new Date().getFullYear()} All rights reserved || Designed by <span className='text-red-600'>Vikas Yadav</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
