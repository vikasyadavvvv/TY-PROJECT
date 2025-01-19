import React, { useState, useEffect } from "react";

const Admissions = () => {
  const [studentList, setStudentList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch students from backend
  const fetchStudents = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/students");
      if (!response.ok) throw new Error("Failed to fetch students.");
      const data = await response.json();
      setStudentList(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Confirm admission
  const confirmAdmission = async (generatedId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/confirm/confirm/${generatedId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) throw new Error("Failed to confirm admission.");

      // Optionally update the student list to reflect the change
      setStudentList((prevList) =>
        prevList.map((student) =>
          student.generatedId === generatedId ? { ...student, confirmedAdmission: true, rejectedAdmission: false } : student
        )
      );

      alert("Admission confirmed successfully!");
    } catch (err) {
      console.error(err.message);
      alert("Failed to confirm admission. Please try again.");
    }
  };

  // Reject admission
  const rejectAdmission = async (generatedId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/confirm/reject/${generatedId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) throw new Error("Failed to reject admission.");

      setStudentList((prevList) =>
        prevList.map((student) =>
          student.generatedId === generatedId ? { ...student, confirmedAdmission: false, rejectedAdmission: true } : student
        )
      );

      alert("Admission rejected successfully!");
    } catch (err) {
      console.error(err.message);
      alert("Failed to reject admission. Please try again.");
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
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
                <span className="font-bold">First Name:</span> {student.firstName}
              </p>
              <p className="text-sm text-gray-800">
                <span className="font-bold">Middle Name:</span> {student.middleName}
              </p>
              <p className="text-sm text-gray-800">
                <span className="font-bold">Last Name:</span> {student.lastName}
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
                <a
                  href={student.twelfthMarksheet}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View
                </a>
              </p>
              <p className="text-sm text-gray-800">
                <span className="font-bold">Aadhar Card:</span>
                <a
                  href={student.aadharCard}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View
                </a>
              </p>
              <p className="text-sm text-gray-800">
                <span className="font-bold">Passport Photo:</span>
                <a
                  href={student.passportPhoto}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View
                </a>
              </p>
              <div className="flex gap-4 mt-4">
  <button
    onClick={() => confirmAdmission(student.generatedId)} // Use generatedId here
    className={`px-4 py-2 rounded-md text-white hover:bg-green-600 ${
      student.confirmedAdmission ? "bg-gray-400 cursor-not-allowed" : "bg-green-500"
    }`}
    disabled={student.confirmedAdmission} // Disable if confirmedAdmission is true
  >
    Confirm Admission
  </button>
  <button
    onClick={() => rejectAdmission(student.generatedId)} // Use generatedId here
    className={`px-4 py-2 rounded-md text-white hover:bg-red-600 ${
      student.rejectedAdmission ? "bg-gray-400 cursor-not-allowed" : "bg-red-500"
    }`}
    disabled={student.rejectedAdmission} // Disable if rejectedAdmission is true
  >
    Reject Admission
  </button>
</div>
 </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Admissions;
