const Student = require('../models/StudentModel'); // Import Student model


// Controller function to handle marks entry
const saveMarks = async (req, res) => {
    try {
        console.log("Incoming Data:", JSON.stringify(req.body, null, 2));

        if (!req.body.generatedId) {
            return res.status(400).json({ message: "Generated ID is required" });
        }
        console.log("Generated ID:", req.body.generatedId);

        if (!req.body.subjects || !req.body.subjects.sem1) {
            return res.status(400).json({ message: "Subjects data is missing" });
        }

        // Check if student exists
        const student = await Student.findOne({ generatedId: req.body.generatedId });
        console.log("Student Found:", student);

        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }

        // Convert subjects object to an array
        const subjectsArray = Object.entries(req.body.subjects.sem1).map(([subject, value]) => ({
            subject,
            internal: Number(value.internal) || 0,
            practical: Number(value.practical) || 0,
            theory: Number(value.theory) || 0,
        }));

        console.log("Formatted Subjects Array:", subjectsArray);

        // Update the student record with subjects
        const updatedStudent = await Student.findOneAndUpdate(
            { generatedId: req.body.generatedId },
            { $set: { subjects: subjectsArray } },
            { new: true, runValidators: true }
        );

        console.log("Updated Student:", updatedStudent);

        res.status(200).json({ message: "Marks entered successfully", student: updatedStudent });

    } catch (error) {
        console.error("Error saving marks:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = { saveMarks };