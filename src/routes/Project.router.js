const express = require("express");
const router = express.Router();
const { getProjects, createProject, deleteProject } = require("../controller/Project.Controller");

// Get all projects
router.get("/", getProjects);

// Create new project
router.post("/", createProject);

// DELETE ROUTE
router.delete("/:id", deleteProject);

module.exports = router;