import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';

const StudentLogin = () => {
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // To hold any error message

  // Handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault();

    // Set up the data to be sent to the backend
    const loginData = {
      studentId,
      phone: password, // Assuming "phone" is used as the password field
    };

    try {
      // Send POST request to backend for authentication
      const response = await fetch('http://localhost:5000/api/confirm/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      // Check if the login request was successful
      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data);
        // You can redirect or store the response data (e.g., JWT token)
        // Example: Redirect to student dashboard
        window.location.href = '/student-dashboard'; // Replace with your actual dashboard route
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Something went wrong. Please try again later.');
      }
    } catch (error) {
      // Handle any network or unexpected errors
      console.error('Error during login:', error);
      setError('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-8">Student Login</h2>
        {/* Display error message if any */}
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        <form onSubmit={handleLogin}>
          <div className="mb-4 flex items-center">
            <FaUser className="text-gray-500 mr-3" />
            <input
              type="text"
              id="studentId"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your Student ID"
              required
            />
          </div>
          <div className="mb-6 flex items-center">
            <FaLock className="text-gray-500 mr-3" />
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your Password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentLogin;

