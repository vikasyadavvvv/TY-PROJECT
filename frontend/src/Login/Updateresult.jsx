import React, { useState, useEffect } from "react";

const UpdateResults = () => {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [subjects, setSubjects] = useState({});
  const [marks, setMarks] = useState({});
  const [gpa, setGpa] = useState("--");
  const [status, setStatus] = useState("");
  const [overallStatus, setOverallStatus] = useState("Fail");

  

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

  const fetchSubjects = async (generatedId) => {
    try {
      const response = await fetch("http://localhost:5000/api/subjects/getSubjects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ generatedId }),
      });
      if (!response.ok) throw new Error(`Error fetching subjects: ${response.statusText}`);
      
      const data = await response.json();
      setSubjects(data.subjects || {});
      setMarks({});
      setGpa("--");
      setStatus("");
    } catch (error) {
      console.error("Error fetching subjects:", error);
      setSubjects({});
    }
  };

  const getPassingMarks = (course, type) => {
    const passingCriteria = {
      "B.Sc IT": { internal: 7, theory: 26, practical: 18 },
      "B.Sc Plain": { internal: 7, theory: 26, practical: 18 },
      BCOM: { internal: 7, theory: 28 },
      BBA: { internal: 7, theory: 28 },
    };
    return passingCriteria[course]?.[type] || 0;
  };

  const handleMarksChange = (semester, subject, type, value) => {
    setMarks(prev => ({
      ...prev,
      [semester]: {
        ...prev[semester],
        [subject]: {
          ...prev[semester]?.[subject],
          [type]: Number(value),
        },
      },
    }));
  };

  const calculateGpa = () => {
    if (!selectedStudent || Object.keys(marks).length === 0) return;
  
    let totalMarks = 0;
    let totalPossibleMarks = 0;
    let studentFailed = false;
  
    Object.entries(marks).forEach(([semester, subjects]) => {
      Object.entries(subjects).forEach(([subjectName, markDetails]) => {
        const internal = markDetails.internal || 0;
        const theory = markDetails.theory || 0;
        const practical = ["B.Sc IT", "B.Sc Plain"].includes(selectedStudent.course)
          ? markDetails.practical || 0
          : null;
  
        const passingInternal = getPassingMarks(selectedStudent.course, "internal");
        const passingTheory = getPassingMarks(selectedStudent.course, "theory");
        const passingPractical = getPassingMarks(selectedStudent.course, "practical");
  
        // Check if student has failed in any component
        if (internal < passingInternal || theory < passingTheory || (practical !== null && practical < passingPractical)) {
          studentFailed = true;
        }
  
        // Add total marks
        totalMarks += internal + theory + (practical || 0);
  
        // Add total possible marks (assuming full marks for internal, theory, and practical)
        const maxInternal = 30;  // Adjust if internal marks vary
        const maxTheory = 70;    // Adjust if theory marks vary
        const maxPractical = ["B.Sc IT", "B.Sc Plain"].includes(selectedStudent.course) ? 50 : 0; // Adjust if needed
  
        totalPossibleMarks += maxInternal + maxTheory + maxPractical;
      });
    });
  
    if (studentFailed) {
      setGpa("--");
      setOverallStatus("Fail");
    } else {
      // Normalize GPA out of 10
      const calculatedGpa = totalPossibleMarks > 0 ? ((totalMarks / totalPossibleMarks) * 10).toFixed(2) : "0.00";
      setGpa(calculatedGpa);
      setOverallStatus("Pass");
    }
  };
  

  const saveMarksToDatabase = async () => {
    if (!selectedStudent || !marks || Object.keys(marks).length === 0) {
      alert("Please enter marks before saving.");
      return;
    }
  
    // Ensure GPA and status are recalculated before saving
    calculateGpa(); 
  
    // Convert marks object into the correct structure
    const formattedSubjects = {};
    Object.keys(marks).forEach(semesterKey => {
      const semesterNumber = semesterKey.replace(/\D/g, ""); // Extract semester number
  
      formattedSubjects[semesterNumber] = Object.entries(marks[semesterKey]).map(([subjectName, markDetails]) => ({
        subjectName,
        internal: markDetails.internal || 0,
        theory: markDetails.theory || 0,
        practical: markDetails.practical || 0
      }));
    });
  
    console.log("Formatted Subjects:", formattedSubjects);
    console.log(`Saving GPA: ${gpa}, Status: ${overallStatus}`);
  
    try {
      const response = await fetch("http://localhost:5000/api/result/saveOrUpdate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          generatedId: selectedStudent.generatedId,
          course: selectedStudent.course,
          subjects: formattedSubjects,
          gpa, // Save calculated GPA
          overallStatus, // Save pass/fail status
        }),
      });
  
      const responseData = await response.json();
  
      if (!response.ok) {
        console.error("Backend Error Response:", responseData);
        throw new Error(responseData.message || "Failed to save marks.");
      }
  
      alert(responseData.message);
    } catch (error) {
      console.error("Error saving marks:", error);
      alert("Failed to save marks. Check console for details.");
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
          filteredStudents.map((student) => (
            <li key={student._id} className="p-2 border-b last:border-b-0 flex justify-between items-center">
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
          <h2 className="text-xl font-bold text-gray-700">
            Subjects for {selectedStudent.firstName} {selectedStudent.middleName} {selectedStudent.lastName}
          </h2>
          <table className="w-full mt-2 border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Subject</th>
                <th className="border p-2">Internal</th>
                <th className="border p-2">Theory</th>
                {["B.Sc IT", "B.Sc Plain"].includes(selectedStudent.course) && <th className="border p-2">Practical</th>}
              </tr>
            </thead>
            <tbody>
              {Object.entries(subjects).map(([semester, subjectList]) =>
                subjectList.map((subject) => (
                  <tr key={subject} className="border">
                    <td className="border p-2">{subject}</td>
                    <td className="border p-2">
                      <input type="number" className="w-16 p-1 border text-center" onChange={(e) => handleMarksChange(semester, subject, "internal", e.target.value)} />
                    </td>
                    <td className="border p-2">
                      <input type="number" className="w-16 p-1 border text-center" onChange={(e) => handleMarksChange(semester, subject, "theory", e.target.value)} />
                    </td>
                    <td className="border p-2">
                      <input type="number" className="w-16 p-1 border text-center" onChange={(e) => handleMarksChange(semester, subject, "practical", e.target.value)} />
                    </td>

                  </tr>
                ))
              )}
            </tbody>
          </table>
          <button
  className="mt-4 px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
  onClick={calculateGpa}
>
  Calculate GPA
</button>

<div className="mt-4 p-4 bg-gray-200 rounded text-center w-1/2">
  <h3 className="text-lg font-semibold">Overall Status: <span className={overallStatus === "Pass" ? "text-green-600" : "text-red-600"}>{overallStatus}</span></h3>
  <h3 className="text-lg font-semibold">GPA: <span className="text-blue-600">{gpa}</span></h3>
</div>
<button
  className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
  onClick={saveMarksToDatabase}
>
  Save Marks
</button>

        </div>
      )}
    </div>
  );
};

export default UpdateResults;
