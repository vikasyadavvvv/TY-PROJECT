import React from 'react';
import { FaFlask, FaMusic, FaTheaterMasks, FaComments, FaPaintBrush } from 'react-icons/fa';

const clubs = [
  {
    name: "Science Club",
    description: "A place for science enthusiasts to explore and experiment with various scientific concepts and ideas. Join us for fun experiments and discussions!",
    icon: <FaFlask className="text-3xl text-blue-500" />,
    image: "http://3.bp.blogspot.com/-xcmroYwrDBw/VLyKyfHEMaI/AAAAAAAARo0/nlqxT6hvijw/s1600/02-09%2BScience%2BClub.jpg"
  },
  {
    name: "Music Society",
    description: "Bringing together music lovers and performers. Whether you're into classical, rock, or pop, there's a place for you in our Music Society!",
    icon: <FaMusic className="text-3xl text-yellow-500" />,
    image: "https://www.savethemusic.org/wp-content/uploads/2021/11/STM_START_2011_0291-1080x675.jpg"
  },
  {
    name: "Drama Club",
    description: "For those passionate about theater and acting. Join us to participate in plays, improvisations, and theater workshops!",
    icon: <FaTheaterMasks className="text-3xl text-red-500" />,
    image: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/7e002e140fb9b459f137b846beca03170ecccda40965a2d9fed492c7d84921e3._RI_V_TTW_.jpg"
  },
  {
    name: "Debate Club",
    description: "Hone your public speaking and argumentative skills in our Debate Club. Engage in exciting debates and discussions on various topics.",
    icon: <FaComments className="text-3xl text-green-500" />,
    image: "https://miro.medium.com/v2/resize:fit:1000/1*TtD59AqzNhx08trgrKz-Ug.jpeg"
  },
  {
    name: "Art Society",
    description: "A community for artists to share their work, learn new techniques, and collaborate on projects. All forms of art are welcome!",
    icon: <FaPaintBrush className="text-3xl text-purple-500" />,
    image: "https://tse2.mm.bing.net/th?id=OIP.wybOCkRTwrkzEIoTepp9-wHaE7&pid=Api&P=0&h=180htt://static1.squarespace.com/static/569402e7a128e6cbdd26c751/t/5c689bc11905f44fe478ff5d/1550359491236/Arts-in-Society.jpg?format=1500w"
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
