const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const newsRoutes = require("./routes/newsRoutes"); // Import news routes
const studentRoutes = require("./routes/studentRoutes");
const adminRoutes = require("./routes/adminRoutes"); // Example: Add admin route

// Load environment variables from .env file
dotenv.config();

// Initialize the app
const app = express();

// Middleware setup
app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse JSON data
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data

// MongoDB connection function
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected successfully");
  } catch (err) {
    console.error("❌ Error connecting to MongoDB:", err.message);
    process.exit(1); // Exit process with failure
  }
};

// Add routes to the app
app.use("/api/news", newsRoutes);  // Dedicated route for managing news
app.use("/api/students", studentRoutes); // Student-related routes
app.use("/api/admin", adminRoutes);  // Admin route setup


// Root endpoint for health check or basic info
app.get("/", (req, res) => {
  res.status(200).send("College Website Backend is running!");
});

// Handle 404 errors for undefined routes
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Centralized error handling middleware
app.use((err, req, res, next) => {
  console.error("❌ Error:", err.message);
  res.status(500).json({ message: "Internal server error" });
});

// Start the server after connecting to MongoDB
const PORT = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
  });
});
