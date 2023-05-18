const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema(
  {
    sendBy: { type: String, required: true },
    sendTo: { type: String, required: true },
    messages: [],
  },
  { timestamps: true }
);

module.exports = mongoose.model("MessagesRoom", RoomSchema);
