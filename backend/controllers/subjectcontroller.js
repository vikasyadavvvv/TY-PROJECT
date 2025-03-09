const Student = require("../models/StudentModel"); // Adjust path as necessary

// ✅ Controller to FETCH subjects based on generatedId
const getSubjects = async (req, res) => {
  try {
    const { generatedId } = req.body;

    if (!generatedId) {
      return res.status(400).json({ message: "Generated ID is required" });
    }

    const student = await Student.findOne({ generatedId });

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json({
      message: "Subjects fetched successfully",
      subjects: student.subjects || {},
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
  try {
    console.log("Received request data:", req.body);

    const { studentId, selectedSubjects } = req.body; // Changed from generatedId to studentId

    if (!studentId) {
      return res.status(400).json({ message: "Student ID is required" });
    }

    if (!selectedSubjects || typeof selectedSubjects !== "object") {
      console.error("Invalid request data:", req.body);
      return res.status(400).json({ message: "Selected subjects must be an object" });
    }

    const student = await Student.findById(studentId); // Using findById instead of generatedId

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    console.log("Existing student subjects:", student.subjects);

    // Ensure that selectedSubjects only contains arrays
    for (const semester in selectedSubjects) {
      if (!Array.isArray(selectedSubjects[semester])) {
        return res.status(400).json({
          message: `Subjects for ${semester} must be an array`,
        });
      }
    }

    // Merge existing subjects with new ones
    student.subjects = new Map([...student.subjects, ...Object.entries(selectedSubjects)]);
    await student.save();

    console.log("Updated student subjects:", student.subjects);

    res.status(200).json({
      message: "Subjects updated successfully",
      subjects: student.subjects,
    });
  } catch (error) {
    console.error("Error updating subjects:", error);
    res.status(500).json({
      message: "Error updating subjects",
      error: error.message,
    });
  }
};

// ✅ Controller to CHECK if subjects are already selected
const checkSelectedSubjects = async (req, res) => {
  try {
    const { studentId, semester } = req.body;

    if (!studentId || !semester) {
      return res.status(400).json({ message: "Student ID and semester are required" });
    }

    const student = await Student.findById(studentId).lean();

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    // Ensure student has a subjects field
    if (!student.subjects || !student.subjects[semester]) {
      return res.status(200).json({
        message: `No subjects selected for ${semester}`,
        alreadySelected: false,
        subjects: [],
      });
    }

    const alreadySelected = student.subjects[semester].length > 0;

    res.status(200).json({
      message: alreadySelected
        ? `Subjects for ${semester} are already selected`
        : `No subjects selected for ${semester}`,
      alreadySelected,
      subjects: student.subjects[semester],
    });
  } catch (error) {
    console.error("❌ Error checking selected subjects:", error);
    res.status(500).json({
      message: "Internal server error while checking selected subjects",
      error: error.message,
    });
  }
};



module.exports = {
  getSubjects,
  updateSubjects,
  checkSelectedSubjects
};

