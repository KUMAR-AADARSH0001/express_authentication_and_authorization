const userModel = require("../models/UserSchema.js");
const FriendRequestSchema = require("../models/FriedRequetSchema.js");

const SendFriendRequest = async (req, res) => {
  const senderId = req.payload._id;
  console.log(senderId);
  const receiverId = req.params.id;
  try {
    const existUser = await userModel.findById({ _id: receiverId });
    if (!existUser) {
      return res.status(400).json({ message: "User Not Exists" });
    } else {
      const request = await FriendRequestSchema.findOne({
        senderId: senderId,
        receiverId: receiverId,
      });
      if (!request) {
        const result = await FriendRequestSchema.create({
          senderId: senderId,
          receiverId: receiverId,
        });
        result.save();
        return res.status(200).json({ message: "Friend Request Sent" });
      } else {
        return res
          .status(500)
          .json({ message: "Allready Friend Request Sent" });
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { SendFriendRequest };
