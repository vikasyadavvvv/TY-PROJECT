const express = require("express");
const router = express.Router();
const { updateSubjects,getSubjects } = require("../controllers/subjectcontroller"); // Adjust path as necessary

// Route to update selected subjects for a student
router.post("/updateSubjects", updateSubjects);
router.post("/getSubjects",getSubjects);

module.exports = router;
