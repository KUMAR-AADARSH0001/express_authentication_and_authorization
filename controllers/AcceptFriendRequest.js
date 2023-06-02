const userModel = require("../models/UserSchema.js");
const FriendRequestSchema = require("../models/FriedRequetSchema.js");

const AcceptFriendRequest = async (req, res) => {
  try {
    const userId = req.payload._id;
    console.log(userId);
    existUser = await userModel.findById({ _id: userId });
    console.log(existUser);
    const friendlist = existUser.friendlist;
    console.log(friendlist);
    // CHECKING USER IS EXISTING USER OR NOT
    if (!existUser) {
      return res.status(400).json({ message: "User Not Exists" });
    } else {
      const request = await FriendRequestSchema.find();
      console.log(request);
      // for (let i = 0; i < request.length; i++) {
      //   console.log(request[i]);
      //   // existUser.friendlist.push(request[i]);
      //   console.log("pushed alll");
      // }
      return res.status(200).json({ message: "Request Accepted..." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Verification failed. Please try again." });
  }
};

module.exports = { AcceptFriendRequest };
