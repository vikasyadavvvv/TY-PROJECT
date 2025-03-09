import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const subjectsByCourse = {
  BCom: {
    sem1: ["Accounting", "Business Law", "Economics", "Marketing", "Taxation", "Finance", "Management"],
    sem2: ["Corporate Law", "Auditing", "Microeconomics", "HR Management", "Business Statistics", "Banking", "Entrepreneurship"],
    sem3: ["Financial Management", "Business Ethics", "Cost Accounting", "Supply Chain", "Investment", "E-commerce", "Risk Management"],
    sem4: ["International Trade", "Management Accounting", "Organizational Behavior", "Public Relations", "Financial Markets", "Corporate Finance", "Leadership"],
    sem5: ["Corporate Governance", "Derivatives", "Strategic Management", "Project Finance", "Business Analytics", "Advertising", "Economic Policy"],
    sem6: ["Portfolio Management", "Wealth Management", "Financial Planning", "Retail Management", "International Finance", "E-Business", "Consumer Behavior"],
  },
 "B.Sc IT": {
    sem1: ["Programming principles with C", "Digital logic and applications", "Fundamentals of database systems", "Computational logic and discrete structures", "Technical communication skills", "Statistics and probability", "Introduction to operating systems"],
    sem2: ["Object-oriented programming with C++", "Microprocessor and microcontrollers", "Web development fundamentals", "Numerical methods and analysis", "Green computing", "Python programming", "Introduction to machine learning"],
    sem3: ["Python for data science", "Advanced data structures", "Computer networks and security", "Relational database management", "Applied mathematics", "Mobile application development", "Cryptography and network security"],
    sem4: ["Core Java development", "Embedded systems and IoT", "Statistical computing techniques", "Software engineering principles", "Computer graphics and multimedia", "Game development basics", "Software testing methodologies"],
    sem5: ["Project management in IT", "Internet of things applications", "Modern web frameworks", "Artificial intelligence concepts", "Enterprise Java applications", "Blockchain technology", "Augmented and virtual reality"],
    sem6: ["Software quality assurance", "Cybersecurity and ethical hacking", "Business intelligence and analytics", "Geographic information systems", "IT service management and governance", "AI in healthcare and finance"]
}
,
  BBA: {
    sem1: ["Principles of Management", "Financial Accounting", "Business Statistics", "Business Communication", "Microeconomics", "IT for Management", "Marketing Basics"],
    sem2: ["Business Law", "Organizational Behavior", "Macroeconomics", "Operations Research", "Cost Accounting", "Consumer Behavior", "Human Resource Management"],
    sem3: ["Marketing Management", "Financial Management", "International Business", "Research Methodology", "Entrepreneurship", "Supply Chain Management", "Retail Management"],
    sem4: ["Investment Analysis", "Corporate Governance", "Advertising & Promotion", "E-Commerce", "Strategic Management", "Financial Reporting", "Leadership"],
    sem5: ["Project Management", "Mergers & Acquisitions", "Financial Modeling", "Banking & Insurance", "Data Analytics", "Brand Management", "International Trade"],
    sem6: ["Business Ethics", "Risk Management", "Digital Marketing", "Service Marketing", "Consumer Psychology", "Business Analytics", "Corporate Finance"],
  },
  "B.Sc Plain": {
    sem1: ["Physics I", "Chemistry I", "Mathematics I", "Biology I", "Environmental Science", "Computer Science Basics", "Statistics I"],
    sem2: ["Physics II", "Chemistry II", "Mathematics II", "Biology II", "Organic Chemistry", "Programming Basics", "Geology"],
    sem3: ["Thermodynamics", "Quantum Mechanics", "Linear Algebra", "Microbiology", "Genetics", "Physical Chemistry", "Astronomy"],
    sem4: ["Electromagnetism", "Analytical Chemistry", "Probability & Statistics", "Evolutionary Biology", "Differential Equations", "Scientific Computing", "Botany"],
    sem5: ["Nuclear Physics", "Inorganic Chemistry", "Number Theory", "Ecology", "Biochemistry", "Topology", "Astrophysics"],
    sem6: ["Solid State Physics", "Chemical Kinetics", "Complex Analysis", "Biophysics", "Molecular Biology", "Mathematical Physics", "Zoology"],
  },
};





const ApplySubject = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const studentDetails = location.state?.studentDetails;

  const [selectedSubjects, setSelectedSubjects] = useState({});
  const [currentSemester, setCurrentSemester] = useState(1);
  const [isSaved, setIsSaved] = useState(false);
  const [clearedSubjects, setClearedSubjects] = useState({});
  const [isEligible, setIsEligible] = useState(true);
  const [alreadySelectedSemesters, setAlreadySelectedSemesters] = useState([]);

  useEffect(() => {
    if (!studentDetails?.generatedId) return;
  
    const fetchData = async () => {
      try {
        // ✅ Fetch Cleared Subjects
        const resultRes = await fetch(`http://localhost:5000/api/result/${studentDetails.generatedId}`);
        if (!resultRes.ok) throw new Error(`Failed to fetch results: ${resultRes.status}`);
        const resultData = await resultRes.json();
        const clearedSubjects = resultData?.clearedSubjects || {}; // ✅ Fallback for missing data
        setClearedSubjects(clearedSubjects);
        checkEligibility(clearedSubjects);
  
        // ✅ Check all applied semesters in a loop
        const appliedSemesters = new Set();
        for (let sem = 1; sem <= 6; sem++) {
          const subjectsRes = await fetch("http://localhost:5000/api/subjects/checkSelectedSubjects", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              studentId: studentDetails._id,
              semester: `sem${sem}`,
            }),
          });
  
          if (!subjectsRes.ok) throw new Error(`Failed to fetch subjects for sem${sem}: ${subjectsRes.status}`);
          const subjectsData = await subjectsRes.json();
  
          if (subjectsData?.alreadySelected) {
            appliedSemesters.add(`sem${sem}`);
          }
        }
  
        setAlreadySelectedSemesters(Array.from(appliedSemesters));
        determineNextSemester(appliedSemesters);
  
      } catch (error) {
        console.error("❌ Error fetching data:", error);
      }
    };
  
    fetchData();
  }, [studentDetails]); // ✅ Runs only when student details change
  
  // ✅ Determine the next available semester
  const determineNextSemester = (appliedSemesters) => {
    console.log("📌 Already selected semesters:", appliedSemesters);
  
    for (let sem = 1; sem <= 6; sem++) {
      if (!appliedSemesters.has(`sem${sem}`)) {
        console.log("✅ Next semester to apply:", sem);
        setCurrentSemester(sem);
        return;
      }
    }
  
    console.log("🎉 All semesters applied! Setting to 7...");
    setCurrentSemester(7); // ✅ If all semesters are already applied
  };
  
  // Check if the student is eligible based on cleared subjects
  const checkEligibility = (clearedSubjects) => {
    if (!clearedSubjects || typeof clearedSubjects !== "object") return;

    let eligible = true;
    Object.keys(clearedSubjects).forEach((semester) => {
      const subjects = clearedSubjects[semester];
      let failedSubjects = subjects.filter(
        (subj) => subj.internal < 7 || subj.theory < 28 || subj.practical < 20
      ).length;

      if (failedSubjects > 2) eligible = false;
    });

    setIsEligible(eligible);
  };

  if (!studentDetails) return <p>No student details provided.</p>;

  const course = studentDetails.course;
  if (!subjectsByCourse[course]) return <p>Invalid course selected.</p>;

  const handleSubjectChange = (semester, subject) => {
    setSelectedSubjects((prev) => {
      const selectedForSemester = prev[semester] || [];

      if (selectedForSemester.includes(subject)) {
        return { ...prev, [semester]: selectedForSemester.filter((s) => s !== subject) };
      } else if (selectedForSemester.length < 5) {
        return { ...prev, [semester]: [...selectedForSemester, subject] };
      }
      return prev;
    });
  };

  const handleSave = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/subjects/updateSubjects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          studentId: studentDetails._id,
          selectedSubjects,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setIsSaved(true);
        const updatedSemesters = new Set([...alreadySelectedSemesters, `sem${currentSemester}`]);
        setAlreadySelectedSemesters(Array.from(updatedSemesters));
        determineNextSemester();
      } else {
        console.error("❌ Error updating subjects:", data.message);
      }
    } catch (error) {
      console.error("❌ Error saving subjects:", error);
    }
  };

  console.log("🎯 Checking before rendering:", { currentSemester, alreadySelectedSemesters });

  if (currentSemester > 6) {
    return (
      <div className="text-center">
        <h2 className="text-3xl font-bold text-green-600">🎉 Thank you for applying! 🎉</h2>
        <p className="text-lg mt-4">You have successfully applied for all semesters.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h2 className="text-3xl font-bold mb-6">Apply for Subjects</h2>

      {currentSemester <= 6 ? (
        <>
          <h3 className="text-xl font-semibold">{`Semester ${currentSemester}`}</h3>

          {!isEligible && (
            <p className="text-red-500">Not eligible for Semester {currentSemester}</p>
          )}

          <div className="grid grid-cols-2 gap-4 mt-4">
            {subjectsByCourse[course]?.[`sem${currentSemester}`]?.map((subject) => (
              <label key={subject} className="flex items-center space-x-2 bg-white p-2 rounded-lg shadow-md">
                <input
                  type="checkbox"
                  checked={selectedSubjects[`sem${currentSemester}`]?.includes(subject) || false}
                  onChange={() => handleSubjectChange(`sem${currentSemester}`, subject)}
                  className="w-5 h-5 accent-green-500"
                />
                <span className="text-gray-700">{subject}</span>
              </label>
            ))}
          </div>

          <button
            onClick={handleSave}
            className="mt-6 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none"
          >
            Save
          </button>

          {isSaved && (
            <p className="mt-4 text-green-500 font-semibold">Subjects saved successfully!</p>
          )}
        </>
      ) : (
        <div className="text-center mt-10">
          <h3 className="text-2xl font-semibold text-green-600">Thank you for applying!</h3>
          <p className="text-gray-700 mt-2">You have selected subjects for all semesters.</p>
        </div>
      )}
    </div>
  );
};

export default ApplySubject;
