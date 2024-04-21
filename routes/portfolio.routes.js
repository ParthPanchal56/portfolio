const express = require("express");
const router = express.Router();

// Import your controller modules here
const authController = require("../controllers/portfolio/home.controller");
// Define admin routes
router.get("/", authController.getHomePage);

module.exports = router;
