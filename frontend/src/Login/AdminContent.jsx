import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminContent = ({ setIsAdminAuthenticated }) => {
  const navigate = useNavigate();
  const [newNews, setNewNews] = useState({ title: '', date: '', content: '' });
  const [newsList, setNewsList] = useState([]);
  const [studentList, setStudentList] = useState([]); // New state for students
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Logout Functionality
  const handleLogout = () => {
    setIsAdminAuthenticated(false);
    localStorage.removeItem('adminAuth');
    navigate('/adminlogin');
  };

  // Authentication Check
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('adminAuth');
    if (!isAuthenticated) {
      navigate('/adminlogin');
    }
  }, [navigate]);

  // Input Handler for News Form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewNews((prev) => ({ ...prev, [name]: value }));
  };

  // Fetch News Data
  const fetchNews = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/news');
      if (!response.ok) throw new Error('Failed to fetch news.');
      const data = await response.json();
      setNewsList(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch Student Data
  const fetchStudents = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/students'); // Assuming the students API endpoint is '/api/students'
      if (!response.ok) throw new Error('Failed to fetch students.');
      const data = await response.json();
      setStudentList(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Add News
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/api/news', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newNews),
      });
      if (!response.ok) throw new Error('Failed to add news.');
      const savedNews = await response.json();
      setNewsList((prev) => [...prev, savedNews]);
      setNewNews({ title: '', date: '', content: '' });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Delete News
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/news/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete news.');
      setNewsList((prev) => prev.filter((news) => news._id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  // Load News and Students on Component Mount
  useEffect(() => {
    fetchNews();
    fetchStudents(); // Fetch students as well when component mounts
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      {/* News Management */}
      <div className="mt-8 bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-xl font-bold mb-4">Add News</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={newNews.title}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
          <input
            type="text"
            name="date"
            placeholder="Date"
            value={newNews.date}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
          <textarea
            name="content"
            placeholder="Content"
            value={newNews.content}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            disabled={loading}
          >
            {loading ? 'Adding...' : 'Add News'}
          </button>
        </form>
      </div>

      {/* Existing News List */}
      <div className="mt-8 bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-xl font-bold mb-4">Existing News</h2>
        {loading ? (
          <p>Loading news...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : newsList.length === 0 ? (
          <p>No news available.</p>
        ) : (
          <ul className="space-y-4">
            {newsList.map((news) => (
              <li key={news._id} className="p-4 bg-gray-50 border rounded-md">
                <h3 className="font-bold">{news.title}</h3>
                <p>{news.content}</p>
                <p className="text-sm text-gray-500">{news.date}</p>
                <button
                  onClick={() => handleDelete(news._id)}
                  className="mt-2 bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Student Management */}
      <div className="mt-8 bg-white p-6 shadow-md rounded-lg">
      <header className="mt-20 text-black text-3xl py-2 text-center">
          <h1 className="text-3xl font-bold">Admissions</h1>
        </header>

        <h2 className="text-xl font-bold mb-4">Student Details</h2>
        {loading ? (
          <p>Loading students...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : studentList.length === 0 ? (
          <p>No students available.</p>
        ) : (
          <ul className="space-y-4">
            {studentList.map((student) => (
              <li key={student._id} className="p-4 bg-gray-50 border rounded-md">
  <p className="text-sm text-gray-800">
    <span className="font-bold">FirstName:</span> {student.firstName}
  </p>
  <p className="text-sm text-gray-800">
    <span className="font-bold">MiddleName:</span> {student.middleName}
  </p>
  <p className="text-sm text-gray-800">
    <span className="font-bold">LastName:</span> {student.lastName}
  </p>
  <p className="text-sm text-gray-800">
    <span className="font-bold">Phone:</span> {student.phone}
  </p>
  <p className="text-sm text-gray-800">
    <span className="font-bold">DOB:</span> {student.dob}
  </p>
  <p className="text-sm text-gray-800">
    <span className="font-bold">Address:</span> {student.address}
  </p>
  <p className="text-sm text-gray-800">
    <span className="font-bold">Course:</span> {student.course}
  </p>
  <p className="text-sm text-gray-800">
    <span className="font-bold">Generated ID:</span> {student.generatedId}
  </p>
  <p className="text-sm text-gray-800">
    <span className="font-bold">Twelfth Marksheet:</span> 
    <a href={student.twelfthMarksheet} target="_blank" className="text-blue-500 hover:underline">View</a>
  </p>
  <p className="text-sm text-gray-800">
    <span className="font-bold">Aadhar Card:</span>
    <a href={student.aadharCard} target="_blank" className="text-blue-500 hover:underline">View</a>
  </p>
  <p className="text-sm text-gray-800">
    <span className="font-bold">Passport Photo:</span>
    <a href={student.passportPhoto} target="_blank" className="text-blue-500 hover:underline">View</a>
  </p>
  <div className="flex gap-4 mt-4">
    <button
      onClick={() => handleConfirmAdmission(student._id)}
      className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
    >
      Confirm Admission
    </button>
    <button
      onClick={() => handleRejectAdmission(student._id)}
      className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
    >
      Reject Admission
    </button>
  </div>
</li>

            ))}
          </ul>
        )}
      </div>

    </div>
  );
};

export default AdminContent;

