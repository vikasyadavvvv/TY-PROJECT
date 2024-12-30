import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

// Add more events and festival days
const events = {
    '2024-01-26': { title: 'Republic Day', description: 'Celebration of Republic Day with flag hoisting and cultural programs.' },
    '2024-02-10': { title: 'Maha Shivaratri', description: 'Celebration of Maha Shivaratri with special prayers and rituals.' },
    '2024-03-08': { title: 'Holi', description: 'Festival of colors with vibrant celebrations and activities.' },
    '2024-04-10': { title: 'Ram Navami', description: 'Celebration of the birth of Lord Rama with special events and prayers.' },
    '2024-05-01': { title: 'Labour Day', description: 'Recognition of workers’ contributions with various activities.' },
    '2024-06-17': { title: 'Rath Yatra', description: 'Celebration of the Rath Yatra festival with processions and events.' },
    '2024-07-19': { title: 'Eid-ul-Adha', description: 'Celebration of Eid-ul-Adha with special prayers and community events.' },
    '2024-08-15': { title: 'Independence Day', description: 'Celebration of Independence Day with flag hoisting and cultural programs.' },
    '2024-09-08': { title: 'Ganesh Chaturthi', description: 'Celebration of Ganesh Chaturthi with processions and decorations.' },
    '2024-10-02': { title: 'Gandhi Jayanti', description: 'Observance of Gandhi Jayanti with special events and reflections on Mahatma Gandhi’s life.' },
    '2024-10-05': { title: 'Mid-Semester Exams Start', description: 'Start of mid-semester exams.' },
    '2024-10-31': { title: 'Diwali', description: 'Festival of lights with special events, fireworks, and celebrations.' },
    '2024-11-01': { title: 'Annual Day', description: 'College Annual Day celebrations.' },
    '2024-11-15': { title: 'Guru Nanak Jayanti', description: 'Celebration of Guru Nanak Jayanti with prayers and community events.' },
    '2024-12-25': { title: 'Christmas', description: 'Christmas celebration with festive activities and events.' },
    '2024-12-31': { title: 'New Year’s Eve', description: 'Celebration of New Year’s Eve with various festivities and activities.' },
    '2024-12-15': { title: 'End of Semester Exams', description: 'End of semester exams.' },
  };
      
const AcademicCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleDateChange = (newDate) => {
    setDate(newDate);
    const formattedDate = newDate.toISOString().split('T')[0];
    setSelectedEvent(events[formattedDate] || null);
  };

  const tileClassName = ({ date, view }) => {
    const formattedDate = date.toISOString().split('T')[0];
    return events[formattedDate] ? 'bg-blue-200 text-blue-800 font-bold rounded-full' : '';
  };

  return (
    <div className="relative max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Academic Calendar</h2>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 md:pr-4">
          <Calendar
            onChange={handleDateChange}
            value={date}
            tileClassName={tileClassName}
            className="border border-gray-300 rounded-lg shadow-md"
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-4 mt-6 md:mt-0">
          {selectedEvent ? (
            <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-blue-600 mb-2">{selectedEvent.title}</h3>
              <p className="text-gray-700">{selectedEvent.description}</p>
            </div>
          ) : (
            <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-md">
              <p className="text-gray-700">No events on this date.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AcademicCalendar;
