const userModel = require("../models/UserSchema.js");

const UpdateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    existUser = await userModel.findOne({ _id: userId });
    // CHECKING USER IS EXISTING USER OR NOT
    if (!existUser) {
      return res.status(400).json({ message: "User Not Exists" });
    } else {
      const is_verified = "true";
      const result = await userModel.updateOne(
        { _id: userId },
        { is_verified: is_verified }
      );
      res.status(201).json({
        success: true,
        message: "Admin Verified You For Manager...",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Verification failed. Please try again." });
  }
};

module.exports = { UpdateUser };
