const userModel = require("../models/UserSchema.js");

const BlockUser = async (req, res) => {
  const blockerId = req.payload._id;
  const blockedTo = req.params.id;
  try {
    const existUser = await userModel.findOne({ _id: blockerId });
    const blocklist = existUser.blocklist;
    console.log(blocklist);
    if (!existUser) {
      return res.status(400).json({ message: "User Not Exists" });
    } else {
      const user = blocklist.includes(blockedTo);
      if (user !== true) {
        existUser.blocklist.push(blockedTo);
        existUser.save();
        return res.status(200).json({ message: "User Blocked..." });
      } else {
        return res
          .status(200)
          .json({ message: `${blockedTo} Also Blocked...` });
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(200).json({ message: "Internal Server Error" });
  }
};

module.exports = { BlockUser };
