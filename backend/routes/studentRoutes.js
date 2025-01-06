const express = require("express");
const router = express.Router();
const { registerStudent, getAllStudents } = require("../controllers/studentController");
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
// Import the function to get all students from the database

// Route to get all students
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

module.exports = router;
