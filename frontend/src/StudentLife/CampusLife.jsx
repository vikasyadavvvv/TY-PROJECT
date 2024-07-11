import React from 'react';
import { FaBuilding, FaTree, FaUtensils, FaTheaterMasks, FaBiking } from 'react-icons/fa';

const campusFeatures = [
  {
    name: "Modern Facilities",
    description: "Our campus is equipped with state-of-the-art facilities including modern classrooms, labs, and sports complexes.",
    icon: <FaBuilding className="text-3xl text-blue-500" />,
    image: "https://source.unsplash.com/300x200/?modern,facilities"
  },
  {
    name: "Green Spaces",
    description: "Enjoy our beautiful green spaces and gardens, perfect for relaxation and outdoor activities.",
    icon: <FaTree className="text-3xl text-green-500" />,
    image: "https://source.unsplash.com/300x200/?campus,green"
  },
  {
    name: "Dining Options",
    description: "Our campus offers a variety of dining options to suit all tastes, from cafeterias to fine dining.",
    icon: <FaUtensils className="text-3xl text-yellow-500" />,
    image: "https://source.unsplash.com/300x200/?campus,dining"
  },
  {
    name: "Cultural Activities",
    description: "Participate in a wide range of cultural activities including theater, music, and dance performances.",
    icon: <FaTheaterMasks className="text-3xl text-red-500" />,
    image: "https://source.unsplash.com/300x200/?campus,culture"
  },
  {
    name: "Recreational Facilities",
    description: "Take advantage of our recreational facilities including biking trails, fitness centers, and sports courts.",
    icon: <FaBiking className="text-3xl text-purple-500" />,
    image: "https://source.unsplash.com/300x200/?campus,recreation"
  },
];

const CampusLife = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Campus Life</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {campusFeatures.map((feature, index) => (
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

export default CampusLife;
