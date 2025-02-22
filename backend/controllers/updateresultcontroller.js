const Result = require("../models/resultmodel");

// Save or Update Student Results
exports.saveOrUpdateResults = async (req, res) => {
  try {
    const { generatedId, studentName, course, subjects, gpa, overallStatus } = req.body;

    let result = await Result.findOne({ generatedId });

    if (result) {
      result.subjects = subjects;
      result.gpa = gpa;
      result.overallStatus = overallStatus;
      await result.save();
      return res.status(200).json({ message: "Results updated successfully" });
    }

    result = new Result({ generatedId, studentName, course, subjects, gpa, overallStatus });
    await result.save();
    res.status(201).json({ message: "Results saved successfully" });

  } catch (error) {
    res.status(500).json({ error: "Error saving results", details: error.message });
  }
};

// Get Student Results by Generated ID
exports.getStudentResults = async (req, res) => {
  try {
    const { generatedId } = req.params;
    const result = await Result.findOne({ generatedId });

    if (!result) {
      return res.status(404).json({ message: "Results not found" });
    }

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Error fetching results", details: error.message });
  }
};
