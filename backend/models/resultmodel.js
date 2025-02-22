const mongoose = require("mongoose");

const SubjectSchema = new mongoose.Schema({
  subjectName: { type: String, required: true },
  internal: { type: Number, required: true },
  theory: { type: Number, required: true },
  practical: { type: Number, required: true },
});

const ResultSchema = new mongoose.Schema({
  generatedId: { type: String, required: true, unique: true },
  studentName: { type: String, required: true },
  course: { type: String, required: true },
  subjects: {
    type: Map,
    of: [SubjectSchema], // Each semester (key) holds an array of SubjectSchema objects
    required: true,
  },
  gpa: { type: String, default: "--" },
  overallStatus: { type: String, default: "Fail" },
});

module.exports = mongoose.model("Result", ResultSchema);
