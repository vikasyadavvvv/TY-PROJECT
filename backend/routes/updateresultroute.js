const express = require("express");
const router = express.Router();
const resultController = require("../controllers/updateresultcontroller");
const { updateMarks } = require("../controllers/updateresultcontroller");


router.post("/saveOrUpdate", resultController.saveOrUpdateResults);
router.get("/:generatedId", resultController.getStudentResults);
router.patch("/updateMarks/:generatedId",updateMarks );


module.exports = router;
