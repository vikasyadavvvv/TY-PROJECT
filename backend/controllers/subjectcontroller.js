const Student = require("../models/StudentModel"); // Adjust path as necessary

// ✅ Controller to FETCH subjects based on generatedId
const getSubjects = async (req, res) => {
  const { generatedId } = req.body; // Use generatedId in the request body

  try {
    // Find student by generatedId (assuming generatedId is unique)
    const student = await Student.findOne({ generatedId });

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    // Send back the subjects, assuming subjects is an object with semester keys and subject lists as values
    res.status(200).json({
      message: "Subjects fetched successfully",
      subjects: student.subjects || {}, // Ensure this matches your schema
    });
  } catch (error) {
    console.error("Error fetching subjects:", error);
    res.status(500).json({
      message: "Error fetching subjects",
      error: error.message,
    });
  }
};

// ✅ Controller to UPDATE subjects for a student
const updateSubjects = async (req, res) => {
  const { studentId, selectedSubjects } = req.body; // Expecting { semester, subjectList }

  try {
    // Find the student
    const student = await Student.findById(studentId);

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    // Update the subjects while maintaining structure
    student.subjects = selectedSubjects; // Should be an array of { semester, subjectList }
    await student.save();

    // Return the updated student
    res.status(200).json({
      message: "Subjects updated successfully",
      student,
    });
  } catch (error) {
    console.error("Error updating subjects:", error);
    res.status(500).json({
      message: "Error updating subjects",
      error: error.message,
    });
  }
}
module.exports = {
  getSubjects,
  updateSubjects,
};
