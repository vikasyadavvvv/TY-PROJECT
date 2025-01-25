import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const StudentContent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [studentDetails, setStudentDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generatedId = location.state?.generatedId; // Extract the generated ID passed via state

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("studentToken");
    navigate("/");
  };

  // Fetch student details using generatedId
  const fetchStudentDetails = async () => {
    if (!generatedId) {
      setError("No student ID provided.");
      return;
    }
  
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:5000/api/students/${generatedId}`);
      const data = await response.json();
      console.log("API Response:", data); // Debug API response
      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch student details.");
      }
      setStudentDetails(data.student); // Extract the student object from the API response
    } catch (err) {
      console.error("Error fetching student details:", err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    console.log("Generated ID:", generatedId); // Debug generated ID
    if (generatedId) {
      fetchStudentDetails();
    }
  }, [generatedId]);

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-100">
      <button
        onClick={handleLogout}
        className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none"
      >
        Logout
      </button>

      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
        <h2 className="text-3xl font-bold mb-4">
          Welcome, {studentDetails ? studentDetails.firstName : "Student"}!
        </h2>

        {loading ? (
          <p>Loading student details...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : studentDetails ? (
          <div className="space-y-4">
            {console.log("Rendered studentDetails:", studentDetails)}
            <p>
  <span className="font-bold">Passport Photo:</span>
</p>
{studentDetails.passportPhoto ? (
  <div className="flex justify-center">
    <img
      src={studentDetails.passportPhoto}
      alt="Passport"
      className="w-32 h-32 object-cover rounded-lg shadow-md"
    />
  </div>
) : (
  <p>No passport photo available</p>
)}

            <p><span className="font-bold">First Name:</span> {studentDetails.firstName || "N/A"}</p>
            <p><span className="font-bold">Middle Name:</span> {studentDetails.middleName || "N/A"}</p>
            <p><span className="font-bold">Last Name:</span> {studentDetails.lastName || "N/A"}</p>
            <p><span className="font-bold">Email:</span> {studentDetails.email || "N/A"}</p>
            <p><span className="font-bold">Phone:</span> {studentDetails.phone || "N/A"}</p>
            <p><span className="font-bold">DOB:</span> {studentDetails.dob || "N/A"}</p>
            <p><span className="font-bold">Address:</span> {studentDetails.address || "N/A"}</p>
            <p><span className="font-bold">Course:</span> {studentDetails.course || "N/A"}</p>
            <p><span className="font-bold">Generated ID:</span> {studentDetails.generatedId || "N/A"}</p>
          </div>
        ) : (
          <p>No student details found.</p>
        )}
      </div>
    </div>
  );
};

export default StudentContent;
