const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },       // e.g., "Facebook"
  username: { type: String, required: true },   // e.g., "Kandel Milan"
  link: { type: String, required: true },       // e.g., "https://facebook.com"
  icon: { type: String, required: true },       // e.g., "FaFacebookF"
  bg: { type: String, required: true },         // e.g., "from-blue-600 to-blue-800"
});

module.exports = mongoose.model("Contact", ContactSchema);