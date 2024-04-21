const express = require("express");
const router = express.Router();

// Import your controller modules here
const authController = require("../controllers/admin/auth.controller");
// Define admin routes
router.get("/login", authController.getLoginPage);

module.exports = router;
