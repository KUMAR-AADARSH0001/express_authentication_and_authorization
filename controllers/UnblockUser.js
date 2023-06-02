const userModel = require("../models/UserSchema.js");

const UnblockUser = async (req, res) => {
  const unblockerId = req.payload._id;
  const unblockedTo = req.params.id;
  try {
    const existUser = await userModel.findOne({ _id: unblockerId });
    const blocklist = existUser.blocklist;
    console.log(blocklist);
    if (!existUser) {
      return res.status(400).json({ message: "User Not Exists" });
    } else {
      const user = blocklist.includes(unblockedTo);
      console.log(user);
      if (user === true) {
        existUser.blocklist.remove(unblockedTo);
        existUser.save();
        return res
          .status(200)
          .json({ message: "User Unblock Successfully..." });
      } else {
        return res.status(200).json({ message: "Also Unblocked..." });
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(200).json({ message: "Internal Server Error" });
  }
};

module.exports = { UnblockUser };
