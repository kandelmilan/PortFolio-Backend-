const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
    name: String,
    icon: String,
});

const aboutSchema = new mongoose.Schema({
    description: String,
    skills: [skillSchema],
});

module.exports = mongoose.model("About", aboutSchema);