import React from 'react';

const newsArticles = [
  {
    title: 'Admissions Open for 2024-2025',
    date: '2024-07-01',
    content: 'Admissions are now open for the academic year 2024-2025. Interested candidates can apply online through the college website. The last date for submission of applications is August 15, 2024.',
  },
  {
    title: 'Semester Results Announced',
    date: '2024-06-28',
    content: 'The results for the Spring Semester 2024 have been announced. Students can check their results on the college website by logging into their accounts. Congratulations to all the students who passed!',
  },
  {
    title: 'Guest Lecture by Dr. Jane Smith',
    date: '2024-06-25',
    content: 'We are excited to announce a guest lecture by Dr. Jane Smith on "The Future of Artificial Intelligence" on July 10, 2024. All students and faculty members are invited to attend the lecture in the main auditorium.',
  },
  {
    title: 'Sports Meet 2024',
    date: '2024-06-20',
    content: 'The annual Sports Meet 2024 will be held from August 5 to August 7, 2024. Students are encouraged to participate in various sports events. Registration forms are available at the sports office.',
  },
  {
    title: 'New Library Books Available',
    date: '2024-06-15',
    content: 'The college library has added new books to its collection, including the latest editions in science, literature, and technology. Students and faculty members are welcome to explore the new arrivals.',
  },
  {
    title: 'Workshop on Data Science',
    date: '2024-06-10',
    content: 'Join us for an intensive workshop on Data Science and Machine Learning, conducted by industry experts, on July 15-16, 2024. Register now to reserve your spot and enhance your skills in this growing field.',
  },
];

const NewsSection = () => {
  return (
    <div className="container mx-auto p-6 ">
      <div className="bg-white rounded-lg shadow-lg p-4">
        <span className='text-2xl font-semibold font-serif border-red-500 bg-red-600 text-white'>Latest News</span>
        <marquee behavior="scroll" className="font-serif text-lg" direction="left" scrollamount="5">
          {newsArticles.map((article, index) => (
            <span key={index} className="mx-4">
              <strong>{article.title}:</strong> {article.content} <em>({article.date})</em>
            </span>
          ))}
        </marquee>
      </div>
    </div>
  );
};

export default NewsSection;
