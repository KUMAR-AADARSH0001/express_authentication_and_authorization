const userModel = require("../models/userSchema.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "NOTESAPI";

// CHANGE PASSWORD
const ChangePassword = async (req, res) => {
  // GETING EMAIL,OLDPASSWORD AND NEWPASSWORD FROM USER INPUT
  const { email, oldPassword, newPassword } = req.body;
  try {
    // CHECKING USER IN USER DATABASE
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
    }
    // CREATING HASHPASSWORD TO USER INPUT PASSWORD TO SAVE TO DATABASE
    const hashPassword = await bcrypt.hash(newPassword, 12);
    console.log("hashPasswordaskjfhakjl", hashPassword);
    // CREATING USER FROM THEIR GIVING DETAILS
    const result = await userModel.updateOne({
      email: email,
      password: hashPassword,
    });
    console.log("sdfakhgsaf", result);
    // CREATING TOKEN FOR USER TO SINGUP
    const token = jwt.sign({ email: result.email, id: result._id }, SECRET_KEY);
    res.status(201).json({
      user: result,
      token: token,
      message: "User Updated Successfully...",
    });
    res.status(201).json({ user: existUser, token: token });
  } catch (error) {
    // IF ANYTHING GOT WRONG IT WILL RETURN
    res.status(500).json({ message: "Somthing went wrong" });
  }
};

module.exports = { ChangePassword };
