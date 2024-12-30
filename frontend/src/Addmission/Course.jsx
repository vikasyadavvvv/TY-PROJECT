import React from 'react';

const Course = () => {
  const courses = [
    {
      title: 'BSc IT',
      color: 'blue',
      description: 'The Bachelor of Science in Information Technology (BSc IT) is an advanced program focusing on various aspects of computer science and technology. Students will explore programming languages, data structures, algorithms, software engineering, and web development. The curriculum includes hands-on training in database management, networking, and cybersecurity, providing students with practical skills for real-world applications. This program prepares graduates for a variety of IT roles such as software developers, systems analysts, and network administrators.'
    },
    {
      title: 'BSc Plain',
      color: 'green',
      description: 'The Bachelor of Science in Plain Science provides a strong foundation in the fundamental disciplines of Physics, Chemistry, Mathematics, and Biology. This program is designed for students interested in a broad-based scientific education, offering in-depth knowledge and practical experience in laboratory techniques and scientific research. The BSc Plain program prepares graduates for advanced studies in specialized scientific fields, research careers, or positions in science education. The comprehensive curriculum fosters analytical thinking, problem-solving skills, and a thorough understanding of the natural world.'
    },
    {
      title: 'BCom',
      color: 'yellow',
      description: 'The Bachelor of Commerce (BCom) program offers a comprehensive understanding of the principles of commerce, finance, and business management. Students will study subjects such as financial accounting, business statistics, economics, and business law. The curriculum is designed to equip students with skills in financial analysis, budgeting, and strategic decision-making. Practical experience is gained through case studies, internships, and project work. This program is ideal for those pursuing careers in accounting, business administration, financial management, and consulting.'
    },
    {
      title: 'BBI',
      color: 'red',
      description: 'The Bachelor of Banking and Insurance (BBI) program focuses on the intricate workings of the banking and insurance industries. The curriculum covers critical areas such as financial services, insurance operations, risk management, and investment strategies. Students will learn about regulatory frameworks, financial instruments, and customer service in banking and insurance. This program prepares graduates for specialized roles such as risk analysts, insurance underwriters, and financial consultants. Emphasis is placed on developing analytical skills, financial acumen, and a deep understanding of the financial sector’s dynamics.'
    },
    {
      title: 'BBA',
      color: 'teal',
      description: 'The Bachelor of Business Administration (BBA) program is designed to prepare students for leadership roles in the business world. The curriculum includes courses in management principles, marketing, entrepreneurship, finance, and strategic planning. Students will develop skills in business operations, project management, and organizational behavior. The program emphasizes practical learning through internships, case studies, and business simulations. Graduates are equipped to take on roles such as business managers, entrepreneurs, and consultants. The BBA program also provides a strong foundation for pursuing advanced degrees in business administration or related fields.'
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <h3 className="text-3xl font-extrabold text-center text-gray-900 mb-12">
        Programs We Offer
      </h3>
      <div className="max-w-4xl mx-auto px-4">
        <table className="w-full bg-white shadow-lg rounded-lg border border-gray-300">
          <thead>
            <tr className="bg-gray-100 text-gray-600">
              <th className="py-3 px-4 text-left">Program</th>
              <th className="py-3 px-4 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className={`py-6 px-6 text-2xl text-${course.color}-600 font-semibold whitespace-nowrap overflow-hidden text-ellipsis`}>
                  {course.title}
                </td>
                <td className="py-4 px-4 text-gray-700">
                  {course.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Course;
