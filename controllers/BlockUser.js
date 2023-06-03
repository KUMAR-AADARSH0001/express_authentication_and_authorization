const userModel = require("../models/UserSchema.js");
const BlockUserSchema = require("../models/BlockSchema.js");

const BlockUser = async (req, res) => {
  const blockerId = req.payload._id;
  const blockedTo = req.params.id;
  try {
    const existUser = await userModel.findOne({ _id: blockedTo });
    console.log(existUser);
    if (!existUser) {
      return res.status(400).json({ message: "User Not Exists" });
    } else {
      const userblocked = await BlockUserSchema.findOne({
        blockerId: blockerId,
        blockedTo: blockedTo,
      });
      if (!userblocked) {
        const result = await BlockUserSchema.create({
          blockerId: blockerId,
          blockedTo: blockedTo,
        });
        result.save();
        return res
          .status(200)
          .json({ success: true, message: "User Blocked Successfully..." });
      } else {
        console.log(userblocked);
        return res
          .status(200)
          .json({ success: true, message: `User Unblocked Successfully...` });
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(200).json({ message: "Internal Server Error" });
  }
};

module.exports = { BlockUser };
