const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },      
  username: { type: String, required: true },   
  link: { type: String, required: true },      
  icon: { type: String, required: true },       
});

module.exports = mongoose.model("Contact", ContactSchema);