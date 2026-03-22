const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact.model");

// Get all contacts
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// Add a new contact
router.post("/", async (req, res) => {
  const { name, username, link, icon } = req.body; // removed bg
  if (!name || !username || !link || !icon)
    return res.status(400).json({ message: "All fields required" });

  try {
    const contact = new Contact({ name, username, link, icon }); // removed bg
    await contact.save();
    res.status(201).json(contact);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// Update a contact
router.put("/:id", async (req, res) => {
  const { name, username, link, icon } = req.body; // removed bg
  try {
    const updated = await Contact.findByIdAndUpdate(
      req.params.id,
      { name, username, link, icon }, // removed bg
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// Delete a contact
router.delete("/:id", async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: "Contact deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;