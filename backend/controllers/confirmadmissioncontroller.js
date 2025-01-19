const Student = require("../models/StudentModel");

// Function to confirm admission
const confirmAdmission = async (req, res) => {
  try {
    const { studentId } = req.params;

    // Validate studentId
    if (!studentId) {
      return res.status(400).json({ message: "Student ID is required" });
    }

    // Find the student by their generated ID
    const student = await Student.findOne({ generatedId: studentId });

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    // Update the confirmedAdmission field to true
    student.confirmedAdmission = true;
    await student.save();

    res.status(200).json({ message: "Admission confirmed successfully", student });
  } catch (error) {
    console.error("Error confirming admission:", error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

// Function to reject admission
const rejectAdmission = async (req, res) => {
  try {
    const { studentId } = req.params;

    // Validate studentId
    if (!studentId) {
      return res.status(400).json({ message: "Student ID is required" });
    }

    // Find the student by their generated ID
    const student = await Student.findOne({ generatedId: studentId });

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    // Update the confirmedAdmission field to false (rejecting admission)
    student.confirmedAdmission = false;
    await student.save();

    // Optionally: Delete the student record from the database (uncomment if needed)
    // await student.remove();

    res.status(200).json({ message: "Admission rejected successfully", student });
  } catch (error) {
    console.error("Error rejecting admission:", error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

// Function to handle student login
const loginStudent = async (req, res) => {
  try {
    const { studentId, phone } = req.body;

    // Validate inputs
    if (!studentId || !phone) {
      return res.status(400).json({ message: "Student ID and phone number are required" });
    }

    // Find the student by their generated ID
    const student = await Student.findOne({ generatedId: studentId });

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    // Check if the phone number matches
    if (student.phone !== phone) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // If the student is confirmed
    if (!student.confirmedAdmission) {
      return res.status(400).json({ message: "Admission not confirmed yet" });
    }

    // Successful login
    res.status(200).json({ message: "Login successful", student });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

module.exports = { confirmAdmission, rejectAdmission, loginStudent };
