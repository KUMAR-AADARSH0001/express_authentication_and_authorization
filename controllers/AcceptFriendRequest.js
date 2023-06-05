const userModel = require("../models/UserSchema.js");
const FriendRequestSchema = require("../models/FriedRequetSchema.js");
const FriendListSchema = require("../models/FriendListSchema.js");

const AcceptFriendRequest = async (req, res) => {
  try {
    const userId = req.payload._id;
    existUser = await userModel.findById({ _id: userId });
    if (!existUser) {
      return res.status(400).json({ message: "User Not Exists" });
    } else {
      const requestlist = await FriendRequestSchema.find({
        receiverId: userId,
      });
      for (let request = 0; request < requestlist.length; request++) {
        console.log(requestlist[request]);
        const senderId = requestlist[request].senderId;
        console.log(senderId);
        const result = await FriendListSchema.create({
          userId: userId,
          friendId: senderId,
        });
        result.save();
      }
      return res.status(200).json({ message: "Request Accepted..." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Verification failed. Please try again." });
  }
};

module.exports = { AcceptFriendRequest };
