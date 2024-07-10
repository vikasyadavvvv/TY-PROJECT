import React, { useState } from 'react';
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";




const Header = () => {

  return (
    <>
    <div className="bg-gradient-to-r from-blue-600 to-blue-900 p-4">
        <div className='text-white text-xl font-semibold text-center items-center mt-3 mb-2 font-serif'>
          DNYAN PRASARK SHIKSHAN SANSTHA'S
        </div>

        <div className="text-white text-3xl font-bold mt-2 lg:mb-0 font-serif text-center items-cente mb-2">
              Sandesh College of Arts, Commerce and Science
              </div>

          <div className='flex items-center justify-center text-center text-white text-2xl mt-2 mb-2'>
          <FaFacebook className='mr-6 cursor-pointer' />
          <FaInstagram className='mr-6 cursor-pointer' />
          <FaSquareXTwitter className='mr-6 cursor-pointer' />
          <FaLinkedin className='mr-6 cursor-pointer' />
        </div>


      </div>
    </>


  );
};

export default Header;
