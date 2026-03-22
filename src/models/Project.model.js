// src/models/Project.model.js
const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, default: "In Progress" },
    image: { type: String },
}, { timestamps: true });

module.exports = mongoose.model("Project", projectSchema);