const mongoose = require("mongoose");

// Define the student schema
const studentSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
    },
    middleName: {
      type: String,
      required: false,
      default: "", // Default empty if not provided
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: [/\S+@\S+\.\S+/, "Please enter a valid email address"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      match: [/^\d{10}$/, "Please enter a valid 10-digit phone number"],
    },
    dob: {
      type: Date,
      required: [true, "Date of birth is required"],
    },
    address: {
      type: String,
      required: [true, "Address is required"],
      minlength: [10, "Address must be at least 10 characters long"],
    },
    course: {
      type: String,
      required: [true, "Course is required"],
    },
    generatedId: {
      type: String,
      required: [true, "Generated ID is required"],
      unique: true,
    },
    twelfthMarksheet: {
      type: String,
      required: false,
      default: "",
    },
    aadharCard: {
      type: String,
      required: false,
      default: "",
    },
    passportPhoto: {
      type: String,
      required: false,
      default: "",
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt timestamps
  }
);

// Create the Student model from the schema
const Student = mongoose.model("Student", studentSchema);

module.exports = Student;

