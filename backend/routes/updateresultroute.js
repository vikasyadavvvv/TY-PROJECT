const express = require("express");
const router = express.Router();
const resultController = require("../controllers/updateresultcontroller");

router.post("/saveOrUpdate", resultController.saveOrUpdateResults);
router.get("/:generatedId", resultController.getStudentResults);

module.exports = router;
