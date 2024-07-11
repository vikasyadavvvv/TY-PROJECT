import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaClipboardList } from 'react-icons/fa';

const ConferencesAndWorkshops = () => {
  const upcomingEvents = [
    {
      title: "International Conference on Biotechnology",
      date: "August 20, 2024",
      location: "Auditorium A",
      image: "https://e1.pxfuel.com/desktop-wallpaper/830/196/desktop-wallpaper-biotechnology.jpg",
    },
    {
      title: "Workshop on Nanotechnology",
      date: "September 15, 2024",
      location: "Lab 3",
      image: "https://i.ytimg.com/vi/uUDWK4MGcr0/maxresdefault.jpg",
    },
    {
      title: "Environmental Science Seminar",
      date: "October 10, 2024",
      location: "Seminar Hall",
      image: "https://www.learnnow.org.uk/wp-content/uploads/2022/06/A-Level-Environmental-Science-AQA-scaled.jpg",
    },
  ];

  const pastEvents = [
    {
      title: "Cybersecurity Conference",
      date: "March 12, 2024",
      location: "Conference Room B",
      image: "https://hackersonlineclub.com/wp-content/uploads/2016/11/Cyber-Security-Conference.png",
    },
    {
      title: "AI and Machine Learning Workshop",
      date: "April 22, 2024",
      location: "Lab 1",
      image: "https://www.rrce.org/blog/wp-content/uploads/2022/11/Artifical-Intelligence.-Machine-Learning-at-RRCE.png",
    },
    {
      title: "Renewable Energy Summit",
      date: "May 15, 2024",
      location: "Main Hall",
      image: "https://www.cmu.edu/energy/news-multimedia/2018/images/energy-week-900x600-min.jpg",
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Conferences & Workshops</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="border rounded-lg shadow-md overflow-hidden">
              <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold">{event.title}</h3>
                <p className="flex items-center mt-2"><FaCalendarAlt className="mr-2 text-blue-500" /> {event.date}</p>
                <p className="flex items-center mt-1"><FaMapMarkerAlt className="mr-2 text-red-500" /> {event.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Past Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pastEvents.map((event, index) => (
            <div key={index} className="border rounded-lg shadow-md overflow-hidden">
              <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold">{event.title}</h3>
                <p className="flex items-center mt-2"><FaCalendarAlt className="mr-2 text-blue-500" /> {event.date}</p>
                <p className="flex items-center mt-1"><FaMapMarkerAlt className="mr-2 text-red-500" /> {event.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4">Registration Information</h2>
        <div className="border rounded-lg shadow-md p-4">
          <p className="flex items-center mt-2"><FaClipboardList className="mr-2 text-green-500" /> To register for upcoming events, please visit our registration page or contact the event coordinator.</p>
        </div>
      </section>
    </div>
  );
};

export default ConferencesAndWorkshops;
