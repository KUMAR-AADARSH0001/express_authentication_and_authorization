const mongoose = require("mongoose");

const GroupRoomSchema = mongoose.Schema(
  {
    groupname: { type: String, required: true },
    admin: [],
    memmbers: [],
    messages: [],
  },
  { timestamps: true }
);

module.exports = mongoose.model("MessagesGroupRoom", GroupRoomSchema);
