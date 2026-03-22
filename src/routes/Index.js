const express = require("express");
const router = express.Router();

const heroRoutes = require("./Hero.router");
const aboutRoutes = require("./About.router");
const adminRoutes = require("./Admin.router");
const projectRoutes = require("./Project.router");
const contactRoutes = require("./Contact.router");
const authMiddleware = require("../middleware/auth");
router.use("/hero", heroRoutes);
router.use("/about", aboutRoutes);
router.use("/admin", adminRoutes);//authMiddleware
router.use("/project", projectRoutes);
router.use("/contact", contactRoutes);



module.exports = router;