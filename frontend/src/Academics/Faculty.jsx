// src/FacultyPage.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faBuilding } from '@fortawesome/free-solid-svg-icons';

const facultyMembers = [
  {
    name: 'Prof.Pushpa More',  
    photo: 'https://tse4.explicit.bing.net/th?id=OIP.hgWW7DgIs4OdGYIEYfF8EgHaFO&pid=Api&P=0&h=180',
    designation: 'Professor & Head of Department',
    department: 'Computer Science',
    email: 'johndoe@example.com',
    phone: '123-456-7890'
  },
  {
    name: 'Dr. Suryakant Arjun Ajgaonkar',
    photo: 'https://tse3.mm.bing.net/th?id=OIP.K7HqZqvbDmUQE032m_FhhgHaHa&pid=Api&P=0&h=180',
    designation: 'Professor',
    department: 'Computer Science',
    email: 'alicejohnson@example.com',
    phone: '234-567-8901'
  },
  {
    name: 'Prof. Shivangi Suhasraje Dhondge',
    photo: 'https://tse4.explicit.bing.net/th?id=OIP.hgWW7DgIs4OdGYIEYfF8EgHaFO&pid=Api&P=0&h=180',
    designation: 'Associate Professor & Head of Department',
    department: 'Chemistry',
    email: 'janesmith@example.com',
    phone: '098-765-4321'
  },
  {
    name: 'Prof. Vasundhara Gunwant Wadibhasme',
    photo: 'https://tse4.explicit.bing.net/th?id=OIP.hgWW7DgIs4OdGYIEYfF8EgHaFO&pid=Api&P=0&h=180',
    designation: 'Assistant Professor',
    department: 'Chemistry',
    email: 'markbrown@example.com',
    phone: '345-678-9012'
  },
  {
    name: 'Prof. Gautam Babya Gamare',
    photo: 'https://tse3.mm.bing.net/th?id=OIP.K7HqZqvbDmUQE032m_FhhgHaHa&pid=Api&P=0&h=180',
    designation: 'Assistant Professor & Head of Department',
    department: 'Business Administration',
    email: 'robertbrown@example.com',
    phone: '456-789-0123'
  },
  {
    name: 'Prof. Prakash Ravan Dake',
    photo: 'https://tse3.mm.bing.net/th?id=OIP.K7HqZqvbDmUQE032m_FhhgHaHa&pid=Api&P=0&h=180',
    designation: 'Lecturer',
    department: 'Business Administration',
    email: 'emilydavis@example.com',
    phone: '567-890-1234'
  },
  {
    name: 'Prof. Vaidehi Vinay Mhatre',
    photo: 'https://tse4.explicit.bing.net/th?id=OIP.hgWW7DgIs4OdGYIEYfF8EgHaFO&pid=Api&P=0&h=180',
    designation: 'Lecturer',
    department: 'Business Administration',
    email: 'emilydavis@example.com',
    phone: '567-890-1234'
  },
  {
    name: 'Prof. Trupti Rajesh Barve',
    photo: 'https://tse4.explicit.bing.net/th?id=OIP.hgWW7DgIs4OdGYIEYfF8EgHaFO&pid=Api&P=0&h=180',
    designation: 'Lecturer',
    department: 'Business Administration',
    email: 'emilydavis@example.com',
    phone: '567-890-1234'
  },
  {
    name: 'Prof. Akshada Jitesh Lawande',
    photo: 'https://tse4.explicit.bing.net/th?id=OIP.hgWW7DgIs4OdGYIEYfF8EgHaFO&pid=Api&P=0&h=180',
    designation: 'Lecturer',
    department: 'Business Administration',
    email: 'emilydavis@example.com',
    phone: '567-890-1234'
  },
  {
    name: 'Prof. Tejashree Nandakumar Chirame',
    photo: 'https://tse4.explicit.bing.net/th?id=OIP.hgWW7DgIs4OdGYIEYfF8EgHaFO&pid=Api&P=0&h=180',
    designation: 'Lecturer',
    department: 'Business Administration',
    email: 'emilydavis@example.com',
    phone: '567-890-1234'
  },
  {
    name: 'Prof. NileshKumar Pandey',
    photo: 'https://tse3.mm.bing.net/th?id=OIP.K7HqZqvbDmUQE032m_FhhgHaHa&pid=Api&P=0&h=180',
    designation: 'Lecturer',
    department: 'Business Administration',
    email: 'emilydavis@example.com',
    phone: '567-890-1234'
  },
  {
    name: 'Prof. SureshKumar Gehnoliya',
    photo: 'https://tse3.mm.bing.net/th?id=OIP.K7HqZqvbDmUQE032m_FhhgHaHa&pid=Api&P=0&h=180',
    designation: 'Lecturer',
    department: 'Business Administration',
    email: 'emilydavis@example.com',
    phone: '567-890-1234'
  },
  {
    name: 'Prof. Sarah Grace Jason',
    photo: 'https://tse3.mm.bing.net/th?id=OIP.K7HqZqvbDmUQE032m_FhhgHaHa&pid=Api&P=0&h=180',
    designation: 'Lecturer',
    department: 'Business Administration',
    email: 'emilydavis@example.com',
    phone: '567-890-1234'
  },  {
    name: 'Prof. Namrata Rupesh Gaikward',
    photo: 'https://tse4.explicit.bing.net/th?id=OIP.hgWW7DgIs4OdGYIEYfF8EgHaFO&pid=Api&P=0&h=180',
    designation: 'Professor & Head of Department',
    department: 'Business Administration',
    email: 'emilydavis@example.com',
    phone: '567-890-1234'
  },  {
    name: 'Prof. Sushma Mewalal Yadhav',
    photo: 'https://tse4.explicit.bing.net/th?id=OIP.hgWW7DgIs4OdGYIEYfF8EgHaFO&pid=Api&P=0&h=180',
    designation: 'Lecturer',
    department: 'Business Administration',
    email: 'emilydavis@example.com',
    phone: '567-890-1234'
  },  {
    name: 'Prof. Deepali .P. Salve',
    photo: 'https://tse4.explicit.bing.net/th?id=OIP.hgWW7DgIs4OdGYIEYfF8EgHaFO&pid=Api&P=0&h=180',
    designation: 'Lecturer',
    department: 'Business Administration',
    email: 'emilydavis@example.com',
    phone: '567-890-1234'
  },  {
    name: 'Prof. Aahad Hussain Mohammad Hussain Shaikh',
    photo: 'https://tse3.mm.bing.net/th?id=OIP.K7HqZqvbDmUQE032m_FhhgHaHa&pid=Api&P=0&h=180',
    designation: 'Lecturer',
    department: 'Business Administration',
    email: 'emilydavis@example.com',
    phone: '567-890-1234'
  },
  {
    name: 'Prof. Ashish Jha',
    photo: 'https://tse3.mm.bing.net/th?id=OIP.K7HqZqvbDmUQE032m_FhhgHaHa&pid=Api&P=0&h=180',
    designation: 'Lecturer',
    department: 'Business Administration',
    email: 'emilydavis@example.com',
    phone: '567-890-1234'
  },{
    name: 'Prof. Priyanka Surendra Swami',
    photo: 'https://tse4.explicit.bing.net/th?id=OIP.hgWW7DgIs4OdGYIEYfF8EgHaFO&pid=Api&P=0&h=180',
    designation: 'Lecturer',
    department: 'Business Administration',
    email: 'emilydavis@example.com',
    phone: '567-890-1234'
  },{
    name: 'Prof. Poonam Sukkhu Kannaujiya',
    photo: 'https://tse4.explicit.bing.net/th?id=OIP.hgWW7DgIs4OdGYIEYfF8EgHaFO&pid=Api&P=0&h=180',
    designation: 'Lecturer',
    department: 'Business Administration',
    email: 'emilydavis@example.com',
    phone: '567-890-1234'
  },{
    name: 'Prof. Ganesh. Promod Kulkarni',
    photo: 'https://tse3.mm.bing.net/th?id=OIP.K7HqZqvbDmUQE032m_FhhgHaHa&pid=Api&P=0&h=180',
    designation: 'Lecturer',
    department: 'Business Administration',
    email: 'emilydavis@example.com',
    phone: '567-890-1234'
  },{
    name: 'Prof. Shabnoor Adam Dange',
    photo: 'https://tse3.mm.bing.net/th?id=OIP.K7HqZqvbDmUQE032m_FhhgHaHa&pid=Api&P=0&h=180',
    designation: 'Lecturer',
    department: 'Business Administration',
    email: 'emilydavis@example.com',
    phone: '567-890-1234'
  },{
    name: 'Prof. Samwel Bhira Maci',
    photo: 'https://tse3.mm.bing.net/th?id=OIP.K7HqZqvbDmUQE032m_FhhgHaHa&pid=Api&P=0&h=180',
    designation: 'Lecturer',
    department: 'Business Administration',
    email: 'emilydavis@example.com',
    phone: '567-890-1234'
  },{
    name: 'Prof. Farzana Firoz Shaikh',
    photo: 'https://tse4.explicit.bing.net/th?id=OIP.hgWW7DgIs4OdGYIEYfF8EgHaFO&pid=Api&P=0&h=180',
    designation: 'Lecturer',
    department: 'Business Administration',
    email: 'emilydavis@example.com',
    phone: '567-890-1234'
  },{
    name: 'Prof Kaustubh Pradeep Kadam',
    photo: 'https://tse3.mm.bing.net/th?id=OIP.K7HqZqvbDmUQE032m_FhhgHaHa&pid=Api&P=0&h=180',
    designation: 'Lecturer',
    department: 'Business Administration',
    email: 'emilydavis@example.com',
    phone: '567-890-1234'
  },{
    name: 'Prof. Daksha Girish Kamble',
    photo: 'https://tse4.explicit.bing.net/th?id=OIP.hgWW7DgIs4OdGYIEYfF8EgHaFO&pid=Api&P=0&h=180',
    designation: 'Lecturer',
    department: 'Business Administration',
    email: 'emilydavis@example.com',
    phone: '567-890-1234'
  },{
    name: 'Prof. Shrikrishna Vishnu Chindarkar',
    photo: 'https://tse3.mm.bing.net/th?id=OIP.K7HqZqvbDmUQE032m_FhhgHaHa&pid=Api&P=0&h=180',
    designation: 'Lecturer',
    department: 'Business Administration',
    email: 'emilydavis@example.com',
    phone: '567-890-1234'
  },{
    name: 'Prof. Chaaya Vikas Jagtap',
    photo: 'https://tse4.explicit.bing.net/th?id=OIP.hgWW7DgIs4OdGYIEYfF8EgHaFO&pid=Api&P=0&h=180',
    designation: 'Lecturer',
    department: 'Business Administration',
    email: 'emilydavis@example.com',
    phone: '567-890-1234'
  },
  {
    name: 'Prof. Shankar Suresh Pawar',
    photo: 'https://tse3.mm.bing.net/th?id=OIP.K7HqZqvbDmUQE032m_FhhgHaHa&pid=Api&P=0&h=180',
    designation: 'Lecturer',
    department: 'Business Administration',
    email: 'emilydavis@example.com',
    phone: '567-890-1234'
  },{
    name: 'Prof. Anil Pandurang Varlekar',
    photo: 'https://tse3.mm.bing.net/th?id=OIP.K7HqZqvbDmUQE032m_FhhgHaHa&pid=Api&P=0&h=180',
    designation: 'Lecturer',
    department: 'Business Administration',
    email: 'emilydavis@example.com',
    phone: '567-890-1234'
  },{
    name: 'Prof. Deepak Suresh Pednekar',
    photo: 'https://tse3.mm.bing.net/th?id=OIP.K7HqZqvbDmUQE032m_FhhgHaHa&pid=Api&P=0&h=180',
    designation: 'Lecturer',
    department: 'Business Administration',
    email: 'emilydavis@example.com',
    phone: '567-890-1234'
  },{
    name: 'Prof. Adesh Nana Bhalekar',
    photo: 'https://tse3.mm.bing.net/th?id=OIP.K7HqZqvbDmUQE032m_FhhgHaHa&pid=Api&P=0&h=180',
    designation: 'Lecturer',
    department: 'Business Administration',
    email: 'emilydavis@example.com',
    phone: '567-890-1234'
  },
  // Add more faculty members as needed
];

const FacultyPage = () => {
  return (
    <div className="container mx-auto my-8 p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Faculty Members</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {facultyMembers.map((faculty, index) => (
          <div
            key={index}
            className={`p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex flex-col items-center space-y-4 ${
              faculty.designation.includes('Head of Department') ? 'border-2 border-blue-500' : ''
            }`}
          >
            <img src={faculty.photo} alt={faculty.name} className="w-24 h-24 rounded-full object-cover" />
            <div className="text-center">
              <h2 className="text-xl font-bold">{faculty.name}</h2>
              <p className="text-gray-500">{faculty.designation}</p>
              <p className="text-gray-500">{faculty.department}</p>
            </div>
            <div className="flex space-x-4">
              <a href={`mailto:${faculty.email}`} className="text-blue-500">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a href={`tel:${faculty.phone}`} className="text-blue-500">
                <FontAwesomeIcon icon={faPhone} />
              </a>
              <FontAwesomeIcon icon={faBuilding} className="text-gray-500" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacultyPage;
