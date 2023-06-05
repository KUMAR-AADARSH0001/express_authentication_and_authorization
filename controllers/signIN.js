const userModel = require("../models/UserSchema.js");
const ReportSchema = require("../models/ReportSchema.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "NOTESAPI";

// SIGNIN
const SignIN = async (req, res) => {
  // GETTING EMAIL AND PASSWORD FROM USER INPUT
  const { email, password } = req.body;
  try {
    // CHECKING USER IN USER DATABASE
    const existUser = await userModel.findOne({ email: email });
    const existUserId = existUser._id.toString();
    // CHECKING USER IS EXISTING USER OR NOT
    if (!existUser) {
      res.status(404).json({ message: "User Not Found" });
    }
    const userreported = await ReportSchema.find({
      reportedTo: existUserId,
    });
    if (userreported.length >= 2) {
      res.status(500).json({
        message:
          "Your Id Reported By 2 or More Users So you Cant Login This Time",
      });
    } else {
      // COMPARING HASHPASSWORD TO USER INPUT PASSWORD TO COMPARE FROM DATABASE
      const matchPassword = await bcrypt.compare(password, existUser.password);
      // CHECKING PASSWORD IS SAME AS IN DATABASE
      if (!matchPassword) {
        res.status(400).json({ message: "Invalid Password" });
      }
      // CREATING TOKEN FOR USER TO SINGIN
      const token = jwt.sign({ email: email, _id: existUser._id }, SECRET_KEY);
      res.status(201).json({
        user: existUser,
        token: token,
        message: "User Login Successfully...",
      });
    }
  } catch (error) {
    console.log(error);
    // IF ANYTHING GOT WRONG IT WILL RETURN
    res.status(500).json({ message: "Somthing went wrong" });
  }
};

module.exports = { SignIN };
