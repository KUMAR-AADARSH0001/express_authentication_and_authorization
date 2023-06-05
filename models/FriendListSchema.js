const mongoose = require("mongoose");

const FriendListSchema = new mongoose.Schema(
  {
    isblocked: { type: Boolean, default: false },
    userId: { type: String, required: true },
    friendId: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("FriendListSchema", FriendListSchema);
