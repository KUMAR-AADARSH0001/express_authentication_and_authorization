const mongoose = require("mongoose");

const FriendRequestSchema = new mongoose.Schema(
  {
    senderId: { type: String, required: true },
    receiverId: { type: String, required: true },
  },
  { timestamps: true }
);

const FriendListSchema = new mongoose.Schema(
  {
    isblocked: { type: Boolean, default: false },
    userId: { type: String, required: true },
    friendId: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("FriendRequestSchema", FriendRequestSchema);
module.exports = mongoose.model("FriendListSchema", FriendListSchema);
