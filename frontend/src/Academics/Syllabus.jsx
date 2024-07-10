// src/SyllabusPage.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faDownload } from '@fortawesome/free-solid-svg-icons';

const syllabusData = [
  {
    course: 'B.Sc Plain',
    years: [
      {
        year: 'First Year',
        subjects: [
          { name: 'Mathematics I', syllabusUrl: '/syllabus/BSc_Plain_Mathematics_I.pdf' },
          { name: 'Physics I', syllabusUrl: '/syllabus/BSc_Plain_Physics_I.pdf' },
          { name: 'Chemistry I', syllabusUrl: '/syllabus/BSc_Plain_Chemistry_I.pdf' },
          { name: 'Biology I', syllabusUrl: '/syllabus/BSc_Plain_Biology_I.pdf' },
          { name: 'English Communication Skills', syllabusUrl: '/syllabus/BSc_Plain_English.pdf' },
        ]
      },
      {
        year: 'Second Year',
        subjects: [
          { name: 'Mathematics II', syllabusUrl: '/syllabus/BSc_Plain_Mathematics_II.pdf' },
          { name: 'Physics II', syllabusUrl: '/syllabus/BSc_Plain_Physics_II.pdf' },
          { name: 'Chemistry II', syllabusUrl: '/syllabus/BSc_Plain_Chemistry_II.pdf' },
          { name: 'Environmental Studies', syllabusUrl: '/syllabus/BSc_Plain_Environmental_Studies.pdf' },
          { name: 'Applied Statistics', syllabusUrl: '/syllabus/BSc_Plain_Applied_Statistics.pdf' },
        ]
      },
      {
        year: 'Third Year',
        subjects: [
          { name: 'Electronics', syllabusUrl: '/syllabus/BSc_Plain_Electronics.pdf' },
          { name: 'Computer Science', syllabusUrl: '/syllabus/BSc_Plain_Computer_Science.pdf' },
          { name: 'Applied Mathematics', syllabusUrl: '/syllabus/BSc_Plain_Applied_Mathematics.pdf' },
          { name: 'Research Methodology', syllabusUrl: '/syllabus/BSc_Plain_Research_Methodology.pdf' },
          { name: 'Project Work', syllabusUrl: '/syllabus/BSc_Plain_Project_Work.pdf' },
        ]
      }
    ]
  },
  {
    course: 'B.Sc IT',
    years: [
      {
        year: 'First Year',
        subjects: [
          { name: 'Introduction to Programming', syllabusUrl: '/syllabus/BSc_IT_Programming.pdf' },
          { name: 'Digital Electronics', syllabusUrl: '/syllabus/BSc_IT_Digital_Electronics.pdf' },
          { name: 'Mathematics I', syllabusUrl: '/syllabus/BSc_IT_Mathematics_I.pdf' },
          { name: 'Communication Skills', syllabusUrl: '/syllabus/BSc_IT_Communication_Skills.pdf' },
          { name: 'Fundamentals of IT', syllabusUrl: '/syllabus/BSc_IT_Fundamentals_of_IT.pdf' },
        ]
      },
      {
        year: 'Second Year',
        subjects: [
          { name: 'Data Structures', syllabusUrl: '/syllabus/BSc_IT_Data_Structures.pdf' },
          { name: 'DB Management System', syllabusUrl: '/syllabus/BSc_IT_DB_Management_System.pdf' },
          { name: 'OOP', syllabusUrl: '/syllabus/BSc_IT_OOP.pdf' },
          { name: 'Web Technologies', syllabusUrl: '/syllabus/BSc_IT_Web_Technologies.pdf' },
          { name: 'Software Engineering', syllabusUrl: '/syllabus/BSc_IT_Software_Engineering.pdf' },
        ]
      },
      {
        year: 'Third Year',
        subjects: [
          { name: 'Network Security', syllabusUrl: '/syllabus/BSc_IT_Network_Security.pdf' },
          { name: 'Mobile App Development', syllabusUrl: '/syllabus/BSc_IT_Mobile_App_Development.pdf' },
          { name: 'Cloud Computing', syllabusUrl: '/syllabus/BSc_IT_Cloud_Computing.pdf' },
          { name: 'IoT', syllabusUrl: '/syllabus/BSc_IT_IoT.pdf' },
          { name: 'Project Management', syllabusUrl: '/syllabus/BSc_IT_Project_Management.pdf' },
        ]
      }
    ]
  },
  {
    course: 'B.Com',
    years: [
      {
        year: 'First Year',
        subjects: [
          { name: 'Financial Accounting I', syllabusUrl: '/syllabus/BCom_Financial_Accounting_I.pdf' },
          { name: 'Business Economics I', syllabusUrl: '/syllabus/BCom_Business_Economics_I.pdf' },
          { name: 'Business Communication I', syllabusUrl: '/syllabus/BCom_Business_Communication_I.pdf' },
          { name: 'Principles of Management', syllabusUrl: '/syllabus/BCom_Principles_of_Management.pdf' },
          { name: 'Business Mathematics', syllabusUrl: '/syllabus/BCom_Business_Mathematics.pdf' },
        ]
      },
      {
        year: 'Second Year',
        subjects: [
          { name: 'Financial Accounting II', syllabusUrl: '/syllabus/BCom_Financial_Accounting_II.pdf' },
          { name: 'Cost Accounting', syllabusUrl: '/syllabus/BCom_Cost_Accounting.pdf' },
          { name: 'Business Law', syllabusUrl: '/syllabus/BCom_Business_Law.pdf' },
          { name: 'Corporate Finance', syllabusUrl: '/syllabus/BCom_Corporate_Finance.pdf' },
          { name: 'Taxation', syllabusUrl: '/syllabus/BCom_Taxation.pdf' },
        ]
      },
      {
        year: 'Third Year',
        subjects: [
          { name: 'Auditing', syllabusUrl: '/syllabus/BCom_Auditing.pdf' },
          { name: 'Entrepreneurship Development', syllabusUrl: '/syllabus/BCom_Entrepreneurship_Development.pdf' },
          { name: 'International Business', syllabusUrl: '/syllabus/BCom_International_Business.pdf' },
          { name: 'Banking and Finance', syllabusUrl: '/syllabus/BCom_Banking_and_Finance.pdf' },
          { name: 'E-Commerce', syllabusUrl: '/syllabus/BCom_E-Commerce.pdf' },
        ]
      }
    ]
  },
  {
    course: 'BBA',
    years: [
      {
        year: 'First Year',
        subjects: [
          { name: 'Principles of Management', syllabusUrl: '/syllabus/BBA_Principles_of_Management.pdf' },
          { name: 'Business Communication Skills', syllabusUrl: '/syllabus/BBA_Business_Communication_Skills.pdf' },
          { name: 'Business Mathematics', syllabusUrl: '/syllabus/BBA_Business_Mathematics.pdf' },
          { name: 'Financial Accounting', syllabusUrl: '/syllabus/BBA_Financial_Accounting.pdf' },
          { name: 'Business Economics', syllabusUrl: '/syllabus/BBA_Business_Economics.pdf' },
        ]
      },
      {
        year: 'Second Year',
        subjects: [
          { name: 'Human Resource Management', syllabusUrl: '/syllabus/BBA_Human_Resource_Management.pdf' },
          { name: 'Marketing Management', syllabusUrl: '/syllabus/BBA_Marketing_Management.pdf' },
          { name: 'Operations Management', syllabusUrl: '/syllabus/BBA_Operations_Management.pdf' },
          { name: 'Management Accounting', syllabusUrl: '/syllabus/BBA_Management_Accounting.pdf' },
          { name: 'Business Law', syllabusUrl: '/syllabus/BBA_Business_Law.pdf' },
        ]
      },
      {
        year: 'Third Year',
        subjects: [
          { name: 'Strategic Management', syllabusUrl: '/syllabus/BBA_Strategic_Management.pdf' },
          { name: 'Entrepreneurship Development', syllabusUrl: '/syllabus/BBA_Entrepreneurship_Development.pdf' },
          { name: 'International Business', syllabusUrl: '/syllabus/BBA_International_Business.pdf' },
          { name: 'Supply Chain Management', syllabusUrl: '/syllabus/BBA_Supply_Chain_Management.pdf' },
          { name: 'Research Methodology', syllabusUrl: '/syllabus/BBA_Research_Methodology.pdf' },
        ]
      }
    ]
  },
  {
    course: 'BBI',
    years: [
      {
        year: 'First Year',
        subjects: [
          { name: 'Principles of Management', syllabusUrl: '/syllabus/BBI_Principles_of_Management.pdf' },
          { name: 'Business Communication', syllabusUrl: '/syllabus/BBI_Business_Communication.pdf' },
          { name: 'Financial Accounting', syllabusUrl: '/syllabus/BBI_Financial_Accounting.pdf' },
          { name: 'Business Economics', syllabusUrl: '/syllabus/BBI_Business_Economics.pdf' },
          { name: 'Banking Basics', syllabusUrl: '/syllabus/BBI_Banking_Basics.pdf' },
        ]
      },
      {
        year: 'Second Year',
        subjects: [
          { name: 'Corporate Banking', syllabusUrl: '/syllabus/BBI_Corporate_Banking.pdf' },
          { name: 'Insurance Management', syllabusUrl: '/syllabus/BBI_Insurance_Management.pdf' },
          { name: 'Investment Banking', syllabusUrl: '/syllabus/BBI_Investment_Banking.pdf' },
          { name: 'Risk Management', syllabusUrl: '/syllabus/BBI_Risk_Management.pdf' },
          { name: 'Financial Markets', syllabusUrl: '/syllabus/BBI_Financial_Markets.pdf' },
        ]
      },
      {
        year: 'Third Year',
        subjects: [
          { name: 'Treasury Management', syllabusUrl: '/syllabus/BBI_Treasury_Management.pdf' },
          { name: 'International Banking', syllabusUrl: '/syllabus/BBI_International_Banking.pdf' },
          { name: 'Banking Regulations', syllabusUrl: '/syllabus/BBI_Banking_Regulations.pdf' },
          { name: 'Insurance Law and Practices', syllabusUrl: '/syllabus/BBI_Insurance_Law_Practices.pdf' },
          { name: 'Project Work', syllabusUrl: '/syllabus/BBI_Project_Work.pdf' },
        ]
      }
    ]
  },
  {
    course: 'BMS',
    years: [
      {
        year: 'First Year',
        subjects: [
          { name: 'Business Environment', syllabusUrl: '/syllabus/BMS_Business_Environment.pdf' },
          { name: 'Principles of Management', syllabusUrl: '/syllabus/BMS_Principles_of_Management.pdf' },
          { name: 'Managerial Economics', syllabusUrl: '/syllabus/BMS_Managerial_Economics.pdf' },
          { name: 'Business Mathematics', syllabusUrl: '/syllabus/BMS_Business_Mathematics.pdf' },
          { name: 'Business Communication', syllabusUrl: '/syllabus/BMS_Business_Communication.pdf' },
        ]
      },
      {
        year: 'Second Year',
        subjects: [
          { name: 'Human Resource Management', syllabusUrl: '/syllabus/BMS_Human_Resource_Management.pdf' },
          { name: 'Marketing Management', syllabusUrl: '/syllabus/BMS_Marketing_Management.pdf' },
          { name: 'Financial Management', syllabusUrl: '/syllabus/BMS_Financial_Management.pdf' },
          { name: 'Production and Operations Management', syllabusUrl: '/syllabus/BMS_Production_and_Operations_Management.pdf' },
          { name: 'Business Ethics', syllabusUrl: '/syllabus/BMS_Business_Ethics.pdf' },
        ]
      },
      {
        year: 'Third Year',
        subjects: [
          { name: 'Strategic Management', syllabusUrl: '/syllabus/BMS_Strategic_Management.pdf' },
          { name: 'International Business', syllabusUrl: '/syllabus/BMS_International_Business.pdf' },
          { name: 'Entrepreneurship Development', syllabusUrl: '/syllabus/BMS_Entrepreneurship_Development.pdf' },
          { name: 'Corporate Governance', syllabusUrl: '/syllabus/BMS_Corporate_Governance.pdf' },
          { name: 'Project Work', syllabusUrl: '/syllabus/BMS_Project_Work.pdf' },
        ]
      }
    ]
  }
];

const SyllabusPage = () => {
  return (
    <div className="container mx-auto my-8 p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Course Syllabus</h1>
      <div className="space-y-8">
        {syllabusData.map((course, index) => (
          <div key={index} className="p-6 bg-white rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">{course.course}</h2>
            {course.years.map((yearData, yearIndex) => (
              <div key={yearIndex} className="mb-4">
                <h3 className="text-xl font-semibold mb-2">{yearData.year}</h3>
                <ul className="space-y-2">
                  {yearData.subjects.map((subject, subjectIndex) => (
                    <li key={subjectIndex} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <FontAwesomeIcon icon={faBook} className="text-blue-500 text-lg" />
                        <span className="ml-2">{subject.name}</span>
                      </div>
                      <a
                        href={subject.syllabusUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700 flex items-center space-x-2"
                      >
                        <FontAwesomeIcon icon={faDownload} />
                        <span>Download</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SyllabusPage;
  