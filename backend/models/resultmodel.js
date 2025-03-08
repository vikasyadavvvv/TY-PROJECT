const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
  subjectName: String,
  internal: Number,
  theory: Number,
  practical: Number,
});

const semesterSchema = new mongoose.Schema({
  semesterNumber: Number,
  gpa: { type: String, default: "--" }, // Ensure it's stored as a String
  overallStatus: { type: String, default: "Fail" }, // Ensure it's included
  subjects: [subjectSchema],
});

const resultSchema = new mongoose.Schema({
  generatedId: { type: String, required: true, unique: true },
  studentName: String,
  course: String,
  semesters: [semesterSchema],
});

module.exports = mongoose.model("Result", resultSchema);
