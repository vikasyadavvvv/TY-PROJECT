import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ViewResult = () => {
  const location = useLocation();
  const generatedId = location.state?.generatedId;
  const [semesters, setSemesters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch results function
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
      setError(error.message || "Error fetching results");
      setSemesters([]);
    } finally {
      setLoading(false);
    }
  };

  // UseEffect to fetch results on component mount
  useEffect(() => {
    if (generatedId) {
      fetchSubjects(generatedId);
    } else {
      setError("Generated ID is missing.");
      setLoading(false);
    }
  }, [generatedId]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-green-600 mb-4">Student Result</h2>

        {loading && <p className="text-blue-500">Fetching data...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {!loading && !error && semesters.length > 0 ? (
          <div className="space-y-6">
            {semesters.map((sem, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Semester {sem.semesterNumber} - GPA: {sem.gpa}
                </h3>
                <p className={`font-bold ${sem.overallStatus === 'Pass' ? 'text-green-600' : 'text-red-500'}`}>
                  {sem.overallStatus}
                </p>

                {/* Subject Marks Table */}
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 shadow-md rounded-lg">
                    <thead>
                      <tr className="bg-gray-200 text-gray-700">
                        <th className="border border-gray-300 px-4 py-2 text-left">Subject</th>
                        <th className="border border-gray-300 px-4 py-2">Internal</th>
                        <th className="border border-gray-300 px-4 py-2">Theory</th>
                        <th className="border border-gray-300 px-4 py-2">Practical</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sem.subjects.map((subject, subIndex) => (
                        <tr key={subIndex} className="text-gray-800 odd:bg-gray-100 even:bg-white">
                          <td className="border border-gray-300 px-4 py-2 text-left">{subject.subjectName}</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">{subject.internal}</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">{subject.theory}</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">{subject.practical}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        ) : (
          !loading && <p className="text-gray-700">No result found.</p>
        )}
      </div>
    </div>
  );
};

export default ViewResult;
