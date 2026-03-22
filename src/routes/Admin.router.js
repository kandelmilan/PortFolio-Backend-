const express = require("express");
const router = express.Router();

const { loginAdmin } = require("../controller/Admin.Controller");

// Admin login
router.post("/login", loginAdmin);


module.exports = router;