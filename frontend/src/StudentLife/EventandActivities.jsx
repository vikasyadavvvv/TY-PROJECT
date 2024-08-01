import React from 'react';
import { FaCalendarAlt, FaRunning, FaChalkboardTeacher, FaPaintBrush, FaMusic } from 'react-icons/fa';

const events = [
  {
    name: "Science Fair",
    description: "Join us for an exciting Science Fair showcasing innovative projects and experiments by our students.",
    date: "August 15, 2024",
    icon: <FaCalendarAlt className="text-3xl text-blue-500" />,
    image: "https://i.pinimg.com/originals/6d/c4/c4/6dc4c4a732b38c2d9f3e338283326970.jpg"
  },
  {
    name: "Sports Day",
    description: "A day full of fun and competitive sports activities for all students.",
    date: "September 10, 2024",
    icon: <FaRunning className="text-3xl text-green-500" />,
    image: "https://tse3.mm.bing.net/th?id=OIP.if2z3t9JBIpvWVZDYAKcFwHaCv&pid=Api&P=0&h=180"
  },
  {
    name: "Guest Lecture Series",
    description: "Attend lectures by renowned experts in various fields. Expand your knowledge and gain insights.",
    date: "October 5, 2024",
    icon: <FaChalkboardTeacher className="text-3xl text-red-500" />,
    image: "https://i.ytimg.com/vi/D1i-EYMdw5M/maxresdefault.jpg"
  },
  {
    name: "Art Exhibition",
    description: "Explore the creative artworks by our talented students at the annual Art Exhibition.",
    date: "November 12, 2024",
    icon: <FaPaintBrush className="text-3xl text-purple-500" />,
    image: "https://tse2.mm.bing.net/th?id=OIP.sMslNEOZUSPDkcpV6AeudwHaE8&pid=Api&P=0&h=180"
  },
  {
    name: "Music Concert",
    description: "Enjoy an evening of melodious performances by our college band and choir.",
    date: "December 20, 2024",
    icon: <FaMusic className="text-3xl text-yellow-500" />,
    image: "https://tse4.mm.bing.net/th?id=OIP.p88z2Ua4LUemmMAFYBPoxQHaE8&pid=Api&P=0&h=180"
  },
];

const EventsAndActivities = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Events and Activities</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={event.image} alt={`${event.name} image`} className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="flex items-center mb-4">
                {event.icon}
                <h2 className="text-2xl font-bold ml-4">{event.name}</h2>
              </div>
              <p className="text-gray-600">{event.description}</p>
              <p className="text-gray-500 mt-2">Date: {event.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsAndActivities;
