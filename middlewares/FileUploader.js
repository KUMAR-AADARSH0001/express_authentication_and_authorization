const multer = require("multer");

const FileUploader = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      // THIS IS USED FOR DESTINATION WHERE WOULD YOU WANT TO SAVE
      cb(null, "uploads");
    },
    filename: (req, file, cb) => {
      // THIS IS USED FOR CHANGING YOUR FILE INFO
      cb(null, Date.now() + file.originalname);
      console.log("object file uploading done...");
    },
  }),
  //  TAKING KEY FROM PSTMAN WHERE FILE COME
}).single("user_file");

module.exports = { FileUploader };
