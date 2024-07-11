import React from 'react';
import { FaBook, FaLaptop, FaChalkboardTeacher, FaSearch, FaUsers } from 'react-icons/fa';

const libraryFeatures = [
  {
    name: "Books Collection",
    description: "Our library houses a vast collection of books across various disciplines, providing resources for research and study.",
    icon: <FaBook className="text-3xl text-blue-500" />,
    image: "https://source.unsplash.com/300x200/?library,books"
  },
  {
    name: "Digital Resources",
    description: "Access a wide range of digital resources including e-books, online journals, and research databases.",
    icon: <FaLaptop className="text-3xl text-green-500" />,
    image: "https://source.unsplash.com/300x200/?library,digital"
  },
  {
    name: "Study Rooms",
    description: "Our library offers quiet study rooms equipped with all the necessary amenities for focused learning.",
    icon: <FaChalkboardTeacher className="text-3xl text-yellow-500" />,
    image: "https://source.unsplash.com/300x200/?library,study"
  },
  {
    name: "Research Assistance",
    description: "Our experienced librarians are available to assist you with your research and reference needs.",
    icon: <FaSearch className="text-3xl text-red-500" />,
    image: "https://source.unsplash.com/300x200/?library,research"
  },
  {
    name: "Community Events",
    description: "Participate in various community events and workshops organized by the library to enhance your learning experience.",
    icon: <FaUsers className="text-3xl text-purple-500" />,
    image: "https://source.unsplash.com/300x200/?library,events"
  },
];

const Library = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Library</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {libraryFeatures.map((feature, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={feature.image} alt={`${feature.name} image`} className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="flex items-center mb-4">
                {feature.icon}
                <h2 className="text-2xl font-bold ml-4">{feature.name}</h2>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;
