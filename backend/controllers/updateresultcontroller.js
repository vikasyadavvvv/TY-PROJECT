const Result = require("../models/resultmodel");

// 📌 Save or Update Student Results
exports.saveOrUpdateResults = async (req, res) => {
  try {
    console.log("📥 Received Request Body:", JSON.stringify(req.body, null, 2));

    const { generatedId, studentName, course, semesters } = req.body;

    if (!generatedId || !Array.isArray(semesters) || semesters.length === 0) {
      return res.status(400).json({ message: "❌ Missing required fields or incorrect data format." });
    }

    let existingResult = await Result.findOne({ generatedId });

    if (!existingResult) {
      console.log("🆕 Creating new result...");

      const newResult = new Result({
        generatedId,
        studentName: studentName || "Unknown",
        course: course || "Unknown",
        semesters: semesters.map(sem => ({
          semesterNumber: sem.semesterNumber,
          gpa: sem.gpa || "--",
          overallStatus: sem.overallStatus || "Fail",
          subjects: sem.subjects.map(sub => ({
            subjectName: sub.subjectName,
            internal: sub.internal || 0,
            theory: sub.theory || 0,
            practical: sub.practical || 0,
          })),
        })),
      });

      await newResult.save();
      return res.status(200).json({ message: "✅ Result saved successfully!", result: newResult });
    }

    console.log("🔄 Updating existing result...");

    if (studentName) existingResult.studentName = studentName;
    if (course) existingResult.course = course;

    semesters.forEach((newSem) => {
      const existingSemIndex = existingResult.semesters.findIndex(
        (sem) => sem.semesterNumber === newSem.semesterNumber
      );

      if (existingSemIndex !== -1) {
        console.log(`🔄 Updating semester ${newSem.semesterNumber}...`);
        
        let existingSem = existingResult.semesters[existingSemIndex];

        // Only update fields that are provided
        existingSem.gpa = newSem.gpa || existingSem.gpa;
        existingSem.overallStatus = newSem.overallStatus || existingSem.overallStatus;

        newSem.subjects.forEach((newSub) => {
          const existingSubIndex = existingSem.subjects.findIndex(
            (sub) => sub.subjectName === newSub.subjectName
          );

          if (existingSubIndex !== -1) {
            console.log(`🔄 Updating subject ${newSub.subjectName} in semester ${newSem.semesterNumber}`);
            let existingSub = existingSem.subjects[existingSubIndex];

            existingSub.internal = newSub.internal ?? existingSub.internal;
            existingSub.theory = newSub.theory ?? existingSub.theory;
            existingSub.practical = newSub.practical ?? existingSub.practical;
          } else {
            console.log(`➕ Adding new subject ${newSub.subjectName} in semester ${newSem.semesterNumber}`);
            existingSem.subjects.push({
              subjectName: newSub.subjectName,
              internal: newSub.internal || 0,
              theory: newSub.theory || 0,
              practical: newSub.practical || 0,
            });
          }
        });

      } else {
        console.log(`➕ Adding new semester ${newSem.semesterNumber}...`);
        existingResult.semesters.push({
          semesterNumber: newSem.semesterNumber,
          gpa: newSem.gpa || "--",
          overallStatus: newSem.overallStatus || "Fail",
          subjects: newSem.subjects.map((sub) => ({
            subjectName: sub.subjectName,
            internal: sub.internal || 0,
            theory: sub.theory || 0,
            practical: sub.practical || 0,
          })),
        });
      }
    });

    await existingResult.save();
    console.log("✅ Successfully updated marks!");

    return res.status(200).json({ message: "✅ Result updated successfully!", result: existingResult });

  } catch (error) {
    console.error("❌ Error saving results:", error);
    return res.status(500).json({ message: "Internal Server Error", details: error.message });
  }
};


// 📌 Get Student Results by Generated ID
exports.getStudentResults = async (req, res) => {
  try {
    const { generatedId } = req.params;

    if (!generatedId) {
      return res.status(400).json({ message: "❌ Missing generated ID." });
    }

    const result = await Result.findOne({ generatedId });

    if (!result) {
      return res.status(404).json({ message: "❌ Results not found." });
    }

    // ✅ Structure data with GPA, Overall Status, and Semester details
    const formattedResults = result.semesters.map(sem => ({
      semesterNumber: sem.semesterNumber,
      gpa: sem.gpa || "--",
      overallStatus: sem.overallStatus || "Fail",
      subjects: sem.subjects.map(subj => ({
        subjectName: subj.subjectName,
        internal: subj.internal || 0,
        theory: subj.theory || 0,
        practical: subj.practical || 0,
      })),
    }));

    if (formattedResults.length === 0) {
      return res.status(404).json({ message: "❌ No semester records found." });
    }

    return res.status(200).json({ semesters: formattedResults });

  } catch (error) {
    console.error("❌ Error fetching results:", error);
    return res.status(500).json({ message: "Internal server error", details: error.message });
  }
};

// 📌 Update Subject Marks for a Specific Semester
exports.updateMarks = async (req, res) => {
  try {
    console.log("📥 Received Request Body:", req.body); 

    const { semesterNumber, subjects, gpa, overallStatus } = req.body;
    const { generatedId } = req.params; 

    console.log("📌 Debug - semesterNumber:", semesterNumber);
    console.log("📌 Debug - subjects:", subjects);
    console.log("📌 Debug - gpa:", gpa);
    console.log("📌 Debug - overallStatus:", overallStatus);
    console.log("📌 Debug - generatedId:", generatedId);

    if (!generatedId || !semesterNumber || !Array.isArray(subjects) || subjects.length === 0) {
      console.log("❌ Missing required fields or incorrect format.");
      return res.status(400).json({ message: "❌ Missing required fields or incorrect data format." });
    }

    const result = await Result.findOne({ generatedId });

    if (!result) {
      console.log(`❌ No student found with ID: ${generatedId}`);
      return res.status(404).json({ message: "❌ Student record not found." });
    }

    const semNum = parseInt(semesterNumber, 10); // Fixed: No need for replace()

    console.log(`🔎 Searching for semester ${semNum} in student record...`);

    const semesterIndex = result.semesters.findIndex((sem) => sem.semesterNumber === semNum);

    if (semesterIndex !== -1) {
      console.log(`🔄 Updating semester ${semNum}...`);
      result.semesters[semesterIndex] = {
        semesterNumber: semNum,
        subjects: subjects.map((sub) => ({
          subjectName: sub.subjectName,
          internal: sub.internal || 0,
          theory: sub.theory || 0,
          practical: sub.practical || 0,
        })),
        gpa: gpa || "--",
        overallStatus: overallStatus || "Fail",
      };
    } else {
      console.log(`➕ Adding new semester ${semNum}...`);
      result.semesters.push({
        semesterNumber: semNum,
        subjects: subjects.map((sub) => ({
          subjectName: sub.subjectName,
          internal: sub.internal || 0,
          theory: sub.theory || 0,
          practical: sub.practical || 0,
        })),
        gpa: gpa || "--",
        overallStatus: overallStatus || "Fail",
      });
    }

    await result.save();
    console.log("✅ Successfully updated marks!");

    return res.status(200).json({ message: "✅ Marks updated successfully!", result });
  } catch (error) {
    console.error("❌ Error updating marks:", error);
    return res.status(500).json({ message: "Internal server error", details: error.message });
  }
};
