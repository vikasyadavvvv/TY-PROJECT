import React, { useState, useEffect } from "react";

const UpdateMarks = () => {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [subjects, setSubjects] = useState([]);
  const [semesters, setSemesters] = useState([]);
  const [marks, setMarks] = useState({});




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
      student?.generatedId?.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredStudents(results);
  };

  const handleSelectStudent = (student) => {
    setSelectedStudent(student); // ✅ Store full student object
    fetchSubjects(student.generatedId); // ✅ Pass generatedId when fetching subjects
  };
  

  const handleInputChange = (e, semesterNumber, subjectIndex, field) => {
    const { value } = e.target;
    setSemesters((prevSemesters) =>
      prevSemesters.map((sem) =>
        sem.semesterNumber === semesterNumber
          ? {
              ...sem,
              subjects: sem.subjects.map((sub, i) =>
                i === subjectIndex ? { ...sub, [field]: Number(value) } : sub
              ),
            }
          : sem
      )
    );
  };
  
  const getPassingMarks = (course, type) => {
    const passingCriteria = {
      "B.Sc IT": { internal: 7, theory: 28, practical: 20 },
      "B.Sc Plain": { internal: 7, theory: 28, practical: 20 },
      BCOM: { internal: 12, theory: 28 },
      BBA: { internal: 12, theory: 28 },
    };
    return passingCriteria[course]?.[type] || 0;
  };
  
  const calculateGPA = (semesterNumber) => {
    setSemesters((prevSemesters) =>
      prevSemesters.map((sem) => {
        if (sem.semesterNumber === semesterNumber) {
          let totalMarks = 0;
          let totalPossibleMarks = 0;
          let studentFailed = false;
  
          sem.subjects.forEach((subject) => {
            const internal = subject.internal || 0;
            const theory = subject.theory || 0;
            const practical = subject.practical || 0;
  
            const passingInternal = getPassingMarks(selectedStudent.course, "internal");
            const passingTheory = getPassingMarks(selectedStudent.course, "theory");
            const passingPractical = getPassingMarks(selectedStudent.course, "practical");
  
            if (internal < passingInternal || theory < passingTheory || (practical !== null && practical < passingPractical)) {
              studentFailed = true;
            }
  
            totalMarks += internal + theory + practical;
            totalPossibleMarks += 20 + 70 + (practical !== null ? 50 : 0);
          });
  
          const calculatedGpa = totalPossibleMarks > 0 ? ((totalMarks / totalPossibleMarks) * 10).toFixed(2) : "0.00";
  
          const gpa = studentFailed ? "--" : Math.min(10, parseFloat(calculatedGpa)).toFixed(2); // Ensure GPA does not exceed 10
          const overallStatus = studentFailed ? "Fail" : "Pass";
  
          return { ...sem, gpa, overallStatus };
        }
        return sem;
      })
    );
  };
  
  // ✅ Define fetchSubjects BEFORE calling it in onClick

  const fetchSubjects = async (generatedId) => {
    try {
      console.log(`🔍 Fetching subjects for ID: ${generatedId}...`);
  
      const response = await fetch(`http://localhost:5000/api/result/${generatedId}`);
      const data = await response.json();
  
      console.log("📥 API Response:", data); // ✅ Debug API response
  
      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch subjects");
      }
  
      if (!data.semesters || !Array.isArray(data.semesters)) {
        console.warn("⚠️ No semesters found in API response!");
        setSemesters([]); // Prevents UI crash
        return;
      }
  
      console.log("✅ Fetched Semesters:", data.semesters);
      setSemesters(data.semesters);
  
    } catch (error) {
      console.error("❌ Error fetching subjects:", error);
      setSemesters([]);
    }
  };


  const saveMarks = (semester) => {
  if (!selectedStudent || !selectedStudent.generatedId) {
    console.error("❌ No student selected or missing generatedId!");
    return;
  }

  const generatedId = selectedStudent.generatedId; // ✅ Get generatedId from selected student

  if (!semester || typeof semester !== "object" || !semester.semesterNumber) {
    console.error("❌ Invalid semester object:", semester);
    return;
  }

  const numSemester = Number(semester.semesterNumber);
  const foundSemester = semesters.find((sem) => sem.semesterNumber === numSemester);

  if (!foundSemester) {
    console.error("❌ Semester not found:", numSemester);
    return;
  }

  const overallStatus = foundSemester.overallStatus || "Not Available";
  const gpa = foundSemester.gpa || "N/A";
  const subjects = foundSemester.subjects?.map((sub) => ({
    subjectName: sub.subjectName,
    internal: sub.internal || 0,
    theory: sub.theory || 0,
    practical: sub.practical || 0,
  })) || [];

  if (subjects.length === 0) {
    console.error("❌ No subjects found! Cannot update marks.");
    return;
  }

  console.log("📌 Saving Marks for:", generatedId);
  console.log("📌 Semester:", numSemester);
  console.log("📌 Subjects:", subjects);
  console.log("📌 GPA:", gpa);
  console.log("📌 Overall Status:", overallStatus);

  saveMarksToBackend(generatedId, numSemester, subjects, overallStatus, gpa);
};

// ✅ Function to send data to backend
const saveMarksToBackend = async (generatedId, semesterNumber, subjects, overallStatus, gpa) => {
  if (!generatedId) {
    console.error("❌ Generated ID is missing! Check if it is being passed correctly.");
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/api/result/updateMarks/${generatedId}`, { 
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ semesterNumber, subjects, overallStatus, gpa }), // ✅ Fixed key name
    });

    const data = await response.json();
    console.log("✅ Response from backend:", data);

    if (!response.ok) {
      throw new Error(data.message || "Failed to update marks");
    }

    alert("✅ Marks updated successfully!");
  } catch (error) {
    console.error("❌ Error updating marks:", error.message);
    alert(`❌ Error: ${error.message}`);
  }
};
 
    
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
    <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Update Results</h1>

    {/* Search Section */}
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Search by Generated ID..."
          className="p-3 border rounded-lg w-full text-lg"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="px-6 py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 transition"
        >
          Search
        </button>
      </div>
    </div>

    {/* Student List */}
    <div className="w-full max-w-2xl mt-6">
      <ul className="bg-white shadow-lg rounded-lg divide-y">
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student) => (
            <li key={student._id} className="p-4 flex justify-between items-center">
              <div>
                <p className="text-lg font-semibold">{student.firstName} {student.middleName} {student.lastName}</p>
                <p className="text-gray-600">Course: {student.course}</p>
                <p className="text-gray-500">ID: {student.generatedId}</p>
              </div>
              <button
                className="px-4 py-2 bg-green-500 text-white text-lg rounded-lg hover:bg-green-600 transition"
                onClick={() => {
                  setSelectedStudent(student);
                  fetchSubjects(student.generatedId);
                }}
              >
                View Marks
              </button>
            </li>
          ))
        ) : (
          <p className="text-gray-500 text-center p-4">No student found.</p>
        )}
      </ul>
    </div>

    {/* Subject List for Selected Student */}
    {semesters.length > 0 ? (
  <div className="w-full max-w-4xl mt-6 bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">
      Results for {selectedStudent?.firstName}
    </h2>

    {semesters.map((semester) => (
      <div key={semester.semesterNumber} className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Semester {semester.semesterNumber}</h3>
        <p className="text-lg font-medium">
          <span className="font-semibold">GPA:</span> {semester.gpa || "Not Calculated"}
        </p>
        <p className="text-lg font-medium">
          <span className="font-semibold">Overall Status:</span> {semester.overallStatus}
        </p>

        <div className="overflow-x-auto mt-4">
          <table className="w-full border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-gray-300 px-4 py-2">Subject</th>
                <th className="border border-gray-300 px-4 py-2">Internal</th>
                <th className="border border-gray-300 px-4 py-2">Theory</th>
                <th className="border border-gray-300 px-4 py-2">Practical</th>
              </tr>
            </thead>
            <tbody>
              {semester.subjects.length > 0 ? (
                semester.subjects.map((sub, i) => (
                  <tr key={i} className="text-center">
                    <td className="border border-gray-300 px-4 py-2">{sub.subjectName}</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <input
                        type="number"
                        className="w-full text-center border rounded p-1"
                        value={sub.internal}
                        onChange={(e) => handleInputChange(e, semester.semesterNumber, i, 'internal')}
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <input
                        type="number"
                        className="w-full text-center border rounded p-1"
                        value={sub.theory}
                        onChange={(e) => handleInputChange(e, semester.semesterNumber, i, 'theory')}
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <input
                        type="number"
                        className="w-full text-center border rounded p-1"
                        value={sub.practical}
                        onChange={(e) => handleInputChange(e, semester.semesterNumber, i, 'practical')}
                      />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-gray-500 text-center p-4">
                    No subjects found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Buttons for GPA Calculation and Save Marks */}
        <div className="flex gap-4 mt-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => calculateGPA(semester.semesterNumber)}
          >
            Calculate GPA
          </button>

          <button
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            onClick={() => saveMarks(semester)}
          >
            Save Marks
          </button>
        </div>
      </div>
    ))}
  </div>
) : (
  <p className="text-gray-500 mt-4">No semester data available.</p>
)}




</div>
);
};

export default UpdateMarks;
