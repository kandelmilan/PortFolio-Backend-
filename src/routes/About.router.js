const express = require("express");
const router = express.Router();
const { createOrUpdateAbout, getAbout, deleteSkill } = require("../controller/About.controller");

router.get("/", getAbout);
router.post("/", createOrUpdateAbout);
router.delete("/skill/:skillName", deleteSkill);

module.exports = router;