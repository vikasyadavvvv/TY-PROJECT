const express = require("express");
const bcrypt = require("bcryptjs"); // For password hashing
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin"); // Admin model
const router = express.Router();

// Environment variable for JWT secret
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key";

// Admin Login Route
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if admin exists in the database
    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // Verify the password
    const isPasswordMatch = await bcrypt.compare(password, admin.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // Generate a JWT token
    const token = jwt.sign({ id: admin._id }, JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    console.error("Error during admin login:", err.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
