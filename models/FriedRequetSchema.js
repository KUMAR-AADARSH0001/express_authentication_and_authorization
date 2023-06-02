const mongoose = require("mongoose");

const FriendRequestSchema = new mongoose.Schema(
  {
    senderId: { type: String, required: true },
    receiverId: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("FriendRequestSchema", FriendRequestSchema);
