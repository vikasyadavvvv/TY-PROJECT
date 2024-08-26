import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-blue-700 to-blue-900 p-6 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        {/* Logo and College Details Container */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center mb-4 md:mb-0">
            <img
              src="https://sandeshcollege.in/images/sandeshcollegelogo.png"
              alt="College Logo"
              width={150}
              height={100}
              className="object-contain transform transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* College Name and Details */}
          <div className="text-white text-center md:text-left flex-1">
            <div className="text-xl font-bold mb-2 font-['Roboto']  tracking-wider">
              DNYAN PRASARK SHIKSHAN SANSTHA'S
            </div>
            <div className="text-2xl md:text-4xl font-bold mb-4 font-['Roboto'] tracking-wide">
              Sandesh College of Arts, Commerce and Science
            </div>
            <div className="flex items-center justify-center md:justify-start text-white text-3xl space-x-4 mt-4">
              <FaFacebook className="hover:text-blue-400 transition-colors duration-300 cursor-pointer" />
              <FaInstagram className="hover:text-pink-400 transition-colors duration-300 cursor-pointer" />
              <FaSquareXTwitter className="hover:text-blue-300 transition-colors duration-300 cursor-pointer" />
              <FaLinkedin className="hover:text-blue-600 transition-colors duration-300 cursor-pointer" />
              <IoLogoYoutube className="hover:text-red-600 transition-colors duration-300 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

