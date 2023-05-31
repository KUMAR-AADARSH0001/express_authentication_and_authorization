const userModel = require("../models/UserSchema.js");

// GETTING ALL USERS
const GetAllManagers = async (req, res) => {
  try {
    existUsers = await userModel.find({ is_role: "Manager" });
    res
      .status(500)
      .json({ success: true, message: "All Users List :-", user: existUsers });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { GetAllManagers };
