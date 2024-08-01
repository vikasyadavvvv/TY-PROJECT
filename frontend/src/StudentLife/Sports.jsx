import React from 'react';
import { FaBasketballBall, FaFootballBall, FaRunning, FaTableTennis, FaVolleyballBall } from 'react-icons/fa';

const sports = [
  {
    name: "Basketball",
    description: "Join our basketball team to compete in local and national tournaments. Practice sessions are held every evening.",
    icon: <FaBasketballBall className="text-3xl text-orange-500" />,
    image: "https://tse1.mm.bing.net/th?id=OIP.hH-n4S2fP35siO4x_pq3LQHaEK&pid=Api&P=0&h=180"
  },
  {
    name: "Football",
    description: "Our football team welcomes players of all skill levels. Participate in regular matches and training sessions.",
    icon: <FaFootballBall className="text-3xl text-green-500" />,
    image: "https://tse3.mm.bing.net/th?id=OIP.tKMv5IHMsqR0m2pOt-30gwHaEK&pid=Api&P=0&h=180"
  },
  {
    name: "Athletics",
    description: "Take part in various track and field events. We provide training for sprinting, long-distance running, and more.",
    icon: <FaRunning className="text-3xl text-blue-500" />,
    image: "https://wallpapercave.com/wp/wp4303435.jpg"
  },
  {
    name: "Table Tennis",
    description: "Join our table tennis club to enjoy friendly matches and improve your skills. We have sessions every weekend.",
    icon: <FaTableTennis className="text-3xl text-red-500" />,
    image: "https://wallpaperset.com/w/full/3/1/f/164028.jpg"
  },
  {
    name: "Volleyball",
    description: "Our volleyball team competes in inter-college tournaments. Practice sessions are held twice a week.",
    icon: <FaVolleyballBall className="text-3xl text-yellow-500" />,
    image: "https://tse2.mm.bing.net/th?id=OIP.JDmd5jlZ-PLTx5LNtQ21AQHaEK&pid=Api&P=0&h=180"
  },
];

const Sports = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Sports</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sports.map((sport, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={sport.image} alt={`${sport.name} image`} className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="flex items-center mb-4">
                {sport.icon}
                <h2 className="text-2xl font-bold ml-4">{sport.name}</h2>
              </div>
              <p className="text-gray-600">{sport.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sports;
