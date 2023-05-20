const userModel = require("../models/UserSchema.js");
const bcrypt = require("bcrypt");

// CHANGE PASSWORD
const ChangePassword = async (req, res) => {
  // GETING OLDPASSWORD AND NEWPASSWORD FROM USER INPUT
  const { oldPassword, newPassword } = req.body;
  try {
    const email = req.payload.email;
    const existUser = await userModel.findOne({ email: email });
    // CHECKING USER IS EXISTING USER OR NOT
    if (!existUser) {
      res.status(404).json({ message: "User Not Found" });
    }
    // COMPARING HASHPASSWORD TO USER INPUT PASSWORD TO COMPARE FROM DATABASE
    const matchPassword = await bcrypt.compare(oldPassword, existUser.password);
    // CHECKING PASSWORD IS SAME AS IN DATABASE
    if (!matchPassword) {
      res.status(400).json({ message: "Password Not Match" });
    } else {
      // CREATING HASHPASSWORD TO USER INPUT PASSWORD TO SAVE TO DATABASE
      const hashPassword = await bcrypt.hash(newPassword, 12);
      // CREATING USER FROM THEIR GIVING DETAILS
      const result = await userModel.updateOne({
        password: hashPassword,
      });
      res.status(201).json({
        success: true,
        message: "Password Changed Successfully...",
      });
    }
  } catch (error) {
    // IF ANYTHING GOT WRONG IT WILL RETURN
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = { ChangePassword };
