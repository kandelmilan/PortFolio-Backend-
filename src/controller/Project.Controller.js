const Project = require("../models/Project.model");
const Joi = require("joi");

// Validation schema
const ProjectValidationSchema = Joi.object({
    title: Joi.string().trim().min(3).max(100).required(),
    description: Joi.string().trim().min(10).max(500).required(),
    status: Joi.string().optional(),
    image: Joi.string().uri().optional()
});

// Get all projects
const getProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch (err) {
        res.status(500).json({ message: "Server Error", error: err.message });
    }
};

// Create project
const createProject = async (req, res) => {
    try {
        const { error, value } = ProjectValidationSchema.validate(req.body);
        if (error) return res.status(400).json({ message: error.details[0].message });

        const project = await Project.create(value);
        res.status(201).json(project);
    } catch (err) {
        res.status(500).json({ message: "Server Error", error: err.message });
    }
};

// ✅ DELETE project
const deleteProject = async (req, res) => {
    try {
        const { id } = req.params;

        const project = await Project.findByIdAndDelete(id);

        if (!project) {
            return res.status(404).json({ message: "Project not found" });
        }

        res.status(200).json({ message: "Project deleted successfully" });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error", error: err.message });
    }
};

module.exports = { getProjects, createProject, deleteProject };