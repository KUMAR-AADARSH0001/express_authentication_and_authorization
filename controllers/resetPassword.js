const userModel = require("../models/userSchema.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "NOTESAPI";

// SIGNIN
const resetPassword = async (req, res) => {
  // GETING EMAIL AND PASSWORD FROM USER INPUT
  const { email, password } = req.body;
  try {
    // CHECKING USER IN USER DATABASE
    const existUser = await userModel.findOne({ email: email });
    // CHECKING USER IS EXISTING USER OR NOT
    if (!existUser) {
      res.status(404).json({ message: "User Not Found" });
    }
    // CREATING HASHPASSWORD TO USER INPUT PASSWORD TO COMPARE FROM DATABASE
    const matchPassword = await bcrypt.compare(password, existUser.password);
    // CHECKING PASSWORD IS SAME AS IN DATABASE
    if (!matchPassword) {
      res.status(400).json({ message: "Invalid Password" });
    }
    // CREATING TOKEN FOR USER TO SINGIN
    const token = jwt.sign(
      { email: existUser.email, id: existUser._id },
      SECRET_KEY
    );
    res.status(201).json({ user: existUser, token: token });
  } catch (error) {
    // IF ANYTHING GOT WRONG IT WILL RETURN
    console.log(error);
    res.status(500).json({ message: "Somthing went wrong" });
  }
};

module.exports = { resetPassword };
