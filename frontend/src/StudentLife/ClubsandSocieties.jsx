import React from 'react';
import { FaFlask, FaMusic, FaTheaterMasks, FaComments, FaPaintBrush } from 'react-icons/fa';

const clubs = [
  {
    name: "Science Club",
    description: "A place for science enthusiasts to explore and experiment with various scientific concepts and ideas. Join us for fun experiments and discussions!",
    icon: <FaFlask className="text-3xl text-blue-500" />,
    image: "https://source.unsplash.com/300x200/?science,lab"
  },
  {
    name: "Music Society",
    description: "Bringing together music lovers and performers. Whether you're into classical, rock, or pop, there's a place for you in our Music Society!",
    icon: <FaMusic className="text-3xl text-yellow-500" />,
    image: "https://source.unsplash.com/300x200/?music,concert"
  },
  {
    name: "Drama Club",
    description: "For those passionate about theater and acting. Join us to participate in plays, improvisations, and theater workshops!",
    icon: <FaTheaterMasks className="text-3xl text-red-500" />,
    image: "https://source.unsplash.com/300x200/?drama,theater"
  },
  {
    name: "Debate Club",
    description: "Hone your public speaking and argumentative skills in our Debate Club. Engage in exciting debates and discussions on various topics.",
    icon: <FaComments className="text-3xl text-green-500" />,
    image: "https://source.unsplash.com/300x200/?debate,discussion"
  },
  {
    name: "Art Society",
    description: "A community for artists to share their work, learn new techniques, and collaborate on projects. All forms of art are welcome!",
    icon: <FaPaintBrush className="text-3xl text-purple-500" />,
    image: "https://source.unsplash.com/300x200/?art,painting"
  },
];

const ClubsAndSocieties = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Clubs and Societies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {clubs.map((club, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={club.image} alt={`${club.name} image`} className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="flex items-center mb-4">
                {club.icon}
                <h2 className="text-2xl font-bold ml-4">{club.name}</h2>
              </div>
              <p className="text-gray-600">{club.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClubsAndSocieties;
