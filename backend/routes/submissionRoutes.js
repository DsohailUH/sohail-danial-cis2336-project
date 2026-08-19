const express = require("express");
const router = express.Router();

const submissionController = require("../controllers/submissionController");

// Handle artwork submission POST request
router.post("/submit-artwork", submissionController.processSubmission);

module.exports = router;