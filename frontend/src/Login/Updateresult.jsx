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
  const [enteredSemesters, setEnteredSemesters] = useState(new Set()); // Track entered semesters
  const [semesterStatus, setSemesterStatus] = useState({});
  const [semesterGpa, setSemesterGpa] = useState({});
  const [selectedSemester, setSelectedSemester] = useState(""); // Store selected semester

  // List of semesters (Modify as needed)
  const semesters = [1, 2, 3, 4, 5, 6];






  

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
      
      // Filter out already entered semesters
      const filteredSubjects = Object.keys(data.subjects || {})
        .filter(sem => !enteredSemesters.has(sem))
        .reduce((acc, sem) => {
          acc[sem] = data.subjects[sem];
          return acc;
        }, {});
  
      setSubjects(filteredSubjects);
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
      "B.Sc IT": { internal: 7, theory: 28, practical: 20 },
      "B.Sc Plain": { internal: 7, theory: 28, practical: 20 },
      BCOM: { internal: 12, theory: 28 },
      BBA: { internal: 12, theory: 28 },
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

  const calculateGpa = (semesterNumber) => {
    if (!selectedStudent || !marks[semesterNumber]) return { gpa: "--", overallStatus: "Fail" };
  
    let totalMarks = 0;
    let totalPossibleMarks = 0;
    let studentFailed = false;
  
    Object.entries(marks[semesterNumber]).forEach(([subjectName, markDetails]) => {
      const internal = markDetails.internal || 0;
      const theory = markDetails.theory || 0;
      const practical = ["B.Sc IT", "B.Sc Plain"].includes(selectedStudent.course)
        ? markDetails.practical || 0
        : null;
  
      const passingInternal = getPassingMarks(selectedStudent.course, "internal");
      const passingTheory = getPassingMarks(selectedStudent.course, "theory");
      const passingPractical = getPassingMarks(selectedStudent.course, "practical");
  
      if (internal < passingInternal || theory < passingTheory || (practical !== null && practical < passingPractical)) {
        studentFailed = true;
      }
  
      totalMarks += internal + theory + (practical || 0);
      totalPossibleMarks += 20 + 70 + (practical !== null ? 50 : 0);
    });
  
    const calculatedGpa = totalPossibleMarks > 0 ? ((totalMarks / totalPossibleMarks) * 10).toFixed(2) : "0.00";
  
    const gpa = studentFailed ? "--" : calculatedGpa;
    const overallStatus = studentFailed ? "Fail" : "Pass";
  
    // Update state
    setSemesterGpa((prev) => ({ ...prev, [semesterNumber]: gpa }));
    setSemesterStatus((prev) => ({ ...prev, [semesterNumber]: overallStatus }));
  
    // ✅ Return the correct object
    return { gpa, overallStatus };
  };
  
  const saveMarksToDatabase = async () => {
  if (!selectedStudent || !marks || typeof marks !== "object" || Object.keys(marks).length === 0) {
    alert("Please enter marks before saving.");
    return;
  }

  const updatedMarks = {};
  Object.keys(marks).forEach(semesterKey => {
    const calculated = calculateGpa(semesterKey);

    if (!calculated || calculated.gpa === undefined) { 
      console.error(`Skipping semester ${semesterKey} due to GPA calculation failure`);
      return;
    }

    updatedMarks[semesterKey] = { 
      ...marks[semesterKey], 
      gpa: calculated.gpa, 
      overallStatus: calculated.overallStatus 
    };
  });

  const formattedSemesters = Object.keys(updatedMarks).map(semesterKey => {
    const semesterNumber = parseInt(semesterKey.match(/\d+/)?.[0], 10);
    if (isNaN(semesterNumber)) {
      console.warn(`Unexpected semester format: ${semesterKey}`);
      return null;
    }

    return {
      semesterNumber,
      gpa: semesterGpa[semesterKey] || "--",
      overallStatus: semesterStatus[semesterKey] || "Fail",
      subjects: Object.entries(updatedMarks[semesterKey])
        .filter(([subjectName]) => subjectName !== "gpa" && subjectName !== "overallStatus")
        .map(([subjectName, markDetails]) => ({
          subjectName,
          internal: markDetails.internal || 0,
          theory: markDetails.theory || 0,
          practical: markDetails.practical || 0
        }))
    };
  }).filter(Boolean); // Remove null values from failed semester parsing

  if (formattedSemesters.length === 0) {
    alert("No valid semesters to save. Check GPA calculations.");
    return;
  }

  try {
    const response = await fetch("http://localhost:5000/api/result/saveOrUpdate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        generatedId: selectedStudent.generatedId,
        studentName: selectedStudent.firstName,
        course: selectedStudent.course,
        semesters: formattedSemesters,
      }),
    });

    const responseData = await response.json();

    if (!response.ok) {
      console.error("Backend Error Response:", responseData);
      throw new Error(responseData.message || `Failed to save marks. Status: ${response.status}`);
    }

    // ✅ Save data to localStorage after successful API response
    localStorage.setItem(`marks_${selectedStudent.generatedId}`, JSON.stringify(updatedMarks));

    alert(responseData.message);
  } catch (error) {
    console.error("Error saving marks:", error);
    alert("Failed to save marks. Check console for details.");
  }
};


  
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
    <h1 className="text-3xl font-bold text-gray-800 mb-4">Results</h1>
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
    <select
  value={selectedSemester}
  onChange={(e) => setSelectedSemester(e.target.value)}
>
  <option value="">Select Semester</option>
  <option value="1">Semester 1</option>
  <option value="2">Semester 2</option>
  <option value="3">Semester 3</option>
  <option value="4">Semester 4</option>
  <option value="5">Semester 5</option>
  <option value="6">Semester 6</option>
</select>
  
    {selectedStudent && (
      <div className="mt-6 w-3/4 bg-white shadow rounded p-4">
        <h2 className="text-xl font-bold text-gray-700">
          Subjects for {selectedStudent.firstName} {selectedStudent.middleName} {selectedStudent.lastName}
        </h2>

        {Object.entries(subjects).map(([semester, subjectList]) => (
          <div key={semester} className="mt-6 border border-gray-300 p-4 rounded">
            <h3 className="text-lg font-semibold text-gray-800">Semester: {semester}</h3>
            <table className="w-full mt-2 border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border p-2">Subject</th>
                  <th className="border p-2">Internal</th>
                  <th className="border p-2">Theory</th>
                  {['B.Sc IT', 'B.Sc Plain'].includes(selectedStudent.course) && <th className="border p-2">Practical</th>}
                </tr>
              </thead>
              <tbody>
                {subjectList.map((subject) => (
                  <tr key={subject} className="border">
                    <td className="border p-2">{subject}</td>
                    <td className="border p-2">
                      <input type="number" className="w-16 p-1 border text-center" onChange={(e) => handleMarksChange(semester, subject, 'internal', e.target.value)} />
                    </td>
                    <td className="border p-2">
                      <input type="number" className="w-16 p-1 border text-center" onChange={(e) => handleMarksChange(semester, subject, 'theory', e.target.value)} />
                    </td>
                    {['B.Sc IT', 'B.Sc Plain'].includes(selectedStudent.course) && (
                      <td className="border p-2">
                        <input type="number" className="w-16 p-1 border text-center" onChange={(e) => handleMarksChange(semester, subject, 'practical', e.target.value)} />
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex flex-col items-center mt-4">
              <button
                className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 mb-2"
                onClick={() => calculateGpa(semester)}
              >
                Calculate GPA
              </button>
              <div className="p-4 bg-gray-200 rounded text-center w-1/2">
                <h3 className="text-lg font-semibold">
                  Overall Status: <span className={semesterStatus[semester] === "Pass" ? "text-green-600" : "text-red-600"}>{semesterStatus[semester] || "N/A"}</span>
                </h3>
                <h3 className="text-lg font-semibold">
                  GPA: <span className="text-blue-600">{semesterGpa[semester] || "N/A"}</span>
                </h3>
              </div>
              <button
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 mt-2"
                onClick={() => saveMarksToDatabase(semester)}
              >
                Save Marks
              </button>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>

);

};

export default UpdateResults;
