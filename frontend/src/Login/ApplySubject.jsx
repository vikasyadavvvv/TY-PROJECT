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
    sem1: ["Programming C", "Discrete Math", "Networking Basics", "Computer Fundamentals", "Database Management", "Statistics", "Operating Systems"],
    sem2: ["Data Structures", "Object-Oriented Programming", "Web Technologies", "Software Engineering", "Cyber Security", "Python Programming", "Data Science Basics"],
    sem3: ["Java Programming", "Computer Graphics", "Data Warehousing", "AI & ML Basics", "Computer Architecture", "Mobile Computing", "Network Security"],
    sem4: ["Cloud Computing", "Internet of Things", "Cryptography", "Big Data Analytics", "Distributed Systems", "Multimedia Systems", "Software Testing"],
    sem5: ["Machine Learning", "Blockchain Technology", "Deep Learning", "Parallel Computing", "Wireless Networks", "Robotic Process Automation", "AR/VR"],
    sem6: ["DevOps", "Cyber Laws", "Game Development", "Quantum Computing", "Ethical Hacking", "AI in Healthcare", "Natural Language Processing"],
  },
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

  useEffect(() => {
    if (studentDetails?.generatedId) {
      fetch(`http://localhost:5000/api/subjects/getSelectedSubjects/${studentDetails.generatedId}`)
        .then((res) => res.json())
        .then((data) => {
          setSelectedSubjects(data.selectedSubjects || {});
          determineStartingSemester(data.selectedSubjects || {});
        })
        .catch((error) => console.error("Error fetching selected subjects:", error));
    }
  }, [studentDetails]);

  const determineStartingSemester = (selectedSubjects) => {
    let nextSemester = 1;
    for (let sem = 1; sem <= Object.keys(subjectsByCourse[studentDetails.course]).length; sem++) {
      if (!selectedSubjects[`sem${sem}`] || selectedSubjects[`sem${sem}`].length < 5) {
        nextSemester = sem;
        break;
      }
    }
    setCurrentSemester(nextSemester);
  };

  useEffect(() => {
    if (studentDetails?.generatedId) {
      fetch(`http://localhost:5000/api/result/${studentDetails.generatedId}`)
        .then((res) => res.json())
        .then((data) => {
          setClearedSubjects(data.clearedSubjects || {});
          checkEligibility(data.clearedSubjects || {});
        })
        .catch((error) => console.error("Error fetching results:", error));
    }
  }, [studentDetails]);

  const checkEligibility = (clearedSubjects) => {
    if (currentSemester > 1) {
      const prevSemKey = `sem${currentSemester - 1}`;
      const passedSubjects = clearedSubjects[prevSemKey]?.length || 0;
      setIsEligible(passedSubjects >= 2);
    }
  };

  if (!studentDetails) {
    return <p>No student details provided.</p>;
  }

  const course = studentDetails.course;
  if (!subjectsByCourse[course]) {
    return <p>Invalid course selected.</p>;
  }

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

  const handleNextSemester = () => {
    checkEligibility(clearedSubjects);
    if (isEligible) {
      setCurrentSemester((prev) => prev + 1);
    }
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
      } else {
        console.error("Error updating subjects:", data.message);
      }
    } catch (error) {
      console.error("Error saving subjects:", error);
    }
  };

  const isCurrentSemesterComplete = selectedSubjects[`sem${currentSemester}`]?.length >= 5;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h2 className="text-3xl font-bold mb-6">Apply for Subjects</h2>
      <h3 className="text-xl font-semibold">{`Semester ${currentSemester}`}</h3>
      {!isEligible && <p className="text-red-500">Not eligible for Semester {currentSemester}</p>}
      <div className="grid grid-cols-2 gap-4 mt-4">
        {subjectsByCourse[course]?.[`sem${currentSemester}`]?.map((subject) => (
          <label key={subject} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={selectedSubjects[`sem${currentSemester}`]?.includes(subject) || false}
              onChange={() => handleSubjectChange(`sem${currentSemester}`, subject)}
              className="w-5 h-5"
            />
            <span>{subject}</span>
          </label>
        ))}
      </div>
      <button
        disabled={!isCurrentSemesterComplete || !isEligible}
        onClick={handleNextSemester}
        className={`mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none ${!isCurrentSemesterComplete || !isEligible ? "disabled:bg-gray-400" : ""}`}
      >
        Next Semester
      </button>
      <button
        onClick={handleSave}
        className="mt-6 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none"
      >
        Save
      </button>
      {isSaved && <p className="mt-4 text-green-500 font-semibold">Subjects saved successfully!</p>}
    </div>
  );
};

export default ApplySubject;
