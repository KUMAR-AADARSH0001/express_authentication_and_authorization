const userModel = require("../models/UserSchema.js");
const { use } = require("../routes/web.js");

const AdminVerifyManager = async (req, res) => {
  try {
    const userId = req.params.userId;
    const is_verified = req.body.is_verified;
    console.log(verification);
    existUser = await userModel.findOne({ _id: userId });
    console.log(existUser);
    // CHECKING USER IS EXISTING USER OR NOT
    if (!existUser) {
      return res.status(400).json({ message: "User Not Exists" });
    } else {
      const result = await userModel.updateOne(
        { _id: userId },
        { is_verified: is_verified }
      );
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Verification failed. Please try again." });
  }
};

module.exports = { AdminVerifyManager };
