const express = require("express");
const userRoutes = express.Router();
const { signUP } = require("../controllers/signUP");
const { signIN } = require("../controllers/signIN.js");
const { changePassword } = require("../controllers/changePassword.js");

// ALL ROUTES OF THIS PROJECT
userRoutes.post("/signup", signUP);
userRoutes.post("/signin", signIN);
userRoutes.post("/changepassword", changePassword);

module.exports = userRoutes;
