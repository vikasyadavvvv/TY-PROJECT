import React from 'react';
import { FaBook, FaLaptop, FaChalkboardTeacher, FaSearch, FaUsers } from 'react-icons/fa';

const libraryFeatures = [
  {
    name: "Books Collection",
    description: "Our library houses a vast collection of books across various disciplines, providing resources for research and study.",
    icon: <FaBook className="text-3xl text-blue-500" />,
    image: "https://c1.wallpaperflare.com/preview/563/337/199/book-library-shelf-stack.jpg"
  },
  {
    name: "Digital Resources",
    description: "Access a wide range of digital resources including e-books, online journals, and research databases.",
    icon: <FaLaptop className="text-3xl text-green-500" />,
    image: "https://thumbs.dreamstime.com/z/digital-library-online-education-concept-laptop-computer-colorful-books-d-rendering-technology-background-180214804.jpg"
  },
  {
    name: "Study Rooms",
    description: "Our library offers quiet study rooms equipped with all the necessary amenities for focused learning.",
    icon: <FaChalkboardTeacher className="text-3xl text-yellow-500" />,
    image: "https://st.hzcdn.com/simgs/98d1af3405d96e3a_4-7505/contemporary-home-office-and-library.jpg"
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
