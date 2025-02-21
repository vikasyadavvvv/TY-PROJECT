const express = require('express');
const router = express.Router();
const { saveMarks } = require('../controllers/updateresultcontroller'); // Ensure correct import

router.post('/enter-marks', saveMarks); // Use correct function name

module.exports = router;
