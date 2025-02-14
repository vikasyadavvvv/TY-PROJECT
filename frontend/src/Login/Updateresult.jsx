import React, { useState, useEffect } from "react";

const UpdateResults = () => {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [subjects, setSubjects] = useState({});

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/students");
        const data = await response.json();
        setStudents(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching students:", error);
        setStudents([]);
      }
    };
    fetchStudents();
  }, []);

  const handleSearch = () => {
    const results = students.filter(student =>
      student && student.generatedId ? student.generatedId.toLowerCase().includes(search.toLowerCase()) : false
    );
    setFilteredStudents(results);
  };

  // Fetch subjects for a selected student
  const fetchSubjects = async (generatedId) => {
    console.log("Fetching subjects for:", generatedId); // Debugging log

    try {
      const response = await fetch("http://localhost:5000/api/subjects/getSubjects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ generatedId }),
      });

      // Check the response status
      if (!response.ok) {
        throw new Error(`Error fetching subjects: ${response.statusText}`);
      }

      const data = await response.json();
      setSubjects(data.subjects || {});
    } catch (error) {
      console.error("Error fetching subjects:", error);
      setSubjects({});
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Update Results</h1>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search by Generated ID..."
          className="p-2 border rounded w-80"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Search
        </button>
      </div>
      <ul className="w-80 bg-white shadow rounded p-4 mt-4">
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student, index) => (
            <li key={student._id || index} className="p-2 border-b last:border-b-0 flex justify-between items-center">
              <div>
                <strong>Name:</strong> {student.firstName} {student.middleName} {student.lastName} <br />
                <strong>Course:</strong> {student.course} <br />
                <strong>Generated ID:</strong> {student.generatedId}
              </div>
              <button
                className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                onClick={() => {
                  setSelectedStudent(student);
                  fetchSubjects(student.generatedId);
                }}
              >
                View Subjects
              </button>
            </li>
          ))
        ) : (
          <li className="p-2 text-gray-500">No students found</li>
        )}
      </ul>

      {selectedStudent && (
        <div className="mt-6 w-3/4 bg-white shadow rounded p-4">
          <h2 className="text-xl font-bold text-gray-700">Subjects for {selectedStudent.firstName} {selectedStudent.middleName} {selectedStudent.lastName}</h2>
          {Object.keys(subjects).length > 0 ? (
            Object.entries(subjects).map(([semester, subjectList]) => (
              <div key={semester} className="mt-4">
                <h3 className="text-lg font-semibold text-gray-700">{semester.toUpperCase()}</h3>
                <table className="w-full mt-2 border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border p-2">Subject Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.isArray(subjectList) && subjectList.length > 0 ? (
                      subjectList.map((subject, index) => (
                        <tr key={index} className="border">
                          <td className="border p-2">{subject}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td className="p-2 text-gray-500 text-center" colSpan="2">No subjects found</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No subjects found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default UpdateResults;
