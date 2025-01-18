const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const studentLoginSchema = new mongoose.Schema({
  studentId: {
    type: String,
    required: true,
    unique: true, // Ensure each student has a unique ID for login
  },
  password: {
    type: String, // Store hashed password
    required: true,
  },
});

// Hash password before saving to the database
studentLoginSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  try {
    const salt = await bcrypt.genSalt(10); // Create a salt for hashing
    this.password = await bcrypt.hash(this.password, salt); // Hash the password
    next();
  } catch (error) {
    next(error); // Pass error to the next middleware
  }
});

// Method to compare entered password with stored hash
studentLoginSchema.methods.comparePassword = async function (enteredPassword) {
  try {
    return await bcrypt.compare(enteredPassword, this.password); // Compare entered password with hash
  } catch (error) {
    throw new Error("Error comparing passwords");
  }
};

const StudentLogin = mongoose.model("StudentLogin", studentLoginSchema);
module.exports = StudentLogin;
