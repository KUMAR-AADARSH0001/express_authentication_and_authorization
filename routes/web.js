const express = require("express");
const userRoutes = express.Router();
const { SignUP } = require("../controllers/SignUP.js");
const { SignIN } = require("../controllers/SignIN.js");
const { ChangePassword } = require("../controllers/ChangePassword.js");
const { ResetPassword } = require("../controllers/ResetPassword.js");
const { verify_token } = require("../middlewares/VerifyToken.js");
const { FileUploader } = require("../middlewares/FileUploader.js");
const { FindFile } = require("../controllers/FindFile.js");

// ALL ROUTES OF AUTHENTICATION
userRoutes.post("/signup", SignUP);
userRoutes.post("/signin", SignIN);
userRoutes.post("/changepassword", verify_token, ChangePassword);
userRoutes.post("/forgotpassword", ResetPassword);
userRoutes.post("/uploadfile", FileUploader, FindFile);

module.exports = userRoutes;
