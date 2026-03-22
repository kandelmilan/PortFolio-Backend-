const About = require("../models/About.model");
const Joi = require("joi");

// Validation schema
const AboutValidationSchema = Joi.object({
  description: Joi.string().trim().min(10).max(500).required(),
  skills: Joi.array().items(
    Joi.object({
      name: Joi.string().required(),
      icon: Joi.string().required(),
    })
  ),
});

// Create or update About (only one document)
const createOrUpdateAbout = async (req, res) => {
  try {
    const { description, skills } = req.body;

    // Filter out empty skill objects
    const validSkills = (skills || []).filter(s => s.name?.trim() && s.icon?.trim());

    // Validate
    const { error } = AboutValidationSchema.validate({ description, skills: validSkills }, { abortEarly: false });
    if (error) {
      return res.status(400).json({ errors: error.details.map(e => e.message) });
    }

    // Update existing About document, or create if none exists
    const about = await About.findOneAndUpdate(
      {},
      { description, skills: validSkills },
      { upsert: true, new: true }
    );

    return res.status(200).json(about);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server Error", error: err.message });
  }
};

// Get About
const getAbout = async (req, res) => {
  try {
    const about = await About.findOne();
    return res.status(200).json(about || { description: "", skills: [] });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server Error", error: err.message });
  }
};

// Delete skill
const deleteSkill = async (req, res) => {
  try {
    const { skillName } = req.params;
    const about = await About.findOne();
    if (!about) return res.status(404).json({ message: "About not found" });

    about.skills = about.skills.filter(s => s.name !== skillName);
    await about.save();

    return res.status(200).json({ skills: about.skills });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server Error", error: err.message });
  }
};

module.exports = { createOrUpdateAbout, getAbout, deleteSkill };