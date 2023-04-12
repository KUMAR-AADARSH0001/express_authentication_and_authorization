const express = require("express");
const userRoutes = express.Router();
const { signUP } = require("../controllers/signUP");
const { signIN } = require("../controllers/signIN.js");
const { changePassword } = require("../controllers/changePassword.js");
const { resetPassword } = require("../controllers/resetPassword.js");

// ALL ROUTES OF THIS PROJECT
userRoutes.post("/signup", signUP);
userRoutes.post("/signin", signIN);
userRoutes.post("/changepassword", changePassword);
userRoutes.post("/forgotpassword", resetPassword);

module.exports = userRoutes;
