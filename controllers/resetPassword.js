const userModel = require("../models/userSchema.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "NOTESAPI";

// SIGNIN
const resetPassword = async (req, res) => {
  // GETING EMAIL AND PASSWORD FROM USER INPUT
  const { email, password1, password2 } = req.body;
  try {
    // CHECKING USER IN USER DATABASE
    const existUser = await userModel.findOne({ email: email });
    // CHECKING USER IS EXISTING USER OR NOT
    if (!existUser) {
      res.status(404).json({ message: "User Not Found" });
    }
    // CREATING HASHPASSWORD TO USER INPUT PASSWORD TO COMPARE FROM DATABASE
    if (password1 === password2) {
      // CREATING HASHPASSWORD TO USER INPUT PASSWORD TO SAVE TO DATABASE
      const hashPassword = await bcrypt.hash(password2, 12);
      // CREATING USER FROM THEIR GIVING DETAILS
      const result = await userModel.updateOne({
        email: email,
        password: hashPassword,
      });
      // CREATING TOKEN FOR USER TO RESET PASSWORD
      const token = jwt.sign(
        { email: result.email, id: result._id },
        SECRET_KEY
      );
      res.status(201).json({
        user: result,
        token: token,
        message: "Password Reset Successfully...",
      });
    }
    res.status(201).json({ user: existUser, token: token });
  } catch (error) {
    // IF ANYTHING GOT WRONG IT WILL RETURN
    console.log(error);
    res.status(500).json({ message: "Somthing went wrong" });
  }
};

module.exports = { resetPassword };
