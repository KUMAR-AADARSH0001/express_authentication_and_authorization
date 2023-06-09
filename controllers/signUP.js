const userModel = require("../models/UserSchema.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY =
  "$MY-%-FISRT-%-PROJECT-%-OF-%-LEARNING-%-ABOUT-%-APIs&EXPRESS$";

// SIGNUP
const SignUP = async (req, res) => {
  // GETTING USERNAME, EMAIL, PASSWORD FROM BODY
  const { firstname, lastname, email, password, is_role } = req.body;
  try {
    existUser = await userModel.findOne({ email: req.body.email });
    // CHECKING USER IS EXISTING USER OR NOT
    if (existUser) {
      return res.status(400).json({ message: "User Already Exists" });
    }
    // CREATING HASHPASSWORD TO USER INPUT PASSWORD TO SAVE TO DATABASE
    const hashPassword = await bcrypt.hash(password, 12);
    // CREATING USER FROM THEIR GIVING DETAILS
    const result = await userModel.create({
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: hashPassword,
      is_role: is_role,
    });
    // CREATING TOKEN FOR USER TO SINGUP
    const token = jwt.sign(
      { id: result._id, email: result.email, is_role: result.is_role },
      SECRET_KEY
    );
    res.status(201).json({
      user: result,
      token: token,
      message: "User Creted Successfully...",
    });
  } catch (error) {
    // IF ANYTHING GOT WRONG IT WILL RETURN
    res.status(500).json({ message: "Somthing went wrong" });
  }
};

module.exports = { SignUP };
