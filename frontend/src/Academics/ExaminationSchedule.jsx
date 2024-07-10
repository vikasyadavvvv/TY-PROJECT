// src/ExaminationSchedulePage.js
import React from 'react';

const examScheduleData = [
  {
    course: 'B.Sc Plain',
    exams: [
      { date: '2024-08-05', time: '10:00 AM', subject: 'Mathematics I' },
      { date: '2024-08-07', time: '02:00 PM', subject: 'Physics I' },
      { date: '2024-08-10', time: '09:30 AM', subject: 'Chemistry I' },
      { date: '2024-08-12', time: '11:00 AM', subject: 'Biology I' },
      { date: '2024-08-15', time: '10:30 AM', subject: 'English Communication Skills' },
    ],
  },
  {
    course: 'B.Sc IT',
    exams: [
      { date: '2024-08-06', time: '09:00 AM', subject: 'Introduction to Programming' },
      { date: '2024-08-08', time: '01:00 PM', subject: 'Digital Electronics' },
      { date: '2024-08-11', time: '11:30 AM', subject: 'Mathematics I' },
      { date: '2024-08-13', time: '10:00 AM', subject: 'Communication Skills' },
      { date: '2024-08-16', time: '02:30 PM', subject: 'Fundamentals of Information Technology' },
    ],
  },
  {
    course: 'B.Com',
    exams: [
      { date: '2024-08-07', time: '10:00 AM', subject: 'Financial Accounting I' },
      { date: '2024-08-09', time: '02:00 PM', subject: 'Business Economics I' },
      { date: '2024-08-12', time: '09:30 AM', subject: 'Business Communication I' },
      { date: '2024-08-14', time: '11:00 AM', subject: 'Principles of Management' },
      { date: '2024-08-17', time: '10:30 AM', subject: 'Business Mathematics' },
    ],
  },
  {
    course: 'BBA',
    exams: [
      { date: '2024-08-08', time: '11:00 AM', subject: 'Principles of Management' },
      { date: '2024-08-10', time: '03:00 PM', subject: 'Business Communication Skills' },
      { date: '2024-08-13', time: '09:30 AM', subject: 'Business Mathematics' },
      { date: '2024-08-15', time: '10:00 AM', subject: 'Financial Accounting' },
      { date: '2024-08-18', time: '02:30 PM', subject: 'Business Economics' },
    ],
  },
  {
    course: 'BBI',
    exams: [
      { date: '2024-08-09', time: '10:00 AM', subject: 'Principles of Management' },
      { date: '2024-08-11', time: '02:00 PM', subject: 'Business Communication' },
      { date: '2024-08-14', time: '09:30 AM', subject: 'Financial Accounting' },
      { date: '2024-08-16', time: '11:00 AM', subject: 'Business Economics' },
      { date: '2024-08-19', time: '10:30 AM', subject: 'Banking Basics' },
    ],
  },
  {
    course: 'BMS',
    exams: [
      { date: '2024-08-10', time: '11:00 AM', subject: 'Business Environment' },
      { date: '2024-08-12', time: '03:00 PM', subject: 'Principles of Management' },
      { date: '2024-08-15', time: '09:30 AM', subject: 'Managerial Economics' },
      { date: '2024-08-17', time: '10:00 AM', subject: 'Business Mathematics' },
      { date: '2024-08-20', time: '02:30 PM', subject: 'Business Communication' },
    ],
  },
  // Add more courses and their exams as needed
];

const ExaminationSchedulePage = () => {
  // Calculate the current date and four weeks later
  const currentDate = new Date();
  const fourWeeksLater = new Date();
  fourWeeksLater.setDate(currentDate.getDate() + 28); // Four weeks later

  // Filter exams that are within the next four weeks
  const upcomingExams = examScheduleData.map(course => ({
    ...course,
    exams: course.exams.filter(exam => {
      const examDate = new Date(exam.date);
      return examDate >= currentDate && examDate <= fourWeeksLater;
    }),
  }));

  return (
    <div className="container mx-auto my-8 p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Examination Schedule</h1>
      <div className="space-y-8">
        {upcomingExams.map((course, index) => (
          <div key={index} className="p-6 bg-white rounded-xl shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold mb-4">{course.course}</h2>
            {course.exams.length > 0 ? (
              <ul className="space-y-4">
                {course.exams.map((exam, examIndex) => (
                  <li key={examIndex} className="flex items-center justify-between">
                    <div>
                      <div className="text-lg font-semibold">{exam.subject}</div>
                      <div className="text-gray-600">{exam.date}, {exam.time}</div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600 italic">No upcoming exams within the next four weeks.</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExaminationSchedulePage;
