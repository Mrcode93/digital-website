const express = require("express");
const router = express.Router();
const projectController = require("../controllers/porjectController"); // Corrected the typo here

router.post("/", projectController.createProject);
// get all projects
router.get("/", projectController.getAllProjects);

module.exports = router;
