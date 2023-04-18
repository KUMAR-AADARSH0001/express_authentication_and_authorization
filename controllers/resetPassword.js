const userModel = require("../models/UserSchema.js");
const bcrypt = require("bcrypt");

// SIGNIN
const ResetPassword = async (req, res) => {
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
        password: hashPassword,
      });
      res.status(201).json({
        success: true,
        message: "Password Reset Successfully...",
      });
    }
  } catch (error) {
    // IF ANYTHING GOT WRONG IT WILL RETURN
    res.status(500).json({ message: "Somthing went wrong" });
  }
};

module.exports = { ResetPassword };
