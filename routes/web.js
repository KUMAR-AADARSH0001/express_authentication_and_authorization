const express = require("express");
const userRoutes = express.Router();
const { SignUP } = require("../controllers/SignUP.js");
const { SignIN } = require("../controllers/SignIN.js");
const { ChangePassword } = require("../controllers/ChangePassword.js");
const { ResetPassword } = require("../controllers/ResetPassword.js");

// ALL ROUTES OF AUTHENTICATION
userRoutes.post("/signup", SignUP);
userRoutes.post("/signin", SignIN);
userRoutes.post("/changepassword", ChangePassword);
userRoutes.post("/forgotpassword", ResetPassword);

module.exports = { userRoutes };
