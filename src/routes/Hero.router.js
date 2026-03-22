const express = require("express");
const router = express.Router();
const { getHero, createOrUpdateHero } = require("../controller/Hero.Controller");

router.get("/", getHero);
router.post("/", createOrUpdateHero);

module.exports = router;