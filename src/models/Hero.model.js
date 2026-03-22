const mongoose = require("mongoose");

const HeroSchema = new mongoose.Schema({
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
});

module.exports = mongoose.model("Hero", HeroSchema);