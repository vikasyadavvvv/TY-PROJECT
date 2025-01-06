const Student = require("../models/StudentModel");
const cloudinary = require("cloudinary").v2;

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Function to find and return all students

const getAllStudents = async () => {
  try {
    const students = await Student.find(); // Fetch all students from the database
    return students;
  } catch (error) {
    console.error("Error fetching students:", error);
    throw new Error("Failed to fetch students");
  }
};


// Register student function (existing)
const registerStudent = async (req, res) => {
  try {
    const {
      firstName,
      middleName,
      lastName,
      email,
      phone,
      dob,
      address,
      course,
    } = req.body;

    const { passportPhoto, twelfthMarksheet, aadharCard } = req.files;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !dob || !address || !course) {
      return res.status(400).json({ message: "All required fields must be provided." });
    }

    // Validate file uploads
    if (!passportPhoto || !twelfthMarksheet || !aadharCard) {
      return res.status(400).json({ message: "All required files (passportPhoto, twelfthMarksheet, aadharCard) must be uploaded." });
    }

    // Upload files to Cloudinary
    const passportPhotoResult = await cloudinary.uploader.upload(
      passportPhoto[0].path, { folder: "student_uploads/passportPhotos" }
    );

    const twelfthMarksheetResult = await cloudinary.uploader.upload(
      twelfthMarksheet[0].path, { folder: "student_uploads/twelfthMarksheets" }
    );

    const aadharCardResult = await cloudinary.uploader.upload(
      aadharCard[0].path, { folder: "student_uploads/aadharCards" }
    );

    // Extract URLs from Cloudinary results
    const passportPhotoUrl = passportPhotoResult.secure_url;
    const twelfthMarksheetUrl = twelfthMarksheetResult.secure_url;
    const aadharCardUrl = aadharCardResult.secure_url;

    // Generate student ID based on the course
    const generatedId = generateStudentId(course);

    // Create a new student document
    const newStudent = new Student({
      firstName,
      middleName,
      lastName,
      email,
      phone,
      dob,
      address,
      course,
      generatedId,
      passportPhoto: passportPhotoUrl,
      twelfthMarksheet: twelfthMarksheetUrl,
      aadharCard: aadharCardUrl,
    });

    // Save to database
    await newStudent.save();

    res.status(201).json({
      message: "Student registered successfully!",
      student: newStudent,
    });
  } catch (err) {
    console.error("Error registering student:", err);
    res.status(500).json({ message: "Internal server error", error: err.message });
  }
};

// Helper function to generate student ID based on course
const generateStudentId = (course) => {
  const coursePrefix = {
    "B.Sc IT": "IT",
    "B.Com": "BC",
    "B.Sc Plain": "SC",
    "BBI": "BI",
    "BBA": "BA",
  };

  const prefix = coursePrefix[course] || "UNKNOWN";
  const randomDigits = Math.floor(1000 + Math.random() * 9000); // Generate a random 4-digit number
  return `${prefix}${randomDigits}`;
};

module.exports = { registerStudent, getAllStudents };
