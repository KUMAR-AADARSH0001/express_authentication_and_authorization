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
      return res.status(404).json({ message: "User Not Found" });
    }
    // CREATING HASHPASSWORD TO USER INPUT PASSWORD TO COMPARE FROM DATABASE

    if (password1 === password2) {
      // CREATING HASHPASSWORD TO USER INPUT PASSWORD TO SAVE TO DATABASE

      const hashPassword = await bcrypt.hash(password2, 12);
      const result = await userModel.updateOne(
        { email: email }, // Filter to identify the user
        { password: hashPassword } // Updated password field
      );
      console.log(result, "result");
      res.status(201).json({
        success: true,
        message: "Password Reset Successfully...",
      });
    } else {
      return res.status(400).json({ message: "Passwords do not match" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};

module.exports = { ResetPassword };
