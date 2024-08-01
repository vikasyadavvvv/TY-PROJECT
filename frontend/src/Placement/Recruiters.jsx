// src/components/Recruiters.js
import React from 'react';

const recruiters = [
  { name: 'TCS', industry: 'Tech', imgSrc: 'https://mma.prnewswire.com/media/1477373/TCS_Logo.jpg?p=facebook' },
  { name: 'Capital One', industry: 'Finance', imgSrc: 'https://logodix.com/logo/246500.jpg' },
  { name: 'Dabur', industry: 'Manufacturing', imgSrc: 'https://tse4.mm.bing.net/th?id=OIP.51fXpHs2LvhuwdCCNZhkIwHaGm&pid=Api&P=0&h=180' },
  { name: 'Accenture', industry: 'Consulting', imgSrc: 'https://tse4.mm.bing.net/th?id=OIP.SL3dLYvePGonrfH1B4-hxAHaDE&pid=Api&P=0&h=180' },
];

const Recruiters = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Top Recruiters</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recruiters.map((recruiter, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
            <div className="mb-4">
              <img src={recruiter.imgSrc} alt={recruiter.name} className="w-24 h-24 mx-auto object-cover rounded-full" />
            </div>
            <h2 className="text-2xl font-semibold mb-2">{recruiter.name}</h2>
            <p className="text-gray-600">{recruiter.industry}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recruiters;
