const multer = require('multer');
const path = require('path');

// Set up multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');  // Directory where files will be stored temporarily
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);  // Unique filename
  },
});

const fileFilter = (req, file, cb) => {
  // Allow only images
  const allowedFileTypes = /jpeg|jpg|png|gif/;
  const isValid = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());
  if (isValid) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type!'), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
}).fields([
  { name: 'passportPhoto', maxCount: 1 },
  { name: 'twelfthMarksheet', maxCount: 1 },
  { name: 'aadharCard', maxCount: 1 },
]);

module.exports = upload;
