const multer = require('multer');

/**
 * Multer storage configuration
 */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads');
  },
  filename: (req, file, cb) =>{
    cb(null, `${Date.now()}-${file.originalname}`);
  }
})

const upload = multer( {storage: storage});

module.exports = upload