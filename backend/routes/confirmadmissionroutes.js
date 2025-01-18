const express = require("express");
const router = express.Router();
const { confirmAdmission, loginStudent } = require("../controllers/confirmadmissioncontroller");

// Route to confirm student's admission
router.post("/confirm/:studentId", confirmAdmission);

// Route to handle student login
router.post("/login", loginStudent);

module.exports = router;
