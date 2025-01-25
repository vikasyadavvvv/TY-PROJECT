const express = require("express");
const router = express.Router();
const { registerStudent, getAllStudents, getStudentByGeneratedId } = require("../controllers/studentController");
const { upload } = require("../Config/CloudinaryConfig"); // Import your Cloudinary and Multer configuration

// Middleware for handling file uploads
const uploadFiles = upload.fields([
  { name: "passportPhoto", maxCount: 1 }, // Field for passport photo (max 1 file)
  { name: "twelfthMarksheet", maxCount: 1 }, // Field for twelfth marksheet (max 1 file)
  { name: "aadharCard", maxCount: 1 }, // Field for Aadhaar card (max 1 file)
]);

// Route for student registration with file uploads
router.post("/register", uploadFiles, async (req, res) => {
  try {
    // Extract uploaded files
    const { passportPhoto, twelfthMarksheet, aadharCard } = req.files || {};

    // Validate uploaded files
    if (!passportPhoto || !twelfthMarksheet || !aadharCard) {
      return res.status(400).json({ error: "All required files must be uploaded." });
    }

    // Add file URLs to the request body for easier processing in the controller
    req.body.files = {
      passportPhoto: passportPhoto[0].path,
      twelfthMarksheet: twelfthMarksheet[0].path,
      aadharCard: aadharCard[0].path,
    };

    // Proceed with student registration logic
    await registerStudent(req, res);
  } catch (error) {
    console.error("Error during file upload or registration:", error);
    res.status(500).json({ error: "File upload or registration failed", details: error.message });
  }
});

// Route to fetch all student details
router.get("/", async (req, res) => {
  try {
    // Fetch students from the database
    const students = await getAllStudents();

    // Check if students are available
    if (students && students.length > 0) {
      // Return the list of students as JSON
      res.status(200).json(students);
    } else {
      // If no students are found, return a 404 status
      res.status(404).json({ message: "No students found" });
    }
  } catch (error) {
    // Log any error and send a 500 error response
    console.error("Error fetching students:", error);
    res.status(500).json({
      error: "Failed to fetch students",
      details: error.message,
    });
  }
});

// Route to get a student by their generatedId
router.get("/:studentId", async (req, res) => {
  try {
    const { studentId } = req.params; // Extract studentId from the URL parameter

    // Call the controller function to fetch the student by their ID
    const student = await getStudentByGeneratedId(req, res);

    // Since `getStudentByGeneratedId` already sends the response, no additional processing is needed here.
  } catch (error) {
    console.error("Error fetching student by studentId:", error);
    res.status(500).json({
      error: "Failed to fetch student by studentId",
      details: error.message,
    });
  }
});

module.exports = router;
