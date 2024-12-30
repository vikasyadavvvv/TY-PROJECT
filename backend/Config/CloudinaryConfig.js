const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

// Cloudinary Configuration
cloudinary.config({
  cloud_name:"didomj6t5",
  api_key: 116323148223679,
  api_secret: 'cRHChAZKBc-Ie0kvE1QOeS35UuY',
});

// Multer-Cloudinary Storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "student_uploads", // Folder for Cloudinary files
    resource_type: "auto", // Automatically determine file type (image, video, etc.)
  },
});

const upload = multer({ storage });

module.exports = { cloudinary, upload };
