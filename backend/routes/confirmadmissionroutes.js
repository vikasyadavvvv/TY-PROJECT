const express = require("express");
const router = express.Router();
const { confirmAdmission, rejectAdmission, loginStudent } = require("../controllers/confirmadmissioncontroller");

// Route to confirm student's admission
router.post("/confirm/:studentId", confirmAdmission);

// Route to reject student's admission
router.delete("/reject/:studentId", rejectAdmission);

// Route to handle student login
router.post("/login", loginStudent);

module.exports = router;
