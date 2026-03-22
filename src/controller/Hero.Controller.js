const Hero = require("../models/Hero.model");

// Get Hero
const getHero = async (req, res) => {
  try {
    const hero = await Hero.findOne(); // only one hero doc
    res.status(200).json(hero || {});
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Create or Update Hero
const createOrUpdateHero = async (req, res) => {
  try {
    const { title, subtitle } = req.body;
    let hero = await Hero.findOne();
    if (hero) {
      hero.title = title;
      hero.subtitle = subtitle;
      await hero.save();
    } else {
      hero = await Hero.create({ title, subtitle });
    }
    res.status(200).json(hero);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

module.exports = { getHero, createOrUpdateHero };