const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Admin = require("../models/Admin"); // Import the Admin model

dotenv.config(); // Load environment variables

const createAdmin = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected!");

    // Hardcoded admin credentials
    const admin = new Admin({
      username: "clgAdmin",
      password: "clgAdmin95940321#", // This will be hashed automatically
    });

    await admin.save();
    console.log("Admin user created successfully!");
    process.exit(0);
  } catch (err) {
    console.error("Error creating admin user:", err.message);
    process.exit(1);
  }
};

createAdmin();
