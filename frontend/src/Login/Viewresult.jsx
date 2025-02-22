import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ViewResult = () => {
  const location = useLocation();
  const generatedId = location.state?.generatedId;
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResult = async () => {
      if (!generatedId) {
        setError("Generated ID is missing.");
        setLoading(false);
        return;
      }

      try {
        console.log(`Fetching from: http://localhost:5000/api/result/${generatedId}`);
        const response = await fetch(`http://localhost:5000/api/result/${generatedId}`);

        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        console.log("Fetched Data:", data);
        setResult(data);
      } catch (err) {
        console.error("Error fetching results:", err);
        setError(err.message || "Error fetching results");
      } finally {
        setLoading(false);
      }
    };

    fetchResult();
  }, [generatedId]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-green-600 mb-4">Student Result</h2>

        {loading && <p className="text-blue-500">Fetching data...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {!loading && !error && result ? (
          <div className="space-y-6">
            {/* Student Information */}
            <div className="text-lg font-semibold">
              <p>Student Name: <span className="font-normal">{result.studentName}</span></p>
              <p>Course: <span className="font-normal">{result.course}</span></p>
              <p>GPA: <span className="font-normal">{result.gpa}</span></p>
              <p>Overall Status: <span className={`font-bold ${result.overallStatus === 'Pass' ? 'text-green-600' : 'text-red-500'}`}>
                {result.overallStatus}
              </span></p>
            </div>

            {/* Subject Marks Table */}
            <div className="overflow-x-auto">
              {Object.entries(result.subjects || {}).map(([sem, subjects]) => (
                <div key={sem} className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Semester {sem}</h3>
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
                      {subjects.map((subject, index) => (
                        <tr key={index} className="text-gray-800 odd:bg-gray-100 even:bg-white">
                          <td className="border border-gray-300 px-4 py-2 text-left">{subject.subjectName}</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">{subject.internal}</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">{subject.theory}</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">{subject.practical}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          </div>
        ) : (
          !loading && <p className="text-gray-700">No result found.</p>
        )}
      </div>
    </div>
  );
};

export default ViewResult;



