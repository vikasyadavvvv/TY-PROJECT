import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const StudentLogin = () => {
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Client-side validation
    if (!studentId.trim() || !password.trim()) {
      setError('Student ID and Password are required.');
      return;
    }

    setIsLoading(true);
    setError(''); // Clear any previous error

    const loginData = {
      studentId,
      phone: password,
    };

    console.log('Payload sent:', loginData);

    try {
      const response = await fetch('http://localhost:5000/api/confirm/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Response received:', data);

        // Extract student name or fallback to a default
        const studentName = data.name || 'Student';

        // Store the studentId in local storage
        localStorage.setItem('studentId', studentId);

        // Redirect to /studentcontent with studentName in state
        navigate('/studentcontent', { state: { studentName, generatedId: data.student.generatedId } });
      } else {
        let errorMessage = 'Something went wrong. Please try again later.';
        try {
          const errorData = await response.json();
          errorMessage = errorData.message || errorMessage;
        } catch (jsonError) {
          console.error('Error parsing error response:', jsonError);
        }
        setError(errorMessage);
      }
    } catch (err) {
      console.error('Error during login:', err);
      setError('Unable to connect to the server. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-8">Student Login</h2>
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
            disabled={isLoading || !studentId || !password}
            className={`w-full py-2 rounded-lg transition duration-200 ${
              isLoading || !studentId || !password
                ? 'bg-gray-400'
                : 'bg-blue-500 hover:bg-blue-600'
            } text-white`}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentLogin;

